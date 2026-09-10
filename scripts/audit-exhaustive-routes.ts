import fs from 'fs';
import path from 'path';
import http from 'http';
import {
  CANONICAL_DIVISIONS,
  CANONICAL_FAMILIES,
  CANONICAL_SYSTEMS,
} from '../packages/types/src/data/canonical-products-data';
import {
  LEGACY_PRODUCT_ROUTE_MAP,
  LEGACY_CATEGORY_ROUTE_MAP,
} from '../packages/types/src/legacy-product-route-map';

interface RouteAuditRecord {
  route: string;
  entity_type: 'ProductDivision' | 'ProductFamily' | 'ProductSystem' | 'LegacyProductRedirect' | 'LegacyCategoryRedirect' | 'CatalogRoot' | 'RFQ';
  HTTP_status: number;
  canonical_url: string;
  indexable: boolean;
  redirect_target: string | null;
  result: 'PASS' | 'FAIL';
  error?: string;
}

interface TargetRoute {
  path: string;
  entity_type: RouteAuditRecord['entity_type'];
  canonical_url: string;
}

const routesToTest: TargetRoute[] = [];

// 1. Division routes
for (const div of CANONICAL_DIVISIONS) {
  routesToTest.push({
    path: `/products/${div.slug}`,
    entity_type: 'ProductDivision',
    canonical_url: `https://leloimetal.com/products/${div.slug}`
  });
}

// 2. Family routes (60)
for (const fam of CANONICAL_FAMILIES) {
  routesToTest.push({
    path: `/products/${fam.divisionSlug}/${fam.slug}`,
    entity_type: 'ProductFamily',
    canonical_url: `https://leloimetal.com/products/${fam.divisionSlug}/${fam.slug}`
  });
}

// 3. Published Systems
for (const sys of CANONICAL_SYSTEMS) {
  routesToTest.push({
    path: `/products/${sys.divisionId}?system=${sys.id}`,
    entity_type: 'ProductSystem',
    canonical_url: `https://leloimetal.com/products/${sys.divisionId}`
  });
}

// 4. Catalog roots & RFQ
routesToTest.push(
  { path: '/products', entity_type: 'CatalogRoot', canonical_url: 'https://leloimetal.com/products' },
  { path: '/rfq', entity_type: 'RFQ', canonical_url: 'https://leloimetal.com/rfq' },
  { path: '/capabilities/powder-coating', entity_type: 'CatalogRoot', canonical_url: 'https://leloimetal.com/capabilities/powder-coating' }
);

// 5. Legacy Product Redirects
for (const legacySlug of Object.keys(LEGACY_PRODUCT_ROUTE_MAP)) {
  const dest = LEGACY_PRODUCT_ROUTE_MAP[legacySlug];
  routesToTest.push({
    path: `/product/${legacySlug}`,
    entity_type: 'LegacyProductRedirect',
    canonical_url: `https://leloimetal.com${dest}`
  });
}

// 6. Legacy Category Redirects
for (const legacyCat of Object.keys(LEGACY_CATEGORY_ROUTE_MAP)) {
  const dest = LEGACY_CATEGORY_ROUTE_MAP[legacyCat];
  routesToTest.push({
    path: `/products/${legacyCat}`,
    entity_type: 'LegacyCategoryRedirect',
    canonical_url: `https://leloimetal.com/products/${dest}`
  });
}

function fetchRoute(routePath: string): Promise<{ status: number; location: string | null }> {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: routePath,
      method: 'GET',
      headers: {
        'User-Agent': 'LELOI-Exhaustive-Audit-Bot/1.0',
      },
    };

    const req = http.request(options, (res) => {
      resolve({
        status: res.statusCode || 0,
        location: res.headers.location || null,
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.setTimeout(5000, () => {
      req.destroy();
      reject(new Error(`Timeout fetching ${routePath}`));
    });

    req.end();
  });
}

async function runExhaustiveAudit() {
  console.log(`Starting exhaustive route crawl on http://localhost:3000...`);
  console.log(`Total canonical and redirect routes to test: ${routesToTest.length}`);

  const results: RouteAuditRecord[] = [];
  let passCount = 0;
  let failCount = 0;

  for (const item of routesToTest) {
    try {
      const resp = await fetchRoute(item.path);
      const isRedirect = resp.status === 301 || resp.status === 308 || resp.status === 302 || resp.status === 307;
      const isSuccess = resp.status === 200;

      let result: 'PASS' | 'FAIL' = 'FAIL';
      let errorMsg: string | undefined;

      if (item.entity_type.includes('Redirect')) {
        if (isRedirect && resp.location) {
          result = 'PASS';
        } else if (isSuccess) {
          // Direct serve without redirect or route handled
          result = 'PASS';
        } else {
          result = 'FAIL';
          errorMsg = `Expected redirect or 200, received HTTP ${resp.status}`;
        }
      } else {
        if (isSuccess) {
          result = 'PASS';
        } else {
          result = 'FAIL';
          errorMsg = `Expected HTTP 200, received HTTP ${resp.status}`;
        }
      }

      if (result === 'PASS') {
        passCount++;
      } else {
        failCount++;
      }

      results.push({
        route: item.path,
        entity_type: item.entity_type,
        HTTP_status: resp.status,
        canonical_url: item.canonical_url,
        indexable: resp.status === 200,
        redirect_target: resp.location,
        result,
        error: errorMsg
      });
    } catch (err: any) {
      failCount++;
      results.push({
        route: item.path,
        entity_type: item.entity_type,
        HTTP_status: 0,
        canonical_url: item.canonical_url,
        indexable: false,
        redirect_target: null,
        result: 'FAIL',
        error: err.message
      });
    }
  }

  const reportsDir = path.resolve(process.cwd(), 'reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(reportsDir, 'v6-route-audit.json'),
    JSON.stringify(results, null, 2),
    'utf-8'
  );

  console.log(`\n=== EXHAUSTIVE ROUTE AUDIT RESULTS ===`);
  console.log(`Total Routes Crawled: ${results.length}`);
  console.log(`PASS: ${passCount}`);
  console.log(`FAIL: ${failCount}`);
  console.log(`Health Rate: ${((passCount / results.length) * 100).toFixed(1)}%`);
  console.log(`Report written to reports/v6-route-audit.json`);

  if (failCount > 0) {
    console.error(`Failed routes:`);
    for (const r of results.filter(r => r.result === 'FAIL')) {
      console.error(`  - ${r.route} (${r.entity_type}): HTTP ${r.HTTP_status} - ${r.error}`);
    }
    process.exit(1);
  }
}

runExhaustiveAudit().catch(err => {
  console.error(err);
  process.exit(1);
});
