import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

test('Verify Brand Logo Single Source of Truth exists', () => {
  const brandDir = path.resolve(process.cwd(), 'apps/web/public/brand/leloi-metal');
  assert.ok(fs.existsSync(brandDir), 'Brand directory must exist');

  const requiredFiles = [
    'logo-primary.svg',
    'logo-primary.png',
    'logo-white.svg',
    'logo-white.png',
    'logo-mark.svg'
  ];

  for (const file of requiredFiles) {
    const filePath = path.join(brandDir, file);
    assert.ok(fs.existsSync(filePath), `Required logo file ${file} must exist in public/brand/leloi-metal/`);
    const stat = fs.statSync(filePath);
    assert.ok(stat.size > 0, `Logo file ${file} must not be empty`);
  }
});

test('Verify Homepage Product Solution cards are wrapped in valid Links', () => {
  const homeFile = path.resolve(process.cwd(), 'apps/web/src/app/page.tsx');
  const content = fs.readFileSync(homeFile, 'utf-8');

  // Verify all 6 solution links are present
  const requiredLinks = [
    '/products/custom-extrusions',
    '/products/industrial-profiles',
    '/products/solar',
    '/products/architectural',
    '/products/thermal-management',
    '/products/oem-components'
  ];

  for (const link of requiredLinks) {
    assert.ok(
      content.includes(`href="${link}"`),
      `Homepage must include clickable Link to ${link}`
    );
  }

  // Verify Surface Finishing links to powder-coating
  assert.ok(
    content.includes('href="/capabilities/powder-coating"'),
    'Homepage must link Surface Finishing capability to /capabilities/powder-coating'
  );
});

test('Verify Header Desktop Navigation has simplified 6 items and Mega Menu', () => {
  const headerFile = path.resolve(process.cwd(), 'apps/web/src/components/Header.tsx');
  const content = fs.readFileSync(headerFile, 'utf-8');

  // Must use BrandLogo
  assert.ok(content.includes('BrandLogo'), 'Header must use BrandLogo component');
  assert.ok(content.includes('variant="primary"'), 'Header must use primary logo variant');

  // Must have 6 primary links
  assert.ok(content.includes('href="/products"'), 'Header must have /products');
  assert.ok(content.includes('href="/capabilities"'), 'Header must have /capabilities');
  assert.ok(content.includes('href="/industries"'), 'Header must have /industries');
  assert.ok(content.includes('href="/markets"'), 'Header must have /markets');
  assert.ok(content.includes('href="/insights"'), 'Header must have /insights');
  assert.ok(content.includes('href="/about"'), 'Header must have /about');

  // Must include Mega Menu powered by PRODUCT_TAXONOMY
  assert.ok(content.includes('PRODUCT_TAXONOMY'), 'Mega menu must use PRODUCT_TAXONOMY');
  assert.ok(content.includes('sub.fullSlug'), 'Mega menu must link to subcategory fullSlug');
  assert.ok(content.includes('href="/capabilities/powder-coating"'), 'Mega menu must have powder-coating');
});

test('Verify Footer uses BrandLogo white variant and canonical links', () => {
  const footerFile = path.resolve(process.cwd(), 'apps/web/src/components/Footer.tsx');
  const content = fs.readFileSync(footerFile, 'utf-8');

  assert.ok(content.includes('BrandLogo'), 'Footer must use BrandLogo component');
  assert.ok(content.includes('variant="white"'), 'Footer must use white logo variant');

  // Canonical product solution links powered by PRODUCT_TAXONOMY
  assert.ok(content.includes('PRODUCT_TAXONOMY'), 'Footer must use PRODUCT_TAXONOMY for canonical links');
  assert.ok(content.includes('href="/capabilities/powder-coating"'), 'Footer must link to powder-coating');

  // Must not have dead hash links
  assert.ok(!content.includes('href="#"'), 'Footer must not contain dead href="#" links');
});

test('Verify Architectural Systems Hub and Powder Coating pages exist', () => {
  const archPage = path.resolve(process.cwd(), 'apps/web/src/app/products/architectural/page.tsx');
  const powderPage = path.resolve(process.cwd(), 'apps/web/src/app/capabilities/powder-coating/page.tsx');

  assert.ok(fs.existsSync(archPage), 'Architectural hub page must exist');
  assert.ok(fs.existsSync(powderPage), 'Powder coating capability page must exist');

  const archContent = fs.readFileSync(archPage, 'utf-8');
  assert.ok(archContent.includes('AkzoNobel'), 'Architectural page must reference AkzoNobel');
  assert.ok(archContent.includes('10-Year Warranty'), 'Architectural page must reference 10-Year Warranty');

  const powderContent = fs.readFileSync(powderPage, 'utf-8');
  assert.ok(powderContent.includes('AkzoNobel'), 'Powder coating page must reference AkzoNobel');
  assert.ok(powderContent.includes('10-Year'), 'Powder coating page must reference 10-Year Warranty');
});
