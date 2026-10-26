'use client';

import React, { useState } from 'react';

interface ProductGalleryProps {
  name: string;
  categoryName: string;
  primaryImage: string;
  galleryImages: string[];
  mediaProvenance: {
    type: string;
    license: string;
    author: string;
  };
}

export function ProductGallery({
  name,
  categoryName,
  primaryImage,
  galleryImages,
  mediaProvenance
}: ProductGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={galleryImages[activeImageIndex] || primaryImage}
          alt={`${name} 4:3 view`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-bold bg-navy text-white px-2.5 py-1 rounded shadow font-heading uppercase">
            {categoryName}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="text-[10px] font-mono font-bold bg-white/95 text-slate-800 px-2 py-1 rounded shadow border border-slate-200">
            {mediaProvenance.type}
          </span>
        </div>
      </div>

      {/* Thumbnail Selectors */}
      <div className="grid grid-cols-3 gap-3">
        {galleryImages.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveImageIndex(idx)}
            className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
              activeImageIndex === idx
                ? 'border-blue shadow-xs'
                : 'border-transparent opacity-70 hover:opacity-100'
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="text-[11px] text-slate-400 italic pt-1 flex items-center justify-between">
        <span>License: {mediaProvenance.license}</span>
        <span>Author: {mediaProvenance.author}</span>
      </div>
    </div>
  );
}
