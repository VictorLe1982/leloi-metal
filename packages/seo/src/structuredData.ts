export interface OrganizationSchemaProps {
  name: string;
  legalName?: string;
  url: string;
  logo: string;
  description: string;
  slogan: string;
  email: string;
  telephone?: string;
  /** Profile URLs that corroborate the entity (LinkedIn, parent site, directories). */
  sameAs?: string[];
  foundingDate?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    addressCountry: string;
  };
}

export function generateOrganizationJsonLd(props: OrganizationSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: props.name,
    legalName: props.legalName || props.name,
    url: props.url,
    logo: props.logo,
    slogan: props.slogan,
    description: props.description,
    email: props.email,
    ...(props.telephone ? { telephone: props.telephone } : {}),
    ...(props.sameAs?.length ? { sameAs: props.sameAs } : {}),
    ...(props.foundingDate ? { foundingDate: props.foundingDate } : {}),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: props.email,
      ...(props.telephone ? { telephone: props.telephone } : {}),
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Vietnamese']
    },
    ...(props.address
      ? {
          address: {
            '@type': 'PostalAddress',
            addressCountry: props.address.addressCountry,
            addressRegion: props.address.addressRegion,
            addressLocality: props.address.addressLocality,
            streetAddress: props.address.streetAddress
          }
        }
      : {})
  };
}

export interface ProductSchemaProps {
  name: string;
  description: string;
  image?: string;
  sku?: string;
  category?: string;
  url: string;
}

/**
 * Builds Product JSON-LD for a made-to-order B2B item.
 *
 * No `offers` node is emitted: schema.org requires a numeric `price` (or
 * `lowPrice` on AggregateOffer), and LELOI METAL prices every item by drawing
 * and order volume. Emitting a sentence where a number belongs makes the whole
 * Product invalid in Google Rich Results, so quotation terms are expressed as a
 * property instead.
 */
export function generateProductJsonLd(props: ProductSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: props.name,
    description: props.description,
    url: props.url,
    ...(props.image ? { image: props.image } : {}),
    ...(props.sku ? { sku: props.sku } : {}),
    ...(props.category ? { category: props.category } : {}),
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Pricing model',
        value: 'Custom B2B quotation based on technical drawing and order volume'
      }
    ]
  };
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function generateBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.item
    }))
  };
}
