// Notion serves attachments (`file` and `pdf` blocks) from presigned S3 URLs
// that expire after an hour. Anything left pointing at Notion is a dead link
// by the next day, so we mirror the bytes into the repo and link those paths.
import { createHash } from 'node:crypto';
import { mkdir, writeFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';
import slugify from 'slugify';

const fileExists = async (p) => {
  try { await access(p, constants.F_OK); return true; } catch { return false; }
};

const plainText = (rich) => (rich ?? []).map((r) => r.plain_text).join('');

// Any URL matching this is time-limited and must never reach a committed file.
export const EPHEMERAL_URL = /prod-files-secure[^\s)]*|[?&]X-Amz-Expires=/;

export async function downloadAttachment({ url, slug, name, baseDir, sitePrefix }) {
  const clean = url.split('?')[0];
  const hash = createHash('sha1').update(clean).digest('hex').slice(0, 12);
  const ext = path.extname(name || '') || path.extname(clean) || '';
  const stem = slugify(path.basename(name || clean, ext) || 'file', { lower: true, strict: true });
  const filename = `${stem}-${hash}${ext}`;
  const dir = path.join(baseDir, slug);
  const filepath = path.join(dir, filename);
  const sitePath = `${sitePrefix}/${slug}/${filename}`;

  if (await fileExists(filepath)) return sitePath;

  await mkdir(dir, { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`File fetch failed ${res.status}: ${clean}`);
  await writeFile(filepath, Buffer.from(await res.arrayBuffer()));
  return sitePath;
}

// Registers `file`/`pdf` transformers on an n2m instance. Throws on download
// failure rather than emitting the expiring URL: a failed sync is recoverable,
// a committed dead link is not.
export function registerAttachmentTransformers(n2m, { slug, title, baseDir, sitePrefix }) {
  for (const type of ['file', 'pdf']) {
    n2m.setCustomTransformer(type, async (block) => {
      const f = block[type];
      const url = f.type === 'external' ? f.external.url : f.file.url;
      const label = f.name || plainText(f.caption) || path.basename(url.split('?')[0]);
      // External links are stable; only Notion-hosted files need mirroring.
      if (f.type === 'external') return `[${label}](${url})`;
      const local = await downloadAttachment({ url, slug, name: f.name, baseDir, sitePrefix });
      return `[${label}](${local})`;
    });
  }
}
