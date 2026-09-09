# 47. MASTER PROMPT FOR CODEX / CLAUDE CODE

Copy the block below into a fresh coding session together with this blueprint and brand assets.

```text
You are the principal software architect and lead full-stack engineer for the LELOI METAL project.

Your task is to build a production-grade B2B aluminium export platform based strictly on the attached LELOI_METAL_MASTER_BLUEPRINT_V1 and the approved LELOI METAL brand identity.

PROJECT IDENTITY
- Brand: LELOI METAL
- Parent: LELOI EXIM GLOBAL
- Slogan: Aluminium for a Better World
- Primary domain: leloimetal.com
- Primary launch language: English
- Logo: approved TWO-L symbol only. Do not redesign or substitute it.

CORE GOAL
Build a high-performance international B2B website that turns SEO/GEO/AI discovery traffic into qualified aluminium RFQs, while providing an internal CRM/admin foundation for products, factory capabilities, market intelligence, leads, RFQs and later quotations/customer portal.

ARCHITECTURE
- TypeScript monorepo
- Next.js web
- NestJS API
- PostgreSQL
- Prisma
- Redis where required
- S3-compatible private object storage for RFQ drawings
- Cloudflare-compatible deployment
- SSR/SSG for public SEO content

NON-NEGOTIABLES
1. Do not publish fake factory capacity, certifications, customers, countries or technical claims.
2. Unverified capability fields must be hidden from public UI.
3. RFQ files are confidential: private storage, malware scan, signed URL, authorization and audit logs.
4. Implement RBAC server-side.
5. Public website must be SEO-first and accessible.
6. All market/tariff facts must support source URL, verified date and reviewer.
7. Do not generate mass thin market pages.
8. All public numeric claims must come from CMS/database, never magic constants in components.
9. Use design tokens for all brand colors/typography/spacing.
10. Keep business logic outside UI components.
11. Write migrations, seeds, tests and API documentation.
12. Do not delete or rewrite working modules unnecessarily; prefer incremental, reviewable commits.

FIRST TASK - AUDIT AND PLAN
Before writing production code:
A. Inspect the existing repository if any.
B. Produce /docs/IMPLEMENTATION_PLAN.md mapping every blueprint requirement to modules, DB tables, routes and sprints.
C. Produce /docs/DECISIONS.md for architecture choices and tradeoffs.
D. Produce /docs/GAPS.md listing missing business inputs such as factory specs, legal entity details, verified certifications and real photos.
E. Create a work breakdown with priorities P0/P1/P2.

THEN IMPLEMENT PHASE 1
1. Monorepo and environments.
2. Shared brand/design system.
3. Public website shell.
4. Homepage.
5. Products/capabilities/industries/CMS.
6. Secure RFQ form and uploads.
7. Leads/RFQ admin.
8. Authentication/RBAC.
9. SEO foundation.
10. Analytics events.
11. Aluminium Weight Calculator.
12. Automated tests and CI.

UI DIRECTION
Use the approved LELOI METAL visual language: deep navy, bright blue, aluminium gray, clean white surfaces, Montserrat-style modern headings, Inter-style body text, technical industrial photography, precise grid and strong RFQ CTAs.

The website must look like an international precision engineering/export company, not a generic Vietnamese corporate template.

DELIVER EACH MILESTONE WITH
- files changed;
- what was implemented;
- screenshots or browser QA where possible;
- test results;
- known gaps;
- next recommended step.

Do not silently guess business facts. If a value is required but not supplied, implement the field/configuration and mark it UNVERIFIED/TODO in admin instead of inventing it.
```

---

# 48. PHASE-SPECIFIC PROMPTS

## Prompt A - Brand/UI Foundation

```text
Implement the LELOI METAL design system from the approved brand identity.

Requirements:
- two-L logo assets in horizontal, stacked, icon, dark/light use;
- slogan: Aluminium for a Better World;
- CSS/design tokens for navy, blue, aluminium gray, light gray, white, charcoal and sustainability green;
- Montserrat-style heading stack and Inter body stack;
- Button, card, badge, navigation, form, table, upload and modal components;
- responsive spacing/grid;
- WCAG-conscious contrast/focus states;
- Storybook or equivalent component showcase if practical.

Do not redesign the logo. Do not add a third L. Do not turn the icon into a generic lettermark. Preserve the profile/extrusion-inspired geometry.
```

## Prompt B - Homepage

```text
Build the LELOI METAL homepage exactly to the information architecture in the Master Blueprint.

Primary conversion: Request a Quote / Upload Your Drawing.
Hero must communicate precision aluminium extrusion & fabrication from Vietnam.
Use real/CMS-provided statistics only; hide any unverified stat.
Include product solutions, capabilities, industries, engineering CTA, sustainability, insights and final RFQ CTA.
Implement SEO metadata, Organization schema, breadcrumbs where relevant and analytics events.
```

## Prompt C - RFQ & Drawing Upload

```text
Build the production-grade LELOI METAL RFQ Builder.

Implement multi-step company/product/process/file/commercial flow.
Accepted drawing formats: PDF, DWG, DXF, STEP/STP, IGES/IGS, ZIP.
Do not trust extensions: inspect MIME/content, enforce size limits and malware scan.
Store files in a private S3-compatible bucket.
Use signed URLs, short TTL, authorization checks and access audit logs.
Generate RFQ number and confirmation email.
Create CRM lead/company/contact records without unsafe duplicates.
Add admin RFQ detail and status workflow.
Add E2E test from public submission to admin visibility.
```

## Prompt D - SEO/GEO

```text
Implement the LELOI METAL technical SEO/GEO foundation.

SSR/SSG all indexable content.
Build sitemap, robots, canonical, OpenGraph, structured data, breadcrumbs, redirect manager and CMS SEO fields.
Implement content source metadata, reviewer, last-updated and freshness class.
Do not create thin programmatic country pages.
Add internal linking primitives across Product -> Capability -> Industry -> Insight -> Market -> RFQ.
Create a crawl/SEO QA script that checks titles, descriptions, canonicals, broken links and accidental noindex.
```

## Prompt E - Market Intelligence

```text
Build the Market Intelligence module.

Data models: Market, MarketStat, TariffRate, TradeMeasure, ContentSource.
Each factual row must retain source URL, effective/data date, verified_at and verified_by.
Add admin CRUD, version/history and stale-data alerts.
Public market pages may only render records marked verified.
Implement Market Opportunity Score with admin-editable weights.
Do not hard-code tariff claims into page text.
```

## Prompt F - Buyer CRM

```text
Build Buyer CRM for LELOI METAL.

Entities: Company, Contact, BuyerProfile, Lead, Activity, Task.
Buyer types: DIST/OEM/FAB/SOL/AUT/THERM/CON.
Implement qualification score with editable weights and human override reason.
Pipeline: TARGET -> RESEARCHED -> CONTACT READY -> CONTACTED -> REPLIED -> TECHNICAL DISCUSSION -> RFQ RECEIVED -> QUOTED -> SAMPLE/TRIAL -> WON/LOST -> REPEAT CUSTOMER.
Provide filters by market, buyer type, product interest, score and owner.
Add activity timeline and next-action task.
```

## Prompt G - Security Audit

```text
Perform a security audit of LELOI METAL before production launch.

Focus on:
- auth/session/MFA;
- RBAC and horizontal privilege escalation;
- RFQ confidential files;
- upload malware/content-type controls;
- XSS/CSRF/SQL injection;
- rate limiting/bot abuse;
- secret management;
- PII handling;
- audit logs;
- backups;
- dependency vulnerabilities;
- production headers/CSP/HSTS.

Create SECURITY_AUDIT.md with severity, evidence, fix, owner and status. Fix all Critical/High findings before release.
```

---

# APPENDIX A - HOMEPAGE COPY STARTER

### Hero

**Aluminium for a Better World**

Precision aluminium extrusion, fabrication and OEM manufacturing from Vietnam for global industries.

**Request a Quote** | **Upload Your Drawing**

### Supporting statement

From profile design to finished components, LELOI METAL connects engineering precision, flexible manufacturing and global export support in one supply partnership.

### Why LELOI METAL

- Precision Engineering
- Flexible Manufacturing
- Global Partnership
- Sustainability Ready

---

# APPENDIX B - PRODUCT/CAPABILITY CONTENT RULE

Public claims may be one of:

- `VERIFIED`: published normally.
- `REVIEW_REQUIRED`: visible only in admin.
- `UNVERIFIED`: never public.
- `EXPIRED`: removed from public until reverified.

This status model should be reusable for capability, certification, tariff and market facts.

---

# APPENDIX C - SEO TITLE PATTERNS

Examples only; final titles should be editorially reviewed.

```text
Custom Aluminium Extrusion Manufacturer in Vietnam | LELOI METAL
Industrial Aluminium Profiles & OEM Fabrication | LELOI METAL
Solar Aluminium Profiles & Mounting Solutions | LELOI METAL
CNC Machining for Aluminium Extrusions | LELOI METAL
Aluminium Extrusion Supplier for Canada | LELOI METAL
6061 vs 6063 Aluminium: Engineering Comparison | LELOI METAL
```

---

# APPENDIX D - FIRST DATA SEED SET

Seed only taxonomy/configuration, not fake commercial facts:

- 7 buyer types;
- 6 product categories;
- capability taxonomy;
- industry taxonomy;
- initial target market country records with `status=RESEARCH_REQUIRED`;
- CRM pipeline stages;
- content types;
- roles/permissions;
- brand tokens;
- placeholder capability fields with `UNVERIFIED`.

---

# APPENDIX E - HANDOFF CHECKLIST

The development team receives:

- [x] Master Blueprint
- [x] Approved brand-board image
- [ ] Final production vector logo (redrawn cleanly from approved two-L concept)
- [ ] Factory capability audit sheet
- [ ] Legal company information
- [ ] Approved company/factory photos
- [ ] Real certifications
- [ ] Domain/DNS access
- [ ] Email domain access
- [ ] Analytics/Search Console access
- [ ] Hosting/cloud credentials
- [ ] Initial market-source dataset

**Priority before public launch:** complete all unchecked items relevant to published claims.

---

## FINAL PROJECT PRINCIPLE

LELOI METAL should not be shipped as “a beautiful website”. It should be shipped as a measurable B2B export system:

**Technical authority + market intelligence + discoverability + secure RFQ + CRM + disciplined human sales.**

That combination is the product moat.
