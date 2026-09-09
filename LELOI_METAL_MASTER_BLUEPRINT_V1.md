# LELOI METAL - MASTER PROJECT BLUEPRINT V1.0

**Project:** LELOI METAL B2B Aluminium Export Platform  
**Parent brand:** LELOI EXIM GLOBAL  
**Recommended domain:** `leloimetal.com` (register/confirm ownership before launch)  
**Corporate hub:** `leloiglobal.com`  
**Approved slogan:** **Aluminium for a Better World**  
**Primary market:** Global B2B  
**Primary language at launch:** English  
**Document purpose:** Single source of truth for Product, UI/UX, Engineering, SEO/GEO, Data, CRM, AI and Go-to-Market implementation.  
**Status:** READY FOR DEVELOPMENT HANDOFF  
**Version:** 1.0 - September 2026

---

## 0. DOCUMENT CONTROL & NON-NEGOTIABLE DECISIONS

This document consolidates the approved strategy, the previously defined 48-point website/business framework, the export-market logic and the approved LELOI METAL brand direction.

### 0.1 Decisions already approved

1. **LELOI EXIM GLOBAL** remains the corporate/master business identity.
2. **LELOI METAL** is a focused B2B vertical/division for aluminium and future metal-related export activities.
3. Use a dedicated specialist domain: **`leloimetal.com`** while retaining cross-linking and corporate authority from `leloiglobal.com`.
4. `leloiglobal.com` should contain a corporate vertical page such as `/industries/aluminium` linking to LELOI METAL.
5. LELOI METAL positioning is not “cheap aluminium supplier”. Position as a **Vietnam precision aluminium extrusion, fabrication and OEM partner**.
6. Approved slogan: **Aluminium for a Better World**.
7. Approved logo direction: **two stylised L forms**, inspired partly by an aluminium extrusion/profile cross-section; not three L forms.
8. Primary visual identity: technical, clean, modern, international, precise, trustworthy and sustainability-aware.
9. Core website conversion goal: **qualified RFQ**, especially RFQs with drawings/files.
10. Website must be built as a **B2B export sales platform**, not a static company brochure.
11. Site must support **SEO + GEO/AEO + structured data + market intelligence + tools + CRM** from architecture level.
12. Avoid mass-generated thin country pages or low-value AI content.
13. Any tariff/trade-defence data shown publicly must be dated, sourced, reviewable and updateable from database/admin.
14. Any technical capability claim must be backed by actual factory capability before publishing.
15. Build the platform so new business lines/markets can be added without restructuring the entire codebase.

### 0.2 Out of scope for MVP unless explicitly activated

- Full ERP/MES replacement.
- Automatic binding quote/contract issuance without human approval.
- Autonomous mass email spam.
- Legal/tax advice presented as definitive without source/date disclaimer.
- CAD-native engineering validation comparable to a human extrusion engineer.
- Public display of unverified factory capacity/certificates.

---

# 1. PRODUCT VISION

## 1.1 Core vision

Build LELOI METAL into a **global aluminium sourcing and manufacturing gateway from Vietnam**, combining:

- high-intent product pages;
- technical manufacturing capability;
- market/tariff intelligence;
- engineering knowledge;
- interactive calculators/tools;
- RFQ and drawing upload;
- buyer CRM;
- quote workflow;
- customer data room/portal;
- AI-assisted lead research and RFQ processing.

The website should convert the customer journey:

**Search / AI answer / referral -> Technical trust -> Product fit -> Upload drawing / RFQ -> Sales qualification -> Engineering review -> Quote -> Trial order -> Repeat order**.

## 1.2 Strategic market position

### External positioning

> **LELOI METAL - Precision Aluminium Extrusion & Fabrication from Vietnam**

Supporting proposition:

> Custom aluminium profiles, CNC machining, surface finishing and OEM components for global industries.

### Strategic narrative

LELOI METAL should compete using a combination of:

- Vietnam manufacturing flexibility;
- China+1 sourcing relevance;
- lower labor-intensive fabrication cost;
- flexible MOQ;
- engineering responsiveness;
- FTA advantages where applicable;
- origin traceability;
- international-quality documentation;
- low-carbon and sustainability readiness.

Do **not** position the company as “China but cheaper”.

---

# 2. BRAND ARCHITECTURE

## 2.1 Master structure

```text
LELOI EXIM GLOBAL
│
├── LELOI METAL       -> Aluminium / metal / OEM manufacturing
├── LELOI WOOD        -> Timber / wood products
├── LELOI COMPLIANCE  -> Trade & sustainability compliance
├── LELOI SOURCING    -> Sourcing services
└── future verticals  -> Solar / industrial / other export lines
```

## 2.2 Domain strategy

### Primary

`https://leloimetal.com`

### Corporate authority bridge

`https://leloiglobal.com/industries/aluminium`

Corporate page responsibilities:

- introduce LELOI METAL as a division;
- establish relationship to LELOI EXIM GLOBAL;
- link to specialist domain;
- avoid duplicating full product content;
- use canonical URLs appropriately if any content overlaps.

## 2.3 Footer/legal language

Preferred:

> **LELOI METAL - A Business Division of LELOI EXIM GLOBAL**

or

> LELOI METAL is the aluminium and metal manufacturing division of LELOI EXIM GLOBAL.

Use the legal entity’s exact registered information in Terms, Privacy, invoices and contracts.

---

# 3. APPROVED BRAND SYSTEM

## 3.1 Logo concept

Approved direction:

- two stylised **L** forms;
- one dark navy, one bright blue;
- geometry subtly evokes an **aluminium extrusion/profile section**;
- clean angular construction;
- must remain legible at favicon size;
- horizontal logo is primary;
- stacked logo is secondary;
- symbol-only version for avatar/favicon/app icon.

**Important:** production artwork must be redrawn as true vector geometry. Do not trace low-resolution raster artifacts.

## 3.2 Slogan

**Aluminium for a Better World**

Usage:

- horizontal master logo: optional slogan under wordmark;
- website navigation: use logo without slogan if space is limited;
- hero/footer/brand campaigns: slogan can be prominent;
- avoid repeating slogan more than 2 times on the same screen.

## 3.3 Core colors

Approved visual direction based on the selected brand board:

| Token | Suggested HEX | Usage |
|---|---|---|
| LELOI Navy | `#0A2D5B` | primary brand, headings, dark UI |
| LELOI Blue | `#2F7BFF` | CTA, active states, highlights |
| Aluminium Gray | `#9AA3AF` | wordmark METAL, technical secondary |
| Light Gray | `#F1F4F8` | surfaces/background |
| White | `#FFFFFF` | clean backgrounds |
| Charcoal | `#172033` | body copy / dark text |
| Sustainability Green | `#16A34A` | sustainability only, sparingly |

Engineering should implement colors as design tokens, not hard-coded across components.

## 3.4 Typography

Primary direction:

- **Montserrat** for display/headings/brand-like UI;
- **Inter** for body/UI/data tables.

Recommended hierarchy:

```text
Display XL: Montserrat 700
H1: Montserrat 700
H2: Montserrat 650/700
H3: Montserrat 600
Body: Inter 400
Body Strong: Inter 600
UI/Buttons: Inter 600
Data/Table: Inter 400/500
```

Web implementation may use self-hosted or optimized web-font delivery, with system fallbacks.

## 3.5 Photography

Preferred imagery:

- precision extrusion cross-sections;
- CNC machining;
- clean production lines;
- anodizing / powder coating;
- QC instruments;
- solar frames/rails;
- industrial automation;
- heat-sink applications;
- architectural facade applications;
- global logistics;
- clean energy / sustainable manufacturing.

Avoid:

- generic handshake stock photos;
- fake futuristic factories;
- imagery implying processes/certifications the factory does not possess;
- overly green “eco” visuals unsupported by real carbon data.

## 3.6 UI style

- generous white space;
- 8px spacing grid;
- technical cards with subtle borders;
- minimal shadows;
- navy/blue dominant;
- rounded corners moderate, not consumer-app bubbly;
- technical diagrams and specifications are welcome;
- strong contrast and accessibility.

---

# 4. TARGET CUSTOMER SEGMENTS

## 4.1 Buyer types

Use these canonical buyer classes throughout CRM and analytics:

| Code | Buyer type | Typical needs |
|---|---|---|
| DIST | Distributor | standard/custom profiles, stock programs |
| OEM | OEM Manufacturer | made-to-drawing parts, repeat production |
| FAB | Fabricator | doors, facade, railing, custom sections |
| SOL | Solar company | panel frames, rails, clamps, carports |
| AUT | Automation | T-slot, machine frames, guards, conveyors |
| THERM | Thermal/electronics | heat sinks, housings, thermal components |
| CON | Contractor | facade/construction/project packages |

## 4.2 Priority geographical markets

Initial strategic focus:

### Tier S/A - first sales and content waves

- Canada
- Japan
- South Korea
- Germany
- Netherlands
- France
- Poland
- New Zealand

### Tier B - build in parallel

- UAE
- Saudi Arabia
- Singapore
- United Kingdom
- Czech Republic
- Belgium
- Denmark
- Sweden
- Malaysia
- Philippines

### Controlled/high-complexity

- United States
- Australia

For controlled markets, site content must explicitly advise “verify current tariff/trade-remedy scope for exact HS/product/exporter” rather than using oversimplified tariff claims.

---

# 5. PRODUCT PORTFOLIO ARCHITECTURE

## 5.1 Business lines

### A. Custom Aluminium Extrusions

Core product for global OEM sourcing.

Typical attributes:

- custom dies;
- hollow/semi-hollow/solid profiles;
- alloy options subject to capability;
- T5/T6 temper subject to capability;
- dimensional tolerances;
- cut-to-length;
- surface treatments;
- fabrication.

### B. Industrial Aluminium Profiles

- T-slot profiles;
- automation frames;
- conveyors;
- machine guards;
- cleanroom profiles;
- workstation systems;
- linear motion profiles.

### C. Solar Aluminium Profiles

- panel frames;
- mounting rails;
- mid/end clamps;
- solar carport profiles;
- BIPV profiles;
- inverter housings.

### D. Architectural Aluminium Systems

- windows/doors;
- curtain wall;
- facade;
- thermal-break profiles;
- railing;
- louvers;
- pergola.

### E. Heat Sink / Thermal Profiles

- LED heat sinks;
- inverter cooling;
- electronics;
- telecom;
- EV chargers;
- battery/energy storage;
- industrial power electronics.

### F. OEM Aluminium Components

Highest-value positioning:

**Drawing -> DFM -> Die -> Extrusion -> Heat treatment -> Cutting -> CNC -> Surface -> QC -> Packing -> Export**.

---

# 6. WEBSITE INFORMATION ARCHITECTURE

## 6.1 Master sitemap

```text
/
├── products/
│   ├── custom-aluminium-extrusions/
│   ├── industrial-aluminium-profiles/
│   ├── solar-aluminium-profiles/
│   ├── architectural-aluminium/
│   ├── heat-sink-profiles/
│   └── oem-aluminium-components/
│
├── capabilities/
│   ├── aluminium-extrusion/
│   ├── die-design/
│   ├── cnc-machining/
│   ├── precision-cutting/
│   ├── drilling-tapping/
│   ├── anodizing/
│   ├── powder-coating/
│   ├── fabrication/
│   ├── assembly/
│   └── quality-control/
│
├── industries/
│   ├── automation/
│   ├── solar-energy/
│   ├── electronics/
│   ├── ev-battery/
│   ├── construction-facade/
│   ├── machinery/
│   ├── transportation/
│   ├── lighting/
│   └── data-center/
│
├── markets/
│   ├── canada/
│   ├── japan/
│   ├── south-korea/
│   ├── germany/
│   ├── netherlands/
│   ├── uae/
│   └── saudi-arabia/
│
├── insights/
│   ├── market-intelligence/
│   ├── engineering/
│   ├── materials/
│   ├── tariffs-trade/
│   └── sustainability/
│
├── tools/
│   ├── aluminium-weight-calculator/
│   ├── import-duty-checker/
│   ├── alloy-selector/
│   ├── rfq-builder/
│   └── cost-calculator/
│
├── factory/
├── quality/
├── sustainability/
├── about/
├── contact/
├── rfq/
├── customer-portal/        [Phase 3]
└── legal/
    ├── privacy/
    ├── terms/
    └── cookie-policy/
```

## 6.2 URL principles

- lowercase;
- hyphen-separated;
- stable and descriptive;
- avoid dates in evergreen URLs;
- never expose internal IDs in public SEO URLs;
- avoid duplicated taxonomy pages.

---

# 7. HOMEPAGE SPECIFICATION

## 7.1 Hero

Eyebrow:

> PRECISION ALUMINIUM EXTRUSION & FABRICATION FROM VIETNAM

H1:

> **Aluminium for a Better World**

Supporting copy:

> Custom aluminium profiles, CNC machining, surface finishing and OEM components for global industries.

Primary CTA:

> **Request a Quote**

Secondary CTA:

> **Upload Your Drawing**

Optional tertiary CTA:

> Watch Our Factory

Hero should feature real extrusion/profile imagery. Avoid using unverified production-capacity counters at launch.

## 7.2 Trust strip

Only publish verified facts, for example:

- years in export;
- annual production capacity;
- export countries;
- certifications;
- on-time delivery rate;
- customer count.

Fields are driven by CMS/admin and can remain hidden until verified.

## 7.3 Product solutions

Six cards:

1. Custom Aluminium Extrusions
2. Industrial Aluminium Profiles
3. Solar Aluminium Profiles
4. Architectural Aluminium
5. OEM Aluminium Components
6. Heat Sink Profiles

Each card:

- application image;
- one-sentence value proposition;
- deep link;
- optional standard/alloy tags.

## 7.4 Capabilities

Cards:

- Extrusion
- CNC Machining
- Surface Finishing
- Fabrication & Assembly
- Quality Control
- Packaging & Logistics

## 7.5 Industries

Show application-based navigation rather than domestic profile-system nomenclature.

## 7.6 Why Vietnam / Why LELOI METAL

Four evidence-based value pillars:

- Flexible production & MOQ
- Precision manufacturing support
- Global export documentation
- Traceable and sustainability-ready supply chain

Never make generic tariff-savings claims without destination/product context.

## 7.7 Engineering/RFQ CTA

Prominent band:

> Have a drawing? Send STEP, DWG, DXF or PDF and receive an engineering review.

Actions:

- Upload Drawing
- Start RFQ

## 7.8 Sustainability

Position around measurable readiness:

- recycled content data where available;
- energy use and carbon data;
- responsible material sourcing;
- CBAM-ready documentation roadmap.

## 7.9 Insights

Show 3-6 current technical/market pieces.

## 7.10 Final CTA

> **Let’s Build Your Aluminium Solution**

Buttons:

- Request a Quote
- Talk to Export Team

---

# 8. PRODUCT DETAIL PAGE TEMPLATE

Every product page must include:

1. Clear product H1.
2. Application-first value proposition.
3. Product gallery / real profile drawings.
4. Available alloy/temper table (verified only).
5. Dimensional/capability range.
6. Surface finish options.
7. Fabrication options.
8. Typical applications.
9. Engineering/QC process.
10. Packaging/logistics.
11. Downloadable technical PDF where available.
12. FAQ.
13. Related insights.
14. Related capabilities.
15. RFQ CTA.
16. Drawing upload.

### Required metadata

- product category;
- alloys;
- tempers;
- wall-thickness range;
- max profile dimensions;
- max length;
- finish options;
- tolerances;
- MOQ;
- HS code (if generic classification can be responsibly stated);
- certifications;
- lead-time range;
- application industries.

**Do not hardcode capability placeholders into marketing text.** Values must come from capability data.

---

# 9. CAPABILITY PAGE TEMPLATE

Each capability page should answer technical buyer questions:

### Example: CNC Machining

- machines / axes;
- working envelope;
- tolerances;
- cutting/drilling/tapping/milling;
- supported file formats;
- inspection equipment;
- common applications;
- batch size/MOQ;
- sample/FAI workflow;
- gallery/case studies;
- RFQ CTA.

CMS must allow unpublished/hidden fields until real data is audited.

---

# 10. INDUSTRY PAGE TEMPLATE

Each industry page must combine product + engineering context.

Example `/industries/solar-energy/`:

- what LELOI supplies;
- panel frames;
- rails/clamps;
- carport/BIPV;
- relevant alloys;
- corrosion/surface considerations;
- fabrication;
- packaging;
- global market needs;
- case study placeholder;
- RFQ CTA.

Avoid generic SEO copy. Every industry page should add unique engineering detail.

---

# 11. MARKET PAGE TEMPLATE

Market pages are data-driven and editorially reviewed.

Example `/markets/canada/`:

1. Market overview.
2. Relevant aluminium import categories.
3. Vietnam sourcing context.
4. China exposure/trade-remedy context where relevant.
5. Tariff/FTA summary with “last verified” date.
6. Products LELOI can supply.
7. Logistics routes/Incoterms overview.
8. Documentation/certification expectations.
9. Buyer categories.
10. Market-specific FAQs.
11. RFQ CTA.
12. Source notes.

### Mandatory safeguards

- source URL for each trade/tariff fact;
- data year;
- reviewed date;
- `verified_by` field;
- disclaimer that exact tariff depends on HS/product/exporter/origin rules.

No 100-country programmatic SEO at launch. Start with 5-8 high-value markets.

---

# 12. KNOWLEDGE CENTER / GEO CONTENT

## 12.1 Goal

Create source-quality technical and market content that can rank in search and be cited/summarized by AI systems.

## 12.2 Content clusters

### Market Intelligence

- Vietnam Aluminium Export Report
- Canada Aluminium Extrusion Market
- Japan Aluminium Buyer Guide
- Vietnam vs China Aluminium Sourcing
- EU aluminium trade-remedy updates

### Engineering

- How to design an aluminium extrusion
- Extrusion tolerance guide
- Hollow vs solid profile
- DFM checklist
- Die cost & die life

### Materials

- 6061 vs 6063
- 6005A vs 6063
- T5 vs T6
- anodizing vs powder coating

### Tariffs & Trade

- HS7604 guide
- Rules of origin overview
- Anti-dumping basics
- CBAM aluminium guide

### Sustainability

- recycled aluminium
- carbon footprint of aluminium
- CBAM data preparation
- low-carbon aluminium sourcing

## 12.3 First 20 cornerstone topics

1. Aluminium Extrusion Vietnam: Buyer’s Guide
2. Vietnam vs China Aluminium Extrusion
3. Custom Aluminium Extrusion Cost Guide
4. How Aluminium Extrusion Dies Are Made
5. Aluminium Extrusion Tolerances Explained
6. 6061 vs 6063 Aluminium
7. T5 vs T6 Aluminium Temper
8. Anodizing vs Powder Coating
9. Aluminium Profile MOQ Explained
10. Design for Aluminium Extrusion
11. CNC Machining Aluminium Extrusions
12. Solar Aluminium Profiles Guide
13. Heat Sink Extrusion Guide
14. Industrial T-slot Profiles Guide
15. CBAM for Aluminium Exporters
16. HS7604 Import Guide
17. Aluminium Supplier Due Diligence Checklist
18. How to Source Aluminium from Vietnam
19. Aluminium Packaging for Sea Freight
20. Aluminium Quality Inspection Checklist

## 12.4 GEO/AEO writing pattern

For key questions, use:

- direct answer in first 50-120 words;
- table/comparison;
- methodology/source notes;
- supporting explanation;
- FAQ;
- author/reviewer;
- last-updated timestamp.

Avoid “AI fluff”, fake expertise and unsourced numeric claims.

---

# 13. INTERACTIVE TOOLS

## 13.1 Tool 1 - Aluminium Weight Calculator [MVP]

Inputs:

- shape;
- dimensions;
- length;
- quantity;
- alloy/density override.

Outputs:

- kg/m;
- kg/piece;
- total kg;
- estimated tonnage.

Lead CTA after result:

> Need a custom profile quote? Upload your drawing.

## 13.2 Tool 2 - Import Duty Checker [Phase 2]

Inputs:

- origin;
- destination;
- HS code;
- optional product description.

Outputs:

- MFN;
- preferential tariff where applicable;
- trade remedies;
- other notes;
- last verified;
- sources.

Important: label as **informational, not customs/legal advice**.

## 13.3 Tool 3 - Alloy Selector [Phase 2]

Inputs:

- application;
- structural load class;
- corrosion environment;
- machining needs;
- finish;
- thermal needs.

Output:

- suggested alloy/temper candidates;
- reasons;
- engineering review CTA.

Never imply final engineering certification.

## 13.4 Tool 4 - RFQ Builder [MVP/Phase 1]

Supports:

- drawing upload;
- basic technical form;
- annual volume;
- order quantity;
- alloy/temper;
- finish;
- machining;
- destination;
- target deadline;
- Incoterm.

## 13.5 Tool 5 - Cost Estimator [Phase 3]

Internal-first. Public version only if business approves.

Cost components:

- billet/LME reference;
- premium;
- conversion;
- die amortization;
- machining;
- finishing;
- packaging;
- freight;
- finance/risk;
- margin.

---

# 14. RFQ USER JOURNEY

## 14.1 Entry points

- header CTA;
- hero CTA;
- product CTA;
- capability CTA;
- market page CTA;
- tool result CTA;
- floating mobile CTA.

## 14.2 Step flow

### Step 1 - Company

- company name;
- country;
- website;
- contact name;
- work email;
- phone (optional);
- buyer type.

### Step 2 - Product

- product category;
- application;
- alloy;
- temper;
- dimensions/description;
- annual volume;
- initial order volume.

### Step 3 - Process

- extrusion only;
- cutting;
- CNC;
- drilling/tapping;
- anodizing;
- powder coating;
- assembly;
- custom packaging.

### Step 4 - Files

Allowed:

- PDF
- DWG
- DXF
- STEP/STP
- IGES/IGS
- ZIP

Security controls:

- max file size configurable;
- MIME inspection;
- antivirus/malware scan;
- signed storage URL;
- private bucket;
- no public predictable file URLs.

### Step 5 - Commercial

- destination port/city;
- Incoterm;
- target price optional;
- target delivery;
- special compliance requirements.

### Step 6 - Confirmation

Generate:

- RFQ number;
- confirmation email;
- sales notification;
- CRM record;
- next-step SLA.

---

# 15. DATABASE ARCHITECTURE

Use PostgreSQL as system of record.

## 15.1 Core entities

```text
Organization/User
Company
Contact
BuyerProfile
Lead
RFQ
RFQFile
Quote
QuoteLine
Product
ProductCategory
ProductCapability
FactoryCapability
Market
TradeMeasure
TariffRate
MarketStat
Content
ContentSource
ToolSession
Activity
Task
EmailInteraction
CustomerDocument
AuditLog
```

## 15.2 Core tables

### `companies`

```sql
id UUID PK
name TEXT NOT NULL
legal_name TEXT
country_code CHAR(2)
city TEXT
website TEXT
linkedin_url TEXT
industry TEXT
company_type TEXT
employee_range TEXT
revenue_range TEXT
description TEXT
source TEXT
status TEXT
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

### `contacts`

```sql
id UUID PK
company_id UUID FK companies(id)
first_name TEXT
last_name TEXT
job_title TEXT
department TEXT
email TEXT
phone TEXT
linkedin_url TEXT
language_code TEXT
email_verified BOOLEAN DEFAULT FALSE
verification_source TEXT
last_verified_at TIMESTAMPTZ
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

### `buyer_profiles`

```sql
id UUID PK
company_id UUID FK companies(id)
buyer_type ENUM('DIST','OEM','FAB','SOL','AUT','THERM','CON')
products_interest JSONB
current_supplier_notes TEXT
china_exposure SMALLINT
estimated_annual_volume_tons NUMERIC
qualification_score NUMERIC
score_breakdown JSONB
status TEXT
owner_user_id UUID
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

### `leads`

```sql
id UUID PK
company_id UUID NULL
contact_id UUID NULL
source TEXT
landing_page TEXT
utm_source TEXT
utm_medium TEXT
utm_campaign TEXT
product_interest TEXT
country_code CHAR(2)
lead_score NUMERIC
status ENUM('NEW','QUALIFIED','MQL','SQL','DISQUALIFIED','CUSTOMER')
owner_user_id UUID
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

### `products`

```sql
id UUID PK
category_id UUID
slug TEXT UNIQUE
name TEXT
summary TEXT
alloys JSONB
tempers JSONB
weight_per_meter NUMERIC NULL
ccd_mm NUMERIC NULL
min_wall_mm NUMERIC NULL
max_length_mm NUMERIC NULL
surface_finishes JSONB
applications JSONB
hs_codes JSONB
moq_kg NUMERIC NULL
production_status TEXT
is_published BOOLEAN DEFAULT FALSE
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

### `factory_capabilities`

```sql
id UUID PK
process TEXT
machine_name TEXT
machine_model TEXT
machine_capacity TEXT
max_dimension JSONB
tolerance JSONB
annual_capacity_tons NUMERIC NULL
available_capacity_tons NUMERIC NULL
certifications JSONB
verified BOOLEAN DEFAULT FALSE
verified_at TIMESTAMPTZ NULL
notes TEXT
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

### `rfqs`

```sql
id UUID PK
rfq_number TEXT UNIQUE
lead_id UUID NULL
company_id UUID
contact_id UUID
product_category TEXT
application TEXT
alloy TEXT
temper TEXT
annual_volume NUMERIC
order_quantity NUMERIC
length_mm NUMERIC NULL
surface_finish TEXT
process_requirements JSONB
tolerance_requirements JSONB
packing_requirements TEXT
incoterm TEXT
destination_country CHAR(2)
destination_location TEXT
target_price NUMERIC NULL
currency CHAR(3) NULL
target_delivery_date DATE NULL
status ENUM('DRAFT','SUBMITTED','QUALIFYING','ENGINEERING_REVIEW','NEED_INFO','COSTING','QUOTED','SAMPLE','WON','LOST','ARCHIVED')
priority TEXT
owner_user_id UUID
submitted_at TIMESTAMPTZ
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

### `rfq_files`

```sql
id UUID PK
rfq_id UUID FK rfqs(id)
original_file_name TEXT
storage_key TEXT
mime_type TEXT
file_size BIGINT
sha256 TEXT
file_category TEXT
version INTEGER DEFAULT 1
scan_status TEXT
uploaded_at TIMESTAMPTZ
```

### `quotes`

```sql
id UUID PK
rfq_id UUID FK rfqs(id)
quote_number TEXT UNIQUE
revision INTEGER
currency CHAR(3)
incoterm TEXT
valid_until DATE
billet_reference NUMERIC NULL
conversion_cost NUMERIC NULL
die_cost NUMERIC NULL
machining_cost NUMERIC NULL
surface_cost NUMERIC NULL
packing_cost NUMERIC NULL
freight_cost NUMERIC NULL
finance_risk_cost NUMERIC NULL
margin_percent NUMERIC NULL
fob_total NUMERIC NULL
cif_total NUMERIC NULL
status ENUM('DRAFT','INTERNAL_REVIEW','APPROVED','SENT','ACCEPTED','REJECTED','EXPIRED')
approved_by UUID NULL
created_at TIMESTAMPTZ
updated_at TIMESTAMPTZ
```

### `markets`

```sql
id UUID PK
country_code CHAR(2) UNIQUE
name TEXT
region TEXT
market_score NUMERIC
score_breakdown JSONB
payment_risk_score NUMERIC
logistics_score NUMERIC
product_fit JSONB
status TEXT
last_reviewed_at TIMESTAMPTZ
```

### `market_stats`

```sql
id UUID PK
market_id UUID
hs_code TEXT
data_year INTEGER
import_value_usd NUMERIC
import_volume_kg NUMERIC
avg_price_usd_per_kg NUMERIC
china_share_percent NUMERIC NULL
vietnam_share_percent NUMERIC NULL
source_name TEXT
source_url TEXT
source_accessed_at TIMESTAMPTZ
```

### `tariff_rates`

```sql
id UUID PK
destination_country CHAR(2)
origin_country CHAR(2)
hs_code TEXT
mfn_rate NUMERIC NULL
preferential_rate NUMERIC NULL
rate_unit TEXT
fta_name TEXT NULL
effective_from DATE NULL
effective_to DATE NULL
source_url TEXT
verified_at TIMESTAMPTZ
verified_by UUID
notes TEXT
```

### `trade_measures`

```sql
id UUID PK
destination_country CHAR(2)
origin_country CHAR(2)
hs_code TEXT
measure_type ENUM('AD','CVD','SAFEGUARD','SECTION232','CBAM','OTHER')
measure_name TEXT
rate_min NUMERIC NULL
rate_max NUMERIC NULL
scope_notes TEXT
effective_from DATE NULL
effective_to DATE NULL
source_url TEXT
verified_at TIMESTAMPTZ
```

### `content_items`

```sql
id UUID PK
type ENUM('ARTICLE','MARKET','PRODUCT','CAPABILITY','INDUSTRY','GUIDE','FAQ')
slug TEXT UNIQUE
title TEXT
summary TEXT
body JSONB
primary_keyword TEXT
search_intent TEXT
target_country CHAR(2) NULL
target_industry TEXT NULL
target_product TEXT NULL
hs_codes JSONB
author_id UUID
reviewer_id UUID
status ENUM('DRAFT','REVIEW','APPROVED','PUBLISHED','ARCHIVED')
published_at TIMESTAMPTZ NULL
last_updated_at TIMESTAMPTZ
```

### `content_sources`

```sql
id UUID PK
content_id UUID
source_name TEXT
source_url TEXT
publication_date DATE NULL
accessed_at TIMESTAMPTZ
claim_notes TEXT
```

### `activities`

```sql
id UUID PK
entity_type TEXT
entity_id UUID
activity_type TEXT
actor_user_id UUID NULL
metadata JSONB
created_at TIMESTAMPTZ
```

### `audit_logs`

Immutable audit log for sensitive CRM/content/tariff/admin changes.

---

# 16. BUYER QUALIFICATION & MARKET SCORING

## 16.1 Market Opportunity Score

Initial formula:

```text
25% Market Size
15% Market Growth
15% China Trade-Barrier Advantage
10% Vietnam Tariff/FTA Advantage
10% Logistics
10% Competition Intensity
10% Product Fit
 5% Payment Risk
= 100 points
```

Weights must be editable in admin, not hard-coded.

## 16.2 Buyer Qualification Score

Suggested 100-point model:

```text
20 Company/Product Fit
15 Estimated Volume
15 Import/Sourcing Evidence
10 China+1 Motivation
10 Technical Match
10 Decision-maker Contact Quality
 8 Geography Priority
 5 Website/Business Legitimacy
 4 Engagement Intent
 3 Payment/Compliance Risk
```

Classification:

- 80-100: A / priority account
- 65-79: B / active nurture
- 50-64: C / monitor
- <50: low priority/disqualify pending review

AI may suggest score; human sales can override with reason.

---

# 17. CRM PIPELINE

Canonical pipeline:

```text
TARGET
-> RESEARCHED
-> CONTACT READY
-> CONTACTED
-> REPLIED
-> TECHNICAL DISCUSSION
-> RFQ RECEIVED
-> QUOTED
-> SAMPLE/TRIAL
-> WON / LOST
-> REPEAT CUSTOMER
```

Core sales KPIs:

- qualified accounts;
- valid technical contacts;
- response rate;
- RFQs;
- quote conversion;
- samples;
- trial POs;
- recurring POs;
- revenue;
- gross margin;
- tonnes/customer/year.

Do **not** use “emails sent” as the primary sales KPI.

---

# 18. ADMIN / BACK OFFICE

## 18.1 Admin modules

1. Dashboard
2. Leads
3. Companies
4. Contacts
5. Buyer qualification
6. RFQs
7. Quotes
8. Products
9. Factory capabilities
10. Markets
11. Tariffs & trade measures
12. Content/CMS
13. Media library
14. Tools configuration
15. SEO manager
16. Users & roles
17. Audit logs
18. Settings

## 18.2 Dashboard widgets

- new leads 7/30 days;
- RFQs by status;
- RFQ source;
- RFQs by country;
- quote value;
- top product demand;
- market-page conversions;
- organic/search leads;
- AI/referral traffic where measurable;
- content freshness alerts;
- tariff data expiry alerts.

---

# 19. ROLE-BASED ACCESS CONTROL

Roles:

### SUPER_ADMIN
Full system.

### ADMIN
Operations/admin except critical system settings.

### EXPORT_DIRECTOR
Leads, buyers, RFQ, quote approval, dashboard.

### SALES
Assigned leads, companies, contacts, RFQs; quote drafting if allowed.

### TECHNICAL_ENGINEER
RFQ files, technical notes, capability/product data, DFM review.

### CONTENT_EDITOR
CMS, market content drafts.

### COMPLIANCE_REVIEWER
Tariff/trade measure verification, market data approval.

### FINANCE
Quote costing, margin data, selected reporting.

### CUSTOMER [Phase 3]
Portal-only own-company data.

Use server-side authorization for every protected action.

---

# 20. API DESIGN

Recommended architecture: REST-first API with typed schema. GraphQL is not required for MVP.

## 20.1 Public endpoints

```text
GET  /api/public/products
GET  /api/public/products/:slug
GET  /api/public/capabilities/:slug
GET  /api/public/markets/:slug
GET  /api/public/insights/:slug
POST /api/public/leads
POST /api/public/rfqs
POST /api/public/rfqs/:id/files
POST /api/public/contact
POST /api/public/tools/weight-calculator
POST /api/public/tools/duty-check
```

## 20.2 Admin endpoints

```text
/api/admin/companies
/api/admin/contacts
/api/admin/buyers
/api/admin/leads
/api/admin/rfqs
/api/admin/quotes
/api/admin/products
/api/admin/capabilities
/api/admin/markets
/api/admin/tariffs
/api/admin/trade-measures
/api/admin/content
/api/admin/users
/api/admin/audit
```

## 20.3 API requirements

- OpenAPI documentation;
- request validation;
- auth/RBAC;
- pagination;
- filters/sorts;
- idempotency for critical form submissions;
- rate limiting;
- consistent error envelope;
- audit logging for sensitive changes.

---

# 21. TECHNICAL STACK

## 21.1 Recommended stack

Use TypeScript end-to-end unless team has a strong reason otherwise.

### Monorepo

- pnpm workspaces
- Turborepo or equivalent

### Web

- Next.js, current stable/LTS-compatible release
- React
- TypeScript
- Tailwind CSS or token-based CSS system
- accessible headless component library

### API

Option A - preferred for unified TS:

- NestJS
- Prisma

Option B:

- FastAPI if AI/data services justify Python-first backend.

For V1, **NestJS + Prisma** is recommended, then isolated Python workers can be added later for CAD/document analysis.

### Database

- PostgreSQL

### Cache/queue

- Redis

### Storage

- S3-compatible object storage / Cloudflare R2

### Search

V1:

- PostgreSQL full-text + trigram

Scale phase:

- Meilisearch / Typesense / OpenSearch only when needed.

### Email

- AWS SES / Resend or equivalent business-grade provider.

### CDN/WAF/DNS

- Cloudflare recommended.

### Analytics

- GA4
- Google Search Console
- Microsoft Clarity
- optional server-side events warehouse later.

### Error/observability

- Sentry or equivalent
- structured logs
- uptime monitoring

---

# 22. REPOSITORY STRUCTURE

```text
leloi-metal/
├── apps/
│   ├── web/                 # public website + customer portal
│   ├── admin/               # internal admin/CRM UI
│   └── api/                 # NestJS API
│
├── packages/
│   ├── ui/                  # shared design system
│   ├── config/
│   ├── database/            # Prisma schema/migrations/seeds
│   ├── validation/
│   ├── types/
│   ├── seo/
│   ├── analytics/
│   └── email/
│
├── workers/
│   ├── file-scan/
│   ├── ai-rfq-parser/       # later
│   └── market-data/         # later
│
├── docs/
│   ├── architecture/
│   ├── api/
│   ├── product/
│   ├── seo/
│   └── operations/
│
├── infra/
│   ├── docker/
│   ├── terraform/           # optional phase 2
│   └── scripts/
│
├── .github/workflows/
├── .env.example
├── README.md
└── SECURITY.md
```

---

# 23. SEO TECHNICAL SPECIFICATION

## 23.1 Rendering

- server-side rendered/static generated public content;
- no SEO-critical content exclusively client-rendered;
- fast TTFB;
- route-level caching;
- image optimization.

## 23.2 Required

- sitemap index;
- page sitemaps;
- image sitemap if useful;
- robots.txt;
- canonical;
- hreflang when localized versions exist;
- breadcrumb;
- descriptive title/meta;
- OpenGraph/X cards;
- clean 404/410/301 policy;
- no orphan pages;
- HTML semantic headings;
- Core Web Vitals monitoring.

## 23.3 Structured data

Use valid schema only where content supports it:

- Organization
- Product
- Service
- Article
- BreadcrumbList
- FAQPage where eligible/appropriate
- VideoObject
- ImageObject
- Dataset for market datasets where public.

Never fabricate review stars, ratings or certifications.

## 23.4 SEO metadata model

CMS fields:

```text
seo_title
meta_description
canonical_url
robots_index
robots_follow
og_title
og_description
og_image
twitter_card
structured_data_overrides
```

## 23.5 Internal link engine

Each product links to:

- related capabilities;
- industries;
- technical guides;
- market pages where relevant;
- RFQ.

Each market page links to relevant products and trade guides.

---

# 24. GEO / AEO / AI DISCOVERABILITY

## 24.1 Principles

- answer buyer questions directly;
- demonstrate expertise with evidence;
- publish source/date/methodology;
- provide machine-readable page structure;
- keep entity naming consistent: LELOI METAL / LELOI EXIM GLOBAL;
- build topic authority, not keyword stuffing;
- maintain public “last updated” metadata for time-sensitive market pages.

## 24.2 Entity consistency

Organization entity fields:

- legal entity;
- trading brand;
- business division relationship;
- website;
- address;
- country;
- email/phone;
- social profiles;
- industries;
- products;
- logo.

Keep exact naming consistent across:

- website;
- LinkedIn;
- business directories;
- PDF capability statements;
- trade portals;
- Google Business Profile if applicable;
- email signatures.

## 24.3 Content quality gates

An article cannot publish if:

- numeric market claims have no source;
- tariff data is stale/unverified;
- factory claim is unverified;
- AI-generated draft has not been human reviewed;
- duplicate/thin content score exceeds threshold.

---

# 25. INTERNATIONALIZATION

## 25.1 Launch

Primary: English.

## 25.2 Phase 2 languages

Priority based on sales:

1. Japanese
2. German
3. Korean
4. French

Localization is not simple machine translation.

## 25.3 Route strategy

```text
/en/   (optional if default language path strategy is selected)
/ja/
/de/
/ko/
/fr/
```

Choose one consistent strategy before launch. Avoid changing after indexing.

## 25.4 Hreflang

Only create hreflang where localized page truly exists and is quality-reviewed.

---

# 26. CONTENT OPERATIONS

## 26.1 Workflow

```text
IDEA
-> BRIEF
-> SOURCE COLLECTION
-> DRAFT
-> TECHNICAL REVIEW
-> SEO REVIEW
-> COMPLIANCE REVIEW (if tariff/trade)
-> APPROVED
-> PUBLISHED
-> UPDATE MONITOR
```

## 26.2 Freshness classes

### Class A - highly time-sensitive

- tariff;
- AD/CVD;
- CBAM;
- market trade data.

Review every 30-90 days depending on topic.

### Class B - slow-changing

- market guides;
- logistics;
- certification.

Review every 6 months.

### Class C - evergreen

- alloy comparisons;
- extrusion design;
- machining guides.

Review annually or when standards change.

---

# 27. MARKET INTELLIGENCE DATA LAYER

## 27.1 Data sources

System should support manual and automated imports from authoritative sources where licensing/API terms permit.

Possible source classes:

- national customs portals;
- UN/World Bank trade datasets;
- official tariff portals;
- trade-remedy authorities;
- EU official regulations;
- government/FTA portals.

## 27.2 Data governance

Every record requires:

- source;
- access date;
- data year/effective date;
- reviewer;
- confidence;
- notes.

No external trade data should be silently overwritten. Keep history/version.

---

# 28. AI AUTOMATION LAYER

AI should assist, not silently control high-stakes commercial actions.

## 28.1 Market Intelligence Agent

Tasks:

- collect candidate data;
- summarize market changes;
- flag tariff updates;
- propose content updates;
- create source queue for human verification.

## 28.2 Buyer Research Agent

Inputs:

- target country;
- buyer type;
- product.

Outputs:

- company profile;
- likely product fit;
- source URLs;
- potential contacts;
- qualification score suggestion.

Human approves before outreach.

## 28.3 RFQ Parsing Agent

Phase 2/3.

Extract from PDF/email/text:

- alloy;
- temper;
- dimensions;
- tolerance;
- finish;
- quantity;
- annual volume;
- file list;
- missing information.

Never claim CAD dimensional interpretation is authoritative without engineer review.

## 28.4 Email Personalization Agent

Generates drafts based on real buyer context.

Guardrails:

- no invented facts;
- no false previous relationship;
- no mass-spam mode;
- human approval initially.

## 28.5 Follow-up Agent

Suggests next action and reminders; does not send binding quote or commercial commitment without approval.

---

# 29. CUSTOMER PORTAL - PHASE 3

## 29.1 Features

```text
Dashboard
RFQs
Quotes
Drawings
Samples
Orders
Production Status
QC Documents
Shipments
Documents / Data Room
Messages
```

## 29.2 Data-room document classes

- ISO certificates;
- material certificates;
- RoHS/REACH where applicable;
- certificate of origin;
- mill certificate;
- inspection report;
- packing list;
- invoice;
- B/L;
- CBAM/carbon data;
- customer-specific PPAP/FAI documents if applicable.

Strict tenant isolation required.

---

# 30. SECURITY & PRIVACY

## 30.1 Baseline

- HTTPS only;
- secure cookies;
- CSRF protection where applicable;
- CSP;
- HSTS;
- rate limiting;
- bot protection;
- input validation;
- output encoding;
- encrypted secrets;
- least privilege;
- database backups;
- audit logs;
- MFA for admin users;
- admin IP/risk rules optional.

## 30.2 File security

RFQ drawings are commercially sensitive.

Requirements:

- private object storage;
- no indexing;
- antivirus scanning;
- signed URLs with short TTL;
- access logging;
- tenant/user authorization;
- delete/archive policy;
- file checksum;
- content-type validation;
- block executable files.

## 30.3 Customer confidentiality

Provide optional NDA workflow in phase 2.

No customer drawings may be used for public case studies without written approval.

---

# 31. ANALYTICS & ATTRIBUTION

## 31.1 Events

Track:

```text
view_product
view_capability
view_market
read_article_75
calculator_completed
rfq_started
rfq_step_completed
rfq_file_uploaded
rfq_submitted
contact_submitted
brochure_downloaded
email_clicked
phone_clicked
portal_login
quote_viewed
```

## 31.2 Lead attribution

Persist:

- first-touch UTM;
- last-touch UTM;
- landing page;
- referrer;
- campaign;
- organic keyword/source where available;
- AI/referral source string where observable.

## 31.3 Business dashboard

Top-level:

- sessions are secondary;
- qualified RFQs are primary;
- pipeline value;
- RFQ-to-order;
- source-to-RFQ;
- market-to-RFQ;
- product-to-RFQ;
- gross margin/customer.

---

# 32. PERFORMANCE & ACCESSIBILITY

Targets:

- Lighthouse performance >= 90 on key pages under realistic conditions;
- accessibility >= 95 target;
- WCAG 2.2 AA principles;
- keyboard navigation;
- visible focus;
- semantic landmarks;
- alt text;
- adequate contrast;
- no layout shift from images;
- optimized fonts;
- responsive images;
- mobile-first RFQ.

---

# 33. EMAIL SYSTEM

Templates:

1. RFQ confirmation
2. Request additional information
3. RFQ assigned internally
4. Quote ready
5. Quote follow-up
6. Sample request/update
7. Contact form confirmation
8. Customer portal invitation
9. Password reset/security alert

Email domain authentication:

- SPF
- DKIM
- DMARC

Transactional email separated from bulk marketing domain/subdomain if needed.

---

# 34. SEO CONTENT + SALES FLYWHEEL

```text
Market Data
    ↓
Useful Analysis
    ↓
Search / AI Discovery
    ↓
Buyer Visit
    ↓
Tool / Technical Content
    ↓
RFQ
    ↓
Real Buyer Questions
    ↓
New Technical Content
    ↓
More Search Authority
```

Content must be informed by actual RFQ questions over time.

---

# 35. DELIVERY ROADMAP

## PHASE 0 - DISCOVERY & FACTORY AUDIT (1-2 weeks)

Deliverables:

- confirmed legal/company data;
- factory capability matrix;
- real machinery list;
- certifications;
- actual export countries;
- approved photo/video library;
- product taxonomy;
- domain/DNS decision;
- infrastructure decision;
- analytics accounts.

**Gate:** Do not publish unverified production claims before this phase.

## PHASE 1 - MVP WEBSITE + RFQ + ADMIN CORE (4-6 weeks)

Build:

- brand implementation;
- homepage;
- products;
- capabilities;
- industries;
- factory/quality/about/contact;
- insights CMS;
- RFQ builder + secure file upload;
- lead capture;
- admin dashboard;
- products/capability management;
- basic CRM;
- SEO foundation;
- analytics;
- weight calculator;
- English content framework.

Launch target: technically complete and indexable.

## PHASE 2 - MARKET INTELLIGENCE + GEO + BUYER CRM (4-6 weeks)

Build:

- market pages for Canada, Japan, Korea, Germany, UAE;
- tariffs/trade-measures DB;
- import duty checker;
- buyer database;
- qualification scoring;
- sales activity pipeline;
- source/version management;
- first 20 cornerstone articles;
- AI-assisted buyer research;
- localized Japanese/German pilot pages.

## PHASE 3 - QUOTATION + PORTAL + AUTOMATION (6-8 weeks)

Build:

- quote/costing engine;
- approval flow;
- customer portal;
- data room;
- RFQ AI parser;
- sample/order status;
- document management;
- advanced analytics;
- email workflow.

## PHASE 4 - SCALE / MOAT (ongoing)

- 500-2,000 qualified buyer accounts;
- additional markets/languages;
- CBAM/carbon passport;
- CRM automation;
- ERP/MES integration if justified;
- advanced CAD/DFM assistance;
- product configurators;
- partner/supplier portal.

---

# 36. SPRINT PLAN FOR DEVELOPMENT TEAM

## Sprint 0 - Foundation

- monorepo;
- CI/CD;
- environments dev/staging/prod;
- database;
- auth/RBAC;
- design tokens;
- component library;
- observability.

## Sprint 1 - Public shell

- header/footer;
- homepage;
- product listing/detail framework;
- capability listing/detail;
- responsive behavior;
- SEO primitives.

## Sprint 2 - CMS/data

- admin CMS;
- products;
- capabilities;
- industries;
- insights;
- media.

## Sprint 3 - RFQ

- multi-step form;
- file upload;
- malware scan;
- emails;
- lead/RFQ admin;
- audit.

## Sprint 4 - CRM + analytics

- companies/contacts;
- lead pipeline;
- attribution;
- dashboard;
- weight calculator.

## Sprint 5 - SEO launch hardening

- structured data;
- sitemap;
- redirects;
- CWV;
- accessibility;
- security review;
- staging QA;
- production release.

---

# 37. ACCEPTANCE CRITERIA - MVP

## 37.1 Brand/UI

- exact approved two-L logo applied;
- approved slogan;
- navy/blue/aluminium visual system;
- responsive desktop/tablet/mobile;
- no visual overflow;
- component consistency;
- correct dark/light logo usage.

## 37.2 Public website

- all core pages available;
- CMS-driven content;
- no placeholder lorem ipsum;
- no fake statistics;
- CTA works everywhere;
- proper 404 and empty states.

## 37.3 RFQ

- multi-step flow works;
- validation works;
- upload supported formats;
- private file storage;
- confirmation email;
- admin sees RFQ;
- status changes logged;
- duplicate-submit protection.

## 37.4 SEO

- indexable SSR/SSG HTML;
- unique title/meta;
- sitemap/robots;
- canonical;
- structured data valid;
- no critical orphan page;
- no accidental `noindex` on production.

## 37.5 Security

- RBAC enforced;
- admin MFA available;
- file scanning;
- rate limit;
- secrets not committed;
- dependency scan;
- backup tested;
- audit log working.

## 37.6 Performance

- key pages meet agreed Core Web Vitals target;
- images optimized;
- no major CLS;
- mobile RFQ usable on average devices.

---

# 38. TEST PLAN

## Unit

- scoring logic;
- calculators;
- validation;
- tariff selection logic;
- permissions.

## Integration

- RFQ -> DB -> files -> email -> admin;
- CMS publish -> public render;
- quote workflow;
- analytics events.

## E2E

Use Playwright or equivalent:

1. buyer visits product -> RFQ -> upload -> submit;
2. sales logs in -> qualifies RFQ;
3. editor publishes article;
4. admin updates tariff data;
5. unauthorized user cannot access private files.

## Security

- OWASP baseline;
- upload fuzzing;
- auth/session tests;
- horizontal privilege test;
- URL guessing test;
- rate-limit test.

## SEO QA

- crawl staging;
- duplicate titles;
- broken links;
- canonical;
- structured data;
- sitemap coverage;
- robots;
- redirects.

---

# 39. DEVOPS & ENVIRONMENTS

Environments:

- local
- development
- staging
- production

Deployment requirements:

- automated migrations with rollback plan;
- preview deployments for frontend PRs;
- staging behind auth/noindex;
- production backup;
- database PITR if budget permits;
- object storage versioning/lifecycle;
- separate prod credentials;
- monitoring/alerts;
- WAF/bot protection.

---

# 40. FACTORY CAPABILITY MATRIX - REQUIRED INPUT FORM

Before real copy is finalized, collect:

| Field | Required |
|---|---|
| Extrusion press count | Yes |
| Press tonnage | Yes |
| Max CCD/profile envelope | Yes |
| Max kg/m | Yes |
| Max/min length | Yes |
| Alloy list | Yes |
| Temper list | Yes |
| T5/T6 process | Yes |
| Anodizing capacity | Yes |
| Powder coating capacity | Yes |
| PVDF/wood grain | If available |
| CNC machine count | Yes |
| CNC axes | Yes |
| Cutting tolerance | Yes |
| Extrusion tolerance | Yes |
| Inspection equipment | Yes |
| Annual capacity | Yes |
| Export spare capacity | Yes |
| Certifications | Yes |
| Packaging capability | Yes |
| Major export markets | Yes |
| Carbon/energy data | Phase 2 |

Unknown fields must remain hidden or marked internally `UNVERIFIED`.

---

# 41. DESIGN DELIVERABLES REQUIRED FROM UI/UX

Figma (or equivalent) must include:

1. Design tokens
2. Typography
3. Color
4. Grid
5. Header states
6. Footer
7. Buttons
8. Form controls
9. Cards
10. Tables
11. Badges/tags
12. Modals
13. Upload component
14. File cards
15. Data visualizations
16. Empty/error/loading states
17. Homepage desktop/mobile
18. Product listing/detail
19. Capability detail
20. Industry detail
21. Market detail
22. Insights listing/article
23. Tool/calculator
24. RFQ flow
25. Contact
26. Admin dashboard
27. CRM table/detail
28. RFQ admin detail
29. Login/MFA
30. Customer portal later.

---

# 42. COPY STYLE & BRAND VOICE

Voice:

- technical;
- concise;
- confident but evidence-based;
- global;
- helpful;
- professional;
- not boastful;
- not “cheap supplier” language.

Preferred:

> Engineering support from profile concept to finished component.

Avoid:

> We are the leading best aluminium factory with the cheapest price and highest quality.

Preferred CTA language:

- Request a Quote
- Upload Your Drawing
- Talk to an Engineer
- Explore Capabilities
- View Technical Guide

---

# 43. LAUNCH CONTENT MINIMUM

Before indexing:

- homepage;
- all 6 product category pages;
- minimum 6 capability pages;
- 5 industry pages;
- factory;
- quality;
- sustainability;
- about;
- contact;
- RFQ;
- 8-10 technical insights;
- privacy/terms/cookies;
- English copy fully reviewed.

Market pages can launch after source verification.

---

# 44. BUSINESS KPI TARGET FRAMEWORK

Year-1 funnel reference (adjust after real baseline):

```text
2,000 target companies researched
800 ICP-qualified
500 contacted
150 responses
50 technical discussions
30 RFQs
15 sample opportunities
8 trial orders
3-5 recurring accounts
```

Website KPI target hierarchy:

1. qualified RFQs;
2. drawings uploaded;
3. qualified leads;
4. engineering conversations;
5. quote value;
6. order conversion;
7. organic/AI visibility;
8. traffic.

Traffic is not the primary success metric.

---

# 45. RISK REGISTER

| Risk | Impact | Mitigation |
|---|---|---|
| Publishing unverified factory capability | High | capability verification workflow |
| Incorrect tariff/trade remedy | High | source/date/reviewer + disclaimer |
| Thin AI SEO content | High | human review + quality gate |
| RFQ drawing leak | Critical | private storage + RBAC + signed URLs |
| Fake/stock factory imagery | High | approved media library |
| Too many markets too early | Medium | prioritize 5 initial markets |
| Overbuilding portal before leads | Medium | phased roadmap |
| CRM spam automation | High | human approval + sending limits |
| Domain/brand inconsistency | Medium | entity governance |
| Poor mobile RFQ | High | mobile-first testing |
| Vendor lock-in | Medium | standard Postgres/S3 architecture |
| SEO migration issues | Medium | URL governance + redirect map |

---

# 46. DEFINITION OF DONE

A feature is Done only when:

- code reviewed;
- tests passed;
- responsive QA passed;
- accessibility checked;
- logging/error handling implemented;
- permissions tested;
- analytics event added where relevant;
- documentation updated;
- no secret/hard-coded production data;
- staging approved;
- acceptance criteria met.

---

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
