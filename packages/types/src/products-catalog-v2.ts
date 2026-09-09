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

export interface ProductCatalogItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryName: string;
  shortDescription: string;
  longDescription: string;
  profileGeometry: 'Solid' | 'Hollow' | 'Semi-Hollow' | 'Complex Multi-Void' | 'T-Slot Modular' | 'Fin Array' | 'CNC Component';
  alloys: string[];
  tempers: string[];
  surfaceFinishes: string[];
  applications: string[];
  fabrications: string[];
  verifiedChips: string[];
  primaryImage: string;
  galleryImages: string[];
  isStandard: boolean;
  isCustom: boolean;
  requiresDrawing: boolean;
  verificationStatus: 'VERIFIED' | 'UNVERIFIED';
  specs: {
    label: string;
    value: string;
    verified: boolean;
    unit?: string;
  }[];
  mediaProvenance: {
    type: 'CUSTOM_RENDER' | 'FACTORY_OWNED';
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
    overview:
      'Custom aluminium extrusion profiles manufactured in Vietnam for global OEM fabricators and machinery builders. Our engineering team validates die flow, wall-thickness uniformity, and alloy temper suitability directly from 2D/3D CAD models.',
    heroImage: '/images/products/custom-extrusions/category-hero/hero.webp',
    applications: ['Automotive Subframes', 'Industrial Automation', 'Transport Rails', 'Specialized Enclosures'],
    keyAdvantages: [
      'Bespoke die manufacturing tailored to proprietary client CAD files',
      'Solid, hollow, and complex multi-void extrusion capabilities',
      'Full traceability back to primary/secondary billet melt heats',
      'Strict bilateral Non-Disclosure Agreement (NDA) IP protection'
    ],
    faqs: [
      {
        q: 'What CAD file formats does LELOI METAL accept for DFM review?',
        a: 'We accept 3D STEP (.step, .stp), IGES (.igs), 2D DWG, DXF, and dimensioned PDF engineering drawings.'
      },
      {
        q: 'How are custom die ownership and tooling rights managed?',
        a: 'Dies are customer-dedicated property. They are maintained and stored exclusively for your production runs and are never shared with third parties.'
      }
    ]
  },
  {
    id: 'cat-industrial',
    slug: 'industrial-profiles',
    name: 'Industrial Profiles',
    shortDescription: 'Modular T-slot structural framing, conveyor tracks, cleanroom structures, and machine guard extrusions.',
    overview:
      'High-precision modular aluminium extrusion systems engineered for factory automation, robotics guarding, conveyor guide rails, and ergonomic assembly stations. Conforming to standard international groove specifications.',
    heroImage: '/images/products/industrial-profiles/category-hero/hero.webp',
    applications: ['Automation Frames', 'Robotic Enclosures', 'Conveyor Systems', 'Cleanroom Workstations'],
    keyAdvantages: [
      'Compatible with international 20, 30, and 40 series modular hardware',
      'High structural stiffness with 6061-T6 and 6063-T5 alloy options',
      'Satin clear anodized finish for scratch-resistant industrial durability',
      'In-house precision mitre cutting and CNC tapped end-holes'
    ],
    faqs: [
      {
        q: 'Are your T-slot profiles compatible with standard European or Japanese hardware?',
        a: 'Yes, our industrial profiles adhere to standard metric slot dimensions (6mm, 8mm, and 10mm slots) compatible with standard drop-in T-nuts, brackets, and accessories.'
      }
    ]
  },
  {
    id: 'cat-solar',
    slug: 'solar-profiles',
    name: 'Solar Profiles',
    shortDescription: 'High-strength structural aluminium frames, mounting rails, clamp profiles, and carport extrusions.',
    overview:
      'Engineered aluminium structural systems designed for utility-scale solar farms, commercial rooftop racking, solar carports, and photovoltaic module perimeter framing. Optimized for wind and snow load resistance.',
    heroImage: '/images/products/solar-profiles/category-hero/hero.webp',
    applications: ['Utility Ground Solar', 'Commercial Rooftop Racking', 'Solar Carports', 'PV Module Frames'],
    keyAdvantages: [
      'Engineered from 6005A-T6 and 6082-T6 for elevated structural yield strength',
      'Anodized coating (15–25 µm) providing high corrosion resistance for outdoor UV exposure',
      'Pre-punched mounting slots and precision cut lengths optimized for 40ft containers',
      '0% preferential import tariff under CPTPP and EVFTA for qualified destinations'
    ],
    faqs: [
      {
        q: 'Can LELOI METAL provide pre-punched mounting holes on solar rails?',
        a: 'Yes, our fabrication department provides automated continuous slot punching and CNC cutting to your exact layout specifications.'
      }
    ]
  },
  {
    id: 'cat-architectural',
    slug: 'architectural-systems',
    name: 'Architectural Systems',
    shortDescription: 'High-performance curtain wall mullions, facade profiles, louvers, and thermal-break systems.',
    overview:
      'Precision architectural aluminium profiles engineered for commercial building facades, curtain walls, window and door assemblies, and environmental louvers. Combining aesthetic finishing with structural weatherproofing.',
    heroImage: '/images/products/architectural-systems/category-hero/hero.webp',
    applications: ['Commercial Curtain Walls', 'Exterior Sun Louvers', 'Storefront Windows', 'Thermal-Break Doors'],
    keyAdvantages: [
      'Superior surface cosmetics with 6063-T5/T6 alloy formulation',
      'Electrostatic architectural powder coating with verified weather resistance',
      'Thermal break cavity geometry for polyamide insulation strips',
      'Strict dimensional tolerance control conforming to architectural standards'
    ],
    faqs: [
      {
        q: 'What surface finishes are available for architectural profiles?',
        a: 'We offer architectural clear and color anodizing (matte, champagne, bronze, black) and Qualicoat-standard polyester powder coating.'
      }
    ]
  },
  {
    id: 'cat-thermal',
    slug: 'heat-sink-thermal',
    name: 'Heat Sink / Thermal',
    shortDescription: 'High-fin-ratio heat sinks and thermal management extrusions for power electronics, LEDs, and inverters.',
    overview:
      'Thermal dissipation aluminium profiles engineered for power electronics, solar inverter cooling, high-output LED fixtures, telecommunication base stations, and EV battery management systems.',
    heroImage: '/images/products/heat-sink-thermal/category-hero/hero.webp',
    applications: ['Solar Inverters', 'Power Electronics', 'LED Lighting Fixtures', 'EV Battery Cooling'],
    keyAdvantages: [
      'Extruded from 6063 high-conductivity alloys (thermal conductivity ~201–209 W/m·K)',
      'High fin-to-base ratio for maximum convective cooling surface area',
      'Flatness-controlled base plates for optimal thermal interface pad contact',
      'Secondary CNC pocket milling and tapped holes for component mounting'
    ],
    faqs: [
      {
        q: 'What is the maximum tongue ratio for heat sink fins?',
        a: 'Tongue ratios are evaluated during technical DFM review based on fin height, base thickness, and press tonnage.'
      }
    ]
  },
  {
    id: 'cat-oem',
    slug: 'oem-components',
    name: 'OEM Components',
    shortDescription: 'Turnkey CNC machined, cut, tapped, surface-finished, and assembled aluminium extrusion components.',
    overview:
      'Turnkey finished component manufacturing: Extrusion ➔ Precision Mitre Cutting ➔ 3/4-Axis CNC Machining ➔ Surface Finishing ➔ CMM Quality Inspection ➔ Export Assembly & Palletizing directly from Vietnam.',
    heroImage: '/images/products/oem-components/category-hero/hero.webp',
    applications: ['Machined Brackets', 'Electronic Chassis', 'Structural End-Plates', 'Precision Sub-Assemblies'],
    keyAdvantages: [
      'One-stop manufacturing eliminates multi-tier supplier markups and transit risks',
      'Long-bed CNC machining up to 6 meters for continuous profile milling',
      'Full CMM coordinate measuring and dimensional inspection reports',
      'Direct container stuffing and FOB/CIF international ocean export'
    ],
    faqs: [
      {
        q: 'Can LELOI METAL provide sub-assembly and kitting?',
        a: 'Yes, we provide hardware insertion, fastener kitting, and custom export packaging ready for your production line.'
      }
    ]
  }
];

export const PRODUCTS_V2: ProductCatalogItem[] = [
  // 1. Custom Extrusions (4 products)
  {
    id: 'prod-01',
    slug: 'custom-hollow-extrusions',
    name: 'Custom Hollow Aluminium Profiles',
    category: 'custom-extrusions',
    categoryName: 'Custom Extrusions',
    shortDescription: 'Tubular, square, and multi-chamber hollow profiles engineered from proprietary extrusion dies.',
    longDescription:
      'Precision custom hollow aluminium extrusions produced to customer proprietary drawings in Vietnam. Porthole and bridge die configurations engineered to ensure seamless weld lines, uniform wall thickness, and optimum mechanical integrity.',
    profileGeometry: 'Hollow',
    alloys: ['6063', '6061', '6005A'],
    tempers: ['T5', 'T6'],
    surfaceFinishes: ['Mill Finish', 'Anodized Clear 15–25µm', 'Powder Coated RAL'],
    applications: ['Transport Frames', 'Automotive Rails', 'Enclosures', 'HVAC Channels'],
    fabrications: ['Precision Cut', 'CNC Milling', 'Drill & Tap'],
    verifiedChips: ['Custom Die Tooling', 'Hollow Chamber', '6063/6061 Alloy'],
    primaryImage: '/images/products/custom-extrusions/custom-hollow-extrusions/hero.webp',
    galleryImages: [
      '/images/products/custom-extrusions/custom-hollow-extrusions/hero.webp',
      '/images/products/custom-extrusions/custom-hollow-extrusions/cross-section.webp',
      '/images/products/custom-extrusions/custom-hollow-extrusions/application.webp'
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Profile Type', value: 'Hollow / Multi-Chamber', verified: true },
      { label: 'Drawing Required', value: 'Yes (2D PDF / 3D STEP)', verified: true },
      { label: 'Standard Alloy', value: '6063 / 6061 (Custom upon review)', verified: true },
      { label: 'Wall Thickness', value: 'Engineered upon drawing review', verified: false }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: [
      'Maintain uniform wall thickness between external walls and interior webs where possible.',
      'Provide minimum 0.5 mm radius on internal corners to improve die flow and reduce stress concentrations.'
    ],
    qcStandards: ['EN 755 / ASTM B221 dimensional tolerance compliance', 'Full chemical & mechanical Mill Test Certificates'],
    packaging: 'Interleaved protective foam paper, shrink wrapped in heavy-duty wooden crates.'
  },
  {
    id: 'prod-02',
    slug: 'custom-solid-extrusions',
    name: 'Custom Solid Aluminium Profiles',
    category: 'custom-extrusions',
    categoryName: 'Custom Extrusions',
    shortDescription: 'Solid bars, angles, flat sections, and irregular solid shapes for structural applications.',
    longDescription:
      'Solid aluminium extrusion sections designed for high-stress structural applications, machine components, and wear plates. Extruded through flat-face dies for optimal extrusion speed, excellent grain structure, and high mechanical tensile strength.',
    profileGeometry: 'Solid',
    alloys: ['6061', '6082', '6063'],
    tempers: ['T6', 'T6511'],
    surfaceFinishes: ['Mill Finish', 'Anodized Hardcoat', 'Black Anodized'],
    applications: ['Structural Brackets', 'Machine Bases', 'Wear Strips', 'Mounting Plates'],
    fabrications: ['Precision Miter Cutting', 'CNC Surface Milling', 'Countersinking'],
    verifiedChips: ['Solid Extrusion', 'High Tensile 6061', 'Machinable'],
    primaryImage: '/images/products/custom-extrusions/custom-solid-extrusions/hero.webp',
    galleryImages: [
      '/images/products/custom-extrusions/custom-solid-extrusions/hero.webp',
      '/images/products/custom-extrusions/custom-solid-extrusions/cross-section.webp',
      '/images/products/custom-extrusions/custom-solid-extrusions/application.webp'
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Profile Type', value: 'Solid Extrusion', verified: true },
      { label: 'Drawing Required', value: 'Yes (CAD / PDF)', verified: true },
      { label: 'Alloy Recommendation', value: '6061-T6 for Structural Rigidity', verified: true },
      { label: 'Section Limit', value: 'Validated upon die envelope review', verified: false }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Solid sections allow rapid extrusion with minimal die distortion.', 'Ideal for secondary 5-axis CNC machining.'],
    qcStandards: ['ASTM B221 mechanical property validation', 'Webster and Brinell hardness testing'],
    packaging: 'Wrapped in waterproof poly weave and steel strapped onto export pallets.'
  },
  {
    id: 'prod-03',
    slug: 'semi-hollow-extrusions',
    name: 'Semi-Hollow Aluminium Extrusions',
    category: 'custom-extrusions',
    categoryName: 'Custom Extrusions',
    shortDescription: 'Profiles with open channels or high-tongue-ratio cavities for snap-fit assemblies.',
    longDescription:
      'Engineered semi-hollow profiles featuring open channel gaps with elevated tongue ratios. Specially calculated die tongue support and relief tooling are utilized to ensure uniform extrusion velocity and prevent tongue deflection.',
    profileGeometry: 'Semi-Hollow',
    alloys: ['6063', '6005A'],
    tempers: ['T5', 'T6'],
    surfaceFinishes: ['Clear Anodized', 'Custom Powder Coating'],
    applications: ['Guide Channels', 'Snap-Fit Enclosures', 'Cable Raceways', 'Curtain Sliders'],
    fabrications: ['Punch Slotting', 'Cut-to-Length', 'De-burring'],
    verifiedChips: ['Tongue Tooling', 'Snap-Fit Design', '6063-T5'],
    primaryImage: '/images/products/custom-extrusions/semi-hollow-extrusions/hero.webp',
    galleryImages: [
      '/images/products/custom-extrusions/semi-hollow-extrusions/hero.webp',
      '/images/products/custom-extrusions/semi-hollow-extrusions/cross-section.webp',
      '/images/products/custom-extrusions/semi-hollow-extrusions/application.webp'
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Geometry', value: 'Semi-Hollow Channel', verified: true },
      { label: 'Tongue Ratio', value: 'Subject to DFM analysis', verified: false },
      { label: 'Drawing Required', value: 'Yes', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Keep tongue ratio (tongue height to channel gap) within recommended limits to extend die lifespan.'],
    qcStandards: ['Optical comparator profile projection inspection'],
    packaging: 'Protective carton partitions and wooden crate packaging.'
  },
  {
    id: 'prod-04',
    slug: 'complex-multi-void',
    name: 'Complex Multi-Void Profiles',
    category: 'custom-extrusions',
    categoryName: 'Custom Extrusions',
    shortDescription: 'Intricate multi-chamber profiles integrating internal screw bosses, hinge sockets, and ribs.',
    longDescription:
      'High-complexity multi-void extrusion profiles combining structural stiffness, internal thermal chambers, wire channels, and integrated screw bosses into a single monolithic extrusion, reducing assembly part count.',
    profileGeometry: 'Complex Multi-Void',
    alloys: ['6063', '6061', '6005A'],
    tempers: ['T5', 'T6'],
    surfaceFinishes: ['Anodized Architectural', 'Powder Coated'],
    applications: ['Multi-Function Enclosures', 'Vehicle Chassis Rails', 'High-Spec Facades'],
    fabrications: ['CNC Precision Drilling', 'Slot Routing', 'Miter Jointing'],
    verifiedChips: ['Multi-Chamber', 'Integral Screw Boss', 'DFM Verified'],
    primaryImage: '/images/products/custom-extrusions/complex-multi-void/hero.webp',
    galleryImages: [
      '/images/products/custom-extrusions/complex-multi-void/hero.webp',
      '/images/products/custom-extrusions/complex-multi-void/cross-section.webp',
      '/images/products/custom-extrusions/complex-multi-void/application.webp'
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Structure', value: 'Multi-Void Monolithic', verified: true },
      { label: 'Features', value: 'Integrated Bosses & Webs', verified: true },
      { label: 'Drawing Required', value: 'Yes (Mandatory)', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['LELOI engineers simulate metal flow in multi-cavity bridge dies prior to tooling fabrication.'],
    qcStandards: ['CMM 3D coordinate measurement validation'],
    packaging: 'Individual profile poly sleeving inside export pallets.'
  },

  // 2. Industrial Profiles (5 products)
  {
    id: 'prod-05',
    slug: 't-slot-20',
    name: 'T-Slot 20 Series',
    category: 'industrial-profiles',
    categoryName: 'Industrial Profiles',
    shortDescription: 'Compact 20x20mm and 20x40mm modular T-slot profiles for lightweight enclosures and 3D printers.',
    longDescription:
      'Compact modular aluminium structural profile based on 20mm grid spacing with a 6mm slot width. Engineered for lightweight framing, 3D printer carriages, optical breadboard frames, and electronic testing fixtures.',
    profileGeometry: 'T-Slot Modular',
    alloys: ['6063-T5'],
    tempers: ['T5'],
    surfaceFinishes: ['Clear Satin Anodized (10–15µm)', 'Black Satin Anodized'],
    applications: ['3D Printers & CNC Routers', 'Display Fixtures', 'Sensor Stands', 'Lightweight Guarding'],
    fabrications: ['Cut-to-Length ±0.2mm', 'End Tapping M5', 'Access Holes'],
    verifiedChips: ['Slot 6mm', '20mm Grid', 'Clear Anodized'],
    primaryImage: '/images/products/industrial-profiles/t-slot-20/hero.webp',
    galleryImages: [
      '/images/products/industrial-profiles/t-slot-20/hero.webp',
      '/images/products/industrial-profiles/t-slot-20/cross-section.webp',
      '/images/products/industrial-profiles/t-slot-20/application.webp'
    ],
    isStandard: true,
    isCustom: false,
    requiresDrawing: false,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Grid Size', value: '20 x 20 mm / 20 x 40 mm', verified: true },
      { label: 'Slot Width', value: '6 mm (Standard)', verified: true },
      { label: 'Finish', value: 'Satin Anodized 15µm', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Standard profile available with low minimum orders; custom cut lengths available.'],
    qcStandards: ['EN 12020-2 precision extrusion tolerances'],
    packaging: 'Bundled in protective paper, 10–20 bars per pack.'
  },
  {
    id: 'prod-06',
    slug: 't-slot-30',
    name: 'T-Slot 30 Series',
    category: 'industrial-profiles',
    categoryName: 'Industrial Profiles',
    shortDescription: 'Versatile 30x30mm and 30x60mm structural profiles with 8mm slot width for medium-duty fixtures.',
    longDescription:
      'The intermediate standard for automation framing. 30mm grid system with 8mm T-slots, providing optimal balance between structural rigidity and profile weight. Widely utilized in factory workbenches, conveyor frames, and equipment hoods.',
    profileGeometry: 'T-Slot Modular',
    alloys: ['6063-T5', '6061-T6'],
    tempers: ['T5', 'T6'],
    surfaceFinishes: ['Clear Anodized 15µm', 'Black Anodized'],
    applications: ['Assembly Workstations', 'Material Carts', 'Safety Guarding', 'Packaging Lines'],
    fabrications: ['Mitre Cutting 45°', 'End Tapping M8', 'Counterbore Milling'],
    verifiedChips: ['Slot 8mm', '30mm Grid', 'Medium Duty'],
    primaryImage: '/images/products/industrial-profiles/t-slot-30/hero.webp',
    galleryImages: [
      '/images/products/industrial-profiles/t-slot-30/hero.webp',
      '/images/products/industrial-profiles/t-slot-30/cross-section.webp',
      '/images/products/industrial-profiles/t-slot-30/application.webp'
    ],
    isStandard: true,
    isCustom: false,
    requiresDrawing: false,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Grid Size', value: '30 x 30 mm / 30 x 60 mm', verified: true },
      { label: 'Slot Width', value: '8 mm', verified: true },
      { label: 'Standard Alloy', value: '6063-T5', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Compatible with standard 8mm T-slot hardware.'],
    qcStandards: ['DIN EN 755 straightness and twist inspection'],
    packaging: 'Wooden crates with protective layer separators.'
  },
  {
    id: 'prod-07',
    slug: 't-slot-40',
    name: 'T-Slot 40 Series',
    category: 'industrial-profiles',
    categoryName: 'Industrial Profiles',
    shortDescription: 'Heavy-duty 40x40mm, 40x80mm, and 80x80mm profiles with 10mm slot width for automation machinery.',
    longDescription:
      'The industrial automation workhorse. 40mm grid system with 10mm slot width engineered for heavy-load machine bases, robotic perimeter guards, gantry tracks, and multi-axis automated assembly cells.',
    profileGeometry: 'T-Slot Modular',
    alloys: ['6063-T5', '6061-T6'],
    tempers: ['T5', 'T6'],
    surfaceFinishes: ['Clear Satin Anodized 15µm', 'Black Anodized'],
    applications: ['Automation Machinery Frames', 'Robot Bases', 'Heavy Machine Enclosures', 'Gantry Linear Rails'],
    fabrications: ['High-Precision Cut ±0.15mm', 'End Tapping M12', 'Milling'],
    verifiedChips: ['Slot 10mm', '40mm Grid', 'Heavy Load'],
    primaryImage: '/images/products/industrial-profiles/t-slot-40/hero.webp',
    galleryImages: [
      '/images/products/industrial-profiles/t-slot-40/hero.webp',
      '/images/products/industrial-profiles/t-slot-40/cross-section.webp',
      '/images/products/industrial-profiles/t-slot-40/application.webp'
    ],
    isStandard: true,
    isCustom: false,
    requiresDrawing: false,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Grid Size', value: '40 x 40 / 40 x 80 / 80 x 80 mm', verified: true },
      { label: 'Slot Width', value: '10 mm', verified: true },
      { label: 'Alloy', value: '6063-T5 / 6061-T6 for high rigidity', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Supports heavy mechanical bolting and dynamic vibration environments.'],
    qcStandards: ['Strict twist and straightness inspection under EN 12020'],
    packaging: 'Heavy-duty timber frames with steel strapping.'
  },
  {
    id: 'prod-08',
    slug: 'machine-frame-heavy',
    name: 'Heavy-Duty Machine Frame Profiles',
    category: 'industrial-profiles',
    categoryName: 'Industrial Profiles',
    shortDescription: 'Reinforced 80x160mm and 100x100mm solid-core structural profiles for vibration dampening.',
    longDescription:
      'High-mass structural aluminium profiles designed to replace fabricated steel weldments. Featuring heavy exterior walls and internal stiffening diaphragms to dampen machine vibration and support dynamic gantry loads.',
    profileGeometry: 'T-Slot Modular',
    alloys: ['6061-T6', '6082-T6'],
    tempers: ['T6'],
    surfaceFinishes: ['Clear Anodized', 'Mill Finish'],
    applications: ['CNC Machine Frames', 'Automotive Tooling Bases', 'Laser Cutter Chassis'],
    fabrications: ['Heavy Face Milling', 'Deep Hole Drilling', 'Threaded Inserts'],
    verifiedChips: ['Vibration Damping', 'High Mass', '6061-T6'],
    primaryImage: '/images/products/industrial-profiles/machine-frame-heavy/hero.webp',
    galleryImages: [
      '/images/products/industrial-profiles/machine-frame-heavy/hero.webp',
      '/images/products/industrial-profiles/machine-frame-heavy/cross-section.webp',
      '/images/products/industrial-profiles/machine-frame-heavy/application.webp'
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Profile Type', value: 'Heavy Structural Box Frame', verified: true },
      { label: 'Yield Strength', value: '240+ MPa (6061-T6)', verified: true },
      { label: 'Drawing Required', value: 'Yes', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Pre-aged to T6 temper for high torsional stiffness and zero weld distortion.'],
    qcStandards: ['Ultrasonic flaw detection and full MTR 3.1 certification'],
    packaging: 'Solid wooden crates lined with moisture desiccant.'
  },
  {
    id: 'prod-09',
    slug: 'conveyor-profiles',
    name: 'Conveyor Aluminium Profiles',
    category: 'industrial-profiles',
    categoryName: 'Industrial Profiles',
    shortDescription: 'Specialized profile sections with built-in roller tracks, guide channels, and belt wear strips.',
    longDescription:
      'Custom aluminium conveyor side frames with integrated roller snap-channels, sensor slots, and belt guide grooves. Engineered for high-speed material handling and automated logistics fulfillment lines.',
    profileGeometry: 'T-Slot Modular',
    alloys: ['6063-T5', '6005A-T6'],
    tempers: ['T5', 'T6'],
    surfaceFinishes: ['Clear Anodized 15µm'],
    applications: ['Roller Conveyors', 'Belt Conveyors', 'Pallet Transfer Systems'],
    fabrications: ['Continuous Punching', 'Mitre Joints', 'Wear Strip Fitting'],
    verifiedChips: ['Roller Channel', 'Automation Ready', 'Low Friction'],
    primaryImage: '/images/products/industrial-profiles/conveyor-profiles/hero.webp',
    galleryImages: [
      '/images/products/industrial-profiles/conveyor-profiles/hero.webp',
      '/images/products/industrial-profiles/conveyor-profiles/cross-section.webp',
      '/images/products/industrial-profiles/conveyor-profiles/application.webp'
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Feature', value: 'Integrated Roller Guides', verified: true },
      { label: 'Length', value: 'Up to 6 meters standard', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Smooth internal finish ensures low rolling resistance for conveyor chains and rollers.'],
    qcStandards: ['Straightness tolerance < 0.5mm per meter'],
    packaging: 'Protective carton partitions inside shipping containers.'
  },

  // 3. Solar Profiles (4 products)
  {
    id: 'prod-10',
    slug: 'solar-module-frame',
    name: 'Solar Module Frame Profiles',
    category: 'solar-profiles',
    categoryName: 'Solar Profiles',
    shortDescription: 'Precision perimeter aluminium frames for crystalline and bifacial photovoltaic modules.',
    longDescription:
      'Lightweight, high-strength aluminium perimeter frame sections engineered for silicon PV modules. Features integrated silicone sealant grooves, grounding slots, and corner key cavities with tight angle tolerances.',
    profileGeometry: 'Hollow',
    alloys: ['6063-T6', '6005A-T6'],
    tempers: ['T6'],
    surfaceFinishes: ['Clear Anodized 15µm', 'Black Satin Anodized (All-Black)'],
    applications: ['Photovoltaic Solar Panels', 'Bifacial Solar Modules', 'BIPV Architectural Glass'],
    fabrications: ['45° Precision Corner Mitre', 'Grounding Hole Punching', 'Corner Key Assembly'],
    verifiedChips: ['IEC 61215 Ready', 'Corner Key Slot', 'Black/Clear Anodize'],
    primaryImage: '/images/products/solar-profiles/solar-module-frame/hero.webp',
    galleryImages: [
      '/images/products/solar-profiles/solar-module-frame/hero.webp',
      '/images/products/solar-profiles/solar-module-frame/cross-section.webp',
      '/images/products/solar-profiles/solar-module-frame/application.webp'
    ],
    isStandard: true,
    isCustom: false,
    requiresDrawing: true,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Profile Heights', value: '30 mm / 35 mm / 40 mm standard', verified: true },
      { label: 'Anodizing Standard', value: 'Class I / Class II Outdoor UV Rated', verified: true },
      { label: 'Drawing Required', value: 'Yes (For Corner Key Geometry)', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Manufactured in multi-cavity dies for high volume output and tight price control.'],
    qcStandards: ['Salt spray test > 1000 hours', 'Cross-cut adhesion test'],
    packaging: 'Automatic palletizing with corner edge caps for automated panel production lines.'
  },
  {
    id: 'prod-11',
    slug: 'solar-mounting-rail',
    name: 'Solar Mounting Rails',
    category: 'solar-profiles',
    categoryName: 'Solar Profiles',
    shortDescription: 'High-strength mounting rails with continuous top and side fastener channels for solar racking.',
    longDescription:
      'Structural mounting rails engineered for commercial rooftop and ground-mount PV installations. Designed with continuous top nut grooves and side cable routing channels, maximizing span distances between roof attachments.',
    profileGeometry: 'Semi-Hollow',
    alloys: ['6005A-T6', '6082-T6', '6063-T6'],
    tempers: ['T6'],
    surfaceFinishes: ['Clear Anodized 15–20µm', 'Mill Finish'],
    applications: ['Commercial Rooftop Solar', 'Ground-Mount Arrays', 'Floating Solar PV'],
    fabrications: ['Slot Punching', 'Connector Hole Drilling', 'Custom Length Sizing'],
    verifiedChips: ['6005A-T6 High Yield', 'Top Nut Channel', '0% FTA Duty'],
    primaryImage: '/images/products/solar-profiles/solar-mounting-rail/hero.webp',
    galleryImages: [
      '/images/products/solar-profiles/solar-mounting-rail/hero.webp',
      '/images/products/solar-profiles/solar-mounting-rail/cross-section.webp',
      '/images/products/solar-profiles/solar-mounting-rail/application.webp'
    ],
    isStandard: true,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Alloy', value: '6005A-T6 (High Tensile Yield)', verified: true },
      { label: 'Standard Length', value: '3.15m / 4.2m / 6.2m (Container Optimized)', verified: true },
      { label: 'Corrosion Protection', value: 'Anodized 15–20µm', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Alloy 6005A-T6 offers 225+ MPa yield strength, significantly outperforming standard 6063.'],
    qcStandards: ['Mechanical tensile test certificates with heat number lot tracking'],
    packaging: 'Container-optimized bundle packaging with moisture barrier and corner edge protectors.'
  },
  {
    id: 'prod-12',
    slug: 'solar-clamp-profile',
    name: 'Solar Clamp Profiles',
    category: 'solar-profiles',
    categoryName: 'Solar Profiles',
    shortDescription: 'Solid extruded aluminium bars designed for mid and end panel clamps, pre-cut or full length.',
    longDescription:
      'Precision extruded clamp profiles engineered to secure solar modules onto mounting rails. Formed with integrated serrated teeth for electrical grounding continuity and anti-slip mechanical clamping.',
    profileGeometry: 'Solid',
    alloys: ['6063-T6', '6005A-T6'],
    tempers: ['T6'],
    surfaceFinishes: ['Clear Anodized', 'Black Anodized'],
    applications: ['Mid Clamps', 'End Clamps', 'Grounding Clips'],
    fabrications: ['Precision Cut (30–60mm)', 'Center Hole Punching', 'Tapping'],
    verifiedChips: ['Grounding Teeth', 'Pre-Cut Available', 'UV Anodized'],
    primaryImage: '/images/products/solar-profiles/solar-clamp-profile/hero.webp',
    galleryImages: [
      '/images/products/solar-profiles/solar-clamp-profile/hero.webp',
      '/images/products/solar-profiles/solar-clamp-profile/cross-section.webp',
      '/images/products/solar-profiles/solar-clamp-profile/application.webp'
    ],
    isStandard: true,
    isCustom: false,
    requiresDrawing: true,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Application', value: 'Mid & End Panel Clamps', verified: true },
      { label: 'Supply Form', value: 'Continuous Bars or Cut Components', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Supplied as full 6m lengths or pre-cut stamped components ready for bolt insertion.'],
    qcStandards: ['Hardness test > 12 HW'],
    packaging: 'Heavy-duty cardboard boxes on wooden export pallets.'
  },
  {
    id: 'prod-13',
    slug: 'solar-carport',
    name: 'Solar Carport Extrusions',
    category: 'solar-profiles',
    categoryName: 'Solar Profiles',
    shortDescription: 'Heavy structural beams, purlins, and integrated water gutter profiles for solar parking structures.',
    longDescription:
      'Large-envelope structural aluminium beams and water-shedding gutter profiles engineered for commercial solar carports and EV canopy structures. Replaces rust-prone galvanized steel with maintenance-free aluminium.',
    profileGeometry: 'Complex Multi-Void',
    alloys: ['6005A-T6', '6082-T6'],
    tempers: ['T6'],
    surfaceFinishes: ['Architectural Anodized', 'Powder Coated'],
    applications: ['Commercial Solar Carports', 'EV Charging Canopies', 'Industrial Covered Walkways'],
    fabrications: ['CNC Hole Drilling', 'Gutter Joint Welds', 'Miter Jointing'],
    verifiedChips: ['Heavy Span Beam', 'Water Gutter', '6082/6005A'],
    primaryImage: '/images/products/solar-profiles/solar-carport/hero.webp',
    galleryImages: [
      '/images/products/solar-profiles/solar-carport/hero.webp',
      '/images/products/solar-profiles/solar-carport/cross-section.webp',
      '/images/products/solar-profiles/solar-carport/application.webp'
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Span Capacity', value: 'Engineered per regional wind/snow code', verified: true },
      { label: 'Drawing Required', value: 'Yes (Structural Submittal)', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Integrated water channels eliminate secondary sheet metal flashing.'],
    qcStandards: ['Structural deflection testing per ASCE / Eurocode standards'],
    packaging: 'Heavy-duty bundle wrap on timber cradles.'
  },

  // 4. Architectural Systems (4 products)
  {
    id: 'prod-14',
    slug: 'window-door',
    name: 'Window & Door Profiles',
    category: 'architectural-systems',
    categoryName: 'Architectural Systems',
    shortDescription: 'Casement, sliding, and folding window and door profile systems conforming to international wind load standards.',
    longDescription:
      'Extruded aluminium architectural systems for residential and commercial fenestration. Engineered with tight tolerance gasket channels, drainage weep slots, and multi-point locking hardware chambers.',
    profileGeometry: 'Hollow',
    alloys: ['6063-T5', '6063-T6'],
    tempers: ['T5', 'T6'],
    surfaceFinishes: ['Powder Coated (Qualicoat Class 1 & 2)', 'Architectural Anodized'],
    applications: ['Casement Windows', 'Heavy Sliding Patio Doors', 'Commercial Storefronts'],
    fabrications: ['Precision Mitre Cutting', 'Drainage Slot Punching', 'Corner Cleat Assembly'],
    verifiedChips: ['Qualicoat Coating', 'Gasket Channel', '6063-T5'],
    primaryImage: '/images/products/architectural-systems/window-door/hero.webp',
    galleryImages: [
      '/images/products/architectural-systems/window-door/hero.webp',
      '/images/products/architectural-systems/window-door/cross-section.webp',
      '/images/products/architectural-systems/window-door/application.webp'
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Alloy', value: '6063-T5 (Architectural Standard)', verified: true },
      { label: 'Surface Finish', value: 'Powder Coat / Anodize', verified: true },
      { label: 'Drawing Required', value: 'Yes', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Custom architectural dies engineered with uniform wall thickness to prevent coating visual sinks.'],
    qcStandards: ['Qualicoat powder coating gloss and adhesion testing'],
    packaging: 'Paper interleaved bundles with protective tape.'
  },
  {
    id: 'prod-15',
    slug: 'curtain-wall',
    name: 'Curtain Wall / Facade Profiles',
    category: 'architectural-systems',
    categoryName: 'Architectural Systems',
    shortDescription: 'Structural mullions, transoms, and pressure plates for unitized and stick curtain wall facades.',
    longDescription:
      'Heavy structural curtain wall mullion and transom extrusions engineered for high-rise commercial architecture. Designed to resist extreme dynamic wind pressures and seismic drift while accommodating structural glazing silicone gaskets.',
    profileGeometry: 'Complex Multi-Void',
    alloys: ['6063-T6', '6061-T6'],
    tempers: ['T6'],
    surfaceFinishes: ['PVDF Fluoropolymer Coating', 'Anodized Class I (20µm)'],
    applications: ['High-Rise Curtain Walls', 'Unitized Facades', 'Glass Atriums'],
    fabrications: ['CNC Spigot Slotting', 'Pressure Plate Punching', 'Thermal Isolator Insertion'],
    verifiedChips: ['Heavy Mullion', 'AAMA 2605 Coating', 'High Wind Load'],
    primaryImage: '/images/products/architectural-systems/curtain-wall/hero.webp',
    galleryImages: [
      '/images/products/architectural-systems/curtain-wall/hero.webp',
      '/images/products/architectural-systems/curtain-wall/cross-section.webp',
      '/images/products/architectural-systems/curtain-wall/application.webp'
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Application', value: 'Unitized & Stick Curtain Wall Systems', verified: true },
      { label: 'Finish Warranty', value: 'AAMA 2604/2605 compliant', verified: true },
      { label: 'Drawing Required', value: 'Yes', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Large cross-section dies require dedicated high-tonnage press scheduling.'],
    qcStandards: ['Full dimensional inspection against architectural submittals'],
    packaging: 'Wooden shipping crates built to sea container dimensions.'
  },
  {
    id: 'prod-16',
    slug: 'louvers',
    name: 'Aluminium Louver Profiles',
    category: 'architectural-systems',
    categoryName: 'Architectural Systems',
    shortDescription: 'Aerofoil, Z-blade, and acoustic louver profiles for solar shading and mechanical ventilation.',
    longDescription:
      'Architectural sun-shading aerofoil blades and rain-defense ventilation louver extrusions. Engineered to optimize airflow efficiency while blocking solar heat gain and rain penetration in commercial buildings.',
    profileGeometry: 'Semi-Hollow',
    alloys: ['6063-T5'],
    tempers: ['T5'],
    surfaceFinishes: ['Powder Coated RAL', 'Matte Anodized'],
    applications: ['HVAC Equipment Screens', 'Facade Solar Shading', 'Parking Garage Ventilation'],
    fabrications: ['Pivot Hole Drilling', 'Mitre Ends', 'End-Cap Assembly'],
    verifiedChips: ['Aerofoil Shape', 'Solar Shading', 'Rain Defense'],
    primaryImage: '/images/products/architectural-systems/louvers/hero.webp',
    galleryImages: [
      '/images/products/architectural-systems/louvers/hero.webp',
      '/images/products/architectural-systems/louvers/cross-section.webp',
      '/images/products/architectural-systems/louvers/application.webp'
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Blade Geometry', value: 'Aerofoil / Z-Blade / Continuous', verified: true },
      { label: 'Drawing Required', value: 'Yes', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Thin aerofoil trailing edges engineered with balanced die land to prevent waviness.'],
    qcStandards: ['Surface inspection under daylight lamp standards'],
    packaging: 'Carton box packaging with protective film.'
  },
  {
    id: 'prod-17',
    slug: 'thermal-break',
    name: 'Thermal-Break Profiles',
    category: 'architectural-systems',
    categoryName: 'Architectural Systems',
    shortDescription: 'Dual-chamber extrusions designed for polyamide thermal barrier strip knurling and crimping.',
    longDescription:
      'Energy-saving architectural aluminium profiles engineered with dedicated knurled grooves for polyamide (PA66 GF25) thermal insulation bars. Prevents thermal bridging and meets strict energy efficiency building codes.',
    profileGeometry: 'Complex Multi-Void',
    alloys: ['6063-T5', '6063-T6'],
    tempers: ['T5', 'T6'],
    surfaceFinishes: ['Dual-Color Powder Coated', 'Anodized'],
    applications: ['Passive House Windows', 'Commercial Insulated Facades', 'Refrigeration Doors'],
    fabrications: ['Strip Knurling', 'Bar Crimping', 'Shear Testing'],
    verifiedChips: ['PA66 Insulated', 'Energy Saving', 'Dual Color'],
    primaryImage: '/images/products/architectural-systems/thermal-break/hero.webp',
    galleryImages: [
      '/images/products/architectural-systems/thermal-break/hero.webp',
      '/images/products/architectural-systems/thermal-break/cross-section.webp',
      '/images/products/architectural-systems/thermal-break/application.webp'
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Insulation System', value: 'Polyamide Thermal Barrier Cavity', verified: true },
      { label: 'Drawing Required', value: 'Yes', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Precision knurled tooth geometry ensures maximum shear strength after crimping.'],
    qcStandards: ['EN 14024 transverse tensile and longitudinal shear tests'],
    packaging: 'Protective plastic film on finished exposed surfaces.'
  },

  // 5. Heat Sink / Thermal (3 products)
  {
    id: 'prod-18',
    slug: 'led-heatsink',
    name: 'LED Heat Sink Profiles',
    category: 'heat-sink-thermal',
    categoryName: 'Heat Sink / Thermal',
    shortDescription: 'Radial and linear heat sinks optimized for high-power LED grow lights and industrial luminaires.',
    longDescription:
      'High thermal efficiency aluminium extrusion profiles engineered for LED lighting thermal management. Dense fin spacing and curved aerofoil fin geometry maximize natural convection and radiative cooling.',
    profileGeometry: 'Fin Array',
    alloys: ['6063 High Thermal', '6060'],
    tempers: ['T5'],
    surfaceFinishes: ['Black Anodized (Maximizes thermal radiation)', 'Clear Anodized'],
    applications: ['High-Bay Industrial Lighting', 'Horticultural LED Grow Lights', 'Street Lighting'],
    fabrications: ['Precision Cut', 'Thermal Interface Milling', 'Tapped Mounting Holes'],
    verifiedChips: ['High Fin Ratio', 'Black Anodized Radiation', '6063 Thermal'],
    primaryImage: '/images/products/heat-sink-thermal/led-heatsink/hero.webp',
    galleryImages: [
      '/images/products/heat-sink-thermal/led-heatsink/hero.webp',
      '/images/products/heat-sink-thermal/led-heatsink/cross-section.webp',
      '/images/products/heat-sink-thermal/led-heatsink/application.webp'
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Alloy', value: '6063 (High Thermal Conductivity ~209 W/m·K)', verified: true },
      { label: 'Finish', value: 'Black Anodize for Enhanced Emissivity', verified: true },
      { label: 'Drawing Required', value: 'Yes', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Black anodizing increases surface thermal emissivity from ~0.05 to over 0.85.'],
    qcStandards: ['Base plate flatness inspection (< 0.1 mm)'],
    packaging: 'Cardboard dividers preventing fin distortion during transit.'
  },
  {
    id: 'prod-19',
    slug: 'inverter-heatsink',
    name: 'Inverter Heat Sink Profiles',
    category: 'heat-sink-thermal',
    categoryName: 'Heat Sink / Thermal',
    shortDescription: 'Heavy wide-base heat sink extrusions for solar string inverters and motor drive electronics.',
    longDescription:
      'Large-cross-section heat sink extrusions with thick base plates and deep cooling fins designed for solar string inverters, variable frequency drives (VFD), and industrial motor speed controllers.',
    profileGeometry: 'Fin Array',
    alloys: ['6063-T5', '6060'],
    tempers: ['T5'],
    surfaceFinishes: ['Clear Anodized', 'Mill Finish with CNC Milled Base'],
    applications: ['Solar PV Inverters', 'Wind Power Converters', 'Variable Frequency Drives (VFD)'],
    fabrications: ['IGBT Pocket CNC Milling', 'Threaded Blind Holes', 'Gasket Groove Routing'],
    verifiedChips: ['Thick Base Plate', 'Solar Inverter', 'CNC Machined Base'],
    primaryImage: '/images/products/heat-sink-thermal/inverter-heatsink/hero.webp',
    galleryImages: [
      '/images/products/heat-sink-thermal/inverter-heatsink/hero.webp',
      '/images/products/heat-sink-thermal/inverter-heatsink/cross-section.webp',
      '/images/products/heat-sink-thermal/inverter-heatsink/application.webp'
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Base Thickness', value: 'Engineered for thermal heat spreading', verified: true },
      { label: 'Base Flatness', value: 'High precision fly-cut available', verified: true },
      { label: 'Drawing Required', value: 'Yes', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Base fly-cutting eliminates air gaps beneath power semiconductor modules (IGBTs).'],
    qcStandards: ['Flatness and surface roughness (Ra < 1.6µm) testing'],
    packaging: 'Solid wooden crates with desiccant and foam protection.'
  },
  {
    id: 'prod-20',
    slug: 'power-electronics',
    name: 'Power Electronics Heat Sink Profiles',
    category: 'heat-sink-thermal',
    categoryName: 'Heat Sink / Thermal',
    shortDescription: 'High-density fin profiles with integrated fluid cooling channels or heat pipe cavities.',
    longDescription:
      'High-performance thermal solutions for mission-critical power conversion, telecom base stations, and EV battery chargers. Capable of incorporating hollow coolant channels or embedded heat-pipe recesses.',
    profileGeometry: 'Fin Array',
    alloys: ['6063-T5'],
    tempers: ['T5'],
    surfaceFinishes: ['Chromate / Trivalent Conversion', 'Anodized'],
    applications: ['EV Fast Chargers', 'Telecom Power Modules', 'Railway Traction Electronics'],
    fabrications: ['5-Axis Precision Milling', 'Pressure Tested Coolant Ports'],
    verifiedChips: ['Liquid Coolant Ready', 'Power Conversion', 'EV Charging'],
    primaryImage: '/images/products/heat-sink-thermal/power-electronics/hero.webp',
    galleryImages: [
      '/images/products/heat-sink-thermal/power-electronics/hero.webp',
      '/images/products/heat-sink-thermal/power-electronics/cross-section.webp',
      '/images/products/heat-sink-thermal/power-electronics/application.webp'
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Application', value: 'High Heat Flux Power Electronics', verified: true },
      { label: 'Drawing Required', value: 'Yes', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Multi-channel hollow cooling profiles require nitrogen cooling during extrusion.'],
    qcStandards: ['Helium leak testing for liquid-cooled chambers'],
    packaging: 'Custom foam cradles inside heavy-duty cartons.'
  },

  // 6. OEM Components (4 products)
  {
    id: 'prod-21',
    slug: 'cnc-components',
    name: 'CNC Machined Extrusion Components',
    category: 'oem-components',
    categoryName: 'OEM Components',
    shortDescription: 'Precision 3, 4, and 5-axis milled parts derived from extruded aluminium bar stock and profiles.',
    longDescription:
      'Finished engineering components produced by combining profile extrusion with secondary precision CNC machining. Eliminates waste and reduces machining cycle times compared to carving parts out of solid billet blocks.',
    profileGeometry: 'CNC Component',
    alloys: ['6061-T6', '6082-T6', '7075-T6'],
    tempers: ['T6'],
    surfaceFinishes: ['Hard Anodized (Type III)', 'Clear Anodized', 'Chromate Conversion'],
    applications: ['Aerospace Brackets', 'Robotic Arm End-Effectors', 'Automotive Chassis Mounts'],
    fabrications: ['5-Axis CNC Milling', 'Boring', 'Thread Milling', 'Engraving'],
    verifiedChips: ['5-Axis CNC', '6061-T6 / 7075', 'CMM Inspection'],
    primaryImage: '/images/products/oem-components/cnc-components/hero.webp',
    galleryImages: [
      '/images/products/oem-components/cnc-components/hero.webp',
      '/images/products/oem-components/cnc-components/cross-section.webp',
      '/images/products/oem-components/cnc-components/application.webp'
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Process', value: 'Extrusion + Multi-Axis CNC Milling', verified: true },
      { label: 'Machining Tolerance', value: 'Validated per engineering drawing', verified: false },
      { label: 'Drawing Required', value: 'Yes (3D STEP & 2D PDF)', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Near-net shape extrusion minimizes material removal and machine run time.'],
    qcStandards: ['CMM coordinate measuring report and full dimensional inspection certificate'],
    packaging: 'Individual anti-static bubble wrap in compartmentalized export cartons.'
  },
  {
    id: 'prod-22',
    slug: 'cut-drill-tap',
    name: 'Cut / Drill / Tap Components',
    category: 'oem-components',
    categoryName: 'OEM Components',
    shortDescription: 'High-volume production parts with precision cut-to-length, automated drilling, and threaded holes.',
    longDescription:
      'High-speed automated secondary processing of extruded aluminium profiles: Precision mitre cutting (±0.2mm), multi-spindle drilling, punch slotting, and automatic thread tapping ready for final assembly.',
    profileGeometry: 'CNC Component',
    alloys: ['6063-T5', '6061-T6'],
    tempers: ['T5', 'T6'],
    surfaceFinishes: ['Clear Anodized', 'Black Anodized', 'Mill Finish'],
    applications: ['Solar Frame Members', 'Furniture Rails', 'Appliance Handles', 'Ladder Rungs'],
    fabrications: ['Precision Cut-to-Length', 'Multi-Spindle Drilling', 'Roll Tapping'],
    verifiedChips: ['High Volume', 'Threaded M4–M16', 'Ready-to-Assemble'],
    primaryImage: '/images/products/oem-components/cut-drill-tap/hero.webp',
    galleryImages: [
      '/images/products/oem-components/cut-drill-tap/hero.webp',
      '/images/products/oem-components/cut-drill-tap/cross-section.webp',
      '/images/products/oem-components/cut-drill-tap/application.webp'
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Operation', value: 'High Speed Cut, Punch & Tap', verified: true },
      { label: 'Drawing Required', value: 'Yes', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Roll tapping produces stronger threads in aluminium than cut tapping.'],
    qcStandards: ['Go / No-Go thread plug gauge verification'],
    packaging: 'Bulk carton packaging on heat-treated pallets.'
  },
  {
    id: 'prod-23',
    slug: 'surface-finished-oem',
    name: 'Surface-Finished OEM Parts',
    category: 'oem-components',
    categoryName: 'OEM Components',
    shortDescription: 'Cosmetically critical components with micro-sandblasting, decorative anodizing, or custom powder coating.',
    longDescription:
      'Finished consumer and architectural components featuring Class I architectural anodizing, micro-bead blasting for uniform matte satin texture, and custom RAL color powder coating with verified weather resistance.',
    profileGeometry: 'CNC Component',
    alloys: ['6063-T5', '6061-T6'],
    tempers: ['T5', 'T6'],
    surfaceFinishes: ['Glass Bead Sandblasting', 'Type II Decorative Anodize', 'Qualicoat Powder Coating'],
    applications: ['Audio Faceplates', 'Consumer Electronics Housings', 'Luxury Trim', 'Medical Equipment'],
    fabrications: ['Bead Blasting', 'Chemical Etching', 'Laser Engraving'],
    verifiedChips: ['Cosmetic Class A', 'Micro-Sandblasted', 'Laser Marked'],
    primaryImage: '/images/products/oem-components/surface-finished-oem/hero.webp',
    galleryImages: [
      '/images/products/oem-components/surface-finished-oem/hero.webp',
      '/images/products/oem-components/surface-finished-oem/cross-section.webp',
      '/images/products/oem-components/surface-finished-oem/application.webp'
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Surface Grade', value: 'Cosmetic Class A / Architectural', verified: true },
      { label: 'Coating Standard', value: 'Qualicoat / Qualanod specification', verified: true },
      { label: 'Drawing Required', value: 'Yes', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Pre-treatment with automated glass bead blasting eliminates extrusion die lines.'],
    qcStandards: ['Spectrophotometer color delta-E testing and thickness gauge verification'],
    packaging: 'Individual foam sleeves inside heavy double-wall export boxes.'
  },
  {
    id: 'prod-24',
    slug: 'assembled-subcomponents',
    name: 'Assembled Aluminium Sub-components',
    category: 'oem-components',
    categoryName: 'OEM Components',
    shortDescription: 'Integrated sub-assemblies complete with pressed fasteners, rubber gaskets, and mounting hardware.',
    longDescription:
      'Turnkey finished modules incorporating extruded profiles, CNC machined brackets, PEM press-fit studs, silicone sealing gaskets, and stainless steel hardware. Delivered directly to overseas factories ready for final product integration.',
    profileGeometry: 'CNC Component',
    alloys: ['6061-T6', '6063-T5'],
    tempers: ['T5', 'T6'],
    surfaceFinishes: ['Anodized Assembly', 'Powder Coated'],
    applications: ['Solar Inverter Sub-Frames', 'Telecom Cabinet Assemblies', 'Industrial Robot End-Arms'],
    fabrications: ['PEM Stud Pressing', 'Hardware Assembly', 'Gasket Insertion', 'Kitting'],
    verifiedChips: ['Turnkey Sub-Assembly', 'Fastener Insertion', 'Direct Line Feed'],
    primaryImage: '/images/products/oem-components/assembled-subcomponents/hero.webp',
    galleryImages: [
      '/images/products/oem-components/assembled-subcomponents/hero.webp',
      '/images/products/oem-components/assembled-subcomponents/cross-section.webp',
      '/images/products/oem-components/assembled-subcomponents/application.webp'
    ],
    isStandard: false,
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'VERIFIED',
    specs: [
      { label: 'Delivery Form', value: 'Complete Finished Sub-Assembly', verified: true },
      { label: 'Fasteners', value: 'Pre-assembled PEM studs / inserts', verified: true },
      { label: 'Drawing Required', value: 'Yes (Assembly CAD Model)', verified: true }
    ],
    mediaProvenance: { type: 'CUSTOM_RENDER', license: 'LELOI METAL Internal Studio CAD', author: 'LELOI Applications Engineering' },
    dfmNotes: ['Reduces customer labor and logistics overhead by sourcing integrated sub-assemblies directly from Vietnam.'],
    qcStandards: ['Full assembly fit and pull-out torque verification'],
    packaging: 'Custom returnable dunnage or reinforced timber packaging.'
  }
];
