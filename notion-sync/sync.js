import 'dotenv/config';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import slugify from 'slugify';
import { createHash } from 'node:crypto';
import { mkdir, writeFile, access, unlink, rm, readdir } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';

const {
  NOTION_TOKEN,
  NOTION_DATABASE_ID,
  OUTPUT_DIR = '../_posts',
  IMAGE_DIR = '../images/posts',
} = process.env;

if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
  console.error('Missing NOTION_TOKEN or NOTION_DATABASE_ID in .env');
  process.exit(1);
}

const notion = new Client({ auth: NOTION_TOKEN });
const outputDir = path.resolve(OUTPUT_DIR);
const imageDir = path.resolve(IMAGE_DIR);

const plainText = (rich) => (rich ?? []).map((r) => r.plain_text).join('');

const fileExists = async (p) => {
  try { await access(p, constants.F_OK); return true; } catch { return false; }
};

const extFromUrl = (url) => {
  const clean = url.split('?')[0];
  const ext = path.extname(clean).toLowerCase();
  return /^\.(png|jpe?g|gif|webp|svg|avif)$/.test(ext) ? ext : '.png';
};

async function downloadImage(url, slug) {
  const hash = createHash('sha1').update(url.split('?')[0]).digest('hex').slice(0, 12);
  const ext = extFromUrl(url);
  const dir = path.join(imageDir, slug);
  const filename = `${hash}${ext}`;
  const filepath = path.join(dir, filename);
  const sitePath = `/images/posts/${slug}/${filename}`;

  if (await fileExists(filepath)) return sitePath;

  await mkdir(dir, { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Image fetch failed ${res.status}: ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(filepath, buf);
  return sitePath;
}

function buildSlug(page, title) {
  const slugProp = page.properties.Slug;
  const explicit = slugProp ? plainText(slugProp.rich_text) : '';
  const source = explicit.trim() || title;
  return slugify(source, { lower: true, strict: true });
}

function frontMatter({ title, date, slug, excerpt, tags }) {
  const [y, m] = date.split('-');
  const permalink = `/posts/${y}/${m}/${slug}/`;
  const lines = [
    '---',
    `title: ${JSON.stringify(title)}`,
    `date: ${date}`,
    `permalink: ${permalink}`,
  ];
  if (excerpt) lines.push(`excerpt: ${JSON.stringify(excerpt)}`);
  if (tags?.length) {
    lines.push('tags:');
    for (const t of tags) lines.push(`  - ${t}`);
  }
  lines.push('---', '');
  return lines.join('\n');
}

async function queryPublished() {
  const pages = [];
  let cursor;
  do {
    const res = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: { property: 'Published', checkbox: { equals: true } },
      start_cursor: cursor,
    });
    pages.push(...res.results);
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);
  return pages;
}

async function syncPage(page) {
  const props = page.properties;
  const title = plainText(props.Title?.title) || 'untitled';
  const dateProp = props.Date?.date?.start;
  if (!dateProp) {
    console.warn(`skip "${title}" — no Date`);
    return { skipped: true };
  }
  const date = dateProp.slice(0, 10);
  const slug = buildSlug(page, title);
  const excerpt = plainText(props.Excerpt?.rich_text);
  const tags = (props.Tags?.multi_select ?? []).map((t) => t.name);

  const n2m = new NotionToMarkdown({ notionClient: notion });
  n2m.setCustomTransformer('image', async (block) => {
    const img = block.image;
    const url = img.type === 'external' ? img.external.url : img.file.url;
    const alt = plainText(img.caption);
    try {
      const local = await downloadImage(url, slug);
      return `![${alt}](${local})`;
    } catch (err) {
      console.warn(`image download failed for "${title}": ${err.message}`);
      return `![${alt}](${url})`;
    }
  });

  const blocks = await n2m.pageToMarkdown(page.id);
  const body = n2m.toMarkdownString(blocks).parent ?? '';

  const filename = `${date}-${slug}.md`;
  const filepath = path.join(outputDir, filename);
  const content = frontMatter({ title, date, slug, excerpt, tags }) + body;

  await mkdir(outputDir, { recursive: true });
  await writeFile(filepath, content, 'utf8');
  return { written: filename, slug };
}

async function main() {
  const pages = await queryPublished();
  console.log(`found ${pages.length} published page(s)`);
  const writtenFiles = new Set();
  const writtenSlugs = new Set();
  let written = 0, skipped = 0, failed = 0;
  for (const page of pages) {
    try {
      const r = await syncPage(page);
      if (r.written) {
        written++;
        writtenFiles.add(r.written);
        writtenSlugs.add(r.slug);
        console.log(`wrote ${r.written}`);
      } else if (r.skipped) {
        skipped++;
      }
    } catch (err) {
      failed++;
      console.error(`failed page ${page.id}: ${err.message}`);
    }
  }

  let pruned = 0;
  try {
    const entries = await readdir(outputDir);
    for (const name of entries) {
      if (name.startsWith('.')) continue;
      if (!name.endsWith('.md')) continue;
      if (writtenFiles.has(name)) continue;
      try { await unlink(path.join(outputDir, name)); pruned++; console.log(`pruned ${name}`); } catch {}
    }
  } catch {}

  let prunedImg = 0;
  try {
    const entries = await readdir(imageDir);
    for (const name of entries) {
      if (writtenSlugs.has(name)) continue;
      try { await rm(path.join(imageDir, name), { recursive: true, force: true }); prunedImg++; console.log(`pruned images/${name}`); } catch {}
    }
  } catch {}

  console.log(`done — written:${written} skipped:${skipped} failed:${failed} pruned:${pruned} prunedImg:${prunedImg}`);
  if (failed) process.exit(1);
}

main();
