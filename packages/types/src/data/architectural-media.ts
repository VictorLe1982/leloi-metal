export interface ArchitecturalMediaAsset {
  id: string;
  slug: string;
  title: string;
  category: string;
  subCategory: string;
  usage: 'HERO' | 'GALLERY' | 'CARD' | 'DETAIL' | 'CTA_BG';
  pageSections: string[];
  alt: string;
  caption: string;
  recommendedRatio: '16:9' | '4:3' | '1:1' | '21:9';
  sourceFile: string;
  outputFiles: {
    hero: string;
    gallery: string;
    card: string;
    detail: string;
    thumbnail: string;
  };
  status: 'approved';
}

export const ARCHITECTURAL_MEDIA_MANIFEST: ArchitecturalMediaAsset[] = [
  {
    id: 'arch-media-hero-01',
    slug: 'architectural-windows-doors-hero-01',
    title: 'Luxury Coastal Villa Aluminium Sliding Doors & Glazing',
    category: 'architectural',
    subCategory: 'windows-doors',
    usage: 'HERO',
    pageSections: ['dossier-hero', 'category-hero', 'rfq-cta'],
    alt: 'Modern luxury coastal villa with slim dark aluminium sliding door systems and floor-to-ceiling glass opening to infinity pool',
    caption: 'Installed slim-profile aluminium sliding door system in luxury coastal residential application with unobstructed panoramic glazing.',
    recommendedRatio: '16:9',
    sourceFile: '/archive/source-assets/architectural/architectural-windows-doors-hero-01.png',
    outputFiles: {
      hero: '/media/architectural/hero/architectural-windows-doors-hero-01.webp',
      gallery: '/media/architectural/gallery/architectural-windows-doors-hero-01.webp',
      card: '/media/architectural/cards/architectural-windows-doors-hero-01.webp',
      detail: '/media/architectural/details/architectural-windows-doors-hero-01.webp',
      thumbnail: '/media/architectural/cards/architectural-windows-doors-hero-01-thumb.webp',
    },
    status: 'approved',
  },
  {
    id: 'arch-media-sliding-01',
    slug: 'architectural-sliding-door-gallery-01',
    title: 'Seamless Indoor-Outdoor Living Aluminium Sliding Door',
    category: 'architectural',
    subCategory: 'sliding-door',
    usage: 'GALLERY',
    pageSections: ['application-gallery', 'sliding-system-hero', 'system-overview'],
    alt: 'Seamless indoor-outdoor living terrace with flush track aluminium sliding doors',
    caption: 'Wide-span multi-panel aluminium sliding door system featuring low-threshold flush track integration for barrier-free transitions.',
    recommendedRatio: '16:9',
    sourceFile: '/archive/source-assets/architectural/architectural-sliding-door-gallery-01.png',
    outputFiles: {
      hero: '/media/architectural/hero/architectural-sliding-door-gallery-01.webp',
      gallery: '/media/architectural/gallery/architectural-sliding-door-gallery-01.webp',
      card: '/media/architectural/cards/architectural-sliding-door-gallery-01.webp',
      detail: '/media/architectural/details/architectural-sliding-door-gallery-01.webp',
      thumbnail: '/media/architectural/cards/architectural-sliding-door-gallery-01-thumb.webp',
    },
    status: 'approved',
  },
  {
    id: 'arch-media-casement-01',
    slug: 'architectural-casement-window-gallery-01',
    title: 'Architectural Minimalist Casement Window Installation',
    category: 'architectural',
    subCategory: 'casement-window',
    usage: 'GALLERY',
    pageSections: ['application-gallery', 'window-systems', 'system-grid'],
    alt: 'Minimalist dark aluminium casement and fixed window systems on modern residence',
    caption: 'Concealed sash architectural aluminium casement windows integrated seamlessly into modern timber and exposed concrete facades.',
    recommendedRatio: '16:9',
    sourceFile: '/archive/source-assets/architectural/architectural-casement-window-gallery-01.png',
    outputFiles: {
      hero: '/media/architectural/hero/architectural-casement-window-gallery-01.webp',
      gallery: '/media/architectural/gallery/architectural-casement-window-gallery-01.webp',
      card: '/media/architectural/cards/architectural-casement-window-gallery-01.webp',
      detail: '/media/architectural/details/architectural-casement-window-gallery-01.webp',
      thumbnail: '/media/architectural/cards/architectural-casement-window-gallery-01-thumb.webp',
    },
    status: 'approved',
  },
  {
    id: 'arch-media-curtain-wall-01',
    slug: 'architectural-curtain-wall-card-01',
    title: 'High-Rise Commercial Glass Curtain Wall Facade',
    category: 'architectural',
    subCategory: 'curtain-wall-facade',
    usage: 'CARD',
    pageSections: ['related-solutions', 'category-grid', 'application-gallery'],
    alt: 'High-rise commercial glass curtain wall facade with precision aluminium structural mullions',
    caption: 'Unitized and stick architectural aluminium curtain wall mullions engineered for high wind-load commercial towers.',
    recommendedRatio: '4:3',
    sourceFile: '/archive/source-assets/architectural/architectural-curtain-wall-card-01.png',
    outputFiles: {
      hero: '/media/architectural/hero/architectural-curtain-wall-card-01.webp',
      gallery: '/media/architectural/gallery/architectural-curtain-wall-card-01.webp',
      card: '/media/architectural/cards/architectural-curtain-wall-card-01.webp',
      detail: '/media/architectural/details/architectural-curtain-wall-card-01.webp',
      thumbnail: '/media/architectural/cards/architectural-curtain-wall-card-01-thumb.webp',
    },
    status: 'approved',
  },
  {
    id: 'arch-media-louvers-01',
    slug: 'architectural-louvers-card-01',
    title: 'Modern Aerofoil Solar Sunshade Louvers',
    category: 'architectural',
    subCategory: 'louvers-sunshade',
    usage: 'CARD',
    pageSections: ['related-solutions', 'category-grid', 'application-gallery'],
    alt: 'Architectural aluminium solar louvers and sunshade fins on luxury modern villa facade',
    caption: 'Motorized and fixed aerofoil sunshade louvers providing passive solar control and architectural shading aesthetics.',
    recommendedRatio: '4:3',
    sourceFile: '/archive/source-assets/architectural/architectural-louvers-card-01.png',
    outputFiles: {
      hero: '/media/architectural/hero/architectural-louvers-card-01.webp',
      gallery: '/media/architectural/gallery/architectural-louvers-card-01.webp',
      card: '/media/architectural/cards/architectural-louvers-card-01.webp',
      detail: '/media/architectural/details/architectural-louvers-card-01.webp',
      thumbnail: '/media/architectural/cards/architectural-louvers-card-01-thumb.webp',
    },
    status: 'approved',
  },
  {
    id: 'arch-media-cladding-01',
    slug: 'architectural-cladding-card-01',
    title: 'Interlocking Architectural Aluminium Wall Cladding',
    category: 'architectural',
    subCategory: 'wall-cladding',
    usage: 'CARD',
    pageSections: ['related-solutions', 'category-grid'],
    alt: 'Dark architectural aluminium interlocking wall cladding panels on modern exterior',
    caption: 'Durable architectural aluminium cassette panels and interlocking siding for modern exterior rainscreen envelopes.',
    recommendedRatio: '4:3',
    sourceFile: '/archive/source-assets/architectural/architectural-cladding-card-01.png',
    outputFiles: {
      hero: '/media/architectural/hero/architectural-cladding-card-01.webp',
      gallery: '/media/architectural/gallery/architectural-cladding-card-01.webp',
      card: '/media/architectural/cards/architectural-cladding-card-01.webp',
      detail: '/media/architectural/details/architectural-cladding-card-01.webp',
      thumbnail: '/media/architectural/cards/architectural-cladding-card-01-thumb.webp',
    },
    status: 'approved',
  },
  {
    id: 'arch-media-ceiling-01',
    slug: 'architectural-ceiling-card-01',
    title: 'Commercial Linear Aluminium Acoustic Baffle Ceiling',
    category: 'architectural',
    subCategory: 'ceiling-systems',
    usage: 'CARD',
    pageSections: ['related-solutions', 'category-grid'],
    alt: 'Linear architectural aluminium acoustic baffle ceiling in modern commercial interior',
    caption: 'Precision extruded U-baffle aluminium linear ceiling profiles designed for commercial lobbies, transit hubs, and retail atriums.',
    recommendedRatio: '4:3',
    sourceFile: '/archive/source-assets/architectural/architectural-ceiling-card-01.png',
    outputFiles: {
      hero: '/media/architectural/hero/architectural-ceiling-card-01.webp',
      gallery: '/media/architectural/gallery/architectural-ceiling-card-01.webp',
      card: '/media/architectural/cards/architectural-ceiling-card-01.webp',
      detail: '/media/architectural/details/architectural-ceiling-card-01.webp',
      thumbnail: '/media/architectural/cards/architectural-ceiling-card-01-thumb.webp',
    },
    status: 'approved',
  },
  {
    id: 'arch-media-pergola-01',
    slug: 'architectural-pergola-card-01',
    title: 'Modern Bi-Climatic Aluminium Louvered Pergola',
    category: 'architectural',
    subCategory: 'pergola-canopy',
    usage: 'CARD',
    pageSections: ['related-solutions', 'category-grid'],
    alt: 'Modern architectural aluminium pergola canopy structure on villa patio',
    caption: 'Extruded architectural structural beams and motorized louver blades for all-weather outdoor patio living.',
    recommendedRatio: '4:3',
    sourceFile: '/archive/source-assets/architectural/architectural-pergola-card-01.png',
    outputFiles: {
      hero: '/media/architectural/hero/architectural-pergola-card-01.webp',
      gallery: '/media/architectural/gallery/architectural-pergola-card-01.webp',
      card: '/media/architectural/cards/architectural-pergola-card-01.webp',
      detail: '/media/architectural/details/architectural-pergola-card-01.webp',
      thumbnail: '/media/architectural/cards/architectural-pergola-card-01-thumb.webp',
    },
    status: 'approved',
  },
  {
    id: 'arch-media-bungalow-01',
    slug: 'architectural-bungalow-gallery-01',
    title: 'Luxury Resort Bungalow Glazing Architecture',
    category: 'architectural',
    subCategory: 'bungalow-resort',
    usage: 'GALLERY',
    pageSections: ['related-solutions', 'application-gallery'],
    alt: 'Modern luxury resort bungalow villa with expansive slim-frame aluminium glazing',
    caption: 'Comprehensive architectural aluminium systems engineered for luxury hospitality retreats and coastal resort bungalows.',
    recommendedRatio: '16:9',
    sourceFile: '/archive/source-assets/architectural/architectural-bungalow-gallery-01.png',
    outputFiles: {
      hero: '/media/architectural/hero/architectural-bungalow-gallery-01.webp',
      gallery: '/media/architectural/gallery/architectural-bungalow-gallery-01.webp',
      card: '/media/architectural/cards/architectural-bungalow-gallery-01.webp',
      detail: '/media/architectural/details/architectural-bungalow-gallery-01.webp',
      thumbnail: '/media/architectural/cards/architectural-bungalow-gallery-01-thumb.webp',
    },
    status: 'approved',
  },
  {
    id: 'arch-media-railing-01',
    slug: 'architectural-railing-card-01',
    title: 'Frameless Glass Balustrade & Aluminium Balcony Railing',
    category: 'architectural',
    subCategory: 'railing-balustrade',
    usage: 'CARD',
    pageSections: ['related-solutions', 'category-grid', 'application-gallery'],
    alt: 'Modern architectural glass balustrade with dark aluminium profiles along swimming pool deck',
    caption: 'Architectural heavy-duty base channel shoe and minimalist top cap handrails for frameless structural glass balustrades.',
    recommendedRatio: '4:3',
    sourceFile: '/archive/source-assets/architectural/architectural-railing-card-01.png',
    outputFiles: {
      hero: '/media/architectural/hero/architectural-railing-card-01.webp',
      gallery: '/media/architectural/gallery/architectural-railing-card-01.webp',
      card: '/media/architectural/cards/architectural-railing-card-01.webp',
      detail: '/media/architectural/details/architectural-railing-card-01.webp',
      thumbnail: '/media/architectural/cards/architectural-railing-card-01-thumb.webp',
    },
    status: 'approved',
  },
  {
    id: 'arch-media-thermal-break-01',
    slug: 'architectural-thermal-break-detail-01',
    title: 'Architectural Thermal-Break Profile Engineering Detail',
    category: 'architectural',
    subCategory: 'thermal-break-detail',
    usage: 'DETAIL',
    pageSections: ['thermal-break-feature', 'technical-gallery', 'system-anatomy'],
    alt: 'Technical cross-section detail of architectural aluminium profile with thermal break channel and double glazing',
    caption: 'Polyamide PA66 GF25 thermal-break barrier isolating exterior and interior aluminium chambers to minimize thermal conductivity.',
    recommendedRatio: '1:1',
    sourceFile: '/archive/source-assets/architectural/architectural-thermal-break-detail-01.png',
    outputFiles: {
      hero: '/media/architectural/hero/architectural-thermal-break-detail-01.webp',
      gallery: '/media/architectural/gallery/architectural-thermal-break-detail-01.webp',
      card: '/media/architectural/cards/architectural-thermal-break-detail-01.webp',
      detail: '/media/architectural/details/architectural-thermal-break-detail-01.webp',
      thumbnail: '/media/architectural/cards/architectural-thermal-break-detail-01-thumb.webp',
    },
    status: 'approved',
  },
];

export const ARCHITECTURAL_CATEGORY_MEDIA_MAP: Record<string, ArchitecturalMediaAsset> = {
  'windows-doors': ARCHITECTURAL_MEDIA_MANIFEST[0],
  'curtain-wall-facade': ARCHITECTURAL_MEDIA_MANIFEST[3],
  'louvers-sunshade': ARCHITECTURAL_MEDIA_MANIFEST[4],
  'wall-cladding': ARCHITECTURAL_MEDIA_MANIFEST[5],
  'ceiling-systems': ARCHITECTURAL_MEDIA_MANIFEST[6],
  'pergola': ARCHITECTURAL_MEDIA_MANIFEST[7],
  'pergola-canopy': ARCHITECTURAL_MEDIA_MANIFEST[7],
  'canopies': ARCHITECTURAL_MEDIA_MANIFEST[7],
  'bungalow-resort': ARCHITECTURAL_MEDIA_MANIFEST[8],
  'railing-balustrade': ARCHITECTURAL_MEDIA_MANIFEST[9],
  'decorative-aluminium': ARCHITECTURAL_MEDIA_MANIFEST[5],
  'thermal-break': ARCHITECTURAL_MEDIA_MANIFEST[10],
};

export function getArchitecturalMediaBySlug(slug: string): ArchitecturalMediaAsset | undefined {
  return ARCHITECTURAL_MEDIA_MANIFEST.find(m => m.slug === slug);
}

export function getArchitecturalMediaBySubCategory(subCategory: string): ArchitecturalMediaAsset[] {
  return ARCHITECTURAL_MEDIA_MANIFEST.filter(m => m.subCategory === subCategory);
}

export function getArchitecturalMediaForSection(section: string): ArchitecturalMediaAsset[] {
  return ARCHITECTURAL_MEDIA_MANIFEST.filter(m => m.pageSections.includes(section));
}
