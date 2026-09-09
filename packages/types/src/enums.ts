// ==============================================================================
// LELOI METAL CANONICAL DOMAIN ENUMS (Master Blueprint Specification)
// ==============================================================================

export enum BuyerTypeCode {
  DIST = 'DIST',   // Distributor: standard/custom profiles, stock programs
  OEM = 'OEM',     // OEM Manufacturer: made-to-drawing parts, repeat production
  FAB = 'FAB',     // Fabricator: doors, facade, railing, custom sections
  SOL = 'SOL',     // Solar company: panel frames, rails, clamps, carports
  AUT = 'AUT',     // Automation: T-slot, machine frames, guards, conveyors
  THERM = 'THERM', // Thermal/electronics: heat sinks, housings, thermal components
  CON = 'CON'      // Contractor: facade/construction/project packages
}

export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  EXPORT_DIRECTOR = 'EXPORT_DIRECTOR',
  SALES = 'SALES',
  TECHNICAL_ENGINEER = 'TECHNICAL_ENGINEER',
  CONTENT_EDITOR = 'CONTENT_EDITOR',
  COMPLIANCE_REVIEWER = 'COMPLIANCE_REVIEWER',
  FINANCE = 'FINANCE',
  CUSTOMER = 'CUSTOMER' // Phase 3 portal
}

export enum PublicationStatus {
  UNVERIFIED = 'UNVERIFIED',           // Never public, needs input
  REVIEW_REQUIRED = 'REVIEW_REQUIRED', // Visible only in admin/staging
  VERIFIED = 'VERIFIED',               // Published publicly with verified reviewer & date
  EXPIRED = 'EXPIRED'                  // Lapsed review window, hidden until reverified
}

export enum LeadStatus {
  NEW = 'NEW',
  QUALIFIED = 'QUALIFIED',
  MQL = 'MQL',
  SQL = 'SQL',
  DISQUALIFIED = 'DISQUALIFIED',
  CUSTOMER = 'CUSTOMER'
}

export enum RfqStatus {
  DRAFT = 'DRAFT',
  SUBMITTED = 'SUBMITTED',
  QUALIFYING = 'QUALIFYING',
  ENGINEERING_REVIEW = 'ENGINEERING_REVIEW',
  NEED_INFO = 'NEED_INFO',
  COSTING = 'COSTING',
  QUOTED = 'QUOTED',
  SAMPLE = 'SAMPLE',
  WON = 'WON',
  LOST = 'LOST',
  ARCHIVED = 'ARCHIVED'
}

export enum RfqScanStatus {
  PENDING = 'PENDING',
  SCANNING = 'SCANNING',
  CLEAN = 'CLEAN',
  INFECTED = 'INFECTED',
  ERROR = 'ERROR'
}

export enum QuoteStatus {
  DRAFT = 'DRAFT',
  INTERNAL_REVIEW = 'INTERNAL_REVIEW',
  APPROVED = 'APPROVED',
  SENT = 'SENT',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  EXPIRED = 'EXPIRED'
}

export enum TradeMeasureType {
  AD = 'AD',                 // Anti-dumping
  CVD = 'CVD',               // Countervailing duty
  SAFEGUARD = 'SAFEGUARD',
  SECTION232 = 'SECTION232',
  CBAM = 'CBAM',             // EU Carbon Border Adjustment Mechanism
  OTHER = 'OTHER'
}

export enum ContentType {
  ARTICLE = 'ARTICLE',
  MARKET = 'MARKET',
  PRODUCT = 'PRODUCT',
  CAPABILITY = 'CAPABILITY',
  INDUSTRY = 'INDUSTRY',
  GUIDE = 'GUIDE',
  FAQ = 'FAQ'
}

export enum ContentStatus {
  DRAFT = 'DRAFT',
  REVIEW = 'REVIEW',
  APPROVED = 'APPROVED',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED'
}

export enum FreshnessClass {
  CLASS_A_30D = 'CLASS_A_30D',   // Tariffs, AD/CVD, CBAM (Review 30-90 days)
  CLASS_B_180D = 'CLASS_B_180D', // Market guides, logistics, certifications (Review 6 months)
  CLASS_C_365D = 'CLASS_C_365D'  // Evergreen engineering, alloy comparisons (Review annually)
}

export enum ExtrusionShapeType {
  FLAT_BAR = 'FLAT_BAR',
  ROUND_BAR = 'ROUND_BAR',
  SQUARE_BAR = 'SQUARE_BAR',
  ROUND_TUBE = 'ROUND_TUBE',
  RECTANGULAR_TUBE = 'RECTANGULAR_TUBE',
  EQUAL_ANGLE = 'EQUAL_ANGLE',
  UNEQUAL_ANGLE = 'UNEQUAL_ANGLE',
  CHANNEL_U = 'CHANNEL_U',
  TEE_PROFILE = 'TEE_PROFILE',
  CUSTOM_PROFILE = 'CUSTOM_PROFILE'
}
