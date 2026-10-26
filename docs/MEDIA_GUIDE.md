# LELOI METAL — QUY TRÌNH ĐĂNG ẢNH

**Nguyên tắc:** mỗi vị trí ảnh trên site có **một đường dẫn và một tên file cố định**.
Bỏ file đúng tên vào đúng thư mục → site tự nhận. Không cần sửa code.

---

## 1. Quy trình 4 bước

### Bước 1 — Xem vị trí nào còn thiếu ảnh

```bash
npx tsx scripts/check-media.ts
```

Kết quả liệt kê từng vị trí: `✔` đã có · `✖` thiếu và **hiện placeholder cho khách nhìn thấy** · `·` thiếu nhưng không gấp.

### Bước 2 — Chuẩn bị file đúng chuẩn

| Yêu cầu | Giá trị |
|---|---|
| Định dạng | **`.webp`** (đổi từ JPG/PNG trước khi bỏ vào) |
| Kích thước | **Bằng hoặc lớn hơn** số ghi trong bảng. Không được nhỏ hơn |
| Dung lượng | Dưới **~400 KB** mỗi file sau khi đổi sang WebP |
| Tên file | **Đúng từng ký tự** như bảng. Sai tên = site không nhận |

Đổi sang WebP (nếu có ImageMagick):

```bash
magick input.jpg -resize 2400x -quality 82 home-hero.webp
```

Hoặc dùng [squoosh.app](https://squoosh.app) — kéo ảnh vào, chọn WebP, quality 80–85, tải về.

### Bước 3 — Copy file vào thư mục

Mỗi thư mục đều có sẵn `README.md` ghi rõ cần file nào:

```
apps/web/public/media/site/
├── hero/            ← 2 ảnh quan trọng nhất (trang chủ)
├── divisions/       ← 6 ảnh cho 6 dòng sản phẩm
├── capabilities/    ← 6 ảnh cho 6 công đoạn sản xuất
├── factory/         ← 3 ảnh nhà máy thật
└── og/              ← 1 ảnh chia sẻ mạng xã hội (tùy chọn)
```

### Bước 4 — Build lại để ảnh lên site

```bash
cd apps/web && npx next build && npx next start -p 3000
```

---

## 2. Danh sách đầy đủ 18 vị trí ảnh

### 🔴 Ưu tiên cao nhất — khách nhìn thấy placeholder nếu thiếu

| File | Kích thước | Nội dung cần chụp |
|---|---|---|
| `hero/home-hero.webp` | 2400 × 1350 | **Ảnh chủ đạo toàn site.** Nhôm định hình đang ra khỏi máy ép, hoặc chồng profile thành phẩm bắt sáng. **Lưu ý: 55% bên trái sẽ bị phủ tối và đè chữ trắng** — nên để chủ thể lệch phải. Tránh mặt người, tránh logo hãng khác |
| `hero/home-hero-detail.webp` | 1200 × 1200 | Ảnh cận cảnh vuông: mặt cắt profile nhìn thẳng, mặt khuôn đùn, hoặc macro bề mặt anodized. Cảm giác kỹ thuật, chính xác |

### 🟡 6 dòng sản phẩm (trang chủ + `/products`)

| File | Kích thước | Nội dung cần chụp |
|---|---|---|
| `divisions/custom-extrusions.webp` | 1200 × 900 | Nhiều loại mặt cắt: đặc, rỗng, nhiều khoang. Mill finish là đẹp nhất |
| `divisions/architectural.webp` | 1200 × 900 | Công trình hoàn thiện: curtain wall, cửa, lam. **Công trình thật mạnh hơn render nhiều** |
| `divisions/industrial-profiles.webp` | 1200 × 900 | Thanh T-slot đã lắp thành khung máy, thấy rõ rãnh và khớp nối |
| `divisions/solar.webp` | 1200 × 900 | Khung pin mặt trời hoặc thanh ray, xếp thành phẩm hoặc đã lắp giàn |
| `divisions/thermal-management.webp` | 1200 × 900 | Tản nhiệt nhìn thẳng đầu để thấy mật độ cánh. Đen anodized trên nền sáng đẹp nhất |
| `divisions/oem-components.webp` | 1200 × 900 | Chi tiết đã gia công: khoan, taro, cắt — cảm giác "lắp được ngay" |

### 🟡 6 công đoạn sản xuất (`/capabilities/*`)

| File | Kích thước | Nội dung cần chụp |
|---|---|---|
| `capabilities/aluminium-extrusion.webp` | 1600 × 1067 | Máy ép đang chạy, nhôm ra bàn con lăn |
| `capabilities/cnc-machining.webp` | 1600 × 1067 | Máy CNC đang cắt profile, thấy phoi và dung dịch |
| `capabilities/anodizing.webp` | 1600 × 1067 | Dây chuyền anodizing, profile treo giá vào/ra bể |
| `capabilities/powder-coating.webp` | 1600 × 1067 | Lò sơn, profile vào lò sấy; hoặc bảng màu RAL |
| `capabilities/precision-cutting.webp` | 1600 × 1067 | Máy cắt góc đang cắt; hoặc bộ chi tiết đã cắt, dán nhãn |
| `capabilities/quality-control.webp` | 1600 × 1067 | Bàn QC: máy chiếu biên dạng, máy quang phổ, máy đo độ cứng |

### 🟢 Ảnh nhà máy — đóng GAP-07 trong `docs/GAPS.md`

| File | Kích thước | Nội dung cần chụp |
|---|---|---|
| `factory/plant-exterior.webp` | 2000 × 1125 | Toàn cảnh nhà máy Hưng Yên từ ngoài, ban ngày |
| `factory/plant-floor.webp` | 2000 × 1125 | Toàn cảnh xưởng sản xuất trong một khung hình |
| `factory/export-packing.webp` | 2000 × 1125 | Đóng kiện xuất khẩu, pallet hun trùng, hoặc đang đóng container. **Tín hiệu tin cậy rất mạnh với buyer nước ngoài** |

### ⚪ Tùy chọn

| File | Kích thước | Nội dung |
|---|---|---|
| `og/og-default.webp` | 1200 × 630 | Ảnh chia sẻ Facebook/LinkedIn. **Không cần** nếu hài lòng với ảnh thương hiệu tự sinh |

---

## 3. Điều gì xảy ra nếu chưa có ảnh

Site **không vỡ**. Vị trí thiếu ảnh hiện một khung nét đứt ghi đúng đường dẫn và kích thước cần:

```
        🖼
   IMAGE NOT SUPPLIED YET
   public/media/site/hero/home-hero.webp
   2400 × 1350 px (16:9) · WebP
```

Nhờ vậy ai nhìn vào trang cũng biết cần bỏ file nào vào đâu.

---

## 4. Ba điều tuyệt đối tránh

1. **Không dùng ảnh lấy trên mạng.** Ảnh stock của nhà máy Trung Quốc là thứ buyer nhận ra ngay, và có rủi ro bản quyền. Ảnh chụp bằng điện thoại tại xưởng thật còn tốt hơn ảnh stock đẹp.
2. **Không đăng bản vẽ của khách hàng** làm ảnh public — vi phạm NDA đã cam kết ở `/legal/privacy`.
3. **Không upload file trên 1 MB.** Ảnh nặng làm tụt Core Web Vitals, ảnh hưởng trực tiếp thứ hạng Google.

---

## 5. Khi cần thêm vị trí ảnh mới

Sửa `apps/web/src/data/media-manifest.ts`, thêm một khối `MediaSlot`, rồi chạy:

```bash
npx tsx scripts/check-media.ts --readme
```

README trong các thư mục sẽ tự cập nhật theo.
