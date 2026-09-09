import { z } from 'zod';
import { BuyerTypeCode } from '@leloi/types';

export const rfqStep1CompanySchema = z.object({
  companyName: z.string().min(2, 'Company name is required (min 2 characters)'),
  country: z.string().min(2, 'Country is required'),
  city: z.string().optional(),
  website: z.string().url('Invalid website URL').or(z.literal('')).optional(),
  contactName: z.string().min(2, 'Contact name is required'),
  workEmail: z.string().email('Please enter a valid work email address'),
  phone: z.string().min(6, 'Please enter a valid phone or WhatsApp number').optional(),
  buyerType: z.nativeEnum(BuyerTypeCode, {
    errorMap: () => ({ message: 'Please select a valid buyer type' })
  })
});

export const rfqStep2ProductSchema = z.object({
  productCategory: z.string().min(2, 'Product category is required'),
  application: z.string().min(2, 'Application/Industry is required'),
  alloy: z.string().min(2, 'Alloy selection is required (e.g. 6063, 6061, 6005A)'),
  temper: z.string().min(2, 'Temper is required (e.g. T5, T6, T66)'),
  lengthMm: z.number().positive('Length must be positive').optional(),
  annualVolumeKg: z.number().positive().optional(),
  orderQuantityKg: z.number().positive('Initial order quantity must be greater than 0 kg'),
  profileDescription: z.string().optional()
});

export const rfqStep3ProcessSchema = z.object({
  surfaceFinish: z.string().min(2, 'Surface finish is required'),
  processRequirements: z.array(z.string()).min(1, 'Please select at least one process requirement'),
  toleranceStandard: z.string().optional(),
  packingRequirements: z.string().optional()
});

export const rfqStep4FileSchema = z.object({
  originalFileName: z.string(),
  storageKey: z.string(),
  mimeType: z.string(),
  fileSize: z.number().max(52428800, 'File size must be under 50 MB'),
  sha256: z.string().optional()
});

export const rfqStep5CommercialSchema = z.object({
  destinationCountry: z.string().min(2, 'Destination country is required'),
  destinationPortOrCity: z.string().min(2, 'Destination port or city is required'),
  incoterm: z.string().min(2, 'Incoterm is required (e.g. FOB, CIF, CFR)'),
  targetDeliveryDate: z.string().optional(),
  targetPricePerKg: z.number().positive().optional(),
  currency: z.string().default('USD'),
  specialComplianceNotes: z.string().optional()
});

// Full RFQ submission schema
export const fullRfqSubmissionSchema = z.object({
  company: rfqStep1CompanySchema,
  product: rfqStep2ProductSchema,
  process: rfqStep3ProcessSchema,
  files: z.array(rfqStep4FileSchema).default([]),
  commercial: rfqStep5CommercialSchema,
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  landingPage: z.string().optional()
});

export type FullRfqSubmissionInput = z.infer<typeof fullRfqSubmissionSchema>;
