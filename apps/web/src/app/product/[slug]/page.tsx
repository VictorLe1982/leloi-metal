import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button, Card, Badge } from '@leloi/ui';
import { PRODUCTS_V2, ProductCatalogItem } from '@leloi/types';
import { ProductGallery } from '@/components/catalog/ProductGallery';
import { DatasheetDownloadButton } from '@/components/catalog/DatasheetDownloadButton';
import {
  ChevronRight,
  FileUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Wrench,
  Settings,
  Sparkles,
  Package,
  FileText,
  AlertCircle
} from 'lucide-react';

export function generateStaticParams() {
  return PRODUCTS_V2.map((p) => ({
    slug: p.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS_V2.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found | LELOI METAL',
      description: 'The requested aluminium product could not be located.'
    };
  }

  return {
    title: `${product.name} | Aluminium Profile Manufacturer Vietnam | LELOI METAL`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | LELOI METAL`,
      description: product.shortDescription,
      images: [{ url: product.primaryImage }]
    }
  };
}

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS_V2.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS_V2.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, 3);

  // Schema.org Product JSON-LD
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.longDescription,
    image: product.primaryImage,
    category: product.categoryName,
    material: product.alloys.join(', '),
    manufacturer: {
      '@type': 'Organization',
      name: 'LELOI METAL',
      url: 'https://leloimetal.com'
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      price: 'Contact for B2B Quotation'
    }
  };

  return (
    <div className="min-h-screen bg-[#F1F4F8]/60 py-10 px-4 sm:px-6 lg:px-8">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#2F7BFF]">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/products" className="hover:text-[#2F7BFF]">
            Products
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href={`/products/${product.category}`} className="hover:text-[#2F7BFF]">
            {product.categoryName}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-800 font-semibold truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </nav>

        {/* Product Hero: Left Gallery (4:3) + Right Technical Summary Panel */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xs p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: 4:3 Gallery Client Component */}
          <div className="lg:col-span-7">
            <ProductGallery
              name={product.name}
              categoryName={product.categoryName}
              primaryImage={product.primaryImage}
              galleryImages={product.galleryImages}
              mediaProvenance={product.mediaProvenance}
            />
          </div>

          {/* Right: Technical Summary & Direct RFQ Action */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#2F7BFF] uppercase tracking-wider">
                  {product.profileGeometry} Section
                </span>
                <span className="text-slate-300">•</span>
                <Badge variant="verified" size="sm">
                  {product.verificationStatus}
                </Badge>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0A2D5B] leading-tight">
                {product.name}
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Technical Parameter Summary Table */}
              <div className="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200 space-y-2.5 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Product Family:</span>
                  <span className="font-semibold text-[#0A2D5B]">{product.categoryName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Profile Geometry:</span>
                  <span className="font-semibold text-[#0A2D5B]">{product.profileGeometry}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Verified Alloys:</span>
                  <span className="font-mono font-bold text-[#2F7BFF]">
                    {product.alloys.join(', ')}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Verified Tempers:</span>
                  <span className="font-mono font-bold text-slate-700">
                    {product.tempers.join(', ')}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Surface Finishes:</span>
                  <span className="font-semibold text-slate-700">
                    {product.surfaceFinishes.slice(0, 2).join(', ')}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 font-medium">Proprietary Drawing:</span>
                  <span className="font-bold text-emerald-700">
                    {product.requiresDrawing ? 'Required (2D/3D)' : 'Standard Extrusion'}
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <Link
                href={`/rfq?product=${product.slug}&category=${product.category}&alloy=${product.alloys[0]}&source=product_detail`}
                className="block"
              >
                <Button variant="cta" size="lg" className="w-full" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Request Quotation for This Profile
                </Button>
              </Link>
              <Link
                href={`/rfq?product=${product.slug}&category=${product.category}&mode=upload`}
                className="block"
              >
                <Button
                  variant="outline"
                  size="md"
                  className="w-full"
                  leftIcon={<FileUp className="w-4 h-4 text-[#2F7BFF]" />}
                >
                  Upload Your CAD Drawing
                </Button>
              </Link>

              {/* Datasheet Download Client Button */}
              <DatasheetDownloadButton productName={product.name} />
            </div>
          </div>
        </div>

        {/* Detailed Engineering Sections (SSR In DOM for SEO) */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xs p-6 sm:p-10 space-y-12">
          {/* 1. Engineering Description */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-[#0A2D5B] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#2F7BFF]" />
              Technical Overview & Manufacturing Notes
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              {product.longDescription}
            </p>
          </section>

          {/* 2. Technical Specifications Table */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold font-heading text-[#0A2D5B] flex items-center gap-2">
                <Settings className="w-5 h-5 text-[#2F7BFF]" />
                Verified Engineering Specifications
              </h2>
              <span className="text-xs text-slate-400">
                Values reflect verified factory tooling constraints
              </span>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#F8FAFC] text-slate-700 border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4 font-semibold">Parameter</th>
                    <th className="py-3 px-4 font-semibold">Value / Capability</th>
                    <th className="py-3 px-4 font-semibold text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {product.specs.map((spec, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-4 text-slate-600 font-medium">{spec.label}</td>
                      <td className="py-3 px-4 font-semibold text-[#0A2D5B]">{spec.value}</td>
                      <td className="py-3 px-4 text-center">
                        <Badge
                          variant={spec.verified ? 'verified' : 'unverified'}
                          size="sm"
                        >
                          {spec.verified ? 'VERIFIED' : 'UNVERIFIED'}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Applications & Secondary CNC Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-slate-200/70">
            {/* Applications */}
            <div className="space-y-3">
              <h3 className="text-base font-bold font-heading text-[#0A2D5B] flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#2F7BFF]" />
                Primary Applications
              </h3>
              <ul className="space-y-2">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Secondary Fabrications */}
            <div className="space-y-3">
              <h3 className="text-base font-bold font-heading text-[#0A2D5B] flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#2F7BFF]" />
                In-House Secondary Fabrication
              </h3>
              <ul className="space-y-2">
                {product.fabrications.map((fab, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                    <Sparkles className="w-4 h-4 text-[#2F7BFF] shrink-0 mt-0.5" />
                    <span>{fab}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4. DFM Notes & Engineering Guidelines */}
          <section className="space-y-3 pt-4 border-t border-slate-200/70">
            <h3 className="text-base font-bold font-heading text-[#0A2D5B] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500" />
              Design for Manufacturing (DFM) Notes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.dfmNotes.map((note, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-amber-50/50 border border-amber-200/70 rounded-xl text-xs text-amber-900 flex items-start gap-2.5"
                >
                  <span className="w-5 h-5 rounded-full bg-amber-200/70 text-amber-800 text-[10px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{note}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Quality Control & Export Packaging */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200/70">
            <div className="space-y-3">
              <h3 className="text-base font-bold font-heading text-[#0A2D5B] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Quality Control & Verification
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.qcStandards.map((std, idx) => (
                  <Badge key={idx} variant="outline" size="md">
                    {std}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-base font-bold font-heading text-[#0A2D5B] flex items-center gap-2">
                <Package className="w-4 h-4 text-[#2F7BFF]" />
                Export Packaging Standard
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200">
                {product.packaging}
              </p>
            </div>
          </section>
        </div>

        {/* Related Products within Category */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold font-heading text-[#0A2D5B]">
                Related Profiles in {product.categoryName}
              </h3>
              <Link
                href={`/products/${product.category}`}
                className="text-xs font-semibold text-[#2F7BFF] hover:underline flex items-center gap-1"
              >
                View full category
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Card key={rel.id} className="overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={rel.primaryImage}
                      alt={rel.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2.5 right-2.5">
                      <Badge variant="verified" size="sm">
                        {rel.profileGeometry}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-[#0A2D5B] font-heading line-clamp-1">
                        {rel.name}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                        {rel.shortDescription}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={`/product/${rel.slug}`}
                        className="text-xs font-semibold text-[#2F7BFF] hover:underline flex items-center gap-1"
                      >
                        View Profile <ChevronRight className="w-3 h-3" />
                      </Link>
                      <Link
                        href={`/rfq?product=${rel.slug}&category=${rel.category}`}
                        className="text-xs font-semibold text-slate-600 hover:text-[#0A2D5B]"
                      >
                        RFQ
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Global Bottom RFQ Conversion Strip */}
        <div className="bg-gradient-to-r from-[#0A2D5B] via-[#0F3A72] to-[#122A4A] rounded-2xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl text-center lg:text-left">
            <span className="text-xs font-mono font-bold text-[#F4A900] tracking-widest uppercase">
              B2B Aluminium Manufacturing • OEM & Custom Tooling
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Need custom modifications or precision tolerances for this profile?
            </h3>
            <p className="text-sm text-slate-200">
              Submit your 2D CAD (DWG, DXF, PDF) or 3D STEP files. Our engineering team conducts DFM flow analysis and issues formal FOB/CIF quotations with guaranteed lead times.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <Link
              href={`/rfq?product=${product.slug}&category=${product.category}&mode=upload`}
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full border-white/30 text-white hover:bg-white/10"
                leftIcon={<FileUp className="w-4 h-4 text-[#F4A900]" />}
              >
                Upload CAD Drawing
              </Button>
            </Link>
            <Link
              href={`/rfq?product=${product.slug}&category=${product.category}&alloy=${product.alloys[0]}`}
              className="w-full sm:w-auto"
            >
              <Button
                variant="cta"
                size="lg"
                className="w-full"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Request Quotation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
