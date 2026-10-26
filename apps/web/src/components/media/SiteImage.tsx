import React from 'react';
import Image from 'next/image';
import fs from 'node:fs';
import path from 'node:path';
import { ImageIcon } from 'lucide-react';
import { getMediaSlot, type MediaSlot } from '@/data/media-manifest';

/**
 * Renders a manifest-declared image, or an actionable placeholder if the file
 * has not been supplied yet.
 *
 * Checking the filesystem at render time (these are server components, so this
 * runs at build) is deliberate. The alternative — an <img> onError fallback —
 * ships a broken request to every visitor and cannot tell the team which file
 * is missing. Here a missing image renders the exact path and size required,
 * so it is self-documenting in the browser and in `scripts/check-media.mjs`.
 */

function fileExists(publicPath: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', publicPath.replace(/^\//, '')));
  } catch {
    return false;
  }
}

interface SiteImageProps {
  /** Slot id from data/media-manifest.ts */
  slotId: string;
  className?: string;
  /** Responsive sizes hint. Defaults to full viewport width. */
  sizes?: string;
  /** Overrides the manifest alt where surrounding copy already names the subject. */
  alt?: string;
  /** Set true for above-the-fold images; defaults to the manifest value. */
  priority?: boolean;
  /**
   * What to do when the file is missing.
   *
   * 'placeholder' (default) — draw the labelled dashed box. Right for content
   *   images that occupy their own slot in a card or grid.
   * 'silent' — render nothing. Required for decorative backgrounds sitting
   *   behind text: a labelled box there shows through the scrim and wrecks the
   *   section, which is exactly what happened on the home hero.
   */
  fallback?: 'placeholder' | 'silent';
}

const MissingImagePlaceholder: React.FC<{ slot: MediaSlot; className?: string }> = ({
  slot,
  className
}) => (
  <div
    role="img"
    aria-label={`Image pending: ${slot.alt}`}
    className={`flex items-center justify-center bg-light-gray border-2 border-dashed border-slate-300 ${className ?? ''}`}
  >
    <div className="text-center px-4 py-6 max-w-md">
      <ImageIcon className="w-7 h-7 text-slate-400 mx-auto mb-2" aria-hidden="true" />
      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
        Image not supplied yet
      </p>
      {/* Single template literal, not `public{slot.path}` — React would emit
          two text nodes and the path would not copy cleanly from the browser. */}
      <p className="font-mono text-[11px] text-navy break-all leading-snug select-all">
        {`apps/web/public${slot.path}`}
      </p>
      <p className="text-[11px] text-slate-500 mt-1.5">
        {slot.width} × {slot.height} px ({slot.aspect}) · WebP
      </p>
    </div>
  </div>
);

export const SiteImage: React.FC<SiteImageProps> = ({
  slotId,
  className,
  sizes = '100vw',
  alt,
  priority,
  fallback = 'placeholder'
}) => {
  const slot = getMediaSlot(slotId);

  if (!slot) {
    // A typo in a slot id should be loud in development, not silently blank.
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(
        `SiteImage: unknown slot "${slotId}". Declare it in src/data/media-manifest.ts.`
      );
    }
    return null;
  }

  if (!fileExists(slot.path)) {
    if (fallback === 'silent') return null;
    return <MissingImagePlaceholder slot={slot} className={className} />;
  }

  return (
    <Image
      src={slot.path}
      alt={alt ?? slot.alt}
      fill
      sizes={sizes}
      priority={priority ?? slot.priority ?? false}
      className={className}
    />
  );
};

/** True when the file for a slot is present. Lets callers adjust layout. */
export function hasMedia(slotId: string): boolean {
  const slot = getMediaSlot(slotId);
  return slot ? fileExists(slot.path) : false;
}
