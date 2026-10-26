'use client';

import React, { useState, useEffect } from 'react';

interface QuickNavSection {
  id: string;
  label: string;
}

const SECTIONS: QuickNavSection[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'window-systems', label: 'Window Systems' },
  { id: 'door-systems', label: 'Door Systems' },
  { id: 'thermal-break', label: 'Thermal-Break' },
  { id: 'specifications', label: 'Specifications' },
  { id: 'cross-section', label: 'Cross-Section' },
  { id: 'finishes', label: 'Finishes & AkzoNobel' },
  { id: 'colors', label: 'Colors' },
  { id: 'applications', label: 'Applications' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'quality', label: 'Quality & Testing' },
  { id: 'packaging', label: 'Packaging' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'related', label: 'Related Solutions' },
  { id: 'downloads', label: 'Downloads' },
  { id: 'faq', label: 'FAQ' },
  { id: 'rfq-cta', label: 'Inquiry / RFQ' }
];

export const SystemQuickNav: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 110;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      setActiveId(id);
    }
  };

  return (
    <nav
      aria-label="System Dossier Navigation"
      className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto py-2.5 no-scrollbar scroll-smooth">
          {SECTIONS.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => scrollToSection(e, sec.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-navy text-white shadow-xs'
                    : 'text-slate-600 hover:text-navy hover:bg-slate-100'
                }`}
              >
                {sec.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
