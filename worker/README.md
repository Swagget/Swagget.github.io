# Ask AI — Cloudflare Worker backend

This Worker powers the **Ask AI** page on the site. The static site (GitHub Pages)
can't hold an API key, so all Claude calls go through here, where the key stays
secret and abuse is gated (Turnstile + rate limits + size caps). Every
interaction is logged to a Notion database.

```
browser /ask/  ──POST /ask──►  Worker  ──►  Anthropic API
                                  └──(async)──►  Notion history DB
```

## One-time setup

### 0. Prerequisites
- Node 18+ and a Cloudflare account (free tier is fine).
- `cd worker && npm install`
- Log in: `npx wrangler login`

### 1. Anthropic API key
- Create a key at **console.anthropic.com → API Keys** and load a little credit
  (pay-as-you-go; this is separate from any Claude.ai subscription).
- Keep it for step 6.

### 2. Cloudflare Turnstile (anti-bot)
- Cloudflare dashboard → **Turnstile → Add site**. Add `aniketwagde.com` (and
  `swagget.github.io` if you test there).
- Copy the **Site key** (public — goes in `_config.yml`) and the **Secret key**
  (goes in step 6).

### 3. Notion history database
- In Notion, create a new database (full page) named e.g. **"Ask AI History"**.
- Add these properties **exactly** (name and type matter):
  | Property | Type |
  |---|---|
  | `Title` | Title (default) |
  | `Mode` | Select (add options `Question`, `Fit`) |
  | `Input` | Text |
  | `Reply` | Text |
  | `Country` | Text |
  | `Model` | Text |
  | `Tokens` | Number |
  | `Timestamp` | Date |
- Share the database with your Notion integration (the same token used by
  `notion-sync`, or make a new integration at notion.so/my-integrations and click
  **Connections → your integration** on the database).
- Copy the database id (the 32-char hex in its URL) for step 6.

### 4. Create the KV namespace
```bash
npx wrangler kv namespace create RL
npx wrangler kv namespace create RL --preview
```
Paste the two printed ids into `wrangler.toml` (`id` and `preview_id`).

### 5. (Local testing, optional)
- `cp .dev.vars.example .dev.vars` and fill in real values (`DEV="true"` skips
  Turnstile locally).
- `npm run dev`, then:
  ```bash
  curl -X POST http://localhost:8787/ask -H 'Content-Type: application/json' \
    -d '{"mode":"question","text":"What are your main research areas?"}'
  ```

### 6. Set secrets + deploy
```bash
npx wrangler secret put ANTHROPIC_API_KEY
npx wrangler secret put TURNSTILE_SECRET
npx wrangler secret put NOTION_TOKEN
npx wrangler secret put NOTION_HISTORY_DB_ID
npm run deploy
```
Wrangler prints the Worker URL, e.g. `https://ask-aniket.<your-subdomain>.workers.dev`.

### 7. Wire the frontend
Put the Worker URL and the Turnstile **site key** into the site's `_config.yml`:
```yaml
ask_ai:
  endpoint: "https://ask-aniket.<your-subdomain>.workers.dev/ask"
  turnstile_sitekey: "0x4AAAA..."
```
Rebuild the site. Done.

## Tuning
Edit `[vars]` in `wrangler.toml` and re-`deploy`: model, `MAX_TOKENS`,
`IP_LIMIT`/`IP_WINDOW_SECONDS`, `DAILY_CAP`, size caps. The corpus is sent with
prompt caching, so repeat calls are cheap; `DAILY_CAP` is the hard spend bound.

## Notes
- The Worker fetches the knowledge base from `KB_URL` and edge-caches it for 1h,
  so content updates (via notion-sync) appear without redeploying the Worker.
- Logging is best-effort and async — a Notion outage never blocks a reply.
