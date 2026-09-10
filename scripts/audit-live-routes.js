async function testRoutes() {
  const routes = [
    { url: 'http://localhost:3000/products', expected: [200] },
    { url: 'http://localhost:3000/products/custom-extrusions', expected: [200] },
    { url: 'http://localhost:3000/products/architectural', expected: [200] },
    { url: 'http://localhost:3000/products/industrial-profiles', expected: [200] },
    { url: 'http://localhost:3000/products/solar', expected: [200] },
    { url: 'http://localhost:3000/products/thermal-management', expected: [200] },
    { url: 'http://localhost:3000/products/oem-components', expected: [200] },
    { url: 'http://localhost:3000/products/architectural/windows-doors', expected: [200] },
    { url: 'http://localhost:3000/products/solar/solar-mounting-rails', expected: [200] },
    { url: 'http://localhost:3000/product/window_door_profiles', expected: [308, 301, 307] },
    { url: 'http://localhost:3000/product/heat_sink_profiles', expected: [308, 301, 307] },
    { url: 'http://localhost:3000/products/solar-profiles', expected: [308, 301, 307] },
    { url: 'http://localhost:3000/rfq?product=window_door_profiles', expected: [200] }
  ];

  let allPass = true;
  for (const r of routes) {
    try {
      const res = await fetch(r.url, { redirect: 'manual' });
      const pass = r.expected.includes(res.status);
      const loc = res.headers.get('location');
      console.log(`${pass ? 'PASS' : 'FAIL'} [${res.status}] ${r.url} ${loc ? '-> ' + loc : ''}`);
      if (!pass) allPass = false;
    } catch (e) {
      console.log(`FAIL [ERR] ${r.url}: ${e.message}`);
      allPass = false;
    }
  }
  process.exit(allPass ? 0 : 1);
}

testRoutes();
