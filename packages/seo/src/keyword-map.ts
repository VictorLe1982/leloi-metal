/**
 * LELOI METAL — ALUMINIUM INDUSTRY KEYWORD MAP (SSoT)
 *
 * Layered on top of the 73 curated `seo.keywords` arrays already held per
 * division / family / system in canonical-products-data.ts. Those describe
 * *what a page is about*; this file supplies the industry-wide vocabulary that
 * cuts across every page: alloy designations, standards, process terms, trade
 * and compliance language, buyer-intent modifiers and the conversational
 * questions that AI answer engines actually receive.
 *
 * Three tiers, used differently:
 *
 *   HEAD    — high volume, high competition. Targeted by the home page, the
 *             catalogue index and division landing pages only. A family page
 *             must never compete for these; that is how cannibalisation starts.
 *   MID     — category + qualifier. The natural target of a family page.
 *   LONGTAIL— specification, market or intent qualified. Belongs to system
 *             dossiers, insight articles and the engineering tools, where the
 *             page can actually answer the query in full.
 *
 * Spelling note: "aluminium" (en-GB/international) and "aluminum" (en-US) are
 * both listed deliberately. US buyers type the second and Google does not
 * always treat them as equivalent in long-tail queries.
 */

export type KeywordTier = 'head' | 'mid' | 'longtail';

export interface KeywordCluster {
  id: string;
  tier: KeywordTier;
  /** The single term this cluster is built to win. */
  primary: string;
  /** Supporting variants, synonyms and spellings for the same intent. */
  variants: string[];
  /** Which route owns this cluster. One owner per cluster, always. */
  owner: string;
  intent: 'informational' | 'commercial' | 'transactional';
}

// ---------------------------------------------------------------------------
// TIER 1 — HEAD TERMS
// ---------------------------------------------------------------------------

export const HEAD_CLUSTERS: KeywordCluster[] = [
  {
    id: 'head-manufacturer',
    tier: 'head',
    primary: 'aluminium extrusion manufacturer',
    variants: [
      'aluminum extrusion manufacturer',
      'aluminium extrusion company',
      'aluminium profile manufacturer',
      'aluminium extrusion factory',
      'extruded aluminium supplier'
    ],
    owner: '/',
    intent: 'commercial'
  },
  {
    id: 'head-custom-extrusion',
    tier: 'head',
    primary: 'custom aluminium extrusion',
    variants: [
      'custom aluminum extrusions',
      'made to drawing aluminium profile',
      'bespoke aluminium profile',
      'custom extruded aluminium sections'
    ],
    owner: '/products/custom-extrusions',
    intent: 'commercial'
  },
  {
    id: 'head-vietnam-sourcing',
    tier: 'head',
    primary: 'aluminium extrusion vietnam',
    variants: [
      'aluminum extrusion vietnam',
      'vietnam aluminium supplier',
      'aluminium profile manufacturer vietnam',
      'vietnam aluminium export',
      'aluminium extrusion supplier asia'
    ],
    owner: '/',
    intent: 'commercial'
  },
  {
    id: 'head-catalogue',
    tier: 'head',
    primary: 'aluminium profile types',
    variants: [
      'aluminium extrusion profiles',
      'types of aluminium profiles',
      'aluminium extrusion catalogue',
      'aluminum profile shapes'
    ],
    owner: '/products',
    intent: 'informational'
  },
  {
    id: 'head-china-plus-one',
    tier: 'head',
    primary: 'china plus one aluminium supplier',
    variants: [
      'alternative to chinese aluminium supplier',
      'aluminium supplier outside china',
      'diversify aluminium supply chain',
      'non-china aluminium extrusion source'
    ],
    owner: '/markets',
    intent: 'commercial'
  }
];

// ---------------------------------------------------------------------------
// TIER 2 — MID TERMS, grouped by the division that owns them
// ---------------------------------------------------------------------------

export const MID_CLUSTERS: KeywordCluster[] = [
  {
    id: 'mid-architectural',
    tier: 'mid',
    primary: 'architectural aluminium profiles',
    variants: [
      'architectural aluminum extrusions',
      'building aluminium systems',
      'aluminium facade profiles',
      'fenestration aluminium profiles'
    ],
    owner: '/products/architectural',
    intent: 'commercial'
  },
  {
    id: 'mid-industrial',
    tier: 'mid',
    primary: 'industrial aluminium profiles',
    variants: [
      't slot aluminium extrusion',
      'aluminium framing system',
      'modular aluminium profile',
      'machine frame aluminium'
    ],
    owner: '/products/industrial-profiles',
    intent: 'commercial'
  },
  {
    id: 'mid-solar',
    tier: 'mid',
    primary: 'solar aluminium profiles',
    variants: [
      'solar module frame aluminium',
      'pv mounting rail aluminium',
      'photovoltaic aluminium frame',
      'solar racking extrusion'
    ],
    owner: '/products/solar',
    intent: 'commercial'
  },
  {
    id: 'mid-thermal',
    tier: 'mid',
    primary: 'aluminium heat sink extrusion',
    variants: [
      'extruded heat sink profile',
      'led heat sink aluminium',
      'heat sink manufacturer',
      'thermal management extrusion'
    ],
    owner: '/products/thermal-management',
    intent: 'commercial'
  },
  {
    id: 'mid-oem',
    tier: 'mid',
    primary: 'oem aluminium components',
    variants: [
      'cnc machined aluminium parts',
      'custom aluminium parts manufacturer',
      'aluminium contract manufacturing',
      'machined extrusion components'
    ],
    owner: '/products/oem-components',
    intent: 'commercial'
  },
  {
    id: 'mid-anodizing',
    tier: 'mid',
    primary: 'anodized aluminium profile',
    variants: [
      'anodised aluminium extrusion',
      'clear anodized aluminium',
      'black anodized aluminium profile',
      'bronze anodized extrusion'
    ],
    owner: '/capabilities/anodizing',
    intent: 'commercial'
  },
  {
    id: 'mid-powder-coating',
    tier: 'mid',
    primary: 'powder coated aluminium profile',
    variants: [
      'powder coating aluminium extrusion',
      'ral colour aluminium profile',
      'architectural powder coating',
      'wood grain aluminium profile'
    ],
    owner: '/capabilities/powder-coating',
    intent: 'commercial'
  },
  {
    id: 'mid-cnc',
    tier: 'mid',
    primary: 'cnc machining aluminium profiles',
    variants: [
      'aluminium profile machining service',
      'cnc milled aluminium extrusion',
      'aluminium drilling tapping service'
    ],
    owner: '/capabilities/cnc-machining',
    intent: 'commercial'
  },
  {
    id: 'mid-cutting',
    tier: 'mid',
    primary: 'cut to length aluminium profile',
    variants: [
      'aluminium mitre cutting service',
      'cut to size aluminium extrusion',
      'aluminium profile cutting service'
    ],
    owner: '/capabilities/precision-cutting',
    intent: 'commercial'
  },
  {
    id: 'mid-qc',
    tier: 'mid',
    primary: 'aluminium mill test certificate',
    variants: [
      'en 10204 3.1 certificate aluminium',
      'aluminium inspection report',
      'aluminium alloy verification spectrometry'
    ],
    owner: '/capabilities/quality-control',
    intent: 'informational'
  },
  {
    id: 'mid-extrusion-process',
    tier: 'mid',
    primary: 'aluminium extrusion die',
    variants: [
      'extrusion die cost',
      'custom extrusion tooling',
      'aluminium die design',
      'extrusion die lead time'
    ],
    owner: '/capabilities/aluminium-extrusion',
    intent: 'commercial'
  }
];

// ---------------------------------------------------------------------------
// TIER 3 — MODIFIER VOCABULARIES
// These are combined with mid terms to build long-tail variants.
// ---------------------------------------------------------------------------

/** Wrought alloys and tempers LELOI METAL actually extrudes. */
export const ALLOY_TERMS = [
  '6063',
  '6063-T5',
  '6063-T6',
  '6061',
  '6061-T6',
  '6005A',
  '6005A-T6',
  '6082',
  '6082-T6',
  '6060',
  '6060-T66',
  '6000 series aluminium',
  'T5 temper',
  'T6 temper'
];

/** Standards buyers quote in RFQs and search for by name. */
export const STANDARD_TERMS = [
  'EN 755-9',
  'EN 755-2',
  'EN 573-3',
  'EN 12020-2',
  'ASTM B221',
  'ISO 2768',
  'ISO 1101',
  'EN 10204 3.1',
  'ISO 9001:2015',
  'AAMA 2603',
  'AAMA 2604',
  'AAMA 2605',
  'Qualicoat',
  'Qualanod',
  'RoHS',
  'REACH'
];

/** Surface finishing vocabulary. */
export const FINISH_TERMS = [
  'mill finish',
  'anodized',
  'anodised',
  'clear anodized',
  'black anodized',
  'bronze anodized',
  'champagne anodized',
  'powder coated',
  'electrostatic powder coating',
  'wood grain sublimation',
  'PVDF coating',
  'electrophoresis coating',
  'thermal break',
  'polyamide thermal barrier'
];

/** Geometry vocabulary — how buyers describe a section in search. */
export const GEOMETRY_TERMS = [
  'solid profile',
  'hollow profile',
  'semi-hollow profile',
  'multi-void profile',
  'round tube',
  'square tube',
  'rectangular tube',
  'angle profile',
  'channel profile',
  'U profile',
  'T profile',
  'I-beam',
  'H-beam',
  'flat bar',
  'circumscribing circle diameter',
  'CCD',
  'wall thickness'
];

/** Trade, tariff and compliance language — low volume, very high intent. */
export const TRADE_COMPLIANCE_TERMS = [
  'HS code 7604',
  'HS 7604.21',
  'HS 7604.29',
  'CPTPP aluminium duty',
  'EVFTA aluminium tariff',
  'VKFTA aluminium',
  'RCEP aluminium',
  'certificate of origin Form B',
  'EUR.1 certificate',
  'CBAM aluminium',
  'EU Regulation 2023/956',
  'anti-dumping aluminium extrusion',
  'countervailing duty aluminium',
  'FOB Hai Phong',
  'FOB Cat Lai',
  'CIF incoterms aluminium'
];

/** Commercial qualifiers that signal a ready-to-transact buyer. */
export const BUYER_INTENT_MODIFIERS = [
  'supplier',
  'manufacturer',
  'factory',
  'wholesale',
  'bulk',
  'MOQ',
  'minimum order quantity',
  'price per kg',
  'price per tonne',
  'quotation',
  'RFQ',
  'lead time',
  'container load',
  'sample',
  'catalogue PDF',
  'datasheet'
];

/** Priority export markets, used to build geo-qualified long tail. */
export const MARKET_MODIFIERS = [
  'Canada',
  'Germany',
  'Netherlands',
  'Japan',
  'South Korea',
  'UAE',
  'Saudi Arabia',
  'Australia',
  'United States',
  'United Kingdom'
];

// ---------------------------------------------------------------------------
// GEO / AI ANSWER-ENGINE QUESTIONS
// Phrased the way a procurement engineer types into ChatGPT or Perplexity,
// not the way they type into a search box.
// ---------------------------------------------------------------------------

export interface QuestionKeyword {
  question: string;
  /** Route best placed to answer it in full. */
  owner: string;
}

export const QUESTION_KEYWORDS: QuestionKeyword[] = [
  // Alloy selection
  {
    question: 'What is the difference between 6061 and 6063 aluminium?',
    owner: '/insights/6061-vs-6063-aluminium-extrusion-comparison'
  },
  {
    question: 'Which aluminium alloy is best for window and door frames?',
    owner: '/tools/alloy-selector'
  },
  {
    question: 'What does T5 and T6 temper mean in aluminium extrusion?',
    owner: '/tools/alloy-selector'
  },
  {
    question: 'Which aluminium alloy should I use for a solar module frame?',
    owner: '/products/solar/solar-module-frames'
  },
  {
    question: 'Is 6005A stronger than 6063?',
    owner: '/tools/alloy-selector'
  },

  // Tooling and cost
  {
    question: 'How much does an aluminium extrusion die cost?',
    owner: '/capabilities/aluminium-extrusion'
  },
  {
    question: 'What is the minimum order quantity for custom aluminium extrusion?',
    owner: '/capabilities/aluminium-extrusion'
  },
  {
    question: 'How long does it take to make a new aluminium extrusion die?',
    owner: '/capabilities/aluminium-extrusion'
  },
  {
    question: 'Who owns the die when I order a custom aluminium profile?',
    owner: '/capabilities/aluminium-extrusion'
  },

  // Specification and tolerance
  {
    question: 'What tolerance can aluminium extrusion hold?',
    owner: '/capabilities/aluminium-extrusion'
  },
  {
    question: 'How do I calculate the weight of an aluminium profile?',
    owner: '/tools/aluminium-weight-calculator'
  },
  {
    question: 'What is CCD in aluminium extrusion?',
    owner: '/capabilities/aluminium-extrusion'
  },
  {
    question: 'What thickness of anodizing do I need for exterior use?',
    owner: '/capabilities/anodizing'
  },
  {
    question: 'Should I choose anodizing or powder coating for aluminium?',
    owner: '/capabilities/powder-coating'
  },

  // Sourcing and trade
  {
    question: 'Where can I source aluminium extrusions outside China?',
    owner: '/markets'
  },
  {
    question: 'What import duty applies to aluminium profiles from Vietnam?',
    owner: '/tools/import-duty-checker'
  },
  {
    question: 'Do aluminium extrusions from Vietnam qualify for CPTPP duty free entry?',
    owner: '/markets/canada'
  },
  {
    question: 'What is the HS code for aluminium extruded profiles?',
    owner: '/tools/import-duty-checker'
  },
  {
    question: 'Does CBAM apply to imported aluminium profiles?',
    owner: '/insights/cbam-guide-for-aluminium-importers'
  },
  {
    question: 'What documents come with an aluminium shipment from Vietnam?',
    owner: '/capabilities/quality-control'
  },

  // Logistics
  {
    question: 'What length aluminium profiles fit in a shipping container?',
    owner: '/capabilities/precision-cutting'
  },
  {
    question: 'How are aluminium extrusions packed for sea freight?',
    owner: '/capabilities/precision-cutting'
  }
];

// ---------------------------------------------------------------------------
// COMPOSERS
// ---------------------------------------------------------------------------

const ALL_CLUSTERS = [...HEAD_CLUSTERS, ...MID_CLUSTERS];

/** Every term a cluster targets, primary first. */
export function clusterTerms(cluster: KeywordCluster): string[] {
  return [cluster.primary, ...cluster.variants];
}

/** The cluster that owns a given route, if any. */
export function getClusterForRoute(route: string): KeywordCluster | undefined {
  return ALL_CLUSTERS.find((cluster) => cluster.owner === route);
}

/** Questions a given route is responsible for answering. */
export function getQuestionsForRoute(route: string): string[] {
  return QUESTION_KEYWORDS.filter((q) => q.owner === route).map((q) => q.question);
}

/**
 * Merges curated page keywords with the cluster that owns the route, dropping
 * duplicates and capping the list. Metadata keywords carry little direct
 * ranking weight today, but the list doubles as the brief for anyone writing
 * or reviewing copy for that page.
 */
export function composeKeywords(
  curated: string[] = [],
  route?: string,
  extra: string[] = [],
  limit = 15
): string[] {
  const cluster = route ? getClusterForRoute(route) : undefined;
  const merged = [...curated, ...extra, ...(cluster ? clusterTerms(cluster) : [])];

  const seen = new Set<string>();
  const unique: string[] = [];
  for (const term of merged) {
    const key = term.trim().toLowerCase();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    unique.push(term.trim());
  }
  return unique.slice(0, limit);
}

/**
 * Builds geo-qualified long tail for a term, e.g.
 * "solar mounting rails supplier Germany".
 */
export function withMarketModifiers(term: string, markets = MARKET_MODIFIERS): string[] {
  return markets.map((market) => `${term} supplier ${market}`);
}

/** Flat vocabulary list, useful for content briefs and gap analysis. */
export const ALUMINIUM_VOCABULARY = [
  ...ALLOY_TERMS,
  ...STANDARD_TERMS,
  ...FINISH_TERMS,
  ...GEOMETRY_TERMS,
  ...TRADE_COMPLIANCE_TERMS
];
