import 'dotenv/config';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import slugify from 'slugify';
import { createHash } from 'node:crypto';
import { mkdir, writeFile, access, unlink, rm, readdir, readFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';

const {
  NOTION_TOKEN,
  NOTION_PROJECTS_DATABASE_ID,
  PROJECTS_OUTPUT_DIR = '../_projects',
  PROJECTS_IMAGE_DIR = '../images/projects',
} = process.env;

if (!NOTION_TOKEN || !NOTION_PROJECTS_DATABASE_ID) {
  console.error('Missing NOTION_TOKEN or NOTION_PROJECTS_DATABASE_ID in .env');
  process.exit(1);
}

const notion = new Client({ auth: NOTION_TOKEN });
const outputDir = path.resolve(PROJECTS_OUTPUT_DIR);
const imageDir = path.resolve(PROJECTS_IMAGE_DIR);

// Marker written into every Notion-managed file. Only files carrying it are
// eligible for pruning, so hand-authored project pages are never deleted.
const SOURCE_MARKER = 'notion';

// Notion "Tags" (multi-select) -> site single `category`. First match in this
// order wins. Add a `Category` select property in Notion to override per-row.
const TAG_TO_CATEGORY = [
  ['Reinforcement Learning', 'research'],
  ['Theoretical ML', 'research'],
  ['Optimization', 'research'],
  ['Math', 'research'],
  ['Computer Vision', 'cv'],
  ['Automation', 'automation'],
  ['Data Science', 'data-science'],
  ['Time Series Forecasting', 'data-science'],
  ['Natural Language Processing', 'nlp'],
  ['Generative AI', 'nlp'],
  ['Machine Learning', 'ml'],
  ['Deep Learning', 'ml'],
  ['Data Generation', 'ml'],
  ['Fun!', 'fun'],
];
const DEFAULT_CATEGORY = 'ml';

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
  const sitePath = `/images/projects/${slug}/${filename}`;

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

function deriveCategory(tags, page) {
  // Prefer an explicit single-select `Category` property if the DB has one.
  const sel = page.properties.Category?.select?.name;
  if (sel) return slugify(sel, { lower: true, strict: true });
  for (const [tag, cat] of TAG_TO_CATEGORY) {
    if (tags.includes(tag)) return cat;
  }
  return DEFAULT_CATEGORY;
}

function deriveExcerpt(page, body) {
  // Prefer an explicit `Excerpt` rich-text property if present.
  const explicit = plainText(page.properties.Excerpt?.rich_text);
  if (explicit.trim()) return explicit.trim();
  // Otherwise use the first real paragraph of the body.
  for (const raw of body.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    if (/^(#|!\[|>|```|[-*]\s|\d+\.\s|\|)/.test(line)) continue;
    const clean = line
      .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1') // links/images -> text
      .replace(/[*_`]/g, '')
      .trim();
    if (!clean) continue;
    if (clean.length <= 220) return clean;
    return clean.slice(0, 217).replace(/\s+\S*$/, '') + '…';
  }
  return '';
}

function deriveTechstack(page, tags) {
  // Prefer an explicit `Tech Stack` rich-text property; else fall back to Tags.
  const explicit = plainText(page.properties['Tech Stack']?.rich_text);
  if (explicit.trim()) return explicit.trim();
  return tags.join(', ');
}

function frontMatter({ title, category, slug, date, excerpt, techstack, codeurl }) {
  const lines = [
    '---',
    `title: ${JSON.stringify(title)}`,
    'collection: projects',
    `category: ${category}`,
    `permalink: /projects/${slug}`,
  ];
  if (excerpt) lines.push(`excerpt: ${JSON.stringify(excerpt)}`);
  if (date) lines.push(`date: ${date}`);
  if (techstack) lines.push(`techstack: ${JSON.stringify(techstack)}`);
  if (codeurl) lines.push(`codeurl: ${JSON.stringify(codeurl)}`);
  lines.push(`source: ${SOURCE_MARKER}`);
  lines.push('---', '');
  return lines.join('\n');
}

async function queryAll() {
  const pages = [];
  let cursor;
  do {
    const res = await notion.databases.query({
      database_id: NOTION_PROJECTS_DATABASE_ID,
      start_cursor: cursor,
    });
    pages.push(...res.results);
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);
  return pages;
}

async function syncPage(page) {
  const props = page.properties;
  const title = plainText(props.Name?.title) || 'untitled';
  const slug = buildSlug(page, title);
  const tags = (props.Tags?.multi_select ?? []).map((t) => t.name);
  const category = deriveCategory(tags, page);
  const codeurl = props.Github?.url || '';
  const date = (props['Date Created']?.date?.start || props.Created?.created_time || '').slice(0, 10);

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

  const excerpt = deriveExcerpt(page, body);
  const techstack = deriveTechstack(page, tags);

  const filename = `${slug}.md`;
  const filepath = path.join(outputDir, filename);
  const content = frontMatter({ title, category, slug, date, excerpt, techstack, codeurl }) + body;

  await mkdir(outputDir, { recursive: true });
  await writeFile(filepath, content, 'utf8');
  return { written: filename, slug };
}

// True only for files this script previously generated (carry the marker).
async function isNotionManaged(filepath) {
  try {
    const text = await readFile(filepath, 'utf8');
    const fmEnd = text.indexOf('\n---', 3);
    const fm = fmEnd === -1 ? text : text.slice(0, fmEnd);
    return new RegExp(`^source:\\s*${SOURCE_MARKER}\\s*$`, 'm').test(fm);
  } catch { return false; }
}

async function main() {
  const pages = await queryAll();
  console.log(`found ${pages.length} project page(s)`);
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

  // Prune only Notion-managed files (those with `source: notion`) that no
  // longer correspond to a Notion row. Hand-authored pages are left untouched.
  let pruned = 0;
  try {
    const entries = await readdir(outputDir);
    for (const name of entries) {
      if (name.startsWith('.') || !name.endsWith('.md')) continue;
      if (writtenFiles.has(name)) continue;
      const fp = path.join(outputDir, name);
      if (!(await isNotionManaged(fp))) continue;
      try { await unlink(fp); pruned++; console.log(`pruned ${name}`); } catch {}
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
