/**
 * LELOI METAL — CANONICAL PRODUCT CATALOG SERVICE (V6-A)
 * Unified single source of truth for all product data queries across web and API.
 */

import {
  ProductDivision,
  ProductDivisionId,
  ProductFamily,
  ProductSystem,
  ProductVariant,
  ProductFinish
} from '../product-canonical';
import {
  CANONICAL_DIVISIONS,
  CANONICAL_FAMILIES,
  CANONICAL_SYSTEMS,
  CANONICAL_FINISHES
} from '../data/canonical-products-data';
import {
  LEGACY_PRODUCT_ROUTE_MAP,
  LEGACY_CATEGORY_ROUTE_MAP,
  LegacyRouteResolution
} from '../legacy-product-route-map';

/**
 * Get all 6 canonical product divisions ordered by priority
 */
export function getProductDivisions(): ProductDivision[] {
  return [...CANONICAL_DIVISIONS].sort((a, b) => a.order - b.order);
}

/**
 * Get a single division by its slug or legacy slug
 */
export function getDivisionBySlug(slug: string): ProductDivision | undefined {
  const normalizedSlug = LEGACY_CATEGORY_ROUTE_MAP[slug] || slug;
  return CANONICAL_DIVISIONS.find(
    (d) => d.slug === normalizedSlug || d.id === normalizedSlug
  );
}

/**
 * Get a single division by ID
 */
export function getDivisionById(id: ProductDivisionId): ProductDivision | undefined {
  return CANONICAL_DIVISIONS.find((d) => d.id === id);
}

/**
 * Get all product families belonging to a division
 */
export function getFamiliesByDivision(divisionSlugOrId: string): ProductFamily[] {
  const division = getDivisionBySlug(divisionSlugOrId);
  if (!division) return [];
  return CANONICAL_FAMILIES.filter(
    (f) => f.divisionId === division.id || f.divisionSlug === division.slug
  ).sort((a, b) => a.order - b.order);
}

/**
 * Get a specific product family within a division
 */
export function getFamilyBySlug(
  divisionSlug: string,
  familySlug: string
): ProductFamily | undefined {
  const division = getDivisionBySlug(divisionSlug);
  if (!division) return undefined;
  return CANONICAL_FAMILIES.find(
    (f) => (f.divisionId === division.id || f.divisionSlug === division.slug) && f.slug === familySlug
  );
}

/**
 * Get a product family across all divisions by family slug
 */
export function getFamilyBySlugOnly(familySlug: string): ProductFamily | undefined {
  return CANONICAL_FAMILIES.find((f) => f.slug === familySlug);
}

/**
 * Get all product systems belonging to a family
 */
export function getSystemsByFamily(familySlugOrId: string): ProductSystem[] {
  const family = CANONICAL_FAMILIES.find(
    (f) => f.slug === familySlugOrId || f.id === familySlugOrId
  );
  if (!family) return [];
  return CANONICAL_SYSTEMS.filter((s) => s.familyId === family.id);
}

/**
 * Get a specific product system within a family
 */
export function getSystemBySlug(
  familySlug: string,
  systemSlug: string
): ProductSystem | undefined {
  const family = getFamilyBySlugOnly(familySlug);
  if (!family) return undefined;
  return CANONICAL_SYSTEMS.find(
    (s) => s.familyId === family.id && s.slug === systemSlug
  );
}

/**
 * Get a product system across all families by system slug
 */
export function getSystemBySlugOnly(systemSlug: string): ProductSystem | undefined {
  return CANONICAL_SYSTEMS.find((s) => s.slug === systemSlug);
}

/**
 * Get all variants belonging to a system
 */
export function getVariantsBySystem(systemSlugOrId: string): ProductVariant[] {
  const system = CANONICAL_SYSTEMS.find(
    (s) => s.slug === systemSlugOrId || s.id === systemSlugOrId
  );
  return system?.variants || [];
}

/**
 * Resolve a legacy product slug (e.g. 'window_door_profiles') to its canonical hierarchy
 */
export function resolveLegacyProductSlug(slug: string): LegacyRouteResolution | undefined {
  return LEGACY_PRODUCT_ROUTE_MAP[slug];
}

/**
 * Resolve a legacy category slug (e.g. 'architectural-systems') to its canonical division slug
 */
export function resolveLegacyCategorySlug(slug: string): string | undefined {
  return LEGACY_CATEGORY_ROUTE_MAP[slug];
}

/**
 * Get all canonical surface finish specifications
 */
export function getProductFinishes(): ProductFinish[] {
  return CANONICAL_FINISHES;
}

/**
 * Get finish by ID
 */
export function getFinishById(id: string): ProductFinish | undefined {
  return CANONICAL_FINISHES.find((f) => f.id === id);
}

/**
 * Global search across divisions, families, and systems
 */
export function searchCatalog(query: string): {
  divisions: ProductDivision[];
  families: ProductFamily[];
  systems: ProductSystem[];
} {
  const clean = query.trim().toLowerCase();
  if (!clean) {
    return { divisions: [], families: [], systems: [] };
  }

  const divisions = CANONICAL_DIVISIONS.filter(
    (d) =>
      d.name.toLowerCase().includes(clean) ||
      d.summary.toLowerCase().includes(clean) ||
      d.applications.some((a) => a.toLowerCase().includes(clean))
  );

  const families = CANONICAL_FAMILIES.filter(
    (f) =>
      f.name.toLowerCase().includes(clean) ||
      f.summary.toLowerCase().includes(clean) ||
      f.technicalApplications.some((a) => a.toLowerCase().includes(clean)) ||
      f.alloys.some((al) => al.toLowerCase().includes(clean))
  );

  const systems = CANONICAL_SYSTEMS.filter(
    (s) =>
      s.name.toLowerCase().includes(clean) ||
      s.summary.toLowerCase().includes(clean) ||
      s.alloys.some((al) => al.toLowerCase().includes(clean))
  );

  return { divisions, families, systems };
}
