/**
 * Content Security Policy.
 *
 * 'unsafe-inline' remains on script-src because JSON-LD is injected as inline
 * <script type="application/ld+json"> across the catalogue and Next's own
 * bootstrap is inline. Tightening this to a nonce is worthwhile but is a
 * separate change — it requires moving every JSON-LD block behind a nonce
 * provider and cannot be done safely by editing headers alone.
 */
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.googletagmanager.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests'
].join('; ');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@leloi/ui', '@leloi/validation', '@leloi/types', '@leloi/seo', '@leloi/analytics'],
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Previously hostname: '**', which turned /_next/image into an open proxy
    // that any third party could use to serve and cache their images at our
    // cost. All product media is local; this list is for future CDN use only.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'leloimetal.com'
      },
      {
        protocol: 'https',
        hostname: '**.leloimetal.com'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          { key: 'Content-Security-Policy', value: CSP },
          { key: 'X-DNS-Prefetch-Control', value: 'on' }
        ]
      },
      {
        // The staff portal must never be cached by a CDN or shared proxy.
        source: '/admin/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store, max-age=0' },
          { key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }
        ]
      }
    ];
  }
};

export default nextConfig;
