import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, Layers, Sliders } from 'lucide-react';
import { Button, Badge } from '@leloi/ui';

export interface SystemCardItem {
  id: string;
  category: 'Window System' | 'Door System' | 'Special System';
  name: string;
  slug: string;
  summary: string;
  imageSrc: string;
  href: string;
  highlights: string[];
  finishes: string[];
  isDeepPageAvailable?: boolean;
}

interface SystemCardGridProps {
  title: string;
  subtitle: string;
  items: SystemCardItem[];
  id?: string;
}

export const SystemCardGrid: React.FC<SystemCardGridProps> = ({
  title,
  subtitle,
  items,
  id
}) => {
  return (
    <section id={id} className="py-12 sm:py-16 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-navy text-xs font-semibold uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5 text-blue" />
            <span>Engineered Product Systems</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy tracking-tight">
            {title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col"
            >
              {/* Image with 4:3 Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-900/80 text-white backdrop-blur-xs">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold font-heading text-navy group-hover:text-blue transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-3 space-y-1 text-xs text-slate-600">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  {/* Finishes */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.finishes.map((f, i) => (
                      <span
                        key={i}
                        className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px] font-medium text-slate-600"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Link action */}
                  <Link href={item.href} className="block w-full">
                    <Button
                      variant={item.isDeepPageAvailable ? 'primary' : 'outline'}
                      size="sm"
                      className="w-full justify-between text-xs group/btn"
                    >
                      <span>{item.isDeepPageAvailable ? 'View System Dossier' : 'Request Specifications'}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
