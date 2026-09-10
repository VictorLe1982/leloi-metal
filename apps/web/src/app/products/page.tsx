'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Card, Badge, Button } from '@leloi/ui';
import { PRODUCTS_V2, CATEGORIES_V2, PRODUCT_TAXONOMY } from '@leloi/types';
import { ProductCard } from '@/components/catalog/ProductCard';
import {
  Search,
  Filter,
  ArrowRight,
  FileUp,
  Scale,
  CheckCircle2,
  SlidersHorizontal,
  RotateCcw,
  X,
  ChevronRight
} from 'lucide-react';

export default function ProductsCatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedGeometry, setSelectedGeometry] = useState<string>('all');
  const [selectedAlloy, setSelectedAlloy] = useState<string>('all');
  const [selectedFinish, setSelectedFinish] = useState<string>('all');
  const [selectedApp, setSelectedApp] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);
  const [compareList, setCompareList] = useState<string[]>([]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return PRODUCTS_V2.filter((p) => {
      const matchCategory =
        selectedCategory === 'all' ||
        p.category === selectedCategory ||
        (selectedCategory === 'solar' && p.category === 'solar-profiles') ||
        (selectedCategory === 'architectural' &&
          (p.category === 'architectural-systems' || p.category === 'architectural')) ||
        (selectedCategory === 'thermal-management' &&
          (p.category === 'heat-sink-thermal' || p.category === 'thermal-management'));
      const matchGeometry = selectedGeometry === 'all' || p.profileGeometry === selectedGeometry;
      const matchAlloy = selectedAlloy === 'all' || p.alloys.some((a) => a.includes(selectedAlloy));
      const matchFinish =
        selectedFinish === 'all' ||
        p.surfaceFinishes.some((f) => f.toLowerCase().includes(selectedFinish.toLowerCase()));
      const matchApp =
        selectedApp === 'all' ||
        p.applications.some((app) => app.toLowerCase().includes(selectedApp.toLowerCase())) ||
        p.name.toLowerCase().includes(selectedApp.toLowerCase());
      const matchSearch =
        searchQuery.trim() === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.applications.some((app) => app.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.alloys.some((al) => al.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCategory && matchGeometry && matchAlloy && matchFinish && matchApp && matchSearch;
    });
  }, [selectedCategory, selectedGeometry, selectedAlloy, selectedFinish, selectedApp, searchQuery]);

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedGeometry !== 'all' ||
    selectedAlloy !== 'all' ||
    selectedFinish !== 'all' ||
    selectedApp !== 'all' ||
    searchQuery.trim() !== '';

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedGeometry('all');
    setSelectedAlloy('all');
    setSelectedFinish('all');
    setSelectedApp('all');
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
        <div className="bg-gradient-to-br from-[#061D3B] via-[#0A2D5B] to-[#0F3A72] text-white rounded-2xl p-8 sm:p-12 shadow-lg relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase font-mono font-semibold tracking-widest text-[#2F7BFF]">
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
            className={`px-4 py-2 rounded-xl text-xs font-heading font-semibold whitespace-nowrap transition-all cursor-pointer ${
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
                className={`px-4 py-2 rounded-xl text-xs font-heading font-semibold whitespace-nowrap transition-all cursor-pointer ${
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

        {/* Main Catalog Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Filter Sidebar (Sticky) */}
          <aside className="hidden lg:block lg:col-span-3 bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-6 sticky top-24">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-sm font-bold font-heading text-[#0A2D5B]">
                <SlidersHorizontal className="w-4 h-4 text-[#2F7BFF]" />
                Filter Catalog
              </div>
              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="text-xs text-[#2F7BFF] hover:underline flex items-center gap-1 font-medium cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset
                </button>
              )}
            </div>

            {/* Search Input */}
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase font-bold tracking-wider text-slate-500">
                Search Catalog
              </label>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Keyword, alloy, application..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-[#F8FAFC] border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F7BFF]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase font-bold tracking-wider text-slate-500">
                Product Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#F8FAFC] border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F7BFF] font-medium text-slate-700"
              >
                <option value="all">All 6 Categories</option>
                {PRODUCT_TAXONOMY.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Profile Geometry */}
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
                <option value="Solid">Solid Section</option>
                <option value="Hollow">Hollow Tube / Box</option>
                <option value="Semi-Hollow">Semi-Hollow Channel</option>
                <option value="Complex Multi-Void">Complex Multi-Void</option>
                <option value="T-Slot Modular">T-Slot / V-Slot Modular</option>
                <option value="Fin Array">Fin Array (Heat Sink)</option>
                <option value="CNC Component">CNC Machined Component</option>
              </select>
            </div>

            {/* Verified Alloy Selection */}
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase font-bold tracking-wider text-slate-500">
                Alloy Family
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
                <option value="Anodized">Anodized (15–25µm Clear/Black/Colors)</option>
                <option value="Powder">AkzoNobel 10-Yr Powder Coating</option>
                <option value="Mill">Mill Finish (As Extruded)</option>
              </select>
            </div>

            {/* Construction & Industry Application Filter */}
            <div className="space-y-1.5">
              <label className="text-[11px] uppercase font-bold tracking-wider text-slate-500">
                Application & Sector
              </label>
              <select
                value={selectedApp}
                onChange={(e) => setSelectedApp(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#F8FAFC] border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F7BFF] font-medium text-slate-700"
              >
                <option value="all">All Applications & Sectors</option>
                <option value="Window">Windows & Doors</option>
                <option value="Curtain">Curtain Wall & Facades</option>
                <option value="Railing">Railings & Balustrades</option>
                <option value="Solar">Solar Mounting & Racking</option>
                <option value="Automation">Automation & Machine Frames</option>
                <option value="Thermal">Heat Sinks & Inverter Cooling</option>
                <option value="CNC">CNC Machined OEM Parts</option>
              </select>
            </div>

            {/* Featured Strategic Vertical Links */}
            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <div className="text-[11px] uppercase font-bold tracking-wider text-slate-500">
                Strategic Verticals
              </div>
              <Link
                href="/products/architectural"
                className="block p-2.5 bg-blue-50/70 hover:bg-blue-100/70 border border-blue-200 rounded-xl transition-colors group"
              >
                <div className="text-xs font-bold text-[#0A2D5B] group-hover:text-[#2F7BFF] flex items-center justify-between">
                  <span>Architectural Hub</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2F7BFF] group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-[10px] text-slate-600 mt-0.5">
                  Windows, Facades, Louvers, Cladding & Pergolas
                </div>
              </Link>
              <Link
                href="/capabilities/powder-coating"
                className="block p-2.5 bg-emerald-50/70 hover:bg-emerald-100/70 border border-emerald-200 rounded-xl transition-colors group"
              >
                <div className="text-xs font-bold text-emerald-900 group-hover:text-emerald-700 flex items-center justify-between">
                  <span>AkzoNobel Coating</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="text-[10px] text-emerald-700 mt-0.5">
                  10-Year Performance Warranty Specifications
                </div>
              </Link>
            </div>

            {/* Category Dossiers Links */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <div className="text-[11px] uppercase font-bold tracking-wider text-slate-500">
                Category Dossiers
              </div>
              <div className="space-y-1 text-xs font-medium text-slate-600">
                {CATEGORIES_V2.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={cat.slug === 'architectural-systems' ? '/products/architectural' : `/products/${cat.slug}`}
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
          <div className="lg:col-span-9 space-y-6">
            {/* Header info strip - CODEX V3 COMPLIANT */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600 bg-white p-4 rounded-xl border border-[#E2E8F0]">
              <div>
                <span>
                  Explore <strong>{filteredProducts.length}</strong> aluminium product families
                </span>
                {searchQuery && (
                  <span className="text-slate-400 ml-1">
                    matching &ldquo;{searchQuery}&rdquo;
                  </span>
                )}
              </div>

              {selectedCategory !== 'all' && (
                <Link
                  href={`/products/${selectedCategory}`}
                  className="text-[#2F7BFF] font-semibold hover:underline flex items-center gap-1"
                >
                  View Category Engineering Dossier <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>

            {/* Active Filter Chips Bar */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 bg-[#F8FAFC] p-3 rounded-xl border border-slate-200 text-xs">
                <span className="text-slate-500 font-medium">Active Filters:</span>
                {selectedCategory !== 'all' && (
                  <span className="bg-white border border-slate-300 px-2.5 py-1 rounded-md text-slate-800 flex items-center gap-1">
                    Category: {CATEGORIES_V2.find((c) => c.slug === selectedCategory)?.name}
                    <button onClick={() => setSelectedCategory('all')} className="hover:text-red-500 cursor-pointer">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedGeometry !== 'all' && (
                  <span className="bg-white border border-slate-300 px-2.5 py-1 rounded-md text-slate-800 flex items-center gap-1">
                    Geometry: {selectedGeometry}
                    <button onClick={() => setSelectedGeometry('all')} className="hover:text-red-500 cursor-pointer">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedAlloy !== 'all' && (
                  <span className="bg-white border border-slate-300 px-2.5 py-1 rounded-md text-slate-800 flex items-center gap-1">
                    Alloy: {selectedAlloy}
                    <button onClick={() => setSelectedAlloy('all')} className="hover:text-red-500 cursor-pointer">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedFinish !== 'all' && (
                  <span className="bg-white border border-slate-300 px-2.5 py-1 rounded-md text-slate-800 flex items-center gap-1">
                    Finish: {selectedFinish}
                    <button onClick={() => setSelectedFinish('all')} className="hover:text-red-500 cursor-pointer">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedApp !== 'all' && (
                  <span className="bg-white border border-slate-300 px-2.5 py-1 rounded-md text-slate-800 flex items-center gap-1">
                    Sector: {selectedApp}
                    <button onClick={() => setSelectedApp('all')} className="hover:text-red-500 cursor-pointer">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="bg-white border border-slate-300 px-2.5 py-1 rounded-md text-slate-800 flex items-center gap-1">
                    Search: &ldquo;{searchQuery}&rdquo;
                    <button onClick={() => setSearchQuery('')} className="hover:text-red-500 cursor-pointer">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={handleResetFilters}
                  className="text-[#2F7BFF] font-semibold hover:underline ml-auto cursor-pointer"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* 3-Column Grid (CODEX V3 Redesigned ProductCard) */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((prod, idx) => {
                const isCompared = compareList.includes(prod.slug);

                return (
                  <React.Fragment key={prod.slug}>
                    <ProductCard
                      product={prod}
                      isCompared={isCompared}
                      onToggleCompare={toggleCompare}
                      priority={idx < 3}
                    />

                    {/* Engineering Callout Strip after every 6 products */}
                    {(idx + 1) % 6 === 0 && idx + 1 < filteredProducts.length && (
                      <div className="col-span-1 md:col-span-2 xl:col-span-3 bg-gradient-to-r from-[#061D3B] to-[#0A2D5B] text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 my-2 border border-slate-700 shadow-md">
                        <div className="space-y-1 text-center sm:text-left">
                          <h4 className="font-heading font-bold text-base text-white">
                            Can&apos;t find your exact extrusion geometry?
                          </h4>
                          <p className="text-xs text-slate-300 max-w-xl">
                            We manufacture 100% made-to-drawing profiles from customer STEP, DWG, DXF, or PDF files. Complete DFM flow analysis and die tooling quotes issued within 24 hours.
                          </p>
                        </div>
                        <Link href="/rfq?mode=upload" className="shrink-0">
                          <Button variant="cta" size="sm" leftIcon={<FileUp className="w-4 h-4" />}>
                            Upload Your Drawing
                          </Button>
                        </Link>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {filteredProducts.length === 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#0A2D5B]">
                  No matching aluminium profiles found
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Try adjusting your search criteria or resetting filters to view all standard and custom profiles.
                </p>
                <Button variant="outline" size="sm" onClick={handleResetFilters}>
                  Reset All Filters
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Floating Compare Bar */}
        {compareList.length > 0 && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#0A2D5B] text-white p-4 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-4 animate-in slide-in-from-bottom-5">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#2F7BFF]" />
              <div className="text-xs">
                <span className="font-bold">{compareList.length}</span> / 4 profiles selected
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              {comparedProducts.map((p) => (
                <span
                  key={p.slug}
                  className="text-[10px] bg-white/10 px-2 py-0.5 rounded truncate max-w-[100px]"
                >
                  {p.name}
                </span>
              ))}
            </div>
            <button
              onClick={() => setCompareList([])}
              className="text-xs text-slate-300 hover:text-white underline cursor-pointer"
            >
              Clear
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-xs bg-white h-full p-6 space-y-6 overflow-y-auto animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-between border-b pb-4">
              <span className="font-bold text-sm text-[#0A2D5B]">Filter Profiles</span>
              <button onClick={() => setMobileFilterOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Category */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 text-xs border rounded-lg"
                >
                  <option value="all">All 6 Categories</option>
                  {PRODUCT_TAXONOMY.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Geometry */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">Profile Geometry</label>
                <select
                  value={selectedGeometry}
                  onChange={(e) => setSelectedGeometry(e.target.value)}
                  className="w-full p-2 text-xs border rounded-lg"
                >
                  <option value="all">All Geometries</option>
                  <option value="Solid">Solid</option>
                  <option value="Hollow">Hollow</option>
                  <option value="Semi-Hollow">Semi-Hollow</option>
                  <option value="Complex Multi-Void">Complex Multi-Void</option>
                  <option value="T-Slot Modular">T-Slot / V-Slot</option>
                  <option value="Fin Array">Fin Array</option>
                  <option value="CNC Component">CNC Component</option>
                </select>
              </div>

              {/* Alloy */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">Alloy</label>
                <select
                  value={selectedAlloy}
                  onChange={(e) => setSelectedAlloy(e.target.value)}
                  className="w-full p-2 text-xs border rounded-lg"
                >
                  <option value="all">All Alloys</option>
                  <option value="6063">6063</option>
                  <option value="6061">6061</option>
                  <option value="6005A">6005A</option>
                  <option value="6082">6082</option>
                  <option value="7075">7075</option>
                </select>
              </div>

              {/* Finish */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">Surface Finish</label>
                <select
                  value={selectedFinish}
                  onChange={(e) => setSelectedFinish(e.target.value)}
                  className="w-full p-2 text-xs border rounded-lg"
                >
                  <option value="all">All Finishes</option>
                  <option value="Anodized">Anodized (15–25µm)</option>
                  <option value="Powder">AkzoNobel 10-Yr Powder Coated</option>
                  <option value="Mill">Mill Finish</option>
                </select>
              </div>

              {/* Application */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600">Sector & Application</label>
                <select
                  value={selectedApp}
                  onChange={(e) => setSelectedApp(e.target.value)}
                  className="w-full p-2 text-xs border rounded-lg"
                >
                  <option value="all">All Applications</option>
                  <option value="Window">Windows & Doors</option>
                  <option value="Curtain">Curtain Wall & Facades</option>
                  <option value="Railing">Railings & Balustrades</option>
                  <option value="Solar">Solar Mounting</option>
                  <option value="Automation">Automation & T-Slot</option>
                  <option value="Thermal">Heat Sink & Cooling</option>
                  <option value="CNC">CNC Machined Parts</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t flex flex-col gap-2">
              <Button
                variant="cta"
                size="md"
                className="w-full"
                onClick={() => setMobileFilterOpen(false)}
              >
                Apply Filters ({filteredProducts.length})
              </Button>
              <Button
                variant="outline"
                size="md"
                className="w-full"
                onClick={handleResetFilters}
              >
                Reset All
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
