import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Grid, Compass } from 'lucide-react';
import { Button } from '@leloi/ui';

interface CrossSellItem {
  name: string;
  slug: string;
  category: string;
  summary: string;
  imageSrc: string;
  href: string;
}

const CROSS_SELL_ITEMS: CrossSellItem[] = [
  {
    name: 'Curtain Wall & Facade Systems',
    slug: 'curtain-wall-facade',
    category: 'High-Rise Envelopes',
    summary: 'Unitized and stick curtain wall structural mullions and transoms engineered for high wind loads.',
    imageSrc: '/media/catalog/17_curtain_wall_profiles.webp',
    href: '/products/architectural/curtain-wall-facade'
  },
  {
    name: 'Louvers & Architectural Sunshades',
    slug: 'louvers-sunshade',
    category: 'Passive Solar Control',
    summary: 'Aerofoil and continuous box louver profiles engineered for solar shading and exterior building envelope aesthetics.',
    imageSrc: '/media/catalog/16_led_lighting_profiles.webp',
    href: '/products/architectural/louvers-sunshade'
  },
  {
    name: 'Wall Cladding & Exterior Panels',
    slug: 'wall-cladding',
    category: 'Rainscreen Envelopes',
    summary: 'Interlocking aluminium siding slats, soffit panels, and rainscreen facade sub-framing extrusions.',
    imageSrc: '/media/catalog/05_u_channel_profiles.webp',
    href: '/products/architectural/wall-cladding'
  },
  {
    name: 'Pergola & Louver Roof Systems',
    slug: 'pergola',
    category: 'Outdoor Living',
    summary: 'Motorized bi-climatic louvered roof beams and heavy hollow support columns with integrated water gutters.',
    imageSrc: '/media/catalog/01_square_rectangular_hollow_profiles.webp',
    href: '/products/architectural/pergola'
  }
];

export const CrossSellSolutions: React.FC = () => {
  return (
    <section id="related" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-[#0A2D5B] text-xs font-semibold uppercase tracking-wider mb-2">
            <Grid className="w-3.5 h-3.5 text-[#2F7BFF]" />
            <span>Complementary Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#0A2D5B] tracking-tight">
            Related Architectural Aluminium Systems
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Source your complete architectural building envelope from a single Vietnam manufacturer. Pair our window and door systems with matching facade and sunshade solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CROSS_SELL_ITEMS.map((item) => (
            <div
              key={item.slug}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#0A2D5B]/90 text-white backdrop-blur-xs">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="text-sm font-bold font-heading text-[#0A2D5B] group-hover:text-[#2F7BFF] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <Link href={item.href} className="block w-full">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-between text-xs border-slate-200 text-slate-700 hover:border-blue-400 group/btn"
                  >
                    <span>Explore Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
