export interface OrganizationSchemaProps {
  name: string;
  legalName?: string;
  url: string;
  logo: string;
  description: string;
  slogan: string;
  email: string;
  telephone?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
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
    ...(props.address
      ? {
          address: {
            '@type': 'PostalAddress',
            addressCountry: props.address.addressCountry,
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

export function generateProductJsonLd(props: ProductSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: props.name,
    description: props.description,
    ...(props.image ? { image: props.image } : {}),
    ...(props.sku ? { sku: props.sku } : {}),
    ...(props.category ? { category: props.category } : {}),
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      price: 'Custom B2B Quotation by Drawing & Order Volume',
      availability: 'https://schema.org/InStock',
      url: props.url
    }
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
