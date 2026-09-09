import {
  BuyerTypeCode,
  UserRole,
  PublicationStatus,
  LeadStatus,
  RfqStatus,
  RfqScanStatus,
  ExtrusionShapeType,
  ContentType,
  ContentStatus,
  FreshnessClass
} from './enums';

export interface UserDTO {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
}

export interface CompanyDTO {
  id: string;
  name: string;
  legalName?: string | null;
  countryCode: string;
  city?: string | null;
  website?: string | null;
  linkedinUrl?: string | null;
  industry?: string | null;
  companyType?: string | null;
  status: string;
  createdAt: string;
}

export interface ContactDTO {
  id: string;
  companyId: string;
  firstName: string;
  lastName: string;
  jobTitle?: string | null;
  department?: string | null;
  email: string;
  phone?: string | null;
  emailVerified: boolean;
  createdAt: string;
}

export interface BuyerProfileDTO {
  id: string;
  companyId: string;
  buyerType: BuyerTypeCode;
  productsInterest: string[];
  currentSupplierNotes?: string | null;
  chinaExposure?: number | null;
  estimatedAnnualVolumeTons?: number | null;
  qualificationScore?: number | null;
  scoreBreakdown?: Record<string, number> | null;
  status: string;
}

export interface ProductCategoryDTO {
  id: string;
  slug: string;
  name: string;
  description: string;
  sortOrder: number;
  imageUrl?: string | null;
}

export interface ProductDTO {
  id: string;
  categoryId: string;
  category?: ProductCategoryDTO;
  slug: string;
  name: string;
  summary: string;
  description?: string;
  alloys: string[];
  tempers: string[];
  weightPerMeter?: number | null;
  ccdMm?: number | null;
  minWallMm?: number | null;
  maxLengthMm?: number | null;
  surfaceFinishes: string[];
  applications: string[];
  hsCodes: string[];
  moqKg?: number | null;
  isPublished: boolean;
  publicationStatus: PublicationStatus;
  verifiedAt?: string | null;
  verifiedBy?: string | null;
  galleryUrls?: string[];
}

export interface FactoryCapabilityDTO {
  id: string;
  process: string;
  machineName: string;
  machineModel?: string | null;
  machineCapacity?: string | null;
  maxDimension?: Record<string, any> | null;
  tolerance?: Record<string, any> | null;
  annualCapacityTons?: number | null;
  availableCapacityTons?: number | null;
  certifications?: string[];
  verificationStatus: PublicationStatus;
  verifiedAt?: string | null;
  notes?: string | null;
}

export interface RfqFileDTO {
  id: string;
  rfqId: string;
  originalFileName: string;
  storageKey: string;
  mimeType: string;
  fileSize: number;
  sha256: string;
  fileCategory?: string | null;
  scanStatus: RfqScanStatus;
  uploadedAt: string;
  downloadUrl?: string;
}

export interface RfqDTO {
  id: string;
  rfqNumber: string;
  leadId?: string | null;
  companyId: string;
  company?: CompanyDTO;
  contactId: string;
  contact?: ContactDTO;
  productCategory: string;
  application: string;
  alloy: string;
  temper: string;
  annualVolumeKg?: number | null;
  orderQuantityKg?: number | null;
  lengthMm?: number | null;
  surfaceFinish: string;
  processRequirements: string[];
  toleranceRequirements?: Record<string, any> | null;
  packingRequirements?: string | null;
  incoterm: string;
  destinationCountry: string;
  destinationLocation?: string | null;
  targetPrice?: number | null;
  currency?: string | null;
  targetDeliveryDate?: string | null;
  status: RfqStatus;
  priority?: string | null;
  submittedAt: string;
  files: RfqFileDTO[];
}

export interface WeightCalculationRequest {
  shape: ExtrusionShapeType;
  dimensionsMm: {
    width?: number;
    height?: number;
    thickness?: number;
    outerDiameter?: number;
    wallThickness?: number;
    sideA?: number;
    sideB?: number;
    webThickness?: number;
    flangeThickness?: number;
  };
  lengthMm: number;
  quantityPieces: number;
  alloyName?: string;
  densityGPerCm3?: number; // default 2.70
}

export interface WeightCalculationResult {
  shape: ExtrusionShapeType;
  crossSectionAreaMm2: number;
  weightPerMeterKg: number;
  weightPerPieceKg: number;
  totalWeightKg: number;
  totalWeightMetricTonnes: number;
  densityUsed: number;
  formulaDescription: string;
}

export interface MarketDTO {
  id: string;
  countryCode: string;
  name: string;
  region: string;
  marketScore?: number | null;
  paymentRiskScore?: number | null;
  logisticsScore?: number | null;
  productFit: string[];
  status: string;
  lastReviewedAt?: string | null;
  verifiedAt?: string | null;
  verifiedBy?: string | null;
}

export interface TariffRateDTO {
  id: string;
  destinationCountry: string;
  originCountry: string;
  hsCode: string;
  mfnRate?: number | null;
  preferentialRate?: number | null;
  rateUnit?: string | null;
  ftaName?: string | null;
  effectiveFrom?: string | null;
  effectiveTo?: string | null;
  sourceUrl: string;
  verifiedAt: string;
  verifiedBy: string;
  verificationStatus: PublicationStatus;
  notes?: string | null;
}

export interface ContentItemDTO {
  id: string;
  type: ContentType;
  slug: string;
  title: string;
  summary: string;
  body: any;
  primaryKeyword: string;
  targetCountry?: string | null;
  freshnessClass: FreshnessClass;
  status: ContentStatus;
  publishedAt?: string | null;
  lastUpdatedAt: string;
}
