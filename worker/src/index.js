// "Ask AI" backend for aniketwagde.com.
//
// A single Cloudflare Worker that fronts the Anthropic API: it hides the API
// key, gates abuse (Turnstile + per-IP and global rate limits + size caps),
// grounds Claude in the site's knowledge base, and logs every interaction to a
// Notion database. The static site (GitHub Pages) calls POST /ask.
//
// Bindings (wrangler.toml):
//   RL                  KV namespace for rate-limit counters
// Secrets (wrangler secret put):
//   ANTHROPIC_API_KEY   Anthropic API key (console.anthropic.com)
//   TURNSTILE_SECRET    Cloudflare Turnstile secret key
//   NOTION_TOKEN        Notion integration token (shared with the history DB)
//   NOTION_HISTORY_DB_ID  Target Notion database id
// Vars (wrangler.toml [vars]) are read with sensible fallbacks below.

const ANTHROPIC_URL = 'https://api.anthropic.com/v1/messages';
const TURNSTILE_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const NOTION_URL = 'https://api.notion.com/v1/pages';

const num = (v, d) => (v === undefined || v === '' ? d : Number(v));

function cfg(env) {
  return {
    origins: (env.ALLOWED_ORIGINS ||
      'https://aniketwagde.com,https://www.aniketwagde.com,https://swagget.github.io')
      .split(',').map((s) => s.trim()).filter(Boolean),
    kbUrl: env.KB_URL || 'https://aniketwagde.com/assets/data/knowledge-base.json',
    model: env.MODEL || 'claude-sonnet-4-6',
    maxTokens: num(env.MAX_TOKENS, 1024),
    ipLimit: num(env.IP_LIMIT, 5),
    ipWindow: num(env.IP_WINDOW_SECONDS, 3600),
    dailyCap: num(env.DAILY_CAP, 200),
    maxQuestion: num(env.MAX_QUESTION_CHARS, 2000),
    maxFileBytes: num(env.MAX_FILE_BYTES, 5 * 1024 * 1024),
    dev: env.DEV === 'true',
  };
}

function corsHeaders(origin, allowed) {
  const ok = origin && allowed.includes(origin);
  return {
    'Access-Control-Allow-Origin': ok ? origin : allowed[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin',
  };
}

const json = (body, status, headers) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...headers },
  });

async function verifyTurnstile(token, secret, ip) {
  if (!token) return false;
  const form = new FormData();
  form.append('secret', secret);
  form.append('response', token);
  if (ip) form.append('remoteip', ip);
  try {
    const res = await fetch(TURNSTILE_URL, { method: 'POST', body: form });
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

// KV read-modify-write counter. Returns the count *after* this hit, or null if
// the limit was already reached (caller should reject without incrementing).
async function bump(kv, key, limit, ttl) {
  const cur = Number((await kv.get(key)) || 0);
  if (cur >= limit) return null;
  const next = cur + 1;
  await kv.put(key, String(next), { expirationTtl: ttl });
  return next;
}

// Fetch the knowledge base, cached at the edge to avoid hammering the site.
async function getKnowledgeBase(kbUrl) {
  const cache = caches.default;
  const cacheKey = new Request(kbUrl, { cf: { cacheTtl: 3600 } });
  let res = await cache.match(cacheKey);
  if (!res) {
    res = await fetch(kbUrl, { cf: { cacheTtl: 3600, cacheEverything: true } });
    if (res.ok) {
      const cloned = new Response(res.body, res);
      cloned.headers.set('Cache-Control', 'max-age=3600');
      await cache.put(cacheKey, cloned.clone());
      res = cloned;
    }
  }
  if (!res.ok) throw new Error(`knowledge base fetch failed: ${res.status}`);
  return res.json();
}

function systemPrompt(kb) {
  const name = kb?.profile?.name || 'the site owner';
  const persona =
    `You are an assistant embedded on the personal website of ${name}. ` +
    `Below is ${name}'s complete profile: bio, CV, projects, and publications. ` +
    `Answer questions using ONLY this information. Be concise and specific, and cite ` +
    `concrete projects or papers by name. If something isn't covered in the profile, ` +
    `say so briefly rather than guessing. Never invent facts. Refer to ${name} in the third person.`;
  return [
    { type: 'text', text: persona },
    // Large, stable block -> mark for prompt caching so repeat calls are cheap.
    { type: 'text', text: 'PROFILE:\n' + JSON.stringify(kb), cache_control: { type: 'ephemeral' } },
  ];
}

function buildUserContent(mode, name, { text, fileText, filePdfB64 }) {
  if (mode === 'fit') {
    const instr =
      `A recruiter shared the following job description. Make a concise, honest case for why ` +
      `${name} is a strong fit: map specific projects, publications, skills, and experience to the ` +
      `role's requirements, using bullet points. Briefly and honestly note any genuine gaps. ` +
      `End with a one-sentence overall verdict.`;
    if (filePdfB64) {
      return [
        { type: 'document', source: { type: 'base64', media_type: 'application/pdf', data: filePdfB64 } },
        { type: 'text', text: instr + (text ? `\n\nRecruiter notes: ${text}` : '') },
      ];
    }
    const jd = fileText || text || '';
    return `${instr}\n\nJOB DESCRIPTION:\n${jd}`;
  }
  // question mode
  return text;
}

// Notion rich_text values cap at 2000 chars per text object; chunk long strings.
function richText(str) {
  const s = String(str || '');
  if (!s) return [{ text: { content: '' } }];
  const out = [];
  for (let i = 0; i < s.length && out.length < 50; i += 2000) {
    out.push({ text: { content: s.slice(i, i + 2000) } });
  }
  return out;
}

async function logToNotion(env, page) {
  if (!env.NOTION_TOKEN || !env.NOTION_HISTORY_DB_ID) return;
  const props = {
    Title: { title: richText((page.input || '').slice(0, 80) || page.mode) },
    Mode: { select: { name: page.mode === 'fit' ? 'Fit' : 'Question' } },
    Input: { rich_text: richText(page.input) },
    Reply: { rich_text: richText(page.reply) },
    Country: { rich_text: richText(page.country) },
    Model: { rich_text: richText(page.model) },
    Tokens: { number: page.tokens ?? null },
    Timestamp: { date: { start: new Date().toISOString() } },
  };
  try {
    const res = await fetch(NOTION_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ parent: { database_id: env.NOTION_HISTORY_DB_ID }, properties: props }),
    });
    if (!res.ok) console.error('notion log failed', res.status, await res.text());
  } catch (e) {
    console.error('notion log error', e.message);
  }
}

async function handleAsk(request, env, ctx, c) {
  const ip = request.headers.get('CF-Connecting-IP') || '0.0.0.0';
  const country = request.headers.get('CF-IPCountry') || '';

  let body;
  try { body = await request.json(); } catch { return json({ error: 'Invalid JSON.' }, 400); }
  const { mode, text, file, turnstileToken } = body || {};

  if (mode !== 'question' && mode !== 'fit') return json({ error: 'Invalid mode.' }, 400);

  // 1. Turnstile (skipped only in explicit dev mode).
  if (!c.dev) {
    const ok = await verifyTurnstile(turnstileToken, env.TURNSTILE_SECRET, ip);
    if (!ok) return json({ error: 'Verification failed. Please retry.' }, 403);
  }

  // 2. Rate limits: per-IP window, then global daily cap.
  const today = new Date().toISOString().slice(0, 10);
  const ipCount = await bump(env.RL, `ip:${ip}`, c.ipLimit, c.ipWindow);
  if (ipCount === null)
    return json({ error: `Rate limit reached (${c.ipLimit}/hour). Try again later.` }, 429);
  const globalCount = await bump(env.RL, `global:${today}`, c.dailyCap, 90000);
  if (globalCount === null)
    return json({ error: 'The assistant is resting for today — daily limit reached.' }, 429);

  // 3. Validate input + decode any file.
  let fileText, filePdfB64;
  if (mode === 'question') {
    if (!text || !text.trim()) return json({ error: 'Please enter a question.' }, 400);
    if (text.length > c.maxQuestion)
      return json({ error: `Question too long (max ${c.maxQuestion} chars).` }, 400);
  } else {
    if (file && file.dataBase64) {
      const bytes = Math.floor(file.dataBase64.length * 0.75);
      if (bytes > c.maxFileBytes)
        return json({ error: `File too large (max ${(c.maxFileBytes / 1048576).toFixed(0)} MB).` }, 400);
      const type = file.type || '';
      if (type === 'application/pdf' || /\.pdf$/i.test(file.name || '')) {
        filePdfB64 = file.dataBase64;
      } else if (type === 'text/plain' || /\.(txt|md)$/i.test(file.name || '')) {
        try { fileText = atob(file.dataBase64); } catch { return json({ error: 'Could not read file.' }, 400); }
      } else {
        return json({ error: 'Only PDF or TXT files are supported.' }, 400);
      }
    } else if (!text || !text.trim()) {
      return json({ error: 'Upload a job description (PDF/TXT) or paste it as text.' }, 400);
    }
    if (text && text.length > c.maxQuestion * 8)
      return json({ error: 'Pasted text is too long.' }, 400);
  }

  // 4. Knowledge base + 5. Anthropic call.
  let kb;
  try { kb = await getKnowledgeBase(c.kbUrl); }
  catch (e) { console.error(e.message); return json({ error: 'Profile data unavailable. Try later.' }, 502); }
  const name = kb?.profile?.name || 'the site owner';

  const anthropicReq = {
    model: c.model,
    max_tokens: c.maxTokens,
    system: systemPrompt(kb),
    messages: [{ role: 'user', content: buildUserContent(mode, name, { text, fileText, filePdfB64 }) }],
  };

  let reply, tokens;
  try {
    const res = await fetch(ANTHROPIC_URL, {
      method: 'POST',
      headers: {
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(anthropicReq),
    });
    const data = await res.json();
    if (!res.ok) {
      console.error('anthropic error', res.status, JSON.stringify(data));
      return json({ error: 'The assistant had trouble responding. Please retry.' }, 502);
    }
    reply = (data.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('\n').trim();
    const u = data.usage || {};
    tokens = (u.input_tokens || 0) + (u.output_tokens || 0);
  } catch (e) {
    console.error('anthropic fetch failed', e.message);
    return json({ error: 'The assistant is unreachable right now.' }, 502);
  }

  // 7. Log asynchronously so it never delays the response.
  const inputForLog = mode === 'fit'
    ? `[JD${file?.name ? ': ' + file.name : ''}]${text ? ' notes: ' + text : ''}${fileText ? '\n' + fileText : ''}`
    : text;
  ctx.waitUntil(logToNotion(env, { mode, input: inputForLog, reply, country, model: c.model, tokens }));

  return json({ reply }, 200, corsHeaders(request.headers.get('Origin'), c.origins));
}

export default {
  async fetch(request, env, ctx) {
    const c = cfg(env);
    const origin = request.headers.get('Origin');
    const cors = corsHeaders(origin, c.origins);

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });

    const url = new URL(request.url);
    if (request.method === 'GET' && url.pathname === '/') return json({ ok: true }, 200, cors);
    if (request.method !== 'POST' || url.pathname !== '/ask')
      return json({ error: 'Not found.' }, 404, cors);

    const res = await handleAsk(request, env, ctx, c);
    // Ensure CORS headers on every /ask response.
    for (const [k, v] of Object.entries(cors)) res.headers.set(k, v);
    return res;
  },
};
