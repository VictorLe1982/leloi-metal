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
    title: 'Extruded Window & Door Cross-Sections',
    category: 'Profile Geometry',
    imageSrc: '/images/products/architectural-systems/window-door/cross-section.webp',
    spanClass: 'lg:col-span-2'
  },
  {
    id: 'gal-2',
    title: 'Thermal-Break PA66 Crimped Assembly',
    category: 'Thermal Insulation',
    imageSrc: '/images/products/architectural-systems/thermal-break/cross-section.webp'
  },
  {
    id: 'gal-3',
    title: 'Architectural Window & Door Profiles',
    category: 'Product Range',
    imageSrc: '/media/catalog/18_window_door_profiles.webp'
  },
  {
    id: 'gal-4',
    title: 'Multi-Track Sliding Window System',
    category: 'System Assembly',
    imageSrc: '/images/products/architectural-systems/window-door/hero.webp',
    spanClass: 'lg:col-span-2'
  },
  {
    id: 'gal-5',
    title: 'Glazed Architectural Building Envelope',
    category: 'Building Project',
    imageSrc: '/images/products/architectural-systems/window-door/application.webp'
  },
  {
    id: 'gal-6',
    title: 'Curtain Wall & Facade Integration',
    category: 'Commercial Facade',
    imageSrc: '/images/products/architectural-systems/curtain-wall/hero.webp'
  },
  {
    id: 'gal-7',
    title: 'Solar Shading & Louver Integration',
    category: 'Exterior Shading',
    imageSrc: '/images/products/architectural-systems/louvers/hero.webp'
  }
];

export const ArchitecturalGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-[#0A2D5B] text-xs font-semibold uppercase tracking-wider mb-2">
            <Camera className="w-3.5 h-3.5 text-[#2F7BFF]" />
            <span>Technical Photography</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2D5B] tracking-tight">
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
