import React from 'react';
import Image from 'next/image';
import { Building2, Home, Building, Hotel, Landmark, Check } from 'lucide-react';

interface ApplicationItem {
  icon: React.ElementType;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
  keyFeatures: string[];
}

const APPLICATIONS: ApplicationItem[] = [
  {
    icon: Home,
    category: 'Luxury Residential',
    title: 'Private Villas & Estates',
    imageSrc: '/media/architectural/gallery/architectural-windows-doors-hero-01.webp',
    description:
      'Expansive panoramic sliding doors and thermal-break casements engineered for seamless indoor-outdoor living, thermal efficiency, and minimal sightlines.',
    keyFeatures: ['Slim multi-track sliding', 'Floor-to-ceiling glass', 'Thermal-break comfort']
  },
  {
    icon: Building2,
    category: 'Urban Living',
    title: 'Townhouses & Row Houses',
    imageSrc: '/media/architectural/gallery/architectural-casement-window-gallery-01.webp',
    description:
      'Standardized precision aluminium window and terrace door systems designed for streamlined installation schedules and reliable acoustic insulation.',
    keyFeatures: ['Modular profile sizes', 'Integrated flyscreens', 'Multi-point security locks']
  },
  {
    icon: Building,
    category: 'High-Density Residential',
    title: 'High-Rise Condominiums',
    imageSrc: '/media/architectural/gallery/architectural-curtain-wall-card-01.webp',
    description:
      'Heavy structural profiles engineered to withstand severe upper-story wind loading, cyclic pressure, and heavy monsoon rainfall without water infiltration.',
    keyFeatures: ['Wind load structural interlocks', 'Cascading water drainage', 'Acoustic seal gaskets']
  },
  {
    icon: Hotel,
    category: 'Hospitality',
    title: 'Hotels & Coastal Resorts',
    imageSrc: '/media/architectural/gallery/architectural-bungalow-gallery-01.webp',
    description:
      'Marine-grade surface finishes with AkzoNobel powder coating designed to resist salt-fog corrosion while delivering smooth, quiet guest room balcony sliding.',
    keyFeatures: [
      'Corrosion-resistant coating',
      'Whisper-quiet sliding rollers',
      'Coating warranties up to 10 years, subject to conditions'
    ]
  },
  {
    icon: Building2,
    category: 'Corporate & Mixed-Use',
    title: 'Commercial Office Complexes',
    imageSrc: '/media/architectural/gallery/architectural-cladding-card-01.webp',
    description:
      'High-traffic entrance systems and storefront glazing profiles compatible with automated door operators, access control, and facade curtain wall interfaces.',
    keyFeatures: ['Heavy-duty hinge barrels', 'Automatic operator prep', 'Curtain wall transom integration']
  },
  {
    icon: Landmark,
    category: 'Institutional',
    title: 'Civic & Educational Facilities',
    imageSrc: '/media/architectural/gallery/architectural-sliding-door-gallery-01.webp',
    description:
      'Robust, low-maintenance extrusions built for heavy public circulation, school campuses, and municipal infrastructure demanding decades of service life.',
    keyFeatures: ['Impact-resistant wall thickness', 'Tamper-resistant fittings', 'Durable powder coating']
  }
];

export const ArchitecturalApplications: React.FC = () => {
  return (
    <section id="applications" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-navy text-xs font-semibold uppercase tracking-wider mb-2">
            <Building2 className="w-3.5 h-3.5 text-blue" />
            <span>Built Environment</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy tracking-tight">
            Architectural Applications & Project Types
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Our window and door extrusion systems are engineered for diverse architectural typologies, from single-family bespoke luxury homes to high-traffic commercial envelopes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {APPLICATIONS.map((app, idx) => {
            const Icon = app.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex flex-col group"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={app.imageSrc}
                    alt={app.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-navy/90 text-white backdrop-blur-xs flex items-center gap-1.5">
                      <Icon className="w-3 h-3" />
                      <span>{app.category}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold font-heading text-navy group-hover:text-blue transition-colors">
                      {app.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                      {app.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <ul className="space-y-1 text-xs text-slate-600">
                      {app.keyFeatures.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
