import { test, describe } from 'node:test';
import assert from 'node:assert';
import {
  getDivisionBySlug,
  getFamilyBySlug,
  resolveLegacyProductSlug
} from '../packages/types/src';

describe('LELOI METAL — RFQ Normalization across 6 Divisions', () => {
  const testCases = [
    {
      divisionSlug: 'architectural',
      familySlug: 'windows-doors',
      legacySlug: 'window_door_profiles',
      expectedCategory: 'Architectural Aluminium',
      expectedFamilyName: 'Windows & Doors Systems'
    },
    {
      divisionSlug: 'thermal-management',
      familySlug: 'industrial-heat-sinks',
      legacySlug: 'heat_sink_profiles',
      expectedCategory: 'Thermal Management',
      expectedFamilyName: 'Heavy Industrial Comb Heat Sinks'
    },
    {
      divisionSlug: 'solar',
      familySlug: 'solar-mounting-rails',
      legacySlug: 'solar_mounting_rails',
      expectedCategory: 'Solar Aluminium',
      expectedFamilyName: 'Solar Mounting Rails'
    },
    {
      divisionSlug: 'industrial-profiles',
      familySlug: 't-slot-framing',
      legacySlug: 't_slot_framing',
      expectedCategory: 'Industrial Profiles',
      expectedFamilyName: 'T-Slot Modular Framing Profiles'
    },
    {
      divisionSlug: 'oem-components',
      familySlug: 'cnc-machined-components',
      legacySlug: 'cnc_machined_components',
      expectedCategory: 'OEM Components',
      expectedFamilyName: 'CNC Machined Aluminium Components'
    },
    {
      divisionSlug: 'custom-extrusions',
      familySlug: 'square-rectangular-profiles',
      legacySlug: 'square_rectangular_hollow_profiles',
      expectedCategory: 'Custom Aluminium Extrusions',
      expectedFamilyName: 'Square & Rectangular Hollow Profiles'
    }
  ];

  for (const tc of testCases) {
    test(`RFQ Normalization: ${tc.divisionSlug} (${tc.familySlug}) matches legacy (${tc.legacySlug})`, () => {
      // 1. Canonical evaluation
      const canonicalDiv = getDivisionBySlug(tc.divisionSlug);
      const canonicalFam = getFamilyBySlug(tc.divisionSlug, tc.familySlug);
      assert.ok(canonicalDiv, `Division ${tc.divisionSlug} not found`);
      assert.ok(canonicalFam, `Family ${tc.familySlug} not found in ${tc.divisionSlug}`);
      assert.strictEqual(canonicalDiv.name, tc.expectedCategory);
      assert.strictEqual(canonicalFam.name, tc.expectedFamilyName);

      // 2. Legacy evaluation
      const legacyResolution = resolveLegacyProductSlug(tc.legacySlug);
      assert.ok(legacyResolution, `Legacy slug ${tc.legacySlug} failed to resolve`);
      assert.strictEqual(legacyResolution.division, tc.divisionSlug);
      assert.strictEqual(legacyResolution.family, tc.familySlug);

      const resolvedDiv = getDivisionBySlug(legacyResolution.division);
      const resolvedFam = getFamilyBySlug(legacyResolution.division, legacyResolution.family);
      assert.strictEqual(resolvedDiv?.name, canonicalDiv.name);
      assert.strictEqual(resolvedFam?.name, canonicalFam.name);
    });
  }
});
