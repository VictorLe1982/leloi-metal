import React from 'react';

export interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  theme?: 'light' | 'dark';
  showSlogan?: boolean;
  className?: string;
  width?: number;
  iconSize?: number;
  responsiveSlogan?: boolean;
}

/**
 * Official Two-L Mark Component
 */
export const TwoLMark: React.FC<{
  size?: number;
  theme?: 'light' | 'dark';
  className?: string;
}> = ({ size = 44, className = '' }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/brand/logo-symbol.png"
      alt="LELOI METAL Two-L Symbol"
      width={size}
      height={Math.round(size * 0.75)}
      className={`object-contain ${className}`}
      style={{ width: `${size}px`, height: 'auto' }}
    />
  );
};

/**
 * Official LELOI METAL Logo Component
 * CODEX V3 Compliant:
 * - Uses approved transparent PNGs (no background, no bounding box artifacts)
 * - Desktop width: 180–205px (Header), 210–240px (Footer)
 * - Preserves aspect ratio with object-contain and height: auto
 * - Responsive slogan hiding below ~1180px when enabled
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  showSlogan = true,
  className = '',
  width,
  iconSize = 44,
  responsiveSlogan = false
}) => {
  const isDark = theme === 'dark';

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center shrink-0 ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/brand/logo-symbol.png"
          alt="LELOI METAL Symbol"
          width={iconSize}
          height={Math.round(iconSize * 0.75)}
          className="object-contain"
          style={{ width: `${iconSize}px`, height: 'auto' }}
        />
      </div>
    );
  }

  if (variant === 'stacked') {
    const targetWidth = width || 160;
    const imageSrc = isDark
      ? '/brand/leloi-metal/logo-white.png'
      : '/brand/leloi-metal/logo-primary.png';
    return (
      <div className={`inline-flex flex-col items-center select-none shrink-0 ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt="LELOI METAL - Aluminium for a Better World"
          width={targetWidth}
          className="object-contain w-auto h-auto max-w-full"
          style={{ width: `${targetWidth}px` }}
        />
      </div>
    );
  }

  // Default: Horizontal Logo
  // Header standard: 185-200px. Footer standard: 210-235px.
  const targetWidth = width || (isDark ? 220 : 195);
  const fullSrc = isDark
    ? '/brand/leloi-metal/logo-white.png'
    : '/brand/leloi-metal/logo-primary.png';
  const noSloganSrc = isDark
    ? '/brand/leloi-metal/logo-white.png'
    : '/brand/leloi-metal/logo-primary.png';

  if (responsiveSlogan) {
    return (
      <div className={`inline-flex items-center select-none shrink-0 ${className}`}>
        {/* With Slogan on >= 1180px */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={fullSrc}
          alt="LELOI METAL - Aluminium for a Better World"
          width={targetWidth}
          className="hidden min-[1180px]:block object-contain h-auto"
          style={{ width: `${targetWidth}px` }}
        />
        {/* Without Slogan on < 1180px */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={noSloganSrc}
          alt="LELOI METAL"
          width={Math.round(targetWidth * 0.88)}
          className="block min-[1180px]:hidden object-contain h-auto"
          style={{ width: `${Math.round(targetWidth * 0.88)}px` }}
        />
      </div>
    );
  }

  const selectedSrc = showSlogan ? fullSrc : noSloganSrc;

  return (
    <div className={`inline-flex items-center select-none shrink-0 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={selectedSrc}
        alt="LELOI METAL - Aluminium for a Better World"
        width={targetWidth}
        className="object-contain h-auto max-w-full"
        style={{ width: `${targetWidth}px` }}
      />
    </div>
  );
};
