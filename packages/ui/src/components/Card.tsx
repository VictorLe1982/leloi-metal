import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'technical' | 'interactive' | 'dark';
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  noPadding = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-lg transition-all duration-200 overflow-hidden';

  const variantStyles = {
    default: 'bg-white border border-[#E2E8F0] shadow-sm',
    technical: 'bg-[#F1F4F8]/50 border border-[#9AA3AF]/30 shadow-none hover:border-[#2F7BFF]/50 relative',
    interactive: 'bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#2F7BFF] cursor-pointer group',
    dark: 'bg-[#0A2D5B] text-white border border-[#123D77] shadow-md'
  };

  const paddingStyle = noPadding ? '' : 'p-6';

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${paddingStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
