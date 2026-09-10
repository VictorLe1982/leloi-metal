import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://leloimetal.com';
  const now = new Date();

  const coreRoutes = [
    '',
    '/products',
    '/products/custom-extrusions',
    '/products/industrial-profiles',
    '/products/solar',
    '/products/architectural',
    '/products/thermal-management',
    '/products/oem-components',
    '/capabilities',
    '/capabilities/powder-coating',
    '/capabilities/aluminium-extrusion',
    '/capabilities/cnc-machining',
    '/capabilities/anodizing',
    '/industries',
    '/markets',
    '/insights',
    '/tools/aluminium-weight-calculator',
    '/tools/import-duty-checker',
    '/tools/alloy-selector',
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
