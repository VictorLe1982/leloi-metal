# LELOI METAL - MASTER IMPLEMENTATION PLAN

**Document Version:** 1.0  
**Date:** September 2026  
**Status:** READY FOR EXECUTION  
**Project:** LELOI METAL B2B Aluminium Export Platform (`leloimetal.com`)  
**Parent Brand:** LELOI EXIM GLOBAL (`leloiglobal.com`)  
**Slogan:** *Aluminium for a Better World*  
**Approved Identity:** Two-L profile mark, LELOI Navy `#0A2D5B`, Blue `#2F7BFF`, Grey `#9AA3AF`, Charcoal `#172033`  

---

## 1. TỔNG QUAN HỆ THỐNG & MỤC TIÊU CỐT LÕI

Hệ thống LELOI METAL được xây dựng không phải là một "website brochure giới thiệu doanh nghiệp thông thường", mà là một **Cỗ máy chuyển đổi xuất khẩu B2B hoàn chỉnh**:
- Biến lưu lượng tìm kiếm quốc tế (SEO/GEO/AI Search) thành **yêu cầu báo giá kỹ thuật đạt chuẩn (Qualified RFQs)** kèm bản vẽ CAD.
- Cung cấp hạ tầng số nội bộ phục vụ: Quản trị danh mục sản phẩm, Quản lý năng lực thiết bị nhà xưởng, Quản lý dữ liệu thị trường & biểu thuế quan, Phân loại Lead/Khách hàng, Quản lý tiến trình xử lý RFQ và báo giá.
- Đảm bảo an toàn tuyệt đối cho tài sản trí tuệ của khách hàng (bản vẽ kỹ thuật 2D/3D được bảo vệ trong private bucket có ký số).

---

## 2. BẢN ĐỒ ÁNH XẠ KIẾN TRÚC BLUEPRINT -> MONOREPO & MODULES

```text
leloi-metal/
├── apps/
│   ├── web/                     # Next.js 15 App Router (Public SSR/SSG Website, SEO, RFQ Builder, Calculators)
│   ├── admin/                   # Next.js 15 / React 19 (Internal CRM, RFQ Kanban, CMS, Market Intelligence)
│   └── api/                     # NestJS Core API (Enterprise REST API, Server RBAC, Security & Audit)
├── packages/
│   ├── ui/                      # Shared React Component Library (Two-L Logo, Brand Tokens, Form Controls, Tables)
│   ├── database/                # Prisma ORM Schema (24 Entities), Migrations, Seed Scripts
│   ├── validation/              # Zod Schemas (RFQ form, Lead, Weight Calculator, Auth, CMS DTOs)
│   ├── types/                   # Shared TypeScript Interfaces, Enums, API Contract
│   ├── seo/                     # Metadata Helpers, JSON-LD Organization/Product Generators
│   ├── analytics/               # Standardized B2B Event Tracking (rfq_submitted, calculator_used, etc.)
│   └── email/                   # Email Templates (RFQ Confirmation, Sales Assignment)
```

---

## 3. LƯỢC ĐỒ CƠ SỞ DỮ LIỆU POSTGRESQL / PRISMA (24 THỰC THỂ CHUẨN BLUEPRINT)

Lược đồ được xây dựng chặt chẽ trong `packages/database/prisma/schema.prisma`:
1. **User & Auth:** `User` với enum phân quyền `Role` (`SUPER_ADMIN`, `ADMIN`, `EXPORT_DIRECTOR`, `SALES`, `TECHNICAL_ENGINEER`, `CONTENT_EDITOR`, `COMPLIANCE_REVIEWER`, `FINANCE`, `CUSTOMER`).
2. **CRM & Lead:**
   - `Company`: Doanh nghiệp nhập khẩu đối tác (tên, quốc gia, website, quy mô).
   - `Contact`: Người liên hệ kỹ thuật/mua hàng (email xác thực, số điện thoại, chức vụ).
   - `BuyerProfile`: Hồ sơ phân loại chân dung người mua (`buyerType`: `DIST`, `OEM`, `FAB`, `SOL`, `AUT`, `THERM`, `CON`, sản lượng năm, điểm chất lượng).
   - `Lead`: Đầu mối liên hệ phát sinh từ web/công cụ (`utmSource`, `productInterest`, `status`).
   - `Activity` & `Task`: Dòng thời gian chăm sóc và công việc cần xử lý.
3. **Sản phẩm & Năng lực Sản xuất:**
   - `ProductCategory`: 6 dòng sản phẩm chủ lực.
   - `Product`: Thông số kỹ thuật thanh profile, mác hợp kim (6063, 6061, 6005A, 6082), độ cứng (T5, T6), CCD, dung sai, hình ảnh mặt cắt.
   - `FactoryCapability`: Danh mục thiết bị máy đùn, máy CNC, buồng sơn với cơ chế 4 trạng thái (`VERIFIED`, `UNVERIFIED`, `REVIEW_REQUIRED`, `EXPIRED`).
4. **Yêu cầu Báo giá & Bảo mật Bản vẽ:**
   - `Rfq`: Đơn yêu cầu báo giá đa bước với mã định danh chuyên nghiệp `RFQ-2026-XXXX`.
   - `RfqFile`: Quản lý tệp bản vẽ kỹ thuật CAD (storageKey mã hóa, mã băm SHA-256, trạng thái quét virus, kích thước, mime type).
5. **Báo giá & Dự toán (Quotations):**
   - `Quote` & `QuoteLine`: Bảng tính chiết tính giá nhôm thỏi LME, phí đùn, phí khuôn die, phí gia công CNC, phí sơn/anode, đóng gói, điều kiện Incoterms (FOB Hải Phòng/Cát Lái, CIF).
6. **Thị trường Quốc tế & Thuế quan (Market Intelligence):**
   - `Market`: Dữ liệu phân tích quốc gia trọng điểm (Canada, Nhật Bản, Hàn Quốc, Đức, Hà Lan, UAE, Saudi Arabia...).
   - `MarketStat`: Kim ngạch nhập khẩu theo mã HS, thị phần Việt Nam/Trung Quốc.
   - `TariffRate`: Thuế suất MFN, ưu đãi FTA (CPTPP, EVFTA), nguồn tra cứu và ngày thẩm định.
   - `TradeMeasure`: Biện pháp phòng vệ (AD, CVD, CBAM Carbon).
   - `ContentSource`: Nguồn trích dẫn dữ liệu minh bạch.
7. **Nội dung & Kiểm toán:**
   - `ContentItem`: Bài viết chuyên môn DFM, hướng dẫn kỹ thuật, so sánh mác nhôm.
   - `AuditLog`: Bản ghi bất biến lưu vết mọi lượt truy cập/sửa đổi nhạy cảm.

---

## 4. BẢN ĐỒ ROUTES & CHỨC NĂNG

### 4.1 Giao diện Công khai (Public Web - Next.js App Router)
- `/`: Trang chủ theo chuẩn Master Blueprint:
  - Hero: Slogan "Aluminium for a Better World", nhận diện xuất khẩu nhôm chính xác từ Việt Nam, nút CTA kép "Request a Quote" / "Upload Your Drawing".
  - Trust Strip: Chỉ số năng lực thực tế lấy từ CMS/DB (ẩn các thông số chưa xác thực).
  - 6 Giải pháp Sản phẩm: Custom Extrusions, Industrial Profiles, Solar Profiles, Architectural Systems, Heat Sinks, OEM Components.
  - Năng lực Sản xuất: Đùn ép, Gia công CNC, Xử lý bề mặt, Lắp ráp, Kiểm định chất lượng.
  - Ứng dụng Công nghiệp: Tự động hóa, Năng lượng tái tạo, Điện tử, Xây dựng facade, Giao thông.
  - Băng chuyển đổi Kỹ thuật (DFM CTA): Gửi bản vẽ STEP, DWG, DXF, PDF nhận phản hồi tư vấn DFM.
  - Phát triển Bền vững: Lộ trình kiểm kê carbon, nhôm tái chế và chuẩn bị sẵn sàng cho cơ chế CBAM.
  - Bài viết chuyên môn & Form chuyển đổi cuối trang.
- `/products`: Danh mục sản phẩm xuất khẩu.
- `/products/[slug]`: Trang chi tiết sản phẩm chuẩn kỹ thuật B2B (bảng hợp kim, độ cứng, dung sai, hình ảnh mặt cắt, nút gửi bản vẽ).
- `/capabilities/[slug]`: Chi tiết năng lực kỹ thuật nhà xưởng (chỉ hiển thị thông số đã `VERIFIED`).
- `/industries/[slug]`: Giải pháp chuyên sâu theo ngành công nghiệp.
- `/tools/aluminium-weight-calculator`: Công cụ tính toán trọng lượng nhôm định hình trực quan (thanh đặc, ống tròn, hộp, V, U, T...), tính ra kg/m, kg/thanh, tấn và nút gửi bản vẽ.
- `/rfq`: Trình tạo yêu cầu báo giá 5 bước bảo mật cao kèm module kéo thả tệp bản vẽ CAD.
- `/about`, `/factory`, `/quality`, `/sustainability`, `/contact`: Các trang cam kết chất lượng chuẩn quốc tế.
- `/legal/privacy`, `/legal/terms`, `/legal/cookie-policy`: Chính sách pháp lý minh bạch.

### 4.2 Giao diện Quản trị (Admin Back-Office)
- `/admin/login`: Đăng nhập phân quyền bảo mật.
- `/admin/dashboard`: Thống kê tổng hợp số lượng RFQ, Lead, phân bổ địa lý khách hàng, cảnh báo dữ liệu hết hạn.
- `/admin/rfqs`: Danh sách quản lý tiến trình xử lý RFQ, sinh link tải bản vẽ an toàn có thời hạn.
- `/admin/leads`: Quản lý danh sách đầu mối liên hệ từ công cụ tính trọng lượng và form web.
- `/admin/cms/products`: Quản lý danh mục sản phẩm và thông số kỹ thuật.
- `/admin/cms/capabilities`: Quản trị danh mục máy móc thiết bị và cấp duyệt `VERIFIED`.
- `/admin/audit-logs`: Nhật ký kiểm toán bảo mật.

---

## 5. KẾ HOẠCH PHÂN KỲ THỰC HIỆN (SPRINT ROADMAP)

### Sprint 0: Nền tảng Monorepo, CSDL & Design System (Đang triển khai)
- Khởi tạo monorepo `pnpm` + `Turborepo`.
- Thiết lập thư viện `packages/ui` với bộ Design Tokens LELOI METAL và Logo Two-L chuẩn SVG.
- Xây dựng Schema Prisma 24 thực thể, tạo migrations và seeder dữ liệu danh mục ban đầu.
- Xây dựng API NestJS lõi kèm RBAC Guard và tài liệu Swagger.

### Sprint 1: Khung Web Công Khai, Trang Chủ & Năng Lực Cốt Lõi
- Xây dựng Header, Navigation, Footer chuẩn quốc tế.
- Phát triển Trang chủ (Homepage) hoàn chỉnh theo đúng cấu trúc Blueprint.
- Phát triển các trang danh mục `/products`, `/capabilities`, `/industries`.

### Sprint 2: Trình Tạo RFQ Bảo Mật & Tải Bản Vẽ CAD
- Xây dựng form RFQ 5 bước (Công ty -> Sản phẩm -> Gia công -> Tải tệp -> Điều kiện thương mại).
- Xây dựng module tiếp nhận tệp CAD an toàn, kiểm tra MIME binary magic byte, lưu trữ Private Storage và cấp phát mã số `RFQ-2026-XXXX`.
- Tạo giao diện Admin xem chi tiết RFQ và quản lý trạng thái.

### Sprint 3: Công Cụ Kỹ Thuật (Aluminium Weight Calculator) & CRM Khách Hàng
- Phát triển công cụ tính trọng lượng thanh nhôm đa hình học (kg/m, kg/cây, tấn).
- Xây dựng module Lead capture và phân loại người mua (Buyer Profile).

### Sprint 4: Nền Tảng SEO/GEO & Tối Ưu Hiệu Năng
- Triển khai Metadata động, OpenGraph, Breadcrumbs, Sitemap.xml, Robots.txt.
- Tạo cấu trúc dữ liệu JSON-LD Schema (Organization, Product, Service).
- Tối ưu Core Web Vitals (Lighthouse >= 90).

### Sprint 5: Kiểm Thử Tự Động, Đánh Giá An Ninh & Bàn Giao Giai Đoạn 1
- Chạy toàn bộ Unit/Integration tests cho logic tính toán và quy trình RFQ.
- Lập báo cáo kiểm toán bảo mật `SECURITY_AUDIT.md` và hướng dẫn vận hành.
