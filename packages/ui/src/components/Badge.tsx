import React from 'react';
import { PublicationStatus } from '@leloi/types';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'verified' | 'unverified' | 'review' | 'expired' | 'alloy' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5 font-medium',
    md: 'text-xs px-2.5 py-1 font-medium'
  };

  const variantStyles = {
    default: 'bg-[#F1F4F8] text-[#0A2D5B] border border-[#E2E8F0]',
    verified: 'bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold',
    unverified: 'bg-rose-50 text-rose-700 border border-rose-200',
    review: 'bg-amber-50 text-amber-800 border border-amber-200',
    expired: 'bg-slate-100 text-slate-600 border border-slate-300',
    alloy: 'bg-[#0A2D5B]/5 text-[#0A2D5B] border border-[#9AA3AF]/40 font-mono tracking-tight',
    outline: 'border border-[#9AA3AF] text-[#172033] bg-transparent'
  };

  return (
    <span
      className={`inline-flex items-center rounded gap-1 select-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export const VerificationStatusBadge: React.FC<{
  status: PublicationStatus;
  className?: string;
}> = ({ status, className = '' }) => {
  switch (status) {
    case PublicationStatus.VERIFIED:
      return (
        <Badge variant="verified" className={className}>
          <svg className="w-3 h-3 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          VERIFIED DATA
        </Badge>
      );
    case PublicationStatus.REVIEW_REQUIRED:
      return <Badge variant="review" className={className}>REVIEW REQUIRED</Badge>;
    case PublicationStatus.EXPIRED:
      return <Badge variant="expired" className={className}>EXPIRED</Badge>;
    case PublicationStatus.UNVERIFIED:
    default:
      return <Badge variant="unverified" className={className}>UNVERIFIED</Badge>;
  }
};
