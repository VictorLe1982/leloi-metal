/**
 * LELOI METAL — SITE IMAGE MANIFEST (Single Source of Truth)
 *
 * Every image slot on the site is declared here once: its exact path, the
 * dimensions it must be supplied at, what it is for, and its alt text.
 *
 * The contract this creates:
 *
 *   - Marketing drops a file at the declared `path` with the declared name.
 *   - The site picks it up automatically — no code change needed.
 *   - Until then, `<SiteImage>` renders a placeholder stating the exact
 *     filename and size required, so a missing image is visible and
 *     actionable instead of a broken box.
 *   - `node scripts/check-media.mjs` reports which slots are filled.
 *
 * Rules for supplied files:
 *   - Format: .webp (preferred) — convert from JPG/PNG before dropping in.
 *   - Supply at the stated pixel size or larger, never smaller. Next.js
 *     downscales well; it cannot invent detail.
 *   - Keep each file under ~400 KB after WebP conversion. A 2400px hero at
 *     quality 80 typically lands around 250–350 KB.
 *   - Never upload a customer's proprietary drawing as a public image.
 */

export type MediaSlotGroup = 'hero' | 'division' | 'capability' | 'factory' | 'social';

export interface MediaSlot {
  /** Stable id used in code. Never change once referenced. */
  id: string;
  group: MediaSlotGroup;
  /** Public path, exactly where the file must be placed. */
  path: string;
  /** Minimum supply size. Larger is fine, smaller is not. */
  width: number;
  height: number;
  /** Human aspect label shown in the placeholder. */
  aspect: string;
  /** What this image must show. This is the brief for the photographer. */
  brief: string;
  /** Alt text. Describes the image for screen readers and image search. */
  alt: string;
  /** Above-the-fold images are preloaded; everything else lazy-loads. */
  priority?: boolean;
}

export const MEDIA_SLOTS: MediaSlot[] = [
  // ---------------------------------------------------------------------------
  // HERO — the single most important image on the site
  // ---------------------------------------------------------------------------
  {
    id: 'home-hero',
    group: 'hero',
    path: '/media/site/hero/home-hero.webp',
    width: 2400,
    height: 1350,
    aspect: '16:9',
    brief:
      'The headline shot. A wide view of the extrusion hall — run-out tables with profiles emerging, or a dense stack of finished sections catching the light. Must read well when the left 55% is covered by dark overlay and white text. Avoid faces in close-up, avoid visible third-party branding on cranes and signage, avoid cluttered backgrounds.',
    alt: 'Aluminium extrusion production hall with profiles on the run-out tables',
    priority: true
  },
  // ---------------------------------------------------------------------------
  // DIVISION CARDS — six business lines, used on home and /products
  // ---------------------------------------------------------------------------
  {
    id: 'division-custom-extrusions',
    group: 'division',
    path: '/media/site/divisions/custom-extrusions.webp',
    width: 1200,
    height: 900,
    aspect: '4:3',
    brief:
      'Assorted custom profile sections — solid, hollow and complex multi-void — arranged to show geometry variety. Mill finish is fine and preferred here.',
    alt: 'Custom aluminium extrusion profiles in solid, hollow and multi-void geometries'
  },
  {
    id: 'division-architectural',
    group: 'division',
    path: '/media/site/divisions/architectural.webp',
    width: 1200,
    height: 900,
    aspect: '4:3',
    brief:
      'A completed building elevation using aluminium systems: curtain wall, windows or louvres. A real project is far stronger than a render.',
    alt: 'Architectural aluminium curtain wall and window systems on a completed building facade'
  },
  {
    id: 'division-industrial-profiles',
    group: 'division',
    path: '/media/site/divisions/industrial-profiles.webp',
    width: 1200,
    height: 900,
    aspect: '4:3',
    brief:
      'T-slot framing assembled into a machine frame or workstation, showing the slot geometry and connectors clearly.',
    alt: 'Industrial T-slot aluminium framing assembled into a machine frame'
  },
  {
    id: 'division-solar',
    group: 'division',
    path: '/media/site/divisions/solar.webp',
    width: 1200,
    height: 900,
    aspect: '4:3',
    brief:
      'Solar module frames or mounting rails — either stacked as finished goods, or installed on an array. Anodized finish reads best.',
    alt: 'Anodized aluminium solar module frames and mounting rails'
  },
  {
    id: 'division-thermal-management',
    group: 'division',
    path: '/media/site/divisions/thermal-management.webp',
    width: 1200,
    height: 900,
    aspect: '4:3',
    brief:
      'Heat sink extrusions end-on so the fin density is visible. Black anodized sections photograph best against a light background.',
    alt: 'Extruded aluminium heat sink profiles showing dense fin geometry'
  },
  {
    id: 'division-oem-components',
    group: 'division',
    path: '/media/site/divisions/oem-components.webp',
    width: 1200,
    height: 900,
    aspect: '4:3',
    brief:
      'Machined and finished OEM parts, kitted or laid out — showing drilled holes, tapped threads and cut ends. Conveys "ready to assemble".',
    alt: 'CNC machined and surface finished OEM aluminium components'
  },

  // ---------------------------------------------------------------------------
  // CAPABILITY CARDS — the factory process pages
  // ---------------------------------------------------------------------------
  {
    id: 'capability-aluminium-extrusion',
    group: 'capability',
    path: '/media/site/capabilities/aluminium-extrusion.webp',
    width: 1600,
    height: 1067,
    aspect: '3:2',
    brief: 'The press in operation, or profile emerging onto the run-out table.',
    alt: 'Aluminium extrusion press producing profiles at the Hung Yen plant'
  },
  {
    id: 'capability-cnc-machining',
    group: 'capability',
    path: '/media/site/capabilities/cnc-machining.webp',
    width: 1600,
    height: 1067,
    aspect: '3:2',
    brief: 'A CNC centre mid-cut on an aluminium profile, with swarf and coolant visible.',
    alt: 'CNC machining centre cutting an aluminium extrusion'
  },
  {
    id: 'capability-anodizing',
    group: 'capability',
    path: '/media/site/capabilities/anodizing.webp',
    width: 1600,
    height: 1067,
    aspect: '3:2',
    brief: 'Anodizing line — profiles on jigs entering or leaving a tank.',
    alt: 'Aluminium profiles on jigs in the anodizing line'
  },
  {
    id: 'capability-powder-coating',
    group: 'capability',
    path: '/media/site/capabilities/powder-coating.webp',
    width: 1600,
    height: 1067,
    aspect: '3:2',
    brief:
      'Powder coating line — profiles entering the curing oven, or a colour rack showing the RAL range.',
    alt: 'Aluminium profiles on the powder coating line before curing'
  },
  {
    id: 'capability-precision-cutting',
    group: 'capability',
    path: '/media/site/capabilities/precision-cutting.webp',
    width: 1600,
    height: 1067,
    aspect: '3:2',
    brief: 'Mitre saw cutting a profile, or cut components kitted and labelled for despatch.',
    alt: 'CNC mitre saw cutting aluminium profiles to length'
  },
  {
    id: 'capability-quality-control',
    group: 'capability',
    path: '/media/site/capabilities/quality-control.webp',
    width: 1600,
    height: 1067,
    aspect: '3:2',
    brief:
      'QC bench — optical projector, spectrometer or hardness tester in use on a profile sample.',
    alt: 'Quality control inspection of an aluminium profile cross-section'
  },

  // ---------------------------------------------------------------------------
  // FACTORY — closes GAPS.md GAP-07 (no real plant photography on file)
  // ---------------------------------------------------------------------------
  {
    id: 'factory-exterior',
    group: 'factory',
    path: '/media/site/factory/plant-exterior.webp',
    width: 2000,
    height: 1125,
    aspect: '16:9',
    brief: 'The Hung Yen plant from outside, showing scale. Daylight, clean frame.',
    alt: 'LELOI METAL group manufacturing plant in Hung Yen Province, Vietnam'
  },
  {
    id: 'factory-floor',
    group: 'factory',
    path: '/media/site/factory/plant-floor.webp',
    width: 2000,
    height: 1125,
    aspect: '16:9',
    brief: 'Production floor overview — presses and handling equipment in one frame.',
    alt: 'Production floor of the Hung Yen aluminium extrusion plant'
  },
  {
    id: 'factory-packing',
    group: 'factory',
    path: '/media/site/factory/export-packing.webp',
    width: 2000,
    height: 1125,
    aspect: '16:9',
    brief:
      'Export packing: profiles interleaved and strapped on fumigated pallets, or loading a container. Strong trust signal for overseas buyers.',
    alt: 'Aluminium profiles packed on export pallets for container shipment'
  },

  // ---------------------------------------------------------------------------
  // SOCIAL — optional override of the generated OG card
  // ---------------------------------------------------------------------------
  {
    id: 'og-default',
    group: 'social',
    path: '/media/site/og/og-default.webp',
    width: 1200,
    height: 630,
    aspect: '1.91:1',
    brief:
      'Optional. Only needed if you want a photographic social share card instead of the auto-generated branded one. Leave empty to keep the generated card.',
    alt: 'LELOI METAL — precision aluminium extrusion from Vietnam'
  }
];

const SLOT_BY_ID = new Map(MEDIA_SLOTS.map((slot) => [slot.id, slot]));

export function getMediaSlot(id: string): MediaSlot | undefined {
  return SLOT_BY_ID.get(id);
}

export function getMediaSlotsByGroup(group: MediaSlotGroup): MediaSlot[] {
  return MEDIA_SLOTS.filter((slot) => slot.group === group);
}

/** Slot id for a product division card, e.g. "solar" -> "division-solar". */
export function divisionSlotId(divisionSlug: string): string {
  return `division-${divisionSlug}`;
}

/** Slot id for a capability card. */
export function capabilitySlotId(capabilitySlug: string): string {
  return `capability-${capabilitySlug}`;
}
