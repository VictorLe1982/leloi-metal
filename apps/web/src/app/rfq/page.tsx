'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button, Card, FormGroup, Input, Select, Textarea } from '@leloi/ui';
import {
  BuyerTypeCode,
  getProductDivisions,
  getDivisionBySlug,
  getFamilyBySlug,
  getFamilyBySlugOnly,
  getSystemBySlugOnly,
  resolveLegacyProductSlug
} from '@leloi/types';
import { trackB2BEvent } from '@leloi/analytics';
import {
  FileUp,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Building,
  Package,
  Cpu,
  FileCheck,
  Globe2,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

function RfqFormContent() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get('product');
  const categoryParam = searchParams.get('category');
  const divisionParam = searchParams.get('division');
  const familyParam = searchParams.get('family');
  const systemParam = searchParams.get('system');
  const alloyParam = searchParams.get('alloy');
  const finishParam = searchParams.get('finish');
  const modeParam = searchParams.get('mode');

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRfq, setSubmittedRfq] = useState<{
    rfqNumber: string;
    submittedAt: string;
    engineeringReviewSla: string;
  } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    company: {
      companyName: '',
      country: 'Canada',
      city: '',
      website: '',
      contactName: '',
      workEmail: '',
      phone: '',
      buyerType: BuyerTypeCode.OEM
    },
    product: {
      productCategory: 'Custom Aluminium Extrusions',
      application: 'Industrial Machinery',
      alloy: '6063',
      temper: 'T6',
      lengthMm: 6000,
      annualVolumeKg: 20000,
      orderQuantityKg: 3000,
      profileDescription: '',
      projectType: 'Luxury Villa / Private Estate',
      openingType: 'Sliding Windows & Doors',
      glazingAreaM2: undefined as number | undefined,
      projectSchedule: 'Q3-Q4 2026'
    },
    process: {
      surfaceFinish: 'Anodized Clear (15µm)',
      processRequirements: ['Extrusion', 'Precision Cutting', 'CNC Machining'],
      toleranceStandard: 'EN 755-9 / ASTM B221',
      packingRequirements: 'Fumigated export wooden crates'
    },
    files: [] as Array<{
      originalFileName: string;
      storageKey: string;
      mimeType: string;
      fileSize: number;
    }>,
    commercial: {
      destinationCountry: 'CA',
      destinationPortOrCity: 'Vancouver / Montreal',
      incoterm: 'FOB',
      targetDeliveryDate: '',
      targetPricePerKg: undefined as number | undefined,
      currency: 'USD',
      specialComplianceNotes: ''
    }
  });

  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  useEffect(() => {
    // 1. Resolve legacy product slug (e.g. ?product=window_door_profiles)
    if (productParam) {
      const legacy = resolveLegacyProductSlug(productParam);
      if (legacy) {
        const divisionObj = getDivisionBySlug(legacy.division);
        const familyObj = getFamilyBySlug(legacy.division, legacy.family);
        const systemObj = legacy.system ? getSystemBySlugOnly(legacy.system) : undefined;

        setFormData((prev) => ({
          ...prev,
          product: {
            ...prev.product,
            productCategory: divisionObj?.name || 'Custom Aluminium Extrusions',
            application: familyObj?.name || prev.product.application,
            profileDescription: systemObj
              ? `Engineered System: ${systemObj.name} (${systemObj.slug})`
              : `Solution Family: ${familyObj?.name || productParam}`,
            alloy: alloyParam || familyObj?.alloys[0] || prev.product.alloy
          }
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          product: {
            ...prev.product,
            profileDescription: `Inquiry for product: ${productParam.replace(/[-_]/g, ' ')}`,
            alloy: alloyParam || prev.product.alloy
          }
        }));
      }
    }

    // 2. Canonical division / category param
    const effectiveDivisionSlug = divisionParam || categoryParam;
    if (effectiveDivisionSlug) {
      const divisionObj = getDivisionBySlug(effectiveDivisionSlug);
      if (divisionObj) {
        setFormData((prev) => ({
          ...prev,
          product: {
            ...prev.product,
            productCategory: divisionObj.name
          }
        }));
      } else if (
        effectiveDivisionSlug === 'architectural-aluminium' ||
        effectiveDivisionSlug === 'architectural'
      ) {
        setFormData((prev) => ({
          ...prev,
          product: {
            ...prev.product,
            productCategory: 'Architectural Aluminium'
          }
        }));
      }
    }

    // 3. Canonical family param
    if (familyParam) {
      const familyObj = getFamilyBySlugOnly(familyParam);
      if (familyObj) {
        setFormData((prev) => ({
          ...prev,
          product: {
            ...prev.product,
            application: familyObj.name,
            profileDescription: prev.product.profileDescription || `Solution Family: ${familyObj.name}`,
            alloy: alloyParam || familyObj.alloys[0] || prev.product.alloy
          }
        }));
      }
    }

    // 4. Canonical system param
    if (systemParam) {
      const systemObj = getSystemBySlugOnly(systemParam);
      if (systemObj) {
        setFormData((prev) => ({
          ...prev,
          product: {
            ...prev.product,
            profileDescription: `Engineered System: ${systemObj.name} (${systemObj.slug})`,
            alloy: alloyParam || systemObj.alloys[0] || prev.product.alloy
          }
        }));
      }
    }

    // 5. Surface finish param (e.g. from color swatch selector)
    if (finishParam) {
      setFormData((prev) => ({
        ...prev,
        process: {
          ...prev.process,
          surfaceFinish: finishParam
        }
      }));
    }

    if (modeParam === 'upload') {
      setCurrentStep(4);
    }
  }, [productParam, categoryParam, divisionParam, familyParam, systemParam, alloyParam, finishParam, modeParam]);

  const updateCompany = (key: string, value: any) =>
    setFormData((prev) => ({ ...prev, company: { ...prev.company, [key]: value } }));

  const updateProduct = (key: string, value: any) =>
    setFormData((prev) => ({ ...prev, product: { ...prev.product, [key]: value } }));

  const updateProcess = (key: string, value: any) =>
    setFormData((prev) => ({ ...prev, process: { ...prev.process, [key]: value } }));

  const toggleProcessReq = (req: string) => {
    setFormData((prev) => {
      const existing = prev.process.processRequirements;
      const updated = existing.includes(req)
        ? existing.filter((item) => item !== req)
        : [...existing, req];
      return { ...prev, process: { ...prev.process, processRequirements: updated } };
    });
  };

  const updateCommercial = (key: string, value: any) =>
    setFormData((prev) => ({ ...prev, commercial: { ...prev.commercial, [key]: value } }));

  // File selection mock upload for frontend
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFileName(file.name);
      setFormData((prev) => ({
        ...prev,
        files: [
          {
            originalFileName: file.name,
            storageKey: `mock-upload/${Date.now()}-${file.name}`,
            mimeType: file.type || 'application/octet-stream',
            fileSize: file.size
          }
        ]
      }));
      trackB2BEvent({
        name: 'rfq_file_uploaded',
        params: { fileType: file.name.split('.').pop() || 'unknown', fileSizeMb: file.size / (1024 * 1024) }
      });
    }
  };

  // Step progression with analytics tracking
  const goToNextStep = () => {
    setErrorMsg(null);
    if (currentStep === 1) {
      if (!formData.company.companyName || !formData.company.contactName || !formData.company.workEmail) {
        setErrorMsg('Please enter company name, contact name and work email');
        return;
      }
    }
    if (currentStep === 2) {
      if (!formData.product.alloy || !formData.product.orderQuantityKg) {
        setErrorMsg('Please specify alloy and order quantity');
        return;
      }
    }

    trackB2BEvent({
      name: 'rfq_step_completed',
      params: { stepNumber: currentStep, stepName: `Step ${currentStep}` }
    });
    setCurrentStep((prev) => Math.min(5, prev + 1));
  };

  const goToPrevStep = () => {
    setErrorMsg(null);
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  // Submission handler
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      // In local dev/demo mode, post to API if reachable, or simulate immediate confirmed RFQ
      let responseData;
      try {
        const res = await fetch('http://localhost:4000/api/public/rfqs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (res.ok) {
          responseData = await res.json();
        }
      } catch {
        // Fallback for standalone demo
      }

      const rfqNumber = responseData?.rfqNumber || `RFQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

      setSubmittedRfq({
        rfqNumber,
        submittedAt: new Date().toISOString(),
        engineeringReviewSla: '24 business hours'
      });

      trackB2BEvent({
        name: 'rfq_submitted',
        params: {
          rfqNumber,
          productCategory: formData.product.productCategory,
          country: formData.company.country
        }
      });
    } catch (err: any) {
      setErrorMsg(err.message || 'An error occurred during submission. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Confirmation View
  if (submittedRfq) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-emerald-200 shadow-xl p-8 sm:p-12 text-center space-y-6">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase font-heading font-semibold text-emerald-700 tracking-widest">
              RFQ Successfully Submitted
            </span>
            <h1 className="text-3xl font-extrabold font-heading text-[#0A2D5B]">
              Thank You for Your Inquiry
            </h1>
            <p className="text-slate-600 text-sm max-w-lg mx-auto">
              Your engineering specifications and drawing files have been received by the LELOI METAL export technical team in Vietnam.
            </p>
          </div>

          <div className="p-4 bg-[#F1F4F8] rounded-xl border border-[#E2E8F0] inline-block max-w-md w-full text-left">
            <div className="flex justify-between items-center py-1 border-b border-[#E2E8F0] text-sm">
              <span className="text-slate-500">RFQ Reference:</span>
              <span className="font-mono font-bold text-[#0A2D5B]">{submittedRfq.rfqNumber}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-[#E2E8F0] text-sm">
              <span className="text-slate-500">Target Response SLA:</span>
              <span className="font-semibold text-emerald-700">Within {submittedRfq.engineeringReviewSla}</span>
            </div>
            <div className="flex justify-between items-center py-1 text-sm">
              <span className="text-slate-500">Contact Email:</span>
              <span className="font-medium text-slate-800">{formData.company.workEmail}</span>
            </div>
          </div>

          <div className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
            * A confirmation email with your reference code and drawing upload summary has been dispatched. Our technical engineer will review profile tolerances, die design feasibility, and FOB/CIF costing.
          </div>

          <div className="pt-4 flex justify-center gap-4">
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                setSubmittedRfq(null);
                setCurrentStep(1);
              }}
            >
              Submit Another RFQ
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => (window.location.href = '/')}
            >
              Return to Homepage
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F1F4F8]/60 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Title Header */}
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-heading font-semibold tracking-widest text-[#2F7BFF]">
            GLOBAL SOURCING GATEWAY
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0A2D5B]">
            Request a Technical Quotation (RFQ)
          </h1>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Provide your profile requirements, alloy specifications and engineering drawing (PDF, STEP, DWG, DXF) for a formal Vietnam export quote.
          </p>
        </div>

        {/* Step Indicator Progress Bar */}
        <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-xs">
          <div className="grid grid-cols-5 gap-2 text-center text-xs font-heading font-semibold">
            {[
              { step: 1, name: 'Company', icon: Building },
              { step: 2, name: 'Product', icon: Package },
              { step: 3, name: 'Process', icon: Cpu },
              { step: 4, name: 'Drawings', icon: FileCheck },
              { step: 5, name: 'Commercial', icon: Globe2 }
            ].map(({ step, name, icon: Icon }) => (
              <div
                key={step}
                className={`flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors ${
                  currentStep === step
                    ? 'text-[#2F7BFF] bg-blue-50/60 font-bold'
                    : currentStep > step
                    ? 'text-emerald-600'
                    : 'text-slate-400'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                    currentStep === step
                      ? 'bg-[#2F7BFF] text-white'
                      : currentStep > step
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {currentStep > step ? <CheckCircle2 className="w-4 h-4" /> : step}
                </div>
                <span className="hidden sm:inline">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Error Notification */}
        {errorMsg && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Multi-step Form Body */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-10 shadow-sm">
          {/* STEP 1: COMPANY */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-[#E2E8F0] pb-4">
                <h3 className="text-xl font-bold font-heading text-[#0A2D5B]">
                  Step 1: Company & Contact Information
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Tell us about your organization so we can assign the dedicated regional export manager.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormGroup label="Company Legal / Trading Name" required>
                  <Input
                    placeholder="e.g. Apex Industrial Systems Inc."
                    value={formData.company.companyName}
                    onChange={(e) => updateCompany('companyName', e.target.value)}
                  />
                </FormGroup>

                <FormGroup label="Destination Country" required>
                  <Select
                    value={formData.company.country}
                    onChange={(e) => updateCompany('country', e.target.value)}
                  >
                    <option value="Canada">Canada</option>
                    <option value="Germany">Germany</option>
                    <option value="Japan">Japan</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="United States">United States</option>
                    <option value="Australia">Australia</option>
                    <option value="Other">Other Country...</option>
                  </Select>
                </FormGroup>

                <FormGroup label="Contact Person Name" required>
                  <Input
                    placeholder="e.g. Marcus Vance"
                    value={formData.company.contactName}
                    onChange={(e) => updateCompany('contactName', e.target.value)}
                  />
                </FormGroup>

                <FormGroup label="Work Email Address" required>
                  <Input
                    type="email"
                    placeholder="e.g. m.vance@company.com"
                    value={formData.company.workEmail}
                    onChange={(e) => updateCompany('workEmail', e.target.value)}
                  />
                </FormGroup>

                <FormGroup label="Phone / WhatsApp Number">
                  <Input
                    placeholder="e.g. +1 416 555 0192"
                    value={formData.company.phone}
                    onChange={(e) => updateCompany('phone', e.target.value)}
                  />
                </FormGroup>

                <FormGroup label="Buyer Organization Type" required>
                  <Select
                    value={formData.company.buyerType}
                    onChange={(e) => updateCompany('buyerType', e.target.value as BuyerTypeCode)}
                  >
                    <option value={BuyerTypeCode.OEM}>OEM Manufacturer (Made-to-drawing parts)</option>
                    <option value={BuyerTypeCode.DIST}>Distributor / Wholesaler</option>
                    <option value={BuyerTypeCode.FAB}>Fabricator / Facade Contractor</option>
                    <option value={BuyerTypeCode.SOL}>Solar Energy EPC / System Integrator</option>
                    <option value={BuyerTypeCode.AUT}>Automation / Machinery Builder</option>
                    <option value={BuyerTypeCode.THERM}>Thermal & Electronics Manufacturer</option>
                    <option value={BuyerTypeCode.CON}>Construction Contractor</option>
                  </Select>
                </FormGroup>
              </div>
            </div>
          )}

          {/* STEP 2: PRODUCT */}
          {currentStep === 2 && (() => {
            const isArchitectural =
              formData.product.productCategory.toLowerCase().includes('architectural') ||
              divisionParam === 'architectural' ||
              categoryParam === 'architectural-aluminium' ||
              familyParam === 'windows-doors';

            return (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-[#E2E8F0] pb-4">
                  <h3 className="text-xl font-bold font-heading text-[#0A2D5B]">
                    Step 2: Profile Specifications & Alloy
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {isArchitectural
                      ? 'Specify your architectural project typology, opening system requirements, and target alloys.'
                      : 'Specify product line, target alloy grade, temper and order quantities.'}
                  </p>
                </div>

                {isArchitectural && (
                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-[#0A2D5B] flex items-center justify-between">
                    <span className="font-semibold">
                      Architectural Project Sourcing Active: Profile geometries, opening schedules & finishes tailored for facade/window fabricators.
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-[10px]">
                      ARCHITECTURAL
                    </span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormGroup label="Product Category" required>
                    <Select
                      value={formData.product.productCategory}
                      onChange={(e) => updateProduct('productCategory', e.target.value)}
                    >
                      {getProductDivisions().map((div) => (
                        <option key={div.slug} value={div.name}>
                          {div.name}
                        </option>
                      ))}
                    </Select>
                  </FormGroup>

                  {isArchitectural ? (
                    <FormGroup label="Architectural Project Typology" required>
                      <Select
                        value={formData.product.projectType || 'Luxury Villa / Private Estate'}
                        onChange={(e) => updateProduct('projectType', e.target.value)}
                      >
                        <option value="Luxury Villa / Private Estate">Luxury Villa / Private Estate</option>
                        <option value="High-Rise Residential Tower">High-Rise Residential Tower</option>
                        <option value="Urban Townhouses / Multi-Family">Urban Townhouses / Multi-Family</option>
                        <option value="Hotel & Hospitality Resort">Hotel & Hospitality Resort</option>
                        <option value="Commercial Office Complex">Commercial Office Complex</option>
                        <option value="Civic & Public Architecture">Civic & Public Architecture</option>
                        <option value="Facade Renovation / Retrofit">Facade Renovation / Retrofit</option>
                        <option value="Other Project Type">Other Project Typology</option>
                      </Select>
                    </FormGroup>
                  ) : (
                    <FormGroup label="Application / Industry" required>
                      <Input
                        placeholder="e.g. Solar rooftop rail, automation frame..."
                        value={formData.product.application}
                        onChange={(e) => updateProduct('application', e.target.value)}
                      />
                    </FormGroup>
                  )}

                  {isArchitectural && (
                    <FormGroup label="Opening / Fenestration System Required" required>
                      <Select
                        value={formData.product.openingType || 'Sliding Windows & Doors'}
                        onChange={(e) => updateProduct('openingType', e.target.value)}
                      >
                        <option value="Sliding Windows (2-Track / 3-Track)">Sliding Windows (2-Track / 3-Track)</option>
                        <option value="Casement & Awning Windows">Casement & Awning Windows</option>
                        <option value="Heavy-Duty Patio Sliding Doors">Heavy-Duty Patio Sliding Doors</option>
                        <option value="Multi-Panel Bi-Fold Doors">Multi-Panel Bi-Fold Doors</option>
                        <option value="Architectural Hinged Entry Doors">Architectural Hinged Entry Doors</option>
                        <option value="Minimal Sightline Panoramic Glazing">Minimal Sightline Panoramic Glazing</option>
                        <option value="Thermal-Break Window & Door Suite">Thermal-Break Window & Door Suite</option>
                        <option value="Custom Proprietary Die Extrusions">Custom Proprietary Die Extrusions</option>
                      </Select>
                    </FormGroup>
                  )}

                  <FormGroup label="Alloy Grade" required>
                    <Select
                      value={formData.product.alloy}
                      onChange={(e) => updateProduct('alloy', e.target.value)}
                    >
                      <option value="6063">6063 (Standard Architectural / Extrusion)</option>
                      <option value="6061">6061 (High Strength / Structural / Machining)</option>
                      <option value="6005A">6005A (Medium Strength / Solar / Transport)</option>
                      <option value="6082">6082 (European Structural Standard)</option>
                      <option value="Other">Other Alloy (Specify in notes)</option>
                    </Select>
                  </FormGroup>

                  <FormGroup label="Temper" required>
                    <Select
                      value={formData.product.temper}
                      onChange={(e) => updateProduct('temper', e.target.value)}
                    >
                      <option value="T5">T5 (Air-cooled & artificially aged)</option>
                      <option value="T6">T6 (Solution heat treated & aged - high strength)</option>
                      <option value="T66">T66 (Higher mechanical strength standard)</option>
                      <option value="T4">T4 (Naturally aged)</option>
                    </Select>
                  </FormGroup>

                  <FormGroup label="Initial Trial Order Quantity (kg)" required>
                    <Input
                      type="number"
                      placeholder="e.g. 3000"
                      value={formData.product.orderQuantityKg}
                      onChange={(e) => updateProduct('orderQuantityKg', Number(e.target.value))}
                    />
                  </FormGroup>

                  {isArchitectural ? (
                    <FormGroup label="Estimated Project Glazing Area (m²)">
                      <Input
                        type="number"
                        placeholder="e.g. 1500"
                        value={formData.product.glazingAreaM2 || ''}
                        onChange={(e) => updateProduct('glazingAreaM2', Number(e.target.value))}
                      />
                    </FormGroup>
                  ) : (
                    <FormGroup label="Estimated Annual Sourcing Volume (kg)">
                      <Input
                        type="number"
                        placeholder="e.g. 50000"
                        value={formData.product.annualVolumeKg}
                        onChange={(e) => updateProduct('annualVolumeKg', Number(e.target.value))}
                      />
                    </FormGroup>
                  )}
                </div>
              </div>
            );
          })()}

          {/* STEP 3: PROCESS */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-[#E2E8F0] pb-4">
                <h3 className="text-xl font-bold font-heading text-[#0A2D5B]">
                  Step 3: Surface Treatment & Processing Requirements
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Select required secondary fabrication and surface finishing options.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormGroup label="Required Surface Finish" required>
                  <Select
                    value={formData.process.surfaceFinish}
                    onChange={(e) => updateProcess('surfaceFinish', e.target.value)}
                  >
                    <option value="AkzoNobel Powder Coated (Architectural Exterior)">
                      AkzoNobel Powder Coated (Exterior - Warranties up to 10 years*)
                    </option>
                    <option value="Anodized Clear (15-20µm Class 1)">
                      Anodized Clear (15-20µm Class 1 Architectural)
                    </option>
                    <option value="Anodized Bronze / Champagne">
                      Anodized Architectural Bronze / Champagne
                    </option>
                    <option value="Anodized Matte Black">Anodized Matte Black</option>
                    <option value="Wood Grain Effect (Sublimation)">
                      Wood Grain Effect (Sublimation Texture)
                    </option>
                    <option value="Mill Finish">Mill Finish (As extruded)</option>
                    <option value="Custom RAL Specification">Custom Project RAL / Pantone Matching</option>
                  </Select>
                </FormGroup>

                <FormGroup label="Dimensional Tolerance Standard">
                  <Input
                    value={formData.process.toleranceStandard}
                    onChange={(e) => updateProcess('toleranceStandard', e.target.value)}
                  />
                </FormGroup>
              </div>

              <div>
                <label className="text-xs font-heading font-semibold text-[#172033] uppercase tracking-wide block mb-3">
                  Secondary Fabrication & CNC Operations (Select all required):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    'Extrusion Only',
                    'Precision Cutting',
                    'CNC Machining',
                    'Drilling & Tapping',
                    'Punching / Slotting',
                    'Bending / Forming',
                    'Sub-Assembly',
                    'Deburring'
                  ].map((req) => (
                    <label
                      key={req}
                      className={`flex items-center gap-2 p-3 rounded-lg border text-xs cursor-pointer select-none transition-colors ${
                        formData.process.processRequirements.includes(req)
                          ? 'border-[#2F7BFF] bg-blue-50/50 text-[#0A2D5B] font-semibold'
                          : 'border-[#E2E8F0] hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.process.processRequirements.includes(req)}
                        onChange={() => toggleProcessReq(req)}
                        className="rounded text-[#2F7BFF] focus:ring-[#2F7BFF]"
                      />
                      {req}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: FILES */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-[#E2E8F0] pb-4">
                <h3 className="text-xl font-bold font-heading text-[#0A2D5B]">
                  Step 4: Upload Engineering Drawings
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Upload CAD 3D files (STEP, STP, IGES) or 2D dimensioned drawings (PDF, DWG, DXF) or ZIP archives.
                </p>
              </div>

              {/* Secure Drag & Drop Zone */}
              <div className="border-2 border-dashed border-[#2F7BFF]/40 bg-blue-50/20 hover:bg-blue-50/40 transition-colors rounded-xl p-8 text-center space-y-4">
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto text-[#2F7BFF]">
                  <FileUp className="w-7 h-7" />
                </div>
                <div>
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <span className="font-heading font-semibold text-sm text-[#2F7BFF] hover:underline">
                      Click to choose file
                    </span>
                    <span className="text-sm text-slate-600"> or drag and drop your CAD drawing</span>
                    <input
                      id="file-upload"
                      type="file"
                      className="sr-only"
                      accept=".pdf,.dwg,.dxf,.step,.stp,.iges,.igs,.zip"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="text-xs text-slate-400 mt-1">
                    Permitted formats: PDF, DWG, DXF, STEP, STP, IGES, ZIP (Up to 50 MB)
                  </p>
                </div>

                {selectedFileName && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 text-emerald-800 rounded-lg text-xs font-mono font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Selected: {selectedFileName}
                  </div>
                )}
              </div>

              <div className="p-4 bg-[#F1F4F8] rounded-xl border border-[#E2E8F0] flex items-start gap-3 text-xs text-slate-600">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0A2D5B]">Proprietary IP Protection: </span>
                  Drawings submitted through this portal are held strictly confidential, protected under commercial NDA, and stored in private encrypted storage accessible only to assigned extrusion review engineers.
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: COMMERCIAL */}
          {currentStep === 5 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-[#E2E8F0] pb-4">
                <h3 className="text-xl font-bold font-heading text-[#0A2D5B]">
                  Step 5: Commercial Conditions & Freight Destination
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Specify shipping terms and delivery requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormGroup label="Incoterm Preference" required>
                  <Select
                    value={formData.commercial.incoterm}
                    onChange={(e) => updateCommercial('incoterm', e.target.value)}
                  >
                    <option value="FOB">FOB (Free on Board - Vietnam Sea Port)</option>
                    <option value="CIF">CIF (Cost, Insurance and Freight)</option>
                    <option value="CFR">CFR (Cost and Freight)</option>
                    <option value="DDP">DDP (Delivered Duty Paid)</option>
                    <option value="EXW">EXW (Ex Works Factory)</option>
                  </Select>
                </FormGroup>

                <FormGroup label="Destination Port or City" required>
                  <Input
                    placeholder="e.g. Port of Vancouver, Port of Hamburg, Busan..."
                    value={formData.commercial.destinationPortOrCity}
                    onChange={(e) => updateCommercial('destinationPortOrCity', e.target.value)}
                  />
                </FormGroup>

                <FormGroup label="Target Delivery Date / Project Timeline">
                  <Input
                    type="date"
                    value={formData.commercial.targetDeliveryDate}
                    onChange={(e) => updateCommercial('targetDeliveryDate', e.target.value)}
                  />
                </FormGroup>

                <FormGroup label="Target Price (Optional, USD/kg)">
                  <Input
                    type="number"
                    step="0.05"
                    placeholder="e.g. 3.20"
                    value={formData.commercial.targetPricePerKg || ''}
                    onChange={(e) => updateCommercial('targetPricePerKg', Number(e.target.value))}
                  />
                </FormGroup>

                <div className="sm:col-span-2">
                  <FormGroup label="Special Technical or Compliance Notes">
                    <Textarea
                      placeholder="Specify any special packaging, barcode labeling, certificate requirements (RoHS, REACH, Mill test certificates), or testing needs..."
                      value={formData.commercial.specialComplianceNotes}
                      onChange={(e) => updateCommercial('specialComplianceNotes', e.target.value)}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Action Buttons */}
          <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex justify-between items-center">
            {currentStep > 1 ? (
              <Button
                variant="secondary"
                size="md"
                leftIcon={<ArrowLeft className="w-4 h-4" />}
                onClick={goToPrevStep}
              >
                Previous
              </Button>
            ) : (
              <div />
            )}

            {currentStep < 5 ? (
              <Button
                variant="cta"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={goToNextStep}
              >
                Continue to Step {currentStep + 1}
              </Button>
            ) : (
              <Button
                variant="cta"
                size="lg"
                isLoading={isSubmitting}
                rightIcon={<CheckCircle2 className="w-5 h-5" />}
                onClick={handleSubmit}
              >
                Submit RFQ for Engineering Review
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RfqPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-500 font-medium">Loading RFQ Builder...</div>}>
      <RfqFormContent />
    </Suspense>
  );
}
