'use client';

import React from 'react';

interface TechnicalProfilePlaceholderProps {
  title?: string;
  category?: string;
  className?: string;
  aspectRatio?: '4/3' | '16/9' | '1/1';
}

export const TechnicalProfilePlaceholder: React.FC<TechnicalProfilePlaceholderProps> = ({
  title = 'Technical Profile CAD',
  category = 'Custom Extrusion',
  className = '',
  aspectRatio = '4/3'
}) => {
  const aspectClass =
    aspectRatio === '16/9'
      ? 'aspect-[16/9]'
      : aspectRatio === '1/1'
      ? 'aspect-square'
      : 'aspect-[4/3]';

  return (
    <div
      className={`relative w-full ${aspectClass} bg-[#061D3B] flex items-center justify-center overflow-hidden select-none ${className}`}
      aria-label={`${title} Technical Blueprint`}
    >
      {/* Background Engineering Grid (Blueprint Style) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id="grid-pattern-sm" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#2F7BFF" strokeWidth="0.5" strokeOpacity="0.4" />
          </pattern>
          <pattern id="grid-pattern-lg" width="80" height="80" patternUnits="userSpaceOnUse">
            <rect width="80" height="80" fill="url(#grid-pattern-sm)" />
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#2F7BFF" strokeWidth="1" strokeOpacity="0.7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern-lg)" />
      </svg>

      {/* Decorative Technical Crosshairs & Corner Calibrations */}
      <div className="absolute top-2.5 left-2.5 text-[9px] font-mono text-cyan-400/60 flex items-center gap-1">
        <span>+ 0.00</span>
        <span className="text-[7px] text-slate-400">DIN 17615</span>
      </div>
      <div className="absolute top-2.5 right-2.5 text-[9px] font-mono text-cyan-400/60">
        <span>EN 755-9</span>
      </div>
      <div className="absolute bottom-2.5 left-2.5 text-[9px] font-mono text-cyan-400/60">
        <span>LELOI CAD / SSoT</span>
      </div>
      <div className="absolute bottom-2.5 right-2.5 text-[9px] font-mono text-cyan-400/60 flex items-center gap-1">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>SPEC-READY</span>
      </div>

      {/* Center Geometric Extrusion Cross-Section Vector */}
      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center max-w-[85%]">
        <svg
          viewBox="0 0 140 100"
          className="w-28 h-20 text-cyan-400/80 drop-shadow-[0_0_12px_rgba(47,123,255,0.4)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Outer Extrusion Wall */}
          <rect x="20" y="15" width="100" height="70" rx="3" stroke="#2F7BFF" strokeWidth="2" fill="#0A2D5B" fillOpacity="0.4" />
          {/* Inner Hollow Chamber */}
          <rect x="36" y="30" width="68" height="40" rx="2" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 2" />
          {/* Screw Boss / Thermal Flange indicator */}
          <circle cx="20" cy="50" r="4" fill="#061D3B" stroke="#38BDF8" strokeWidth="1.5" />
          <circle cx="120" cy="50" r="4" fill="#061D3B" stroke="#38BDF8" strokeWidth="1.5" />
          {/* Center Crosshair */}
          <line x1="70" y1="5" x2="70" y2="95" stroke="#38BDF8" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.6" />
          <line x1="10" y1="50" x2="130" y2="50" stroke="#38BDF8" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.6" />
        </svg>

        <span className="mt-2 text-[11px] font-mono font-semibold tracking-wider text-cyan-300 uppercase truncate max-w-full">
          {category}
        </span>
        <span className="text-[10px] text-slate-300 font-sans line-clamp-1 max-w-full">
          {title}
        </span>
        <span className="mt-1 text-[9px] font-mono text-cyan-400/80 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
          TECHNICAL BLUEPRINT
        </span>
      </div>
    </div>
  );
};
