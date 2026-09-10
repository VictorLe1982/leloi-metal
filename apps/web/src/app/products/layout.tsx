import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aluminium Extrusions & Engineered Systems Catalog | LELOI METAL',
  description:
    'Explore 60 precision aluminium extrusion solution families across 6 core business divisions manufactured in Vietnam for global B2B export.',
  alternates: {
    canonical: 'https://leloimetal.com/products'
  }
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
