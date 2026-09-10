export interface CategoryCatalogItem {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  overview: string;
  heroImage: string;
  applications: string[];
  keyAdvantages: string[];
  faqs: { q: string; a: string }[];
}

export interface CatalogMediaItem {
  id: string;
  productId: string;
  assetKey: string;
  url: string;
  mediaType: string;
  sourceType: string;
  license: string;
  altText: string;
  isPrimary: boolean;
  approvalStatus: 'APPROVED' | 'DRAFT' | 'REVIEW';
}

export type ProductFinish = 'MILL_FINISH' | 'ANODIZED' | 'POWDER_COATED';

export interface ProductCoatingSystem {
  finishType: ProductFinish;
  brand?: 'AkzoNobel' | 'Qualicoat' | string;
  warrantyYears?: number;
  indoorOutdoor?: 'INDOOR' | 'OUTDOOR' | 'COASTAL_MARINE';
  standardCompliance?: string[];
  verificationStatus: 'VERIFIED' | 'UNVERIFIED';
}

export interface ProductCatalogItem {
  id: string;
  slug: string;
  aliases?: string[];
  name: string;
  category: string;
  categoryName: string;
  shortDescription: string;
  longDescription: string;
  profileGeometry: 'Solid' | 'Hollow' | 'Semi-Hollow' | 'Complex Multi-Void' | 'T-Slot Modular' | 'Fin Array' | 'CNC Component';
  alloys: string[];
  tempers: string[];
  surfaceFinishes: string[];
  coatingSystem?: ProductCoatingSystem;
  constructionApplications?: string[];
  industrySectors?: string[];
  applications: string[];
  fabrications: string[];
  verifiedChips: string[];
  primaryImage: string;
  galleryImages: string[];
  media?: CatalogMediaItem[];
  isStandard: boolean;
  isCustom: boolean;
  requiresDrawing: boolean;
  verificationStatus: 'VERIFIED' | 'UNVERIFIED';
  technicalClaimStatus: 'VERIFIED' | 'UNVERIFIED';
  specs: {
    label: string;
    value: string;
    verified: boolean;
    unit?: string;
  }[];
  mediaProvenance: {
    type: 'APPROVED_CUSTOM_RENDER' | 'FACTORY_OWNED';
    license: string;
    author: string;
  };
  dfmNotes: string[];
  qcStandards: string[];
  packaging: string;
}

export const CATEGORIES_V2: CategoryCatalogItem[] = [
  {
    id: 'cat-custom',
    slug: 'custom-extrusions',
    name: 'Custom Extrusions',
    shortDescription: 'Tailored solid, hollow, and complex multi-void aluminium profiles engineered to client drawings.',
    overview: 'Custom aluminium extrusion profiles manufactured in Vietnam for global OEM fabricators and machinery builders. Our engineering team validates die flow, wall-thickness uniformity, and alloy temper suitability directly from 2D/3D CAD models.',
    heroImage: '/media/catalog/01_square_rectangular_hollow_profiles.webp',
    applications: ['Automotive Subframes', 'Industrial Automation', 'Transport Rails', 'Specialized Enclosures'],
    keyAdvantages: [
      'Tailored die tooling manufactured to client CAD specifications',
      'Structural 6000-series alloys: 6063, 6061, 6005A, 6082',
      'Full DFM flow analysis to prevent die deflection and uneven cooling'
    ],
    faqs: [
      {
        q: 'What 2D/3D drawing formats are accepted for custom die development?',
        a: 'We accept 3D models in STEP (.stp, .step), IGES (.igs), Parasolid (.x_t), and 2D CAD engineering drawings in DWG, DXF, and PDF with all critical tolerance callouts.'
      },
      {
        q: 'What is the standard lead time for custom extrusion tooling?',
        a: 'Standard custom extrusion dies take 15 to 21 calendar days for trial sample production (T0 samples) including CMM dimensional inspection reports.'
      }
    ]
  },
  {
    id: 'cat-industrial',
    slug: 'industrial-profiles',
    name: 'Industrial Profiles',
    shortDescription: 'Standard modular T-slot and V-slot framing systems for industrial machinery and automation.',
    overview: 'Modular aluminium extrusion profiles for factory automation, robotic cells, machine guarding, and cleanroom workstations. Fully compatible with international hardware brackets and fasteners.',
    heroImage: '/media/catalog/09_t_slot_modular_profiles.webp',
    applications: ['Machine Guarding', 'Conveyor Framing', 'Assembly Workstations', 'Linear Actuator Tracks'],
    keyAdvantages: [
      'Standard metric grid series (20, 30, 40, 80 series) and V-slot rails',
      'Clear satin anodized finish 10–15µm for scratch resistance',
      'Precision length cuts with deburred edges and tapped end holes'
    ],
    faqs: [
      {
        q: 'Are your T-slot profiles compatible with standard European brackets?',
        a: 'Yes, our 20, 30, 40, and 80 series strictly adhere to standard European slot dimensions (6mm, 8mm, and 10mm slot widths) and accept standard T-nuts and drop-in bolts.'
      }
    ]
  },
  {
    id: 'cat-solar',
    slug: 'solar-profiles',
    name: 'Solar Profiles',
    shortDescription: 'High-volume photovoltaic module perimeter frames, mounting rails, and clamping hardware.',
    overview: 'Engineered structural aluminium extrusions designed for utility-scale solar farms, commercial rooftop racking, and PV module perimeter framing.',
    heroImage: '/media/catalog/11_solar_panel_frame_profiles.webp',
    applications: ['Photovoltaic Module Frames', 'Ground Mount Racking', 'Rooftop Ballast Systems', 'Solar Carports'],
    keyAdvantages: [
      'High strength-to-weight structural alloys: 6005A-T6 and 6061-T6',
      'Class 1 Anodizing (15–20µm) tested for outdoor coastal corrosion resistance',
      'Automated CNC punch lines for corner key insertion and drainage holes'
    ],
    faqs: [
      {
        q: 'What anodizing thickness is provided for solar mounting rails?',
        a: 'Standard outdoor solar rails are supplied with minimum 15µm clear anodizing, with optional 20µm or 25µm for harsh maritime environments.'
      }
    ]
  },
  {
    id: 'cat-architectural',
    slug: 'architectural-systems',
    name: 'Architectural Systems',
    shortDescription: 'Curtain wall mullions, thermal-break window/door systems, louvers, and structural balustrades.',
    overview: 'High-performance architectural extrusions manufactured to international building standards. Engineered for wind load deflection, air infiltration resistance, and acoustic performance.',
    heroImage: '/media/catalog/17_curtain_wall_profiles.webp',
    applications: ['Commercial Facades', 'Unitized Curtain Walls', 'Thermal-Break Windows', 'Glass Balustrades'],
    keyAdvantages: [
      'AAMA 2604 / AAMA 2605 compliant architectural powder coating',
      'Integrated thermal-break polyamide barrier channels',
      'Tight angular and straightness tolerances compliant with EN 755-9'
    ],
    faqs: [
      {
        q: 'Do you offer PVDF fluoropolymer coating for high-rise facades?',
        a: 'Yes, our electrostatic coating line supports 2-coat and 3-coat PVDF coatings tested for UV resistance and color retention under ASTM D2244.'
      }
    ]
  },
  {
    id: 'cat-thermal',
    slug: 'heat-sink-thermal',
    name: 'Heat Sink / Thermal',
    shortDescription: 'High-density fin profiles and heat sinks for inverters, power electronics, and LED luminaires.',
    overview: 'Thermal dissipation extrusion profiles with high aspect ratio fin geometry for forced and natural convection cooling in power electronics and EV infrastructure.',
    heroImage: '/media/catalog/15_heat_sink_profiles.webp',
    applications: ['Solar Inverters', 'EV Charging Stations', 'High-Power LED Fixtures', 'VFD Motor Drives'],
    keyAdvantages: [
      'High aspect ratio fin designs engineered for maximum surface area',
      'High thermal conductivity 6063 and 1050/6060 alloys',
      'Black anodized high-emissivity finish for superior radiative cooling'
    ],
    faqs: [
      {
        q: 'What is the maximum fin-to-space aspect ratio you can extrude?',
        a: 'We reliably extrude fin ratios up to 14:1 on standard presses, and up to 18:1 using specialized die designs and high-conductivity 6063 alloy.'
      }
    ]
  },
  {
    id: 'cat-oem',
    slug: 'oem-components',
    name: 'OEM Components',
    shortDescription: 'Turnkey machined components: precision cutting, 4-axis CNC milling, tapping, and sub-assembly.',
    overview: 'Full-service aluminium component manufacturing from raw billet to finished machined part. Our machine shop handles multi-axis milling, drilling, tapping, and kitting.',
    heroImage: '/media/catalog/22_cnc_machined_components.webp',
    applications: ['Automotive Brackets', 'Robotic Arms & End-Effectors', 'Precision Electronic Housings', 'Machinery Bases'],
    keyAdvantages: [
      'Long-bed 3-axis and 4-axis CNC machining centers',
      'Complete in-house secondary deburring, tumbling, and hardware insertion',
      'Traceable CMM dimensional inspection and material certification'
    ],
    faqs: [
      {
        q: 'Can you deliver fully assembled kits ready for assembly lines?',
        a: 'Yes, our assembly shop installs threaded inserts, helicoils, captive fasteners, and provides barcoded custom kitting for export.'
      }
    ]
  }
];

export const PRODUCTS_V2: ProductCatalogItem[] = [

  {
    id: 'prod-01',
    slug: 'square_rectangular_hollow_profiles',
    aliases: ["square-rectangular-hollow-profiles", "custom-hollow-extrusions"],
    name: "Square & Rectangular Hollow Profiles",
    category: 'custom-extrusions',
    categoryName: 'Custom Extrusions',
    shortDescription: "Square and rectangular tubular aluminium hollow profiles engineered to structural drawing tolerances.",
    longDescription: "Precision hollow aluminium extrusion profiles for structural frameworks, machinery bases, and transportation assemblies. Engineered from high-strength 6061 and 6063 billets in Vietnam with tight wall thickness concentricity.",
    profileGeometry: 'Hollow',
    alloys: ["6063", "6061", "6005A"],
    tempers: ["T5", "T6"],
    surfaceFinishes: ["Mill Finish", "Clear Anodized", "Powder Coated"],
    applications: ["Structural Frameworks", "Transportation Enclosures", "Machinery Bases", "Industrial Racking"],
    fabrications: ["Precision Mitre Cutting \u00b10.2mm", "CNC Slotting", "Drilling & Tapping", "Hardware Insertion"],
    verifiedChips: ["6063 / 6061", "T5 / T6", "Mill / Anodized"],
    primaryImage: '/media/catalog/01_square_rectangular_hollow_profiles.webp',
    galleryImages: [
      '/media/catalog/01_square_rectangular_hollow_profiles.webp',
      '/media/catalog/01_square_rectangular_hollow_profiles.webp'
    ],
    media: [
      {
        id: 'med-prod-01-01',
        productId: 'prod-01',
        assetKey: 'square_rectangular_hollow_profiles',
        url: '/media/catalog/01_square_rectangular_hollow_profiles.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "Square & Rectangular Hollow Profiles 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: true,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6063, 6061, 6005A", verified: false },
      { label: 'Standard Tempers', value: "T5, T6", verified: false },
      { label: 'Surface Finishes', value: "Mill Finish, Clear Anodized, Powder Coated", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Maintain minimum corner radius of 0.5mm on internal corners to avoid stress risers.", "Wall thickness transitions should not exceed 2:1 ratio."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-02',
    slug: 'round_tubes',
    aliases: ["round-tubes"],
    name: "Round Tubes",
    category: 'custom-extrusions',
    categoryName: 'Custom Extrusions',
    shortDescription: "Seamless and structural extruded round tubes with uniform wall thickness and concentricity.",
    longDescription: "Seamless and porthole extruded aluminium round tubing manufactured for fluid conveyance, structural masts, and mechanical rollers. Strict outer diameter and wall thickness controls.",
    profileGeometry: 'Hollow',
    alloys: ["6063", "6061", "6082"],
    tempers: ["T5", "T6"],
    surfaceFinishes: ["Mill Finish", "Clear Anodized", "Electropolished"],
    applications: ["Fluid & Pneumatic Lines", "Industrial Rollers", "Handrails & Stanchions", "Structural Columns"],
    fabrications: ["Precision Cutting", "Rotary Swaging", "CNC Turning & Threading", "Deburring"],
    verifiedChips: ["6061 / 6082", "T6 Temper", "Concentric ID/OD"],
    primaryImage: '/media/catalog/02_round_tubes.webp',
    galleryImages: [
      '/media/catalog/02_round_tubes.webp',
      '/media/catalog/02_round_tubes.webp'
    ],
    media: [
      {
        id: 'med-prod-02-01',
        productId: 'prod-02',
        assetKey: 'round_tubes',
        url: '/media/catalog/02_round_tubes.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "Round Tubes 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: true,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6063, 6061, 6082", verified: false },
      { label: 'Standard Tempers', value: "T5, T6", verified: false },
      { label: 'Surface Finishes', value: "Mill Finish, Clear Anodized, Electropolished", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Specify required ovality and straightness tolerances per meter length.", "Consider mandrel extrusion for seamless pressure-rated applications."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-03',
    slug: 'solid_bars',
    aliases: ["solid-bars", "custom-solid-extrusions"],
    name: "Solid Bars",
    category: 'custom-extrusions',
    categoryName: 'Custom Extrusions',
    shortDescription: "Solid rectangular, square, and flat bars optimized for structural loads and CNC machining.",
    longDescription: "Heavy-duty solid aluminium extrusion bars designed for subsequent high-speed CNC milling, electrical busbar conductivity, and load-bearing machine bases.",
    profileGeometry: 'Solid',
    alloys: ["6061", "6082", "6063"],
    tempers: ["T6", "T5"],
    surfaceFinishes: ["Mill Finish", "Anodized"],
    applications: ["CNC Machined OEM Parts", "Electrical Busbars", "Heavy Structural Cleats", "Base Mounting Plates"],
    fabrications: ["High-Speed Saw Cutting", "Multi-Axis CNC Milling", "Chamfering", "Face Milling"],
    verifiedChips: ["6061-T6 High Strength", "CNC Ready", "Flatness Inspected"],
    primaryImage: '/media/catalog/03_solid_bars.webp',
    galleryImages: [
      '/media/catalog/03_solid_bars.webp',
      '/media/catalog/03_solid_bars.webp'
    ],
    media: [
      {
        id: 'med-prod-03-01',
        productId: 'prod-03',
        assetKey: 'solid_bars',
        url: '/media/catalog/03_solid_bars.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "Solid Bars 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: true,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6061, 6082, 6063", verified: false },
      { label: 'Standard Tempers', value: "T6, T5", verified: false },
      { label: 'Surface Finishes', value: "Mill Finish, Anodized", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Provide grain direction requirements if severe bending is planned.", "Verify alloy temper suitability for high-stress cyclic loading."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-04',
    slug: 'angle_profiles',
    aliases: ["angle-profiles", "equal-angle"],
    name: "Angle Profiles",
    category: 'custom-extrusions',
    categoryName: 'Custom Extrusions',
    shortDescription: "Equal and unequal structural angle sections for frame corners and structural bracing.",
    longDescription: "Extruded aluminium angles engineered for 90-degree corner stiffening, architectural bracketry, and mounting flanges. Clean apex radii minimize notch sensitivity under load.",
    profileGeometry: 'Solid',
    alloys: ["6063", "6061", "6005A"],
    tempers: ["T5", "T6"],
    surfaceFinishes: ["Mill Finish", "Clear Anodized", "Powder Coated"],
    applications: ["Frame Corner Bracing", "Solar Array Brackets", "Facade Sub-Framing", "Packaging Skid Frames"],
    fabrications: ["Angle Cutting", "Multi-Hole Punching", "Countersinking", "Anodizing"],
    verifiedChips: ["Equal / Unequal Leg", "6005A / 6061", "Clean Apex Radius"],
    primaryImage: '/media/catalog/04_angle_profiles.webp',
    galleryImages: [
      '/media/catalog/04_angle_profiles.webp',
      '/media/catalog/04_angle_profiles.webp'
    ],
    media: [
      {
        id: 'med-prod-04-01',
        productId: 'prod-04',
        assetKey: 'angle_profiles',
        url: '/media/catalog/04_angle_profiles.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "Angle Profiles 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: true,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6063, 6061, 6005A", verified: false },
      { label: 'Standard Tempers', value: "T5, T6", verified: false },
      { label: 'Surface Finishes', value: "Mill Finish, Clear Anodized, Powder Coated", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Equal leg profiles extrude faster with less twist than high-aspect unequal legs.", "Maintain heel radius to prevent cooling stress cracks."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-05',
    slug: 'u_channel_profiles',
    aliases: ["u-channel-profiles", "semi-hollow-extrusions"],
    name: "U-Channel Profiles",
    category: 'custom-extrusions',
    categoryName: 'Custom Extrusions',
    shortDescription: "Open channel sections with parallel or tapered flanges for glass pocketing and linear guides.",
    longDescription: "Versatile U-channel aluminium extrusions manufactured for edge retention, structural trim, architectural pocket glazing, and wire routing pathways.",
    profileGeometry: 'Semi-Hollow',
    alloys: ["6063", "6061"],
    tempers: ["T5", "T6"],
    surfaceFinishes: ["Mill Finish", "Clear Anodized", "Powder Coated"],
    applications: ["Glass Glazing Channels", "Edge Trim & Capping", "Cable Raceway Tracks", "Linear Slide Enclosures"],
    fabrications: ["Miter Cutting", "Slot Milling", "Drilling", "Surface Treatment"],
    verifiedChips: ["Semi-Hollow Channel", "6063 Architectural", "Smooth Anodizing"],
    primaryImage: '/media/catalog/05_u_channel_profiles.webp',
    galleryImages: [
      '/media/catalog/05_u_channel_profiles.webp',
      '/media/catalog/05_u_channel_profiles.webp'
    ],
    media: [
      {
        id: 'med-prod-05-01',
        productId: 'prod-05',
        assetKey: 'u_channel_profiles',
        url: '/media/catalog/05_u_channel_profiles.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "U-Channel Profiles 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6063, 6061", verified: false },
      { label: 'Standard Tempers', value: "T5, T6", verified: false },
      { label: 'Surface Finishes', value: "Mill Finish, Clear Anodized, Powder Coated", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Deep channel tongues require balanced die flow to prevent leg splay.", "Specify whether inside or outside width is the critical mating dimension."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-06',
    slug: 't_profiles',
    aliases: ["t-profiles"],
    name: "T Profiles",
    category: 'custom-extrusions',
    categoryName: 'Custom Extrusions',
    shortDescription: "T-section structural profiles for suspended ceiling grids, stiffening ribs, and framing.",
    longDescription: "Extruded structural Tee sections engineered with balanced web and flange thicknesses for suspended ceilings, flooring expansion joints, and marine stiffeners.",
    profileGeometry: 'Solid',
    alloys: ["6063", "6061", "6005A"],
    tempers: ["T5", "T6"],
    surfaceFinishes: ["Mill Finish", "Anodized"],
    applications: ["Suspended Ceiling Grids", "Deck Stiffeners", "Floor Joint Covers", "Wall Panel Cleats"],
    fabrications: ["Precision Length Cut", "Notching", "Punching", "Deburring"],
    verifiedChips: ["Solid Tee Section", "6063 / 6005A", "Straightness Inspected"],
    primaryImage: '/media/catalog/06_t_profiles.webp',
    galleryImages: [
      '/media/catalog/06_t_profiles.webp',
      '/media/catalog/06_t_profiles.webp'
    ],
    media: [
      {
        id: 'med-prod-06-01',
        productId: 'prod-06',
        assetKey: 't_profiles',
        url: '/media/catalog/06_t_profiles.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "T Profiles 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: true,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6063, 6061, 6005A", verified: false },
      { label: 'Standard Tempers', value: "T5, T6", verified: false },
      { label: 'Surface Finishes', value: "Mill Finish, Anodized", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Flange-to-web intersection should feature generous fillet radius to maintain die life."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-07',
    slug: 'i_beam_profiles',
    aliases: ["i-beam-profiles"],
    name: "I-Beam Profiles",
    category: 'custom-extrusions',
    categoryName: 'Custom Extrusions',
    shortDescription: "High moment of inertia I-beam sections for heavy load spans and crane rails.",
    longDescription: "Structural I-beam aluminium extrusions providing maximum strength-to-weight ratio for overhead conveyors, monorail cranes, and trailer chassis frames.",
    profileGeometry: 'Solid',
    alloys: ["6061", "6005A", "6082"],
    tempers: ["T6"],
    surfaceFinishes: ["Mill Finish", "Clear Anodized"],
    applications: ["Overhead Conveyor Tracks", "Gantry Spans", "Trailer Chassis Beams", "Solar Carport Purlins"],
    fabrications: ["Heavy Saw Cutting", "End Coping & Flange Notching", "High-Load Bolt Hole Drilling"],
    verifiedChips: ["High Load Capacity", "6061-T6 Structural", "EN 755-2 Certified"],
    primaryImage: '/media/catalog/07_i_beam_profiles.webp',
    galleryImages: [
      '/media/catalog/07_i_beam_profiles.webp',
      '/media/catalog/07_i_beam_profiles.webp'
    ],
    media: [
      {
        id: 'med-prod-07-01',
        productId: 'prod-07',
        assetKey: 'i_beam_profiles',
        url: '/media/catalog/07_i_beam_profiles.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "I-Beam Profiles 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: true,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6061, 6005A, 6082", verified: false },
      { label: 'Standard Tempers', value: "T6", verified: false },
      { label: 'Surface Finishes', value: "Mill Finish, Clear Anodized", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Verify web thickness against shear load requirements at support bearings."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-08',
    slug: 'h_profiles',
    aliases: ["h-profiles", "complex-multi-void"],
    name: "H Profiles",
    category: 'custom-extrusions',
    categoryName: 'Custom Extrusions',
    shortDescription: "Wide-flange H-profiles for heavy compression columns and interlock framing.",
    longDescription: "Heavy-duty wide flange H-profiles designed for architectural column uprights, partition joints, and multi-tier structural racking.",
    profileGeometry: 'Solid',
    alloys: ["6061", "6005A"],
    tempers: ["T6"],
    surfaceFinishes: ["Mill Finish", "Anodized"],
    applications: ["Modular Cleanroom Posts", "Partition Wall Interlocks", "Structural Racking Columns"],
    fabrications: ["Precision Cutting", "Milling", "CNC Drilling", "Packaging"],
    verifiedChips: ["Wide Flange", "6061-T6 / 6005A", "Tension Tested"],
    primaryImage: '/media/catalog/08_h_profiles.webp',
    galleryImages: [
      '/media/catalog/08_h_profiles.webp',
      '/media/catalog/08_h_profiles.webp'
    ],
    media: [
      {
        id: 'med-prod-08-01',
        productId: 'prod-08',
        assetKey: 'h_profiles',
        url: '/media/catalog/08_h_profiles.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "H Profiles 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: true,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6061, 6005A", verified: false },
      { label: 'Standard Tempers', value: "T6", verified: false },
      { label: 'Surface Finishes', value: "Mill Finish, Anodized", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Thermal equalization during quench is essential to prevent camber across wide flanges."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-09',
    slug: 't_slot_modular_profiles',
    aliases: ["t-slot-modular-profiles", "t-slot-40", "t-slot-20", "t-slot-30", "industrial-t-slot"],
    name: "T-Slot Modular Profiles",
    category: 'industrial-profiles',
    categoryName: 'Industrial Profiles',
    shortDescription: "Standard 20, 30, 40, and 80 series metric modular T-slot extrusions for machine building.",
    longDescription: "The global industrial automation workhorse. Metric modular T-slot profiles engineered with 6mm, 8mm, and 10mm slot openings for rapid bolt-together machine frames, safety guards, and assembly benches.",
    profileGeometry: 'T-Slot Modular',
    alloys: ["6063", "6005A"],
    tempers: ["T5", "T6"],
    surfaceFinishes: ["Clear Satin Anodized (10\u201315\u00b5m)", "Black Anodized"],
    applications: ["Automation Machinery Frames", "Robot Enclosures", "Conveyor Side Rails", "Cleanroom Workstations"],
    fabrications: ["Precision Length Cut \u00b10.15mm", "Core Hole End Tapping (M5\u2013M16)", "Access Hole Drilling"],
    verifiedChips: ["Metric 20/30/40/80", "Satin Anodized 15\u00b5m", "Hardware Compatible"],
    primaryImage: '/media/catalog/09_t_slot_modular_profiles.webp',
    galleryImages: [
      '/media/catalog/09_t_slot_modular_profiles.webp',
      '/media/catalog/09_t_slot_modular_profiles.webp'
    ],
    media: [
      {
        id: 'med-prod-09-01',
        productId: 'prod-09',
        assetKey: 't_slot_modular_profiles',
        url: '/media/catalog/09_t_slot_modular_profiles.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "T-Slot Modular Profiles 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: true,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6063, 6005A", verified: false },
      { label: 'Standard Tempers', value: "T5, T6", verified: false },
      { label: 'Surface Finishes', value: "Clear Satin Anodized (10\u201315\u00b5m), Black Anodized", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Slot root radius is optimized to withstand repeated dynamic fastener torque without flange deflection."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-10',
    slug: 'v_slot_profiles',
    aliases: ["v-slot-profiles"],
    name: "V-Slot Profiles",
    category: 'industrial-profiles',
    categoryName: 'Industrial Profiles',
    shortDescription: "Integrated 90-degree chamfered V-rail profiles for smooth linear motion roller bearings.",
    longDescription: "Precision V-slot aluminium profiles featuring precision chamfered edges that act as dual linear motion guide rails for Delrin or polycarbonate V-wheels.",
    profileGeometry: 'T-Slot Modular',
    alloys: ["6063"],
    tempers: ["T5"],
    surfaceFinishes: ["Clear Anodized", "Black Anodized"],
    applications: ["3D Printers & CNC Routers", "Laser Engravers", "Camera Slider Rigs", "Pick & Place Cartesian Robots"],
    fabrications: ["Precision Cut", "Tapping", "Slot Milling", "Custom Anodizing"],
    verifiedChips: ["Integrated V-Rail", "6063-T5 Precision", "Smooth Motion Finish"],
    primaryImage: '/media/catalog/10_v_slot_profiles.webp',
    galleryImages: [
      '/media/catalog/10_v_slot_profiles.webp',
      '/media/catalog/10_v_slot_profiles.webp'
    ],
    media: [
      {
        id: 'med-prod-10-01',
        productId: 'prod-10',
        assetKey: 'v_slot_profiles',
        url: '/media/catalog/10_v_slot_profiles.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "V-Slot Profiles 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: true,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6063", verified: false },
      { label: 'Standard Tempers', value: "T5", verified: false },
      { label: 'Surface Finishes', value: "Clear Anodized, Black Anodized", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["V-groove surface roughness is tightly monitored to ensure zero jitter during linear roller traversal."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-11',
    slug: 'solar_panel_frame_profiles',
    aliases: ["solar-panel-frame-profiles", "solar-module-frame"],
    name: "Solar Panel Frame Profiles",
    category: 'solar-profiles',
    categoryName: 'Solar Profiles',
    shortDescription: "Perimeter aluminium frame extrusions for crystalline and bifacial photovoltaic modules.",
    longDescription: "High-volume perimeter frames engineered for automated solar panel assembly lines. Equipped with internal corner key slots, glass adhesive channels, and grounding contact dimples.",
    profileGeometry: 'Hollow',
    alloys: ["6063", "6005A"],
    tempers: ["T5", "T6"],
    surfaceFinishes: ["Clear Anodized (15\u00b5m)", "Black Anodized (15\u00b5m)"],
    applications: ["Bifacial PV Modules", "Utility-Scale Solar Panels", "Commercial Rooftop PV", "Off-Grid Solar Panels"],
    fabrications: ["Automated Mitre Cutting 45\u00b0", "Drain Hole Punching", "Corner Key Insertion Hole Punching"],
    verifiedChips: ["Class 1 Anodizing 15\u00b5m", "High Volume Ready", "Wind/Snow Load Rated"],
    primaryImage: '/media/catalog/11_solar_panel_frame_profiles.webp',
    galleryImages: [
      '/media/catalog/11_solar_panel_frame_profiles.webp',
      '/media/catalog/11_solar_panel_frame_profiles.webp'
    ],
    media: [
      {
        id: 'med-prod-11-01',
        productId: 'prod-11',
        assetKey: 'solar_panel_frame_profiles',
        url: '/media/catalog/11_solar_panel_frame_profiles.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "Solar Panel Frame Profiles 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: true,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6063, 6005A", verified: false },
      { label: 'Standard Tempers', value: "T5, T6", verified: false },
      { label: 'Surface Finishes', value: "Clear Anodized (15\u00b5m), Black Anodized (15\u00b5m)", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Tolerances on 45-degree corner mitres are maintained within \u00b10.15\u00b0 to prevent water leakage."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-12',
    slug: 'solar_mounting_rails',
    aliases: ["solar-mounting-rails", "solar-mounting-rail"],
    name: "Solar Mounting Rails",
    category: 'solar-profiles',
    categoryName: 'Solar Profiles',
    shortDescription: "Heavy-duty structural mounting rails with continuous top and side fastener channels.",
    longDescription: "Engineered structural racking rails designed to span purlins and structural rafters under high wind uplift and snow load conditions across ground and rooftop arrays.",
    profileGeometry: 'Complex Multi-Void',
    alloys: ["6005A", "6061"],
    tempers: ["T6"],
    surfaceFinishes: ["Clear Anodized (15\u201320\u00b5m)"],
    applications: ["Ground-Mount Utility Farms", "Rooftop Ballast Systems", "Solar Carport Structures", "Floating Solar Arrays"],
    fabrications: ["Length Sawing up to 6.2m", "Custom Slot Punching", "End Cap Fitting", "Splice Bar Jointing"],
    verifiedChips: ["6005A-T6 High Yield", "Continuous Slot", "Outdoor Marine Anodized"],
    primaryImage: '/media/catalog/12_solar_mounting_rails.webp',
    galleryImages: [
      '/media/catalog/12_solar_mounting_rails.webp',
      '/media/catalog/12_solar_mounting_rails.webp'
    ],
    media: [
      {
        id: 'med-prod-12-01',
        productId: 'prod-12',
        assetKey: 'solar_mounting_rails',
        url: '/media/catalog/12_solar_mounting_rails.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "Solar Mounting Rails 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6005A, 6061", verified: false },
      { label: 'Standard Tempers', value: "T6", verified: false },
      { label: 'Surface Finishes', value: "Clear Anodized (15\u201320\u00b5m)", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Multi-void internal ribs are placed along the principal bending axis to maximize cross-sectional moment."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-13',
    slug: 'solar_mid_clamps',
    aliases: ["solar-mid-clamps", "solar-clamp-profile"],
    name: "Solar Mid Clamps",
    category: 'solar-profiles',
    categoryName: 'Solar Profiles',
    shortDescription: "Extruded aluminium clamping sections for securing adjacent solar modules.",
    longDescription: "Solid profile extrusion cut to precise clamp lengths with central bolt clearance and serrated clamping pads for slip-resistant module retention.",
    profileGeometry: 'Solid',
    alloys: ["6005A", "6063"],
    tempers: ["T6", "T5"],
    surfaceFinishes: ["Clear Anodized", "Black Anodized"],
    applications: ["Photovoltaic Array Fastening", "Ground Mount Clamping", "Rooftop Array Mid-Joints"],
    fabrications: ["High-Speed Chop Saw Cutting", "Deburring & Tumbling", "Clearance Hole Punching", "Pre-Assembly Kitting"],
    verifiedChips: ["Serrated Grip Pads", "Pre-Cut / Full Length", "6005A-T6 High Clamp Load"],
    primaryImage: '/media/catalog/13_solar_mid_clamps.webp',
    galleryImages: [
      '/media/catalog/13_solar_mid_clamps.webp',
      '/media/catalog/13_solar_mid_clamps.webp'
    ],
    media: [
      {
        id: 'med-prod-13-01',
        productId: 'prod-13',
        assetKey: 'solar_mid_clamps',
        url: '/media/catalog/13_solar_mid_clamps.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "Solar Mid Clamps 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: true,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6005A, 6063", verified: false },
      { label: 'Standard Tempers', value: "T6, T5", verified: false },
      { label: 'Surface Finishes', value: "Clear Anodized, Black Anodized", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Serration teeth are extruded directly into profile geometry, eliminating secondary knurling operations."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-14',
    slug: 'solar_end_clamps',
    aliases: ["solar-end-clamps", "solar-carport"],
    name: "Solar End Clamps",
    category: 'solar-profiles',
    categoryName: 'Solar Profiles',
    shortDescription: "Perimeter termination clamps designed to secure the outer edge of solar module arrays.",
    longDescription: "Engineered end-clamp profiles designed to match standard module frame heights (30mm, 35mm, 40mm) with integrated grounding rib geometry.",
    profileGeometry: 'Solid',
    alloys: ["6005A", "6063"],
    tempers: ["T6", "T5"],
    surfaceFinishes: ["Clear Anodized", "Black Anodized"],
    applications: ["Array Outer Edge Termination", "Rooftop Perimeter Mounting", "Carport Array Framing"],
    fabrications: ["Precision Chopping", "Tumble Deburring", "Tapping / Piercing", "Hardware Assembly"],
    verifiedChips: ["30/35/40mm Frame Match", "Anti-Slip Ribbing", "Corrosion Resistant"],
    primaryImage: '/media/catalog/14_solar_end_clamps.webp',
    galleryImages: [
      '/media/catalog/14_solar_end_clamps.webp',
      '/media/catalog/14_solar_end_clamps.webp'
    ],
    media: [
      {
        id: 'med-prod-14-01',
        productId: 'prod-14',
        assetKey: 'solar_end_clamps',
        url: '/media/catalog/14_solar_end_clamps.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "Solar End Clamps 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: true,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6005A, 6063", verified: false },
      { label: 'Standard Tempers', value: "T6, T5", verified: false },
      { label: 'Surface Finishes', value: "Clear Anodized, Black Anodized", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Leg height is calibrated to match module frame height with controlled clamping deflection."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-15',
    slug: 'heat_sink_profiles',
    aliases: ["heat-sink-profiles", "inverter-heatsink"],
    name: "Heat Sink Profiles",
    category: 'heat-sink-thermal',
    categoryName: 'Heat Sink / Thermal',
    shortDescription: "High-density comb and tapered fin heat sinks for high-power semiconductor cooling.",
    longDescription: "Thermal management extrusion profiles engineered with high aspect ratio fin geometries for maximum surface area and efficient forced or natural convection in power electronics.",
    profileGeometry: 'Fin Array',
    alloys: ["6063", "1050", "6060"],
    tempers: ["T5"],
    surfaceFinishes: ["Black Anodized (High Emissivity)", "Clear Anodized", "Mill Finish"],
    applications: ["Solar Inverter Heatsinks", "EV Motor Controllers", "High-Power Switchgear", "Audio Power Amplifiers"],
    fabrications: ["Precision CNC Fly-Cutting", "Hole Drilling & Tapping for TO-220/TO-247", "Surface Lapping"],
    verifiedChips: ["High Aspect Ratio Fins", "Thermal 6063-T5", "Black Emissivity Anodized"],
    primaryImage: '/media/catalog/15_heat_sink_profiles.webp',
    galleryImages: [
      '/media/catalog/15_heat_sink_profiles.webp',
      '/media/catalog/15_heat_sink_profiles.webp'
    ],
    media: [
      {
        id: 'med-prod-15-01',
        productId: 'prod-15',
        assetKey: 'heat_sink_profiles',
        url: '/media/catalog/15_heat_sink_profiles.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "Heat Sink Profiles 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6063, 1050, 6060", verified: false },
      { label: 'Standard Tempers', value: "T5", verified: false },
      { label: 'Surface Finishes', value: "Black Anodized (High Emissivity), Clear Anodized, Mill Finish", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Fin tip draft angles of 0.5\u00b0\u20131.0\u00b0 prevent die sticking during extrusion press runs."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-16',
    slug: 'led_lighting_profiles',
    aliases: ["led-lighting-profiles", "led-heatsink"],
    name: "LED Lighting Profiles",
    category: 'heat-sink-thermal',
    categoryName: 'Heat Sink / Thermal',
    shortDescription: "Linear LED architectural channel profiles with integrated lens snap tracks and thermal sink.",
    longDescription: "Architectural lighting profiles combining efficient LED strip thermal dissipation with precision snap-in channels for polycarbonate diffuser lenses and end-caps.",
    profileGeometry: 'Semi-Hollow',
    alloys: ["6063"],
    tempers: ["T5"],
    surfaceFinishes: ["Anodized Silver", "Matte Black Anodized", "White Powder Coated"],
    applications: ["Linear Commercial Fixtures", "High-Bay Industrial LED", "Cove & Recessed Lighting", "Display Case Illumination"],
    fabrications: ["Precision Miter Cutting", "Access Hole Punching", "Custom Length Anodizing", "Lens Fitting"],
    verifiedChips: ["Diffuser Lens Snap Fit", "Integrated PCB Channel", "Architectural Anodized"],
    primaryImage: '/media/catalog/16_led_lighting_profiles.webp',
    galleryImages: [
      '/media/catalog/16_led_lighting_profiles.webp',
      '/media/catalog/16_led_lighting_profiles.webp'
    ],
    media: [
      {
        id: 'med-prod-16-01',
        productId: 'prod-16',
        assetKey: 'led_lighting_profiles',
        url: '/media/catalog/16_led_lighting_profiles.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "LED Lighting Profiles 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6063", verified: false },
      { label: 'Standard Tempers', value: "T5", verified: false },
      { label: 'Surface Finishes', value: "Anodized Silver, Matte Black Anodized, White Powder Coated", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Lens retention grooves maintain tight tolerance (\u00b10.1mm) to guarantee clean snap-fit engagement."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-17',
    slug: 'curtain_wall_profiles',
    aliases: ["curtain-wall-profiles", "curtain-wall-mullion"],
    name: "Curtain Wall Profiles",
    category: 'architectural-systems',
    categoryName: 'Architectural Systems',
    shortDescription: "Large-span mullion and transom profiles for high-rise unitized and stick curtain wall facades.",
    longDescription: "Heavy structural architectural profiles engineered to withstand extreme wind deflection, thermal expansion, and seismic joint movement on commercial facade structures.",
    profileGeometry: 'Complex Multi-Void',
    alloys: ["6063", "6005A", "6061"],
    tempers: ["T5", "T6"],
    surfaceFinishes: ["PVDF Fluoropolymer (2/3 Coat)", "AAMA 2605 Powder Coating", "Hard Anodized"],
    applications: ["Unitized High-Rise Facades", "Stick Curtain Wall Systems", "Structural Glass Atriums", "Canopy Support Mullions"],
    fabrications: ["CNC End Coping", "Continuous Drainage Slotting", "Pressure Plate Punching", "Thermal Barrier Assembly"],
    verifiedChips: ["AAMA 2605 Compliant", "Multi-Chamber Mullion", "6005A-T6 Structural"],
    primaryImage: '/media/catalog/17_curtain_wall_profiles.webp',
    galleryImages: [
      '/media/catalog/17_curtain_wall_profiles.webp',
      '/media/catalog/17_curtain_wall_profiles.webp'
    ],
    media: [
      {
        id: 'med-prod-17-01',
        productId: 'prod-17',
        assetKey: 'curtain_wall_profiles',
        url: '/media/catalog/17_curtain_wall_profiles.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "Curtain Wall Profiles 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6063, 6005A, 6061", verified: false },
      { label: 'Standard Tempers', value: "T5, T6", verified: false },
      { label: 'Surface Finishes', value: "PVDF Fluoropolymer (2/3 Coat), AAMA 2605 Powder Coating, Hard Anodized", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Extrusion length straightness (camber and bow) is strictly controlled to ASTM B221 precision limits."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-18',
    slug: 'window_door_profiles',
    aliases: ["window-door-profiles", "window-door"],
    name: "Window & Door Profiles",
    category: 'architectural-systems',
    categoryName: 'Architectural Systems',
    shortDescription: "Multi-chamber thermally broken profile sections for energy-efficient windows and doors.",
    longDescription: "Architectural window and door frame suites engineered with knurled crimping channels for polyamide (PA66) thermal barrier strip insertion, maximizing acoustic and thermal performance.",
    profileGeometry: 'Complex Multi-Void',
    alloys: ["6063"],
    tempers: ["T5"],
    surfaceFinishes: ["AAMA 2604 Powder Coating", "Clear / Bronze Anodizing", "Woodgrain Sublimation"],
    applications: ["Commercial Casement Windows", "Heavy Sliding Patio Doors", "Pivot Entrance Doors", "Storefront Systems"],
    fabrications: ["45\u00b0 Double Miter Sawing", "Polyamide Strip Insertion & Rolling", "Drain Hole Routing", "Hardware Milling"],
    verifiedChips: ["Thermal Break Ready", "AAMA 2604 Coating", "Multi-Chamber Acoustic"],
    primaryImage: '/media/catalog/18_window_door_profiles.webp',
    galleryImages: [
      '/media/catalog/18_window_door_profiles.webp',
      '/media/catalog/18_window_door_profiles.webp'
    ],
    media: [
      {
        id: 'med-prod-18-01',
        productId: 'prod-18',
        assetKey: 'window_door_profiles',
        url: '/media/catalog/18_window_door_profiles.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "Window & Door Profiles 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6063", verified: false },
      { label: 'Standard Tempers', value: "T5", verified: false },
      { label: 'Surface Finishes', value: "AAMA 2604 Powder Coating, Clear / Bronze Anodizing, Woodgrain Sublimation", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Polyamide rolling groove knurling is monitored to achieve pull-apart shear strengths per EN 14024."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-19',
    slug: 'handrail_profiles',
    aliases: ["handrail-profiles", "structural-railings"],
    name: "Handrail Profiles",
    category: 'architectural-systems',
    categoryName: 'Architectural Systems',
    shortDescription: "Ergonomic circular and ovate architectural handrails for commercial staircases and balconies.",
    longDescription: "Smooth extruded circular and oval handrail profiles with continuous bottom channels for concealed glass or baluster mounting brackets. Free of sharp parting lines.",
    profileGeometry: 'Hollow',
    alloys: ["6063", "6061"],
    tempers: ["T5", "T6"],
    surfaceFinishes: ["Satin Anodized (15\u201320\u00b5m)", "Architectural Powder Coated"],
    applications: ["Commercial Staircases", "Balcony Railings", "Public Transit Barrier Rails", "Hospital Wall Protection"],
    fabrications: ["Precision Length Cut", "End Cap Welding / Plugging", "Curved Bending", "Hardware Fastening"],
    verifiedChips: ["Ergonomic Grip", "Satin Smooth Finish", "ADA Compliant Diameter"],
    primaryImage: '/media/catalog/19_handrail_profiles.webp',
    galleryImages: [
      '/media/catalog/19_handrail_profiles.webp',
      '/media/catalog/19_handrail_profiles.webp'
    ],
    media: [
      {
        id: 'med-prod-19-01',
        productId: 'prod-19',
        assetKey: 'handrail_profiles',
        url: '/media/catalog/19_handrail_profiles.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "Handrail Profiles 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: true,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6063, 6061", verified: false },
      { label: 'Standard Tempers', value: "T5, T6", verified: false },
      { label: 'Surface Finishes', value: "Satin Anodized (15\u201320\u00b5m), Architectural Powder Coated", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Outer surface is subjected to high-grade die polishing to eliminate visible die lines before anodizing."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-20',
    slug: 'railing_balustrade_profiles',
    aliases: ["railing-balustrade-profiles", "louvers-sunshade"],
    name: "Railing & Balustrade Profiles",
    category: 'architectural-systems',
    categoryName: 'Architectural Systems',
    shortDescription: "Heavy-duty structural base shoe channels and post extrusions for frameless glass balustrades.",
    longDescription: "Heavy structural floor-mount base shoe profiles engineered to clamp 12mm to 21.5mm laminated glass panels under rigorous building code crowd loading standards.",
    profileGeometry: 'Semi-Hollow',
    alloys: ["6063", "6005A"],
    tempers: ["T5", "T6"],
    surfaceFinishes: ["Polished Anodized", "Matte Architectural Powder Coat"],
    applications: ["Frameless Glass Balustrades", "Rooftop Terrace Railings", "Pool Safety Fencing", "Atrium Guardrails"],
    fabrications: ["Heavy Precision Sawing", "Anchor Hole Drilling & Counterboring", "Drainage Slots", "Surface Treatment"],
    verifiedChips: ["Heavy Base Shoe", "Laminated Glass Ready", "Crowd Load Certified"],
    primaryImage: '/media/catalog/20_railing_balustrade_profiles.webp',
    galleryImages: [
      '/media/catalog/20_railing_balustrade_profiles.webp',
      '/media/catalog/20_railing_balustrade_profiles.webp'
    ],
    media: [
      {
        id: 'med-prod-20-01',
        productId: 'prod-20',
        assetKey: 'railing_balustrade_profiles',
        url: '/media/catalog/20_railing_balustrade_profiles.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "Railing & Balustrade Profiles 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6063, 6005A", verified: false },
      { label: 'Standard Tempers', value: "T5, T6", verified: false },
      { label: 'Surface Finishes', value: "Polished Anodized, Matte Architectural Powder Coat", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Thick base sections require controlled water spray quench to prevent internal residual stress distortion."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-21',
    slug: 'enclosure_profiles',
    aliases: ["enclosure-profiles", "power-electronics"],
    name: "Enclosure Profiles",
    category: 'architectural-systems',
    categoryName: 'Architectural Systems',
    shortDescription: "Modular interlocking enclosure extrusions with integrated PCB slots and sealing gasket grooves.",
    longDescription: "Engineered electronics and outdoor equipment enclosure profiles featuring slide-in PCB card guides, rubber gasket seal channels (IP65/IP66), and tongue-and-groove side interlocks.",
    profileGeometry: 'Complex Multi-Void',
    alloys: ["6063"],
    tempers: ["T5"],
    surfaceFinishes: ["Clear Anodized", "Black Anodized", "Weatherproof Powder Coat"],
    applications: ["Outdoor Telecom Enclosures", "Industrial Instrumentation", "Power Inverter Cabinets", "Controller Housings"],
    fabrications: ["CNC End Milling", "Connector Port Piercing", "Gasket Channel Routing", "Tapping"],
    verifiedChips: ["Integrated PCB Guides", "Gasket Groove (IP65)", "Interlocking Shell"],
    primaryImage: '/media/catalog/21_enclosure_profiles.webp',
    galleryImages: [
      '/media/catalog/21_enclosure_profiles.webp',
      '/media/catalog/21_enclosure_profiles.webp'
    ],
    media: [
      {
        id: 'med-prod-21-01',
        productId: 'prod-21',
        assetKey: 'enclosure_profiles',
        url: '/media/catalog/21_enclosure_profiles.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "Enclosure Profiles 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6063", verified: false },
      { label: 'Standard Tempers', value: "T5", verified: false },
      { label: 'Surface Finishes', value: "Clear Anodized, Black Anodized, Weatherproof Powder Coat", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["PCB card guide tolerances must be held within +0.15/-0.05mm to ensure smooth slide insertion."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-22',
    slug: 'cnc_machined_components',
    aliases: ["cnc-machined-components", "cnc-components"],
    name: "CNC Machined Components",
    category: 'oem-components',
    categoryName: 'OEM Components',
    shortDescription: "Turnkey multi-axis CNC milled and turned components manufactured to client STEP/CAD nominals.",
    longDescription: "Complex precision aluminium components produced from extruded profile blanks or forged billets. Equipped with 3-axis and 4-axis long-bed CNC centers for aerospace, robotics, and automation parts.",
    profileGeometry: 'CNC Component',
    alloys: ["6061", "6082", "7075"],
    tempers: ["T6", "T651"],
    surfaceFinishes: ["Bead Blasted + Anodized", "Hard Anodized (Type III)", "Chemical Conversion"],
    applications: ["Robotic Joint Actuators", "Engine Mounts", "Hydraulic Manifold Blocks", "Precision Sensor Housings"],
    fabrications: ["4-Axis CNC Milling", "CNC Turning", "Micro-Tapping", "Ultrasonic Cleaning", "CMM Inspection"],
    verifiedChips: ["Tight Tolerance \u00b10.02mm", "CMM Inspected", "Traceable Heat Lot"],
    primaryImage: '/media/catalog/22_cnc_machined_components.webp',
    galleryImages: [
      '/media/catalog/22_cnc_machined_components.webp',
      '/media/catalog/22_cnc_machined_components.webp'
    ],
    media: [
      {
        id: 'med-prod-22-01',
        productId: 'prod-22',
        assetKey: 'cnc_machined_components',
        url: '/media/catalog/22_cnc_machined_components.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "CNC Machined Components 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6061, 6082, 7075", verified: false },
      { label: 'Standard Tempers', value: "T6, T651", verified: false },
      { label: 'Surface Finishes', value: "Bead Blasted + Anodized, Hard Anodized (Type III), Chemical Conversion", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Design with standard cutter radii on pocket corners to maximize CNC machining feed rates."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-23',
    slug: 'custom_aluminium_parts',
    aliases: ["custom-aluminium-parts", "cut-drill-tap", "surface-finished-oem"],
    name: "Custom Aluminium Parts",
    category: 'oem-components',
    categoryName: 'OEM Components',
    shortDescription: "Custom fabricated aluminium parts combining extrusion blanking, stamping, bending, and finishing.",
    longDescription: "Customized OEM parts integrating profile extrusion with secondary stamping, hydraulic press braking, precision drilling, and custom packaging for international Tier-1 assemblies.",
    profileGeometry: 'CNC Component',
    alloys: ["6061", "6063", "5052"],
    tempers: ["T6", "H32"],
    surfaceFinishes: ["Anodized", "Electroless Nickel Plating", "Passivated"],
    applications: ["Automotive Heat Shields", "Suspension Brackets", "Machinery Linkages", "Electronics Heatsink Assemblies"],
    fabrications: ["Stamping & Blanking", "CNC Bending", "Tapping", "Surface Finishing", "Custom Kitting"],
    verifiedChips: ["Multi-Process OEM", "Custom Tooling", "Export Ready Kitting"],
    primaryImage: '/media/catalog/23_custom_aluminium_parts.webp',
    galleryImages: [
      '/media/catalog/23_custom_aluminium_parts.webp',
      '/media/catalog/23_custom_aluminium_parts.webp'
    ],
    media: [
      {
        id: 'med-prod-23-01',
        productId: 'prod-23',
        assetKey: 'custom_aluminium_parts',
        url: '/media/catalog/23_custom_aluminium_parts.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "Custom Aluminium Parts 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6061, 6063, 5052", verified: false },
      { label: 'Standard Tempers', value: "T6, H32", verified: false },
      { label: 'Surface Finishes', value: "Anodized, Electroless Nickel Plating, Passivated", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Combine extrusion features with secondary fabrication to minimize overall part cost."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },
  {
    id: 'prod-24',
    slug: 'industrial_assemblies',
    aliases: ["industrial-assemblies", "assembled-subcomponents"],
    name: "Industrial Assemblies",
    category: 'oem-components',
    categoryName: 'OEM Components',
    shortDescription: "Complete sub-assemblies including hardware insertion, modular framing, and export crating.",
    longDescription: "Turnkey factory sub-assembly services for global equipment manufacturers. Profiles are cut, machined, tapped, equipped with bearings, brackets, fasteners, and packaged for rapid on-site installation.",
    profileGeometry: 'CNC Component',
    alloys: ["6063", "6061"],
    tempers: ["T5", "T6"],
    surfaceFinishes: ["Anodized", "Powder Coated"],
    applications: ["Conveyor Modules", "Inspection Workstations", "Cleanroom Modular Trolleys", "Linear Gantry Modules"],
    fabrications: ["Full Sub-Assembly", "Fastener Insertion", "Sub-System Functional Check", "Custom Export Crating"],
    verifiedChips: ["Turnkey Assembly", "Integrated Fasteners", "Factory Tested"],
    primaryImage: '/media/catalog/24_industrial_assemblies.webp',
    galleryImages: [
      '/media/catalog/24_industrial_assemblies.webp',
      '/media/catalog/24_industrial_assemblies.webp'
    ],
    media: [
      {
        id: 'med-prod-24-01',
        productId: 'prod-24',
        assetKey: 'industrial_assemblies',
        url: '/media/catalog/24_industrial_assemblies.webp',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: "Industrial Assemblies 4:3 industrial aluminium extrusion studio render",
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      { label: 'Available Alloys', value: "6063, 6061", verified: false },
      { label: 'Standard Tempers', value: "T5, T6", verified: false },
      { label: 'Surface Finishes', value: "Anodized, Powder Coated", verified: false },
      { label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false },
      { label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }
    ],
    mediaProvenance: {
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    },
    dfmNotes: ["Modular fastener slots allow tolerance accommodation during mechanical sub-assembly alignment."],
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  },

];

export default PRODUCTS_V2;
