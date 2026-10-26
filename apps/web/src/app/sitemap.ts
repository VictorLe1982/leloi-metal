import { MetadataRoute } from 'next';
import { CANONICAL_FAMILIES, getProductDivisions } from '@leloi/types';
import { getCapabilitySlugs } from '@/data/capabilities';
import { INSIGHT_SLUGS } from '@/data/insights';
import { MARKET_SLUGS } from '@/data/markets';

const BASE_URL = 'https://leloimetal.com';

type Entry = MetadataRoute.Sitemap[number];

/**
 * Generated entirely from the same data the pages render from, so a sitemap
 * entry cannot drift into a 404 and a new family cannot be silently omitted.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entry = (
    path: string,
    priority: number,
    changeFrequency: Entry['changeFrequency']
  ): Entry => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority
  });

  const core: Entry[] = [
    entry('', 1.0, 'weekly'),
    entry('/products', 0.9, 'weekly'),
    entry('/rfq', 0.9, 'monthly'),
    entry('/capabilities', 0.8, 'monthly'),
    entry('/industries', 0.7, 'monthly'),
    entry('/markets', 0.7, 'monthly'),
    entry('/insights', 0.7, 'weekly'),
    entry('/about', 0.6, 'monthly'),
    entry('/contact', 0.6, 'monthly'),
    entry('/sustainability', 0.6, 'monthly')
  ];

  const divisions: Entry[] = getProductDivisions().map((division) =>
    entry(`/products/${division.slug}`, 0.9, 'weekly')
  );

  const families: Entry[] = CANONICAL_FAMILIES.map((family) =>
    entry(`/products/${family.divisionSlug}/${family.slug}`, 0.8, 'weekly')
  );

  // Hand-built dossier pages that sit outside the dynamic family route.
  const systems: Entry[] = [
    entry('/products/architectural/windows-doors/sliding-window', 0.8, 'monthly')
  ];

  const capabilities: Entry[] = [
    ...getCapabilitySlugs().map((slug) => entry(`/capabilities/${slug}`, 0.7, 'monthly')),
    entry('/capabilities/powder-coating', 0.7, 'monthly')
  ];

  const tools: Entry[] = [
    entry('/tools/aluminium-weight-calculator', 0.8, 'monthly'),
    entry('/tools/import-duty-checker', 0.8, 'monthly'),
    entry('/tools/alloy-selector', 0.8, 'monthly')
  ];

  const markets: Entry[] = MARKET_SLUGS.map((slug) => entry(`/markets/${slug}`, 0.7, 'monthly'));

  const insights: Entry[] = INSIGHT_SLUGS.map((slug) => entry(`/insights/${slug}`, 0.6, 'monthly'));

  const legal: Entry[] = [
    entry('/legal/privacy', 0.2, 'yearly'),
    entry('/legal/terms', 0.2, 'yearly'),
    entry('/legal/cookie-policy', 0.2, 'yearly')
  ];

  return [
    ...core,
    ...divisions,
    ...families,
    ...systems,
    ...capabilities,
    ...tools,
    ...markets,
    ...insights,
    ...legal
  ];
}
