import React from 'react';

interface ResponsiveProductImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: '4/3' | '1/1' | '16/9';
}

/**
 * ResponsiveProductImage Component
 * CODEX V3 Compliant:
 * - Emits srcset for 480w, 768w, 1200w
 * - Enforces 4:3 aspect ratio to eliminate Cumulative Layout Shift (CLS)
 * - Defaults to lazy loading except when priority is true
 */
export const ResponsiveProductImage: React.FC<ResponsiveProductImageProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  aspectRatio = '4/3'
}) => {
  // If src is in /media/catalog/xx.webp, generate srcset automatically
  const isCatalogMedia = src.startsWith('/media/catalog/') && src.endsWith('.webp') && !src.includes('_');

  let srcSet: string | undefined = undefined;
  if (isCatalogMedia) {
    const basePath = src.slice(0, -5); // remove .webp
    srcSet = `${basePath}_480w.webp 480w, ${basePath}_768w.webp 768w, ${basePath}_1200w.webp 1200w`;
  }

  const aspectClass =
    aspectRatio === '4/3'
      ? 'aspect-[4/3]'
      : aspectRatio === '1/1'
      ? 'aspect-square'
      : 'aspect-video';

  return (
    <div className={`relative ${aspectClass} overflow-hidden bg-slate-100 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        srcSet={srcSet}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
      />
    </div>
  );
};
