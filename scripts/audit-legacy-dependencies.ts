import fs from 'fs';
import path from 'path';

interface DependencyOccurrence {
  file: string;
  line: number;
  content: string;
  identifier: string;
  classification: 'MIGRATION_ONLY' | 'TEST_ONLY' | 'PRODUCTION_DEPENDENCY';
}

const TARGETS = ['PRODUCTS_V2', 'CATEGORIES_V2', 'LEGACY_PRODUCTS_V2', 'LEGACY_CATEGORIES_V2'];

const searchDirs = [
  path.resolve(process.cwd(), 'apps/web/src'),
  path.resolve(process.cwd(), 'packages/types/src'),
  path.resolve(process.cwd(), 'packages/database/src'),
  path.resolve(process.cwd(), 'tests'),
  path.resolve(process.cwd(), 'scripts'),
];

const occurrences: DependencyOccurrence[] = [];

function scanFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  lines.forEach((line, idx) => {
    for (const target of TARGETS) {
      if (line.includes(target)) {
        let classification: DependencyOccurrence['classification'] = 'MIGRATION_ONLY';

        const relPath = path.relative(process.cwd(), filePath).replace(/\\/g, '/');

        if (relPath.startsWith('apps/web/src')) {
          // If in apps/web/src, it's a production dependency unless it's an unused comment
          classification = 'PRODUCTION_DEPENDENCY';
        } else if (relPath.startsWith('tests/') || relPath.includes('test')) {
          classification = 'TEST_ONLY';
        } else if (relPath.startsWith('scripts/audit-')) {
          classification = 'TEST_ONLY';
        } else {
          classification = 'MIGRATION_ONLY';
        }

        occurrences.push({
          file: relPath,
          line: idx + 1,
          content: line.trim(),
          identifier: target,
          classification
        });
      }
    }
  });
}

function traverse(dir: string) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (f !== 'node_modules' && f !== '.next' && f !== 'dist') {
        traverse(full);
      }
    } else if (/\.(ts|tsx|js|jsx)$/.test(f)) {
      scanFile(full);
    }
  }
}

for (const d of searchDirs) {
  traverse(d);
}

const reportsDir = path.resolve(process.cwd(), 'reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

fs.writeFileSync(
  path.join(reportsDir, 'v6-legacy-dependency-audit.json'),
  JSON.stringify(occurrences, null, 2),
  'utf-8'
);

console.log('=== LEGACY DEPENDENCY AUDIT ===');
console.log(`Total Occurrences: ${occurrences.length}`);
const prodDep = occurrences.filter(o => o.classification === 'PRODUCTION_DEPENDENCY').length;
const testOnly = occurrences.filter(o => o.classification === 'TEST_ONLY').length;
const migrationOnly = occurrences.filter(o => o.classification === 'MIGRATION_ONLY').length;
console.log(`PRODUCTION_DEPENDENCY: ${prodDep} (Expected: 0)`);
console.log(`TEST_ONLY: ${testOnly}`);
console.log(`MIGRATION_ONLY: ${migrationOnly}`);
console.log('Report written to reports/v6-legacy-dependency-audit.json');

if (prodDep > 0) {
  console.error('ERROR: Production dependencies found!');
  process.exit(1);
}
