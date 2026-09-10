import {
  ProductDivision,
  ProductFamily,
  ProductSystem,
  ProductFinish,
} from '../product-canonical';

// ==============================================================================
// 1. CANONICAL PRODUCT DIVISIONS (6 CORE BUSINESS LINES)
// ==============================================================================

export const CANONICAL_DIVISIONS: ProductDivision[] = [
  {
    id: 'custom-extrusions',
    code: 'CUSTOM_EXTRUSIONS',
    name: 'Custom Aluminium Extrusions',
    slug: 'custom-extrusions',
    navLabel: 'Custom Extrusions',
    headline: 'Precision Made-to-Drawing Aluminium Extrusions for Global OEM/ODM',
    summary: 'Tailored solid, hollow, semi-hollow, and complex multi-void aluminium profiles engineered to client CAD/BIM specifications.',
    description: 'Direct factory custom aluminium extrusion manufacturing in Vietnam. Comprehensive die design, finite element extrusion simulation, structural alloy formulation (6063, 6061, 6005A, 6082), and automated precision extrusion presses from 600 to 3,600 metric tons.',
    heroImage: '/media/catalog/01_square_rectangular_hollow_profiles.webp',
    icon: 'Layers',
    familyCount: 11,
    order: 1,
    highlights: [
      'In-house die tooling center with wire EDM and 5-axis CNC machining',
      'Structural 6000-series alloy formulation per ASTM B221 and EN 755',
      'Strict geometric tolerances conforming to EN 12020-2 precision standards'
    ],
    applications: ['Automotive Subframes', 'Industrial Automation', 'Transport Rails', 'Specialized Enclosures'],
    alloys: ['6063', '6061', '6005A', '6082', '6060'],
    seo: {
      title: 'Custom Aluminium Extrusions | Made-to-Drawing Vietnam | LELOI METAL',
      description: 'Direct factory custom aluminium extrusions in Vietnam. Solid, hollow, semi-hollow, and multi-void profiles made to proprietary client CAD drawings.',
      keywords: ['custom aluminium extrusions', 'OEM aluminium extrusion Vietnam', 'aluminium extrusion dies', 'custom hollow profiles', 'aluminium extrusion manufacturer']
    }
  },
  {
    id: 'architectural',
    code: 'ARCHITECTURAL_ALUMINIUM',
    name: 'Architectural Aluminium',
    slug: 'architectural',
    navLabel: 'Architectural Aluminium',
    headline: 'High-Performance Architectural Systems for Residential & Commercial Construction',
    summary: 'Engineered window, door, curtain wall, facade cladding, sunshade louvers, and structural glazing solutions.',
    description: 'Comprehensive architectural aluminium systems engineered for monumental facades, luxury high-rises, commercial buildings, and upscale residential developments. Certified for thermal insulation, acoustic reduction, hurricane wind-load resistance, and water tightness.',
    heroImage: '/media/catalog/18_window_door_profiles.webp',
    icon: 'Building2',
    familyCount: 11,
    order: 2,
    highlights: [
      'Polyamide PA66 GF25 thermal break technology with Uw down to 1.1 W/m²K',
      'AkzoNobel Interpon D architectural powder coating (AAMA 2604 / 2605, up to 30-year warranty)',
      'Tested to ASTM E283 (air), ASTM E331 (water), and ASTM E330 (structural wind load)'
    ],
    applications: ['High-Rise Curtain Walls', 'Luxury Residential Windows', 'Bespoke Facade Cladding', 'Commercial Entrances'],
    alloys: ['6063-T5', '6063-T6', '6060-T6'],
    seo: {
      title: 'Architectural Aluminium Systems | Facades, Windows & Doors | LELOI METAL',
      description: 'High-performance architectural aluminium profiles from Vietnam. Curtain walls, thermal break windows, louvers, and cladding with AkzoNobel powder coating.',
      keywords: ['architectural aluminium', 'curtain wall systems', 'thermal break window profiles', 'aluminium facade cladding', 'AkzoNobel powder coated aluminium']
    }
  },
  {
    id: 'industrial-profiles',
    code: 'INDUSTRIAL_PROFILES',
    name: 'Industrial Profiles',
    slug: 'industrial-profiles',
    navLabel: 'Industrial Profiles',
    headline: 'Metric T-Slot Modular Framing & Heavy Structural Profiles',
    summary: 'Standard metric modular T-slot framing, robotics enclosures, machine guarding, and conveyor track systems.',
    description: 'Modular aluminium extrusion systems engineered for industrial automation, robotics cells, machine bases, conveyor lines, and cleanroom facilities. Fully compatible with European and global metric hardware, brackets, fasteners, and accessories.',
    heroImage: '/media/catalog/09_t_slot_modular_profiles.webp',
    icon: 'Boxes',
    familyCount: 10,
    order: 3,
    highlights: [
      'Standard metric grid series: 20, 30, 40, 45, 60, and 80 series with 6mm, 8mm, and 10mm slots',
      'Clear satin anodized finish (10–15µm) for maximum surface durability and scratch resistance',
      'High moment of inertia (Ix, Iy) engineered for heavy dynamic structural loads'
    ],
    applications: ['Robotics Cells', 'Assembly Conveyors', 'Machine Bases', 'Factory Safety Guarding'],
    alloys: ['6063-T6', '6061-T6', '6005A-T6'],
    seo: {
      title: 'Industrial Aluminium Profiles | T-Slot Modular Framing | LELOI METAL',
      description: 'Metric 20, 30, 40, 45, 60, and 80 series T-slot modular framing profiles from Vietnam. Complete automation, conveyor, and robot guarding systems.',
      keywords: ['industrial aluminium profiles', 'T-slot framing', '4040 aluminium extrusion', 'conveyor aluminium profiles', 'automation structural framing']
    }
  },
  {
    id: 'solar',
    code: 'SOLAR_ALUMINIUM',
    name: 'Solar Aluminium',
    slug: 'solar',
    navLabel: 'Solar Aluminium',
    headline: 'Heavy-Duty Solar Module Frames & Structural Mounting Rail Systems',
    summary: 'Engineered solar mounting rails, rooftop clamps, ground-mount structures, carports, and BIPV structural profiles.',
    description: 'Engineered aluminium mounting structures and module framing profiles designed for utility-scale solar farms, commercial rooftop installations, solar carports, and building-integrated photovoltaics (BIPV). Built with anti-corrosion marine-grade anodizing.',
    heroImage: '/media/catalog/12_solar_mounting_rails.webp',
    icon: 'Sun',
    familyCount: 10,
    order: 4,
    highlights: [
      'Marine-grade deep anodizing (15–25µm) tested for 3,000+ hours neutral salt spray',
      'High-strength structural alloys 6005A-T6 and 6061-T6 for extreme wind and snow load resistance',
      'Pre-punched and precision slot-engineered for rapid field installation and cost reduction'
    ],
    applications: ['Utility Solar Farms', 'Commercial Rooftop PV', 'Solar Carports', 'Floating Solar Racks'],
    alloys: ['6005A-T6', '6061-T6', '6063-T6'],
    seo: {
      title: 'Solar Aluminium Profiles | Mounting Rails & Module Frames | LELOI METAL',
      description: 'Engineered solar aluminium mounting rails, rooftop systems, ground mount structures, and module frames from Vietnam. Anodized up to 25µm.',
      keywords: ['solar mounting rails', 'solar aluminium frames', 'solar carport aluminium', 'photovoltaic mounting structure', 'solar extrusion Vietnam']
    }
  },
  {
    id: 'thermal-management',
    code: 'THERMAL_MANAGEMENT',
    name: 'Thermal Management',
    slug: 'thermal-management',
    navLabel: 'Thermal Management',
    headline: 'High-Aspect-Ratio Heat Sinks & Thermal Dissipation Profiles',
    summary: 'Precision extruded aluminium heat sinks for power electronics, solar inverters, LED illumination, and EV fast chargers.',
    description: 'Precision extruded high-aspect-ratio comb, fin array, and multi-chamber aluminium heat sinks engineered for superior heat dissipation. Utilizes high-conductivity 6063 alloy with thermal conductivity exceeding 200 W/(m·K) to optimize thermal resistance.',
    heroImage: '/media/catalog/15_heat_sink_profiles.webp',
    icon: 'Cpu',
    familyCount: 8,
    order: 5,
    highlights: [
      'High fin-to-space extrusion aspect ratio up to 18:1 for maximum surface dissipation area',
      'High thermal conductivity alloy chemistry (6063-T5/T6 with λ ≥ 205 W/m·K)',
      'Black and clear chemical anodizing for enhanced radiative thermal emissivity'
    ],
    applications: ['Solar Central Inverters', 'High-Power LED Drivers', 'EV Charging Stations', 'Telecom Power Amplifiers'],
    alloys: ['6063-T5', '6063-T6', '1050', '1070'],
    seo: {
      title: 'Aluminium Heat Sinks | Thermal Dissipation Profiles | LELOI METAL',
      description: 'High-aspect-ratio aluminium heat sinks and thermal management extrusions from Vietnam. High thermal conductivity for inverters, LEDs, and EV chargers.',
      keywords: ['aluminium heat sinks', 'extruded heat sinks', 'LED heat sinks', 'inverter cooling profiles', 'thermal management aluminium']
    }
  },
  {
    id: 'oem-components',
    code: 'OEM_COMPONENTS',
    name: 'OEM Components',
    slug: 'oem-components',
    navLabel: 'OEM Components',
    headline: 'Downstream CNC Machining, Surface Finishing & Sub-Assembly',
    summary: 'Precision cut-to-length, CNC multi-axis milling, drilling, tapping, stamping, and assembled aluminium subcomponents.',
    description: 'Turnkey fabrication and value-added precision processing of aluminium extrusions. From multi-axis CNC machining, high-speed automated mitre cutting, drilling, tapping, and punch pressing to ultrasonic washing and ready-to-install kit assembly.',
    heroImage: '/media/catalog/22_cnc_machined_components.webp',
    icon: 'Cog',
    familyCount: 10,
    order: 6,
    highlights: [
      'Multi-axis CNC machining centers (3-axis, 4-axis, and 6.5-meter long-bed 5-axis)',
      'Tight machining tolerances down to ±0.02 mm verified by coordinate measuring machines (CMM)',
      'Turnkey mechanical assembly with hardware insertion, gaskets, and export-grade protective packaging'
    ],
    applications: ['Automotive Brackets', 'Electronics Chassis', 'Medical Equipment Frames', 'Display Enclosures'],
    alloys: ['6061-T6', '6082-T6', '6063-T6', '7075-T6'],
    seo: {
      title: 'OEM Aluminium Components | CNC Machining & Fabrication | LELOI METAL',
      description: 'Precision CNC machined aluminium components, cut-to-length extrusions, punched parts, and turnkey mechanical assemblies from Vietnam factory.',
      keywords: ['OEM aluminium components', 'CNC machined aluminium', 'precision aluminium fabrication', 'aluminium assembly Vietnam', 'machined extrusion parts']
    }
  }
];

// ==============================================================================
// 2. CANONICAL PRODUCT FAMILIES (60 SOLUTION FAMILIES)
// ==============================================================================

export const CANONICAL_FAMILIES: ProductFamily[] = [
  // ----------------------------------------------------------------------------
  // ARCHITECTURAL ALUMINIUM (11 Families)
  // ----------------------------------------------------------------------------
  {
    id: 'fam-arch-01',
    divisionId: 'architectural',
    divisionSlug: 'architectural',
    name: 'Windows & Doors Systems',
    slug: 'windows-doors',
    summary: 'Architectural casement, sliding, tilt-and-turn, and bi-fold window and door profiles engineered for high acoustic and weather tightness.',
    description: 'Precision extruded window and door profiles designed for residential and commercial architecture. Engineered with multi-chamber geometries, EPDM sealing gaskets, and compatibility with international hardware systems.',
    coverImage: '/media/catalog/18_window_door_profiles.webp',
    technicalApplications: ['High-End Residential Glazing', 'Commercial Office Doors', 'Hotel Balcony Sliders', 'Hospitality Entrances'],
    supportedFinishes: ['POWDER_COATED', 'ANODIZED', 'WOOD_GRAIN', 'ELECTROPHORESIS'],
    alloys: ['6063-T5', '6063-T6'],
    tempers: ['T5', 'T6'],
    systemsCount: 4,
    order: 1,
    groupKey: 'A',
    seo: {
      title: 'Aluminium Window & Door Profiles | Architectural Glazing | LELOI METAL',
      description: 'Architectural window and door aluminium profiles from Vietnam. Sliding, casement, and tilt-and-turn systems with AkzoNobel powder coating.',
      keywords: ['window aluminium profiles', 'door aluminium extrusions', 'casement window profiles', 'sliding door profiles']
    }
  },
  {
    id: 'fam-arch-02',
    divisionId: 'architectural',
    divisionSlug: 'architectural',
    name: 'Curtain Wall & Facade Systems',
    slug: 'curtain-wall-facade',
    summary: 'Unitized and stick curtain wall mullions, transoms, and structural pressure plates for monumental high-rise facades.',
    description: 'Engineered facade framing profiles engineered to withstand extreme positive and negative wind pressures, seismic movement, and building deflection.',
    coverImage: '/media/catalog/17_curtain_wall_profiles.webp',
    technicalApplications: ['Skyscrapers', 'Commercial Towers', 'Airport Terminals', 'Civic Landmark Buildings'],
    supportedFinishes: ['POWDER_COATED', 'ANODIZED'],
    alloys: ['6063-T6', '6061-T6', '6005A-T6'],
    tempers: ['T6'],
    systemsCount: 3,
    order: 2,
    groupKey: 'B',
    seo: {
      title: 'Curtain Wall & Facade Systems | Mullions & Transoms | LELOI METAL',
      description: 'Unitized and stick curtain wall profiles from Vietnam. Heavy structural mullions and transoms tested to ASTM E283, E330, and E331.',
      keywords: ['curtain wall profiles', 'unitized facade aluminium', 'mullion profiles', 'transom extrusions']
    }
  },
  {
    id: 'fam-arch-03',
    divisionId: 'architectural',
    divisionSlug: 'architectural',
    name: 'Louvers & Architectural Sunshades',
    slug: 'louvers-sunshade',
    summary: 'Aerofoil, box louver, and acoustic sunshade extrusions for passive solar heat reduction and building envelope aesthetics.',
    description: 'Architectural solar shading profiles engineered for exterior solar gain reduction, building ventilation, and dynamic visual facade rhythm.',
    coverImage: '/media/catalog/16_led_lighting_profiles.webp',
    technicalApplications: ['Exterior Sunscreens', 'Plant Room Ventilation', 'Acoustic Barrier Louvers', 'Decorative Solar Blades'],
    supportedFinishes: ['POWDER_COATED', 'ANODIZED', 'WOOD_GRAIN'],
    alloys: ['6063-T5', '6063-T6'],
    tempers: ['T5', 'T6'],
    systemsCount: 2,
    order: 3,
    groupKey: 'C',
    seo: {
      title: 'Architectural Sunshade & Louver Profiles | Solar Blades | LELOI METAL',
      description: 'Aerofoil and box louver aluminium profiles for passive solar control and architectural building facades.',
      keywords: ['aerofoil louvers', 'sunshade profiles', 'ventilation louvers', 'architectural louvers']
    }
  },
  {
    id: 'fam-arch-04',
    divisionId: 'architectural',
    divisionSlug: 'architectural',
    name: 'Wall Cladding & Exterior Panels',
    slug: 'wall-cladding',
    summary: 'Interlocking exterior wall cladding slats, soffit panels, and rainscreen facade sub-framing extrusions.',
    description: 'Non-combustible exterior wall cladding profiles designed for rainscreen ventilated facades, soffits, and feature wall installations.',
    coverImage: '/media/catalog/05_u_channel_profiles.webp',
    technicalApplications: ['Rainscreen Facades', 'Exterior Soffits', 'Interior Architectural Cladding', 'Canopy Under-Panels'],
    supportedFinishes: ['POWDER_COATED', 'ANODIZED', 'WOOD_GRAIN'],
    alloys: ['6063-T5', '6063-T6'],
    tempers: ['T5', 'T6'],
    systemsCount: 2,
    order: 4,
    groupKey: 'D',
    seo: {
      title: 'Aluminium Wall Cladding Profiles | Exterior Panels | LELOI METAL',
      description: 'Interlocking aluminium siding and rainscreen cladding profiles. Durable exterior architectural finishes with AkzoNobel Interpon D.',
      keywords: ['aluminium cladding', 'wall panel extrusions', 'exterior soffit profiles', 'rainscreen profiles']
    }
  },
  {
    id: 'fam-arch-05',
    divisionId: 'architectural',
    divisionSlug: 'architectural',
    name: 'Ceiling Systems & Baffle Grids',
    slug: 'ceiling-systems',
    summary: 'Linear acoustic baffle extrusions, open-cell grid profiles, and suspended ceiling sub-runners.',
    description: 'Architectural suspended ceiling profiles engineered for commercial lobbies, shopping centres, transit hubs, and corporate offices.',
    coverImage: '/media/catalog/06_t_profiles.webp',
    technicalApplications: ['Airport Concourses', 'Metro Stations', 'Office Atriums', 'Retail Malls'],
    supportedFinishes: ['POWDER_COATED', 'ANODIZED', 'WOOD_GRAIN'],
    alloys: ['6063-T5'],
    tempers: ['T5'],
    systemsCount: 2,
    order: 5,
    groupKey: 'E',
    seo: {
      title: 'Aluminium Ceiling Systems | Baffle & Grid Profiles | LELOI METAL',
      description: 'Linear acoustic baffle and suspended ceiling aluminium profiles for commercial and transit architectural interiors.',
      keywords: ['aluminium ceiling baffles', 'suspended ceiling profiles', 'open cell grid aluminium', 'acoustic baffle extrusions']
    }
  },
  {
    id: 'fam-arch-06',
    divisionId: 'architectural',
    divisionSlug: 'architectural',
    name: 'Aluminium Canopies & Entrances',
    slug: 'canopies',
    summary: 'Heavy-duty structural canopy arms, glass canopy supports, and portico entrance framing extrusions.',
    description: 'Cantilevered canopy support arms, structural fascia gutter profiles, and monumental entrance portal extrusions engineered for high live and wind loads.',
    coverImage: '/media/catalog/07_i_beam_profiles.webp',
    technicalApplications: ['Hotel Porticos', 'Commercial Entrance Vestibules', 'Pedestrian Walkway Canopies', 'Bus Terminal Shelters'],
    supportedFinishes: ['POWDER_COATED', 'ANODIZED'],
    alloys: ['6061-T6', '6082-T6', '6005A-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 6,
    groupKey: 'F',
    seo: {
      title: 'Aluminium Canopy & Entrance Framing Profiles | LELOI METAL',
      description: 'Structural aluminium canopy profiles, entrance fascias, and cantilevered portico beams from Vietnam factory.',
      keywords: ['canopy aluminium profiles', 'entrance portico profiles', 'structural canopy arms']
    }
  },
  {
    id: 'fam-arch-07',
    divisionId: 'architectural',
    divisionSlug: 'architectural',
    name: 'Pergola & Architectural Louver Roofs',
    slug: 'pergola',
    summary: 'Motorized bi-climatic louvered roof profiles, gutter beams, and heavy hollow support columns for outdoor luxury spaces.',
    description: 'Complete outdoor living pergola structural systems with integrated rainwater management, rotating motorized louvers, and hidden LED channel extrusions.',
    coverImage: '/media/catalog/01_square_rectangular_hollow_profiles.webp',
    technicalApplications: ['Luxury Villa Terraces', 'Rooftop Lounge Areas', 'Restaurant Outdoor Dining', 'Resort Pool Cabanas'],
    supportedFinishes: ['POWDER_COATED', 'WOOD_GRAIN'],
    alloys: ['6063-T6', '6005A-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 7,
    groupKey: 'G',
    seo: {
      title: 'Aluminium Pergola Profiles | Motorized Louver Roofs | LELOI METAL',
      description: 'Bi-climatic motorized pergola aluminium profiles, water drainage beams, and posts for outdoor living spaces.',
      keywords: ['pergola aluminium profiles', 'louvered roof profiles', 'bioclimatic pergola extrusions']
    }
  },
  {
    id: 'fam-arch-08',
    divisionId: 'architectural',
    divisionSlug: 'architectural',
    name: 'Bungalow & Resort Glazing Systems',
    slug: 'bungalow-resort',
    summary: 'Modular pre-engineered framing extrusions for eco-resort bungalows, glamping pods, and panoramic glass pavilions.',
    description: 'Lightweight high-strength framing profiles engineered for rapid on-site assembly of panoramic resort villas, glass pavilions, and tropical glamping modules.',
    coverImage: '/media/catalog/18_window_door_profiles.webp',
    technicalApplications: ['Eco-Resort Villas', 'Glamping Pod Frames', 'Garden Pavilions', 'Overwater Bungalows'],
    supportedFinishes: ['POWDER_COATED', 'WOOD_GRAIN', 'ANODIZED'],
    alloys: ['6063-T6', '6005A-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 8,
    groupKey: 'H',
    seo: {
      title: 'Bungalow & Resort Glazing Profiles | Prefab Framing | LELOI METAL',
      description: 'Modular pre-engineered framing extrusions for luxury eco-resorts, bungalow glamping pods, and panoramic glass pavilions.',
      keywords: ['bungalow aluminium profiles', 'glamping pod framing', 'resort glazing extrusions']
    }
  },
  {
    id: 'fam-arch-09',
    divisionId: 'architectural',
    divisionSlug: 'architectural',
    name: 'Railing & Glass Balustrade Systems',
    slug: 'railing-balustrade',
    summary: 'Structural base shoe channels, handrails, spigot mounts, and baluster posts tested to international barrier safety codes.',
    description: 'Engineered aluminium balustrade and handrail profiles tested to withstand heavy line-load impact requirements conforming to IBC and EN 1991 standards.',
    coverImage: '/media/catalog/20_railing_balustrade_profiles.webp',
    technicalApplications: ['Residential Balconies', 'Commercial Mall Atriums', 'Staircase Handrails', 'Stadium Guardrails'],
    supportedFinishes: ['ANODIZED', 'POWDER_COATED'],
    alloys: ['6063-T6', '6061-T6'],
    tempers: ['T6'],
    systemsCount: 3,
    order: 9,
    groupKey: 'I',
    seo: {
      title: 'Aluminium Railing & Balustrade Profiles | Glass Channels | LELOI METAL',
      description: 'Heavy-duty aluminium glass shoe channels, handrail caps, and post balustrade profiles tested to international building codes.',
      keywords: ['aluminium railing profiles', 'glass balustrade channel', 'handrail aluminium extrusions']
    }
  },
  {
    id: 'fam-arch-10',
    divisionId: 'architectural',
    divisionSlug: 'architectural',
    name: 'Decorative & Fluted Aluminium Profiles',
    slug: 'decorative-aluminium',
    summary: 'Fluted interior wall slats, acoustic ceiling battens, aesthetic partition profiles, and decorative trim extrusions.',
    description: 'High-end decorative aluminium extrusions featuring fluted, reeded, scalloped, and ribbed geometric profiles for luxury commercial and hospitality interiors.',
    coverImage: '/media/catalog/16_led_lighting_profiles.webp',
    technicalApplications: ['Hotel Reception Feature Walls', 'Retail Store Displays', 'Executive Office Partitions', 'Aesthetic Column Covers'],
    supportedFinishes: ['POWDER_COATED', 'ANODIZED', 'WOOD_GRAIN'],
    alloys: ['6063-T5'],
    tempers: ['T5'],
    systemsCount: 2,
    order: 10,
    groupKey: 'J',
    seo: {
      title: 'Decorative & Fluted Aluminium Profiles | Interior Slats | LELOI METAL',
      description: 'Fluted, reeded, and ribbed decorative aluminium profiles for luxury hospitality interiors and commercial feature walls.',
      keywords: ['fluted aluminium profiles', 'decorative aluminium slats', 'reeded aluminium profiles', 'interior architectural trim']
    }
  },
  {
    id: 'fam-arch-11',
    divisionId: 'architectural',
    divisionSlug: 'architectural',
    name: 'Thermal Break Structural Glazing Systems',
    slug: 'thermal-break',
    summary: 'Multi-cavity polyamide-insulated aluminium profiles delivering superior thermal performance for energy-efficient green buildings.',
    description: 'Advanced thermal break window, door, and curtain wall profiles crimped with fiberglass-reinforced polyamide (PA66 GF25) strips to minimize thermal transmittance.',
    coverImage: '/media/catalog/18_window_door_profiles.webp',
    technicalApplications: ['Passive House Certified Buildings', 'Cold-Climate Commercial Towers', 'Zero-Energy Green Developments'],
    supportedFinishes: ['POWDER_COATED', 'ANODIZED'],
    alloys: ['6063-T6', '6060-T6'],
    tempers: ['T6'],
    systemsCount: 3,
    order: 11,
    groupKey: 'K',
    seo: {
      title: 'Thermal Break Aluminium Profiles | Insulated Glazing | LELOI METAL',
      description: 'Polyamide thermal break aluminium window and curtain wall systems from Vietnam factory for low-U-value energy-efficient construction.',
      keywords: ['thermal break aluminium', 'insulated window profiles', 'PA66 thermal strip profiles', 'energy efficient aluminium windows']
    }
  },

  // ----------------------------------------------------------------------------
  // INDUSTRIAL PROFILES (10 Families)
  // ----------------------------------------------------------------------------
  {
    id: 'fam-ind-01',
    divisionId: 'industrial-profiles',
    divisionSlug: 'industrial-profiles',
    name: 'T-Slot Modular Framing Profiles',
    slug: 't-slot-framing',
    summary: 'Global standard metric 20, 30, 40, 45, 60, and 80 series modular T-slot profiles for flexible industrial framing.',
    description: 'Precision extruded metric T-slot profiles featuring standard 6mm, 8mm, and 10mm slot widths. Anodized to 10–15µm for high scratch resistance and longevity.',
    coverImage: '/media/catalog/09_t_slot_modular_profiles.webp',
    technicalApplications: ['Automation Frameworks', 'Assembly Benches', 'Machine Enclosures', 'Inspection Carts'],
    supportedFinishes: ['ANODIZED'],
    alloys: ['6063-T6', '6005A-T6'],
    tempers: ['T6'],
    systemsCount: 6,
    order: 1,
    seo: {
      title: 'T-Slot Modular Aluminium Framing | Metric Series | LELOI METAL',
      description: 'Metric 20, 30, 40, 45, 60, and 80 series T-slot modular framing profiles from Vietnam. Clear anodized with standardized slot geometry.',
      keywords: ['T-slot aluminium', '4040 extrusion', 'modular framing profile', 'industrial aluminium framing']
    }
  },
  {
    id: 'fam-ind-02',
    divisionId: 'industrial-profiles',
    divisionSlug: 'industrial-profiles',
    name: 'Machine Frame Profiles',
    slug: 'machine-frames',
    summary: 'Heavy structural base beams engineered for rigid mounting of CNC machinery, packaging lines, and industrial tools.',
    description: 'High-rigidity structural box sections and heavy wall profiles engineered to dampen vibration and maintain critical alignment under dynamic machine loads.',
    coverImage: '/media/catalog/08_h_profiles.webp',
    technicalApplications: ['CNC Machine Bases', 'Laser Cutter Frameworks', 'Packaging Machinery', 'Textile Equipment Bases'],
    supportedFinishes: ['ANODIZED', 'MILL_FINISH'],
    alloys: ['6061-T6', '6082-T6', '6005A-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 2,
    seo: {
      title: 'Machine Frame Aluminium Profiles | Heavy Structural Sections | LELOI METAL',
      description: 'Heavy structural machine base profiles engineered for high torsional rigidity, vibration dampening, and precision machine mounting.',
      keywords: ['machine frame aluminium', 'structural machine base profiles', 'heavy equipment framing']
    }
  },
  {
    id: 'fam-ind-03',
    divisionId: 'industrial-profiles',
    divisionSlug: 'industrial-profiles',
    name: 'Automation & Robotics Profiles',
    slug: 'automation-profiles',
    summary: 'Modular structural profiles for Cartesian gantries, pick-and-place actuators, and automated factory cells.',
    description: 'Engineered profiles with integrated timing belt channels, sensor mounting grooves, and high straightness tolerances for factory automation machinery.',
    coverImage: '/media/catalog/10_v_slot_profiles.webp',
    technicalApplications: ['Cartesian Pick-and-Place Gantries', 'Automated Sorters', 'Inspection Stations', 'Pneumatic Actuator Mounts'],
    supportedFinishes: ['ANODIZED'],
    alloys: ['6063-T6', '6061-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 3,
    seo: {
      title: 'Automation & Robotics Aluminium Profiles | Gantry Frames | LELOI METAL',
      description: 'Extruded aluminium profiles for robotic cells, Cartesian linear actuators, and high-speed factory automation systems.',
      keywords: ['automation aluminium profiles', 'robotics extrusion', 'gantry aluminium profiles']
    }
  },
  {
    id: 'fam-ind-04',
    divisionId: 'industrial-profiles',
    divisionSlug: 'industrial-profiles',
    name: 'Conveyor Side & Bed Track Profiles',
    slug: 'conveyor-profiles',
    summary: 'Extruded side guides, slider bed tracks, and chain return channel profiles for industrial material handling conveyors.',
    description: 'Specialized wear-resistant conveyor side rail profiles designed to integrate low-friction polymer wear strips, side guide brackets, and return rollers.',
    coverImage: '/media/catalog/05_u_channel_profiles.webp',
    technicalApplications: ['Roller Conveyors', 'Modular Belt Conveyors', 'Food Processing Lines', 'Logistics Distribution Hubs'],
    supportedFinishes: ['ANODIZED'],
    alloys: ['6063-T6', '6005A-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 4,
    seo: {
      title: 'Conveyor Aluminium Profiles | Side Guides & Slider Beds | LELOI METAL',
      description: 'Extruded conveyor side rails, wear-strip guides, and slider bed profiles for packaging and material handling lines.',
      keywords: ['conveyor aluminium profiles', 'side guide extrusions', 'conveyor frame profiles']
    }
  },
  {
    id: 'fam-ind-05',
    divisionId: 'industrial-profiles',
    divisionSlug: 'industrial-profiles',
    name: 'Safety Guarding & Machine Enclosures',
    slug: 'safety-guarding',
    summary: 'Protective perimeter fencing profiles compatible with wire mesh, acoustic foam, and transparent polycarbonate panels.',
    description: 'OSHA- and CE-compliant perimeter safety enclosure extrusions featuring captive panel retaining grooves for quick assembly of machine protection barriers.',
    coverImage: '/media/catalog/09_t_slot_modular_profiles.webp',
    technicalApplications: ['Robotic Cell Guarding', 'High-Speed Press Enclosures', 'Perimeter Safety Fences', 'Acoustic Soundproofing Booths'],
    supportedFinishes: ['ANODIZED', 'POWDER_COATED'],
    alloys: ['6063-T5', '6063-T6'],
    tempers: ['T5', 'T6'],
    systemsCount: 2,
    order: 5,
    seo: {
      title: 'Machine Safety Guarding Profiles | Perimeter Enclosures | LELOI METAL',
      description: 'OSHA/CE compliant safety perimeter framing profiles for industrial machinery enclosures and robot safety fencing.',
      keywords: ['machine safety guarding', 'robot perimeter fence', 'protective enclosure profiles']
    }
  },
  {
    id: 'fam-ind-06',
    divisionId: 'industrial-profiles',
    divisionSlug: 'industrial-profiles',
    name: 'Industrial Workstations & Flow Racks',
    slug: 'workstation-systems',
    summary: 'Ergonomic assembly bench profiles, FIFO gravity flow rack rails, and modular tool hanger tracks for lean manufacturing.',
    description: 'Modular profiles optimized for rapid construction of height-adjustable assembly stations, overhead lighting booms, and bin-storage gravity flow racks.',
    coverImage: '/media/catalog/09_t_slot_modular_profiles.webp',
    technicalApplications: ['Electronics Assembly Lines', 'Lean Manufacturing Cells', 'Warehouse Flow Racks', 'Packaging Tables'],
    supportedFinishes: ['ANODIZED'],
    alloys: ['6063-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 6,
    seo: {
      title: 'Industrial Workstation Profiles | Lean Assembly Benches | LELOI METAL',
      description: 'Modular aluminium profiles for ergonomic assembly workbenches, FIFO flow racks, and overhead tool tracks.',
      keywords: ['industrial workbench profiles', 'lean flow rack extrusions', 'assembly station aluminium']
    }
  },
  {
    id: 'fam-ind-07',
    divisionId: 'industrial-profiles',
    divisionSlug: 'industrial-profiles',
    name: 'Cleanroom Wall & Ceiling Grid Profiles',
    slug: 'cleanroom-systems',
    summary: 'Flush-surface non-shedding profiles and ceiling HEPA filter grids for semiconductor and pharmaceutical cleanrooms.',
    description: 'Cleanroom architecture profiles engineered with coved corners, flush gaskets, and smooth anodized surfaces to prevent particle accumulation.',
    coverImage: '/media/catalog/06_t_profiles.webp',
    technicalApplications: ['Semiconductor Fabs', 'Pharma Cleanrooms', 'Medical Device Assembly', 'Optical Labs'],
    supportedFinishes: ['ANODIZED', 'POWDER_COATED'],
    alloys: ['6063-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 7,
    seo: {
      title: 'Cleanroom Aluminium Profiles | Wall & Ceiling Grids | LELOI METAL',
      description: 'Flush, non-particle shedding aluminium profiles for ISO Class 1–8 cleanroom wall panels and HEPA ceiling grids.',
      keywords: ['cleanroom aluminium profiles', 'cleanroom ceiling grid', 'flush partition profiles']
    }
  },
  {
    id: 'fam-ind-08',
    divisionId: 'industrial-profiles',
    divisionSlug: 'industrial-profiles',
    name: 'Linear Motion & Slide Rail Profiles',
    slug: 'linear-motion',
    summary: 'V-slot and hardened guide rail track extrusions designed for smooth bearing wheel movement and low friction.',
    description: 'High-precision guide rail extrusions engineered with tight straightness and twist tolerances to support roller wheels and linear guides.',
    coverImage: '/media/catalog/10_v_slot_profiles.webp',
    technicalApplications: ['3D Printers & CNC Routers', 'Sliding Camera Rigs', 'Transfer Carts', 'Door Slide Rails'],
    supportedFinishes: ['ANODIZED'],
    alloys: ['6063-T6', '6061-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 8,
    seo: {
      title: 'Linear Motion & Slide Rail Profiles | V-Slot Extrusions | LELOI METAL',
      description: 'V-slot and precision linear guide rail aluminium extrusions for smooth linear motion assemblies and Cartesian rigs.',
      keywords: ['v-slot aluminium', 'linear motion profiles', 'slide rail extrusions']
    }
  },
  {
    id: 'fam-ind-09',
    divisionId: 'industrial-profiles',
    divisionSlug: 'industrial-profiles',
    name: 'Heavy Equipment & Chassis Frames',
    slug: 'equipment-frames',
    summary: 'Large cross-section structural profiles for transport equipment, generator canopies, and mobile machinery chassis.',
    description: 'High-yield-strength 6061-T6 and 6082-T6 extruded structural members engineered for heavy dynamic loads and severe service environments.',
    coverImage: '/media/catalog/07_i_beam_profiles.webp',
    technicalApplications: ['Generator Enclosure Skid Bases', 'Agricultural Equipment', 'Utility Vehicle Frames', 'Mobile Testing Units'],
    supportedFinishes: ['MILL_FINISH', 'ANODIZED'],
    alloys: ['6061-T6', '6082-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 9,
    seo: {
      title: 'Heavy Equipment Chassis Profiles | Structural Aluminium | LELOI METAL',
      description: 'Heavy structural aluminium extrusions in 6061-T6 and 6082-T6 for transport vehicle chassis and equipment skids.',
      keywords: ['chassis aluminium profiles', 'heavy structural extrusions', 'equipment frame aluminium']
    }
  },
  {
    id: 'fam-ind-10',
    divisionId: 'industrial-profiles',
    divisionSlug: 'industrial-profiles',
    name: 'Custom Industrial Extrusions',
    slug: 'custom-industrial-extrusions',
    summary: 'Client-specified proprietary industrial extrusion geometries manufactured strictly to engineering specifications.',
    description: 'Bespoke industrial profiles engineered to customer proprietary tooling drawings with comprehensive DFM review, prototyping, and volume production.',
    coverImage: '/media/catalog/23_custom_aluminium_parts.webp',
    technicalApplications: ['Proprietary Machine Tooling', 'Specialized Actuators', 'Custom Heat Shields', 'Bespoke Guide Rails'],
    supportedFinishes: ['MILL_FINISH', 'ANODIZED', 'POWDER_COATED'],
    alloys: ['6063', '6061', '6005A', '6082'],
    tempers: ['T5', 'T6'],
    systemsCount: 2,
    order: 10,
    seo: {
      title: 'Custom Industrial Aluminium Extrusions | Made to Specification | LELOI METAL',
      description: 'Proprietary industrial aluminium profiles manufactured from customer CAD models with full quality assurance.',
      keywords: ['custom industrial extrusions', 'bespoke industrial aluminium', 'OEM extrusion manufacturing']
    }
  },

  // ----------------------------------------------------------------------------
  // SOLAR ALUMINIUM (10 Families)
  // ----------------------------------------------------------------------------
  {
    id: 'fam-sol-01',
    divisionId: 'solar',
    divisionSlug: 'solar',
    name: 'Solar Module Frames',
    slug: 'solar-module-frames',
    summary: 'High-speed automated corner-key module frames for crystalline PV modules with precision 45-degree miter cuts.',
    description: 'Precision extruded and fabricated module frame profiles designed for high mechanical load rating (5400 Pa snow, 2400 Pa wind) and automated robotic assembly lines.',
    coverImage: '/media/catalog/11_solar_panel_frame_profiles.webp',
    technicalApplications: ['Utility PV Modules', 'Residential Rooftop Panels', 'Bifacial Solar Modules', 'Glass-Glass Panels'],
    supportedFinishes: ['ANODIZED'],
    alloys: ['6063-T5', '6063-T6', '6005A-T6'],
    tempers: ['T5', 'T6'],
    systemsCount: 3,
    order: 1,
    seo: {
      title: 'Solar Module Frames | Photovoltaic Panel Profiles | LELOI METAL',
      description: 'High-speed automated solar module frame profiles from Vietnam. Anodized 15µm, 5400 Pa load certified, precision miter cut.',
      keywords: ['solar module frames', 'PV panel frame aluminium', 'solar frame extrusion']
    }
  },
  {
    id: 'fam-sol-02',
    divisionId: 'solar',
    divisionSlug: 'solar',
    name: 'Solar Mounting Rails',
    slug: 'solar-mounting-rails',
    summary: 'Standard and heavy-duty slotted mounting rails for rooftop and ground-mount PV racking systems.',
    description: 'Engineered structural rails with continuous top and side fastener channels designed for rapid cable routing and universal clamp mounting.',
    coverImage: '/media/catalog/12_solar_mounting_rails.webp',
    technicalApplications: ['Rooftop Mounting', 'Ground Mount Purlins', 'Floating Solar Arrays', 'Tracker Sub-Rails'],
    supportedFinishes: ['ANODIZED', 'MILL_FINISH'],
    alloys: ['6005A-T6', '6061-T6'],
    tempers: ['T6'],
    systemsCount: 4,
    order: 2,
    seo: {
      title: 'Solar Mounting Rails | Structural PV Racking Profiles | LELOI METAL',
      description: 'Extruded aluminium solar mounting rails with slotted channels for fast installation on tile, tin, and ground racks.',
      keywords: ['solar mounting rails', 'PV racking rails', 'slotted solar rail', 'solar extrusion rail']
    }
  },
  {
    id: 'fam-sol-03',
    divisionId: 'solar',
    divisionSlug: 'solar',
    name: 'Rooftop Mounting Systems',
    slug: 'rooftop-systems',
    summary: 'Lightweight mounting structures for metal trapezoidal roofs, standing seam roofs, and pitched tile rooftops.',
    description: 'Non-penetrating standing seam clamps and mini-rail profiles engineered for rapid commercial and industrial rooftop installations.',
    coverImage: '/media/catalog/12_solar_mounting_rails.webp',
    technicalApplications: ['Commercial Factory Roofs', 'Residential Tile Roofs', 'Standing Seam Clamping', 'Ballasted Flat Roofs'],
    supportedFinishes: ['ANODIZED'],
    alloys: ['6005A-T6', '6063-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 3,
    seo: {
      title: 'Rooftop Solar Mounting Systems | Commercial & Residential | LELOI METAL',
      description: 'Aluminium rooftop PV mounting systems for metal, tile, and concrete flat roofs with anti-corrosion anodizing.',
      keywords: ['rooftop solar mounting', 'standing seam solar clamp', 'ballasted flat roof solar']
    }
  },
  {
    id: 'fam-sol-04',
    divisionId: 'solar',
    divisionSlug: 'solar',
    name: 'Ground-Mount Solar Structures',
    slug: 'ground-mount-systems',
    summary: 'Heavy-duty structural purlins, columns, and diagonal braces for utility-scale solar farms.',
    description: 'High-strength structural aluminium racking designed as a corrosion-free alternative to galvanized steel for large utility-scale installations.',
    coverImage: '/media/catalog/08_h_profiles.webp',
    technicalApplications: ['Utility Solar Farms', 'Brownfield PV Installations', 'Desert Solar Plants', 'Coastal Solar Fields'],
    supportedFinishes: ['ANODIZED', 'MILL_FINISH'],
    alloys: ['6005A-T6', '6061-T6', '6082-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 4,
    seo: {
      title: 'Ground-Mount Solar Structures | Utility-Scale Aluminium Racking | LELOI METAL',
      description: 'Heavy structural aluminium racking for ground-mount solar power plants. Marine-grade anodized up to 25µm.',
      keywords: ['ground mount solar racking', 'utility solar aluminium', 'solar farm structural purlins']
    }
  },
  {
    id: 'fam-sol-05',
    divisionId: 'solar',
    divisionSlug: 'solar',
    name: 'Mid Clamps & End Clamps',
    slug: 'solar-clamps',
    summary: 'Extruded and CNC-cut mid and end clamp components with integrated grounding pins for PV panel securing.',
    description: 'High-tensile aluminium clamps designed to secure 30mm, 35mm, and 40mm framed solar modules firmly against high hurricane wind loads.',
    coverImage: '/media/catalog/13_solar_mid_clamps.webp',
    technicalApplications: ['Module Clamping', 'Grounding Continuity', 'Frameless Thin-Film Clamping'],
    supportedFinishes: ['ANODIZED'],
    alloys: ['6063-T6', '6005A-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 5,
    seo: {
      title: 'Solar Mid Clamps & End Clamps | Fastening Components | LELOI METAL',
      description: 'Extruded aluminium solar panel mid clamps and end clamps with integrated grounding pins and spring nuts.',
      keywords: ['solar mid clamps', 'solar end clamps', 'PV panel clamps', 'aluminium solar fasteners']
    }
  },
  {
    id: 'fam-sol-06',
    divisionId: 'solar',
    divisionSlug: 'solar',
    name: 'Solar Carport Structural Profiles',
    slug: 'solar-carport',
    summary: 'Long-span waterproof canopy beams, rafter profiles, and integrated rainwater drainage gutters for solar carports.',
    description: 'Commercial solar carport framing profiles designed for high aesthetic appeal, vehicular clearance, and 100% waterproof roof sealing.',
    coverImage: '/media/catalog/07_i_beam_profiles.webp',
    technicalApplications: ['Commercial Parking Lots', 'EV Charging Solar Canopies', 'Airport Parking Shelters'],
    supportedFinishes: ['ANODIZED', 'POWDER_COATED'],
    alloys: ['6061-T6', '6082-T6', '6005A-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 6,
    seo: {
      title: 'Solar Carport Aluminium Profiles | Waterproof Canopies | LELOI METAL',
      description: 'Heavy structural aluminium beams and rafter profiles for commercial solar carports and EV charging parking shelters.',
      keywords: ['solar carport aluminium', 'waterproof solar canopy', 'carport mounting profiles']
    }
  },
  {
    id: 'fam-sol-07',
    divisionId: 'solar',
    divisionSlug: 'solar',
    name: 'Solar Canopy Commercial Systems',
    slug: 'solar-canopies',
    summary: 'Architectural shade structures integrating solar panels for walkways, patio dining, and commercial plazas.',
    description: 'Dual-purpose solar structures engineered to provide clean energy generation while creating shaded outdoor recreational and commercial environments.',
    coverImage: '/media/catalog/01_square_rectangular_hollow_profiles.webp',
    technicalApplications: ['Campus Walkways', 'Retail Center Plazas', 'Public Transit Canopies'],
    supportedFinishes: ['POWDER_COATED', 'ANODIZED'],
    alloys: ['6063-T6', '6005A-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 7,
    seo: {
      title: 'Solar Canopy Systems | Commercial Architectural Solar | LELOI METAL',
      description: 'Architectural solar canopy aluminium framing profiles for walkways, commercial plazas, and public transit structures.',
      keywords: ['solar canopy systems', 'commercial solar canopy', 'architectural solar structures']
    }
  },
  {
    id: 'fam-sol-08',
    divisionId: 'solar',
    divisionSlug: 'solar',
    name: 'BIPV Building-Integrated Photovoltaic Profiles',
    slug: 'bipv-profiles',
    summary: 'Architectural glazing profiles designed to seamlessly integrate photovoltaic glass into building envelopes.',
    description: 'Specialized curtain wall and skylight profiles with internal cable routing channels for photovoltaic solar glass facades.',
    coverImage: '/media/catalog/17_curtain_wall_profiles.webp',
    technicalApplications: ['Solar Facade Facades', 'PV Skylights', 'Solar Glazed Balustrades', 'Energy-Generating Spandrels'],
    supportedFinishes: ['POWDER_COATED', 'ANODIZED'],
    alloys: ['6063-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 8,
    seo: {
      title: 'BIPV Aluminium Profiles | Building-Integrated Photovoltaics | LELOI METAL',
      description: 'Architectural glazing profiles engineered for building-integrated photovoltaic facades, skylights, and spandrels.',
      keywords: ['BIPV aluminium profiles', 'photovoltaic curtain wall', 'solar glass framing']
    }
  },
  {
    id: 'fam-sol-09',
    divisionId: 'solar',
    divisionSlug: 'solar',
    name: 'Solar Purlins & Structural Columns',
    slug: 'solar-structural-profiles',
    summary: 'C-purlin, Z-purlin, and hollow column profiles engineered for maximum moment of inertia and wind deflection resistance.',
    description: 'Optimized structural cross-sections delivering superior strength-to-weight ratios for large-span solar support frameworks.',
    coverImage: '/media/catalog/05_u_channel_profiles.webp',
    technicalApplications: ['Utility Solar Purlins', 'High-Snow-Load Ground Mounts', 'Wind-Resistant Rooftops'],
    supportedFinishes: ['MILL_FINISH', 'ANODIZED'],
    alloys: ['6005A-T6', '6061-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 9,
    seo: {
      title: 'Solar Purlins & Columns | Structural Solar Aluminium | LELOI METAL',
      description: 'C-purlin and structural column aluminium profiles engineered for utility solar racking systems and high wind zones.',
      keywords: ['solar purlins', 'solar structural columns', 'aluminium purlin extrusions']
    }
  },
  {
    id: 'fam-sol-10',
    divisionId: 'solar',
    divisionSlug: 'solar',
    name: 'Solar Inverter & Battery Housing Profiles',
    slug: 'inverter-enclosures',
    summary: 'NEMA 4X / IP66 rated extruded enclosure walls and heat-dissipating casings for string inverters and energy storage.',
    description: 'Enclosure extrusions combining structural housing, sealing gasket tracks, and external cooling fins for solar inverter protection.',
    coverImage: '/media/catalog/21_enclosure_profiles.webp',
    technicalApplications: ['String Solar Inverters', 'Battery Energy Storage Systems (BESS)', 'Microinverter Casings'],
    supportedFinishes: ['POWDER_COATED', 'ANODIZED'],
    alloys: ['6063-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 10,
    seo: {
      title: 'Solar Inverter & Battery Housing Profiles | LELOI METAL',
      description: 'Extruded aluminium enclosure profiles with integrated cooling fins for solar inverters and energy storage units.',
      keywords: ['inverter enclosure profiles', 'battery housing aluminium', 'NEMA 4X aluminium casing']
    }
  },

  // ----------------------------------------------------------------------------
  // THERMAL MANAGEMENT (8 Families)
  // ----------------------------------------------------------------------------
  {
    id: 'fam-thm-01',
    divisionId: 'thermal-management',
    divisionSlug: 'thermal-management',
    name: 'LED Lighting Heat Sinks',
    slug: 'led-heat-sinks',
    summary: 'Radial, circular, and linear extruded heat sink profiles for commercial LED troffers, downlights, and horticultural lighting.',
    description: 'High-aspect-ratio finned extrusions designed for natural convective cooling of high-lumen commercial and industrial LED luminaires.',
    coverImage: '/media/catalog/16_led_lighting_profiles.webp',
    technicalApplications: ['Linear Commercial Lighting', 'High-Lumen Downlights', 'Horticultural LED Grow Lights', 'Track Light Fixtures'],
    supportedFinishes: ['ANODIZED', 'POWDER_COATED'],
    alloys: ['6063-T5', '6063-T6'],
    tempers: ['T5', 'T6'],
    systemsCount: 2,
    order: 1,
    seo: {
      title: 'LED Heat Sinks | Extruded Aluminium Lighting Profiles | LELOI METAL',
      description: 'Extruded aluminium heat sinks for high-power LED luminaires, downlights, and horticultural fixtures from Vietnam factory.',
      keywords: ['LED heat sink', 'lighting heat sink profiles', 'linear LED extrusion', 'extruded heat sinks']
    }
  },
  {
    id: 'fam-thm-02',
    divisionId: 'thermal-management',
    divisionSlug: 'thermal-management',
    name: 'High-Bay & Streetlight Heat Sinks',
    slug: 'lighting-heat-sinks',
    summary: 'Heavy multi-fin heat sink housings engineered for 150W–500W industrial high-bay fixtures and municipal streetlights.',
    description: 'Rugged outdoor luminaire cooling profiles designed to dissipate concentrated heat while providing IP66 weatherproofing channels.',
    coverImage: '/media/catalog/15_heat_sink_profiles.webp',
    technicalApplications: ['Industrial High-Bay Fixtures', 'Municipal LED Streetlights', 'Stadium Floodlights', 'Explosion-Proof Luminaires'],
    supportedFinishes: ['POWDER_COATED', 'ANODIZED'],
    alloys: ['6063-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 2,
    seo: {
      title: 'High-Bay & Streetlight Heat Sinks | Heavy Industrial Cooling | LELOI METAL',
      description: 'Extruded aluminium thermal housings for high-power outdoor streetlights, stadium floods, and warehouse high-bays.',
      keywords: ['high bay heat sink', 'streetlight aluminium housing', 'stadium floodlight heat sink']
    }
  },
  {
    id: 'fam-thm-03',
    divisionId: 'thermal-management',
    divisionSlug: 'thermal-management',
    name: 'Solar & Power Inverter Heat Sinks',
    slug: 'inverter-heat-sinks',
    summary: 'Wide-base comb heat sinks engineered for natural and forced-air convection in string and central solar inverters.',
    description: 'Large profile heat sinks featuring deep fins and thick mounting bases engineered for rapid thermal spreading from power transistor modules.',
    coverImage: '/media/catalog/15_heat_sink_profiles.webp',
    technicalApplications: ['Solar String Inverters', 'Wind Turbine Converters', 'Industrial Variable Frequency Drives (VFD)', 'Grid Battery Inverters'],
    supportedFinishes: ['ANODIZED', 'MILL_FINISH'],
    alloys: ['6063-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 3,
    seo: {
      title: 'Inverter Heat Sinks | Solar & Power Conversion Cooling | LELOI METAL',
      description: 'Wide-base extruded comb heat sinks for solar inverters and variable frequency drives with high thermal conductivity.',
      keywords: ['inverter heat sinks', 'solar power heat sink', 'comb heat sink extrusion']
    }
  },
  {
    id: 'fam-thm-04',
    divisionId: 'thermal-management',
    divisionSlug: 'thermal-management',
    name: 'Power Electronics & IGBT Coolers',
    slug: 'power-electronics-cooling',
    summary: 'Ultra-flat base cooling extrusions with CNC-milled contact surfaces designed for direct IGBT module mounting.',
    description: 'Precision thermal extrusions offering surface flatness under 0.05 mm to ensure minimal thermal contact resistance with power semiconductor modules.',
    coverImage: '/media/catalog/15_heat_sink_profiles.webp',
    technicalApplications: ['IGBT Power Modules', 'Thyristor Bridges', 'Solid State Relays', 'Traction Power Inverters'],
    supportedFinishes: ['ANODIZED', 'MILL_FINISH'],
    alloys: ['6063-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 4,
    seo: {
      title: 'Power Electronics & IGBT Coolers | Precision Heat Sinks | LELOI METAL',
      description: 'High-aspect-ratio aluminium heat sinks for IGBT power modules and high-voltage power electronics cooling.',
      keywords: ['IGBT heat sinks', 'power electronics cooling', 'semiconductor heat sink']
    }
  },
  {
    id: 'fam-thm-05',
    divisionId: 'thermal-management',
    divisionSlug: 'thermal-management',
    name: 'EV Fast Charger Heat Sinks',
    slug: 'ev-charger-heat-sinks',
    summary: 'High-density finned cooling channels engineered for 50kW–350kW DC ultra-fast electric vehicle charging stations.',
    description: 'Forced-air and liquid-cooled ready aluminium heat sinks designed to handle extreme thermal flux generated during ultra-rapid DC vehicle charging.',
    coverImage: '/media/catalog/15_heat_sink_profiles.webp',
    technicalApplications: ['DC Fast Chargers (Level 3)', 'Ultra-Fast EV Dispensers', 'Heavy Commercial Fleet Chargers'],
    supportedFinishes: ['ANODIZED'],
    alloys: ['6063-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 5,
    seo: {
      title: 'EV Charger Heat Sinks | DC Fast Charger Thermal Cooling | LELOI METAL',
      description: 'Extruded aluminium heat sinks designed for 50kW to 350kW DC fast charging stations and power conversion units.',
      keywords: ['EV charger heat sink', 'DC fast charger cooling', 'electric vehicle thermal management']
    }
  },
  {
    id: 'fam-thm-06',
    divisionId: 'thermal-management',
    divisionSlug: 'thermal-management',
    name: 'Battery Pack Thermal Management Profiles',
    slug: 'battery-thermal',
    summary: 'Multi-void microchannel liquid cooling plates and structural cooling beams for lithium-ion battery packs.',
    description: 'Complex multi-port extruded liquid cooling plates and module divider beams engineered to maintain uniform thermal gradient in EV battery packs.',
    coverImage: '/media/catalog/21_enclosure_profiles.webp',
    technicalApplications: ['EV Battery Enclosures', 'BESS Container Cooling', 'E-Bus Battery Modules', 'Power Tool Packs'],
    supportedFinishes: ['MILL_FINISH', 'ANODIZED'],
    alloys: ['3003', '6063-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 6,
    seo: {
      title: 'Battery Pack Thermal Management Profiles | Liquid Cooling | LELOI METAL',
      description: 'Multi-void liquid cooling profiles and structural thermal beams for lithium battery packs and energy storage systems.',
      keywords: ['battery thermal management', 'liquid cooling plate extrusion', 'EV battery cooling profile']
    }
  },
  {
    id: 'fam-thm-07',
    divisionId: 'thermal-management',
    divisionSlug: 'thermal-management',
    name: 'Telecom Base Station Cooling Extrusions',
    slug: 'telecom-cooling',
    summary: 'High-durability outdoor cooling profiles and RF amplifier heat sinks for 5G telecommunication base stations.',
    description: 'Rugged thermal dissipation profiles with corrosion-resistant finishes engineered for 24/7 unassisted operation in extreme climates.',
    coverImage: '/media/catalog/15_heat_sink_profiles.webp',
    technicalApplications: ['5G Remote Radio Units (RRU)', 'Active Antenna Systems (AAS)', 'Cellular Base Stations', 'Fiber Optic Repeaters'],
    supportedFinishes: ['ANODIZED', 'POWDER_COATED'],
    alloys: ['6063-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 7,
    seo: {
      title: 'Telecom Cooling Extrusions | 5G Base Station Heat Sinks | LELOI METAL',
      description: 'Rugged aluminium heat sinks for 5G remote radio heads, base stations, and outdoor telecom equipment.',
      keywords: ['telecom heat sink', '5G cooling profile', 'remote radio unit heat sink']
    }
  },
  {
    id: 'fam-thm-08',
    divisionId: 'thermal-management',
    divisionSlug: 'thermal-management',
    name: 'Heavy Industrial Comb Heat Sinks',
    slug: 'industrial-heat-sinks',
    summary: 'Monumental comb heat sinks with wide bases and tall, dense fin arrays for high-wattage industrial machinery.',
    description: 'Large-scale extruded comb heat sinks capable of dissipating hundreds of watts of power across industrial drive and welding machinery.',
    coverImage: '/media/catalog/15_heat_sink_profiles.webp',
    technicalApplications: ['Arc Welding Equipment', 'Induction Heating Power Supplies', 'High-Power Laser Diodes', 'Locomotive Propulsion Drives'],
    supportedFinishes: ['ANODIZED', 'MILL_FINISH'],
    alloys: ['6063-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 8,
    seo: {
      title: 'Heavy Industrial Comb Heat Sinks | Monumental Cooling | LELOI METAL',
      description: 'Heavy comb-style extruded aluminium heat sinks for high-power industrial machinery and welding equipment.',
      keywords: ['comb heat sink', 'heavy industrial heat sink', 'large aluminium cooling profiles']
    }
  },

  // ----------------------------------------------------------------------------
  // OEM COMPONENTS (10 Families)
  // ----------------------------------------------------------------------------
  {
    id: 'fam-oem-01',
    divisionId: 'oem-components',
    divisionSlug: 'oem-components',
    name: 'CNC Machined Aluminium Components',
    slug: 'cnc-machined-components',
    summary: 'Precision 3-axis, 4-axis, and 5-axis CNC machined parts with micron-level tolerances manufactured from extrusions.',
    description: 'High-precision downstream CNC milling, pocketing, and profiling of aluminium extrusions. Strict dimensional inspection with CMM reports.',
    coverImage: '/media/catalog/22_cnc_machined_components.webp',
    technicalApplications: ['Automotive Sub-Assemblies', 'Robotic Arms', 'Aerospace Brackets', 'Electronics Enclosures'],
    supportedFinishes: ['ANODIZED', 'POWDER_COATED', 'MILL_FINISH'],
    alloys: ['6061-T6', '6082-T6', '7075-T6'],
    tempers: ['T6'],
    systemsCount: 3,
    order: 1,
    seo: {
      title: 'CNC Machined Aluminium Components | 5-Axis Precision | LELOI METAL',
      description: 'High-precision CNC machined aluminium parts from Vietnam factory. Tolerances down to ±0.02mm with CMM inspection.',
      keywords: ['CNC machined aluminium', 'precision aluminium components', 'machined extrusion parts']
    }
  },
  {
    id: 'fam-oem-02',
    divisionId: 'oem-components',
    divisionSlug: 'oem-components',
    name: 'Precision Cut-to-Length Profiles',
    slug: 'precision-cut-components',
    summary: 'High-speed automated mitre and square cutting with tolerances down to ±0.2 mm and burr-free chamfered edges.',
    description: 'Automated saw cutting lines capable of volume cut-to-length processing with inline chip suction and vibration deburring.',
    coverImage: '/media/catalog/23_custom_aluminium_parts.webp',
    technicalApplications: ['Solar Rail Kits', 'Window Fabrication Kits', 'Framing Stubs', 'Lighting Fixture Bodies'],
    supportedFinishes: ['MILL_FINISH', 'ANODIZED'],
    alloys: ['6063-T6', '6061-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 2,
    seo: {
      title: 'Precision Cut-to-Length Aluminium Profiles | LELOI METAL',
      description: 'Automated precision cut-to-length aluminium extrusions with burr-free finish and tight tolerance cuts.',
      keywords: ['cut-to-length aluminium', 'precision aluminium cutting', 'mitre cut profiles']
    }
  },
  {
    id: 'fam-oem-03',
    divisionId: 'oem-components',
    divisionSlug: 'oem-components',
    name: 'CNC Drilled Aluminium Profiles',
    slug: 'drilled-components',
    summary: 'Multi-spindle CNC drilling and hole pattern processing along long extrusion profiles up to 6.5 meters.',
    description: 'Long-bed automated drilling centers capable of producing complex hole patterns, counter-bores, and slots in a single clamped setup.',
    coverImage: '/media/catalog/23_custom_aluminium_parts.webp',
    technicalApplications: ['Solar Mounting Purlins', 'Curtain Wall Transoms', 'Machine Guide Rails', 'Furniture Frames'],
    supportedFinishes: ['ANODIZED', 'MILL_FINISH'],
    alloys: ['6063-T6', '6061-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 3,
    seo: {
      title: 'CNC Drilled Aluminium Profiles | Long-Bed Machining | LELOI METAL',
      description: 'Long-bed CNC drilling and slot milling for aluminium extrusions up to 6.5 meters from Vietnam factory.',
      keywords: ['drilled aluminium profiles', 'CNC drilling extrusions', 'punched aluminium profiles']
    }
  },
  {
    id: 'fam-oem-04',
    divisionId: 'oem-components',
    divisionSlug: 'oem-components',
    name: 'Tapped & Threaded Aluminium Parts',
    slug: 'tapped-components',
    summary: 'Threaded screw bosses, helicoil thread insertions, and roll-tapped blind and through holes.',
    description: 'Automated rigid tapping and helicoil wire insert installation for robust reusable machine screw connections in aluminium parts.',
    coverImage: '/media/catalog/23_custom_aluminium_parts.webp',
    technicalApplications: ['Motor End Caps', 'Sensor Housings', 'Robotics Joints', 'Enclosure Flanges'],
    supportedFinishes: ['ANODIZED'],
    alloys: ['6061-T6', '6082-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 4,
    seo: {
      title: 'Tapped & Threaded Aluminium Parts | Thread Inserts | LELOI METAL',
      description: 'Automated thread tapping, blind-hole threading, and helicoil insert installation in aluminium components.',
      keywords: ['tapped aluminium parts', 'threaded extrusion components', 'helicoil aluminium inserts']
    }
  },
  {
    id: 'fam-oem-05',
    divisionId: 'oem-components',
    divisionSlug: 'oem-components',
    name: 'Milled & Slot-Punched Extrusions',
    slug: 'milled-components',
    summary: 'High-speed hydraulic slot punching and CNC pocket milling for latch mortises, drainage slots, and cable pass-throughs.',
    description: 'Custom progressive tooling dies and high-speed CNC routers engineered to create precise cutouts and weep holes without profile distortion.',
    coverImage: '/media/catalog/23_custom_aluminium_parts.webp',
    technicalApplications: ['Window Drainage Slots', 'Door Lock Mortises', 'Electrical Enclosures', 'Cable Entry Panels'],
    supportedFinishes: ['POWDER_COATED', 'ANODIZED'],
    alloys: ['6063-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 5,
    seo: {
      title: 'Milled & Slot-Punched Extrusions | High-Speed Machining | LELOI METAL',
      description: 'Hydraulic punching and CNC milling of slots, lock mortises, and weep holes in aluminium profiles.',
      keywords: ['slot-punched extrusions', 'milled aluminium profiles', 'punched aluminium parts']
    }
  },
  {
    id: 'fam-oem-06',
    divisionId: 'oem-components',
    divisionSlug: 'oem-components',
    name: 'Surface Finished OEM Components',
    slug: 'surface-finished-components',
    summary: 'Mechanical surface conditioning including shot blasting, glass bead peening, and satin belt brushing.',
    description: 'Automated surface texturing lines that eliminate extrusion die lines and create uniform matte or directional brushed aesthetic finishes.',
    coverImage: '/media/catalog/22_cnc_machined_components.webp',
    technicalApplications: ['High-End Audio Front Panels', 'Consumer Electronics Housings', 'Architectural Door Furniture'],
    supportedFinishes: ['ANODIZED', 'POWDER_COATED'],
    alloys: ['6063-T6', '6061-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 6,
    seo: {
      title: 'Surface Finished OEM Aluminium Components | Bead Blasted | LELOI METAL',
      description: 'Shot-blasted, bead-peened, and brush-finished aluminium components with flawless visual appearance.',
      keywords: ['surface finished aluminium', 'bead blasted aluminium', 'brushed aluminium components']
    }
  },
  {
    id: 'fam-oem-07',
    divisionId: 'oem-components',
    divisionSlug: 'oem-components',
    name: 'AkzoNobel Powder Coated Assemblies',
    slug: 'powder-coated-components',
    summary: 'Turnkey coated components using AkzoNobel Interpon D architectural powders with 10–30 year performance warranties.',
    description: 'Automated horizontal and vertical powder coating lines with multi-stage chrome-free pre-treatment meeting Qualicoat Class 1 and Class 2 specs.',
    coverImage: '/media/catalog/24_industrial_assemblies.webp',
    technicalApplications: ['Exterior Architectural Hardware', 'Telecom Cabinets', 'Outdoor Louver Assemblies'],
    supportedFinishes: ['POWDER_COATED'],
    alloys: ['6063-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 7,
    seo: {
      title: 'AkzoNobel Powder Coated Aluminium Components | LELOI METAL',
      description: 'Certified AkzoNobel Interpon D powder coated aluminium components with Qualicoat Class 2 and AAMA 2604/2605 compliance.',
      keywords: ['AkzoNobel powder coating', 'coated aluminium assemblies', 'Interpon D powder coated']
    }
  },
  {
    id: 'fam-oem-08',
    divisionId: 'oem-components',
    divisionSlug: 'oem-components',
    name: 'Hard Anodized Precision Components',
    slug: 'anodized-components',
    summary: 'Type III hardcoat anodizing up to 50µm thickness for extreme wear, dielectric insulation, and corrosion resistance.',
    description: 'Precision hard anodizing meeting MIL-A-8625 Type III specifications, achieving surface hardness up to 65 HRC for severe mechanical environments.',
    coverImage: '/media/catalog/22_cnc_machined_components.webp',
    technicalApplications: ['Hydraulic Valve Bodies', 'Piston Guides', 'Marine Rigging Blocks', 'Optical Rails'],
    supportedFinishes: ['ANODIZED'],
    alloys: ['6061-T6', '7075-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 8,
    seo: {
      title: 'Hard Anodized Precision Aluminium Components | MIL-A-8625 | LELOI METAL',
      description: 'Type III hardcoat anodized aluminium components offering extreme wear resistance and 50µm protective oxide layer.',
      keywords: ['hard anodized aluminium', 'MIL-A-8625 Type III', 'wear-resistant aluminium parts']
    }
  },
  {
    id: 'fam-oem-09',
    divisionId: 'oem-components',
    divisionSlug: 'oem-components',
    name: 'Pre-Assembled Aluminium Subcomponents',
    slug: 'assembled-subcomponents',
    summary: 'Turnkey sub-assemblies integrating fasteners, captive nuts, rubber gaskets, and thermal barrier strips.',
    description: 'Factory-assembled modular kits delivered ready for direct installation on client manufacturing lines, reducing customer labor and supply chain risk.',
    coverImage: '/media/catalog/24_industrial_assemblies.webp',
    technicalApplications: ['Pre-Framed Solar Carport Rafters', 'Curtain Wall Corner Brackets', 'Machine Enclosure Kits'],
    supportedFinishes: ['ANODIZED', 'POWDER_COATED'],
    alloys: ['6063-T6', '6061-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 9,
    seo: {
      title: 'Pre-Assembled Aluminium Subcomponents | Turnkey Kits | LELOI METAL',
      description: 'Turnkey mechanical sub-assemblies with installed fasteners, gaskets, and brackets shipped ready-to-mount.',
      keywords: ['aluminium sub-assemblies', 'turnkey aluminium kits', 'pre-assembled extrusion parts']
    }
  },
  {
    id: 'fam-oem-10',
    divisionId: 'oem-components',
    divisionSlug: 'oem-components',
    name: 'Custom Drawing OEM Aluminium Parts',
    slug: 'custom-oem-parts',
    summary: 'Made-to-print OEM components manufactured strictly to proprietary engineering drawings with NDA protection.',
    description: 'Comprehensive contract manufacturing of complex aluminium parts according to client 3D CAD models and 2D GD&T drawings.',
    coverImage: '/media/catalog/23_custom_aluminium_parts.webp',
    technicalApplications: ['Specialty Automotive Components', 'Medical Device Chassis', 'Defense Hardware', 'Custom Instrumentation'],
    supportedFinishes: ['ANODIZED', 'POWDER_COATED', 'MILL_FINISH'],
    alloys: ['6061-T6', '6082-T6', '7075-T6', '6063-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 10,
    seo: {
      title: 'Custom Drawing OEM Aluminium Parts | Contract Manufacturing | LELOI METAL',
      description: 'Confidential made-to-print OEM aluminium parts manufactured strictly to client CAD drawings and GD&T specifications.',
      keywords: ['OEM aluminium parts', 'contract aluminium manufacturing', 'made to print aluminium']
    }
  },

  // ----------------------------------------------------------------------------
  // CUSTOM EXTRUSIONS (11 Families)
  // ----------------------------------------------------------------------------
  {
    id: 'fam-cst-01',
    divisionId: 'custom-extrusions',
    divisionSlug: 'custom-extrusions',
    name: 'Custom Solid Aluminium Extrusions',
    slug: 'solid-extrusions',
    summary: 'Heavy-duty solid cross-section profiles engineered for structural loading, busbars, and subsequent CNC billet machining.',
    description: 'Solid profile extrusions produced with tight grain structure and high mechanical properties for high-stress applications.',
    coverImage: '/media/catalog/03_solid_bars.webp',
    technicalApplications: ['Electrical Busbars', 'Structural Cleats', 'CNC Billet Stock', 'Mounting Flanges'],
    supportedFinishes: ['MILL_FINISH', 'ANODIZED'],
    alloys: ['6061', '6082', '6063', '1050'],
    tempers: ['T6', 'T5', 'O'],
    systemsCount: 2,
    order: 1,
    seo: {
      title: 'Custom Solid Aluminium Extrusions | Bars & Billets | LELOI METAL',
      description: 'Heavy solid cross-section aluminium profiles engineered for structural loading and electrical busbars.',
      keywords: ['solid aluminium extrusions', 'aluminium flat bars', 'solid profile extrusions']
    }
  },
  {
    id: 'fam-cst-02',
    divisionId: 'custom-extrusions',
    divisionSlug: 'custom-extrusions',
    name: 'Custom Hollow Aluminium Extrusions',
    slug: 'hollow-extrusions',
    summary: 'Single-void and multi-chamber hollow profiles produced on high-precision porthole and bridge dies.',
    description: 'Hollow profiles engineered for maximum torsional stiffness and internal pressure containment with uniform seam weld strength.',
    coverImage: '/media/catalog/01_square_rectangular_hollow_profiles.webp',
    technicalApplications: ['Chassis Frameworks', 'Hydraulic Fluid Conduits', 'Structural Columns', 'Roll Cages'],
    supportedFinishes: ['MILL_FINISH', 'ANODIZED', 'POWDER_COATED'],
    alloys: ['6063-T6', '6061-T6', '6005A-T6'],
    tempers: ['T5', 'T6'],
    systemsCount: 2,
    order: 2,
    seo: {
      title: 'Custom Hollow Aluminium Extrusions | Porthole Dies | LELOI METAL',
      description: 'Single and multi-chamber hollow aluminium extrusions produced on bridge and porthole extrusion dies.',
      keywords: ['hollow aluminium extrusions', 'porthole die extrusions', 'structural hollow profiles']
    }
  },
  {
    id: 'fam-cst-03',
    divisionId: 'custom-extrusions',
    divisionSlug: 'custom-extrusions',
    name: 'Semi-Hollow Aluminium Profiles',
    slug: 'semi-hollow-extrusions',
    summary: 'Deep throat channels and open tongue sections with precise leg straightness and tongue stability.',
    description: 'Profiles featuring high tongue ratios engineered through advanced die nitriding and controlled metal flow.',
    coverImage: '/media/catalog/05_u_channel_profiles.webp',
    technicalApplications: ['Glazing Channels', 'Guide Rails', 'Edge Retainers', 'Clip-On Retaining Sections'],
    supportedFinishes: ['MILL_FINISH', 'ANODIZED', 'POWDER_COATED'],
    alloys: ['6063-T5', '6063-T6'],
    tempers: ['T5', 'T6'],
    systemsCount: 2,
    order: 3,
    seo: {
      title: 'Semi-Hollow Aluminium Profiles | Deep Throat Extrusions | LELOI METAL',
      description: 'High tongue ratio semi-hollow aluminium extrusions engineered with tight leg straightness and stability.',
      keywords: ['semi-hollow aluminium', 'open tongue profiles', 'deep channel extrusions']
    }
  },
  {
    id: 'fam-cst-04',
    divisionId: 'custom-extrusions',
    divisionSlug: 'custom-extrusions',
    name: 'Complex Multi-Void Extrusions',
    slug: 'complex-extrusions',
    summary: 'High-ratio internal cell geometries for thermal insulation barriers and structural internal honeycomb ribs.',
    description: 'Multi-void aluminium extrusions engineered to integrate lightweight strength, thermal cavities, and screw bosses into a single monolithic part.',
    coverImage: '/media/catalog/01_square_rectangular_hollow_profiles.webp',
    technicalApplications: ['Automotive Crash Boxes', 'Aircraft Seat Tracks', 'Thermal Window Frames'],
    supportedFinishes: ['MILL_FINISH', 'ANODIZED'],
    alloys: ['6063-T6', '6005A-T6', '6082-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 4,
    seo: {
      title: 'Complex Multi-Void Aluminium Extrusions | Multi-Chamber | LELOI METAL',
      description: 'High-complexity multi-void aluminium profiles featuring internal stiffening ribs and multiple functional chambers.',
      keywords: ['multi-void aluminium extrusions', 'multi-chamber profiles', 'complex extrusion dies']
    }
  },
  {
    id: 'fam-cst-05',
    divisionId: 'custom-extrusions',
    divisionSlug: 'custom-extrusions',
    name: 'Round Tubes & Cylindrical Hollows',
    slug: 'round-profiles',
    summary: 'Seamless and porthole extruded aluminium round tubing with tight concentricity and diameter tolerance.',
    description: 'Precision extruded cylindrical tubing engineered for fluid lines, structural rollers, and pneumatic cylinders.',
    coverImage: '/media/catalog/02_round_tubes.webp',
    technicalApplications: ['Pneumatic Cylinders', 'Drive Shafts', 'Flagpoles & Masts', 'Roller Conveyors'],
    supportedFinishes: ['MILL_FINISH', 'ANODIZED'],
    alloys: ['6061-T6', '6063-T6', '6082-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 5,
    seo: {
      title: 'Round Aluminium Tubes | Precision Cylindrical Extrusions | LELOI METAL',
      description: 'Extruded aluminium round tubing with tight concentricity and diameter tolerances conforming to ASTM B221.',
      keywords: ['round aluminium tubes', 'cylindrical aluminium extrusion', 'precision round tubing']
    }
  },
  {
    id: 'fam-cst-06',
    divisionId: 'custom-extrusions',
    divisionSlug: 'custom-extrusions',
    name: 'Square & Rectangular Hollow Profiles',
    slug: 'square-rectangular-profiles',
    summary: 'Standard and bespoke square and rectangular tubing for structural frameworks, columns, and machine skids.',
    description: 'Extruded box sections offering uniform wall thickness, sharp 90-degree corners, and high torsional stiffness.',
    coverImage: '/media/catalog/01_square_rectangular_hollow_profiles.webp',
    technicalApplications: ['Structural Building Columns', 'Machine Skids', 'Transport Frames', 'Industrial Racks'],
    supportedFinishes: ['MILL_FINISH', 'ANODIZED', 'POWDER_COATED'],
    alloys: ['6063-T6', '6061-T6', '6005A-T6'],
    tempers: ['T5', 'T6'],
    systemsCount: 2,
    order: 6,
    seo: {
      title: 'Square & Rectangular Hollow Aluminium Profiles | Box Sections | LELOI METAL',
      description: 'Precision extruded square and rectangular aluminium box sections for structural framing and columns.',
      keywords: ['square aluminium tubing', 'rectangular hollow profiles', 'aluminium box section']
    }
  },
  {
    id: 'fam-cst-07',
    divisionId: 'custom-extrusions',
    divisionSlug: 'custom-extrusions',
    name: 'Equal & Unequal Angle Profiles',
    slug: 'angles',
    summary: 'L-shaped aluminium angles engineered for 90-degree corner stiffening, brackets, and structural framing flanges.',
    description: 'Extruded angle sections with sharp or radiused internal corners engineered for high load transfer in structural joints.',
    coverImage: '/media/catalog/04_angle_profiles.webp',
    technicalApplications: ['Corner Stiffeners', 'Curtain Wall Brackets', 'Solar Mount Cleats', 'Framing Flanges'],
    supportedFinishes: ['MILL_FINISH', 'ANODIZED', 'POWDER_COATED'],
    alloys: ['6063-T6', '6061-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 7,
    seo: {
      title: 'Equal & Unequal Aluminium Angles | L-Profile Extrusions | LELOI METAL',
      description: 'Extruded aluminium angle profiles in 6061-T6 and 6063-T6 for corner bracing and structural bracket fabrication.',
      keywords: ['aluminium angles', 'equal leg angle aluminium', 'unequal angle profiles', 'L-shaped extrusion']
    }
  },
  {
    id: 'fam-cst-08',
    divisionId: 'custom-extrusions',
    divisionSlug: 'custom-extrusions',
    name: 'U-Channel & C-Profile Extrusions',
    slug: 'channels',
    summary: 'Standard and deep-leg U-channels and C-profiles for glass retention, sliding tracks, and cable raceways.',
    description: 'Extruded channel sections with parallel or tapered flanges engineered for exact fit with glass panels and rolling hardware.',
    coverImage: '/media/catalog/05_u_channel_profiles.webp',
    technicalApplications: ['Glass Base Channels', 'Sliding Door Tracks', 'Electrical Wiring Raceways', 'Perimeter Retainers'],
    supportedFinishes: ['MILL_FINISH', 'ANODIZED', 'POWDER_COATED'],
    alloys: ['6063-T5', '6063-T6'],
    tempers: ['T5', 'T6'],
    systemsCount: 2,
    order: 8,
    seo: {
      title: 'Aluminium Channels & C-Profiles | U-Channel Extrusions | LELOI METAL',
      description: 'Extruded aluminium U-channels and C-profiles for glass holding, sliding tracks, and structural raceways.',
      keywords: ['aluminium U-channel', 'C-profile aluminium', 'channel extrusions', 'glass channel']
    }
  },
  {
    id: 'fam-cst-09',
    divisionId: 'custom-extrusions',
    divisionSlug: 'custom-extrusions',
    name: 'I-Beam & H-Beam Structural Profiles',
    slug: 'structural-profiles',
    summary: 'Wide-flange H-profiles and high moment-of-inertia I-beams for heavy load-bearing structural spans.',
    description: 'High-strength structural beams designed to replace heavy steel sections, providing 60% weight reduction without compromising load capacity.',
    coverImage: '/media/catalog/07_i_beam_profiles.webp',
    technicalApplications: ['Overhead Monorails', 'Gantry Beams', 'Trailer Chassis Main Rails', 'Pedestrian Bridge Decks'],
    supportedFinishes: ['MILL_FINISH', 'ANODIZED'],
    alloys: ['6061-T6', '6082-T6'],
    tempers: ['T6'],
    systemsCount: 2,
    order: 9,
    seo: {
      title: 'Structural Aluminium I-Beams & H-Beams | Load-Bearing Spans | LELOI METAL',
      description: 'High-strength 6061-T6 and 6082-T6 aluminium I-beams and H-beams for structural spans and heavy transport chassis.',
      keywords: ['aluminium I-beam', 'aluminium H-beam', 'structural aluminium beams', 'wide flange aluminium']
    }
  },
  {
    id: 'fam-cst-10',
    divisionId: 'custom-extrusions',
    divisionSlug: 'custom-extrusions',
    name: 'Architectural Decorative & Fluted Profiles',
    slug: 'decorative-profiles',
    summary: 'Aesthetic fluted slats, scalloped moldings, and decorative border extrusions with flawless surface quality.',
    description: 'Extruded ornamental profiles engineered for luxury furniture, interior architectural accents, and high-end cabinetry.',
    coverImage: '/media/catalog/16_led_lighting_profiles.webp',
    technicalApplications: ['Luxury Furniture Framing', 'Interior Wall Accent Slats', 'Cabinet Edge Pulls', 'Picture Framing'],
    supportedFinishes: ['ANODIZED', 'POWDER_COATED', 'WOOD_GRAIN'],
    alloys: ['6063-T5'],
    tempers: ['T5'],
    systemsCount: 2,
    order: 10,
    seo: {
      title: 'Decorative & Fluted Aluminium Profiles | Aesthetic Extrusions | LELOI METAL',
      description: 'Custom fluted, reeded, and ornamental aluminium extrusions for luxury architectural interiors and bespoke furniture.',
      keywords: ['fluted extrusion', 'decorative aluminium profiles', 'ornamental extrusions']
    }
  },
  {
    id: 'fam-cst-11',
    divisionId: 'custom-extrusions',
    divisionSlug: 'custom-extrusions',
    name: 'Bespoke Made-to-Drawing Extrusions',
    slug: 'made-to-drawing',
    summary: 'Confidential custom extrusion profiles manufactured strictly to client proprietary 2D/3D CAD models.',
    description: 'End-to-end bespoke extrusion service from die design and simulation to trial sampling and volume export with strict NDA protection.',
    coverImage: '/media/catalog/23_custom_aluminium_parts.webp',
    technicalApplications: ['Patented Systems', 'Proprietary OEM Machinery', 'Confidential Consumer Devices', 'Custom Rail Systems'],
    supportedFinishes: ['MILL_FINISH', 'ANODIZED', 'POWDER_COATED'],
    alloys: ['6063', '6061', '6005A', '6082'],
    tempers: ['T5', 'T6'],
    systemsCount: 2,
    order: 11,
    seo: {
      title: 'Made-to-Drawing Aluminium Extrusions | Bespoke Dies | LELOI METAL',
      description: 'Direct manufacturer bespoke aluminium extrusions made strictly to client proprietary drawings with full NDA protection.',
      keywords: ['made to drawing aluminium', 'bespoke aluminium extrusions', 'custom die manufacturing']
    }
  }
];

// ==============================================================================
// 3. CANONICAL PRODUCT SYSTEMS (ENGINEERED SYSTEMS WITH TECHNICAL DOSSIERS)
// ==============================================================================

export const CANONICAL_SYSTEMS: ProductSystem[] = [
  // Architectural Systems
  {
    id: 'sys-arch-win-65',
    familyId: 'fam-arch-01',
    divisionId: 'architectural',
    name: 'Thermal Break Casement Window System 65',
    slug: 'thermal-break-casement-window-65',
    summary: '65mm system depth European-standard thermal break casement window with multi-point locking.',
    description: 'Engineered architectural casement window system utilizing 24mm polyamide thermal barrier strips (PA66 GF25). Designed for high acoustic reduction (Rw up to 42 dB) and low thermal transmittance (Uw down to 1.4 W/m²K). Compatible with double and triple insulated glass units.',
    coverImage: '/media/catalog/18_window_door_profiles.webp',
    technicalSpecs: {
      'Frame Depth': '65 mm',
      'Sash Depth': '73 mm',
      'Thermal Barrier': '24 mm Polyamide PA66 GF25',
      'Glazing Thickness': '20 mm – 46 mm',
      'Air Permeability': 'Class 4 (EN 12207)',
      'Water Tightness': 'Class E900 (EN 12208)',
      'Wind Load Resistance': 'Class C5 (EN 12210)'
    },
    alloys: ['6063-T6'],
    tempers: ['T6'],
    surfaceFinishes: ['POWDER_COATED', 'ANODIZED', 'WOOD_GRAIN'],
    certifications: ['AAMA 2604', 'AAMA 2605', 'Qualicoat Class 2', 'ISO 9001:2015'],
    exportMarkets: ['United States', 'Australia', 'European Union', 'Middle East'],
    variants: [
      {
        id: 'var-win-65-01',
        systemId: 'sys-arch-win-65',
        name: 'Standard Outer Frame Profile 65mm',
        code: 'LM-W65-01',
        profileDimensions: '65 x 50 mm',
        weightPerMeter: '1.42 kg/m',
        wallThickness: '1.6 mm'
      },
      {
        id: 'var-win-65-02',
        systemId: 'sys-arch-win-65',
        name: 'Heavy Casement Sash Profile',
        code: 'LM-W65-02',
        profileDimensions: '73 x 70 mm',
        weightPerMeter: '1.78 kg/m',
        wallThickness: '1.8 mm'
      }
    ],
    seo: {
      title: 'Thermal Break Casement Window System 65 | LELOI METAL',
      description: '65mm architectural thermal break casement window system from Vietnam. Low U-value, multi-point lock hardware compatible.',
      keywords: ['thermal break window 65mm', 'casement window system', 'architectural aluminium window']
    }
  },
  {
    id: 'sys-arch-curt-150',
    familyId: 'fam-arch-02',
    divisionId: 'architectural',
    name: 'Unitized Curtain Wall System 150',
    slug: 'unitized-curtain-wall-150',
    summary: '150mm structural depth unitized facade system engineered for high-rise commercial towers.',
    description: 'High-performance unitized curtain wall system assembled and glazed off-site in controlled factory conditions. Engineered to absorb seismic inter-story drift and structural thermal movement.',
    coverImage: '/media/catalog/17_curtain_wall_profiles.webp',
    technicalSpecs: {
      'System Depth': '150 mm',
      'Sightline Width': '65 mm',
      'Wind Load Capacity': 'Tested to 4.5 kPa',
      'Air Infiltration': '< 0.1 L/(s·m²) at 300 Pa (ASTM E283)',
      'Water Penetration': 'No leakage at 1000 Pa (ASTM E331)',
      'Acoustic Rating': 'STC 44 / OITC 36'
    },
    alloys: ['6063-T6', '6061-T6'],
    tempers: ['T6'],
    surfaceFinishes: ['POWDER_COATED', 'ANODIZED'],
    certifications: ['ASTM E283', 'ASTM E330', 'ASTM E331', 'AAMA 501.1'],
    exportMarkets: ['United States', 'Canada', 'Australia', 'United Kingdom'],
    seo: {
      title: 'Unitized Curtain Wall System 150 | High-Rise Facades | LELOI METAL',
      description: '150mm unitized curtain wall system for high-rise building facades. Off-site glazed unit manufacturing in Vietnam.',
      keywords: ['unitized curtain wall', 'facade mullion 150mm', 'high-rise curtain wall system']
    }
  },

  // Industrial Profiles System
  {
    id: 'sys-ind-tslot-4040',
    familyId: 'fam-ind-01',
    divisionId: 'industrial-profiles',
    name: 'Metric T-Slot 4040 Modular Framing System',
    slug: 'metric-t-slot-4040-standard',
    summary: 'Global standard 40x40mm aluminium extrusion with 8mm slot width for automation frames.',
    description: 'The industry-standard 40x40mm profile featuring 4 symmetric 8mm T-slots. Clear anodized (10–15µm) with center bore sized for M8 thread tapping.',
    coverImage: '/media/catalog/09_t_slot_modular_profiles.webp',
    technicalSpecs: {
      'Dimensions': '40 x 40 mm',
      'Slot Width': '8.2 mm (Standard 8mm Series)',
      'Center Hole': 'Ø 6.8 mm (Tap to M8)',
      'Mass': '1.75 kg/m',
      'Moment of Inertia Ix': '9.2 cm⁴',
      'Moment of Inertia Iy': '9.2 cm⁴',
      'Section Modulus Wx': '4.6 cm³'
    },
    alloys: ['6063-T6'],
    tempers: ['T6'],
    surfaceFinishes: ['ANODIZED'],
    certifications: ['ISO 9001:2015', 'RoHS', 'REACH'],
    exportMarkets: ['Germany', 'United States', 'Japan', 'South Korea'],
    variants: [
      {
        id: 'var-tslot-4040-std',
        systemId: 'sys-ind-tslot-4040',
        name: '4040 Standard Profile 4-Slot',
        code: 'LM-TS4040-4S',
        profileDimensions: '40 x 40 mm',
        weightPerMeter: '1.75 kg/m'
      },
      {
        id: 'var-tslot-4040-light',
        systemId: 'sys-ind-tslot-4040',
        name: '4040 Light Profile 4-Slot',
        code: 'LM-TS4040-4SL',
        profileDimensions: '40 x 40 mm',
        weightPerMeter: '1.45 kg/m'
      }
    ],
    seo: {
      title: '4040 T-Slot Modular Aluminium Profile | Metric Series | LELOI METAL',
      description: 'Standard 40x40 metric T-slot extrusion from Vietnam. 8mm slot width, clear satin anodized, M8 tap center bore.',
      keywords: ['4040 t-slot', '40x40 aluminium extrusion', 'metric t-slot 40 series']
    }
  },

  // Solar Aluminium System
  {
    id: 'sys-sol-rail-r1',
    familyId: 'fam-sol-02',
    divisionId: 'solar',
    name: 'Heavy-Duty Solar Mounting Rail R1',
    slug: 'solar-mounting-rail-r1',
    summary: 'High-strength structural aluminium mounting rail for long-span commercial and utility PV installations.',
    description: 'Slotted structural mounting rail engineered in high-tensile 6005A-T6 alloy. Allows up to 2.4-meter purlin spans between rooftop brackets while maintaining high resistance to wind and snow uplift.',
    coverImage: '/media/catalog/12_solar_mounting_rails.webp',
    technicalSpecs: {
      'Height': '52 mm',
      'Width': '30 mm',
      'Alloy': '6005A-T6 (Yield Strength ≥ 240 MPa)',
      'Weight': '0.98 kg/m',
      'Anodizing Layer': '15 – 25 µm (Deep Anodized)',
      'Salt Spray Resistance': '> 3,000 Hours (ASTM B117)',
      'Span Capability': 'Up to 2.4 m'
    },
    alloys: ['6005A-T6'],
    tempers: ['T6'],
    surfaceFinishes: ['ANODIZED'],
    certifications: ['AS/NZS 1170.2', 'UL 2703', 'TÜV Rheinland', 'ISO 9001:2015'],
    exportMarkets: ['Australia', 'United States', 'Japan', 'Europe'],
    seo: {
      title: 'Solar Mounting Rail R1 | Heavy-Duty PV Racking | LELOI METAL',
      description: 'Structural 6005A-T6 solar mounting rail from Vietnam factory. 2.4m span rating, marine-grade deep anodizing.',
      keywords: ['solar mounting rail r1', 'heavy duty solar rail', 'PV racking profile 6005A']
    }
  },

  // Thermal Management System
  {
    id: 'sys-thm-comb-200',
    familyId: 'fam-thm-08',
    divisionId: 'thermal-management',
    name: 'Heavy Comb Extruded Heat Sink CH-200',
    slug: 'comb-heat-sink-ch-200',
    summary: '200mm wide extruded comb heat sink with 14:1 fin ratio for power inverter cooling.',
    description: 'Engineered high-aspect-ratio comb heat sink profile manufactured from high-purity 6063 aluminium. Optimized fin spacing ensures maximum convective heat transfer in forced-air cooling systems.',
    coverImage: '/media/catalog/15_heat_sink_profiles.webp',
    technicalSpecs: {
      'Base Width': '200 mm',
      'Fin Height': '75 mm',
      'Base Thickness': '12 mm',
      'Fin Thickness': '2.2 mm tapering to 1.5 mm',
      'Aspect Ratio': '14:1',
      'Thermal Conductivity': '≥ 205 W/(m·K)',
      'Thermal Resistance Rth': '0.18 °C/W (Forced Air 3 m/s)'
    },
    alloys: ['6063-T6'],
    tempers: ['T6'],
    surfaceFinishes: ['ANODIZED', 'MILL_FINISH'],
    certifications: ['RoHS Compliant', 'REACH Compliant', 'ISO 9001:2015'],
    exportMarkets: ['United States', 'Germany', 'Japan', 'South Korea'],
    seo: {
      title: 'Heavy Comb Heat Sink CH-200 | 200mm Width | LELOI METAL',
      description: '200mm wide extruded aluminium comb heat sink for power inverters and VFDs. High thermal conductivity 6063 alloy.',
      keywords: ['comb heat sink 200mm', 'inverter heat sink extrusion', 'high aspect ratio heat sink']
    }
  },

  // OEM Machined System
  {
    id: 'sys-oem-bracket-cnc',
    familyId: 'fam-oem-01',
    divisionId: 'oem-components',
    name: '5-Axis CNC Machined Structural Bracket Series',
    slug: '5-axis-cnc-structural-bracket',
    summary: 'Precision milled 6061-T6 structural connector brackets with micron tolerances.',
    description: 'Custom machined corner brackets, clevis joints, and suspension links milled from structural aluminium extrusions. 100% CMM inspected with material test certificates (MTR).',
    coverImage: '/media/catalog/22_cnc_machined_components.webp',
    technicalSpecs: {
      'Machining Center': 'DMG MORI 5-Axis CNC',
      'Dimensional Tolerance': '±0.02 mm',
      'True Position': 'Ø 0.05 mm',
      'Surface Roughness Ra': '0.8 µm',
      'Pre-Treatment': 'Ultrasonic solvent degreasing',
      'Finish': 'Type II Anodize Black 15µm'
    },
    alloys: ['6061-T6'],
    tempers: ['T6'],
    surfaceFinishes: ['ANODIZED'],
    certifications: ['ISO 9001:2015', 'IATF 16949 Compliant Process', 'CMM Inspection Reports'],
    exportMarkets: ['United States', 'Japan', 'European Union'],
    seo: {
      title: '5-Axis CNC Machined Aluminium Brackets | LELOI METAL',
      description: 'High-precision 5-axis CNC machined aluminium structural brackets from Vietnam. Tolerances down to ±0.02 mm.',
      keywords: ['CNC machined aluminium brackets', '5-axis aluminium machining', 'precision OEM aluminium parts']
    }
  }
];

// ==============================================================================
// 4. CANONICAL SURFACE FINISHES
// ==============================================================================

export const CANONICAL_FINISHES: ProductFinish[] = [
  {
    id: 'MILL_FINISH',
    name: 'Mill Finish (As Extruded)',
    code: 'MF',
    description: 'Natural extruded aluminium finish with uniform metallic appearance, deburred edges, and light protective oil.',
    technology: 'Direct hot extrusion followed by precision stretch-straightening and age-hardening in precipitation ovens.',
    standards: ['ASTM B221', 'EN 755-1'],
    warrantyYears: 1
  },
  {
    id: 'ANODIZED',
    name: 'Architectural & Industrial Anodizing',
    code: 'ANO',
    description: 'Electrochemical anodic oxide coating providing superior surface hardness, UV resistance, and corrosion protection.',
    technology: 'Sulfuric acid anodizing process with inorganic electrolytic coloring. Film thickness from 10µm (interior) to 25µm (marine grade).',
    standards: ['Qualanod', 'AAMA 611 Class I & II', 'MIL-A-8625 Type II & III'],
    warrantyYears: 20,
    colorOptions: ['Clear Satin Natural', 'Champagne', 'Light Bronze', 'Medium Bronze', 'Dark Bronze', 'Jet Black']
  },
  {
    id: 'POWDER_COATED',
    name: 'AkzoNobel Interpon D Architectural Powder Coating',
    code: 'PC',
    description: 'Super-durable architectural thermoset powder coating engineered to withstand extreme weathering, humidity, and UV exposure.',
    technology: 'Automated electrostatic powder spray line with multi-stage chrome-free chemical pre-treatment. Film thickness 60–80 µm.',
    standards: ['Qualicoat Class 1 & Class 2', 'AAMA 2604', 'AAMA 2605', 'GSB International'],
    warrantyYears: 30,
    colorOptions: ['RAL Classic Palettes', 'AkzoNobel Interpon D Textures', 'Metallic Mica Finishes', 'Custom Color Matching']
  },
  {
    id: 'ELECTROPHORESIS',
    name: 'Electrophoresis Coating',
    code: 'ED',
    description: 'Combined anodic oxide film sealed with a transparent high-molecular acrylic resin layer for ultra-smooth gloss and salt resistance.',
    technology: 'Electrophoretic deposition coating following anodic oxidation, cured at 180°C.',
    standards: ['JIS H8602', 'AAMA 612'],
    warrantyYears: 20,
    colorOptions: ['High Gloss Clear', 'Champagne Gloss', 'Bronze Gloss']
  },
  {
    id: 'WOOD_GRAIN',
    name: 'Sublimation Vacuum Wood Grain Transfer',
    code: 'WG',
    description: 'Realistic wood pattern transferred onto powder-coated aluminium profiles through high-temperature vacuum sublimation.',
    technology: 'Base polyurethane powder coat followed by vacuum suction transfer of high-definition wood grain film at 200°C.',
    standards: ['Qualideco Standard'],
    warrantyYears: 15,
    colorOptions: ['Golden Oak', 'Walnut', 'Teak', 'Mahogany', 'Ash Wood', 'Weathered Cedar']
  }
];
