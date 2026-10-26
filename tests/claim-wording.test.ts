import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

import { PROHIBITED_COATING_PHRASES } from '../apps/web/src/data/coating-claims';
import { CANONICAL_CLAIM_SOURCES } from '../packages/types/src/data/canonical-claims-data';

/**
 * Guards the public-claim policy (ADR-006).
 *
 * These are wording rules, not type rules, so nothing else catches them. They
 * exist because the same over-claims crept back in twice during the V5 and V6
 * rewrites: a copy change in one component is easy, noticing it contradicts a
 * source record in another file is not.
 */

const ROOTS = ['apps/web/src', 'packages/types/src', 'packages/database/src'];
const ALLOWLIST = ['coating-claims.ts'];

function collectSourceFiles(): string[] {
  const files: string[] = [];

  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name === 'node_modules' || entry.name === '.next') continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.(ts|tsx)$/.test(entry.name) && !ALLOWLIST.includes(entry.name)) files.push(full);
    }
  };

  for (const root of ROOTS) {
    if (fs.existsSync(root)) walk(root);
  }
  return files;
}

test('no unauthorised coating certification or unconditional warranty claims', () => {
  const offenders: string[] = [];

  for (const file of collectSourceFiles()) {
    // Case-insensitive: a lowercase "AkzoNobel 10-year warranty" slipped past
    // an exact-match sweep and stayed live on the home page.
    const contents = fs.readFileSync(file, 'utf8').toLowerCase();
    for (const phrase of PROHIBITED_COATING_PHRASES) {
      if (contents.includes(phrase.toLowerCase())) {
        offenders.push(`${file}: "${phrase}"`);
      }
    }
  }

  assert.deepEqual(
    offenders,
    [],
    'Coating claims that exceed what SRC-AKZ-PROP-2026 supports, or assert an ' +
      'applicator status we cannot evidence:\n' +
      offenders.join('\n')
  );
});

test('a warranty duration is never stated without its qualifying conditions', () => {
  const offenders: string[] = [];

  for (const file of collectSourceFiles()) {
    const contents = fs.readFileSync(file, 'utf8');
    // "10 years" / "10-year" / "10-yr" anywhere in a file that mentions warranty
    const statesDuration = /10[-\s]?(year|yr)/i.test(contents) && /warrant/i.test(contents);
    if (!statesDuration) continue;

    const qualified =
      /up to/i.test(contents) ||
      /subject to/i.test(contents) ||
      /depend/i.test(contents) ||
      /conditions/i.test(contents);

    if (!qualified) offenders.push(file);
  }

  assert.deepEqual(
    offenders,
    [],
    `These files state a 10-year warranty with no "up to" / "subject to" qualifier:\n${offenders.join('\n')}`
  );
});

test('every claim source declares whether it is internal or third-party', () => {
  // A VERIFIED badge backed only by our own marketing document is circular.
  // The source tier must be explicit so the UI can label it honestly.
  for (const [id, source] of Object.entries(CANONICAL_CLAIM_SOURCES)) {
    assert.ok(
      'evidenceTier' in source,
      `Claim source "${id}" has no evidenceTier — cannot be rendered as VERIFIED.`
    );
  }
});

test('no source claims third-party evidence while pointing at an internal document', () => {
  const INTERNAL_MARKERS = [/BLUEPRINT/i, /LELOI_METAL_V6/i, /_SPEC_SECTION/i];

  for (const [id, source] of Object.entries(CANONICAL_CLAIM_SOURCES)) {
    const looksInternal = INTERNAL_MARKERS.some((re) => re.test(source.reference));
    if (!looksInternal) continue;

    assert.notEqual(
      (source as { evidenceTier?: string }).evidenceTier,
      'THIRD_PARTY_CERTIFICATE',
      `Source "${id}" references the internal document "${source.reference}" but is tiered as third-party evidence.`
    );
  }
});
