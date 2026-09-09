# LELOI METAL — CODEX PRODUCT MEDIA & CATALOG FIX V3
**Priority:** P0 / production blocking  
**Brand:** LELOI METAL — Aluminium for a Better World

## MASTER INSTRUCTION
Audit the current LELOI METAL website and replace the current catalog image-generation implementation.

The current build is NOT acceptable for production because it:
- invents simplified aluminium cross-sections;
- renders visually incorrect/duplicate profile geometry;
- bakes category labels into generated images;
- presents placeholder illustrations as product evidence;
- shows `24 verified technical products` although product specifications have not all been factory-verified;
- truncates important product names too aggressively;
- allows brand/logo rendering to become too small, distorted or inconsistent;
- creates a prototype/demo feeling instead of an international B2B manufacturing website.

**Do not patch the old image generator. Remove/disable it from the public catalog.**

## 1. SOURCE OF TRUTH FOR PRODUCT IMAGES
Public catalog media must come only from:
1. `APPROVED_LELOI_ASSET`
2. `FACTORY_OWNED_PHOTO`
3. `LICENSED_STOCK`
4. `APPROVED_CUSTOM_RENDER`

Never run generative image creation at page render time.

Create:
```text
/public/media/catalog/
```
Use the filenames in `catalog_asset_manifest.json`.

When an approved asset is missing:
- show a premium neutral placeholder;
- do not auto-generate a fake extrusion;
- do not expose the product publicly if the page would look incomplete.

## 2. REMOVE FALSE VERIFICATION CLAIM
Replace:
`Displaying 24 verified technical products`

with:
`Explore 24 aluminium product families`

Only show the word **Verified** at field/spec level when:
`verification_status === VERIFIED`.

## 3. CATALOG CARD REDESIGN
```text
[Product image 4:3]
[small category eyebrow]
Product Name — max 2 lines
Use-case description — 2–3 lines
Verified attributes — max 3 chips
----------------------------------
View Product       Request RFQ
```

Requirements:
- image 44–50% of card visual height;
- no category text baked into image;
- no decorative balance/scale icon;
- no fake blueprint background;
- no repeated extrusion drawing;
- 16–20px radius max;
- subtle border;
- hover: translateY(-2px) + light shadow;
- 3 columns desktop / 2 tablet / 1 mobile;
- use `line-clamp-2`, but reserve enough height so card rows align.

## 4. PRODUCT IMAGE STYLE
All 24 launch assets must feel like one system:
- premium industrial studio photography / photorealistic render;
- isolated aluminium object or small profile group;
- realistic mill-finish / brushed silver aluminium;
- soft white-to-light-gray background;
- subtle realistic shadow;
- 3/4 isometric view;
- high micro-detail;
- no logo, label, text, dimensions or watermark;
- no impossible extrusion geometry.

Generated render must never be presented as a real LELOI factory photo.

## 5. HEADER / LOGO FIX
Current issue: logo is compressed and navigation begins too close.

Required:
- desktop logo width approximately 180–205px;
- preserve aspect ratio;
- `object-fit: contain`;
- minimum clear space after logo: 32px;
- never distort by forcing both CSS width and height;
- use approved transparent horizontal logo;
- below ~1180px hide slogan instead of shrinking it;
- mobile uses icon mark + LELOI METAL.

Recommended main nav:
`Products | Capabilities | Industries | Markets | Insights | About`

Move `Engineering Tools` into a dropdown.

Top utility:
`Weight Calculator | Duty Checker | Vietnam Sourcing Office | sales@...`

## 6. FOOTER LOGO FIX
Use approved white transparent logo on navy.
Visible width desktop: 210–240px.
Never place tiny raster logo inside a baked dark rectangle.

## 7. FILTER UX
Keep left filter concept but:
- sticky below header;
- collapsible groups;
- active filter chips above results;
- `Clear all`;
- live results count;
- URL query params shareable;
- mobile drawer/bottom sheet;
- values must be data-backed, not copywriting-generated.

## 8. PRODUCT DETAIL PAGE
Must include:
- breadcrumb;
- 4–6 image gallery;
- product family;
- application summary;
- verified specs only;
- verified surface/fabrication options only;
- Engineering Notes;
- Related Products;
- Request RFQ;
- Upload Drawing.

RFQ receives `product_id`, `slug`, `category`, page URL.

## 9. MEDIA DATA MODEL
```text
id
product_id
asset_key
url
media_type
source_type
source_url
license
license_proof
alt_text
caption
is_primary
sort_order
approval_status
created_at
updated_at
```
`approval_status = DRAFT | REVIEW | APPROVED | REJECTED`
Front end renders only `APPROVED`.

## 10. TECHNICAL CLAIM SAFETY
Never invent:
- alloys / tempers
- tolerance
- annual capacity
- CNC axis count
- certifications
- anodizing thickness
- lead time
- MOQ
- export ports
- customer count
- countries exported
- 24-hour engineering review

If not sourced from approved internal records:
`verification_status = UNVERIFIED`
and do not render it publicly.

## 11. IMAGE PERFORMANCE
Generate:
`480w`, `768w`, `1200w`, `1600w`
in AVIF/WebP.
No layout shift. Responsive image component required.

## 12. SEO
- descriptive filenames and alt;
- SSR/SSG;
- Product + BreadcrumbList schema when applicable;
- canonical;
- no thin mass-generated pages.

## 13. ACCEPTANCE TESTS
- [ ] old runtime image generator removed/disabled
- [ ] 24 products map to approved asset keys
- [ ] no duplicated fake geometry
- [ ] no false `verified technical products` claim
- [ ] logo undistorted desktop/mobile/footer
- [ ] names readable without ugly ellipsis
- [ ] filters functional/data-driven
- [ ] product pages work
- [ ] RFQ receives product context
- [ ] missing media does not crash
- [ ] lazy-load all except LCP
- [ ] Lighthouse/accessibility regression checked
- [ ] lint/typecheck/tests pass

## 14. IMPLEMENTATION SEQUENCE
1. Audit header/footer/catalog generator/components.
2. Report files to delete/replace/reuse.
3. Commit brand/header fix.
4. Remove runtime image generation.
5. Add asset manifest + media model.
6. Rebuild ProductCard.
7. Fix filters/results state.
8. Build ProductDetail gallery.
9. Wire RFQ context.
10. Import approved 24 assets.
11. Run responsive/performance/SEO QA.
12. Provide before/after screenshots.

Do not redesign unrelated modules.
Do not change approved LELOI brand concept.
