# LELOI METAL - ARCHITECTURE DECISION RECORDS (ADR)

**Document Version:** 1.0  
**Date:** September 2026  
**Status:** APPROVED / IN EFFECT  
**Project:** LELOI METAL B2B Aluminium Export Platform (`leloimetal.com`)  
**Parent Brand:** LELOI EXIM GLOBAL (`leloiglobal.com`)  

---

## ADR-001: Monorepo Architecture and Package Management

- **Status:** Accepted
- **Context:** LELOI METAL requires a high-performance public marketing web app (SSR/SSG), a back-office administration and CRM web application, a robust REST/OpenAPI backend API, and shared logic (design tokens, database schemas, validation schemas, analytics event definitions, TypeScript types).
- **Decision:** Use **pnpm workspaces** combined with **Turborepo**.
  - `apps/web`: Next.js 15 (App Router, React 19, Tailwind CSS).
  - `apps/admin`: Next.js 15 / React 19 (Internal CRM, RFQ Workflow, CMS Management).
  - `apps/api`: NestJS (Express/Fastify, TypeScript, Prisma Client, JWT/RBAC).
  - `packages/ui`: Shared React design system with Tailwind CSS tokens and strict accessibility.
  - `packages/database`: Prisma schema, migrations, seed scripts, client wrapper.
  - `packages/validation`: Zod schemas shared across web forms and API DTOs.
  - `packages/types`: Shared domain interfaces, enums, API request/response types.
  - `packages/config`: Shared ESLint, Prettier, TypeScript, and Tailwind configurations.
- **Trade-offs & Rationale:**
  - *Pros:* Strict dependency isolation via pnpm; ultra-fast caching of builds and tests via Turborepo; single source of truth for TypeScript types and validation schemas preventing frontend-backend drift.
  - *Cons:* Initial workspace configuration overhead.
  - *Alternative Considered:* Monolithic full-stack Next.js. Rejected because background workers, file security pipelines, and enterprise CRM/RBAC operations require dedicated process lifecycles.

---

## ADR-002: Public Web Engine (Next.js App Router with SSR/SSG)

- **Status:** Accepted
- **Context:** The public platform must deliver top-tier global SEO performance, low TTFB, high Core Web Vitals (Lighthouse >= 90), valid JSON-LD structured data, and dynamic server-side rendering for data-driven product, capability, and market pages.
- **Decision:** Use **Next.js 15 App Router** with React Server Components (`RSC`), Static Site Generation (`SSG`) for evergreen pages, and Incremental Static Regeneration (`ISR`) for CMS-backed catalog pages.
- **Trade-offs & Rationale:**
  - *Pros:* Server-side rendering guarantees complete search engine indexing and AI bot discoverability (GEO/AEO). Zero client JS bundle overhead for marketing copy.
  - *Cons:* Interactive forms (RFQ builder, weight calculator) must be cleanly isolated as client islands (`"use client"`).

---

## ADR-003: Backend API Framework (NestJS + Prisma + PostgreSQL)

- **Status:** Accepted
- **Context:** The platform serves as the central nervous system for public RFQ ingest, CRM lead qualification, factory capability verification, market intelligence tracking, and strict role-based access control.
- **Decision:** Build a standalone **NestJS** backend utilizing **Prisma ORM** connecting to **PostgreSQL 16**.
- **Trade-offs & Rationale:**
  - *Pros:* NestJS provides enterprise-grade modular architecture (Dependency Injection, Guards, Interceptors, Pipes), native OpenAPI/Swagger auto-generation, clean integration with BullMQ/Redis for background jobs, and robust server-side RBAC. Prisma provides type-safe queries, migration management, and automated client generation for monorepo packages.
  - *Cons:* Prisma has slight query latency overhead on complex multi-join queries compared to raw SQL, but PostgreSQL native full-text search and Prisma extensions completely satisfy MVP through Phase 2 requirements.

---

## ADR-004: Design System, Brand Tokens & Logo Integrity

- **Status:** Accepted
- **Context:** The brand identity for LELOI METAL has been approved with a strict TWO-L geometric emblem, specific slogan ("Aluminium for a Better World"), and a defined color palette:
  - LELOI Navy: `#0A2D5B`
  - LELOI Blue: `#2F7BFF`
  - Aluminium Gray: `#9AA3AF`
  - Light Gray: `#F1F4F8`
  - White: `#FFFFFF`
  - Charcoal: `#172033`
  - Sustainability Green: `#16A34A`
  Headings must use Montserrat; body text must use Inter.
- **Decision:** 
  1. Encode all color, spacing, radius, and typography definitions as CSS variables and Tailwind design tokens in `packages/ui` and `packages/config`.
  2. Implement the approved **TWO-L** logo as pure, mathematically precise SVG components (horizontal, stacked, icon-only, dark-background, light-background).
  3. Prohibit hardcoded hex colors or arbitrary font families across all component implementations.
- **Trade-offs & Rationale:**
  - Guarantees WCAG 2.2 AA contrast compliance and prevents unauthorized brand drift (such as adding a third "L" or using generic blue/gray hues).

---

## ADR-005: Confidential RFQ Drawing Storage & Security Architecture

- **Status:** Accepted
- **Context:** RFQ engineering drawings (PDF, DWG, DXF, STEP, IGES, ZIP) represent proprietary customer intellectual property and must never be exposed publicly.
- **Decision:**
  1. Store all drawing files in a **private S3-compatible bucket** (Cloudflare R2 or AWS S3) with all public access strictly blocked at bucket policy level.
  2. Direct client-to-storage uploads via short-lived (15-minute) presigned PUT URLs generated by authenticated API endpoints.
  3. Enforce multi-layer validation:
     - MIME-type inspection via binary magic bytes sniffing, not trusting client-sent extensions.
     - Strict size ceilings (e.g. 50MB per CAD file, 100MB per archive).
     - Asynchronous antivirus scanning pipeline (ClamAV container worker).
  4. Access to files requires server-side RBAC validation (`SUPER_ADMIN`, `ADMIN`, `EXPORT_DIRECTOR`, `TECHNICAL_ENGINEER`, or assigned sales representative). All downloads use presigned GET URLs with a 5-minute TTL.
  5. Every file view, download, or share action is recorded in an immutable `audit_logs` table.

---

## ADR-006: Data Truth Enforcement & Anti-Greenwashing Safeguard

- **Status:** Accepted
- **Context:** Non-negotiable rule #1 & #2: No fake factory capacity, certifications, customers, countries, or technical claims. Unverified fields must be hidden from public UI.
- **Decision:**
  1. Implement a 4-state publication status enum on all technical specifications, factory equipment, and trade data:
     - `UNVERIFIED`: Hidden from public UI; flagged in admin with "INPUT NEEDED".
     - `REVIEW_REQUIRED`: Visible in internal staging/admin only.
     - `VERIFIED`: Published publicly with source reference, verification timestamp, and reviewer ID.
     - `EXPIRED`: Automatically hidden when freshness review window lapses (30–90 days for trade/tariffs; 365 days for technical specs).
  2. UI components must conditionally render specification badges only when verified, with fallback messaging ("Custom specifications available on review").
  3. No magic constants in components: all numbers (e.g. extrusion press capacity, alloy limits) must be fetched from the database/CMS.

---

## ADR-007: Market Intelligence & Tariff Data Architecture

- **Status:** Accepted
- **Context:** Market pages and tariff comparison tools must establish technical and regulatory authority without creating misleading or stale trade advice.
- **Decision:**
  1. Relational schema: `markets`, `market_stats`, `tariff_rates`, `trade_measures`, and `content_sources`.
  2. Every public trade/tariff statistic must be linked to a `content_sources` record containing `source_url`, `source_name`, `data_year`, and `accessed_at`.
  3. Public views must display explicit disclaimers: *"Informational purposes only; exact rates subject to formal classification, exporter origin verification, and ruling by importing customs authority."*
  4. Prevent thin programmatic country pages: only publish curated, verified tier-1/tier-2 markets (Canada, Japan, South Korea, Germany, Netherlands, UAE, Saudi Arabia).

---

## ADR-008: Authentication & Role-Based Access Control (RBAC)

- **Status:** Accepted
- **Context:** Back-office administrative access and customer portal accounts must be strictly isolated with server-side authorization.
- **Decision:**
  1. Implement stateless JWT-based authentication with secure HTTP-only cookies for web sessions, backed by refresh tokens stored in PostgreSQL/Redis.
  2. Granular server-side role hierarchy:
     - `SUPER_ADMIN`
     - `ADMIN`
     - `EXPORT_DIRECTOR`
     - `SALES`
     - `TECHNICAL_ENGINEER`
     - `CONTENT_EDITOR`
     - `COMPLIANCE_REVIEWER`
     - `FINANCE`
     - `CUSTOMER` (Phase 3 portal)
  3. Implement NestJS `@Roles()` decorator with an execution context `RolesGuard` applied globally to all `/api/admin/*` endpoints.

---

## ADR-009: Interactive Engineering Tools (Aluminium Weight Calculator)

- **Status:** Accepted
- **Context:** The public website requires interactive engineering utilities that demonstrate technical competency and convert high-intent users into drawing uploads.
- **Decision:**
  1. Build the Aluminium Weight Calculator in `packages/ui` as a reactive client island.
  2. Support primary standard extrusion geometries:
     - Solid Flat Bar / Plate
     - Solid Round Bar / Rod
     - Solid Square / Hexagonal Bar
     - Round Tube / Pipe
     - Square / Rectangular Tube
     - Equal / Unequal L-Angle
     - U-Channel / C-Profile
     - T-Profile & I-Beam
  3. Use standard aluminium density \(\rho = 2.70 \text{ g/cm}^3\) (6063) with custom alloy density override (\(2.68 - 2.85 \text{ g/cm}^3\) for 6061, 6082, 7075, 5052, 5083).
  4. Calculate: weight per meter (\(\text{kg/m}\)), weight per piece (\(\text{kg/pc}\)), total weight (\(\text{kg}\) and metric tonnes), with direct CTA: *"Need custom profile geometry? Upload drawing for instant engineering DFM & quote"*.
