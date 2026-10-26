import React from 'react';

const BASE_URL = 'https://leloimetal.com';
const CANONICAL = `${BASE_URL}/tools/aluminium-weight-calculator`;

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Aluminium Weight Calculator',
  url: CANONICAL,
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'Any (web browser)',
  description:
    'Calculates theoretical weight per metre, weight per piece and total batch tonnage for extruded aluminium profiles across flat bar, round bar, tube, square tube, angle, channel, T-profile and I-beam geometries.',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'LELOI METAL', url: BASE_URL }
};

// Mirrors the steps a user actually performs in the calculator UI.
const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to calculate the weight of an aluminium extrusion',
  description:
    'Work out kg per metre, kg per piece and total tonnage for an aluminium profile from its cross-section dimensions and alloy density.',
  totalTime: 'PT2M',
  supply: [
    { '@type': 'HowToSupply', name: 'Profile cross-section dimensions in millimetres' },
    { '@type': 'HowToSupply', name: 'Alloy designation (for example 6063 or 6061)' }
  ],
  step: [
    {
      '@type': 'HowToStep',
      name: 'Select the profile geometry',
      text: 'Choose the shape that matches your section: flat bar, round bar, round tube, square or rectangular tube, angle, channel, T-profile or I-beam.'
    },
    {
      '@type': 'HowToStep',
      name: 'Enter the cross-section dimensions',
      text: 'Enter width, height and wall thickness in millimetres, taken from your drawing.'
    },
    {
      '@type': 'HowToStep',
      name: 'Select the alloy',
      text: 'Pick the alloy so the correct density is applied. 6063 uses 2.70 g/cm³; other 6000-series alloys range from 2.68 to 2.85 g/cm³.'
    },
    {
      '@type': 'HowToStep',
      name: 'Enter length and quantity',
      text: 'Enter the cut length in millimetres and the number of pieces to obtain kg per metre, kg per piece and total tonnage.'
    }
  ]
};

export default function WeightCalculatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      {children}
    </>
  );
}
