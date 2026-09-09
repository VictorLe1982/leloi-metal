import test from 'node:test';
import assert from 'node:assert/strict';
import { rfqStep1CompanySchema, rfqStep4FileSchema, contactFormSchema } from '../packages/validation/src';
import { BuyerTypeCode } from '../packages/types/src';

test('RFQ Validation - Valid Company Step 1', () => {
  const validData = {
    companyName: 'Apex Industrial Systems',
    country: 'Canada',
    city: 'Toronto',
    website: 'https://apexindustrial.ca',
    contactName: 'Marcus Vance',
    workEmail: 'm.vance@apexindustrial.ca',
    phone: '+1 416 555 0192',
    buyerType: BuyerTypeCode.OEM
  };

  const parsed = rfqStep1CompanySchema.safeParse(validData);
  assert.equal(parsed.success, true);
});

test('RFQ Validation - Reject Invalid Email', () => {
  const invalidData = {
    companyName: 'Apex Industrial',
    country: 'Canada',
    contactName: 'Marcus Vance',
    workEmail: 'invalid-email-format',
    buyerType: BuyerTypeCode.OEM
  };

  const parsed = rfqStep1CompanySchema.safeParse(invalidData);
  assert.equal(parsed.success, false);
});

test('RFQ Validation - Reject Oversized File (>50MB)', () => {
  const oversizedFile = {
    originalFileName: 'Huge_Assembly.step',
    storageKey: 'rfqs/temp/huge.step',
    mimeType: 'application/step',
    fileSize: 60 * 1024 * 1024 // 60 MB > 50 MB limit
  };

  const parsed = rfqStep4FileSchema.safeParse(oversizedFile);
  assert.equal(parsed.success, false);
});

test('Contact Form Validation - Valid Input', () => {
  const validContact = {
    fullName: 'David Miller',
    email: 'david@solarsystems.de',
    companyName: 'Solar Systems GmbH',
    country: 'Germany',
    productInterest: 'Solar Aluminium Profiles',
    message: 'Interested in procuring 20 tons of 6005A-T6 solar mounting rails for Q4 delivery.'
  };

  const parsed = contactFormSchema.safeParse(validContact);
  assert.equal(parsed.success, true);
});
