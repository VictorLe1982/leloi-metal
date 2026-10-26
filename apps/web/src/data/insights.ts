/**
 * LELOI METAL — Technical insight articles.
 *
 * Extracted from the page component so the sitemap, the index page and
 * generateStaticParams all read the same list and cannot drift apart.
 */

export interface ArticleData {
  slug: string;
  /** Full descriptive headline, rendered as the page H1. */
  title: string;
  /** Shorter title for the <title> tag; long H1s get truncated in SERPs. */
  seoTitle?: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: string;
  summary: string;
  /** Topic tags shown on the index and used to relate articles to each other. */
  tags?: string[];
  /** Product family slugs this article supports — drives the content cluster. */
  relatedFamilies?: string[];
  sources: { name: string; url: string; note: string }[];
  sections: {
    heading: string;
    content: string[];
    table?: {
      headers: string[];
      rows: string[][];
    };
    callout?: {
      type: 'tip' | 'warning' | 'info';
      title: string;
      text: string;
    };
  }[];
}

export const ARTICLES: Record<string, ArticleData> = {
  '6061-vs-6063-aluminium-extrusion-comparison': {
    slug: '6061-vs-6063-aluminium-extrusion-comparison',
    title: '6061 vs 6063 Aluminium Extrusions: Metallurgical Comparison, Machinability & Selection Guide',
    seoTitle: '6061 vs 6063 Aluminium: Which Alloy to Specify | LELOI METAL',
    category: 'Alloy Metallurgy & Engineering',
    readTime: '8 min read',
    publishedAt: 'September 2026',
    author: 'Metallurgical Engineering Desk, LELOI METAL',
    summary:
      'A thorough engineering comparison between 6061-T6 structural alloy and 6063-T5 architectural extrusion profiles. Detailed comparison of yield strength, anodizing surface finish, CNC machinability, and cost factors.',
    tags: ['6061-T6', '6063-T5', 'DFM Engineering', 'CNC Machining', 'Anodizing'],
    relatedFamilies: ['solid-extrusions', 'cnc-machined-components', 'structural-profiles'],
    sources: [
      {
        name: 'ASTM B221 Standard Specification for Aluminum and Aluminum-Alloy Extruded Bars, Rods, Wire, Profiles, and Tubes',
        url: 'https://www.astm.org/b0221_b0221m-21.html',
        note: 'Governing chemical composition and minimum tensile property standards.'
      },
      {
        name: 'The Aluminum Association Extrusion Design Manual',
        url: 'https://www.aluminum.org',
        note: 'Dimensional tolerances and die design guidelines.'
      }
    ],
    sections: [
      {
        heading: '1. Executive Summary: Core Metallurgical Differences',
        content: [
          'Alloy 6061 and Alloy 6063 belong to the 6000-series Al-Mg-Si (Aluminium-Magnesium-Silicon) heat-treatable alloys, which dominate over 80% of all commercial extruded aluminium worldwide.',
          'While both alloys achieve elevated mechanical properties through precipitation hardening (solution heat treatment followed by artificial aging to T5 or T6 temper), their chemical proportions dictate fundamentally different physical behaviors during extrusion and end use.',
          'In short: 6061 is formulated for structural strength, fracture toughness, and CNC machinability; whereas 6063 is formulated for maximum extrudability, intricate thin-wall geometry, and pristine anodized surface cosmetics.'
        ]
      },
      {
        heading: '2. Chemical Composition & Elemental Mechanics',
        content: [
          'The fundamental difference lies in the concentration of Magnesium (Mg), Silicon (Si), and trace additions of Copper (Cu) and Chromium (Cr).',
          'Alloy 6061 incorporates approximately 0.15% to 0.40% Copper and 0.04% to 0.35% Chromium. Copper enhances precipitation hardening, substantially increasing ultimate tensile and yield strength. However, Copper reduces natural corrosion resistance slightly and diminishes the optical clarity of anodized oxide layers.',
          'In contrast, Alloy 6063 maintains strictly capped copper (max 0.10%) and virtually zero chromium. The primary strengthening precipitate is purely Mg2Si, enabling fluid metal flow through extrusion dies without premature surface tearing.'
        ],
        table: {
          headers: ['Element', 'Alloy 6061 (wt %)', 'Alloy 6063 (wt %)'],
          rows: [
            ['Silicon (Si)', '0.40 – 0.80', '0.20 – 0.60'],
            ['Iron (Fe)', 'max 0.70', 'max 0.35'],
            ['Copper (Cu)', '0.15 – 0.40', 'max 0.10'],
            ['Manganese (Mn)', 'max 0.15', 'max 0.10'],
            ['Magnesium (Mg)', '0.80 – 1.20', '0.45 – 0.90'],
            ['Chromium (Cr)', '0.04 – 0.35', 'max 0.10'],
            ['Zinc (Zn)', 'max 0.25', 'max 0.10'],
            ['Titanium (Ti)', 'max 0.15', 'max 0.10'],
            ['Aluminium (Al)', 'Remainder (approx. 95.8–98.6%)', 'Remainder (approx. 97.5–99.3%)']
          ]
        }
      },
      {
        heading: '3. Mechanical Properties: Yield, Tensile & Hardness',
        content: [
          'When designing load-bearing frames, yield strength (Rp0.2) is the critical engineering threshold at which plastic deformation occurs.',
          'Alloy 6061-T6 provides a minimum yield strength of 240 MPa (typically 275 MPa in certified production test coupons), which is nearly double the yield strength of standard architectural 6063-T5 (130–145 MPa).',
          'For components subjected to dynamic loads, structural deflection limits, or cyclic stresses—such as automation gantry tracks, heavy vehicle chassis, or offshore platforms—6061-T6 is the mandatory baseline.'
        ],
        table: {
          headers: ['Mechanical Property', '6063-T5', '6063-T6', '6061-T6'],
          rows: [
            ['Tensile Strength Rm (MPa)', '175 – 190', '215 – 245', '290 – 310'],
            ['Yield Strength Rp0.2 (MPa)', '130 – 145', '170 – 210', '240 – 275'],
            ['Elongation A50 (%)', '10 – 12', '8 – 10', '9 – 12'],
            ['Webster Hardness (HW)', '8 – 10', '11 – 12', '14 – 16'],
            ['Brinell Hardness (HBW)', '65', '75', '95'],
            ['Thermal Conductivity (W/m·K)', '209', '201', '167']
          ]
        }
      },
      {
        heading: '4. Extrudability, Die Complexity & Surface Finishing',
        content: [
          'Extrudability is where 6063 decisively outperforms 6061. Alloy 6063 can be extruded at speeds exceeding 40 to 60 meters per minute through multi-cavity dies with wall thicknesses down to 0.8 mm without surface tearing.',
          'Because 6061 requires significantly higher extrusion pressures and lower run-out speeds (15–25 m/min) to prevent hot shortness, tooling wear is accelerated, and hollow profiles with high tongue ratios carry higher die costs.',
          'For surface finishing, 6063 provides a mirror-clean anodizing response with uniform matte or clear electrolytic deposition. 6061 anodizes to a slightly darker greyish hue due to microscopic intermetallic copper/silicon precipitates.'
        ],
        callout: {
          type: 'tip',
          title: 'LELOI METAL Engineering Recommendation',
          text: 'Specify 6063-T5 for architectural curtain walls, solar mounting rails, and visible enclosures where aesthetics and tight extrusion cost control dominate. Reserve 6061-T6 for structural machine components requiring extensive CNC milling, structural bolting, or dynamic load capacity.'
        }
      }
    ]
  },
  'vietnam-aluminium-extrusion-export-guide': {
    slug: 'vietnam-aluminium-extrusion-export-guide',
    title: 'The Complete Guide to Sourcing Aluminium Extrusions from Vietnam: Tariffs, FTAs & Logistics',
    seoTitle: 'Sourcing Aluminium Extrusions from Vietnam | LELOI METAL',
    category: 'International Trade & Supply Chain',
    readTime: '11 min read',
    publishedAt: 'September 2026',
    author: 'International Trade Compliance Desk, LELOI EXIM',
    summary:
      'How international procurement teams leverage CPTPP, EVFTA, and VKFTA to import originating aluminium profiles with 0% preferential duty. Step-by-step documentation, billet origin tracing, and ocean shipping lanes.',
    tags: ['Vietnam Export', 'CPTPP', 'EVFTA', 'HS 7604', 'Tariffs & Customs'],
    relatedFamilies: ['made-to-drawing', 'solar-module-frames', 'windows-doors'],
    sources: [
      {
        name: 'Ministry of Industry and Trade of Vietnam (MOIT) Foreign Trade Agency',
        url: 'https://moit.gov.vn',
        note: 'Statutory rules of origin for CPTPP and EVFTA Certificates of Origin.'
      },
      {
        name: 'European Commission Access2Markets Portal (EVFTA Origin Protocols)',
        url: 'https://trade.ec.europa.eu/access-to-markets',
        note: 'Preferential tariff transition schedules for HS 7604.21 and 7604.29.'
      }
    ],
    sections: [
      {
        heading: '1. The Strategic Shift to Vietnam in Global Aluminium Procurement',
        content: [
          'Over the past five years, the global aluminium extrusion landscape has undergone structural realignment. Western trade remedies against Chinese aluminium—including US Section 301 and anti-dumping duties exceeding 200%, Canada SIMA duties up to 101.9%, and EU anti-dumping duties—have forced international buyers to establish compliant, resilient supply chains.',
          'Vietnam has emerged as the premier manufacturing and export hub in Southeast Asia, offering robust industrial infrastructure, competitive energy inputs, and a network of comprehensive Free Trade Agreements (FTAs).'
        ]
      },
      {
        heading: '2. Free Trade Agreement Advantages: 0% Tariff Pathways',
        content: [
          'Vietnamese aluminium profiles (HS 7604.10, 7604.21, 7604.29) enter major consumer markets under preferential tariff schedules, subject to statutory rules of origin compliance:',
          '• Canada (CPTPP): 0% import duty with valid Certificate of Origin Form CPTPP (vs. 5% MFN rate and punitive anti-dumping on non-compliant sources).',
          '• European Union (EVFTA): Preferential tariff protocol transitioning towards 0% duty with EUR.1 Certificate of Origin (vs. 7.5% MFN rate).',
          '• South Korea (VKFTA): 0% duty on originating profiles with electronic C/O exchange (vs. 8% MFN rate).',
          '• Japan (CPTPP / VJEPA): 0% duty on industrial profiles meeting regional value content requirements.'
        ]
      },
      {
        heading: '3. Rules of Origin (RoO) and Anti-Circumvention Compliance',
        content: [
          'Importing authorities worldwide strictly monitor aluminium imports to prevent illegal transshipment or circumvention. To legally qualify for 0% preferential rates, Vietnamese exporters must demonstrate substantive manufacturing transformation.',
          'At LELOI METAL, every export consignment conforms to strict Chapter 3 Rules of Origin. Production starts from primary or secondary alloy billets, cast or smelted and extruded with full heat-number traceability through extrusion, heat treatment, surface finishing, and CNC fabrication in Vietnam.',
          'Shipments are backed by registered Form CPTPP, EUR.1, or VKFTA Certificates of Origin issued by the Ministry of Industry and Trade (MOIT) or authorized chambers.'
        ],
        callout: {
          type: 'info',
          title: 'Traceability Guarantee',
          text: 'LELOI METAL maintains lot-specific chemical Mill Test Certificates (MTC) according to EN 10204 3.1, linking every extrusion bundle to its raw billet melt analysis.'
        }
      },
      {
        heading: '4. Shipping Routes, Lead Times & Container Packing',
        content: [
          'Vietnam features deep-water international container terminals connected to direct transpacific and European ocean lines:',
          '• Northern Vietnam (Hai Phong Port / Lach Huyen Deep-Sea Terminal): Direct container services to North America West Coast (Vancouver / Long Beach: 18–22 days transit) and Europe (Hamburg / Rotterdam: 28–34 days).',
          '• Southern Vietnam (Cai Mep / Cat Lai Port): Direct services across Asia, Australia, and the Middle East (Jebel Ali: 14–18 days).',
          'All export profiles are packed in heavy-duty wooden crates or steel-strapped bundles with protective poly film, foam separators, and silica desiccant bags to prevent moisture staining during sea transit.'
        ]
      }
    ]
  },
  'cbam-guide-for-aluminium-importers': {
    slug: 'cbam-guide-for-aluminium-importers',
    title: 'EU CBAM Compliance for Aluminium Extrusion Importers: Carbon Accounting & Reporting Requirements',
    seoTitle: 'EU CBAM Guide for Aluminium Importers | LELOI METAL',
    category: 'Sustainability & ESG Compliance',
    readTime: '9 min read',
    publishedAt: 'September 2026',
    author: 'Sustainability & ESG Team, LELOI METAL',
    summary:
      'Navigating EU Regulation 2023/956 Carbon Border Adjustment Mechanism (CBAM) for HS 7604 aluminium profiles. How LELOI METAL tracks direct and indirect embedded emissions from smelter billet to finished profile.',
    tags: ['CBAM', 'EU Regulation 2023/956', 'Carbon Emissions', 'ESG'],
    relatedFamilies: ['curtain-wall-facade', 'solar-mounting-rails'],
    sources: [
      {
        name: 'Regulation (EU) 2023/956 of the European Parliament and of the Council on establishing a carbon border adjustment mechanism',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R0956',
        note: 'Primary EU legislative framework governing embedded carbon obligations.'
      },
      {
        name: 'European Commission CBAM Guidance for Importers and Third-Country Producers',
        url: 'https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en',
        note: 'Standardized communication template and greenhouse gas calculation methodologies.'
      }
    ],
    sections: [
      {
        heading: '1. What Is EU CBAM and Why Does It Impact Aluminium?',
        content: [
          'The European Union Carbon Border Adjustment Mechanism (CBAM), established by Regulation (EU) 2023/956, has been in its definitive regime since 1 January 2026. The transitional reporting phase that ran to the end of 2025 is over. CBAM is designed to equalise the price of carbon between EU production covered by the Emissions Trading System and imported goods.',
          'Aluminium is one of the covered sectors, alongside steel, cement, fertilisers, hydrogen and electricity. HS Chapter 76 headings in scope include 7604 (bars, rods and profiles), 7606 (plates and sheets), 7608 (tubes and pipes) and 7610 (structures and parts of structures).',
          'Two things changed materially in the definitive regime. Reporting moved from quarterly reports to a single annual CBAM declaration — the first covering calendar year 2026 is due by 30 September 2027 — and importers must now surrender CBAM certificates against the embedded emissions they declare. A de minimis exemption also applies: importers bringing in less than 50 tonnes of CBAM goods per calendar year are out of scope.'
        ]
      },
      {
        heading: '2. Direct vs. Indirect Embedded Emissions in Aluminium Extrusions',
        content: [
          'For aluminium extrusions (HS 7604), CBAM requires calculating both Direct and Indirect embedded emissions expressed in tonnes of CO2 equivalent per tonne of product (t CO2e / t product):',
          '• Direct Emissions: Greenhouse gases emitted during the physical fabrication process (e.g., combustion of natural gas or LPG in extrusion billet reheat furnaces, aging ovens, and powder coating curing lines).',
          '• Indirect Emissions: Greenhouse gases resulting from the generation of electricity consumed during production, including press hydraulics, cooling systems, anodizing rectifiers, and auxiliary equipment.',
          '• Precursor Embedded Emissions: The embedded carbon intensity of the input aluminium billet itself, which varies dramatically depending on whether the primary smelting used hydro, nuclear, gas, or coal-fired power.'
        ]
      },
      {
        heading: '3. LELOI METAL Decarbonization Roadmap & Reporting Dossiers',
        content: [
          'To support our European partners, LELOI METAL supplies the batch traceability and production-route data an importer needs for its annual CBAM declaration. Note that a non-EU producer cannot hold CBAM declarant status — that status requires establishment in the EU customs territory and rests with the importer.',
          'Key elements of our reporting package include:',
          '1. Specific Embedded Direct Emissions (Scope 1) verified per production campaign.',
          '2. Specific Embedded Indirect Emissions (Scope 2) calculated against local grid emission factors and certified renewable energy attribution.',
          '3. Raw Billet Precursor Declaration from certified low-carbon smelters utilizing hydroelectric power, achieving significantly lower carbon intensity than the global industry average.'
        ],
        callout: {
          type: 'tip',
          title: 'CBAM Ready for 2026+',
          text: 'LELOI METAL supplies ready-to-file CBAM communication templates alongside your commercial invoice and EUR.1 certificate, streamlining submission to your national competent authority.'
        }
      }
    ]
  },

  'anodizing-vs-powder-coating-aluminium': {
    slug: 'anodizing-vs-powder-coating-aluminium',
    title:
      'Anodizing vs Powder Coating for Aluminium Extrusions: How to Choose the Right Finish',
    seoTitle: 'Anodizing vs Powder Coating Aluminium | LELOI METAL',
    category: 'Surface Finishing',
    readTime: '9 min read',
    publishedAt: 'September 2026',
    author: 'Surface Finishing Desk, LELOI METAL',
    summary:
      'Anodizing is a conversion of the metal itself; powder coating is a film applied on top of it. That single difference drives colour repeatability, edge durability, dimensional change and cost. A specification guide for architects, fabricators and OEM buyers.',
    tags: ['Anodizing', 'Powder Coating', 'AAMA 2604', 'Qualicoat', 'Surface Finish'],
    relatedFamilies: ['windows-doors', 'curtain-wall-facade', 'louvers-sunshade', 'powder-coated-components'],
    sources: [
      {
        name: 'EN ISO 7599 — Anodizing of aluminium and its alloys',
        url: 'https://www.iso.org/standard/40264.html',
        note: 'Specification for anodic oxidation coatings on aluminium.'
      },
      {
        name: 'AAMA 2603 / 2604 / 2605 — Voluntary specification for organic coatings',
        url: 'https://aamanet.org/',
        note: 'Performance tiers for architectural powder and liquid coatings.'
      },
      {
        name: 'Qualicoat Specifications',
        url: 'https://www.qualicoat.net/',
        note: 'Quality label for organic coating on aluminium in architectural applications.'
      }
    ],
    sections: [
      {
        heading: '1. The Physical Difference That Decides Everything Else',
        content: [
          'Anodizing is an electrolytic process that grows an oxide layer out of the aluminium itself. The finish is not applied to the metal; it is part of the metal. Roughly half the layer grows outward from the original surface and half grows inward.',
          'Powder coating is a dry polymer powder applied electrostatically and then cured in an oven, forming a film that sits on top of the metal, typically 60 to 120 microns thick.',
          'Almost every practical difference between the two follows from this. An integral oxide cannot chip or peel, but its colour depends on the metallurgy of the batch. An applied film gives exact colour control, but it is a film, and films are vulnerable at edges.'
        ]
      },
      {
        heading: '2. Colour Repeatability Across Project Phases',
        content: [
          'This is the most common source of dispute on multi-phase construction projects, and it is decided before you place the order.',
          'Powder coating colour is defined by the powder, not by the metal. A RAL 9016 profile coated today and another coated in eighteen months will match, because the same powder is applied. For a facade delivered in phases, or for replacement parts years later, this is decisive.',
          'Anodized colour is produced by the oxide layer interacting with the alloy, the billet chemistry and the process conditions. Two batches of the same alloy anodized to the same specification can still differ visibly side by side, particularly in bronze and champagne tones. Extrusions destined for one visible elevation should be anodized in a single batch wherever possible.'
        ],
        callout: {
          type: 'warning',
          title: 'Specify batch grouping at RFQ stage',
          text: 'If anodized profiles from one order will sit adjacent on a visible elevation, state it on the purchase order. Batch grouping costs nothing if planned, and cannot be corrected after delivery.'
        }
      },
      {
        heading: '3. Durability, Edges and Damage',
        content: [
          'Because the anodic layer is integral, it cannot flake or peel. A scratch removes material rather than lifting a film. This makes anodizing the stronger choice for profiles that are handled repeatedly, slid against, or cleaned aggressively — sliding tracks, machine framing, and heat sink surfaces.',
          'Powder coating offers better impact and abrasion resistance across a flat face, but the vulnerable point is a cut edge or sharp corner, where film thickness thins. Profiles cut after coating expose bare aluminium at the cut face, which must be accepted or sealed.',
          'For exterior architectural exposure the governing factor is not the finish family but the specification tier. Class I anodizing at roughly 25 microns, or a powder system rated to AAMA 2604 or 2605, will both perform. A 15 micron anodize or an AAMA 2603 powder will not.'
        ],
        table: {
          headers: ['Consideration', 'Anodizing', 'Powder Coating'],
          rows: [
            ['Colour repeatability between batches', 'Variable — group batches', 'Exact — defined by the powder'],
            ['Colour range', 'Clear, bronze, champagne, black', 'Full RAL, metallics, wood grain'],
            ['Can chip or peel', 'No — integral to the metal', 'Possible at edges and corners'],
            ['Dimensional change per surface', 'Approx. half the layer, 12–13 µm', 'Full film, 60–120 µm'],
            ['Cut after finishing', 'Cut face bare but corrosion-stable', 'Cut face exposes bare metal'],
            ['Exterior architectural tier', 'Class I, approx. 25 µm', 'AAMA 2604 / 2605'],
            ['Cost behaviour', 'Lower for clear, higher for colours', 'Stable across colours']
          ]
        }
      },
      {
        heading: '4. Dimensional Effects Engineers Often Miss',
        content: [
          'Both finishes change the dimensions of the part, and on tight-fitting assemblies this matters.',
          'Anodizing grows roughly half the specified layer outward. A 25 micron Class I anodize therefore adds around 12 to 13 microns per surface. On a snap-fit or sliding track this is usually tolerable, but it should be allowed for on the drawing.',
          'Powder coating adds the full film thickness, commonly 60 to 120 microns per surface. On mating faces, screw ports and gear channels this is significant, and those areas are normally masked or machined after coating.',
          'State on your drawing which surfaces are functional. We mask or post-machine them rather than letting finish thickness consume the fit.'
        ],
        callout: {
          type: 'tip',
          title: 'Machining sequence changes the result',
          text: 'Machining after anodizing exposes bare aluminium at the cut. Machining before coating means the coating covers the feature and eats into the tolerance. Tell us the required sequence at RFQ stage — it is not recoverable later.'
        }
      },
      {
        heading: '5. A Practical Decision Rule',
        content: [
          'Choose powder coating when colour is specified by the architect, when the project is delivered in phases, when a non-metallic or wood-grain appearance is required, or when replacement parts must match years later.',
          'Choose anodizing when the metallic appearance of aluminium is the design intent, when surfaces will be slid against or handled repeatedly, when thermal emissivity matters as it does on heat sinks, or when the profile will be cut to length after finishing.',
          'Choose mill finish when the profile is concealed, will be finished by a third party, or is structural and unexposed. Paying for a finish on a hidden member is a common and avoidable cost.'
        ]
      },
      {
        heading: '6. What LELOI METAL Supplies',
        content: [
          'Our group plant in Hung Yen operates two German-standard powder coating lines with multi-stage chemical pre-treatment, plus a wood-grain film transfer oven for sublimation finishes on coated profiles.',
          'Anodizing is supplied from 10 to 25 microns in natural clear, satin, champagne, bronze and matte black, with layer thickness verified per batch before release.',
          'Warranties of up to 10 years are available on approved AkzoNobel powder coating systems. The duration that applies depends on the coating system, project location and exposure, surface preparation and the applicable warranty conditions, and is confirmed in writing with your quotation.'
        ]
      }
    ]
  },

  'en-755-9-aluminium-extrusion-tolerances': {
    slug: 'en-755-9-aluminium-extrusion-tolerances',
    title:
      'EN 755-9 Aluminium Extrusion Tolerances: What You Can and Cannot Demand on a Drawing',
    seoTitle: 'EN 755-9 Extrusion Tolerances Explained | LELOI METAL',
    category: 'Standards & Tolerances',
    readTime: '10 min read',
    publishedAt: 'September 2026',
    author: 'Tooling & Quality Engineering, LELOI METAL',
    summary:
      'Most tolerance disputes in extrusion come from a drawing that applies machining tolerances to an extruded feature. A working guide to EN 755-9 and ASTM B221: what the standards permit, why hollow sections behave differently, and when to specify secondary machining instead.',
    tags: ['EN 755-9', 'ASTM B221', 'EN 12020-2', 'Tolerances', 'Die Design'],
    relatedFamilies: ['made-to-drawing', 'hollow-extrusions', 'complex-extrusions', 'precision-cut-components'],
    sources: [
      {
        name: 'EN 755-9:2016 — Extruded rod, bar, tube and profiles: tolerances',
        url: 'https://standards.iteh.ai/catalog/standards/cen/',
        note: 'Part 9 covers profiles: tolerances on dimensions and form.'
      },
      {
        name: 'ASTM B221 — Aluminium extruded bars, rods, wire, profiles and tubes',
        url: 'https://www.astm.org/b0221-21.html',
        note: 'North American equivalent tolerance specification.'
      },
      {
        name: 'EN 12020-2 — Precision profiles in EN AW-6060 and EN AW-6063',
        url: 'https://standards.iteh.ai/catalog/standards/cen/',
        note: 'Tighter tolerance class for precision architectural profiles.'
      }
    ],
    sections: [
      {
        heading: '1. Why Extrusion Tolerances Are Not Machining Tolerances',
        content: [
          'An extruded profile is formed by pushing hot metal through a steel die. The die deflects under pressure, the metal cools and contracts, and the section is then stretched to straighten it. Every one of those steps introduces variation that no amount of care eliminates.',
          'A machined feature is cut from solid metal by a tool under closed-loop position control. The two processes are not comparable, and a drawing that applies ISO 2768-f to an extruded wall thickness is asking for something the process cannot deliver.',
          'This is the root of most tolerance disputes. The fix is not to argue about the standard; it is to identify which features are genuinely critical and machine those after extrusion.'
        ],
        callout: {
          type: 'info',
          title: 'The question worth asking',
          text: 'Not "how tight can you hold it" but "which three dimensions actually matter for assembly". Mark those on the drawing and we engineer around them — usually by machining those features rather than chasing them at the press.'
        }
      },
      {
        heading: '2. How EN 755-9 Structures Tolerance',
        content: [
          'EN 755-9 does not give a single number. It scales permitted deviation by the size of the dimension, and it treats dimensions differently depending on whether they span metal only or span across a hollow cavity.',
          'A dimension measured entirely within solid metal is controlled relatively tightly, because it is governed mostly by the die aperture. A dimension spanning a void — the outside width of a hollow box section, for example — is governed by how the mandrel sits relative to the outer die under load, and carries a wider permitted deviation.',
          'The standard separately controls form: straightness, twist, flatness of a nominally flat face, angularity, and contour of curved surfaces. These are the characteristics most often omitted from customer drawings, and most often disputed on arrival.'
        ],
        table: {
          headers: ['Characteristic', 'Governed by', 'Typical behaviour'],
          rows: [
            ['Dimension across solid metal', 'Die aperture', 'Tightest class available'],
            ['Dimension across a hollow', 'Mandrel position under load', 'Noticeably wider than solid'],
            ['Wall thickness', 'Die and metal flow balance', 'Varies around the perimeter'],
            ['Straightness', 'Stretching and cooling', 'Specified per unit length'],
            ['Twist', 'Asymmetric metal flow', 'Worse on asymmetric sections'],
            ['Flatness of a wide face', 'Cooling rate across the face', 'Wide thin faces tend to draw in'],
            ['Cut length', 'Saw setup', 'Independent of extrusion tolerance']
          ]
        }
      },
      {
        heading: '3. Precision Classes: EN 12020-2',
        content: [
          'For profiles in EN AW-6060 and EN AW-6063 destined for architectural use, EN 12020-2 defines a tighter tolerance regime than general EN 755-9. It is the right reference when a window or door system must assemble consistently.',
          'A precision class is not free. It constrains die design, reduces extrusion speed, and raises scrap rate at start-up. It is worth specifying where it changes assembly outcomes, and worth dropping where it does not.',
          'If you are quoting the same tolerance class across every dimension of a complex section, you are almost certainly paying for precision on features that do not need it.'
        ]
      },
      {
        heading: '4. Design Choices That Make Tolerance Achievable',
        content: [
          'Tolerance is decided at die design, not at inspection. A few choices in section geometry make a large difference to what is achievable.',
          'Keep wall thickness as uniform as function allows. Thick and thin sections adjacent to one another cool at different rates, producing distortion that no stretching operation fully removes.',
          'Avoid unnecessarily deep, narrow channels. The die tongue forming such a channel is the weakest part of the tool; it deflects under pressure, which appears as dimensional drift along the run and shortens die life.',
          'Generous internal radii at corners help metal flow and reduce both tearing and local thinning. Sharp internal corners are a common cause of inconsistent wall thickness.',
          'Where a snap-fit or sliding interface is involved, design the mating pair together and tell us which half carries the tolerance. Splitting a tight fit evenly across both halves doubles the difficulty.'
        ],
        callout: {
          type: 'tip',
          title: 'DFM review before the die is cut',
          text: 'Our tool engineers review wall thickness distribution, tongue ratios and corner radii before cutting, and return suggested changes. Changes at this stage cost nothing; changes afterwards mean a new die.'
        }
      },
      {
        heading: '5. What to Put on the Drawing',
        content: [
          'State the alloy and temper, and name the governing standard: EN 755-9, EN 12020-2 or ASTM B221. If the standard is unstated, the supplier applies their own and you have no basis for rejection.',
          'Mark critical dimensions explicitly and give them their own tolerance. Everything else can sit under the general standard.',
          'Specify form requirements — straightness per metre and permitted twist — where they matter for your assembly. Omitting them means the general class applies.',
          'Specify the finish and the required sequence, because anodizing and coating both change dimensions. See our companion guide on anodizing versus powder coating.',
          'State cut length and its tolerance separately from the extrusion tolerance. Cut length is a sawing operation and is held far tighter than any extruded dimension.'
        ]
      },
      {
        heading: '6. How We Verify and Certify',
        content: [
          'Profile cross-sections are checked against the die drawing during the run using optical projection, so drift is detected before a full batch is produced rather than after it ships.',
          'Alloy chemistry is confirmed by optical emission spectrometry against EN 573-3 limits on incoming billet, and hardness is verified after aging to confirm the specified temper.',
          'Results are compiled into an EN 10204 3.1 inspection certificate that accompanies the shipping documents, so your incoming inspection has a document to check against rather than a claim to trust.'
        ]
      }
    ]
  }
};

export const INSIGHT_SLUGS = Object.keys(ARTICLES);

export function getArticleBySlug(slug: string): ArticleData | undefined {
  return ARTICLES[slug];
}
