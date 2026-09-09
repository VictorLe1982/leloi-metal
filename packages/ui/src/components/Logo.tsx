import React from 'react';

export interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  theme?: 'light' | 'dark';
  showSlogan?: boolean;
  className?: string;
  iconSize?: number;
}

/**
 * Two-L Aluminium Profile Geometry Icon Mark
 * Based strictly on approved LELOI METAL Brand Identity Board.
 */
export const TwoLMark: React.FC<{
  size?: number;
  theme?: 'light' | 'dark';
  className?: string;
}> = ({ size = 48, theme = 'light', className = '' }) => {
  const navyColor = theme === 'dark' ? '#FFFFFF' : '#0A2D5B';
  const blueColor = '#2F7BFF';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="LELOI METAL Two-L Symbol"
    >
      {/* Primary L - Dark Navy / White on Dark: Solid extrusion spine & base */}
      <path
        d="M16 26H36V66H68V86H16V26Z"
        fill={navyColor}
      />
      {/* Secondary L - Bright Blue: Nested extrusion profile with dynamic angled top & base */}
      <path
        d="M42 16L62 6V50H92V70H42V16Z"
        fill={blueColor}
      />
      {/* Profile bevel shadow / technical extrusion detail */}
      <path
        d="M36 66L42 70V86H16L16 90H72L68 86H36V66Z"
        fill={theme === 'dark' ? 'rgba(255,255,255,0.2)' : '#061D3B'}
        opacity="0.3"
      />
      <path
        d="M62 6L66 9V50L96 53V70H92L62 50V6Z"
        fill="#1B6BF8"
        opacity="0.4"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  theme = 'light',
  showSlogan = true,
  className = '',
  iconSize
}) => {
  const isDark = theme === 'dark';
  const leloiColor = isDark ? '#FFFFFF' : '#0A2D5B';
  const metalColor = '#9AA3AF';
  const sloganColor = isDark ? '#DCE6F3' : '#0A2D5B';
  const dividerColor = isDark ? 'rgba(255, 255, 255, 0.2)' : '#E2E8F0';

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <TwoLMark size={iconSize || 40} theme={theme} />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center text-center select-none ${className}`}>
        <TwoLMark size={iconSize || 56} theme={theme} className="mb-2" />
        <div className="flex items-center justify-center tracking-tight font-bold font-heading text-2xl">
          <span style={{ color: leloiColor }}>LELOI</span>
          <span style={{ color: metalColor }} className="ml-1 font-semibold">METAL</span>
        </div>
        {showSlogan && (
          <div
            className="text-xs font-heading font-medium tracking-wide uppercase mt-1"
            style={{ color: sloganColor }}
          >
            Aluminium for a Better World
          </div>
        )}
      </div>
    );
  }

  // Default: Horizontal
  return (
    <div className={`inline-flex items-center select-none gap-3 ${className}`}>
      <TwoLMark size={iconSize || 44} theme={theme} className="shrink-0" />
      <div
        className="w-[1.5px] h-8 self-center"
        style={{ backgroundColor: dividerColor }}
        aria-hidden="true"
      />
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline tracking-tight font-heading text-xl font-bold leading-none">
          <span style={{ color: leloiColor }}>LELOI</span>
          <span style={{ color: metalColor }} className="ml-1 font-semibold tracking-normal">
            METAL
          </span>
        </div>
        {showSlogan && (
          <div
            className="text-[10px] font-heading font-medium tracking-wider uppercase mt-1 leading-none"
            style={{ color: sloganColor }}
          >
            Aluminium for a Better World
          </div>
        )}
      </div>
    </div>
  );
};
