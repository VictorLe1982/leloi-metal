# LELOI METAL - BUSINESS INPUTS & AUDIT GAPS (TÀI LIỆU KIỂM TOÁN THIẾU SÓT ĐẦU VÀO)

**Document Version:** 1.0  
**Date:** September 2026  
**Status:** ACTION REQUIRED FROM BUSINESS TEAM  
**Project:** LELOI METAL B2B Aluminium Export Platform (`leloimetal.com`)  
**Parent Brand:** LELOI EXIM GLOBAL (`leloiglobal.com`)  

---

## 1. MỤC ĐÍCH TÀI LIỆU

Theo **Quy tắc Bất khả xâm phạm số 1 & 2** của `LELOI_METAL_MASTER_BLUEPRINT_V1.md`:
> *"Tuyệt đối không công bố công suất nhà máy ảo, chứng chỉ ảo, khách hàng ảo, thị trường ảo hoặc các tuyên bố kỹ thuật chưa kiểm chứng. Mọi trường thông tin chưa được xác thực phải được ẩn hoàn toàn khỏi giao diện công khai (Public UI) và đánh dấu UNVERIFIED trong Admin."*

Tài liệu này liệt kê chi tiết các khoảng trống dữ liệu nghiệp vụ thực tế cần nhóm lãnh đạo và quản lý sản xuất của LELOI EXIM GLOBAL cung cấp để chuyển trạng thái dữ liệu từ `UNVERIFIED` sang `VERIFIED`.

---

## 2. BẢNG KIỂM TOÁN CÁC HẠNG MỤC CÒN THIẾU (GAPS MATRIX)

| Mã | Hạng mục | Dữ liệu cụ thể cần cung cấp | Trạng thái hiện tại | Mức độ ưu tiên | Giải pháp kỹ thuật tạm thời (Phase 1) |
|---|---|---|---|---|---|
| **GAP-01** | **Thông số Lực ép & Máy đùn** | ✅ **ĐÃ CÓ (18/09/2026):** 1× máy ép 5 inch, 1× máy ép 6 inch, 1× lò hoá già.<br>⏳ **CÒN THIẾU:** Lực ép theo tấn (600T/1000T/1800T...), đường kính bao lớn nhất (CCD mm), khối lượng mét tối đa (kg/m), chiều dài thanh đùn tối đa. | `PARTIALLY_VERIFIED` | **P1** | Đã công bố số lượng máy và cỡ billet container (5"/6") trên `/capabilities` và `/capabilities/aluminium-extrusion`. Lực ép tấn và CCD **vẫn ẩn** cho tới khi có số liệu. |
| **GAP-02** | **Công suất Nhà máy (Tấn/Năm)** | ✅ **ĐÃ CÓ:** Mạng lưới 4 nhà máy liên kết, tổng công suất >100.000 tấn/năm (công bố ẩn danh, không nêu tên đối tác).<br>⏳ **CÒN THIẾU:** Công suất riêng của nhà máy Hưng Yên (tấn/năm), spare export capacity. | `PARTIALLY_VERIFIED` | **P1** | Trust Strip trang chủ hiển thị "100,000+ Tonnes/Year Affiliated Capacity". Công suất nhà máy sở hữu **vẫn ẩn**. |
| **GAP-03** | **Danh mục Máy CNC & Cơ khí** | ✅ **ĐÃ CÓ:** 4× máy CNC gia công cắt ghép.<br>⏳ **CÒN THIẾU:** Số trục (3/4/5-axis), chiều dài bàn máy tối đa (mm). | `PARTIALLY_VERIFIED` | **P1** | Đã công bố số lượng 4 máy. Số trục và chiều dài bàn máy **vẫn ẩn**; dung sai công bố theo ISO 2768. |
| **GAP-04** | **Năng lực Xử lý Bề mặt** | ✅ **ĐÃ CÓ:** 2× lò sơn tĩnh điện tiêu chuẩn Đức, 1× lò phủ phim vân gỗ.<br>⏳ **CÒN THIẾU:** Sản lượng anodizing m²/ngày, micron tối đa đã kiểm chứng, xác nhận AAMA 2604/2605 bằng văn bản. | `PARTIALLY_VERIFIED` | **P1** | Đã công bố số dây chuyền. Sản lượng/ngày và cấp AAMA **vẫn ẩn**. Xem thêm rủi ro tuyên bố AkzoNobel ở mục 4 bên dưới. |
| **GAP-05** | **Pháp lý Doanh nghiệp** | ✅ **ĐÃ CÓ (18/09/2026):** Pháp nhân LELOI EXIM GLOBAL CO., LTD; LELOI METAL là **lĩnh vực hoạt động** (business field) của pháp nhân này. Địa chỉ nhà máy: 374 Nguyen Thien Thuan, My Hao Ward, Hung Yen Province.<br>🚫 **CHỦ ĐỘNG KHÔNG CÔNG BỐ** (quyết định của ban lãnh đạo): mã số thuế, người đại diện pháp luật. | `VERIFIED` | — | Footer, `/contact`, `/about`, 3 trang `/legal/*` và Organization JSON-LD đều lấy từ SSoT `apps/web/src/data/company.ts`. |
| **GAP-06** | **Chứng chỉ Chất lượng Thực tế** | ✅ **ĐÃ CÓ:** ISO 9001:2015 (Hệ thống quản lý chất lượng).<br>⏳ **CÒN THIẾU:** Số hiệu chứng chỉ + đơn vị cấp + ngày hết hạn + bản scan PDF. ISO 14001 / IATF 16949 / Qualicoat: **chưa có**. | `PARTIALLY_VERIFIED` | **P1** | Đã hiển thị "ISO 9001:2015" trên Trust Strip, Footer, `/capabilities`, `/contact`, `/about`. Trang `/sustainability` nêu rõ **chưa có** chứng nhận môi trường và **chưa công bố chỉ số carbon**. Cần bổ sung số hiệu chứng chỉ để buyer tra cứu. |
| **GAP-07** | **Hình ảnh Nhà máy Thực tế** | - Ảnh chụp độ nét cao (>= 2400px) dây chuyền máy đùn đang hoạt động<br>- Ảnh chi tiết mặt cắt profile phôi nhôm bóng loáng<br>- Ảnh xưởng CNC gia công chi tiết tinh xảo<br>- Ảnh bể Anodizing / buồng sơn<br>- Ảnh phòng thí nghiệm QC (máy kéo nén, máy CMM, đo quang phổ)<br>- Ảnh đóng gói pallet gỗ xuất khẩu kiện hàng đi biển | `UNVERIFIED` (Hiện chỉ có 1 video sơ bộ) | **P0** | Sử dụng đồ họa kỹ thuật vector chuẩn thương hiệu LELOI METAL, icon kỹ thuật chính xác, hình ảnh phối cảnh kiến trúc nhôm tối giản chuẩn quốc tế. |
| **GAP-08** | **Dữ liệu Biểu thuế & Phòng vệ (HS 7604)** | - Bảng thuế MFN và thuế ưu đãi FTA (CPTPP, EVFTA, VKFTA...) đã được luật sư/chuyên viên logistics xác nhận đối với nhôm định hình từ Việt Nam đi Canada, Đức, Nhật, Hàn, UAE.<br>- Tình trạng điều tra chống bán phá giá (AD/CVD) hiện hữu tại từng thị trường. | `RESEARCH_REQUIRED` | **P1** | Gắn nhãn `INFORMATIONAL ONLY` kèm ngày kiểm tra, đường dẫn tra cứu hải quan chính thống và tuyên bố miễn trừ trách nhiệm pháp lý. |

---

## 3. QUY TRÌNH DUYỆT THÔNG TIN (VERIFICATION WORKFLOW)

Mỗi khi một thông tin trong bảng trên được doanh nghiệp bổ sung:
1. Chuyên viên kinh doanh hoặc kỹ sư nhập liệu vào hệ thống Admin `/admin/cms/capabilities` hoặc `/admin/markets`.
2. Đính kèm liên kết tài liệu chứng minh (`document_url` hoặc `source_url`).
3. Cán bộ thẩm định (`COMPLIANCE_REVIEWER` hoặc `SUPER_ADMIN`) rà soát và nhấn nút **Verify**.
4. Hệ thống tự động ghi nhận `verified_at` (thời điểm duyệt) và `verified_by` (ID người duyệt) vào bảng `audit_logs`.
5. Chỉ khi có cờ `verified: true`, dữ liệu mới được hiển thị trên trang chủ và các trang sản phẩm công khai.
