/**
 * LELOI METAL — Manufacturing capability dossiers.
 *
 * Installed equipment counts are held in data/company.ts (FACTORY_EQUIPMENT)
 * and rendered into these pages, so a machine is described in one place only.
 *
 * Truth policy (ADR-006): press force in tonnes, maximum CCD, machine bed
 * lengths and own-facility annual tonnage are still UNVERIFIED and therefore
 * stay unpublished. Presses are described by billet container diameter, which
 * is the figure management confirmed.
 */

export interface CapabilityFaq {
  question: string;
  answer: string;
}

export interface CapabilityDossier {
  slug: string;
  name: string;
  navLabel: string;
  headline: string;
  summary: string;
  /** Short intro written to be quotable verbatim by AI search engines. */
  answerBlock: string;
  processSteps: Array<{ title: string; detail: string }>;
  standards: string[];
  materials: string[];
  applications: string[];
  faqs: CapabilityFaq[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const CAPABILITY_DOSSIERS: CapabilityDossier[] = [
  {
    slug: 'aluminium-extrusion',
    name: 'Aluminium Extrusion Presses',
    navLabel: 'Extrusion Presses',
    headline: 'Aluminium Extrusion & Die Tooling',
    summary:
      'Horizontal extrusion lines with dual pullers, controlled quench and computer-managed aging ovens producing structural T5 and T6 tempers.',
    answerBlock:
      'LELOI METAL extrudes custom aluminium profiles at its group plant in Hung Yen, Vietnam on a 5-inch and a 6-inch extrusion press, working in 6063, 6061, 6005A and 6082 billet and supplying solid, hollow and semi-hollow geometries in T4, T5, T6 and T66 tempers. Dies are cut to each customer drawing and remain the confidential property of that customer.',
    processSteps: [
      {
        title: 'Die design & DFM review',
        detail:
          'Our tool engineers review wall thickness, tongue ratios, corner radii and the balance of metal flow before a die is cut, returning recommended changes that reduce both scrap and unit cost.'
      },
      {
        title: 'Billet heating & extrusion',
        detail:
          'Billets are heated to the alloy-specific working range and pressed through the die under controlled ram speed to hold dimensional consistency along the full run length.'
      },
      {
        title: 'Quench & stretch',
        detail:
          'Profiles are quenched on the run-out table to fix mechanical properties, then stretched to remove twist and bow before cut-to-length.'
      },
      {
        title: 'Age hardening',
        detail:
          'Aging ovens hold the time-temperature curve required for the specified temper, after which hardness is verified before the batch is released.'
      }
    ],
    standards: [
      'EN 755-9 — dimensional tolerances for extruded profiles',
      'ASTM B221 — standard specification for aluminium extruded bars, rods and profiles',
      'EN 573-3 — chemical composition of wrought aluminium alloys',
      'EN 10204 3.1 — mill test certificates issued per batch'
    ],
    materials: ['6063-T5 / T6', '6061-T6', '6005A-T6', '6082-T6', '6060-T66'],
    applications: [
      'Custom made-to-drawing OEM profiles',
      'Architectural window, door and facade systems',
      'Solar module frames and mounting rails',
      'Industrial T-slot and machine framing'
    ],
    faqs: [
      {
        question: 'Who owns the extrusion die once it is cut?',
        answer:
          'Dies cut from a customer drawing are dedicated to that customer, are not used for any other buyer, and are covered by a mutual non-disclosure agreement.'
      },
      {
        question: 'What is the minimum order quantity for a new custom profile?',
        answer:
          'Trial batches typically start in the 500–1000 kg range so a new die can be validated before committing to multi-container production volumes.'
      },
      {
        question: 'Which extrusion tolerances do you work to?',
        answer:
          'Standard production is held to EN 755-9 or ASTM B221. Tighter, project-specific tolerances are reviewed case by case against the submitted drawing.'
      },
      {
        question: 'What press sizes do you run, and what does that mean for my profile?',
        answer:
          'Our group plant in Hung Yen runs a 5-inch and a 6-inch extrusion press. The 5-inch press suits small and medium sections such as window profiles and T-slot framing; the 6-inch press handles larger circumscribing circle diameters such as curtain wall mullions, solar rails and wide heat sinks. Send your section drawing and we will confirm which press fits.'
      },
      {
        question: 'Can you handle volumes beyond the capacity of your own presses?',
        answer:
          'Yes. Alongside our group plant we work with four affiliated partner factories in Vietnam with a combined annual capacity of over 100,000 tonnes, which lets us run container-scale programmes in parallel without extending lead times.'
      }
    ],
    seo: {
      title: 'Aluminium Extrusion Manufacturing Vietnam | Custom Die Tooling | LELOI METAL',
      description:
        'Custom aluminium extrusion from Vietnam in 6063, 6061, 6005A and 6082. In-house die design, DFM review, controlled quench and T5/T6 aging to EN 755-9 and ASTM B221.',
      keywords: [
        'aluminium extrusion manufacturer vietnam',
        'custom aluminium extrusion die',
        'en 755-9 extrusion tolerance',
        '6063 t5 extrusion supplier',
        'aluminium profile extrusion factory'
      ]
    }
  },
  {
    slug: 'cnc-machining',
    name: 'Precision CNC Machining',
    navLabel: 'CNC Machining',
    headline: 'Precision CNC Machining & Fabrication',
    summary:
      'Long-bed CNC machining of extruded aluminium profiles: milling, slotting, pocketing, drilling, tapping and chamfering to customer drawings.',
    answerBlock:
      'LELOI METAL runs four CNC cutting and fabrication centres at its group plant in Hung Yen, Vietnam, covering cut-to-length, mitre cutting, notching, profile milling, slot and pocket machining, drilling, thread tapping and deburring. Work is produced directly from customer 2D drawings or 3D STEP models to ISO 2768 machining classes.',
    processSteps: [
      {
        title: 'Drawing & model intake',
        detail:
          'We accept 2D dimensioned drawings (PDF, DWG, DXF) and 3D solid models (STEP, IGES). Critical dimensions and datum references are confirmed with the customer before programming.'
      },
      {
        title: 'CAM programming & fixturing',
        detail:
          'Tool paths and custom fixtures are prepared for each profile so long components are supported against deflection during machining.'
      },
      {
        title: 'Machining',
        detail:
          'Profile milling, slotting, pocketing, drilling, counterboring and tapping are performed in sequence to minimise re-fixturing and preserve positional accuracy.'
      },
      {
        title: 'Deburring & first-article inspection',
        detail:
          'Parts are deburred and a first article is dimensionally verified against the drawing before the balance of the batch is released to production.'
      }
    ],
    standards: [
      'ISO 2768-m / -f — general tolerances for linear and angular dimensions',
      'ISO 1101 — geometrical product specification and tolerancing',
      'Customer drawing tolerances take precedence where specified'
    ],
    materials: ['6063-T5 / T6', '6061-T6', '6082-T6'],
    applications: [
      'OEM machined sub-assemblies',
      'Heat sink base machining and fin trimming',
      'Solar clamp and bracket machining',
      'Machine frame connection and joint preparation'
    ],
    faqs: [
      {
        question: 'Which CAD formats do you accept for machined parts?',
        answer:
          'PDF, DWG and DXF for 2D drawings, and STEP, STP, IGES or IGS for 3D models. Archives may be submitted as ZIP.'
      },
      {
        question: 'Can you machine profiles you did not extrude?',
        answer:
          'Yes. We machine customer-supplied or third-party extrusions, though combining extrusion and machining in one facility usually shortens lead time and reduces handling damage.'
      },
      {
        question: 'Do you provide first-article inspection reports?',
        answer:
          'Yes. Dimensional first-article reports are issued on request and can be made a standing requirement on your purchase order.'
      }
    ],
    seo: {
      title: 'CNC Machining Aluminium Profiles Vietnam | Milling & Tapping | LELOI METAL',
      description:
        'Precision CNC machining of aluminium extrusions in Vietnam: profile milling, slotting, drilling, tapping and deburring to ISO 2768 from your DWG, DXF or STEP files.',
      keywords: [
        'cnc machining aluminium vietnam',
        'aluminium profile machining service',
        'iso 2768 machining tolerance',
        'cnc milled aluminium extrusion',
        'oem aluminium machined components'
      ]
    }
  },
  {
    slug: 'anodizing',
    name: 'Anodizing & Electro-Coloring',
    navLabel: 'Anodizing',
    headline: 'Architectural & Industrial Anodizing',
    summary:
      'Immersion anodizing producing a uniform anodic oxide layer for architectural exteriors, marine exposure and technical industrial finishes.',
    answerBlock:
      'LELOI METAL anodizes aluminium extrusions at its group plant in Vietnam with anodic layer thicknesses from 10 to 25 microns, available in natural clear, satin, champagne, bronze and matte black. Anodizing is specified by layer class rather than by colour alone, because layer thickness determines exterior durability.',
    processSteps: [
      {
        title: 'Cleaning & etching',
        detail:
          'Profiles are degreased and etched to remove die lines and surface contaminants, producing the matte or satin base texture requested.'
      },
      {
        title: 'Anodic oxidation',
        detail:
          'A controlled electrolytic process grows an integral oxide layer. Dwell time is set by the target micron class for the application environment.'
      },
      {
        title: 'Colouring',
        detail:
          'Electrolytic or adsorptive colouring is applied where a finish other than natural clear is required.'
      },
      {
        title: 'Sealing & inspection',
        detail:
          'The porous oxide is sealed to lock in colour and corrosion resistance, then layer thickness is verified before packing.'
      }
    ],
    standards: [
      'Class I (≈25 µm) — exterior architectural exposure',
      'Class II (≈15–18 µm) — general exterior and commercial interior',
      '10–12 µm — protected interior and technical applications',
      'Layer thickness verified per batch before release'
    ],
    materials: ['6063-T5 / T6', '6060-T66', '6005A-T6'],
    applications: [
      'Architectural window and door systems',
      'Curtain wall and facade components',
      'Black anodized heat sinks for improved emissivity',
      'Clear anodized industrial and T-slot framing'
    ],
    faqs: [
      {
        question: 'Which anodizing thickness should I specify for exterior use?',
        answer:
          'For full exterior architectural exposure, specify Class I at approximately 25 microns. Class II at 15–18 microns suits sheltered exterior and commercial interior applications.'
      },
      {
        question: 'Can anodized colour be matched exactly between batches?',
        answer:
          'Anodizing is an integral conversion of the metal, so slight batch variation is inherent. For projects requiring exact colour repeatability across phases, powder coating is the more predictable choice.'
      },
      {
        question: 'Does anodizing change profile dimensions?',
        answer:
          'Yes, marginally. Roughly half the oxide layer grows outward, so tight-fitting mating surfaces should allow for the specified micron class on the drawing.'
      }
    ],
    seo: {
      title: 'Aluminium Anodizing Vietnam | Clear, Bronze & Black Anodized | LELOI METAL',
      description:
        'Architectural and industrial aluminium anodizing in Vietnam from 10 to 25 microns. Natural clear, satin, champagne, bronze and matte black with sealed, thickness-verified layers.',
      keywords: [
        'aluminium anodizing vietnam',
        'class i anodizing 25 micron',
        'black anodized aluminium heat sink',
        'bronze anodized architectural profile',
        'anodized aluminium extrusion supplier'
      ]
    }
  },
  {
    slug: 'precision-cutting',
    name: 'High-Precision Cutting',
    navLabel: 'Precision Cutting',
    headline: 'Mitre & Precision Cut-to-Length',
    summary:
      'CNC double-mitre and single-head carbide sawing with digital angle positioning for burr-free, ready-to-assemble profile components.',
    answerBlock:
      'LELOI METAL cuts aluminium extrusions to exact bill-of-materials lengths at its group plant in Vietnam using CNC mitre and cut-to-length saws, supplying square cuts and compound mitre angles. Cutting to your BOM at the factory removes offcut waste and saw capacity constraints from your own assembly line.',
    processSteps: [
      {
        title: 'BOM & cutting list preparation',
        detail:
          'Your bill of materials is converted into an optimised cutting list that maximises yield from standard extrusion lengths.'
      },
      {
        title: 'Digital angle setting',
        detail:
          'Mitre angles are set digitally rather than by manual stop, so repeated angled cuts stay consistent across the batch.'
      },
      {
        title: 'Cutting & deburring',
        detail:
          'Carbide-tipped blades with lubrication produce clean edges; cut ends are deburred so components are ready for assembly on arrival.'
      },
      {
        title: 'Kitting & labelling',
        detail:
          'Cut components are grouped, labelled and packed by assembly or project phase to simplify receiving at your facility.'
      }
    ],
    standards: [
      'Square and compound mitre cuts (including 45° and 90°)',
      'Automated length stop feeding for batch repeatability',
      'Cut length tolerance agreed per project on the drawing',
      'Edge deburring included as standard'
    ],
    materials: ['All extruded 6000-series profiles', 'Mill finish, anodized or powder coated stock'],
    applications: [
      'Window and door frame component kits',
      'Machine frame and T-slot cut sets',
      'Solar rail cut-to-length production runs',
      'Curtain wall mullion and transom preparation'
    ],
    faqs: [
      {
        question: 'Can you cut to our exact bill of materials instead of stock lengths?',
        answer:
          'Yes. Supply your cutting list and we produce pre-cut components, which removes offcut waste and saw time from your own assembly operation.'
      },
      {
        question: 'What are standard extrusion lengths for sea freight?',
        answer:
          'Standard lengths of 5.8 m and 6.0 m are optimised for 20GP and 40HQ container loading. Longer or shorter lengths are quoted against container fit.'
      },
      {
        question: 'Are cut components protected during shipping?',
        answer:
          'Cut components are interleaved and wrapped before crating, with rust-inhibiting paper and desiccant included for containerised sea freight.'
      }
    ],
    seo: {
      title: 'Aluminium Cut-to-Length & Mitre Cutting Vietnam | LELOI METAL',
      description:
        'CNC mitre and cut-to-length aluminium profile cutting in Vietnam. Cut to your bill of materials with deburred edges, project kitting and export-ready packing.',
      keywords: [
        'aluminium cut to length service',
        'mitre cutting aluminium profile',
        'aluminium profile cutting vietnam',
        'cut to size aluminium extrusion',
        'aluminium component kitting'
      ]
    }
  },
  {
    slug: 'quality-control',
    name: 'Quality Control & Metrology',
    navLabel: 'QC & Metrology',
    headline: 'Quality Control, Metrology & Certification',
    summary:
      'In-house dimensional, metallurgical and mechanical verification with batch mill test certificates issued to EN 10204 3.1.',
    answerBlock:
      'LELOI METAL verifies every export batch at its group plant in Vietnam across three axes: chemical composition by optical spectrometry, dimensional conformity against the customer drawing, and mechanical hardness. Results are issued as an EN 10204 3.1 mill test certificate accompanying the shipment.',
    processSteps: [
      {
        title: 'Incoming billet verification',
        detail:
          'Billet chemistry is confirmed by optical emission spectrometry against the ordered alloy before it enters production.'
      },
      {
        title: 'In-process dimensional checks',
        detail:
          'Profile cross-sections are checked against the die drawing during the run using optical projection, so drift is caught before a full batch is produced.'
      },
      {
        title: 'Mechanical property testing',
        detail:
          'Hardness is verified after aging to confirm the specified temper has been achieved throughout the batch.'
      },
      {
        title: 'Certification & release',
        detail:
          'Chemical, dimensional and mechanical results are compiled into the batch certificate, which travels with the shipping documents.'
      }
    ],
    standards: [
      'EN 10204 3.1 — inspection certificate issued per batch',
      'EN 573-3 — alloy chemical composition limits',
      'EN 755-9 / ASTM B221 — dimensional conformity',
      'Webster and Barcol hardness verification after aging'
    ],
    materials: ['All supplied 6000-series alloys and tempers'],
    applications: [
      'Structural and load-bearing profile verification',
      'Customs and import documentation support',
      'Buyer incoming-inspection alignment',
      'Project-specific certification packages'
    ],
    faqs: [
      {
        question: 'Do you issue mill test certificates with every shipment?',
        answer:
          'Yes. An EN 10204 3.1 certificate covering alloy chemistry, dimensional conformity and hardness accompanies each export batch.'
      },
      {
        question: 'Can our own inspector or third-party agency audit a batch before shipment?',
        answer:
          'Yes. Pre-shipment inspection by your representative or an agency such as SGS or Bureau Veritas can be arranged; please state the requirement at RFQ stage.'
      },
      {
        question: 'How is alloy composition verified?',
        answer:
          'Optical emission spectrometry is used on incoming billet and confirmed against EN 573-3 limits for the ordered alloy before production begins.'
      }
    ],
    seo: {
      title: 'Aluminium Quality Control & Mill Test Certificates | LELOI METAL Vietnam',
      description:
        'In-house aluminium quality control in Vietnam: optical spectrometry alloy verification, dimensional inspection and hardness testing with EN 10204 3.1 mill test certificates.',
      keywords: [
        'en 10204 3.1 mill test certificate aluminium',
        'aluminium quality control vietnam',
        'aluminium spectrometry alloy verification',
        'aluminium extrusion inspection report',
        'pre-shipment inspection aluminium'
      ]
    }
  }
];

export function getCapabilityBySlug(slug: string): CapabilityDossier | undefined {
  return CAPABILITY_DOSSIERS.find((capability) => capability.slug === slug);
}

export function getCapabilitySlugs(): string[] {
  return CAPABILITY_DOSSIERS.map((capability) => capability.slug);
}
