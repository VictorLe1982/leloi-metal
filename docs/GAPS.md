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
| **GAP-01** | **Thông số Lực ép & Máy đùn** | - Số lượng dàn máy đùn ép (Press lines)<br>- Lực ép từng máy (600T, 1000T, 1800T, 2500T...)<br>- Đường kính bao lớn nhất (CCD mm)<br>- Khối lượng mét tối đa (kg/m)<br>- Chiều dài thanh đùn tối đa (mét) | `UNVERIFIED` | **P0** (Trước khi công bố trang Năng lực) | CSDL hỗ trợ đầy đủ trường thông tin; đánh dấu `UNVERIFIED`. UI ẩn các con số cụ thể, thay bằng *"Custom envelope available upon engineering review"*. |
| **GAP-02** | **Công suất Nhà máy (Tấn/Năm)** | - Tổng công suất luyện kim/đùn ép hàng năm (tấn/năm)<br>- Công suất còn khả dụng dành riêng cho xuất khẩu (spare export capacity) | `UNVERIFIED` | **P0** | Ẩn bộ đếm số tấn trên Trust Strip trang chủ và trang năng lực. Chỉ hiển thị năng lực đáp ứng theo đơn hàng OEM. |
| **GAP-03** | **Danh mục Máy CNC & Cơ khí** | - Số lượng trung tâm gia công CNC (3-axis, 4-axis, 5-axis)<br>- Chiều dài bàn máy tối đa (mm)<br>- Dung sai gia công cắt/phay/khoan (mm, ISO 2768) | `UNVERIFIED` | **P0** | UI chỉ liệt kê quy trình gia công có thể thực hiện (Cắt chính xác, Phay CNC, Taro ren, Đột dập), không đưa số lượng máy cụ thể. |
| **GAP-04** | **Năng lực Xử lý Bề mặt** | - Dây chuyền Anodizing (Micron tối đa, màu sắc khả dụng, sản lượng m2/ngày)<br>- Dây chuyền Sơn tĩnh điện Powder Coating (Tiêu chuẩn AAMA 2603/2604/2605, hãng sơn AkzoNobel/Tiger...)<br>- Xử lý PVDF / Vân gỗ (nếu có) | `UNVERIFIED` | **P1** | Đưa các tùy chọn bề mặt vào form RFQ dưới dạng checkbox yêu cầu khách hàng, không cam kết thông số dây chuyền cố định. |
| **GAP-05** | **Pháp lý Doanh nghiệp** | - Tên công ty đăng ký kinh doanh chính thức (Legal Entity Name)<br>- Mã số thuế doanh nghiệp (Tax Code / VAT)<br>- Địa chỉ trụ sở chính và địa chỉ nhà xưởng tại Việt Nam<br>- Người đại diện pháp luật & Giấy phép xuất khẩu | `UNVERIFIED` | **P0** (Trước khi ký kết thương mại) | Header/Footer hiển thị cấu trúc *"LELOI METAL - A Business Division of LELOI EXIM GLOBAL"*. Trang Terms & Privacy để placeholder chờ thông tin đăng ký chính thức. |
| **GAP-06** | **Chứng chỉ Chất lượng Thực tế** | - Bản scan PDF có hiệu lực của ISO 9001:2015<br>- ISO 14001:2015 (Môi trường)<br>- IATF 16949 (Ô tô - nếu có)<br>- Qualicoat / CE Marking / RoHS / REACH compliance | `UNVERIFIED` | **P0** | Tuyệt đối không đưa icon/logo chứng chỉ lên Trust Strip. Thay bằng tiêu đề *"Quality Management Framework"* cam kết quy trình kiểm soát chất lượng từ phôi đến thành phẩm. |
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
