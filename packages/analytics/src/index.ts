// ==============================================================================
// LELOI METAL B2B ANALYTICS EVENT CONTRACT (Blueprint Section 31.1)
// ==============================================================================

export type B2BAnalyticsEvent =
  | { name: 'view_product'; params: { categorySlug: string; productSlug: string; alloys?: string[] } }
  | { name: 'view_capability'; params: { capabilitySlug: string } }
  | { name: 'view_market'; params: { countryCode: string; marketName: string } }
  | { name: 'read_article_75'; params: { articleSlug: string; title: string } }
  | { name: 'calculator_completed'; params: { shape: string; alloy: string; totalWeightKg: number } }
  | { name: 'rfq_started'; params: { entryPoint: string; initialProduct?: string } }
  | { name: 'rfq_step_completed'; params: { stepNumber: number; stepName: string } }
  | { name: 'rfq_file_uploaded'; params: { fileType: string; fileSizeMb: number } }
  | { name: 'rfq_submitted'; params: { rfqNumber: string; productCategory: string; country: string } }
  | { name: 'contact_submitted'; params: { country: string; interest: string } }
  | { name: 'email_clicked'; params: { emailAddress: string; location: string } }
  | { name: 'phone_clicked'; params: { phoneNumber: string; location: string } };

declare global {
  interface Window {
    dataLayer?: Record<string, any>[];
    gtag?: (...args: any[]) => void;
  }
}

export function trackB2BEvent(event: B2BAnalyticsEvent): void {
  if (typeof window === 'undefined') return;

  try {
    // 1. Google Analytics 4 gtag
    if (typeof window.gtag === 'function') {
      window.gtag('event', event.name, event.params);
    }

    // 2. Google Tag Manager dataLayer
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: event.name,
        ...event.params,
        timestamp: new Date().toISOString()
      });
    }

    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics Event] ${event.name}:`, event.params);
    }
  } catch (err) {
    console.error('Analytics tracking error:', err);
  }
}
