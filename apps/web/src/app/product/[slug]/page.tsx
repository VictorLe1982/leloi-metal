import type { Metadata } from 'next';
import { permanentRedirect } from 'next/navigation';
import {
  LEGACY_PRODUCT_ROUTE_MAP,
  resolveLegacyProductSlug
} from '@leloi/types';

export function generateStaticParams() {
  return Object.keys(LEGACY_PRODUCT_ROUTE_MAP).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resolution = resolveLegacyProductSlug(slug);

  return {
    title: resolution ? `Redirecting... | LELOI METAL` : 'Products | LELOI METAL',
    robots: {
      index: false,
      follow: true
    }
  };
}

export default async function LegacyProductRedirectPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resolution = resolveLegacyProductSlug(slug);

  if (resolution) {
    permanentRedirect(resolution.redirectUrl);
  }

  permanentRedirect('/products');
}
