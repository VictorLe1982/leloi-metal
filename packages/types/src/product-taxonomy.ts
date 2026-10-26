/**
 * LELOI METAL — PRODUCT TAXONOMY (SINGLE SOURCE OF TRUTH)
 * Specification: CODEX PRODUCT TAXONOMY + MEDIA + UI CONSISTENCY FIX V5
 * Brand: LELOI METAL — Aluminium for a Better World
 * Parent Company: LELOI EXIM GLOBAL
 */

export interface ProductFinishRelationship {
  finishType: 'MILL_FINISH' | 'ANODIZED' | 'POWDER_COATED';
  brand?: string; // e.g. 'AkzoNobel Powder Coating'
  warrantyYears?: number; // e.g. 10
  warrantyDisclaimer?: string;
  standards?: string[]; // e.g. ['AAMA 2604', 'AAMA 2605', 'Qualicoat Class 2']
  isAvailable: boolean;
}

export interface ProductMediaItem {
  id: string;
  productId: string;
  url: string;
  mediaType: 'image/webp' | 'image/png' | 'image/svg+xml';
  altText: string;
  isPrimary: boolean;
  approvalStatus: 'APPROVED' | 'DRAFT' | 'REVIEW';
  isPlaceholder?: boolean;
}

export interface ProductSubcategory {
  id: string;
  slug: string;
  fullSlug: string; // e.g. /products/architectural/windows-doors
  name: string;
  shortDescription: string;
  categorySlug: string;
  groupKey?: string; // e.g. 'A' through 'K' for architectural groups
  groupName?: string; // e.g. 'Windows & Doors'
  heroImage?: string;
  applications: string[];
  productCount?: number;
}

export interface ProductTopCategory {
  id: string;
  code: 'CUSTOM' | 'INDUSTRIAL' | 'ENERGY' | 'BUILDING' | 'THERMAL' | 'OEM';
  slug: string;
  name: string;
  navLabel: string;
  shortDescription: string;
  overview: string;
  heroImage: string;
  seoTitle: string;
  seoDescription: string;
  subcategories: ProductSubcategory[];
  applications: string[];
  keyAdvantages: string[];
  faqs: { q: string; a: string }[];
}

export interface ProductFamilyItem {
  id: string;
  slug: string;
  aliases?: string[];
  name: string;
  category: string; // canonical category slug e.g. 'architectural'
  categoryName: string;
  subcategorySlug?: string;
  shortDescription: string;
  longDescription: string;
  profileGeometry: 'Solid' | 'Hollow' | 'Semi-Hollow' | 'Complex Multi-Void' | 'T-Slot Modular' | 'Fin Array' | 'CNC Component';
  alloys: string[];
  tempers: string[];
  surfaceFinishes: string[];
  finishRelationship?: ProductFinishRelationship[];
  applications: string[];
  fabrications: string[];
  verifiedChips: string[];
  primaryImage: string;
  galleryImages: string[];
  media?: ProductMediaItem[];
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
  dfmNotes: string[];
  qcStandards: string[];
  packaging: string;
}

// ==============================================================================
// 1. CANONICAL TOP-LEVEL PRODUCT CATEGORIES & SUBCATEGORIES
// ==============================================================================

export const PRODUCT_TAXONOMY: ProductTopCategory[] = [
  // ----------------------------------------------------------------------------
  // 01. CUSTOM EXTRUSIONS
  // ----------------------------------------------------------------------------
  {
    id: 'cat-01-custom',
    code: 'CUSTOM',
    slug: 'custom-extrusions',
    name: 'Custom Extrusions',
    navLabel: 'Custom Extrusions',
    shortDescription: 'Tailored solid, hollow, and complex multi-void aluminium profiles engineered to client CAD drawings.',
    overview: 'Custom aluminium extrusion manufacturing from Vietnam for international OEM fabricators and equipment manufacturers. Tooling design, alloy formulation, and DFM flow analysis from 2D/3D models.',
    heroImage: '/media/catalog/01_square_rectangular_hollow_profiles.webp',
    seoTitle: 'Custom Aluminium Extrusions | Made-to-Drawing Vietnam | LELOI METAL',
    seoDescription: 'Direct factory custom aluminium extrusions in Vietnam. Solid, hollow, semi-hollow, and multi-void profiles made to proprietary client CAD drawings with ISO 9001:2015 quality assurance.',
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
    ],
    subcategories: [
      {
        id: 'sub-custom-01',
        slug: 'custom-solid-profiles',
        fullSlug: '/products/custom-extrusions/custom-solid-profiles',
        name: 'Custom Solid Aluminium Profiles',
        shortDescription: 'Heavy-duty solid cross-section profiles engineered for structural loading and subsequent CNC machining.',
        categorySlug: 'custom-extrusions',
        applications: ['Structural Cleats', 'CNC Billets', 'Electrical Busbars']
      },
      {
        id: 'sub-custom-02',
        slug: 'custom-hollow-profiles',
        fullSlug: '/products/custom-extrusions/custom-hollow-profiles',
        name: 'Custom Hollow Aluminium Profiles',
        shortDescription: 'Single-void and multi-chamber hollow profiles produced on porthole and bridge dies.',
        categorySlug: 'custom-extrusions',
        applications: ['Chassis Frameworks', 'Columns', 'Structural Conduit']
      },
      {
        id: 'sub-custom-03',
        slug: 'semi-hollow-profiles',
        fullSlug: '/products/custom-extrusions/semi-hollow-profiles',
        name: 'Semi-Hollow Aluminium Profiles',
        shortDescription: 'Deep throat channels and open tongue sections with precise leg straightness and tongue stability.',
        categorySlug: 'custom-extrusions',
        applications: ['Glazing Channels', 'Guide Rails', 'Edge Trim']
      },
      {
        id: 'sub-custom-04',
        slug: 'complex-multi-void',
        fullSlug: '/products/custom-extrusions/complex-multi-void',
        name: 'Complex Multi-Void Profiles',
        shortDescription: 'High-ratio internal cell geometries for thermal insulation and structural internal ribs.',
        categorySlug: 'custom-extrusions',
        applications: ['Crash Boxes', 'Thermal Stiffeners', 'Air Ducts']
      },
      {
        id: 'sub-custom-05',
        slug: 'round-tubes',
        fullSlug: '/products/custom-extrusions/round-tubes',
        name: 'Round Tubes',
        shortDescription: 'Seamless and porthole extruded aluminium round tubing with tight concentricity and diameter tolerance.',
        categorySlug: 'custom-extrusions',
        applications: ['Fluid Conveyance', 'Mechanical Rollers', 'Structural Masts']
      },
      {
        id: 'sub-custom-06',
        slug: 'square-rectangular-hollow',
        fullSlug: '/products/custom-extrusions/square-rectangular-hollow',
        name: 'Square & Rectangular Hollow Profiles',
        shortDescription: 'Standard and bespoke rectangular tubing for machine bases and structural frames.',
        categorySlug: 'custom-extrusions',
        applications: ['Machine Bases', 'Racks', 'Skids']
      },
      {
        id: 'sub-custom-07',
        slug: 'angle-profiles',
        fullSlug: '/products/custom-extrusions/angle-profiles',
        name: 'Angle Profiles',
        shortDescription: 'Equal and unequal leg aluminium angles for 90-degree corner stiffening and bracket fabrication.',
        categorySlug: 'custom-extrusions',
        applications: ['Corner Bracing', 'Mounting Cleats', 'Framing Flanges']
      },
      {
        id: 'sub-custom-08',
        slug: 'channel-profiles',
        fullSlug: '/products/custom-extrusions/channel-profiles',
        name: 'Channel Profiles',
        shortDescription: 'U-channel and C-profile sections designed for sliding tracks, edge retainers, and cable trays.',
        categorySlug: 'custom-extrusions',
        applications: ['Sliding Tracks', 'Edge Retainers', 'Wiring Raceways']
      },
      {
        id: 'sub-custom-09',
        slug: 't-profiles',
        fullSlug: '/products/custom-extrusions/t-profiles',
        name: 'T Profiles',
        shortDescription: 'Structural Tee sections with balanced flange and web thickness for floor joints and ceiling grids.',
        categorySlug: 'custom-extrusions',
        applications: ['Deck Stiffeners', 'Ceiling Grids', 'Joint Cleats']
      },
      {
        id: 'sub-custom-10',
        slug: 'structural-beams-i-h',
        fullSlug: '/products/custom-extrusions/structural-beams-i-h',
        name: 'I / H Structural Profiles',
        shortDescription: 'Wide-flange H-profiles and high moment-of-inertia I-beams for heavy load-bearing spans.',
        categorySlug: 'custom-extrusions',
        applications: ['Monorail Cranes', 'Gantry Beams', 'Trailer Chassis']
      },
      {
        id: 'sub-custom-11',
        slug: 'custom-decorative',
        fullSlug: '/products/custom-extrusions/custom-decorative',
        name: 'Custom Decorative Profiles',
        shortDescription: 'Architectural trim, fluted profiles, and aesthetic border extrusions with flawless surface finish.',
        categorySlug: 'custom-extrusions',
        applications: ['Interior Trim', 'Fluted Wall Panels', 'Furniture Accents']
      },
      {
        id: 'sub-custom-12',
        slug: 'made-to-drawing',
        fullSlug: '/products/custom-extrusions/made-to-drawing',
        name: 'Made-to-Drawing Extrusions',
        shortDescription: 'Confidential custom extrusion profiles manufactured strictly to client proprietary tooling files.',
        categorySlug: 'custom-extrusions',
        applications: ['Proprietary Systems', 'Patent-Protected Profiles', 'OEM Sub-Assemblies']
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 02. INDUSTRIAL PROFILES
  // ----------------------------------------------------------------------------
  {
    id: 'cat-02-industrial',
    code: 'INDUSTRIAL',
    slug: 'industrial-profiles',
    name: 'Industrial Profiles',
    navLabel: 'Industrial Profiles',
    shortDescription: 'Standard metric modular T-slot framing and heavy-duty profiles for factory automation and robotics.',
    overview: 'Modular aluminium extrusion systems for robotic cells, machine guarding, conveyor framing, and cleanrooms. Compatible with global metric brackets and fasteners.',
    heroImage: '/media/catalog/09_t_slot_modular_profiles.webp',
    seoTitle: 'Industrial Aluminium Profiles | T-Slot Modular Systems | LELOI METAL',
    seoDescription: 'Metric 20, 30, 40, 45, 60, and 80 series T-slot modular framing profiles from Vietnam. Complete automation, conveyor, and robot guarding systems.',
    applications: ['Factory Automation', 'Conveyors', 'Robotics', 'Machine Building', 'Cleanrooms', 'Assembly Lines', 'Industrial Equipment'],
    keyAdvantages: [
      'Standard metric grid series (20, 30, 40, 45, 60, 80 series) and V-slot rails',
      'Clear satin anodized finish 10–15µm for scratch resistance',
      'Precision length cuts with deburred edges and tapped end holes'
    ],
    faqs: [
      {
        q: 'Are your T-slot profiles compatible with standard European brackets?',
        a: 'Yes, our series strictly adhere to standard European slot dimensions (6mm, 8mm, and 10mm slot widths) and accept standard T-nuts and drop-in bolts.'
      }
    ],
    subcategories: [
      {
        id: 'sub-ind-01',
        slug: 't-slot-20-series',
        fullSlug: '/products/industrial-profiles/t-slot-20-series',
        name: 'T-Slot 20 Series',
        shortDescription: '20x20mm and 20x40mm lightweight framing profiles with 6mm slot opening.',
        categorySlug: 'industrial-profiles',
        applications: ['Laboratory Benches', 'Sensor Mounts', 'Light Enclosures']
      },
      {
        id: 'sub-ind-02',
        slug: 't-slot-30-series',
        fullSlug: '/products/industrial-profiles/t-slot-30-series',
        name: 'T-Slot 30 Series',
        shortDescription: '30x30mm and 30x60mm compact structural framing with 8mm slot opening.',
        categorySlug: 'industrial-profiles',
        applications: ['Inspection Carts', 'Display Racks', 'Medium Workstations']
      },
      {
        id: 'sub-ind-03',
        slug: 't-slot-40-series',
        fullSlug: '/products/industrial-profiles/t-slot-40-series',
        name: 'T-Slot 40 Series',
        shortDescription: 'The global standard 40x40mm and 40x80mm framing profiles with 8mm slot width.',
        categorySlug: 'industrial-profiles',
        applications: ['Automation Frames', 'Machine Bases', 'Conveyor Stands']
      },
      {
        id: 'sub-ind-04',
        slug: 't-slot-45-series',
        fullSlug: '/products/industrial-profiles/t-slot-45-series',
        name: 'T-Slot 45 Series',
        shortDescription: 'Heavy European standard 45x45mm and 45x90mm profiles with 10mm slot opening.',
        categorySlug: 'industrial-profiles',
        applications: ['High-Torque Machinery', 'Robotic Cells', 'Heavy Enclosures']
      },
      {
        id: 'sub-ind-05',
        slug: 't-slot-60-series',
        fullSlug: '/products/industrial-profiles/t-slot-60-series',
        name: 'T-Slot 60 Series',
        shortDescription: 'Heavy-duty 60x60mm structural framing with multiple slot configurations.',
        categorySlug: 'industrial-profiles',
        applications: ['Gantry Columns', 'Heavy Tooling Mounts', 'Safety Fences']
      },
      {
        id: 'sub-ind-06',
        slug: 't-slot-80-series',
        fullSlug: '/products/industrial-profiles/t-slot-80-series',
        name: 'T-Slot 80 Series',
        shortDescription: '80x80mm and 80x160mm monumental industrial profiles for heavy dynamic load structures.',
        categorySlug: 'industrial-profiles',
        applications: ['Overhead Gantries', 'Robot Rails', 'Storage Mezzanines']
      },
      {
        id: 'sub-ind-07',
        slug: 'machine-frame-profiles',
        fullSlug: '/products/industrial-profiles/machine-frame-profiles',
        name: 'Machine Frame Profiles',
        shortDescription: 'Structural base profiles engineered for rigidity and precision mounting of CNC spindles.',
        categorySlug: 'industrial-profiles',
        applications: ['Machine Tool Bases', 'Packaging Machinery', 'Laser Cutters']
      },
      {
        id: 'sub-ind-08',
        slug: 'automation-frame-profiles',
        fullSlug: '/products/industrial-profiles/automation-frame-profiles',
        name: 'Automation Frame Profiles',
        shortDescription: 'Modular framing for Cartesian actuators, transfer units, and pick-and-place systems.',
        categorySlug: 'industrial-profiles',
        applications: ['Cartesian Robots', 'Pneumatic Feeders', 'Sorting Hubs']
      },
      {
        id: 'sub-ind-09',
        slug: 'conveyor-profiles',
        fullSlug: '/products/industrial-profiles/conveyor-profiles',
        name: 'Conveyor Profiles',
        shortDescription: 'Extruded side guides, slider beds, and return track profiles for roller and belt conveyors.',
        categorySlug: 'industrial-profiles',
        applications: ['Belt Conveyors', 'Roller Conveyors', 'Modular Chain Tracks']
      },
      {
        id: 'sub-ind-10',
        slug: 'robot-guard-profiles',
        fullSlug: '/products/industrial-profiles/robot-guard-profiles',
        name: 'Robot Guard Profiles',
        shortDescription: 'Safety perimeter guarding extrusions compatible with polycarbonate sheets and wire mesh.',
        categorySlug: 'industrial-profiles',
        applications: ['Robotic Work Cells', 'Machinery Safety Enclosures', 'Access Gates']
      },
      {
        id: 'sub-ind-11',
        slug: 'safety-guard-profiles',
        fullSlug: '/products/industrial-profiles/safety-guard-profiles',
        name: 'Safety Guard Profiles',
        shortDescription: 'High-visibility safety fencing with integrated lock grooves and interlock mountings.',
        categorySlug: 'industrial-profiles',
        applications: ['OSHA Guarding', 'CE Safety Fencing', 'Press Barriers']
      },
      {
        id: 'sub-ind-12',
        slug: 'workstation-profiles',
        fullSlug: '/products/industrial-profiles/workstation-profiles',
        name: 'Workstation Profiles',
        shortDescription: 'Ergonomic manual assembly workbench frames with integrated overhead tool rails and lighting mounts.',
        categorySlug: 'industrial-profiles',
        applications: ['Assembly Benches', 'Packing Stations', 'ESD Workbenches']
      },
      {
        id: 'sub-ind-13',
        slug: 'cleanroom-profiles',
        fullSlug: '/products/industrial-profiles/cleanroom-profiles',
        name: 'Cleanroom Profiles',
        shortDescription: 'Smooth, radius-cornered flush profiles that prevent particle accumulation for ISO 14644 cleanrooms.',
        categorySlug: 'industrial-profiles',
        applications: ['Semiconductor Labs', 'Pharma Cleanrooms', 'Laminar Flow Hoods']
      },
      {
        id: 'sub-ind-14',
        slug: 'linear-motion-profiles',
        fullSlug: '/products/industrial-profiles/linear-motion-profiles',
        name: 'Linear Motion Profiles',
        shortDescription: 'Integrated V-slot and hardened steel shaft carrier profiles for smooth roller linear motion.',
        categorySlug: 'industrial-profiles',
        applications: ['Camera Sliders', 'Linear Actuators', 'Pick & Place Slides']
      },
      {
        id: 'sub-ind-15',
        slug: 'equipment-frame-profiles',
        fullSlug: '/products/industrial-profiles/equipment-frame-profiles',
        name: 'Equipment Frame Profiles',
        shortDescription: 'Heavy-duty structural framework for electrical switchgear and testing equipment racks.',
        categorySlug: 'industrial-profiles',
        applications: ['Switchgear Housings', 'Test Bench Frames', 'Transformer Cages']
      },
      {
        id: 'sub-ind-16',
        slug: 'industrial-enclosure-profiles',
        fullSlug: '/products/industrial-profiles/industrial-enclosure-profiles',
        name: 'Industrial Enclosure Profiles',
        shortDescription: 'Corner extrusion profiles with door gasket channels for IP54/IP65 industrial cabinets.',
        categorySlug: 'industrial-profiles',
        applications: ['Electrical Enclosures', 'NEMA Cabinets', 'Outdoor Kiosks']
      },
      {
        id: 'sub-ind-17',
        slug: 'custom-machinery-extrusions',
        fullSlug: '/products/industrial-profiles/custom-machinery-extrusions',
        name: 'Custom Machinery Extrusions',
        shortDescription: 'Proprietary profile designs tailored to special automated machinery and packaging lines.',
        categorySlug: 'industrial-profiles',
        applications: ['Special Purpose Machines', 'Automated Tool Changers', 'Feed Racks']
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 03. SOLAR ALUMINIUM
  // ----------------------------------------------------------------------------
  {
    id: 'cat-03-solar',
    code: 'ENERGY',
    slug: 'solar',
    name: 'Solar Aluminium',
    navLabel: 'Solar Aluminium',
    shortDescription: 'Photovoltaic module perimeter frames, rooftop mounting rails, ground mount racking, and clamps.',
    overview: 'High-volume structural solar aluminium extrusions engineered in Vietnam for solar farm EPCs and solar module gigafactories. Class 1 anodizing tested for marine coastal durability.',
    heroImage: '/media/catalog/11_solar_panel_frame_profiles.webp',
    seoTitle: 'Solar Aluminium Profiles | PV Frames & Mounting Rails | LELOI METAL',
    seoDescription: 'High-volume solar module frames, rooftop rails, carport beams, and solar mounting clamps from Vietnam. 15-25µm clear anodized with 6005A-T6 structural capacity.',
    applications: ['Photovoltaic Module Frames', 'Ground Mount Racking', 'Rooftop Ballast Systems', 'Solar Carports', 'BIPV Buildings'],
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
    ],
    subcategories: [
      {
        id: 'sub-sol-01',
        slug: 'solar-module-frame-profiles',
        fullSlug: '/products/solar/solar-module-frame-profiles',
        name: 'Solar Module Frame Profiles',
        shortDescription: 'Automated high-speed perimeter frame extrusions for bifacial and monofacial PV panels.',
        categorySlug: 'solar',
        applications: ['Bifacial Solar Panels', 'Monofacial PV Modules', 'Utility-Scale Modules']
      },
      {
        id: 'sub-sol-02',
        slug: 'solar-mounting-rails',
        fullSlug: '/products/solar/solar-mounting-rails',
        name: 'Solar Mounting Rails',
        shortDescription: 'High-strength 6005A-T6 extruded structural rails with top slot for solar clamps and bottom slot for L-feet.',
        categorySlug: 'solar',
        applications: ['Pitched Tin Roofs', 'Tile Roof Systems', 'Trapezoidal Roofs']
      },
      {
        id: 'sub-sol-03',
        slug: 'rooftop-mounting-rails',
        fullSlug: '/products/solar/rooftop-mounting-rails',
        name: 'Rooftop Mounting Rails',
        shortDescription: 'Ballasted and non-penetrative aluminium rail profiles for flat commercial concrete roofs.',
        categorySlug: 'solar',
        applications: ['Flat Roof Ballast', 'East-West Solar Systems', 'Commercial Warehouses']
      },
      {
        id: 'sub-sol-04',
        slug: 'ground-mount-profiles',
        fullSlug: '/products/solar/ground-mount-profiles',
        name: 'Ground Mount Profiles',
        shortDescription: 'Heavy-gauge aluminium beams, posts, and diagonals for utility-scale solar power stations.',
        categorySlug: 'solar',
        applications: ['Utility Solar Farms', 'Agricultural PV Racks', 'Desert Installations']
      },
      {
        id: 'sub-sol-05',
        slug: 'solar-mid-clamp-profiles',
        fullSlug: '/products/solar/solar-mid-clamp-profiles',
        name: 'Solar Mid Clamp Profiles',
        shortDescription: 'Serrated extrusion profiles for clamping between adjacent solar panels with grounding lugs.',
        categorySlug: 'solar',
        applications: ['Inter-Module Clamping', 'Grounding Continuity Clips']
      },
      {
        id: 'sub-sol-06',
        slug: 'solar-end-clamp-profiles',
        fullSlug: '/products/solar/solar-end-clamp-profiles',
        name: 'Solar End Clamp Profiles',
        shortDescription: '30mm, 35mm, and 40mm end clamp extrusions securing perimeter modules to rail ends.',
        categorySlug: 'solar',
        applications: ['Array Edge Fastening', 'Wind Uplift Restraint']
      },
      {
        id: 'sub-sol-07',
        slug: 'solar-carport-profiles',
        fullSlug: '/products/solar/solar-carport-profiles',
        name: 'Solar Carport Profiles',
        shortDescription: 'Long-span aluminium beams and integrated rain gutters for solar parking canopy installations.',
        categorySlug: 'solar',
        applications: ['Commercial Carports', 'EV Charging Canopies', 'Residential Carports']
      },
      {
        id: 'sub-sol-08',
        slug: 'solar-structural-beams',
        fullSlug: '/products/solar/solar-structural-beams',
        name: 'Solar Structural Beams',
        shortDescription: 'Heavy hollow box sections and I-beams engineered for seismic and high wind-load ratings.',
        categorySlug: 'solar',
        applications: ['High Wind Zones', 'Tracker Torque Tubes', 'Spanning Beams']
      },
      {
        id: 'sub-sol-09',
        slug: 'bipv-aluminium-profiles',
        fullSlug: '/products/solar/bipv-aluminium-profiles',
        name: 'BIPV Aluminium Profiles',
        shortDescription: 'Building-Integrated Photovoltaics framing for solar skylights, glass facades, and louvers.',
        categorySlug: 'solar',
        applications: ['Solar Facades', 'PV Canopies', 'Solar Glass Atriums']
      },
      {
        id: 'sub-sol-10',
        slug: 'solar-canopy-structures',
        fullSlug: '/products/solar/solar-canopy-structures',
        name: 'Solar Canopy Structures',
        shortDescription: 'Modular bolt-together aluminium frames for patio solar covers and outdoor shade pergolas.',
        categorySlug: 'solar',
        applications: ['Solar Pergolas', 'Walkway Shade Canopies', 'Terrace Solar Roofs']
      },
      {
        id: 'sub-sol-11',
        slug: 'solar-inverter-enclosures',
        fullSlug: '/products/solar/solar-inverter-enclosures',
        name: 'Solar Inverter Enclosures',
        shortDescription: 'Extruded aluminium heat-dissipating housing shells for central and string solar inverters.',
        categorySlug: 'solar',
        applications: ['String Inverters', 'Micro-Inverters', 'DC Combiner Boxes']
      },
      {
        id: 'sub-sol-12',
        slug: 'solar-equipment-housings',
        fullSlug: '/products/solar/solar-equipment-housings',
        name: 'Solar Equipment Housings',
        shortDescription: 'NEMA 4X / IP66 rated weather-resistant outdoor aluminium cabinets for battery storage systems.',
        categorySlug: 'solar',
        applications: ['BESS Battery Storage', 'Solar Monitoring Stations', 'Weather Stations']
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 04. ARCHITECTURAL ALUMINIUM (11 GROUPS A THROUGH K)
  // ----------------------------------------------------------------------------
  {
    id: 'cat-04-architectural',
    code: 'BUILDING',
    slug: 'architectural',
    name: 'Architectural Aluminium',
    navLabel: 'Architectural Systems',
    shortDescription: 'Comprehensive architectural aluminium systems for residential, commercial, hospitality, and modern buildings.',
    overview: 'High-performance architectural extrusions manufactured to international building standards. Engineered for wind load deflection, thermal barrier performance, and weatherproofing with certified AkzoNobel powder coating, warranties up to 10 years.',
    heroImage: '/media/catalog/17_curtain_wall_profiles.webp',
    seoTitle: 'Architectural Aluminium Systems | Facades & Windows | LELOI METAL',
    seoDescription: 'Architectural aluminium systems for residential, commercial, hospitality and resort projects from Vietnam: Windows, doors, curtain walls, louvers, wall cladding, linear ceilings, pergolas, canopies and balustrades.',
    applications: ['Residential Villas', 'Commercial Facades', 'Hospitality & Resorts', 'Educational Facilities', 'Airports & Transit Hubs'],
    keyAdvantages: [
      'AkzoNobel Powder Coating (Warranty up to 10 years subject to terms)',
      'High-performance polyamide PA66 thermal-break barrier systems',
      'Engineered for extreme wind load deflection compliant with ASTM E330 / BS 6375',
      'Comprehensive 11-vertical building portfolio from facade to outdoor living'
    ],
    faqs: [
      {
        q: 'What architectural powder coating warranties do you offer?',
        a: 'We offer AkzoNobel Powder Coating with warranties up to 10 years subject to approved system, project environment and warranty conditions.'
      },
      {
        q: 'Do you supply complete thermal-break window and door systems?',
        a: 'Yes, our extrusion lines produce polyamide PA66 GF25 insulated profiles for casement, sliding, and folding architectural openings meeting global energy efficiency codes.'
      }
    ],
    subcategories: [
      // Group A: Windows & Doors
      {
        id: 'sub-arch-a01',
        slug: 'windows-doors',
        fullSlug: '/products/architectural/windows-doors',
        name: 'Windows & Doors',
        groupKey: 'A',
        groupName: 'Windows & Doors',
        shortDescription: 'High-precision casement, sliding, bifold, and tilt-and-turn window and door systems.',
        categorySlug: 'architectural',
        applications: ['Luxury Villas', 'Residential Apartments', 'Commercial Entrances']
      },
      // Group B: Curtain Wall & Facade
      {
        id: 'sub-arch-b01',
        slug: 'curtain-wall-facade',
        fullSlug: '/products/architectural/curtain-wall-facade',
        name: 'Curtain Wall & Facade',
        groupKey: 'B',
        groupName: 'Curtain Wall & Facade',
        shortDescription: 'Structural mullions, transoms, and pressure plates for unitized, semi-unitized, and stick facades.',
        categorySlug: 'architectural',
        applications: ['High-Rise Commercial', 'Airport Terminals', 'Glass Atriums']
      },
      // Group C: Louvers & Sunshade
      {
        id: 'sub-arch-c01',
        slug: 'louvers-sunshade',
        fullSlug: '/products/architectural/louvers-sunshade',
        name: 'Louvers & Sunshade',
        groupKey: 'C',
        groupName: 'Louvers & Sunshade',
        shortDescription: 'Aerofoil blades, box louvers, and motorized architectural sun control systems for natural airflow.',
        categorySlug: 'architectural',
        applications: ['Facade Sun Control', 'Mechanical Ventilation Penthouse', 'Acoustic Screens']
      },
      // Group D: Wall Cladding
      {
        id: 'sub-arch-d01',
        slug: 'wall-cladding',
        fullSlug: '/products/architectural/wall-cladding',
        name: 'Wall Cladding',
        groupKey: 'D',
        groupName: 'Wall Cladding',
        shortDescription: 'Ventilated facade carrier rails, rainscreen brackets, and interlocking aluminium panel framing.',
        categorySlug: 'architectural',
        applications: ['Exterior Rainscreen Facades', 'Interior Feature Walls', 'Soffit Cladding']
      },
      // Group E: Ceiling Systems
      {
        id: 'sub-arch-e01',
        slug: 'ceiling-systems',
        fullSlug: '/products/architectural/ceiling-systems',
        name: 'Ceiling Systems',
        groupKey: 'E',
        groupName: 'Ceiling Systems',
        shortDescription: 'Linear baffle ceilings, strip panels, and open-cell suspended aluminium carrier profiles.',
        categorySlug: 'architectural',
        applications: ['Airport Ceilings', 'Metro Stations', 'Commercial Atriums']
      },
      // Group F: Canopy & Outdoor
      {
        id: 'sub-arch-f01',
        slug: 'canopies',
        fullSlug: '/products/architectural/canopies',
        name: 'Canopies & Outdoor',
        groupKey: 'F',
        groupName: 'Canopy & Outdoor',
        shortDescription: 'Architectural entrance canopies, terrace awnings, and residential carport support profiles.',
        categorySlug: 'architectural',
        applications: ['Hotel Entrances', 'Residential Walkways', 'Patio Awnings']
      },
      // Group G: Pergola
      {
        id: 'sub-arch-g01',
        slug: 'pergola',
        fullSlug: '/products/architectural/pergola',
        name: 'Pergola Systems',
        groupKey: 'G',
        groupName: 'Pergola',
        shortDescription: 'Bioclimatic motorized louvered pergolas, structural gutter beams, and outdoor pavilion posts.',
        categorySlug: 'architectural',
        applications: ['Villa Gardens', 'Rooftop Terraces', 'Resort Dining Pavilions']
      },
      // Group H: Bungalow / Resort
      {
        id: 'sub-arch-h01',
        slug: 'bungalow-resort',
        fullSlug: '/products/architectural/bungalow-resort',
        name: 'Bungalow & Resort Structures',
        groupKey: 'H',
        groupName: 'Bungalow / Resort',
        shortDescription: 'Modular aluminium bungalow framing, eco-lodge chalets, and beachfront pavilion substructures.',
        categorySlug: 'architectural',
        applications: ['Eco-Tourism Resorts', 'Beachfront Glamping', 'Modular Tiny Homes']
      },
      // Group I: Railing & Balustrade
      {
        id: 'sub-arch-i01',
        slug: 'railing-balustrade',
        fullSlug: '/products/architectural/railing-balustrade',
        name: 'Railing & Balustrade',
        groupKey: 'I',
        groupName: 'Railing & Balustrade',
        shortDescription: 'Structural dry-glaze glass base shoes, spigots, and slim-line architectural handrail profiles.',
        categorySlug: 'architectural',
        applications: ['Balcony Balustrades', 'Frameless Glass Barriers', 'Stair Handrails']
      },
      // Group J: Decorative Architectural
      {
        id: 'sub-arch-j01',
        slug: 'decorative-screens',
        fullSlug: '/products/architectural/decorative-screens',
        name: 'Decorative Architectural',
        groupKey: 'J',
        groupName: 'Decorative Architectural',
        shortDescription: 'Architectural feature fins, laser-cut screen frames, and custom decorative exterior lattices.',
        categorySlug: 'architectural',
        applications: ['Brise Soleil Screens', 'Privacy Partitions', 'Accent Facade Fins']
      },
      // Group K: Thermal Break
      {
        id: 'sub-arch-k01',
        slug: 'thermal-break',
        fullSlug: '/products/architectural/thermal-break',
        name: 'Thermal-Break Systems',
        groupKey: 'K',
        groupName: 'Thermal Break',
        shortDescription: 'Polyamide PA66 GF25 insulated barrier extrusions that eliminate thermal bridging in building envelopes.',
        categorySlug: 'architectural',
        applications: ['LEED Certified Buildings', 'Cold Climate Envelopes', 'Acoustic Barriers']
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 05. THERMAL MANAGEMENT
  // ----------------------------------------------------------------------------
  {
    id: 'cat-05-thermal',
    code: 'THERMAL',
    slug: 'thermal-management',
    name: 'Thermal Management',
    navLabel: 'Thermal Management',
    shortDescription: 'High-density fin profiles and heat sinks for inverters, power electronics, and LED luminaires.',
    overview: 'High aspect ratio heat sink extrusions engineered with maximum surface area for natural and forced convection cooling. High thermal conductivity 6063 and 6060 alloys with black anodized high-emissivity finishing.',
    heroImage: '/media/catalog/15_heat_sink_profiles.webp',
    seoTitle: 'Aluminium Heat Sinks & Thermal Management | LELOI METAL Vietnam',
    seoDescription: 'High-aspect ratio aluminium heat sinks, inverter cooling housings, EV battery cold plates, and power electronics extrusions from Vietnam with high-emissivity anodizing.',
    applications: ['Solar Inverters', 'EV Charging Stations', 'High-Power LED Fixtures', 'VFD Motor Drives', 'Telecom Towers'],
    keyAdvantages: [
      'High aspect ratio fin designs engineered for maximum thermal dissipation',
      'High thermal conductivity 6063 and 1050/6060 alloys',
      'Black anodized high-emissivity finish for superior radiative cooling'
    ],
    faqs: [
      {
        q: 'What is the maximum fin-to-space aspect ratio you can extrude?',
        a: 'We reliably extrude fin ratios up to 14:1 on standard presses, and up to 18:1 using specialized die designs and high-conductivity 6063 alloy.'
      }
    ],
    subcategories: [
      {
        id: 'sub-thm-01',
        slug: 'led-heat-sink-profiles',
        fullSlug: '/products/thermal-management/led-heat-sink-profiles',
        name: 'LED Heat Sink Profiles',
        shortDescription: 'Circular and linear radial fin heat sinks for high-bay commercial LED fixtures and streetlights.',
        categorySlug: 'thermal-management',
        applications: ['LED High Bays', 'Street Lighting Fixtures', 'Horticultural Lights']
      },
      {
        id: 'sub-thm-02',
        slug: 'lighting-heat-sink-profiles',
        fullSlug: '/products/thermal-management/lighting-heat-sink-profiles',
        name: 'Lighting Heat Sink Profiles',
        shortDescription: 'Continuous slim aluminium channels with integrated thermal pads for architectural LED tape lights.',
        categorySlug: 'thermal-management',
        applications: ['Linear LED Channels', 'Cove Lighting', 'Under-Cabinet Strips']
      },
      {
        id: 'sub-thm-03',
        slug: 'inverter-heat-sink-profiles',
        fullSlug: '/products/thermal-management/inverter-heat-sink-profiles',
        name: 'Inverter Heat Sink Profiles',
        shortDescription: 'Heavy high-density comb fin heat sinks for solar string inverters and motor frequency drives.',
        categorySlug: 'thermal-management',
        applications: ['Solar Inverters', 'Variable Frequency Drives', 'UPS Systems']
      },
      {
        id: 'sub-thm-04',
        slug: 'power-electronics-heat-sinks',
        fullSlug: '/products/thermal-management/power-electronics-heat-sinks',
        name: 'Power Electronics Heat Sinks',
        shortDescription: 'Precision face-milled flat heat sinks for mounting IGBT modules and SCR rectifiers.',
        categorySlug: 'thermal-management',
        applications: ['IGBT Cooling Plates', 'Industrial Power Supplies', 'Welding Inverters']
      },
      {
        id: 'sub-thm-05',
        slug: 'ev-charger-heat-sinks',
        fullSlug: '/products/thermal-management/ev-charger-heat-sinks',
        name: 'EV Charger Heat Sinks',
        shortDescription: 'High-power DC fast-charging power conversion module heat sink housings.',
        categorySlug: 'thermal-management',
        applications: ['DC Fast Chargers', 'EV On-Board Chargers', 'Grid Storage Units']
      },
      {
        id: 'sub-thm-06',
        slug: 'battery-thermal-profiles',
        fullSlug: '/products/thermal-management/battery-thermal-profiles',
        name: 'Battery Thermal Profiles',
        shortDescription: 'Liquid cooling channels and heat sink base plates for lithium-ion battery energy storage.',
        categorySlug: 'thermal-management',
        applications: ['BESS Cooling Plates', 'EV Battery Packs', 'Energy Storage Modules']
      },
      {
        id: 'sub-thm-07',
        slug: 'telecom-heat-sink-profiles',
        fullSlug: '/products/thermal-management/telecom-heat-sink-profiles',
        name: 'Telecom Heat Sink Profiles',
        shortDescription: 'Weatherproof outdoor cooling chassis for 5G cellular base stations and remote radio units.',
        categorySlug: 'thermal-management',
        applications: ['5G Base Stations', 'Remote Radio Units', 'Satellite Enclosures']
      },
      {
        id: 'sub-thm-08',
        slug: 'industrial-cooling-profiles',
        fullSlug: '/products/thermal-management/industrial-cooling-profiles',
        name: 'Industrial Cooling Profiles',
        shortDescription: 'Large natural convection cooling radiators for automated factory electrical control cabinets.',
        categorySlug: 'thermal-management',
        applications: ['Control Panels', 'Transformer Heat Sinks', 'Hydraulic Oil Coolers']
      },
      {
        id: 'sub-thm-09',
        slug: 'custom-high-fin-extrusions',
        fullSlug: '/products/thermal-management/custom-high-fin-extrusions',
        name: 'Custom High-Fin Extrusions',
        shortDescription: 'Engineered fin geometries with aspect ratios exceeding 16:1 for extreme thermal density.',
        categorySlug: 'thermal-management',
        applications: ['Server Immersion Cooling', 'Aerospace Avionics', 'Laser Diodes']
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // 06. OEM COMPONENTS
  // ----------------------------------------------------------------------------
  {
    id: 'cat-06-oem',
    code: 'OEM',
    slug: 'oem-components',
    name: 'OEM Components',
    navLabel: 'OEM Components',
    shortDescription: 'Turnkey CNC machined parts, cut-to-length kits, tapped brackets, and assembled components.',
    overview: 'Full-service turnkey aluminium component manufacturing from billet extrusion to finished CNC machined and packaged sub-assembly. Multi-axis CNC milling, tapping, hardware insertion, and private-label packaging.',
    heroImage: '/media/catalog/22_cnc_machined_components.webp',
    seoTitle: 'OEM Aluminium Components | Precision CNC Machining | LELOI METAL',
    seoDescription: 'Turnkey OEM aluminium manufacturing in Vietnam: Precision cutting, multi-axis CNC milling, drilling, tapping, sub-assembly and export packaging under strict bilateral NDA.',
    applications: ['Automotive Brackets', 'Robotic End-Effectors', 'Precision Electronic Housings', 'Machinery Bases', 'Private-Label Hardware'],
    keyAdvantages: [
      'Long-bed 3-axis and 4-axis CNC machining centers specialized in profile milling',
      'Complete in-house secondary deburring, tumbling, and hardware insertion',
      'Traceable CMM dimensional inspection and full mill test certification (MTR)'
    ],
    faqs: [
      {
        q: 'Can you deliver fully assembled kits ready for assembly lines?',
        a: 'Yes, our assembly shop installs threaded inserts, helicoils, captive fasteners, and provides barcoded custom kitting for export.'
      }
    ],
    subcategories: [
      {
        id: 'sub-oem-01',
        slug: 'cnc-machined-components',
        fullSlug: '/products/oem-components/cnc-machined-components',
        name: 'CNC Machined Aluminium Components',
        shortDescription: 'High-precision profile milling, pocketing, and 3D contouring to ISO 2768-m tolerances.',
        categorySlug: 'oem-components',
        applications: ['Automotive Mounting Brackets', 'Robotics Parts', 'Electronics Enclosures']
      },
      {
        id: 'sub-oem-02',
        slug: 'cut-to-length-components',
        fullSlug: '/products/oem-components/cut-to-length-components',
        name: 'Cut-to-Length Components',
        shortDescription: 'High-speed automated precision saw cutting with length tolerance ±0.15mm and clean miter angles.',
        categorySlug: 'oem-components',
        applications: ['Assembly Cut Kits', 'Frame Struts', 'Precision Spacers']
      },
      {
        id: 'sub-oem-03',
        slug: 'drilled-components',
        fullSlug: '/products/oem-components/drilled-components',
        name: 'Drilled Components',
        shortDescription: 'Multi-spindle and CNC drill lines for precision bolt circles, counterbores, and thru-holes.',
        categorySlug: 'oem-components',
        applications: ['Mounting Flanges', 'Fastener Holes', 'Drainage Ports']
      },
      {
        id: 'sub-oem-04',
        slug: 'tapped-components',
        fullSlug: '/products/oem-components/tapped-components',
        name: 'Tapped Components',
        shortDescription: 'CNC roll and cut tapping from M3 to M20 threads in blind and through holes.',
        categorySlug: 'oem-components',
        applications: ['Threaded Mounts', 'Core Tapped Profiles', 'End Cap Connections']
      },
      {
        id: 'sub-oem-05',
        slug: 'milled-components',
        fullSlug: '/products/oem-components/milled-components',
        name: 'Milled Components',
        shortDescription: 'Surface face milling and slotting providing Ra < 0.8µm surface roughness for gasket sealing.',
        categorySlug: 'oem-components',
        applications: ['Sealing Flanges', 'Keyway Slots', 'Bearing Pockets']
      },
      {
        id: 'sub-oem-06',
        slug: 'precision-aluminium-parts',
        fullSlug: '/products/oem-components/precision-aluminium-parts',
        name: 'Precision Aluminium Parts',
        shortDescription: 'Tight-tolerance structural components 100% inspected on Zeiss Coordinate Measuring Machines (CMM).',
        categorySlug: 'oem-components',
        applications: ['Medical Devices', 'Optics Mounts', 'Aerospace Brackets']
      },
      {
        id: 'sub-oem-07',
        slug: 'surface-finished-oem',
        fullSlug: '/products/oem-components/surface-finished-oem',
        name: 'Surface-Finished OEM Components',
        shortDescription: 'Vibratory deburred, bead-blasted, and bright-dipped precision component finishing.',
        categorySlug: 'oem-components',
        applications: ['Consumer Hardware', 'Cosmetic Housings', 'Handheld Devices']
      },
      {
        id: 'sub-oem-08',
        slug: 'powder-coated-oem',
        fullSlug: '/products/oem-components/powder-coated-oem',
        name: 'Powder-Coated OEM Components',
        shortDescription: 'Custom RAL architectural and industrial powder coated components with masked threads.',
        categorySlug: 'oem-components',
        applications: ['Outdoor Equipment', 'Gym Machinery', 'Solar Inverter Housings']
      },
      {
        id: 'sub-oem-09',
        slug: 'anodized-oem',
        fullSlug: '/products/oem-components/anodized-oem',
        name: 'Anodized OEM Components',
        shortDescription: 'Type II and Type III Hardcoat anodized parts (10–50µm) with high abrasion and dielectric resistance.',
        categorySlug: 'oem-components',
        applications: ['Hydraulic Valves', 'Pneumatic Cylinders', 'Military Equipment']
      },
      {
        id: 'sub-oem-010',
        slug: 'assembled-subcomponents',
        fullSlug: '/products/oem-components/assembled-subcomponents',
        name: 'Assembled Aluminium Sub-components',
        shortDescription: 'Turnkey pre-assembled kits with installed PEM nuts, helicoils, pins, and custom hardware.',
        categorySlug: 'oem-components',
        applications: ['Ready-to-Install Modules', 'Sub-Assemblies', 'Drop-In Kits']
      },
      {
        id: 'sub-oem-011',
        slug: 'custom-aluminium-parts',
        fullSlug: '/products/oem-components/custom-aluminium-parts',
        name: 'Custom Aluminium Parts',
        shortDescription: 'Tailored OEM part manufacturing engineered from extrusion through finishing under strict NDA.',
        categorySlug: 'oem-components',
        applications: ['Proprietary Designs', 'Industrial Hardware', 'Custom Fabrications']
      },
      {
        id: 'sub-oem-012',
        slug: 'private-label-components',
        fullSlug: '/products/oem-components/private-label-components',
        name: 'Private-Label Components',
        shortDescription: 'Laser-etched part numbers, barcoding, branded custom cartons, and export packaging.',
        categorySlug: 'oem-components',
        applications: ['Retail Hardware Kits', 'Distributor Branded Lines', 'Direct JIT Supply']
      }
    ]
  }
];

// ==============================================================================
// 2. CANONICAL CATEGORY SLUG ALIASES (100% ROUTING COMPATIBILITY)
// ==============================================================================

export const CATEGORY_SLUG_MAP: Record<string, string> = {
  // Custom Extrusions
  'custom-extrusions': 'custom-extrusions',
  'custom-aluminium-extrusions': 'custom-extrusions',

  // Industrial Profiles
  'industrial-profiles': 'industrial-profiles',
  'industrial-aluminium-profiles': 'industrial-profiles',

  // Solar Aluminium
  'solar': 'solar',
  'solar-profiles': 'solar',
  'solar-aluminium-profiles': 'solar',

  // Architectural Aluminium
  'architectural': 'architectural',
  'architectural-systems': 'architectural',
  'architectural-aluminium': 'architectural',

  // Thermal Management
  'thermal-management': 'thermal-management',
  'heat-sink-thermal': 'thermal-management',
  'heat-sink-profiles': 'thermal-management',

  // OEM Components
  'oem-components': 'oem-components',
  'oem-aluminium-components': 'oem-components'
};

// ==============================================================================
// 3. TAXONOMY LOOKUP HELPERS
// ==============================================================================

export function getTopLevelCategories(): ProductTopCategory[] {
  return PRODUCT_TAXONOMY;
}

export function getCategoryBySlug(slug: string): ProductTopCategory | undefined {
  const canonicalSlug = CATEGORY_SLUG_MAP[slug] || slug;
  return PRODUCT_TAXONOMY.find((c) => c.slug === canonicalSlug);
}

export function getSubcategoriesByCategory(categorySlug: string): ProductSubcategory[] {
  const category = getCategoryBySlug(categorySlug);
  return category ? category.subcategories : [];
}

export function getSubcategoryBySlug(
  categorySlug: string,
  subcategorySlug: string
): { category: ProductTopCategory; subcategory: ProductSubcategory } | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const subcategory = category.subcategories.find(
    (s) => s.slug === subcategorySlug || s.fullSlug.endsWith(subcategorySlug)
  );
  if (!subcategory) return undefined;
  return { category, subcategory };
}

export function getAllCanonicalCategorySlugs(): string[] {
  return PRODUCT_TAXONOMY.map((c) => c.slug);
}

export function getAllSubcategoryFullSlugs(): { category: string; subcategory: string }[] {
  const result: { category: string; subcategory: string }[] = [];
  for (const cat of PRODUCT_TAXONOMY) {
    for (const sub of cat.subcategories) {
      result.push({
        category: cat.slug,
        subcategory: sub.slug
      });
    }
  }
  return result;
}
