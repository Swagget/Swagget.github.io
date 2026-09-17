// Fails if any committed content file contains a time-limited Notion/S3 URL.
// These work for an hour after a sync and then 403 forever, so they must never
// survive into the repo. Run after every sync; also runnable standalone.
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { EPHEMERAL_URL } from './lib/attachments.js';

const CONTENT_DIRS = ['../_posts', '../_projects', '../_publications', '../_pages', '../_portfolio'];

async function* walk(dir) {
  let entries;
  try { entries = await readdir(dir, { withFileTypes: true }); } catch { return; }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(full);
    else if (/\.(md|markdown|html)$/i.test(e.name)) yield full;
  }
}

const offenders = [];
for (const rel of CONTENT_DIRS) {
  for await (const file of walk(path.resolve(rel))) {
    const lines = (await readFile(file, 'utf8')).split('\n');
    lines.forEach((line, i) => {
      if (EPHEMERAL_URL.test(line)) {
        offenders.push(`${path.relative(path.resolve('..'), file)}:${i + 1}`);
      }
    });
  }
}

if (offenders.length) {
  console.error('Expiring Notion/S3 URLs found in committed content:');
  for (const o of offenders) console.error(`  ${o}`);
  console.error('\nThese links die within the hour. The sync should have mirrored');
  console.error('the file locally — check the file/pdf transformer in sync*.js.');
  process.exit(1);
}
console.log('link check: no expiring URLs in content');
