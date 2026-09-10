import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

import {
  getProductDivisions,
  getDivisionBySlug,
  getFamiliesByDivision,
  getFamilyBySlug,
  getFamilyBySlugOnly,
  getSystemsByFamily,
  resolveLegacyProductSlug,
  resolveLegacyCategorySlug,
  LEGACY_PRODUCT_ROUTE_MAP,
  LEGACY_CATEGORY_ROUTE_MAP,
  CANONICAL_FAMILIES
} from '../packages/types/src/index';

describe('LELOI METAL — Product Architecture V6-A Test Suite', () => {
  // Test A: Exactly 6 ProductDivisions
  test('Test A: Exactly 6 ProductDivisions returned by getProductDivisions()', () => {
    const divisions = getProductDivisions();
    assert.equal(divisions.length, 6, `Expected 6 divisions, got ${divisions.length}`);
    const slugs = divisions.map((d) => d.slug);
    assert.deepEqual(slugs.sort(), [
      'architectural',
      'custom-extrusions',
      'industrial-profiles',
      'oem-components',
      'solar',
      'thermal-management'
    ].sort());
  });

  // Test B: Architectural returns 11 ProductFamilies
  test('Test B: Architectural aluminium returns exactly 11 ProductFamilies', () => {
    const families = getFamiliesByDivision('architectural');
    assert.equal(families.length, 11, `Expected 11 architectural families, got ${families.length}`);
    const slugs = families.map((f) => f.slug);
    const expected = [
      'windows-doors',
      'curtain-wall-facade',
      'louvers-sunshade',
      'wall-cladding',
      'ceiling-systems',
      'canopies',
      'pergola',
      'bungalow-resort',
      'railing-balustrade',
      'decorative-aluminium',
      'thermal-break'
    ];
    assert.deepEqual(slugs.sort(), expected.sort());
  });

  // Test C: Industrial returns 10 ProductFamilies
  test('Test C: Industrial profiles returns exactly 10 ProductFamilies', () => {
    const families = getFamiliesByDivision('industrial-profiles');
    assert.equal(families.length, 10, `Expected 10 industrial families, got ${families.length}`);
    const slugs = families.map((f) => f.slug);
    const expected = [
      't-slot-framing',
      'machine-frames',
      'automation-profiles',
      'conveyor-profiles',
      'safety-guarding',
      'workstation-systems',
      'cleanroom-systems',
      'linear-motion',
      'equipment-frames',
      'custom-industrial-extrusions'
    ];
    assert.deepEqual(slugs.sort(), expected.sort());
  });

  // Test D: Solar returns 10 ProductFamilies
  test('Test D: Solar aluminium returns exactly 10 ProductFamilies', () => {
    const families = getFamiliesByDivision('solar');
    assert.equal(families.length, 10, `Expected 10 solar families, got ${families.length}`);
    const slugs = families.map((f) => f.slug);
    const expected = [
      'solar-module-frames',
      'solar-mounting-rails',
      'rooftop-systems',
      'ground-mount-systems',
      'solar-clamps',
      'solar-carport',
      'solar-canopies',
      'bipv-profiles',
      'solar-structural-profiles',
      'inverter-enclosures'
    ];
    assert.deepEqual(slugs.sort(), expected.sort());
  });

  // Test E: Thermal returns 8 ProductFamilies
  test('Test E: Thermal management returns exactly 8 ProductFamilies', () => {
    const families = getFamiliesByDivision('thermal-management');
    assert.equal(families.length, 8, `Expected 8 thermal families, got ${families.length}`);
    const slugs = families.map((f) => f.slug);
    const expected = [
      'led-heat-sinks',
      'lighting-heat-sinks',
      'inverter-heat-sinks',
      'power-electronics-cooling',
      'ev-charger-heat-sinks',
      'battery-thermal',
      'telecom-cooling',
      'industrial-heat-sinks'
    ];
    assert.deepEqual(slugs.sort(), expected.sort());
  });

  // Test F: OEM returns 10 ProductFamilies
  test('Test F: OEM components returns exactly 10 ProductFamilies', () => {
    const families = getFamiliesByDivision('oem-components');
    assert.equal(families.length, 10, `Expected 10 OEM families, got ${families.length}`);
    const slugs = families.map((f) => f.slug);
    const expected = [
      'cnc-machined-components',
      'precision-cut-components',
      'drilled-components',
      'tapped-components',
      'milled-components',
      'surface-finished-components',
      'powder-coated-components',
      'anodized-components',
      'assembled-subcomponents',
      'custom-oem-parts'
    ];
    assert.deepEqual(slugs.sort(), expected.sort());
  });

  // Test G: Custom Extrusions returns 11 ProductFamilies
  test('Test G: Custom extrusions returns exactly 11 ProductFamilies', () => {
    const families = getFamiliesByDivision('custom-extrusions');
    assert.equal(families.length, 11, `Expected 11 custom extrusion families, got ${families.length}`);
    const slugs = families.map((f) => f.slug);
    const expected = [
      'solid-extrusions',
      'hollow-extrusions',
      'semi-hollow-extrusions',
      'complex-extrusions',
      'round-profiles',
      'square-rectangular-profiles',
      'angles',
      'channels',
      'structural-profiles',
      'decorative-profiles',
      'made-to-drawing'
    ];
    assert.deepEqual(slugs.sort(), expected.sort());
  });

  // Total Families Check: 11 + 10 + 10 + 8 + 10 + 11 = 60
  test('Total Canonical Solution Families equals 60', () => {
    assert.equal(CANONICAL_FAMILIES.length, 60, `Expected 60 total families, got ${CANONICAL_FAMILIES.length}`);
  });

  // Test H: All division slugs are valid and distinct
  test('Test H: All division slugs are valid, non-empty, and unique', () => {
    const divisions = getProductDivisions();
    const set = new Set<string>();
    for (const d of divisions) {
      assert.ok(d.slug && d.slug.length > 2, `Invalid slug ${d.slug}`);
      assert.ok(!set.has(d.slug), `Duplicate division slug ${d.slug}`);
      set.add(d.slug);
      const found = getDivisionBySlug(d.slug);
      assert.ok(found, `getDivisionBySlug failed for ${d.slug}`);
    }
  });

  // Test I: All 60 family slugs resolve with their division
  test('Test I: All 60 families resolve with getFamilyBySlug', () => {
    for (const fam of CANONICAL_FAMILIES) {
      const found = getFamilyBySlug(fam.divisionSlug, fam.slug);
      assert.ok(found, `Failed resolving family ${fam.slug} in ${fam.divisionSlug}`);
      assert.equal(found.id, fam.id);
    }
  });

  // Test J: Legacy URLs and aliases redirect correctly
  test('Test J: All 24 legacy product slugs resolve to a valid canonical route', () => {
    const legacy24 = [
      'square_rectangular_hollow_profiles',
      'round_tubes',
      'solid_bars',
      'angle_profiles',
      'u_channel_profiles',
      't_profiles',
      'i_beam_profiles',
      'h_profiles',
      't_slot_modular_profiles',
      'v_slot_profiles',
      'solar_panel_frame_profiles',
      'solar_mounting_rails',
      'solar_mid_clamps',
      'solar_end_clamps',
      'heat_sink_profiles',
      'led_lighting_profiles',
      'curtain_wall_profiles',
      'window_door_profiles',
      'handrail_profiles',
      'railing_balustrade_profiles',
      'enclosure_profiles',
      'cnc_machined_components',
      'custom_aluminium_parts',
      'industrial_assemblies'
    ];

    for (const slug of legacy24) {
      const match = resolveLegacyProductSlug(slug);
      assert.ok(match, `Legacy slug ${slug} not in route map!`);
      assert.ok(match.redirectUrl.startsWith('/products/'), `Invalid redirect URL ${match.redirectUrl}`);
      assert.ok(match.division, `Missing division for ${slug}`);
      assert.ok(match.family, `Missing family for ${slug}`);
    }
  });

  // Test K: Legacy RFQ product query resolves
  test('Test K: Legacy RFQ product queries resolve to valid canonical divisions and families', () => {
    const testCases = [
      { legacy: 'window_door_profiles', expectedDiv: 'architectural', expectedFam: 'windows-doors' },
      { legacy: 'curtain_wall_profiles', expectedDiv: 'architectural', expectedFam: 'curtain-wall-facade' },
      { legacy: 'solar_mounting_rails', expectedDiv: 'solar', expectedFam: 'solar-mounting-rails' },
      { legacy: 't_slot_modular_profiles', expectedDiv: 'industrial-profiles', expectedFam: 't-slot-framing' },
      { legacy: 'heat_sink_profiles', expectedDiv: 'thermal-management', expectedFam: 'industrial-heat-sinks' },
      { legacy: 'cnc_machined_components', expectedDiv: 'oem-components', expectedFam: 'cnc-machined-components' }
    ];

    for (const tc of testCases) {
      const resolution = resolveLegacyProductSlug(tc.legacy);
      assert.ok(resolution, `Resolution failed for ${tc.legacy}`);
      assert.equal(resolution.division, tc.expectedDiv);
      assert.equal(resolution.family, tc.expectedFam);
    }
  });

  // Test L: No canonical page imports LEGACY_PRODUCTS_V2 or PRODUCTS_V2
  test('Test L: Header, Products page, Category page do not import PRODUCTS_V2 or LEGACY_PRODUCTS_V2', () => {
    const checkFiles = [
      'apps/web/src/components/Header.tsx',
      'apps/web/src/app/products/page.tsx',
      'apps/web/src/app/products/[category]/page.tsx',
      'apps/web/src/app/products/architectural/page.tsx'
    ];

    for (const relPath of checkFiles) {
      const fullPath = path.resolve(process.cwd(), relPath);
      const content = fs.readFileSync(fullPath, 'utf8');
      assert.ok(
        !content.includes('PRODUCTS_V2'),
        `File ${relPath} still imports or references PRODUCTS_V2!`
      );
      assert.ok(
        !content.includes('LEGACY_PRODUCTS_V2'),
        `File ${relPath} still imports or references LEGACY_PRODUCTS_V2!`
      );
    }
  });

  // Test M: Header only imports canonical product service
  test('Test M: Header imports only canonical product service', () => {
    const headerPath = path.resolve(process.cwd(), 'apps/web/src/components/Header.tsx');
    const content = fs.readFileSync(headerPath, 'utf8');
    assert.ok(
      content.includes('getProductDivisions'),
      'Header.tsx must import getProductDivisions'
    );
    assert.ok(
      !content.includes('PRODUCT_TAXONOMY'),
      'Header.tsx must not reference PRODUCT_TAXONOMY'
    );
    assert.ok(
      !content.includes('Browse Full Catalog (24+ Solutions)'),
      'Header.tsx must not have legacy (24+ Solutions) text'
    );
  });
});
