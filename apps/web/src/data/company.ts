/**
 * LELOI METAL — Company, facility and equipment facts.
 *
 * Single source of truth. Address, certification and equipment counts are
 * referenced from here by the footer, contact page, about page, legal pages,
 * capability dossiers and Organization JSON-LD, so a change is made once.
 *
 * Figures below were confirmed by LELOI EXIM GLOBAL management on 18 Sep 2026.
 * Anything not listed here stays unpublished (ADR-006).
 */

export const COMPANY = {
  brand: 'LELOI METAL',
  legalName: 'LELOI EXIM GLOBAL CO., LTD',
  /** LELOI METAL is a business field of the parent company, not a separate entity. */
  relationship: 'LELOI METAL is the aluminium manufacturing and export business field of LELOI EXIM GLOBAL CO., LTD.',
  /**
   * How we describe the Hung Yen plant publicly.
   *
   * The plant is under common ownership with LELOI EXIM GLOBAL but is a
   * separate legal entity — so "our group's facility" is accurate and
   * "we own and operate" is not. A buyer running supplier due diligence will
   * check the entity on the invoice against the entity on the factory licence,
   * and an overstated claim is found in the first ten minutes of an audit.
   */
  facilityRelationship:
    'The Hung Yen plant is operated by a manufacturing company under common ownership with LELOI EXIM GLOBAL CO., LTD. Production is carried out there under our direct commercial and quality control.',
  facilityShortLabel: 'Group manufacturing facility',
  slogan: 'Aluminium for a Better World',
  domain: 'leloimetal.com',
  baseUrl: 'https://leloimetal.com',
  salesEmail: 'sales@leloimetal.com',
  contactEmail: 'contact@leloimetal.com',
  privacyEmail: 'privacy@leloimetal.com'
} as const;

export const FACTORY_ADDRESS = {
  streetAddress: '374 Nguyen Thien Thuan',
  ward: 'My Hao Ward',
  region: 'Hung Yen Province',
  country: 'Vietnam',
  countryCode: 'VN',
  /** Single-line form for footers and contact cards. */
  oneLine: '374 Nguyen Thien Thuan, My Hao Ward, Hung Yen Province, Vietnam'
} as const;

export interface Certification {
  standard: string;
  scope: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    standard: 'ISO 9001:2015',
    scope: 'Quality Management System covering aluminium extrusion, surface finishing and fabrication.'
  }
];

export interface EquipmentItem {
  name: string;
  quantity: number;
  detail: string;
  /** Capability dossier this machine belongs to. */
  capabilitySlug: string;
}

/**
 * Installed equipment at the Hung Yen facility.
 *
 * Press sizes are stated as billet container diameter (the standard way presses
 * are specified in this industry). Press force in tonnes is not published
 * because it has not been confirmed.
 */
export const FACTORY_EQUIPMENT: EquipmentItem[] = [
  {
    name: '5-inch extrusion press',
    quantity: 1,
    detail:
      'Suited to small and medium cross-sections: window and door profiles, T-slot framing, trims and precision OEM sections.',
    capabilitySlug: 'aluminium-extrusion'
  },
  {
    name: '6-inch extrusion press',
    quantity: 1,
    detail:
      'Handles larger circumscribing circle diameters: curtain wall mullions, structural sections, solar rails and wide heat sinks.',
    capabilitySlug: 'aluminium-extrusion'
  },
  {
    name: 'Age-hardening oven',
    quantity: 1,
    detail:
      'Holds the time–temperature curve required to reach T5 and T6 tempers, with hardness verified before batch release.',
    capabilitySlug: 'aluminium-extrusion'
  },
  {
    name: 'German-standard powder coating line',
    quantity: 2,
    detail:
      'Two coating lines built to German equipment standards, running multi-stage chemical pre-treatment ahead of electrostatic application and curing.',
    capabilitySlug: 'powder-coating'
  },
  {
    name: 'Wood-grain film transfer oven',
    quantity: 1,
    detail:
      'Sublimation transfer of wood-grain and decorative patterns onto powder-coated profiles for architectural and interior applications.',
    capabilitySlug: 'powder-coating'
  },
  {
    name: 'CNC cutting & fabrication centre',
    quantity: 4,
    detail:
      'Four CNC machines for cut-to-length, mitre cutting, notching, drilling and joint preparation on extruded profiles.',
    capabilitySlug: 'cnc-machining'
  }
];

export const AFFILIATED_NETWORK = {
  factoryCount: 4,
  combinedAnnualCapacityTonnes: 100_000,
  /** Partner factories are referenced anonymously — names are not published. */
  description:
    'Beyond our own Hung Yen facility, LELOI METAL works with a network of four affiliated partner factories in Vietnam with a combined annual capacity of over 100,000 tonnes. This network lets us absorb large container-scale programmes and parallel production runs without extending lead times.'
} as const;

export function getEquipmentForCapability(capabilitySlug: string): EquipmentItem[] {
  return FACTORY_EQUIPMENT.filter((item) => item.capabilitySlug === capabilitySlug);
}

export const TOTAL_MACHINE_COUNT = FACTORY_EQUIPMENT.reduce(
  (total, item) => total + item.quantity,
  0
);
