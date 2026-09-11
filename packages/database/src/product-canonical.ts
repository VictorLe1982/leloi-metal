/**
 * LELOI METAL — CANONICAL PRODUCT ARCHITECTURE TYPES (V6-A)
 * Brand: LELOI METAL — Aluminium for a Better World
 * Parent Company: LELOI EXIM GLOBAL
 * 
 * Canonical 4-Tier Hierarchy:
 * ProductDivision (6 Core Business Lines)
 *     ↓
 * ProductFamily (60 Solution Families)
 *     ↓
 * ProductSystem (Engineered Systems with Technical Dossier)
 *     ↓
 * ProductVariant (Custom OEM / Standard Configurations)
 */

export type ProductDivisionId =
  | 'custom-extrusions'
  | 'architectural'
  | 'industrial-profiles'
  | 'solar'
  | 'thermal-management'
  | 'oem-components';

export interface ProductSEO {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
}

export interface ProductMedia {
  id: string;
  url: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  type: 'render' | 'real_photo' | 'technical_drawing' | 'diagram';
  isPrimary?: boolean;
  format?: string;
}

export interface ProductFinish {
  id: string;
  name: string;
  code: string;
  description: string;
  technology: string;
  standards: string[];
  warrantyYears?: number;
  colorOptions?: string[];
}

export interface ProductDivision {
  id: ProductDivisionId;
  code: string;
  name: string;
  slug: string;
  navLabel: string;
  headline: string;
  summary: string;
  description: string;
  heroImage: string;
  icon?: string;
  familyCount: number;
  order: number;
  highlights: string[];
  applications: string[];
  alloys: string[];
  seo: ProductSEO;
}

export interface ProductFamily {
  id: string;
  divisionId: ProductDivisionId;
  divisionSlug: string;
  name: string;
  slug: string;
  summary: string;
  description: string;
  coverImage: string;
  technicalApplications: string[];
  supportedFinishes: string[];
  alloys: string[];
  tempers: string[];
  systemsCount: number;
  order: number;
  seo: ProductSEO;
  groupKey?: string;
}

export interface ProductVariant {
  id: string;
  systemId: string;
  name: string;
  code: string;
  profileDimensions?: string;
  weightPerMeter?: string;
  wallThickness?: string;
  drawingUrl?: string;
  specifications?: Record<string, string>;
}

export interface ProductSystem {
  id: string;
  familyId: string;
  divisionId: ProductDivisionId;
  name: string;
  slug: string;
  summary: string;
  description: string;
  coverImage: string;
  technicalSpecs: Record<string, string>;
  alloys: string[];
  tempers: string[];
  surfaceFinishes: string[];
  certifications: string[];
  exportMarkets: string[];
  variants?: ProductVariant[];
  media?: ProductMedia[];
  seo: ProductSEO;
}

/**
 * Technical Claim Verification & Provenance System (V6-B)
 */
export type VerificationStatus =
  | 'VERIFIED'
  | 'UNVERIFIED'
  | 'INVALID_VERIFICATION'
  | 'PENDING_REVIEW';

export interface ClaimSource {
  id: string;
  sourceType:
    | 'FACTORY_SPEC_SHEET'
    | 'LAB_TEST_REPORT'
    | 'DRAWING_STANDARD'
    | 'MATERIAL_CERTIFICATE'
    | 'EXECUTIVE_ORDER';
  title: string;
  fileUrl?: string;
  reference: string;
  issueDate: string;
  expiryDate?: string;
  notes?: string;
}

export interface TechnicalClaim {
  id: string;
  entityType: 'ProductDivision' | 'ProductFamily' | 'ProductSystem' | 'ProductVariant' | 'ProductFinish';
  entityId: string;
  field: string;
  value: string;
  unit?: string;
  verificationStatus: VerificationStatus;
  sourceId: string | null;
  verifiedBy?: string;
  verifiedAt?: string;
  publicAllowed: boolean;
}

/**
 * MANDATORY RULE (V6-B):
 * A technical claim is PUBLIC only when:
 * verificationStatus === 'VERIFIED' && publicAllowed === true && Boolean(sourceId)
 * If verificationStatus === 'VERIFIED' and sourceId is null -> treat as INVALID_VERIFICATION -> do not render publicly.
 */
export function isClaimPubliclyAllowed(claim: TechnicalClaim): boolean {
  if (claim.verificationStatus === 'VERIFIED' && (!claim.sourceId || claim.sourceId.trim() === '')) {
    return false;
  }
  return (
    claim.verificationStatus === 'VERIFIED' &&
    claim.publicAllowed === true &&
    Boolean(claim.sourceId && claim.sourceId.trim() !== '')
  );
}

/**
 * Architectural Media System (V6-B)
 */
export type ArchitecturalMediaType =
  | 'PRODUCT_RENDER'
  | 'APPLICATION_PHOTO'
  | 'FACTORY_PHOTO'
  | 'TECHNICAL_DIAGRAM'
  | 'FINISH_SAMPLE'
  | 'PROJECT_PHOTO';

export interface ArchitecturalMediaItem {
  id: string;
  entityId: string;
  type: ArchitecturalMediaType;
  url: string;
  alt: string;
  caption?: string;
  source: string;
  license?: string;
  approvalStatus: 'APPROVED' | 'PENDING' | 'REJECTED';
  width?: number;
  height?: number;
}
