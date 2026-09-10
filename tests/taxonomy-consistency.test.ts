import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import {
  PRODUCT_TAXONOMY,
  getTopLevelCategories,
  getCategoryBySlug,
  getSubcategoriesByCategory,
  getSubcategoryBySlug,
  getAllCanonicalCategorySlugs,
  getAllSubcategoryFullSlugs
} from '../packages/types/src/product-taxonomy';

test('Verify Canonical 6 Top-Level Categories exist in Single Source of Truth', () => {
  const categories = getTopLevelCategories();
  assert.strictEqual(categories.length, 6, 'There must be exactly 6 canonical top-level categories');

  const expectedCodes = ['CUSTOM', 'INDUSTRIAL', 'ENERGY', 'BUILDING', 'THERMAL', 'OEM'];
  const actualCodes = categories.map((c) => c.code);
  assert.deepStrictEqual(actualCodes, expectedCodes, 'Category codes must match canonical sequence');

  const expectedSlugs = [
    'custom-extrusions',
    'industrial-profiles',
    'solar',
    'architectural',
    'thermal-management',
    'oem-components'
  ];
  const actualSlugs = categories.map((c) => c.slug);
  assert.deepStrictEqual(actualSlugs, expectedSlugs, 'Category slugs must match canonical sequence');
});

test('Verify Architectural Aluminium contains all 11 Groups A through K', () => {
  const arch = getCategoryBySlug('architectural');
  assert.ok(arch, 'Architectural category must exist');

  const expectedGroups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
  const groupsInArch = arch.subcategories.map((s) => s.groupKey).filter(Boolean);

  for (const g of expectedGroups) {
    assert.ok(
      groupsInArch.includes(g),
      `Architectural Aluminium must contain Group ${g}`
    );
  }
});

test('Verify all subcategories have valid metadata, fullSlug, and applications', () => {
  const allSubcategories = getAllSubcategoryFullSlugs();
  assert.ok(allSubcategories.length >= 70, `Expected at least 70 subcategories, found ${allSubcategories.length}`);

  for (const cat of PRODUCT_TAXONOMY) {
    for (const sub of cat.subcategories) {
      assert.ok(sub.id, `Subcategory ${sub.slug} must have an id`);
      assert.ok(sub.name, `Subcategory ${sub.slug} must have a name`);
      assert.ok(sub.shortDescription, `Subcategory ${sub.slug} must have a shortDescription`);
      assert.ok(sub.fullSlug.startsWith(`/products/${cat.slug}/`), `Subcategory ${sub.slug} fullSlug must start with /products/${cat.slug}/`);
      assert.ok(sub.applications.length > 0, `Subcategory ${sub.slug} must have at least one application`);
    }
  }
});

test('Verify category slug mapping and aliases resolve correctly', () => {
  // Aliases
  assert.strictEqual(getCategoryBySlug('solar-profiles')?.slug, 'solar');
  assert.strictEqual(getCategoryBySlug('solar')?.slug, 'solar');
  assert.strictEqual(getCategoryBySlug('architectural-systems')?.slug, 'architectural');
  assert.strictEqual(getCategoryBySlug('architectural')?.slug, 'architectural');
  assert.strictEqual(getCategoryBySlug('heat-sink-thermal')?.slug, 'thermal-management');
  assert.strictEqual(getCategoryBySlug('thermal-management')?.slug, 'thermal-management');
});

test('Verify subcategory lookup helper retrieves valid match', () => {
  const match = getSubcategoryBySlug('architectural', 'windows-doors');
  assert.ok(match, 'Must find architectural windows-doors');
  assert.strictEqual(match.category.slug, 'architectural');
  assert.strictEqual(match.subcategory.name, 'Windows & Doors');
});

test('Verify Button and FormControls UI design tokens comply with Spec V5', () => {
  const buttonFile = path.resolve(process.cwd(), 'packages/ui/src/components/Button.tsx');
  const buttonContent = fs.readFileSync(buttonFile, 'utf-8');

  // Button md must have min-h-[48px] and px-5 (20px)
  assert.ok(buttonContent.includes('min-h-[48px]'), 'Button must enforce min-height 48px');
  assert.ok(buttonContent.includes('px-5'), 'Button md must have 20px horizontal padding (px-5)');

  // FormControls must enforce min-height 48px and px-4 (16px)
  const formFile = path.resolve(process.cwd(), 'packages/ui/src/components/FormControls.tsx');
  const formContent = fs.readFileSync(formFile, 'utf-8');
  assert.ok(formContent.includes('min-h-[48px]'), 'Input must enforce min-height 48px');
  assert.ok(formContent.includes('px-4'), 'Input must enforce 16px horizontal padding (px-4)');
});
