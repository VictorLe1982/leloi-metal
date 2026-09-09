import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid work email is required'),
  companyName: z.string().min(2, 'Company name is required'),
  country: z.string().min(2, 'Country is required'),
  phone: z.string().optional(),
  productInterest: z.string().min(2, 'Product or inquiry interest is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  landingPage: z.string().optional()
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const authLoginSchema = z.object({
  email: z.string().email('Valid email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters')
});

export type AuthLoginInput = z.infer<typeof authLoginSchema>;
