import { test, describe } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import {
  getFamilyBySlug,
  getSystemBySlugOnly,
  getPublicClaimsByEntityId,
  getClaimsByEntityId,
  CANONICAL_CLAIM_SOURCES
} from '../packages/types/src';

describe('LELOI METAL — Golden Template Windows & Doors Verification (V6-B)', () => {
  const familyPagePath = path.resolve(__dirname, '../apps/web/src/app/products/architectural/windows-doors/page.tsx');
  const systemPagePath = path.resolve(
    __dirname,
    '../apps/web/src/app/products/architectural/windows-doors/sliding-window/page.tsx'
  );
  const rfqPagePath = path.resolve(__dirname, '../apps/web/src/app/rfq/page.tsx');
  const finishingCompPath = path.resolve(
    __dirname,
    '../apps/web/src/components/architectural/FinishingAndAkzoNobel.tsx'
  );

  test('Master Golden Template file exists and is populated', () => {
    assert.ok(fs.existsSync(familyPagePath), 'Family dossier page must exist');
    const content = fs.readFileSync(familyPagePath, 'utf8');
    assert.ok(content.length > 2000, 'Family dossier page must contain substantial content');
  });

  test('Deep ProductSystem Sliding Window file exists and is populated', () => {
    assert.ok(fs.existsSync(systemPagePath), 'Deep Sliding Window page must exist');
    const content = fs.readFileSync(systemPagePath, 'utf8');
    assert.ok(content.length > 2000, 'Deep sliding window page must contain substantial content');
  });

  test('Section Structure: Golden Template contains all required architectural components', () => {
    const content = fs.readFileSync(familyPagePath, 'utf8');
    const requiredElements = [
      'DossierHero',
      'SystemQuickNav',
      'SystemCardGrid',
      'ThermalBreakFeature',
      'TechnicalSpecsProvenanceTable',
      'FinishingAndAkzoNobel',
      'ArchitecturalApplications',
      'EngineeringAndFabrication',
      'QualityAndPackaging',
      'ArchitecturalGallery',
      'CrossSellSolutions',
      'DossierFaqAndCta'
    ];

    for (const el of requiredElements) {
      assert.ok(content.includes(el), `Golden Template must import and render ${el}`);
    }
  });

  test('AkzoNobel Language Compliance: Approved copy, 10-year warranty* and mandatory footnote', () => {
    const finishingContent = fs.readFileSync(finishingCompPath, 'utf8');
    const systemContent = fs.readFileSync(systemPagePath, 'utf8');

    const approvedCopy =
      'Premium architectural powder coating using AkzoNobel powder coating systems for exterior and interior aluminium applications.';
    const approvedWarranty = 'Warranties up to 10 years*';
    const approvedFootnote =
      '*Warranty availability and duration depend on the approved coating system, project location, environmental exposure, surface preparation and applicable warranty conditions.';

    // Check Finishing component
    assert.ok(
      finishingContent.includes(approvedCopy),
      'Finishing component must contain approved AkzoNobel copy verbatim'
    );
    assert.ok(
      finishingContent.includes(approvedWarranty),
      'Finishing component must contain approved warranty wording'
    );
    assert.ok(
      finishingContent.includes(approvedFootnote),
      'Finishing component must contain mandatory footnote verbatim'
    );

    // Check Deep System page
    assert.ok(
      systemContent.includes(approvedCopy),
      'Deep system page must contain approved AkzoNobel copy verbatim'
    );
    assert.ok(
      systemContent.includes(approvedFootnote),
      'Deep system page must contain mandatory footnote verbatim'
    );
  });

  test('Zero Mention of Interpon or Interpon D across all V6-B files', () => {
    const filesToCheck = [familyPagePath, systemPagePath, rfqPagePath, finishingCompPath];
    for (const file of filesToCheck) {
      const content = fs.readFileSync(file, 'utf8');
      assert.strictEqual(
        /interpon/i.test(content),
        false,
        `File ${path.basename(file)} must have 0 occurrences of Interpon`
      );
    }
  });

  test('Claim Provenance: Public claims for fam-arch-01 and sys-arch-win-sliding filter out unverified claims', () => {
    const familyPublicClaims = getPublicClaimsByEntityId('fam-arch-01');
    const systemPublicClaims = getPublicClaimsByEntityId('sys-arch-win-sliding');

    assert.ok(familyPublicClaims.length >= 3, 'fam-arch-01 must have at least 3 verified public claims');
    assert.ok(systemPublicClaims.length >= 3, 'sys-arch-win-sliding must have at least 3 verified public claims');

    // Unverified claims must NEVER be in public claims
    assert.strictEqual(
      familyPublicClaims.some((c) => c.field === 'acousticRating'),
      false,
      'Unverified acoustic rating must NOT be public'
    );
    assert.strictEqual(
      systemPublicClaims.some((c) => c.field === 'thermalTransmittance'),
      false,
      'Unverified U-value must NOT be public'
    );

    // All public claims must have valid source in CANONICAL_CLAIM_SOURCES
    for (const claim of [...familyPublicClaims, ...systemPublicClaims]) {
      assert.ok(claim.sourceId, `Claim ${claim.id} must have sourceId`);
      assert.ok(
        CANONICAL_CLAIM_SOURCES[claim.sourceId!],
        `Source ${claim.sourceId} must exist in CANONICAL_CLAIM_SOURCES`
      );
    }
  });

  test('RFQ Contextual Fields: RFQ page handles architectural division and parameters', () => {
    const rfqContent = fs.readFileSync(rfqPagePath, 'utf8');
    assert.ok(rfqContent.includes('isArchitectural'), 'RFQ page must detect architectural context');
    assert.ok(rfqContent.includes('Architectural Project Typology'), 'RFQ page must have project typology field');
    assert.ok(
      rfqContent.includes('Opening / Fenestration System Required'),
      'RFQ page must have opening system field'
    );
    assert.ok(
      rfqContent.includes('AkzoNobel Powder Coated'),
      'RFQ page must have AkzoNobel powder coating option'
    );
  });
});
