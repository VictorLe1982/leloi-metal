/**
 * LELOI METAL — LEGACY PRODUCT & CATEGORY ROUTE MAP (V6-A)
 * Maps legacy 24-product URLs and legacy categories to canonical hierarchy
 */

export interface LegacyRouteResolution {
  division: string;
  family: string;
  system?: string;
  redirectUrl: string;
}

/**
 * Full mapping of all 24 legacy products and common slug variants to canonical hierarchy
 */
export const LEGACY_PRODUCT_ROUTE_MAP: Record<string, LegacyRouteResolution> = {
  // 1. Custom Extrusions
  square_rectangular_hollow_profiles: {
    division: 'custom-extrusions',
    family: 'square-rectangular-profiles',
    redirectUrl: '/products/custom-extrusions/square-rectangular-profiles'
  },
  'square-rectangular-hollow-profiles': {
    division: 'custom-extrusions',
    family: 'square-rectangular-profiles',
    redirectUrl: '/products/custom-extrusions/square-rectangular-profiles'
  },
  round_tubes: {
    division: 'custom-extrusions',
    family: 'round-profiles',
    redirectUrl: '/products/custom-extrusions/round-profiles'
  },
  'round-tubes': {
    division: 'custom-extrusions',
    family: 'round-profiles',
    redirectUrl: '/products/custom-extrusions/round-profiles'
  },
  solid_bars: {
    division: 'custom-extrusions',
    family: 'solid-extrusions',
    redirectUrl: '/products/custom-extrusions/solid-extrusions'
  },
  'solid-bars': {
    division: 'custom-extrusions',
    family: 'solid-extrusions',
    redirectUrl: '/products/custom-extrusions/solid-extrusions'
  },
  angle_profiles: {
    division: 'custom-extrusions',
    family: 'angles',
    redirectUrl: '/products/custom-extrusions/angles'
  },
  'angle-profiles': {
    division: 'custom-extrusions',
    family: 'angles',
    redirectUrl: '/products/custom-extrusions/angles'
  },
  u_channel_profiles: {
    division: 'custom-extrusions',
    family: 'channels',
    redirectUrl: '/products/custom-extrusions/channels'
  },
  'u-channel-profiles': {
    division: 'custom-extrusions',
    family: 'channels',
    redirectUrl: '/products/custom-extrusions/channels'
  },
  t_profiles: {
    division: 'custom-extrusions',
    family: 'structural-profiles',
    redirectUrl: '/products/custom-extrusions/structural-profiles'
  },
  't-profiles': {
    division: 'custom-extrusions',
    family: 'structural-profiles',
    redirectUrl: '/products/custom-extrusions/structural-profiles'
  },
  i_beam_profiles: {
    division: 'custom-extrusions',
    family: 'structural-profiles',
    redirectUrl: '/products/custom-extrusions/structural-profiles'
  },
  'i-beam-profiles': {
    division: 'custom-extrusions',
    family: 'structural-profiles',
    redirectUrl: '/products/custom-extrusions/structural-profiles'
  },
  h_profiles: {
    division: 'custom-extrusions',
    family: 'structural-profiles',
    redirectUrl: '/products/custom-extrusions/structural-profiles'
  },
  'h-profiles': {
    division: 'custom-extrusions',
    family: 'structural-profiles',
    redirectUrl: '/products/custom-extrusions/structural-profiles'
  },

  // 2. Industrial Profiles
  t_slot_modular_profiles: {
    division: 'industrial-profiles',
    family: 't-slot-framing',
    system: 'metric-t-slot-4040-standard',
    redirectUrl: '/products/industrial-profiles/t-slot-framing'
  },
  't-slot-modular-profiles': {
    division: 'industrial-profiles',
    family: 't-slot-framing',
    redirectUrl: '/products/industrial-profiles/t-slot-framing'
  },
  t_slot_framing: {
    division: 'industrial-profiles',
    family: 't-slot-framing',
    system: 'metric-t-slot-4040-standard',
    redirectUrl: '/products/industrial-profiles/t-slot-framing'
  },
  't-slot-framing': {
    division: 'industrial-profiles',
    family: 't-slot-framing',
    redirectUrl: '/products/industrial-profiles/t-slot-framing'
  },
  v_slot_profiles: {
    division: 'industrial-profiles',
    family: 'linear-motion',
    redirectUrl: '/products/industrial-profiles/linear-motion'
  },
  'v-slot-profiles': {
    division: 'industrial-profiles',
    family: 'linear-motion',
    redirectUrl: '/products/industrial-profiles/linear-motion'
  },
  enclosure_profiles: {
    division: 'industrial-profiles',
    family: 'safety-guarding',
    redirectUrl: '/products/industrial-profiles/safety-guarding'
  },
  'enclosure-profiles': {
    division: 'industrial-profiles',
    family: 'safety-guarding',
    redirectUrl: '/products/industrial-profiles/safety-guarding'
  },

  // 3. Solar Profiles
  solar_panel_frame_profiles: {
    division: 'solar',
    family: 'solar-module-frames',
    redirectUrl: '/products/solar/solar-module-frames'
  },
  'solar-panel-frame-profiles': {
    division: 'solar',
    family: 'solar-module-frames',
    redirectUrl: '/products/solar/solar-module-frames'
  },
  solar_mounting_rails: {
    division: 'solar',
    family: 'solar-mounting-rails',
    system: 'solar-mounting-rail-r1',
    redirectUrl: '/products/solar/solar-mounting-rails'
  },
  'solar-mounting-rails': {
    division: 'solar',
    family: 'solar-mounting-rails',
    redirectUrl: '/products/solar/solar-mounting-rails'
  },
  solar_mid_clamps: {
    division: 'solar',
    family: 'solar-clamps',
    redirectUrl: '/products/solar/solar-clamps'
  },
  'solar-mid-clamps': {
    division: 'solar',
    family: 'solar-clamps',
    redirectUrl: '/products/solar/solar-clamps'
  },
  solar_end_clamps: {
    division: 'solar',
    family: 'solar-clamps',
    redirectUrl: '/products/solar/solar-clamps'
  },
  'solar-end-clamps': {
    division: 'solar',
    family: 'solar-clamps',
    redirectUrl: '/products/solar/solar-clamps'
  },

  // 4. Thermal Management
  heat_sink_profiles: {
    division: 'thermal-management',
    family: 'industrial-heat-sinks',
    system: 'comb-heat-sink-ch-200',
    redirectUrl: '/products/thermal-management/industrial-heat-sinks'
  },
  'heat-sink-profiles': {
    division: 'thermal-management',
    family: 'industrial-heat-sinks',
    redirectUrl: '/products/thermal-management/industrial-heat-sinks'
  },
  led_lighting_profiles: {
    division: 'thermal-management',
    family: 'led-heat-sinks',
    redirectUrl: '/products/thermal-management/led-heat-sinks'
  },
  'led-lighting-profiles': {
    division: 'thermal-management',
    family: 'led-heat-sinks',
    redirectUrl: '/products/thermal-management/led-heat-sinks'
  },

  // 5. Architectural Systems
  curtain_wall_profiles: {
    division: 'architectural',
    family: 'curtain-wall-facade',
    system: 'unitized-curtain-wall-150',
    redirectUrl: '/products/architectural/curtain-wall-facade'
  },
  'curtain-wall-profiles': {
    division: 'architectural',
    family: 'curtain-wall-facade',
    redirectUrl: '/products/architectural/curtain-wall-facade'
  },
  window_door_profiles: {
    division: 'architectural',
    family: 'windows-doors',
    system: 'thermal-break-casement-window-65',
    redirectUrl: '/products/architectural/windows-doors'
  },
  'window-door-profiles': {
    division: 'architectural',
    family: 'windows-doors',
    redirectUrl: '/products/architectural/windows-doors'
  },
  handrail_profiles: {
    division: 'architectural',
    family: 'railing-balustrade',
    redirectUrl: '/products/architectural/railing-balustrade'
  },
  'handrail-profiles': {
    division: 'architectural',
    family: 'railing-balustrade',
    redirectUrl: '/products/architectural/railing-balustrade'
  },
  railing_balustrade_profiles: {
    division: 'architectural',
    family: 'railing-balustrade',
    redirectUrl: '/products/architectural/railing-balustrade'
  },
  'railing-balustrade-profiles': {
    division: 'architectural',
    family: 'railing-balustrade',
    redirectUrl: '/products/architectural/railing-balustrade'
  },

  // 6. OEM Components
  cnc_machined_components: {
    division: 'oem-components',
    family: 'cnc-machined-components',
    system: '5-axis-cnc-structural-bracket',
    redirectUrl: '/products/oem-components/cnc-machined-components'
  },
  'cnc-machined-components': {
    division: 'oem-components',
    family: 'cnc-machined-components',
    redirectUrl: '/products/oem-components/cnc-machined-components'
  },
  custom_aluminium_parts: {
    division: 'oem-components',
    family: 'custom-oem-parts',
    redirectUrl: '/products/oem-components/custom-oem-parts'
  },
  'custom-aluminium-parts': {
    division: 'oem-components',
    family: 'custom-oem-parts',
    redirectUrl: '/products/oem-components/custom-oem-parts'
  },
  industrial_assemblies: {
    division: 'oem-components',
    family: 'assembled-subcomponents',
    redirectUrl: '/products/oem-components/assembled-subcomponents'
  },
  'industrial-assemblies': {
    division: 'oem-components',
    family: 'assembled-subcomponents',
    redirectUrl: '/products/oem-components/assembled-subcomponents'
  }
};

/**
 * Mapping of legacy category slugs to canonical division slugs
 */
export const LEGACY_CATEGORY_ROUTE_MAP: Record<string, string> = {
  'architectural-systems': 'architectural',
  'architectural-aluminium': 'architectural',
  'solar-profiles': 'solar',
  'solar-aluminium': 'solar',
  'heat-sink-thermal': 'thermal-management',
  'oem-parts': 'oem-components',
  'custom-aluminium-extrusions': 'custom-extrusions',
  'industrial-aluminium-profiles': 'industrial-profiles'
};

/**
 * Helper to resolve a legacy product slug to its canonical URL
 */
export function resolveLegacyProductUrl(legacySlug: string): string {
  const match = LEGACY_PRODUCT_ROUTE_MAP[legacySlug];
  if (match) {
    return match.redirectUrl;
  }
  return '/products';
}

/**
 * Helper to resolve a legacy category slug to its canonical category URL
 */
export function resolveLegacyCategoryUrl(legacyCategorySlug: string): string {
  const canonicalSlug = LEGACY_CATEGORY_ROUTE_MAP[legacyCategorySlug];
  if (canonicalSlug) {
    return `/products/${canonicalSlug}`;
  }
  return `/products/${legacyCategorySlug}`;
}

/**
 * LEGACY V5 TAXONOMY -> CANONICAL V6 FAMILY MAP
 *
 * The V5 taxonomy (product-taxonomy.ts) exposed 73 subcategory slugs. 19 of them
 * match a canonical family slug exactly; the 54 below do not, and used to render
 * a thin stub page that competed with its canonical twin for the same keywords.
 *
 * They are permanently redirected instead. Keyed by legacy subcategory slug
 * because these slugs are unique across the whole V5 taxonomy.
 */
export const LEGACY_FAMILY_ROUTE_MAP: Record<string, { division: string; family: string }> = {
  // --- Custom Extrusions ---
  'custom-solid-profiles': { division: 'custom-extrusions', family: 'solid-extrusions' },
  'custom-hollow-profiles': { division: 'custom-extrusions', family: 'hollow-extrusions' },
  'semi-hollow-profiles': { division: 'custom-extrusions', family: 'semi-hollow-extrusions' },
  'complex-multi-void': { division: 'custom-extrusions', family: 'complex-extrusions' },
  'round-tubes': { division: 'custom-extrusions', family: 'round-profiles' },
  'square-rectangular-hollow': { division: 'custom-extrusions', family: 'square-rectangular-profiles' },
  'angle-profiles': { division: 'custom-extrusions', family: 'angles' },
  'channel-profiles': { division: 'custom-extrusions', family: 'channels' },
  't-profiles': { division: 'custom-extrusions', family: 'structural-profiles' },
  'structural-beams-i-h': { division: 'custom-extrusions', family: 'structural-profiles' },
  'custom-decorative': { division: 'custom-extrusions', family: 'decorative-profiles' },

  // --- Industrial Profiles (the six T-slot series consolidate into one family) ---
  't-slot-20-series': { division: 'industrial-profiles', family: 't-slot-framing' },
  't-slot-30-series': { division: 'industrial-profiles', family: 't-slot-framing' },
  't-slot-40-series': { division: 'industrial-profiles', family: 't-slot-framing' },
  't-slot-45-series': { division: 'industrial-profiles', family: 't-slot-framing' },
  't-slot-60-series': { division: 'industrial-profiles', family: 't-slot-framing' },
  't-slot-80-series': { division: 'industrial-profiles', family: 't-slot-framing' },
  'machine-frame-profiles': { division: 'industrial-profiles', family: 'machine-frames' },
  'automation-frame-profiles': { division: 'industrial-profiles', family: 'automation-profiles' },
  'robot-guard-profiles': { division: 'industrial-profiles', family: 'safety-guarding' },
  'safety-guard-profiles': { division: 'industrial-profiles', family: 'safety-guarding' },
  'workstation-profiles': { division: 'industrial-profiles', family: 'workstation-systems' },
  'cleanroom-profiles': { division: 'industrial-profiles', family: 'cleanroom-systems' },
  'linear-motion-profiles': { division: 'industrial-profiles', family: 'linear-motion' },
  'equipment-frame-profiles': { division: 'industrial-profiles', family: 'equipment-frames' },
  'industrial-enclosure-profiles': { division: 'industrial-profiles', family: 'equipment-frames' },
  'custom-machinery-extrusions': { division: 'industrial-profiles', family: 'custom-industrial-extrusions' },

  // --- Solar ---
  'solar-module-frame-profiles': { division: 'solar', family: 'solar-module-frames' },
  'rooftop-mounting-rails': { division: 'solar', family: 'rooftop-systems' },
  'ground-mount-profiles': { division: 'solar', family: 'ground-mount-systems' },
  'solar-mid-clamp-profiles': { division: 'solar', family: 'solar-clamps' },
  'solar-end-clamp-profiles': { division: 'solar', family: 'solar-clamps' },
  'solar-carport-profiles': { division: 'solar', family: 'solar-carport' },
  'solar-structural-beams': { division: 'solar', family: 'solar-structural-profiles' },
  'bipv-aluminium-profiles': { division: 'solar', family: 'bipv-profiles' },
  'solar-canopy-structures': { division: 'solar', family: 'solar-canopies' },
  'solar-inverter-enclosures': { division: 'solar', family: 'inverter-enclosures' },
  'solar-equipment-housings': { division: 'solar', family: 'inverter-enclosures' },

  // --- Architectural ---
  'decorative-screens': { division: 'architectural', family: 'decorative-aluminium' },

  // --- Thermal Management ---
  'led-heat-sink-profiles': { division: 'thermal-management', family: 'led-heat-sinks' },
  'lighting-heat-sink-profiles': { division: 'thermal-management', family: 'lighting-heat-sinks' },
  'inverter-heat-sink-profiles': { division: 'thermal-management', family: 'inverter-heat-sinks' },
  'power-electronics-heat-sinks': { division: 'thermal-management', family: 'power-electronics-cooling' },
  'battery-thermal-profiles': { division: 'thermal-management', family: 'battery-thermal' },
  'telecom-heat-sink-profiles': { division: 'thermal-management', family: 'telecom-cooling' },
  'industrial-cooling-profiles': { division: 'thermal-management', family: 'industrial-heat-sinks' },
  'custom-high-fin-extrusions': { division: 'thermal-management', family: 'industrial-heat-sinks' },

  // --- OEM Components ---
  'cut-to-length-components': { division: 'oem-components', family: 'precision-cut-components' },
  'precision-aluminium-parts': { division: 'oem-components', family: 'custom-oem-parts' },
  'surface-finished-oem': { division: 'oem-components', family: 'surface-finished-components' },
  'powder-coated-oem': { division: 'oem-components', family: 'powder-coated-components' },
  'anodized-oem': { division: 'oem-components', family: 'anodized-components' },
  'custom-aluminium-parts': { division: 'oem-components', family: 'custom-oem-parts' },
  'private-label-components': { division: 'oem-components', family: 'custom-oem-parts' }
};

/**
 * Resolves a legacy V5 subcategory slug to its canonical family URL.
 * Returns undefined when the slug is not a legacy orphan.
 */
export function resolveLegacyFamilyUrl(legacySubcategorySlug: string): string | undefined {
  const target = LEGACY_FAMILY_ROUTE_MAP[legacySubcategorySlug];
  return target ? `/products/${target.division}/${target.family}` : undefined;
}
