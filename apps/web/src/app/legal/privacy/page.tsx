import React from 'react';
import type { Metadata } from 'next';
import { LegalPageShell, LegalSection } from '@/components/legal/LegalPageShell';

const LAST_UPDATED = '17 September 2026';

export const metadata: Metadata = {
  title: 'Privacy Policy | LELOI METAL',
  description:
    'How LELOI METAL collects, uses, stores and protects personal data and confidential engineering drawings submitted through leloimetal.com.',
  alternates: { canonical: 'https://leloimetal.com/legal/privacy' }
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      intro="This policy explains what personal data we collect through leloimetal.com, why we collect it, how long we keep it, and the rights you have over it."
      lastUpdated={LAST_UPDATED}
    >
      <LegalSection heading="1. Who we are">
        <p>
          LELOI METAL is the aluminium manufacturing and export business field of LELOI EXIM GLOBAL
          CO., LTD, operating from 374 Nguyen Thien Thuan, My Hao Ward, Hung Yen Province, Vietnam.
          We are the data controller for personal data submitted through leloimetal.com. Data
          protection enquiries can be sent to{' '}
          <span className="font-mono text-navy">privacy@leloimetal.com</span>.
        </p>
      </LegalSection>

      <LegalSection heading="2. What we collect">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Request for Quotation (RFQ) data:</strong> company name, country, contact name,
            work email, telephone, buyer type, technical specifications, commercial terms and any
            engineering drawings you upload.
          </li>
          <li>
            <strong>Contact form data:</strong> name, work email, company, country, telephone and
            your message.
          </li>
          <li>
            <strong>Technical data:</strong> IP address, browser type, referring page and pages
            viewed, collected through analytics where you have consented.
          </li>
        </ul>
        <p>
          We do not knowingly collect special-category personal data and ask that you do not submit
          it through our forms.
        </p>
      </LegalSection>

      <LegalSection heading="3. Why we use it and on what legal basis">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            To prepare and deliver technical quotations you requested — necessary for steps taken at
            your request prior to entering a contract.
          </li>
          <li>
            To respond to commercial enquiries and maintain our business relationship — our
            legitimate interest in operating a B2B export business.
          </li>
          <li>
            To meet customs, export documentation, tax and accounting obligations — compliance with
            a legal obligation.
          </li>
          <li>To measure site performance through analytics — only where you have consented.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. Confidential engineering drawings">
        <p>
          CAD files and technical drawings you upload are treated as your confidential intellectual
          property. They are stored in private storage that is not publicly accessible or indexable,
          access is limited to the assigned engineering and sales personnel handling your enquiry,
          and every access event is recorded in an internal audit log. We do not use your drawings
          to produce goods for any other customer. A mutual non-disclosure agreement is available on
          request before you submit files.
        </p>
      </LegalSection>

      <LegalSection heading="5. Who we share data with">
        <p>
          We share personal data only with parties needed to fulfil your request: our hosting and
          storage providers, email delivery provider, analytics provider where consented, and —
          where a shipment proceeds — freight forwarders and customs authorities. We do not sell
          personal data and we do not share it for third-party marketing.
        </p>
      </LegalSection>

      <LegalSection heading="6. International transfers">
        <p>
          We are established in Vietnam, so data submitted from the EU, UK, Canada or other regions
          is transferred outside your home jurisdiction. Where such a transfer requires a safeguard,
          we rely on Standard Contractual Clauses or an equivalent mechanism with our processors.
          You may request details of the safeguards applied.
        </p>
      </LegalSection>

      <LegalSection heading="7. How long we keep it">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Unsuccessful enquiries and RFQs: up to 24 months from last contact.</li>
          <li>
            Engineering drawings from unsuccessful RFQs: deleted on request, or within 24 months.
          </li>
          <li>
            Records relating to completed transactions: retained for the period required by Vietnam
            tax, customs and accounting law.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="8. Your rights">
        <p>
          Subject to the law applicable to you, you may request access to your personal data, its
          correction or erasure, restriction of or objection to processing, and portability. You may
          also withdraw analytics consent at any time. Send requests to{' '}
          <span className="font-mono text-navy">privacy@leloimetal.com</span>; we respond within
          30 days. If you are in the EU or UK and are not satisfied with our response, you may
          complain to your national supervisory authority.
        </p>
      </LegalSection>

      <LegalSection heading="9. Security">
        <p>
          We apply encryption in transit, private (non-public) storage for uploaded files,
          role-based access control for internal systems and audit logging of access to confidential
          material. No method of transmission or storage is completely secure, but we review these
          measures as our systems evolve.
        </p>
      </LegalSection>

      <LegalSection heading="10. Changes to this policy">
        <p>
          We may update this policy as our operations or legal obligations change. The revision date
          at the top of this page always reflects the current version.
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
