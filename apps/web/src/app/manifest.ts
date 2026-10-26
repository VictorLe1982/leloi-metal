import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LELOI METAL — Precision Aluminium Extrusion Vietnam',
    short_name: 'LELOI METAL',
    description:
      'Precision aluminium extrusion, CNC machining, surface finishing and OEM manufacturing from Vietnam for global B2B industries.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#0A2D5B',
    icons: [
      { src: '/images/brand/favicon.png', sizes: '512x512', type: 'image/png' },
      { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }
    ]
  };
}
