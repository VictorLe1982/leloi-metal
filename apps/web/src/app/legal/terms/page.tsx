import React from 'react';
import type { Metadata } from 'next';
import { LegalPageShell, LegalSection } from '@/components/legal/LegalPageShell';

const LAST_UPDATED = '17 September 2026';

export const metadata: Metadata = {
  title: 'Terms & Conditions | LELOI METAL',
  description:
    'Terms governing use of leloimetal.com, the RFQ and drawing submission process, quotation validity, intellectual property and technical information disclaimers.',
  alternates: { canonical: 'https://leloimetal.com/legal/terms' }
};

export default function TermsPage() {
  return (
    <LegalPageShell
      title="Terms & Conditions"
      intro="These terms govern your use of leloimetal.com, including our Request for Quotation process, engineering tools and published technical information."
      lastUpdated={LAST_UPDATED}
    >
      <LegalSection heading="1. Scope">
        <p>
          These terms apply to your use of this website. They do not themselves constitute a supply
          contract. Any sale of goods is governed by a separate signed contract, purchase order
          confirmation or proforma invoice, whose terms prevail over this page in the event of a
          conflict.
        </p>
      </LegalSection>

      <LegalSection heading="2. Business-to-business use only">
        <p>
          This website is intended for commercial and industrial buyers. We do not sell to
          consumers, and no consumer rights arising from distance selling apply to enquiries made
          here.
        </p>
      </LegalSection>

      <LegalSection heading="3. Quotations and RFQs">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            Submitting an RFQ is a request for a quotation. It does not create a contract and does
            not oblige either party to proceed.
          </li>
          <li>
            Quotations we issue are valid for the period stated on the quotation. Prices are
            sensitive to LME aluminium pricing, alloy and temper, order volume, tooling
            requirements, surface finish, packing specification and Incoterms, and may be revised if
            any of these change.
          </li>
          <li>
            A binding contract arises only on our written order confirmation or a countersigned
            contract.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. Your drawings and intellectual property">
        <p>
          You retain all intellectual property in drawings, models and specifications you submit. By
          uploading them you grant us a limited licence to use them solely to assess feasibility,
          prepare a quotation and, if an order proceeds, manufacture your goods. You confirm that you
          are entitled to share the material and that doing so does not infringe a third party's
          rights.
        </p>
        <p>
          A die produced from your drawing is dedicated to your parts and is not used to supply any
          other customer. Where we contribute design-for-manufacture improvements, ownership of those
          improvements is agreed in the supply contract.
        </p>
      </LegalSection>

      <LegalSection heading="5. Our intellectual property">
        <p>
          The LELOI METAL name, logo, site content, photography and technical publications are owned
          by LELOI EXIM GLOBAL CO., LTD or its licensors. You may not reproduce or republish them
          commercially without written permission. Third-party trademarks referenced on this site
          remain the property of their respective owners.
        </p>
      </LegalSection>

      <LegalSection heading="6. Technical information and calculators">
        <p>
          Alloy data, tolerance references, weight calculations, alloy selection guidance and duty
          information published on this site are provided for general engineering and planning
          purposes. Calculator outputs are theoretical estimates based on nominal dimensions and
          standard density values; actual weights vary with production tolerance. Tariff and trade
          information is informational only and is subject to formal classification, origin
          verification and ruling by the importing customs authority. Always confirm
          project-critical figures with our engineering team in writing before relying on them.
        </p>
      </LegalSection>

      <LegalSection heading="7. Product specifications">
        <p>
          Technical specifications published on this site describe processes we perform and standards
          we work to. Specifications applicable to your order are those stated in the order
          confirmation and accompanying drawing. Where a figure on this site has not been
          independently verified, it is withheld rather than published.
        </p>
      </LegalSection>

      <LegalSection heading="8. Availability and liability">
        <p>
          We aim to keep this site available and accurate but do not warrant uninterrupted
          availability or freedom from error. To the maximum extent permitted by law, we are not
          liable for indirect or consequential loss, loss of profit or loss of business arising from
          use of this website. Nothing in these terms limits liability that cannot lawfully be
          limited.
        </p>
      </LegalSection>

      <LegalSection heading="9. Export compliance">
        <p>
          You agree not to use our goods or information in breach of applicable export control,
          sanctions or anti-corruption law. We may decline an enquiry or order where compliance
          screening requires it.
        </p>
      </LegalSection>

      <LegalSection heading="10. Governing law">
        <p>
          These terms are governed by the laws of Vietnam. Disputes relating to this website are
          subject to the competent courts of Vietnam, without prejudice to any dispute resolution
          clause agreed in a specific supply contract.
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
