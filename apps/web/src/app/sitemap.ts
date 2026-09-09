import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://leloimetal.com';
  const now = new Date();

  const coreRoutes = [
    '',
    '/products',
    '/products/custom-aluminium-extrusions',
    '/products/industrial-aluminium-profiles',
    '/products/solar-aluminium-profiles',
    '/products/architectural-aluminium',
    '/products/heat-sink-profiles',
    '/products/oem-aluminium-components',
    '/capabilities',
    '/industries',
    '/tools/aluminium-weight-calculator',
    '/about',
    '/contact',
    '/rfq'
  ];

  return coreRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' || route.startsWith('/products') ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/products') || route === '/rfq' ? 0.9 : 0.7
  }));
}
