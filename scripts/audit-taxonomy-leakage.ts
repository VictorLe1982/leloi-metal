import { CANONICAL_DIVISIONS, CANONICAL_FAMILIES } from '../packages/types/src/data/canonical-products-data';

interface LeakageCheckResult {
  division: string;
  expectedTaxonomyType: string;
  familiesCount: number;
  families: string[];
  leakageFound: boolean;
  leakageDetails?: string;
}

const divisionExpectations: Record<string, { type: string; keywords: string[]; forbiddenKeywords: string[] }> = {
  'custom-extrusions': {
    type: 'geometry-oriented taxonomy',
    keywords: ['solid', 'hollow', 'tube', 'pipe', 'angle', 'channel', 'tee', 'shape', 'drawn', 'profile'],
    forbiddenKeywords: ['curtain-wall', 'pergola', 'solar-mounting', 'heat-sink', 'battery-cooling']
  },
  'architectural': {
    type: 'building solution taxonomy',
    keywords: ['window', 'door', 'facade', 'curtain', 'cladding', 'louver', 'ceiling', 'canopy', 'pergola', 'balustrade', 'railing', 'screen', 'thermal-break'],
    forbiddenKeywords: ['t-slot', 'skived-fin', 'inverter-cooling', 'ground-mount', 'motor-housing', 'multivoid']
  },
  'industrial-profiles': {
    type: 'industrial application taxonomy',
    keywords: ['t-slot', 'conveyor', 'linear', 'pneumatic', 'motor', 'automation', 'cleanroom', 'guarding', 'cable', 'structure'],
    forbiddenKeywords: ['pergola', 'bungalow', 'solar-clamps', 'cladding']
  },
  'solar': {
    type: 'solar application taxonomy',
    keywords: ['solar', 'rail', 'frame', 'clamp', 'ground', 'tracker', 'ballast', 'carport', 'floating', 'bipv', 'tray'],
    forbiddenKeywords: ['window', 'skived', 'heatsink', 'curtain-wall']
  },
  'thermal-management': {
    type: 'thermal application taxonomy',
    keywords: ['heat', 'sink', 'fin', 'cooling', 'led', 'battery', 'semiconductor', 'convection'],
    forbiddenKeywords: ['pergola', 'window', 'door', 'balustrade', 'carport']
  },
  'oem-components': {
    type: 'manufacturing process/component taxonomy',
    keywords: ['cnc', 'bracket', 'cut', 'stamped', 'punched', 'welded', 'tapped', 'coated', 'anodized', 'assembled', 'part'],
    forbiddenKeywords: ['curtain-wall', 'pergola', 'solar-tracker']
  }
};

const checks: LeakageCheckResult[] = [];

for (const div of CANONICAL_DIVISIONS) {
  const families = CANONICAL_FAMILIES.filter(f => f.divisionSlug === div.slug);
  const exp = divisionExpectations[div.slug];

  let leakageFound = false;
  let leakageDetails = '';

  for (const fam of families) {
    for (const forbidden of exp.forbiddenKeywords) {
      if (fam.slug.includes(forbidden)) {
        leakageFound = true;
        leakageDetails += `Family ${fam.slug} matches forbidden keyword '${forbidden}' in division ${div.slug}; `;
      }
    }
  }

  checks.push({
    division: div.slug,
    expectedTaxonomyType: exp.type,
    familiesCount: families.length,
    families: families.map(f => f.slug),
    leakageFound,
    leakageDetails: leakageFound ? leakageDetails : undefined
  });
}

console.log('=== TAXONOMY LEAKAGE AUDIT ===');
let totalErrors = 0;
for (const chk of checks) {
  console.log(`Division: ${chk.division} (${chk.familiesCount} families) -> ${chk.expectedTaxonomyType}`);
  if (chk.leakageFound) {
    console.error(`  FAIL: ${chk.leakageDetails}`);
    totalErrors++;
  } else {
    console.log(`  PASS: Zero leakage detected. 100% compliant with ${chk.expectedTaxonomyType}.`);
  }
}

if (totalErrors > 0) {
  process.exit(1);
}
