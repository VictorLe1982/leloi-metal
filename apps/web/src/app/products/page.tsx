'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Card, Badge, Button } from '@leloi/ui';
import { PRODUCTS_V2, CATEGORIES_V2, ProductCatalogItem } from '@leloi/types';
import {
  Search,
  Filter,
  ArrowRight,
  FileUp,
  Scale,
  CheckCircle2,
  Layers,
  Sparkles,
  SlidersHorizontal,
  RotateCcw,
  X,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export default function ProductsCatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedGeometry, setSelectedGeometry] = useState<string>('all');
  const [selectedAlloy, setSelectedAlloy] = useState<string>('all');
  const [selectedFinish, setSelectedFinish] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);
  const [compareList, setCompareList] = useState<string[]>([]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return PRODUCTS_V2.filter((p) => {
      const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchGeometry = selectedGeometry === 'all' || p.profileGeometry === selectedGeometry;
      const matchAlloy = selectedAlloy === 'all' || p.alloys.some((a) => a.includes(selectedAlloy));
      const matchFinish =
        selectedFinish === 'all' ||
        p.surfaceFinishes.some((f) => f.toLowerCase().includes(selectedFinish.toLowerCase()));
      const matchSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.applications.some((app) => app.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.alloys.some((al) => al.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCategory && matchGeometry && matchAlloy && matchFinish && matchSearch;
    });
  }, [selectedCategory, selectedGeometry, selectedAlloy, selectedFinish, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedGeometry('all');
    setSelectedAlloy('all');
    setSelectedFinish('all');
    setSearchQuery('');
  };

  const toggleCompare = (slug: string) => {
    setCompareList((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : prev.length < 4 ? [...prev, slug] : prev
    );
  };

  const comparedProducts = PRODUCTS_V2.filter((p) => compareList.includes(p.slug));

  return (
    <div className="min-h-screen bg-[#F1F4F8]/60 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Compact Hero */}
        <div className="bg-gradient-to-br from-[#061D3B] to-[#0A2D5B] text-white rounded-2xl p-8 sm:p-12 shadow-lg relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase font-heading font-semibold tracking-widest text-[#2F7BFF]">
              B2B TECHNICAL PRODUCT CATALOGUE
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Aluminium Profiles & OEM Components
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Precision engineered solid, hollow, modular T-slot, solar, architectural, and heat sink extrusions manufactured in Vietnam. Custom die tooling and CNC machining built to client CAD drawings under strict bilateral NDA.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link href="/rfq?mode=upload">
                <Button variant="cta" size="md" leftIcon={<FileUp className="w-4 h-4" />}>
                  Upload Your Drawing
                </Button>
              </Link>
              <Link href="/rfq">
                <Button variant="outline" size="md" className="border-white/30 text-white hover:bg-white/10">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Horizontal Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-heading font-semibold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#0A2D5B] text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Products ({PRODUCTS_V2.length})
          </button>
          {CATEGORIES_V2.map((cat) => {
            const count = PRODUCTS_V2.filter((p) => p.category === cat.slug).length;
            const isSelected = selectedCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-[#2F7BFF] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Main Content Layout: Sticky Sidebar + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Filter Sidebar (Sticky) */}
          <aside className="hidden lg:block lg:col-span-3 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-6 sticky top-28">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="font-heading font-bold text-sm text-[#0A2D5B] flex items-center gap-1.5">
                <SlidersHorizontal className="w-4 h-4 text-[#2F7BFF]" />
                Filter Specifications
              </span>
              {(selectedCategory !== 'all' ||
                selectedGeometry !== 'all' ||
                selectedAlloy !== 'all' ||
                selectedFinish !== 'all' ||
                searchQuery !== '') && (
                <button
                  onClick={handleResetFilters}
                  className="text-[11px] text-[#2F7BFF] hover:underline flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
              )}
            </div>

            {/* Search Input */}
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase font-bold tracking-wider text-slate-500">
                Search Catalog
              </label>
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  placeholder="Keyword, alloy, application..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 text-xs bg-[#F8FAFC] border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F7BFF]"
                />
              </div>
            </div>

            {/* Profile Geometry Filter */}
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase font-bold tracking-wider text-slate-500">
                Profile Geometry
              </label>
              <select
                value={selectedGeometry}
                onChange={(e) => setSelectedGeometry(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#F8FAFC] border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F7BFF] font-medium text-slate-700"
              >
                <option value="all">All Geometries</option>
                <option value="Solid">Solid Sections</option>
                <option value="Hollow">Hollow / Tubular</option>
                <option value="Semi-Hollow">Semi-Hollow Channels</option>
                <option value="Complex Multi-Void">Complex Multi-Void</option>
                <option value="T-Slot Modular">T-Slot Modular</option>
                <option value="Fin Array">Fin Array / Heat Sink</option>
                <option value="CNC Component">CNC Milled Component</option>
              </select>
            </div>

            {/* Alloy Selection */}
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase font-bold tracking-wider text-slate-500">
                Alloy Grade
              </label>
              <select
                value={selectedAlloy}
                onChange={(e) => setSelectedAlloy(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#F8FAFC] border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F7BFF] font-medium text-slate-700"
              >
                <option value="all">All Alloys</option>
                <option value="6063">6063 (Architectural & Heat Sink)</option>
                <option value="6061">6061 (Structural & CNC Workhorse)</option>
                <option value="6005A">6005A (Solar & Transport Rail)</option>
                <option value="6082">6082 (European Structural Standard)</option>
                <option value="7075">7075 (High Strength Aerospace)</option>
              </select>
            </div>

            {/* Surface Finish Selection */}
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase font-bold tracking-wider text-slate-500">
                Surface Treatment
              </label>
              <select
                value={selectedFinish}
                onChange={(e) => setSelectedFinish(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#F8FAFC] border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F7BFF] font-medium text-slate-700"
              >
                <option value="all">All Surface Finishes</option>
                <option value="Anodized">Anodized (Clear / Black / Colors)</option>
                <option value="Powder">Electrostatic Powder Coating</option>
                <option value="Mill">Mill Finish (As Extruded)</option>
              </select>
            </div>

            {/* Category Landing Fast-Links */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <div className="text-[11px] uppercase font-bold tracking-wider text-slate-500">
                Category Dossiers
              </div>
              <div className="space-y-1 text-xs font-medium text-slate-600">
                {CATEGORIES_V2.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/products/${cat.slug}`}
                    className="flex items-center justify-between py-1 px-1.5 rounded hover:bg-slate-50 hover:text-[#2F7BFF] transition-colors"
                  >
                    <span>{cat.name}</span>
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Mobile Filter Toggle Button */}
          <div className="lg:hidden col-span-1 flex items-center justify-between bg-white p-4 rounded-xl border border-[#E2E8F0]">
            <span className="text-xs font-bold text-[#0A2D5B]">
              Showing {filteredProducts.length} Products
            </span>
            <Button
              variant="outline"
              size="sm"
              leftIcon={<Filter className="w-3.5 h-3.5" />}
              onClick={() => setMobileFilterOpen(true)}
            >
              Filter Options
            </Button>
          </div>

          {/* Product Grid Area */}
          <div className="lg:col-span-9 space-y-8">
            {/* Header info strip */}
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>
                Displaying <strong>{filteredProducts.length}</strong> verified technical products
              </span>
              {selectedCategory !== 'all' && (
                <Link
                  href={`/products/${selectedCategory}`}
                  className="text-[#2F7BFF] font-semibold hover:underline flex items-center gap-1"
                >
                  View Category Engineering Dossier <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>

            {/* 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((prod, idx) => {
                const isCompared = compareList.includes(prod.slug);

                return (
                  <React.Fragment key={prod.slug}>
                    <Card
                      variant="default"
                      className="p-0 overflow-hidden flex flex-col justify-between border border-[#E2E8F0] hover:border-[#2F7BFF] hover:shadow-md transition-all group bg-white"
                    >
                      {/* 4:3 Studio Image */}
                      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={prod.primaryImage}
                          alt={`${prod.name} 4:3 technical extrusion render`}
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute top-2.5 left-2.5 flex items-center gap-1">
                          <span className="text-[10px] font-bold bg-[#0A2D5B]/90 text-white px-2 py-0.5 rounded backdrop-blur-xs font-heading uppercase">
                            {prod.categoryName}
                          </span>
                        </div>
                        <div className="absolute top-2.5 right-2.5">
                          <span className="text-[9px] font-mono font-bold bg-white/95 text-slate-700 px-1.5 py-0.5 rounded shadow-xs border border-slate-200">
                            {prod.profileGeometry}
                          </span>
                        </div>
                      </div>

                      {/* Content Details */}
                      <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <Link href={`/product/${prod.slug}`}>
                            <h3 className="font-heading font-bold text-base text-[#0A2D5B] group-hover:text-[#2F7BFF] transition-colors line-clamp-1 leading-snug">
                              {prod.name}
                            </h3>
                          </Link>
                          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                            {prod.shortDescription}
                          </p>

                          {/* 3 Verified Chips */}
                          <div className="flex flex-wrap gap-1 pt-1">
                            {prod.verifiedChips.slice(0, 3).map((chip, cIdx) => (
                              <span
                                key={cIdx}
                                className="text-[10px] bg-blue-50 text-blue-800 font-semibold px-2 py-0.5 rounded"
                              >
                                {chip}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                          <Link href={`/product/${prod.slug}`} className="flex-1">
                            <Button variant="primary" size="sm" className="w-full text-xs">
                              View Product
                            </Button>
                          </Link>
                          <Link
                            href={`/rfq?product=${prod.slug}&category=${prod.category}&source=catalog`}
                            className="shrink-0"
                          >
                            <Button variant="outline" size="sm" className="text-xs px-2.5">
                              RFQ
                            </Button>
                          </Link>
                          <button
                            onClick={() => toggleCompare(prod.slug)}
                            className={`p-2 rounded-lg border text-xs transition-colors ${
                              isCompared
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100'
                            }`}
                            title="Compare Profile"
                          >
                            <Scale className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </Card>

                    {/* Engineering Callout Strip after every 6 items */}
                    {(idx + 1) % 6 === 0 && (
                      <div className="col-span-1 md:col-span-2 xl:col-span-3 bg-gradient-to-r from-[#061D3B] to-[#0A2D5B] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm my-2">
                        <div className="space-y-1 text-center sm:text-left">
                          <div className="text-xs uppercase font-mono font-semibold text-[#2F7BFF]">
                            CUSTOM DIES & NON-STANDARD CROSS SECTIONS
                          </div>
                          <h4 className="text-lg sm:text-xl font-bold font-heading">
                            Can&apos;t find your exact section? Send us your drawing.
                          </h4>
                          <p className="text-xs text-slate-300">
                            STEP / DWG / DXF / PDF accepted. Our tooling engineers provide free DFM die verification within 24 hours.
                          </p>
                        </div>
                        <Link href="/rfq?mode=upload" className="shrink-0">
                          <Button variant="cta" size="md" leftIcon={<FileUp className="w-4 h-4" />}>
                            Upload Drawing
                          </Button>
                        </Link>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* Floating Compare Bar */}
        {compareList.length > 0 && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-[#0A2D5B] text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/20 animate-in slide-in-from-bottom-2">
            <div className="text-xs font-semibold flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#2F7BFF]" />
              <span>{compareList.length} profiles selected for comparison</span>
            </div>
            <div className="flex items-center gap-2">
              {comparedProducts.map((p) => (
                <span
                  key={p.slug}
                  className="text-[11px] bg-white/10 px-2 py-0.5 rounded font-medium truncate max-w-[100px]"
                >
                  {p.name.split(' ')[0]}
                </span>
              ))}
            </div>
            <button
              onClick={() => setCompareList([])}
              className="text-slate-300 hover:text-white text-xs ml-2"
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
