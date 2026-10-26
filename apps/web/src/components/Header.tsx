'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { BrandLogo } from '@leloi/ui';
import {
  Menu,
  X,
  ChevronDown,
  Calculator,
  Scale,
  Building2,
  Cpu,
  Sun,
  Layers,
  Flame,
  ShieldCheck,
  ArrowRight,
  FileText,
  Settings2,
  Boxes
} from 'lucide-react';
import { getProductDivisions, getFamiliesByDivision } from '@leloi/types';

const DIVISION_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'custom-extrusions': Layers,
  architectural: Building2,
  'industrial-profiles': Boxes,
  solar: Sun,
  'thermal-management': Cpu,
  'oem-components': Settings2
};

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const megaMenuRef = useRef<HTMLDivElement | null>(null);
  const megaTriggerRef = useRef<HTMLButtonElement | null>(null);
  const divisions = getProductDivisions();

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Escape closes the mega menu and returns focus to its trigger, so keyboard
  // users are not stranded inside the panel (WCAG 2.1.2, No Keyboard Trap).
  useEffect(() => {
    if (!megaMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMegaMenuOpen(false);
        megaTriggerRef.current?.focus();
      }
    };

    // Clicking or tabbing outside the panel closes it.
    const onFocusOrPointerOutside = (event: Event) => {
      const target = event.target as Node | null;
      if (
        target &&
        !megaMenuRef.current?.contains(target) &&
        !megaTriggerRef.current?.contains(target)
      ) {
        setMegaMenuOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('focusin', onFocusOrPointerOutside);
    document.addEventListener('pointerdown', onFocusOrPointerOutside);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('focusin', onFocusOrPointerOutside);
      document.removeEventListener('pointerdown', onFocusOrPointerOutside);
    };
  }, [megaMenuOpen]);

  // Prevents the page scrolling behind an open mobile drawer.
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Corporate division ribbon / Utility bar */}
      <div className="bg-navy-dark text-slate-300 text-[11px] py-1.5 px-4 sm:px-8 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">LELOI METAL</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-400">A Division of LELOI EXIM GLOBAL</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/tools/aluminium-weight-calculator"
            className="hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Calculator className="w-3 h-3 text-blue" />
            Weight Calculator
          </Link>
          <span className="text-slate-600">•</span>
          <Link
            href="/tools/import-duty-checker"
            className="hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Scale className="w-3 h-3 text-blue" />
            Duty Checker (HS 7604)
          </Link>
          <span className="text-slate-600">•</span>
          <Link
            href="/capabilities/powder-coating"
            className="hover:text-blue flex items-center gap-1.5 text-slate-300 transition-colors"
          >
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>AkzoNobel coating, up to 10-yr warranty</span>
          </Link>
          <span className="text-slate-600">•</span>
          <Link href="/contact" className="hover:text-white transition-colors">
            sales@leloimetal.com
          </Link>
        </div>
      </div>

      {/* Main desktop navigation bar - Target height 76-84px */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Unified Brand Logo - Single Source of Truth */}
        <Link href="/" className="flex items-center group shrink-0 mr-4">
          <BrandLogo variant="primary" width={195} />
        </Link>

        {/* Desktop Primary Navigation Links (Clean 6-item nav with 32px spacing) */}
        <nav className="hidden lg:flex items-center gap-8 font-heading text-[14px] font-semibold tracking-wide text-charcoal">
          {/* 1. Products with Mega Menu */}
          <div
            className="relative py-6"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* A real <button> so the panel is reachable by keyboard and by
                touch. The "Products" index page stays reachable from the panel
                footer and from the mobile drawer. */}
            <button
              ref={megaTriggerRef}
              type="button"
              aria-expanded={megaMenuOpen}
              aria-haspopup="true"
              aria-controls="products-mega-menu"
              onClick={() => setMegaMenuOpen((open) => !open)}
              className={`flex items-center gap-1.5 transition-colors hover:text-blue ${
                megaMenuOpen ? 'text-blue' : 'text-charcoal'
              }`}
            >
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  megaMenuOpen ? 'rotate-180 text-blue' : 'text-slate-400'
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Products Dropdown: 6 business lines, each with its families */}
            {megaMenuOpen && (
              <div
                ref={megaMenuRef}
                id="products-mega-menu"
                className="absolute top-full -left-12 w-[860px] max-h-[75vh] overflow-y-auto bg-white border border-slate-200 shadow-2xl rounded-2xl p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 px-1">
                  Primary Business Lines
                </div>
                <div className="grid grid-cols-3 gap-x-5 gap-y-4 pb-4 border-b border-slate-100">
                  {divisions.map((div) => {
                    const Icon = DIVISION_ICONS[div.id] ?? Layers;
                    // Deep links to families: the mega menu is the main internal
                    // linking surface for the 60 family pages.
                    const families = getFamiliesByDivision(div.slug).slice(0, 5);
                    const remaining = getFamiliesByDivision(div.slug).length - families.length;

                    return (
                      <div key={div.slug} className="min-w-0">
                        <Link
                          href={`/products/${div.slug}`}
                          onClick={() => setMegaMenuOpen(false)}
                          className="group flex items-center gap-2 mb-2"
                        >
                          <Icon className="w-4 h-4 text-blue shrink-0" aria-hidden="true" />
                          <span className="font-bold text-[13px] text-navy group-hover:text-blue transition-colors leading-snug">
                            {div.navLabel || div.name}
                          </span>
                        </Link>
                        <ul className="space-y-1 pl-6">
                          {families.map((family) => (
                            <li key={family.slug}>
                              <Link
                                href={`/products/${family.divisionSlug}/${family.slug}`}
                                onClick={() => setMegaMenuOpen(false)}
                                className="block text-[12px] text-slate-600 hover:text-blue transition-colors leading-snug py-0.5"
                              >
                                {family.name}
                              </Link>
                            </li>
                          ))}
                          {remaining > 0 && (
                            <li>
                              <Link
                                href={`/products/${div.slug}`}
                                onClick={() => setMegaMenuOpen(false)}
                                className="block text-[11px] font-semibold text-blue hover:underline py-0.5"
                              >
                                +{remaining} more
                              </Link>
                            </li>
                          )}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Bar: [Browse Full Product Catalog] */}
                <div className="pt-3 px-1 flex items-center justify-between text-xs">
                  <Link
                    href="/products"
                    onClick={() => setMegaMenuOpen(false)}
                    className="text-navy hover:text-blue flex items-center gap-1.5 font-bold transition-colors"
                  >
                    <span>Browse Full Product Catalog</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/rfq"
                    onClick={() => setMegaMenuOpen(false)}
                    className="text-blue hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>Request a Quote / Upload Drawing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 2. Capabilities */}
          <Link href="/capabilities" className="hover:text-blue transition-colors py-2">
            Capabilities
          </Link>

          {/* 3. Industries */}
          <Link href="/industries" className="hover:text-blue transition-colors py-2">
            Industries
          </Link>

          {/* 4. Markets */}
          <Link href="/markets" className="hover:text-blue transition-colors py-2">
            Markets
          </Link>

          {/* 5. Insights */}
          <Link href="/insights" className="hover:text-blue transition-colors py-2">
            Insights
          </Link>

          {/* 6. About */}
          <Link href="/about" className="hover:text-blue transition-colors py-2">
            About
          </Link>
        </nav>

        {/* Right Desktop Element: secondary contact + primary conversion CTA */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <Link
            href="/contact"
            className="text-sm font-semibold text-navy hover:text-blue transition-colors py-2 px-3 rounded-lg hover:bg-slate-50"
          >
            Contact
          </Link>
          <Link
            href="/rfq"
            className="inline-flex items-center gap-2 bg-blue hover:bg-blue-hover text-white text-sm font-heading font-bold py-2.5 px-5 rounded-lg shadow-sm transition-colors whitespace-nowrap"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile: compact RFQ CTA stays visible alongside the hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="/rfq"
            className="bg-blue hover:bg-blue-hover text-white text-xs font-heading font-bold py-2 px-3.5 rounded-lg transition-colors whitespace-nowrap"
          >
            Get a Quote
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-navy hover:bg-light-gray"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Includes navigation + RFQ touchpoints) */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-150 max-h-[calc(100vh-80px)] overflow-y-auto"
        >
          <div className="flex flex-col space-y-1 font-heading font-medium text-sm text-charcoal">
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-light-gray font-bold text-navy"
            >
              Product Catalog
            </Link>
            <div className="pl-4 space-y-1.5 text-xs text-slate-600 pb-1">
              {divisions.map((div) => (
                <Link
                  key={div.slug}
                  href={`/products/${div.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-slate-700 hover:text-blue font-medium"
                >
                  {div.name}
                </Link>
              ))}
            </div>

            <Link
              href="/capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-light-gray"
            >
              Capabilities & Factory
            </Link>
            <Link
              href="/capabilities/powder-coating"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-emerald-50 text-emerald-800 font-semibold flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>AkzoNobel coating, up to 10-yr warranty</span>
            </Link>
            <Link
              href="/industries"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-light-gray"
            >
              Industries Served
            </Link>
            <Link
              href="/markets"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-light-gray"
            >
              Export Markets
            </Link>
            <Link
              href="/insights"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-light-gray"
            >
              Technical Insights
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-light-gray"
            >
              About LELOI METAL
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-light-gray"
            >
              Contact Team
            </Link>
          </div>

          {/* Preserved Mobile Actions */}
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <Link
              href="/rfq"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-blue hover:bg-blue-hover text-white font-bold py-2.5 px-4 rounded-xl text-center text-sm shadow-md transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/rfq?mode=upload"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-white border border-blue text-blue hover:bg-blue-50 font-bold py-2.5 px-4 rounded-xl text-center text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Upload Drawing</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
