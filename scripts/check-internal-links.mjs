#!/usr/bin/env node
/**
 * Resolves every internal href in apps/web against the actual App Router tree.
 *
 * Exists because nine broken links (five capability pages, three legal pages,
 * one sustainability page) shipped and sat live — the type system cannot catch
 * a string that happens to look like a URL.
 *
 * Run: node scripts/check-internal-links.mjs
 */

import fs from 'node:fs';
import path from 'node:path';

const APP_DIR = 'apps/web/src/app';
const SRC_DIR = 'apps/web/src';

/** Hrefs that intentionally leave the app (external redirects, anchors). */
const IGNORED_PREFIXES = ['/api/'];

function collectTsxFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.next') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectTsxFiles(full, acc);
    else if (entry.name.endsWith('.tsx')) acc.push(full);
  }
  return acc;
}

/** Every route the App Router will actually serve. */
function collectRoutes(dir, segment = '', acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    // Route groups contribute no URL segment; /api holds route handlers.
    if (entry.name.startsWith('(') || entry.name === 'api') continue;
    collectRoutes(path.join(dir, entry.name), `${segment}/${entry.name}`, acc);
  }
  if (fs.existsSync(path.join(dir, 'page.tsx'))) acc.push(segment || '/');
  return acc;
}

function routeToRegExp(route) {
  const pattern = route
    .replace(/\[\.\.\.[^\]]+\]/g, '.+') // catch-all
    .replace(/\[[^\]]+\]/g, '[^/]+'); // dynamic segment
  return new RegExp(`^${pattern}$`);
}

const routes = collectRoutes(APP_DIR);
const matchers = routes.map(routeToRegExp);

const hrefs = new Map(); // href -> Set of files referencing it
for (const file of collectTsxFiles(SRC_DIR)) {
  const contents = fs.readFileSync(file, 'utf8');
  for (const match of contents.matchAll(/href="(\/[^"#?]*)/g)) {
    const href = match[1];
    if (!hrefs.has(href)) hrefs.set(href, new Set());
    hrefs.get(href).add(file);
  }
}

const broken = [];
for (const [href, files] of hrefs) {
  if (IGNORED_PREFIXES.some((prefix) => href.startsWith(prefix))) continue;
  if (matchers.some((re) => re.test(href))) continue;
  broken.push({ href, files: [...files] });
}

console.log(`Checked ${hrefs.size} internal links against ${routes.length} routes.`);

if (broken.length > 0) {
  console.error(`\n${broken.length} broken internal link(s):\n`);
  for (const { href, files } of broken) {
    console.error(`  ✗ ${href}`);
    for (const file of files) console.error(`      referenced in ${file}`);
  }
  process.exit(1);
}

console.log('No broken internal links.');
