# notion-sync

Pull Notion DB pages → write Jekyll posts into `../_posts/` and images into `../images/posts/<slug>/`.

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

## Run

```bash
npm run sync
```

Writes files like `_posts/2026-05-14-hello-notion.md`. Re-running is safe: posts are overwritten from Notion (source of truth) and images are skipped if already downloaded.

## Commit + push

After verifying output:

```bash
git add _posts images/posts
git commit -m "sync: notion posts"
git push
```

GitHub Pages rebuilds the site.

## Notes

- `Slug` is the URL — treat as immutable once published, or old links 404.
- Notion image URLs expire ~1hr; this script downloads them locally so the site stays stable.
- Deleting a row in Notion does NOT remove the corresponding `_posts/` file; delete it manually.
- Complex Notion blocks (toggles, embeds, sub-databases) may render unevenly. Stick to headings, paragraphs, lists, code, images for now.
