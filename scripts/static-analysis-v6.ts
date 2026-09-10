import fs from 'node:fs';
import path from 'node:path';

interface Violation {
  file: string;
  line: number;
  pattern: string;
  content: string;
}

const BANNED_PATTERNS = [
  'All Products (24)',
  'Profiles (5)',
  'Profiles (2)',
  'Browse All 24 Products',
  '(24+ Solutions)',
  'View Full 24-Profile Catalog'
];

function scanDirectory(dir: string, violations: Violation[]) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.next' && entry.name !== '.git') {
        scanDirectory(fullPath, violations);
      }
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');

      lines.forEach((line, idx) => {
        for (const pattern of BANNED_PATTERNS) {
          if (line.includes(pattern)) {
            violations.push({
              file: path.relative(process.cwd(), fullPath),
              line: idx + 1,
              pattern,
              content: line.trim()
            });
          }
        }
      });
    }
  }
}

console.log('--- LELOI METAL V6-A STATIC ANALYSIS AUDIT ---');
const violations: Violation[] = [];
scanDirectory(path.resolve(process.cwd(), 'apps/web/src'), violations);

if (violations.length === 0) {
  console.log('✅ PASS: 0 occurrences of banned legacy UI strings found in apps/web/src.');
  for (const pattern of BANNED_PATTERNS) {
    console.log(`   - "${pattern}": 0 occurrences`);
  }
  process.exit(0);
} else {
  console.error(`❌ FAIL: Found ${violations.length} violations in apps/web/src:`);
  for (const v of violations) {
    console.error(`   - ${v.file}:${v.line} -> Pattern: "${v.pattern}" | Content: ${v.content}`);
  }
  process.exit(1);
}
