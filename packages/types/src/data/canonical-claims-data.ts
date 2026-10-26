import { ClaimSource, TechnicalClaim, isClaimPubliclyAllowed } from '../product-canonical';

export const CANONICAL_CLAIM_SOURCES: Record<string, ClaimSource> = {
  'SRC-MB-2026-AL': {
    id: 'SRC-MB-2026-AL',
    sourceType: 'MATERIAL_CERTIFICATE',
    evidenceTier: 'INTERNAL_SPECIFICATION',
    title: 'LELOI METAL Master Blueprint v1 - Alloy & Metallurgy Matrix',
    reference: 'LELOI_METAL_MASTER_BLUEPRINT_V1.md Section 4',
    issueDate: '2026-01-15',
    notes: 'Approved extrusion alloys 6063, 6061, 6005A, 6082, 6060 and tempers T5, T6, T66'
  },
  'SRC-TOL-EN755': {
    id: 'SRC-TOL-EN755',
    sourceType: 'DRAWING_STANDARD',
    evidenceTier: 'INTERNATIONAL_STANDARD',
    title: 'EN 755-9 / DIN 17615 Aluminium Extrusions Tolerance Standard',
    reference: 'CEN EN 755-9:2016',
    issueDate: '2016-06-01',
    notes: 'Standard manufacturing tolerances for architectural and precision extrusions'
  },
  'SRC-AKZ-PROP-2026': {
    id: 'SRC-AKZ-PROP-2026',
    sourceType: 'EXECUTIVE_ORDER',
    evidenceTier: 'INTERNAL_SPECIFICATION',
    title: 'AkzoNobel Powder Coating Approved Proposition & Warranty Framework',
    reference: 'LELOI_METAL_V6_SPEC_SECTION_2',
    issueDate: '2026-09-10',
    notes: 'Generic AkzoNobel powder coating with warranties up to 10 years subject to approved system, environment and warranty conditions'
  }
};

export const CANONICAL_TECHNICAL_CLAIMS: TechnicalClaim[] = [
  // 1. Windows & Doors Family Claims (fam-arch-01)
  {
    id: 'claim-wd-alloy-primary',
    entityType: 'ProductFamily',
    entityId: 'fam-arch-01',
    field: 'primaryAlloy',
    value: '6063-T5 / 6063-T6 Architectural Grade',
    verificationStatus: 'VERIFIED',
    sourceId: 'SRC-MB-2026-AL',
    verifiedBy: 'Chief Metallurgist LELOI EXIM',
    verifiedAt: '2026-01-15T08:00:00Z',
    publicAllowed: true
  },
  {
    id: 'claim-wd-alloy-secondary',
    entityType: 'ProductFamily',
    entityId: 'fam-arch-01',
    field: 'secondaryAlloy',
    value: '6060-T6 Intricate Profile Grade',
    verificationStatus: 'VERIFIED',
    sourceId: 'SRC-MB-2026-AL',
    verifiedBy: 'Chief Metallurgist LELOI EXIM',
    verifiedAt: '2026-01-15T08:00:00Z',
    publicAllowed: true
  },
  {
    id: 'claim-wd-tolerance',
    entityType: 'ProductFamily',
    entityId: 'fam-arch-01',
    field: 'extrusionTolerance',
    value: 'EN 755-9 / DIN 17615 High Precision Standard',
    verificationStatus: 'VERIFIED',
    sourceId: 'SRC-TOL-EN755',
    verifiedBy: 'Quality Assurance Director',
    verifiedAt: '2026-01-15T08:00:00Z',
    publicAllowed: true
  },
  {
    id: 'claim-wd-coating',
    entityType: 'ProductFamily',
    entityId: 'fam-arch-01',
    field: 'powderCoatingPartner',
    value: 'AkzoNobel Powder Coating',
    verificationStatus: 'VERIFIED',
    sourceId: 'SRC-AKZ-PROP-2026',
    verifiedBy: 'VP Commercial & Product Proposition',
    verifiedAt: '2026-09-10T10:00:00Z',
    publicAllowed: true
  },
  {
    id: 'claim-wd-warranty',
    entityType: 'ProductFamily',
    entityId: 'fam-arch-01',
    field: 'coatingWarranty',
    value: 'Warranties up to 10 years subject to approved system and conditions',
    verificationStatus: 'VERIFIED',
    sourceId: 'SRC-AKZ-PROP-2026',
    verifiedBy: 'VP Commercial & Product Proposition',
    verifiedAt: '2026-09-10T10:00:00Z',
    publicAllowed: true
  },
  {
    id: 'claim-wd-thermal-barrier',
    entityType: 'ProductFamily',
    entityId: 'fam-arch-01',
    field: 'thermalBarrierMaterial',
    value: 'Polyamide PA66 GF25 Structural Insulating Strip',
    verificationStatus: 'VERIFIED',
    sourceId: 'SRC-MB-2026-AL',
    verifiedBy: 'Lead Extrusion Tooling Engineer',
    verifiedAt: '2026-01-15T08:00:00Z',
    publicAllowed: true
  },
  // UNVERIFIED INTERNAL RECORD (MUST NOT RENDER PUBLICLY)
  {
    id: 'claim-wd-unverified-acoustic',
    entityType: 'ProductFamily',
    entityId: 'fam-arch-01',
    field: 'acousticRating',
    value: 'Rw 42 dB Lab Tested Sound Insulation',
    unit: 'dB',
    verificationStatus: 'UNVERIFIED',
    sourceId: null,
    publicAllowed: false
  },

  // 2. Sliding Window System Claims (sys-arch-win-sliding)
  {
    id: 'claim-sw-alloy',
    entityType: 'ProductSystem',
    entityId: 'sys-arch-win-sliding',
    field: 'alloy',
    value: '6063-T5 High-Tensile Architectural Alloy',
    verificationStatus: 'VERIFIED',
    sourceId: 'SRC-MB-2026-AL',
    verifiedBy: 'Chief Metallurgist LELOI EXIM',
    verifiedAt: '2026-01-15T08:00:00Z',
    publicAllowed: true
  },
  {
    id: 'claim-sw-tolerance',
    entityType: 'ProductSystem',
    entityId: 'sys-arch-win-sliding',
    field: 'profileTolerance',
    value: 'EN 755-9 Precision Architectural Standard',
    verificationStatus: 'VERIFIED',
    sourceId: 'SRC-TOL-EN755',
    verifiedBy: 'Quality Assurance Director',
    verifiedAt: '2026-01-15T08:00:00Z',
    publicAllowed: true
  },
  {
    id: 'claim-sw-glazing-pocket',
    entityType: 'ProductSystem',
    entityId: 'sys-arch-win-sliding',
    field: 'glazingCompatibility',
    value: 'Accommodates single, double insulated (IGU), and laminated architectural glass',
    verificationStatus: 'VERIFIED',
    sourceId: 'SRC-MB-2026-AL',
    verifiedBy: 'Lead Architectural Systems Engineer',
    verifiedAt: '2026-01-15T08:00:00Z',
    publicAllowed: true
  },
  {
    id: 'claim-sw-track-insert',
    entityType: 'ProductSystem',
    entityId: 'sys-arch-win-sliding',
    field: 'trackOption',
    value: 'Replaceable 304 stainless steel roller track insert for effortless glide',
    verificationStatus: 'VERIFIED',
    sourceId: 'SRC-MB-2026-AL',
    verifiedBy: 'Lead Architectural Systems Engineer',
    verifiedAt: '2026-01-15T08:00:00Z',
    publicAllowed: true
  },
  {
    id: 'claim-sw-coating',
    entityType: 'ProductSystem',
    entityId: 'sys-arch-win-sliding',
    field: 'surfaceFinish',
    value: 'AkzoNobel Powder Coating / Architectural Anodized / Mill Finish',
    verificationStatus: 'VERIFIED',
    sourceId: 'SRC-AKZ-PROP-2026',
    verifiedBy: 'VP Commercial & Product Proposition',
    verifiedAt: '2026-09-10T10:00:00Z',
    publicAllowed: true
  },
  // UNVERIFIED INTERNAL RECORD (MUST NOT RENDER PUBLICLY)
  {
    id: 'claim-sw-unverified-uvalue',
    entityType: 'ProductSystem',
    entityId: 'sys-arch-win-sliding',
    field: 'thermalTransmittance',
    value: 'Uw 1.4 W/m²K Whole Window Rating',
    unit: 'W/m²K',
    verificationStatus: 'UNVERIFIED',
    sourceId: null,
    publicAllowed: false
  }
];

export function getClaimsByEntityId(entityId: string): TechnicalClaim[] {
  return CANONICAL_TECHNICAL_CLAIMS.filter((c) => c.entityId === entityId);
}

export function getPublicClaimsByEntityId(entityId: string): TechnicalClaim[] {
  return CANONICAL_TECHNICAL_CLAIMS.filter(
    (c) => c.entityId === entityId && isClaimPubliclyAllowed(c)
  );
}

export function getClaimSourceById(sourceId: string): ClaimSource | undefined {
  return CANONICAL_CLAIM_SOURCES[sourceId];
}
