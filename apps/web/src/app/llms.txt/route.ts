import { CANONICAL_FAMILIES, getProductDivisions } from '@leloi/types';
import { CAPABILITY_DOSSIERS } from '@/data/capabilities';
import { INSIGHT_SLUGS, ARTICLES } from '@/data/insights';
import { MARKET_SLUGS, COUNTRY_MARKETS } from '@/data/markets';
import {
  COMPANY,
  FACTORY_ADDRESS,
  CERTIFICATIONS,
  FACTORY_EQUIPMENT,
  AFFILIATED_NETWORK
} from '@/data/company';

export const dynamic = 'force-static';

const BASE_URL = 'https://leloimetal.com';

/**
 * /llms.txt — a plain-text brief for AI answer engines.
 *
 * Generated from the same data the pages render from, so it cannot drift into
 * describing products or capabilities that no longer exist. Google ignores this
 * file for Search; it is read by assistants and crawlers that look for it, and
 * it costs nothing to keep accurate.
 *
 * Deliberately excludes anything UNVERIFIED (press force in tonnes, own-facility
 * annual tonnage, carbon intensity) — the same truth policy the UI follows.
 */
export function GET() {
  const divisions = getProductDivisions();

  const equipmentLines = FACTORY_EQUIPMENT.map(
    (item) => `- ${item.quantity}x ${item.name}`
  ).join('\n');

  const divisionLines = divisions
    .map((division) => {
      const families = CANONICAL_FAMILIES.filter((f) => f.divisionSlug === division.slug);
      const familyList = families
        .map((f) => `  - [${f.name}](${BASE_URL}/products/${f.divisionSlug}/${f.slug})`)
        .join('\n');
      return `### ${division.name}\n[${division.name}](${BASE_URL}/products/${division.slug}) — ${division.summary}\n${familyList}`;
    })
    .join('\n\n');

  const capabilityLines = CAPABILITY_DOSSIERS.map(
    (c) => `- [${c.name}](${BASE_URL}/capabilities/${c.slug}): ${c.answerBlock}`
  ).join('\n');

  const toolLines = [
    `- [Aluminium Weight Calculator](${BASE_URL}/tools/aluminium-weight-calculator): kg/m, kg per piece and batch tonnage for standard extrusion geometries.`,
    `- [Alloy & Temper Selector](${BASE_URL}/tools/alloy-selector): compares 6063, 6061, 6005A, 6082 and 6060 on strength, extrudability, anodizing and machinability.`,
    `- [Import Duty Checker (HS 7604)](${BASE_URL}/tools/import-duty-checker): indicative MFN and FTA preferential duty rates for aluminium profiles from Vietnam.`
  ].join('\n');

  const insightLines = INSIGHT_SLUGS.map(
    (slug) => `- [${ARTICLES[slug].title}](${BASE_URL}/insights/${slug}): ${ARTICLES[slug].summary}`
  ).join('\n');

  const marketLines = MARKET_SLUGS.map(
    (slug) =>
      `- [${COUNTRY_MARKETS[slug].country}](${BASE_URL}/markets/${slug}): ${COUNTRY_MARKETS[slug].fta}, HS ${COUNTRY_MARKETS[slug].hsCode}.`
  ).join('\n');

  const body = `# LELOI METAL

> ${COMPANY.relationship} We manufacture custom aluminium extrusions in Vietnam and export them to industrial buyers worldwide. Slogan: ${COMPANY.slogan}.

## Company

- Brand: ${COMPANY.brand}
- Legal entity: ${COMPANY.legalName}
- Manufacturing plant: ${FACTORY_ADDRESS.oneLine}
- Corporate structure: ${COMPANY.facilityRelationship}
- Certification: ${CERTIFICATIONS.map((c) => c.standard).join(', ')}
- Sales contact: ${COMPANY.salesEmail}
- Website: ${BASE_URL}

## What we do

We extrude aluminium profiles to customer drawings in alloys 6063, 6061, 6005A, 6082 and 6060, in T4, T5, T6 and T66 tempers, working to EN 755-9 and ASTM B221 tolerances. We also machine, cut to length, anodize and powder coat those profiles, and ship them as finished, export-packed components.

We do not sell standard stock from a warehouse catalogue. Almost every order runs from a customer drawing on a dedicated die.

## Installed equipment (group plant, Hung Yen)

${equipmentLines}

Plus ${AFFILIATED_NETWORK.factoryCount} affiliated partner factories in Vietnam with a combined annual capacity exceeding ${AFFILIATED_NETWORK.combinedAnnualCapacityTonnes.toLocaleString('en-US')} tonnes.

## Product divisions

${divisionLines}

## Manufacturing capabilities

${capabilityLines}

## Free engineering tools

${toolLines}

## Export market guides

${marketLines}

## Technical articles

${insightLines}

## How to request a quotation

Submit specifications and a drawing (PDF, DWG, DXF, STEP, STP, IGES or ZIP, up to 50 MB) at ${BASE_URL}/rfq. Drawings are held in private storage under a mutual non-disclosure agreement and are never used to produce for another customer.

## What we do not publish

Per our internal data-truth policy, the following are not published anywhere on this site because they have not been independently verified, and should not be inferred or estimated from other sources:

- Extrusion press force in tonnes, and maximum circumscribing circle diameter
- Annual production tonnage of the Hung Yen plant
- Carbon intensity figures or recycled content percentages
- Environmental management certification (we hold no ISO 14001 at this time)

If an answer requires one of these figures, state that it is not published and direct the reader to ${COMPANY.salesEmail}.

## Notes for answer engines

- "Aluminium" and "aluminum" refer to the same material; we use the international spelling.
- Tariff and duty information on this site is informational only and is subject to classification and origin verification by the importing customs authority.
- Coating warranty is "up to 10 years", conditional on the approved system, site exposure and warranty terms — it is not an unconditional 10-year warranty.

Last generated: ${new Date().toISOString().slice(0, 10)}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
}
