'use client';

import React, { useState } from 'react';
import { Button, FormGroup, Input, Select, Textarea } from '@leloi/ui';
import { trackB2BEvent } from '@leloi/analytics';
import { Mail, MapPin, Phone, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { submitContactForm, ApiError, ApiUnreachableError } from '@/lib/api';
import { COMPANY, FACTORY_ADDRESS, CERTIFICATIONS } from '@/data/company';

const SALES_EMAIL = COMPANY.salesEmail;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    country: 'Canada',
    phone: '',
    productInterest: 'Custom Aluminium Extrusions',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      await submitContactForm({
        ...formData,
        landingPage: typeof window !== 'undefined' ? window.location.pathname : '/contact'
      });

      setIsSubmitted(true);
      trackB2BEvent({
        name: 'contact_submitted',
        params: { country: formData.country, interest: formData.productInterest }
      });
    } catch (err) {
      if (err instanceof ApiUnreachableError) {
        setErrorMsg(
          `We could not reach our server, so your message was not sent. Please try again shortly or email us directly at ${SALES_EMAIL}.`
        );
      } else if (err instanceof ApiError && err.status < 500) {
        setErrorMsg(`Your message could not be sent: ${err.message}`);
      } else {
        setErrorMsg(
          `Your message was not sent due to a server error. Please email us directly at ${SALES_EMAIL}.`
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-light-gray/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs uppercase font-heading font-semibold tracking-widest text-blue">
            GLOBAL EXPORT DESK
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-navy tracking-tight">
            Contact LELOI METAL
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Connect with our international sales and engineering team in Vietnam for commercial inquiries, factory capability audits, or distribution partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-navy">
                  Message Received
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for your inquiry. Our regional sales engineer will review your details and respond within 24 business hours.
                </p>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        companyName: '',
                        country: 'Canada',
                        phone: '',
                        productInterest: 'Custom Aluminium Extrusions',
                        message: ''
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold font-heading text-navy border-b border-slate-200 pb-3">
                  Send an Export Inquiry
                </h3>

                {errorMsg && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormGroup label="Your Name" required>
                    <Input
                      placeholder="e.g. John Doe"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </FormGroup>

                  <FormGroup label="Work Email" required>
                    <Input
                      type="email"
                      placeholder="e.g. j.doe@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </FormGroup>

                  <FormGroup label="Company Name" required>
                    <Input
                      placeholder="e.g. Global Tech Corp"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
                  </FormGroup>

                  <FormGroup label="Country" required>
                    <Select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    >
                      <option value="Canada">Canada</option>
                      <option value="Germany">Germany</option>
                      <option value="Japan">Japan</option>
                      <option value="South Korea">South Korea</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="United States">United States</option>
                      <option value="Other">Other Country...</option>
                    </Select>
                  </FormGroup>
                </div>

                <FormGroup label="Product Interest / Division" required>
                  <Select
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                  >
                    <option value="Custom Aluminium Extrusions">Custom Aluminium Extrusions</option>
                    <option value="Industrial Aluminium Profiles">Industrial Aluminium Profiles</option>
                    <option value="Solar Aluminium Profiles">Solar Aluminium Profiles</option>
                    <option value="Architectural Aluminium Systems">Architectural Aluminium Systems</option>
                    <option value="Heat Sink / Thermal Profiles">Heat Sink / Thermal Profiles</option>
                    <option value="OEM Aluminium Components">OEM Aluminium Components</option>
                    <option value="General Supply Partnership">General Supply Partnership</option>
                  </Select>
                </FormGroup>

                <FormGroup label="Project Details / Technical Requirements" required>
                  <Textarea
                    placeholder="Provide details about your required profile dimensions, alloy grade, annual tonnage, or questions..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </FormGroup>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full"
                  isLoading={isSubmitting}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Send Inquiry to Export Team
                </Button>
              </form>
            )}
          </div>

          {/* Right: Contact Info & Drawing Direct Banner */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-bold font-heading text-navy">
                Direct Contacts
              </h3>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-navy">Export Sales Desk</div>
                    <a href="mailto:sales@leloimetal.com" className="hover:text-blue">
                      sales@leloimetal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-navy">Manufacturing Facility</div>
                    <address className="text-xs text-slate-500 mt-0.5 not-italic leading-relaxed">
                      {COMPANY.legalName}
                      <br />
                      {FACTORY_ADDRESS.streetAddress}
                      <br />
                      {FACTORY_ADDRESS.ward}, {FACTORY_ADDRESS.region}
                      <br />
                      {FACTORY_ADDRESS.country}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-navy">Quality Certification</div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {CERTIFICATIONS.map((cert) => cert.standard).join(' · ')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-light-gray rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                <div className="font-bold text-navy">Business Hours (ICT / UTC+7):</div>
                <div>Monday – Friday: 08:00 – 17:30</div>
                <div className="text-slate-400">Global inquiries monitored 24/7</div>
              </div>
            </div>

            {/* Drawing CTA Box */}
            <div className="bg-navy text-white rounded-2xl p-8 shadow-sm space-y-4">
              <h4 className="text-lg font-bold font-heading text-white">
                Already Have a CAD Drawing?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                For fast DFM review and detailed quotation, skip the general contact form and submit directly via our confidential RFQ portal.
              </p>
              <Link href="/rfq">
                <Button variant="cta" size="md" className="w-full" leftIcon={<ArrowRight className="w-4 h-4" />}>
                  Go to Secure RFQ Builder
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
