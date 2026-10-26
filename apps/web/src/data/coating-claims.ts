/**
 * LELOI METAL — Approved wording for powder coating claims (SSoT).
 *
 * Background: the site previously carried four different AkzoNobel claims side
 * by side — "AkzoNobel 10-Year Warranty" (unconditional), "Warranties up to
 * 10 years*" (hedged), "AkzoNobel Approved Coater" and "AkzoNobel Approved".
 *
 * Two problems with the stronger variants:
 *
 *  1. The source record behind them (SRC-AKZ-PROP-2026) supports
 *     "warranties up to 10 years, subject to the approved system, environment
 *     and warranty conditions" — not an unconditional 10-year warranty on
 *     every order.
 *  2. "Approved Coater" and "Approved Applicator" are formal statuses that a
 *     coatings manufacturer grants in writing. Asserting one without holding
 *     the written authorisation is a trademark and misrepresentation risk, and
 *     is the kind of claim an EU or North American buyer verifies directly
 *     with the coatings manufacturer during vendor onboarding.
 *
 * Every surface that mentions coating warranty must import from this file.
 * Do not reintroduce "Approved Coater" or a flat "10-Year Warranty" until the
 * written authorisation is on file; when it is, change it here once.
 */

export const COATING_CLAIMS = {
  /** Short badge text. Safe on chips, pills and nav items. */
  badge: 'AkzoNobel powder coating',

  /** Badge variant where warranty needs mentioning in very little space. */
  badgeWithWarranty: 'AkzoNobel coating · up to 10-yr warranty',

  /** One-line claim for cards and section subtitles. */
  short: 'AkzoNobel powder coating systems with warranties of up to 10 years',

  /** Full sentence for body copy and hero paragraphs. */
  full:
    'Premium architectural powder coating using AkzoNobel powder coating systems, with warranties of up to 10 years available depending on the approved system and project conditions.',

  /**
   * The qualifier. Must appear on any page that states a warranty duration.
   */
  disclaimer:
    'Warranty availability and duration depend on the approved coating system, project location, environmental exposure, surface preparation and the applicable warranty conditions, and are confirmed in writing with your quotation.',

  /**
   * What we may say about our relationship to AkzoNobel today: we apply their
   * powder. We do not claim a certified applicator status we cannot evidence.
   */
  relationship: 'We apply AkzoNobel powder coating systems.'
} as const;

/**
 * Wording that must never appear publicly until written authorisation exists.
 * Enforced by tests/claim-wording.test.ts.
 */
export const PROHIBITED_COATING_PHRASES = [
  'AkzoNobel Approved Coater',
  'AkzoNobel Approved Applicator',
  'AkzoNobel Certified',
  'AkzoNobel 10-Year Warranty',
  'AkzoNobel 10 Year Warranty',
  'AkzoNobel 10-Yr Warranty'
];
