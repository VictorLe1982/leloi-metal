import type { ProductFamily, ProductDivision } from '@leloi/types';
import { FACTORY_ADDRESS } from './company';

/**
 * Builds the citable "In Brief" passage for a product family page.
 *
 * Composed from that family's own data — name, alloys, tempers, finishes and
 * applications — so each of the 60 families produces a genuinely different
 * paragraph rather than the same sentence with a noun swapped. A block that
 * varies only by product name is thin content and AI engines will not cite it.
 *
 * Target length is 40–60 words: long enough to carry the specifics, short
 * enough to be quoted whole.
 */

const FINISH_LABELS: Record<string, string> = {
  POWDER_COATED: 'powder coating',
  ANODIZED: 'anodizing',
  WOOD_GRAIN: 'wood-grain finish',
  ELECTROPHORESIS: 'electrophoretic coating',
  MILL_FINISH: 'mill finish',
  PVDF: 'PVDF coating',
  BRUSHED: 'brushed finish',
  POLISHED: 'polished finish',
  SANDBLASTED: 'sandblasted finish'
};

function humaniseFinish(code: string): string {
  return FINISH_LABELS[code] ?? code.toLowerCase().replace(/_/g, ' ');
}

/** Joins with commas and a final "and". */
function listPhrase(items: string[], max = 3): string {
  const slice = items.slice(0, max);
  if (slice.length === 0) return '';
  if (slice.length === 1) return slice[0];
  return `${slice.slice(0, -1).join(', ')} and ${slice[slice.length - 1]}`;
}

export function buildFamilyAnswer(family: ProductFamily, division?: ProductDivision): string {
  const alloys = listPhrase(family.alloys, 3);
  const finishes = listPhrase(family.supportedFinishes.map(humaniseFinish), 3);
  const applications = listPhrase(family.technicalApplications, 3);
  const tempers = family.tempers.join(' and ');

  const sentences: string[] = [];

  // 1. What it is, who makes it, where — names the subject explicitly so the
  //    passage survives being lifted out of context.
  sentences.push(
    `LELOI METAL manufactures ${family.name.toLowerCase()} at its group plant in ${FACTORY_ADDRESS.region}, Vietnam` +
      (alloys ? `, extruded in ${alloys}` : '') +
      (tempers ? ` to ${tempers} temper` : '') +
      '.'
  );

  // 2. What it is used for.
  if (applications) {
    sentences.push(`These profiles are specified for ${applications.toLowerCase()}.`);
  }

  // 3. How it can be finished.
  if (finishes) {
    sentences.push(`Available finishes include ${finishes}.`);
  }

  // 4. Commercial entry point — answers the implicit "can I buy this".
  sentences.push(
    division
      ? `Profiles are produced to customer drawings within the ${division.name.toLowerCase()} line.`
      : 'Profiles are produced to customer drawings.'
  );

  return sentences.join(' ');
}

/** Word count helper used by the answer-block test to enforce the 40–60 range. */
export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}
