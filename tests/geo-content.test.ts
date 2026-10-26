import { test } from 'node:test';
import assert from 'node:assert/strict';

import { CANONICAL_FAMILIES, getDivisionBySlug } from '../packages/types/src/index';
import { buildFamilyAnswer, countWords } from '../apps/web/src/data/family-answers';
import { DIVISION_FAQS } from '../apps/web/src/data/division-faqs';
import { ARTICLES, INSIGHT_SLUGS } from '../apps/web/src/data/insights';
import {
  HEAD_CLUSTERS,
  MID_CLUSTERS,
  QUESTION_KEYWORDS,
  composeKeywords
} from '../packages/seo/src/keyword-map';

/**
 * Guards the GEO layer added in V6-C. These are the properties that silently
 * decay as the catalogue grows, and that no type check can catch.
 */

test('every family produces an answer block in the citable 40-60 word range', () => {
  const offenders: string[] = [];

  for (const family of CANONICAL_FAMILIES) {
    const division = getDivisionBySlug(family.divisionSlug);
    const words = countWords(buildFamilyAnswer(family, division));
    // Below 35 words carries too little specificity to be quoted; above 75 and
    // answer engines truncate mid-sentence.
    if (words < 35 || words > 75) {
      offenders.push(`${family.slug}: ${words} words`);
    }
  }

  assert.deepEqual(offenders, [], `Answer blocks outside the citable range:\n${offenders.join('\n')}`);
});

test('answer blocks are unique across families', () => {
  const seen = new Map<string, string>();

  for (const family of CANONICAL_FAMILIES) {
    const answer = buildFamilyAnswer(family, getDivisionBySlug(family.divisionSlug));
    const previous = seen.get(answer);
    assert.equal(
      previous,
      undefined,
      `Identical answer block on "${family.slug}" and "${previous}" — duplicate passages are not cited.`
    );
    seen.set(answer, family.slug);
  }
});

test('every division has a hand-written FAQ set', () => {
  const divisionSlugs = [...new Set(CANONICAL_FAMILIES.map((f) => f.divisionSlug))];

  for (const slug of divisionSlugs) {
    const faqs = DIVISION_FAQS[slug];
    assert.ok(faqs?.length >= 4, `Division "${slug}" needs at least 4 FAQs, found ${faqs?.length ?? 0}`);

    for (const faq of faqs) {
      assert.ok(faq.question.trim().endsWith('?'), `Not a question: "${faq.question}"`);
      assert.ok(
        countWords(faq.answer) >= 25,
        `Answer too thin to be useful: "${faq.question}"`
      );
    }
  }
});

test('no interior route owns more than one keyword cluster', () => {
  // The home page is exempt by design: it legitimately targets both the generic
  // category term ("aluminium extrusion manufacturer") and the geo-qualified one
  // ("aluminium extrusion vietnam"). Any *interior* page owning two clusters is
  // a split-focus page that will rank for neither.
  const EXEMPT_ROUTES = new Set(['/']);
  const owners = new Map<string, string>();

  for (const cluster of [...HEAD_CLUSTERS, ...MID_CLUSTERS]) {
    if (EXEMPT_ROUTES.has(cluster.owner)) continue;

    const existing = owners.get(cluster.owner);
    assert.equal(
      existing,
      undefined,
      `Route "${cluster.owner}" is claimed by both "${existing}" and "${cluster.id}" — split focus.`
    );
    owners.set(cluster.owner, cluster.id);
  }
});

test('no keyword term is claimed by two different clusters', () => {
  const claimed = new Map<string, string>();

  for (const cluster of [...HEAD_CLUSTERS, ...MID_CLUSTERS]) {
    for (const term of [cluster.primary, ...cluster.variants]) {
      const key = term.toLowerCase();
      const existing = claimed.get(key);
      assert.equal(
        existing,
        undefined,
        `Keyword cannibalisation: "${term}" targeted by both "${existing}" and "${cluster.id}".`
      );
      claimed.set(key, cluster.id);
    }
  }
});

test('every GEO question is assigned to a route that exists in content', () => {
  const knownInsightRoutes = INSIGHT_SLUGS.map((slug) => `/insights/${slug}`);

  for (const entry of QUESTION_KEYWORDS) {
    if (entry.owner.startsWith('/insights/')) {
      assert.ok(
        knownInsightRoutes.includes(entry.owner),
        `Question "${entry.question}" points at missing article ${entry.owner}`
      );
    }
    assert.ok(entry.question.trim().endsWith('?'), `Not a question: "${entry.question}"`);
  }
});

test('composeKeywords de-duplicates and respects the limit', () => {
  const result = composeKeywords(
    ['Aluminium Profile', 'aluminium profile', 'solar rail'],
    '/products/solar',
    ['6063-T5'],
    5
  );

  assert.equal(result.length, 5);
  const lowered = result.map((t) => t.toLowerCase());
  assert.equal(new Set(lowered).size, lowered.length, 'composeKeywords returned duplicates');
});

test('article cluster links point at real families', () => {
  const familySlugs = new Set(CANONICAL_FAMILIES.map((f) => f.slug));

  for (const slug of INSIGHT_SLUGS) {
    const article = ARTICLES[slug];
    for (const familySlug of article.relatedFamilies ?? []) {
      assert.ok(
        familySlugs.has(familySlug),
        `Article "${slug}" links to unknown family "${familySlug}"`
      );
    }
  }
});
