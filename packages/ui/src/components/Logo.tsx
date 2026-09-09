import React from 'react';

export interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  theme?: 'light' | 'dark';
  showSlogan?: boolean;
  className?: string;
  iconSize?: number;
}

/**
 * Pure SVG Fallback for Two-L Mark
 */
export const TwoLMark: React.FC<{
  size?: number;
  theme?: 'light' | 'dark';
  className?: string;
}> = ({ size = 48, theme = 'light', className = '' }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/brand/logo-symbol.png"
      alt="LELOI METAL Two-L Symbol"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
};

/**
 * Official LELOI METAL Logo Image Component
 * Renders authentic raster assets extracted directly from the approved Brand Identity Board.
 * Eliminates font distortion, text discrepancies and scaling artifacts.
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  className = '',
  iconSize = 44
}) => {
  const isDark = theme === 'dark';

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/brand/logo-symbol.png"
          alt="LELOI METAL Two-L Profile Symbol"
          width={iconSize}
          height={iconSize}
          className="object-contain"
          style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
        />
      </div>
    );
  }

  if (variant === 'stacked') {
    const height = Math.round(iconSize * 1.5);
    return (
      <div className={`inline-flex flex-col items-center select-none ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/brand/logo-stacked.png"
          alt="LELOI METAL - Aluminium for a Better World"
          height={height}
          className="object-contain h-auto"
          style={{ maxHeight: `${height}px` }}
        />
      </div>
    );
  }

  // Default: Horizontal Logo
  const height = iconSize;
  const imageSrc = isDark
    ? '/images/brand/logo-horizontal-dark.png'
    : '/images/brand/logo-horizontal-light.png';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt="LELOI METAL - Aluminium for a Better World"
        height={height}
        className="object-contain w-auto rounded-xs"
        style={{ height: `${height}px`, maxHeight: `${height}px` }}
      />
    </div>
  );
};
