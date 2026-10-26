import React from 'react';
import { CheckCircle2, BookOpen, Building2 } from 'lucide-react';
import { EVIDENCE_TIER_LABELS, type ClaimEvidenceTier } from '@leloi/types';

/**
 * Labels a technical claim by the strength of the evidence behind it.
 *
 * Replaces a uniform green "VERIFIED" pill that was applied to every row
 * regardless of whether the source was an accredited certificate or our own
 * blueprint. A buyer who opens one source and finds an internal document
 * stops trusting every badge on the page — so the tier is stated up front.
 */
const TIER_STYLES: Record<ClaimEvidenceTier, { className: string; Icon: typeof CheckCircle2 }> = {
  THIRD_PARTY_CERTIFICATE: {
    className: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Icon: CheckCircle2
  },
  INTERNATIONAL_STANDARD: {
    className: 'bg-blue-50 text-blue-700 border-blue-200',
    Icon: BookOpen
  },
  INTERNAL_SPECIFICATION: {
    className: 'bg-slate-100 text-slate-700 border-slate-300',
    Icon: Building2
  }
};

export const EvidenceTierBadge: React.FC<{ tier?: ClaimEvidenceTier }> = ({ tier }) => {
  if (!tier) {
    return <span className="text-[11px] text-slate-400">No source on file</span>;
  }

  const { className, Icon } = TIER_STYLES[tier];
  const { label, description } = EVIDENCE_TIER_LABELS[tier];

  return (
    <span
      title={description}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${className}`}
    >
      <Icon className="w-3.5 h-3.5" aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
};
