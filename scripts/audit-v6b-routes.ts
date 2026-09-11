async function testV6BRoutes() {
  const routes = [
    {
      url: 'http://localhost:3000/products/architectural/windows-doors',
      expected: [200],
      mustInclude: [
        'Aluminium Window &amp; Door Systems',
        'Polyamide PA66 GF25',
        'Premium architectural powder coating using AkzoNobel powder coating systems',
        '*Warranty availability and duration depend on the approved coating system',
        'Aluminium Sliding Window Systems'
      ],
      mustNotInclude: ['Interpon']
    },
    {
      url: 'http://localhost:3000/products/architectural/windows-doors/sliding-window',
      expected: [200],
      mustInclude: [
        'Aluminium Sliding Window Systems',
        '2-Track &amp; 3-Track Flexible Opening Configurations',
        '304 Stainless Steel Glide Rail',
        'Premium architectural powder coating using AkzoNobel powder coating systems',
        '*Warranty availability and duration depend on the approved coating system'
      ],
      mustNotInclude: ['Interpon']
    },
    {
      url: 'http://localhost:3000/rfq?division=architectural&family=windows-doors&system=sliding-window',
      expected: [200],
      mustInclude: [
        'Loading RFQ Builder...'
      ]
    }
  ];

  console.log('--- AUDITING V6-B GOLDEN TEMPLATE ROUTES ON LIVE SERVER ---');
  let allPass = true;

  for (const r of routes) {
    try {
      const res = await fetch(r.url, { redirect: 'manual' });
      const pass = r.expected.includes(res.status);
      const text = await res.text();

      let contentPass = true;
      const missingSnippets: string[] = [];
      const forbiddenFound: string[] = [];

      if (r.mustInclude) {
        for (const snippet of r.mustInclude) {
          if (!text.includes(snippet)) {
            contentPass = false;
            missingSnippets.push(snippet);
          }
        }
      }

      if (r.mustNotInclude) {
        for (const snippet of r.mustNotInclude) {
          if (new RegExp(snippet, 'i').test(text)) {
            contentPass = false;
            forbiddenFound.push(snippet);
          }
        }
      }

      const overall = pass && contentPass;
      console.log(
        `${overall ? '✅ PASS' : '❌ FAIL'} [${res.status}] ${r.url} (Length: ${text.length})`
      );

      if (!pass) {
        console.log(`   Expected status ${r.expected.join('/')} but got ${res.status}`);
        allPass = false;
      }
      if (missingSnippets.length > 0) {
        console.log(`   Missing required snippets: ${JSON.stringify(missingSnippets)}`);
        allPass = false;
      }
      if (forbiddenFound.length > 0) {
        console.log(`   Found forbidden snippets: ${JSON.stringify(forbiddenFound)}`);
        allPass = false;
      }
    } catch (e) {
      console.log(`❌ FAIL [ERR] ${r.url}: ${(e as Error).message}`);
      allPass = false;
    }
  }

  if (allPass) {
    console.log('🎉 ALL V6-B GOLDEN TEMPLATE ROUTES PASSED VERIFICATION (100%)');
  } else {
    console.log('💥 SOME ROUTES FAILED VERIFICATION');
    process.exit(1);
  }
}

testV6BRoutes();
