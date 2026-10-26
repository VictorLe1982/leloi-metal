/**
 * LELOI METAL — Curated export market guides.
 *
 * Per ADR-007 only verified tier-1/tier-2 markets are published; thin
 * programmatic country pages are explicitly avoided. Extracted from the page
 * component so the sitemap and generateStaticParams read the same list.
 */

export const COUNTRY_MARKETS: Record<string, any> = {
  canada: {
    country: 'Canada',
    code: 'CA',
    title: 'Aluminium Extrusion Sourcing Guide for Canadian Buyers',
    fta: 'CPTPP (Comprehensive and Progressive Agreement for Trans-Pacific Partnership)',
    overview:
      'Canada represents a primary strategic export market for Vietnamese aluminium extrusions. With zero tariffs under CPTPP for originating goods, Canadian fabricators, solar developers, and OEMs actively diversify from high-tariff jurisdictions.',
    hsCode: '7604.10, 7604.21, 7604.29',
    mfnRate: '0% – 5.0%',
    cptppRate: '0% (Duty Free with valid CPTPP Certificate of Origin)',
    sourceUrl: 'https://www.cbsa-asfc.gc.ca/trade-commerce/tariff-tarif/2026/01-99/01-99-t2026-eng.pdf',
    sourceName: 'Canada Border Services Agency (CBSA) Customs Tariff Schedule',
    verifiedAt: '2026-09-01',
    verifiedBy: 'Compliance Officer (LELOI EXIM)',
    tradeRemedyNotes:
      'Certain aluminium extrusions originating from China remain subject to SIMA anti-dumping and countervailing duties in Canada. Sourcing verified originating extrusions from Vietnam provides legal compliance and substantial duty savings.',
    logistics: [
      'Direct ocean container shipping from Hai Phong or Cat Lai (VN) to Port of Vancouver (approx. 18–24 days transit)',
      'Intermodal rail delivery to Calgary, Edmonton, Toronto, and Montreal',
      'Incoterms: FOB Vietnam sea ports, CFR / CIF Vancouver or Montreal'
    ],
    targetBuyers: ['Solar mounting rail fabricators', 'Curtain wall facade contractors', 'OEM equipment builders', 'Distribution stockists'],
    faqs: [
      {
        q: 'How does LELOI METAL prove origin under CPTPP for Canadian customs?',
        a: 'Every export shipment is accompanied by a legally verified Certificate of Origin (Form CPTPP) issued in accordance with Chapter 3 Rules of Origin, verifying sufficient processing from billet to finished profile in Vietnam.'
      },
      {
        q: 'What standard aluminium alloys do Canadian buyers typically import?',
        a: '6063-T5/T6 for architectural systems and solar frames, and 6061-T6 for structural and CNC machined industrial components.'
      }
    ]
  },
  germany: {
    country: 'Germany',
    code: 'DE',
    title: 'Aluminium Extrusion Sourcing Guide for German & EU Buyers',
    fta: 'EVFTA (EU-Vietnam Free Trade Agreement)',
    overview:
      'Germany is Europe’s largest industrial consumer of precision aluminium profiles. Sourcing through LELOI METAL leverages preferential tariffs under EVFTA, strict EN 755 quality compliance, and complete CBAM carbon documentation.',
    hsCode: '7604.21, 7604.29',
    mfnRate: '7.5%',
    cptppRate: 'Preferential rate transitioning to 0% under EVFTA Protocol',
    sourceUrl: 'https://trade.ec.europa.eu/access-to-markets/en/content/eu-vietnam-free-trade-agreement',
    sourceName: 'European Commission Access2Markets Database',
    verifiedAt: '2026-09-01',
    verifiedBy: 'Compliance Officer (LELOI EXIM)',
    tradeRemedyNotes:
      'EU anti-dumping duties apply on specific Chinese extruded profiles. Vietnamese origin with valid EUR.1 Certificate of Origin qualifies for EVFTA preferential tariff treatment without EU AD duties.',
    logistics: [
      'Direct sea freight from Vietnam ports to Port of Hamburg, Bremerhaven, or Rotterdam (approx. 28–34 days transit)',
      'Incoterms: FOB Vietnam sea ports, CIF Hamburg / Rotterdam'
    ],
    targetBuyers: ['Automation frame integrators', 'Inverter and heat sink manufacturers', 'Specialist facade fabricators'],
    faqs: [
      {
        q: 'How does LELOI METAL address the EU Carbon Border Adjustment Mechanism (CBAM)?',
        a: 'We calculate embedded direct and indirect greenhouse gas emissions in accordance with EU Regulation 2023/956, providing quarterly carbon reporting data sheets for your CBAM declarants.'
      }
    ]
  }
};

export const MARKET_SLUGS = Object.keys(COUNTRY_MARKETS);

export function getMarketBySlug(slug: string) {
  return COUNTRY_MARKETS[slug];
}
