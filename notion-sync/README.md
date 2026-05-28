# notion-sync

Pull Notion DB pages → write Jekyll content:
- **Blog** (`sync.js`): posts into `../_posts/`, images into `../images/posts/<slug>/`.
- **Projects** (`sync-projects.js`): project pages into `../_projects/`, images into `../images/projects/<slug>/`.

## One-time setup

1. Create a Notion internal integration: https://www.notion.so/profile/integrations
   - Copy the token (starts with `secret_` or `ntn_`).
2. Open your blog database in Notion → ⋯ menu → Connections → add your integration.
3. Copy the database ID from its URL (the 32-char hex before `?v=`).
4. Configure env:
   ```bash
   cd notion-sync
   cp .env.example .env
   # edit .env and fill NOTION_TOKEN and NOTION_DATABASE_ID
   npm install
   ```

## Database schema

Required properties (names are case-sensitive):

| Property   | Type         | Notes                                |
|------------|--------------|--------------------------------------|
| Title      | Title        | Post title                           |
| Date       | Date         | Publish date (date-only used)        |
| Published  | Checkbox     | Only checked rows sync               |
| Slug       | Rich text    | Optional; auto from Title if blank   |
| Excerpt    | Rich text    | Optional summary                     |
| Tags       | Multi-select | Optional Jekyll tags                 |

## Projects database schema

Projects DB ("All My Projects"). Property names are case-sensitive.

| Property      | Type         | Notes                                                        |
|---------------|--------------|--------------------------------------------------------------|
| Name          | Title        | Project title                                                |
| Slug          | Rich text    | Optional; auto from Name if blank. Becomes `/projects/<slug>`|
| Date Created  | Date         | Optional; falls back to Notion row-created time              |
| Tags          | Multi-select | Drives the site `category` (see mapping in `sync-projects.js`)|
| Github        | URL          | Optional; rendered as the "Code" link                        |
| Image Link    | URL          | Currently ignored (no header images on project pages)        |

Optional properties the script will use if you add them (override the derived values):

| Property   | Type     | Overrides                                  |
|------------|----------|--------------------------------------------|
| Category   | Select   | The Tags→category mapping (use a site slug)|
| Excerpt    | Rich text| The auto-excerpt (first paragraph)         |
| Tech Stack | Rich text| The Tags-joined techstack line             |

Notes on derivation (when the optional props are absent):
- `category` is picked from the first matching tag in `TAG_TO_CATEGORY` (e.g. Computer Vision→cv, Fun!→fun). Multi-tag rows resolve to one category; a few may not match your hand-assignment — add a `Category` select to fix those.
- `excerpt` is the first real paragraph of the body.
- `techstack` is the Tags joined with commas (add a `Tech Stack` property for a real tech list).
- Inline body images are downloaded locally; the `Image Link` property is not used.

## Run

```bash
npm run sync           # blog -> _posts
npm run sync:projects  # projects -> _projects
```

Writes files like `_posts/2026-05-14-hello-notion.md` and `_projects/my-project.md`. Re-running is safe: pages are overwritten from Notion (source of truth) and images are skipped if already downloaded.

## Commit + push

After verifying output:

```bash
git add _posts _projects images/posts images/projects
git commit -m "sync: notion posts + projects"
git push
```

GitHub Pages rebuilds the site.

## Pruning (Notion is source of truth)

- Posts: every `.md` in `_posts/` not produced by the current run is deleted.
- Projects: only files carrying `source: notion` in their front matter are deleted when their Notion row disappears. **Hand-authored project pages without that marker are never pruned** — so files not (yet) in Notion are safe.

## Notes

- `Slug` is the URL — treat as immutable once published, or old links 404. To preserve an existing `/projects/<slug>` URL, set the Notion `Slug` to that exact value.
- Notion image URLs expire ~1hr; this script downloads them locally so the site stays stable.
- Complex Notion blocks (toggles, embeds, sub-databases) may render unevenly. Stick to headings, paragraphs, lists, code, images for now.

## Required GitHub secret

The workflow needs `NOTION_PROJECTS_DATABASE_ID` (in addition to `NOTION_TOKEN` and `NOTION_DATABASE_ID`). Add it under repo **Settings → Secrets and variables → Actions**.
