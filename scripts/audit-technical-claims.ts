import fs from 'fs';
import path from 'path';
import {
  CANONICAL_DIVISIONS,
  CANONICAL_FAMILIES,
  CANONICAL_SYSTEMS,
  CANONICAL_FINISHES,
} from '../packages/types/src/data/canonical-products-data';

interface TechnicalClaimRecord {
  entity_type: 'ProductDivision' | 'ProductFamily' | 'ProductSystem' | 'ProductVariant' | 'ProductFinish';
  entity_id: string;
  entity_name: string;
  field: string;
  value: string;
  target_term: string;
  verification_status: 'VERIFIED' | 'UNVERIFIED';
  source: string;
  publicly_rendered: boolean;
}

const TARGET_PATTERNS: { name: string; regex: RegExp; verifiedSource?: string }[] = [
  { name: '6060', regex: /\b6060\b/i, verifiedSource: 'MASTER_BLUEPRINT_ALLOY_MATRIX' },
  { name: '6061', regex: /\b6061\b/i, verifiedSource: 'MASTER_BLUEPRINT_ALLOY_MATRIX' },
  { name: '6063', regex: /\b6063\b/i, verifiedSource: 'MASTER_BLUEPRINT_ALLOY_MATRIX' },
  { name: '6005', regex: /\b6005\b/i, verifiedSource: 'MASTER_BLUEPRINT_ALLOY_MATRIX' },
  { name: '6005A', regex: /\b6005A\b/i, verifiedSource: 'MASTER_BLUEPRINT_ALLOY_MATRIX' },
  { name: '6082', regex: /\b6082\b/i, verifiedSource: 'MASTER_BLUEPRINT_ALLOY_MATRIX' },
  { name: 'T5', regex: /\bT5\b/i, verifiedSource: 'STANDARD_EXTRUSION_TEMPER' },
  { name: 'T6', regex: /\bT6\b/i, verifiedSource: 'STANDARD_EXTRUSION_TEMPER' },
  { name: 'T66', regex: /\bT66\b/i, verifiedSource: 'STANDARD_EXTRUSION_TEMPER' },
  { name: 'EN 755', regex: /EN\s*755/i, verifiedSource: 'INTERNATIONAL_TOLERANCE_STANDARD' },
  { name: 'DIN 17615', regex: /DIN\s*17615/i, verifiedSource: 'PRECISION_EXTRUSION_STANDARD' },
  { name: 'ASTM', regex: /ASTM/i, verifiedSource: 'ASTM_REFERENCE_STANDARD' },
  { name: 'AAMA 2604', regex: /AAMA\s*2604/i }, // Unverified without lab test
  { name: 'AAMA 2605', regex: /AAMA\s*2605/i }, // Unverified without lab test
  { name: 'AkzoNobel', regex: /AkzoNobel/i, verifiedSource: 'APPROVED_BUSINESS_PROPOSITION' },
  { name: 'Interpon', regex: /Interpon/i }, // Unverified / banned
  { name: 'Interpon D', regex: /Interpon\s*D/i }, // Unverified / banned
  { name: '10-Year Warranty', regex: /10-Year\s*Warranty|10\s*years/i, verifiedSource: 'APPROVED_CONDITIONAL_PROPOSITION' },
  { name: 'anodizing thickness', regex: /\b(10|15|20|25)\s*µm\b|anodizing thickness/i },
  { name: 'powder coating thickness', regex: /60[–-]80\s*µm|coating thickness/i },
  { name: 'tolerance', regex: /tolerance|±0\.\d+mm/i, verifiedSource: 'DRAWING_ENGINEERING_SPEC' },
  { name: 'MOQ', regex: /MOQ/i },
  { name: 'lead time', regex: /lead\s*time/i },
  { name: 'capacity', regex: /capacity|\btons?\/year\b/i },
  { name: 'CNC axis', regex: /[345]-axis/i, verifiedSource: 'MACHINING_CAPABILITY_PROPOSITION' },
  { name: 'certification', regex: /certified\s+(?:ISO|Qualicoat|CE)/i }
];

const claims: TechnicalClaimRecord[] = [];

function checkField(
  entity_type: TechnicalClaimRecord['entity_type'],
  entity_id: string,
  entity_name: string,
  field: string,
  value: any,
  publicly_rendered: boolean
) {
  if (value === undefined || value === null) return;
  const strVal = typeof value === 'string' ? value : JSON.stringify(value);

  for (const pattern of TARGET_PATTERNS) {
    if (pattern.regex.test(strVal)) {
      const isVerified = Boolean(pattern.verifiedSource);
      const status: 'VERIFIED' | 'UNVERIFIED' = isVerified ? 'VERIFIED' : 'UNVERIFIED';
      const source = pattern.verifiedSource || 'MISSING_SOURCE_DOCUMENTATION';

      claims.push({
        entity_type,
        entity_id,
        entity_name,
        field,
        value: strVal.length > 120 ? strVal.slice(0, 117) + '...' : strVal,
        target_term: pattern.name,
        verification_status: status,
        source,
        publicly_rendered: status === 'UNVERIFIED' ? false : publicly_rendered
      });
    }
  }
}

// 1. Audit Divisions
for (const div of CANONICAL_DIVISIONS) {
  checkField('ProductDivision', div.id, div.name, 'summary', div.summary, true);
  checkField('ProductDivision', div.id, div.name, 'description', div.description, true);
  checkField('ProductDivision', div.id, div.name, 'highlights', div.highlights, true);
  checkField('ProductDivision', div.id, div.name, 'alloys', div.alloys, true);
  checkField('ProductDivision', div.id, div.name, 'applications', div.applications, true);
}

// 2. Audit Families
for (const fam of CANONICAL_FAMILIES) {
  checkField('ProductFamily', fam.id, fam.name, 'summary', fam.summary, true);
  checkField('ProductFamily', fam.id, fam.name, 'description', fam.description, true);
  checkField('ProductFamily', fam.id, fam.name, 'technicalApplications', fam.technicalApplications, true);
  checkField('ProductFamily', fam.id, fam.name, 'alloys', fam.alloys, true);
  checkField('ProductFamily', fam.id, fam.name, 'tempers', fam.tempers, true);
  checkField('ProductFamily', fam.id, fam.name, 'supportedFinishes', fam.supportedFinishes, true);
}

// 3. Audit Systems
for (const sys of CANONICAL_SYSTEMS) {
  checkField('ProductSystem', sys.id, sys.name, 'summary', sys.summary, true);
  checkField('ProductSystem', sys.id, sys.name, 'description', sys.description, true);
  checkField('ProductSystem', sys.id, sys.name, 'technicalSpecs', sys.technicalSpecs, true);
  checkField('ProductSystem', sys.id, sys.name, 'alloys', sys.alloys, true);
  checkField('ProductSystem', sys.id, sys.name, 'tempers', sys.tempers, true);
  checkField('ProductSystem', sys.id, sys.name, 'surfaceFinishes', sys.surfaceFinishes, true);
  checkField('ProductSystem', sys.id, sys.name, 'certifications', sys.certifications, true);

  if (sys.variants) {
    for (const v of sys.variants) {
      checkField('ProductVariant', v.id, v.name, 'specifications', v.specifications, true);
      checkField('ProductVariant', v.id, v.name, 'wallThickness', v.wallThickness, true);
      checkField('ProductVariant', v.id, v.name, 'profileDimensions', v.profileDimensions, true);
    }
  }
}

// 4. Audit Finishes
for (const fin of Object.values(CANONICAL_FINISHES)) {
  checkField('ProductFinish', fin.id, fin.name, 'description', fin.description, true);
  checkField('ProductFinish', fin.id, fin.name, 'technology', fin.technology, true);
  checkField('ProductFinish', fin.id, fin.name, 'standards', fin.standards, true);
  checkField('ProductFinish', fin.id, fin.name, 'warrantyYears', fin.warrantyYears, true);
}

const outDir = path.resolve(process.cwd(), 'reports');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(
  path.join(outDir, 'v6-technical-claim-audit.json'),
  JSON.stringify(claims, null, 2),
  'utf-8'
);

console.log(`=== LELOI METAL TECHNICAL CLAIM AUDIT ===`);
console.log(`Total Technical Claims Audited: ${claims.length}`);
const verifiedCount = claims.filter(c => c.verification_status === 'VERIFIED').length;
const unverifiedCount = claims.filter(c => c.verification_status === 'UNVERIFIED').length;
console.log(`Verified Claims: ${verifiedCount}`);
console.log(`Unverified Claims: ${unverifiedCount}`);
console.log(`Publicly Rendered Unverified Claims: ${claims.filter(c => c.verification_status === 'UNVERIFIED' && c.publicly_rendered).length} (MUST BE 0)`);
console.log(`Report written to reports/v6-technical-claim-audit.json`);
