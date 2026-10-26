import { ARTICLES, INSIGHT_SLUGS, type ArticleData } from './insights';
import { CANONICAL_FAMILIES, type ProductFamily } from '@leloi/types';

/**
 * Hub-and-spoke content cluster.
 *
 * Each insight article declares the product families it supports
 * (`relatedFamilies`). This module inverts that single declaration so links
 * flow both ways without anyone maintaining a second list that can drift:
 *
 *   article  --relatedFamilies-->  family      (rendered on the article)
 *   family   <--derived here----   article     (rendered on the family page)
 *
 * Two-way linking is what makes a cluster work. A family page that links out
 * to a guide but is never linked back from it passes authority in one
 * direction only.
 */

/** Articles that declare support for a given family slug. */
export function getArticlesForFamily(familySlug: string): ArticleData[] {
  return INSIGHT_SLUGS.map((slug) => ARTICLES[slug]).filter((article) =>
    article.relatedFamilies?.includes(familySlug)
  );
}

/** Families an article declares support for, resolved to full records. */
export function getFamiliesForArticle(article: ArticleData): ProductFamily[] {
  if (!article.relatedFamilies?.length) return [];
  return article.relatedFamilies
    .map((slug) => CANONICAL_FAMILIES.find((family) => family.slug === slug))
    .filter((family): family is ProductFamily => Boolean(family));
}

/** Other articles sharing at least one tag, closest first. */
export function getRelatedArticles(article: ArticleData, limit = 3): ArticleData[] {
  const tags = new Set(article.tags ?? []);
  if (tags.size === 0) return [];

  return INSIGHT_SLUGS.map((slug) => ARTICLES[slug])
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate) => ({
      candidate,
      overlap: (candidate.tags ?? []).filter((tag) => tags.has(tag)).length
    }))
    .filter((entry) => entry.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, limit)
    .map((entry) => entry.candidate);
}

/**
 * Families with no supporting article — the content gap list.
 * Used by the cluster coverage test to keep the gap visible as the
 * catalogue grows.
 */
export function getFamiliesWithoutArticles(): ProductFamily[] {
  return CANONICAL_FAMILIES.filter((family) => getArticlesForFamily(family.slug).length === 0);
}
