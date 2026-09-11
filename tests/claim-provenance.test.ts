import { test, describe } from 'node:test';
import assert from 'node:assert';
import {
  isClaimPubliclyAllowed,
  TechnicalClaim,
  getClaimsByEntityId,
  getPublicClaimsByEntityId,
  getClaimSourceById
} from '../packages/types/src';

describe('LELOI METAL — Technical Claim Provenance Engine (V6-B)', () => {
  test('Rule: Claim is PUBLIC only when VERIFIED, publicAllowed=true, and sourceId exists', () => {
    const validClaim: TechnicalClaim = {
      id: 'test-1',
      entityType: 'ProductFamily',
      entityId: 'fam-arch-01',
      field: 'alloy',
      value: '6063-T5',
      verificationStatus: 'VERIFIED',
      sourceId: 'SRC-MB-2026-AL',
      publicAllowed: true
    };
    assert.strictEqual(isClaimPubliclyAllowed(validClaim), true);
  });

  test('Mandatory Validation: VERIFIED claim with null sourceId is treated as INVALID_VERIFICATION (not public)', () => {
    const invalidVerifiedClaim: TechnicalClaim = {
      id: 'test-2',
      entityType: 'ProductFamily',
      entityId: 'fam-arch-01',
      field: 'uValue',
      value: '1.2 W/m²K',
      verificationStatus: 'VERIFIED',
      sourceId: null, // Missing source!
      publicAllowed: true
    };
    assert.strictEqual(isClaimPubliclyAllowed(invalidVerifiedClaim), false);
  });

  test('Rule: UNVERIFIED claim is NEVER publicly rendered', () => {
    const unverifiedClaim: TechnicalClaim = {
      id: 'test-3',
      entityType: 'ProductFamily',
      entityId: 'fam-arch-01',
      field: 'acoustic',
      value: '45 dB',
      verificationStatus: 'UNVERIFIED',
      sourceId: null,
      publicAllowed: false
    };
    assert.strictEqual(isClaimPubliclyAllowed(unverifiedClaim), false);
  });

  test('Rule: Claim with publicAllowed=false is NEVER publicly rendered even if verified', () => {
    const internalOnlyClaim: TechnicalClaim = {
      id: 'test-4',
      entityType: 'ProductFamily',
      entityId: 'fam-arch-01',
      field: 'internalCost',
      value: 'confidential',
      verificationStatus: 'VERIFIED',
      sourceId: 'SRC-MB-2026-AL',
      publicAllowed: false
    };
    assert.strictEqual(isClaimPubliclyAllowed(internalOnlyClaim), false);
  });

  test('Dataset Check: Windows & Doors (fam-arch-01) public claims filter out unverified records', () => {
    const allClaims = getClaimsByEntityId('fam-arch-01');
    const publicClaims = getPublicClaimsByEntityId('fam-arch-01');

    assert.ok(allClaims.length > publicClaims.length, 'Dataset must contain internal unverified claims');
    const unverifiedFound = publicClaims.some(c => c.verificationStatus === 'UNVERIFIED' || !c.sourceId);
    assert.strictEqual(unverifiedFound, false, 'Public claims must contain 0 unverified claims');

    for (const c of publicClaims) {
      assert.ok(c.sourceId, `Public claim ${c.id} must have a valid sourceId`);
      const source = getClaimSourceById(c.sourceId);
      assert.ok(source, `Source ${c.sourceId} must exist in CANONICAL_CLAIM_SOURCES`);
    }
  });

  test('Dataset Check: Sliding Window System (sys-arch-win-sliding) public claims filter out unverified U-values', () => {
    const allClaims = getClaimsByEntityId('sys-arch-win-sliding');
    const publicClaims = getPublicClaimsByEntityId('sys-arch-win-sliding');

    assert.ok(allClaims.length > publicClaims.length, 'Dataset must contain internal unverified claims');
    const uValuePublic = publicClaims.some(c => c.field === 'thermalTransmittance');
    assert.strictEqual(uValuePublic, false, 'Unverified U-value must NOT be in public claims');
  });
});
