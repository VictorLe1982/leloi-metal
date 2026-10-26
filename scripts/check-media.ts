#!/usr/bin/env tsx
/**
 * LELOI METAL — media slot tooling.
 *
 *   npx tsx scripts/check-media.ts          report which image slots are filled
 *   npx tsx scripts/check-media.ts --readme regenerate the per-folder README files
 *   npx tsx scripts/check-media.ts --strict exit 1 if any priority slot is empty
 *
 * Reads apps/web/src/data/media-manifest.ts directly, so the report and the
 * drop-folder instructions can never disagree with what the site expects.
 */

import fs from 'node:fs';
import path from 'node:path';
import { MEDIA_SLOTS, type MediaSlot } from '../apps/web/src/data/media-manifest';

const PUBLIC_DIR = path.join('apps', 'web', 'public');

const toDiskPath = (slot: MediaSlot) =>
  path.join(PUBLIC_DIR, slot.path.replace(/^\//, ''));

const exists = (slot: MediaSlot) => fs.existsSync(toDiskPath(slot));

function fileSizeKb(slot: MediaSlot): number {
  try {
    return Math.round(fs.statSync(toDiskPath(slot)).size / 1024);
  } catch {
    return 0;
  }
}

function writeFolderReadmes() {
  const byDir = new Map<string, MediaSlot[]>();

  for (const slot of MEDIA_SLOTS) {
    const dir = path.join(PUBLIC_DIR, path.dirname(slot.path.replace(/^\//, '')));
    if (!byDir.has(dir)) byDir.set(dir, []);
    byDir.get(dir)!.push(slot);
  }

  for (const [dir, slots] of byDir) {
    fs.mkdirSync(dir, { recursive: true });

    const rows = slots
      .map((slot) => {
        const name = path.basename(slot.path);
        return `| \`${name}\` | ${slot.width} × ${slot.height} | ${slot.aspect} | ${slot.brief} |`;
      })
      .join('\n');

    const body = [
      '# Image drop folder',
      '',
      'Place files here using the **exact filename** in the table below.',
      'The site picks them up on the next build — no code change needed.',
      '',
      '- Format: **.webp** (convert from JPG/PNG first)',
      '- Supply at the stated pixel size **or larger**, never smaller',
      '- Keep each file under **~400 KB** after conversion',
      '',
      '| Filename | Minimum size | Aspect | What it must show |',
      '|---|---|---|---|',
      rows,
      '',
      '---',
      '',
      'Spec: `apps/web/src/data/media-manifest.ts`',
      'Check what is still missing: `npx tsx scripts/check-media.ts`',
      ''
    ].join('\n');

    fs.writeFileSync(path.join(dir, 'README.md'), body);
    console.log(`  wrote ${path.join(dir, 'README.md')} (${slots.length} slot${slots.length > 1 ? 's' : ''})`);
  }
}

function report(): number {
  const groups = [...new Set(MEDIA_SLOTS.map((s) => s.group))];
  let filled = 0;
  let missingPriority = 0;

  for (const group of groups) {
    const slots = MEDIA_SLOTS.filter((s) => s.group === group);
    console.log(`\n${group.toUpperCase()}`);

    for (const slot of slots) {
      const present = exists(slot);
      if (present) filled++;
      else if (slot.priority) missingPriority++;

      const mark = present ? '✔' : slot.priority ? '✖' : '·';
      const detail = present
        ? `${fileSizeKb(slot)} KB`
        : `${slot.width}×${slot.height} needed`;

      console.log(`  ${mark} ${slot.path.padEnd(52)} ${detail}`);
    }
  }

  const total = MEDIA_SLOTS.length;
  console.log(`\n${filled} of ${total} image slots filled.`);

  if (missingPriority > 0) {
    console.log(`${missingPriority} above-the-fold slot(s) still empty — these show a placeholder to visitors.`);
  }

  return missingPriority;
}

const args = process.argv.slice(2);

if (args.includes('--readme')) {
  console.log('Regenerating drop-folder READMEs:');
  writeFolderReadmes();
} else {
  const missingPriority = report();
  if (args.includes('--strict') && missingPriority > 0) process.exit(1);
}
