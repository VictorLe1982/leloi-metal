import React from 'react';

export interface BrandLogoProps {
  /**
   * Logo variant:
   * - 'primary': Full horizontal logo with Blue Two-L symbol + Navy text (for light backgrounds)
   * - 'white': Full horizontal logo with Blue Two-L symbol + White text (for dark/footer backgrounds)
   * - 'mark': Two-L geometric extrusion symbol only
   */
  variant?: 'primary' | 'white' | 'mark';
  /**
   * Target width in pixels (e.g., 185–200 for desktop header, 210–240 for footer)
   */
  width?: number;
  /**
   * Target height in pixels (optional, aspect ratio preserved if omitted)
   */
  height?: number;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Image format to use: 'png' | 'svg' (defaults to 'png' for pixel-perfect master fidelity)
   */
  format?: 'png' | 'svg';
  /**
   * Alt text for accessibility
   */
  alt?: string;
  /**
   * Link destination (if wrapped in an anchor)
   */
  href?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'primary',
  width,
  height,
  className = '',
  format = 'png',
  alt = 'LELOI METAL - Aluminium for a Better World'
}) => {
  if (variant === 'mark') {
    const markSize = width || 44;
    return (
      <div className={`inline-flex items-center shrink-0 ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/leloi-metal/logo-mark.svg"
          alt="LELOI METAL Symbol"
          width={markSize}
          height={markSize}
          className="object-contain"
          style={{ width: `${markSize}px`, height: height ? `${height}px` : 'auto' }}
        />
      </div>
    );
  }

  // Header target width: 185-200px, Footer target width: 215-240px
  const defaultWidth = variant === 'white' ? 220 : 195;
  const targetWidth = width || defaultWidth;
  const extension = format === 'svg' ? 'svg' : 'png';
  const logoSrc = `/brand/leloi-metal/logo-${variant}.${extension}`;

  return (
    <div className={`inline-flex items-center select-none shrink-0 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        alt={alt}
        width={targetWidth}
        height={Math.round(targetWidth / 3.789)}
        className="object-contain max-w-full h-auto"
        style={{
          width: `${targetWidth}px`,
          height: height ? `${height}px` : 'auto',
          aspectRatio: '1800 / 475'
        }}
      />
    </div>
  );
};

export default BrandLogo;
