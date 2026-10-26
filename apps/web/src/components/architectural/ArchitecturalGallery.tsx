import React from 'react';
import Image from 'next/image';
import { Camera, ZoomIn } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  spanClass?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Precision Casement & Fixed Window Systems',
    category: 'System Assembly',
    imageSrc: '/media/architectural/gallery/architectural-casement-window-gallery-01.webp',
    spanClass: 'lg:col-span-2'
  },
  {
    id: 'gal-2',
    title: 'Thermal-Break PA66 Crimped Assembly',
    category: 'Thermal Insulation',
    imageSrc: '/media/architectural/details/architectural-thermal-break-detail-01.webp'
  },
  {
    id: 'gal-3',
    title: 'Luxury Villa Ocean-Facing Sliding Envelopes',
    category: 'Residential Project',
    imageSrc: '/media/architectural/gallery/architectural-windows-doors-hero-01.webp'
  },
  {
    id: 'gal-4',
    title: 'Seamless Multi-Track Terrace Sliding Glass',
    category: 'Opening Solutions',
    imageSrc: '/media/architectural/gallery/architectural-sliding-door-gallery-01.webp',
    spanClass: 'lg:col-span-2'
  },
  {
    id: 'gal-5',
    title: 'High-Rise Commercial Glass Curtain Wall',
    category: 'Commercial Facade',
    imageSrc: '/media/architectural/gallery/architectural-curtain-wall-card-01.webp'
  },
  {
    id: 'gal-6',
    title: 'Exterior Sunshade & Architectural Louvers',
    category: 'Solar Shading',
    imageSrc: '/media/architectural/gallery/architectural-louvers-card-01.webp'
  },
  {
    id: 'gal-7',
    title: 'Modern Resort Bungalow Architectural Glazing',
    category: 'Hospitality Design',
    imageSrc: '/media/architectural/gallery/architectural-bungalow-gallery-01.webp'
  }
];

export const ArchitecturalGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-navy text-xs font-semibold uppercase tracking-wider mb-2">
            <Camera className="w-3.5 h-3.5 text-blue" />
            <span>Technical Photography</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy tracking-tight">
            Curated Technical Gallery
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Detailed engineering views of our precision profile cross-sections, thermal-break assemblies, and installed architectural envelopes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 group shadow-xs hover:shadow-md transition-all ${
                item.spanClass || ''
              }`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-blue-300">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold font-heading leading-tight mt-0.5">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
