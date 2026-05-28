import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

// Aggregates the site's profile content (projects, publications, CV, bio) into a
// single JSON the "Ask AI" Cloudflare Worker fetches at runtime and injects into
// the Claude system prompt. Run after the notion sync so freshly-synced content
// is included. No external deps — the front matter here is simple enough to parse
// by hand.

const ROOT = path.resolve('..');
const SITE_URL = process.env.SITE_URL || 'https://aniketwagde.com';
const OUT = path.join(ROOT, 'assets', 'data', 'knowledge-base.json');

// Minimal front-matter splitter. Returns { data, body }.
function splitFrontMatter(raw) {
  if (!raw.startsWith('---')) return { data: {}, body: raw };
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return { data: {}, body: raw };
  const fm = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).replace(/^\s*\n/, '');
  const data = {};
  for (const line of fm.split('\n')) {
    const m = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (!m) continue; // skip nested/indented keys (e.g. header: teaser)
    let val = m[2].trim();
    if (!val || val.startsWith('#')) continue;
    // Strip a trailing inline comment only when value isn't quoted.
    if (!/^["']/.test(val)) val = val.replace(/\s+#.*$/, '').trim();
    // Unwrap matching quotes.
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      try { val = JSON.parse(val.replace(/^'(.*)'$/, '"$1"')); } catch { val = val.slice(1, -1); }
    }
    data[m[1]] = val;
  }
  return { data, body: body.trim() };
}

// Collapse markdown to readable plain-ish text to keep the corpus compact.
function clean(md) {
  return md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')           // drop images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')         // links -> text
    .replace(/[*_`>#]/g, '')                          // markdown markers
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const absUrl = (permalink) =>
  permalink ? new URL(permalink, SITE_URL).toString() : undefined;

async function readCollection(dir) {
  const abs = path.join(ROOT, dir);
  let names = [];
  try { names = await readdir(abs); } catch { return []; }
  const items = [];
  for (const name of names) {
    if (!name.endsWith('.md')) continue;
    const raw = (await readFile(path.join(abs, name), 'utf8')).replace(/\r\n?/g, '\n');
    const { data, body } = splitFrontMatter(raw);
    items.push({ data, body: clean(body) });
  }
  return items;
}

// Pull a handful of scalar fields out of _config.yml without a YAML lib.
async function readProfile() {
  let cfg = '';
  try { cfg = await readFile(path.join(ROOT, '_config.yml'), 'utf8'); } catch {}
  const grab = (key) => {
    const m = cfg.match(new RegExp(`^\\s*${key}\\s*:\\s*(.*)$`, 'm'));
    if (!m) return undefined;
    let v = m[1].trim().replace(/\s+#.*$/, '');
    if (v.startsWith('&')) v = v.replace(/^&\S+\s*/, '');
    v = v.replace(/^["']|["']$/g, '');
    return v || undefined;
  };
  return {
    name: grab('name'),
    headline: grab('description'),
    location: grab('location'),
    employer: grab('employer'),
    email: grab('email'),
    links: {
      website: SITE_URL,
      github: grab('github') && `https://github.com/${grab('github')}`,
      linkedin: grab('linkedin') && `https://linkedin.com/in/${grab('linkedin')}`,
      googlescholar: grab('googlescholar'),
      orcid: grab('orcid'),
    },
  };
}

async function readPage(rel) {
  try {
    const raw = (await readFile(path.join(ROOT, rel), 'utf8')).replace(/\r\n?/g, '\n');
    return clean(splitFrontMatter(raw).body);
  } catch { return ''; }
}

async function main() {
  const profile = await readProfile();

  const publications = (await readCollection('_publications')).map(({ data, body }) => ({
    title: data.title,
    venue: data.venue,
    date: data.date,
    excerpt: data.excerpt,
    url: absUrl(data.permalink),
    body,
  }));

  const projects = (await readCollection('_projects')).map(({ data, body }) => ({
    title: data.title,
    category: data.category,
    techstack: data.techstack,
    date: data.date,
    excerpt: data.excerpt,
    codeurl: data.codeurl,
    url: absUrl(data.permalink),
    body,
  }));

  projects.sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
  publications.sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));

  const kb = {
    generatedAt: new Date().toISOString(),
    profile,
    about: await readPage('_pages/about.md'),
    cv: await readPage('_pages/cv.md'),
    publications,
    projects,
  };

  await mkdir(path.dirname(OUT), { recursive: true });
  await writeFile(OUT, JSON.stringify(kb, null, 2), 'utf8');
  console.log(
    `wrote ${path.relative(ROOT, OUT)} — ${projects.length} projects, ${publications.length} publications, ` +
    `${(JSON.stringify(kb).length / 1024).toFixed(1)} KB`
  );
}

main();
