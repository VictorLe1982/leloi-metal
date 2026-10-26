import os
from PIL import Image

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARCHIVE_DIR = os.path.join(BASE_DIR, 'archive', 'source-assets', 'architectural')
PUBLIC_MEDIA_DIR = os.path.join(BASE_DIR, 'apps', 'web', 'public', 'media', 'architectural')

# Ensure directories exist
for sub in ['hero', 'gallery', 'cards', 'details', 'internal-docs']:
    os.makedirs(os.path.join(PUBLIC_MEDIA_DIR, sub), exist_ok=True)
os.makedirs(ARCHIVE_DIR, exist_ok=True)

# Master source mapping
ASSETS = [
    {
        'slug': 'architectural-windows-doors-hero-01',
        'source': r'C:\Users\ADMIN\.gemini\antigravity\brain\13af39d4-7482-4c40-b027-0b63bb0558af\arch_hero_villa_1789119365996.jpg',
        'primary_ratio': '16:9',
        'type': 'HERO'
    },
    {
        'slug': 'architectural-sliding-door-gallery-01',
        'source': r'C:\Users\ADMIN\.gemini\antigravity\brain\13af39d4-7482-4c40-b027-0b63bb0558af\arch_sliding_door_1789119470876.jpg',
        'primary_ratio': '16:9',
        'type': 'GALLERY'
    },
    {
        'slug': 'architectural-casement-window-gallery-01',
        'source': r'C:\Users\ADMIN\.gemini\antigravity\brain\13af39d4-7482-4c40-b027-0b63bb0558af\arch_casement_win_1789119508159.jpg',
        'primary_ratio': '16:9',
        'type': 'GALLERY'
    },
    {
        'slug': 'architectural-curtain-wall-card-01',
        'source': os.path.join(BASE_DIR, 'scratch', 'candidates', 'curtain-wall.jpg'),
        'primary_ratio': '4:3',
        'type': 'CARD'
    },
    {
        'slug': 'architectural-louvers-card-01',
        'source': os.path.join(BASE_DIR, 'scratch', 'candidates', 'pergola_2.jpg'),
        'primary_ratio': '4:3',
        'type': 'CARD'
    },
    {
        'slug': 'architectural-cladding-card-01',
        'source': os.path.join(BASE_DIR, 'scratch', 'candidates', 'pergola.jpg'),
        'primary_ratio': '4:3',
        'type': 'CARD'
    },
    {
        'slug': 'architectural-ceiling-card-01',
        'source': os.path.join(BASE_DIR, 'scratch', 'candidates', 'ceiling_1.jpg'),
        'primary_ratio': '4:3',
        'type': 'CARD'
    },
    {
        'slug': 'architectural-pergola-card-01',
        'source': os.path.join(BASE_DIR, 'scratch', 'candidates', 'pergola_3.jpg'),
        'primary_ratio': '4:3',
        'type': 'CARD'
    },
    {
        'slug': 'architectural-bungalow-gallery-01',
        'source': os.path.join(BASE_DIR, 'scratch', 'candidates', 'bungalow.jpg'),
        'primary_ratio': '16:9',
        'type': 'GALLERY'
    },
    {
        'slug': 'architectural-railing-card-01',
        'source': os.path.join(BASE_DIR, 'scratch', 'candidates', 'terrace_balcony_2.jpg'),
        'primary_ratio': '4:3',
        'type': 'CARD'
    },
    {
        'slug': 'architectural-thermal-break-detail-01',
        'source': os.path.join(BASE_DIR, 'apps', 'web', 'public', 'media', 'catalog', '17_curtain_wall_profiles.webp'),
        'primary_ratio': '1:1',
        'type': 'DETAIL'
    },
]

def crop_to_ratio(img, target_w, target_h):
    orig_w, orig_h = img.size
    target_aspect = target_w / target_h
    orig_aspect = orig_w / orig_h

    if orig_aspect > target_aspect:
        new_w = int(orig_h * target_aspect)
        left = (orig_w - new_w) // 2
        top = 0
        right = left + new_w
        bottom = orig_h
    else:
        new_h = int(orig_w / target_aspect)
        left = 0
        top = (orig_h - new_h) // 2
        right = orig_w
        bottom = top + new_h

    cropped = img.crop((left, top, right, bottom))
    return cropped.resize((target_w, target_h), Image.Resampling.LANCZOS)

print("Starting Architectural Image Processing Pipeline...")

for asset in ASSETS:
    slug = asset['slug']
    src_path = asset['source']
    
    if not os.path.exists(src_path):
        print(f"ERROR: Source file missing: {src_path}")
        continue

    img = Image.open(src_path).convert('RGB')
    print(f"\nProcessing {slug} (Original: {img.size[0]}x{img.size[1]})...")

    # 1. Save original master PNG to archive
    master_archive_path = os.path.join(ARCHIVE_DIR, f"{slug}.png")
    img.save(master_archive_path, format="PNG")
    print(f"  [ARCHIVE] Saved master -> {master_archive_path}")

    # 2. Generate responsive variants:
    # A. Hero: 1920x1080 (16:9)
    hero_img = crop_to_ratio(img, 1920, 1080)
    hero_out = os.path.join(PUBLIC_MEDIA_DIR, 'hero', f"{slug}.webp")
    hero_img.save(hero_out, format="WEBP", quality=88, method=6)
    print(f"  [HERO] 1920x1080 -> {hero_out}")

    # B. Gallery: 1600x900 (16:9)
    gallery_img = crop_to_ratio(img, 1600, 900)
    gallery_out = os.path.join(PUBLIC_MEDIA_DIR, 'gallery', f"{slug}.webp")
    gallery_img.save(gallery_out, format="WEBP", quality=88, method=6)
    print(f"  [GALLERY] 1600x900 -> {gallery_out}")

    # C. Card: 1200x900 (4:3)
    card_img = crop_to_ratio(img, 1200, 900)
    card_out = os.path.join(PUBLIC_MEDIA_DIR, 'cards', f"{slug}.webp")
    card_img.save(card_out, format="WEBP", quality=88, method=6)
    print(f"  [CARD] 1200x900 -> {card_out}")

    # D. Detail: 1200x1200 (1:1)
    detail_img = crop_to_ratio(img, 1200, 1200)
    detail_out = os.path.join(PUBLIC_MEDIA_DIR, 'details', f"{slug}.webp")
    detail_img.save(detail_out, format="WEBP", quality=90, method=6)
    print(f"  [DETAIL] 1200x1200 -> {detail_out}")

    # E. Thumbnail: 600x450 (4:3)
    thumb_img = crop_to_ratio(img, 600, 450)
    thumb_out = os.path.join(PUBLIC_MEDIA_DIR, 'cards', f"{slug}-thumb.webp")
    thumb_img.save(thumb_out, format="WEBP", quality=85, method=6)
    print(f"  [THUMB] 600x450 -> {thumb_out}")

print("\nArchitectural Image Pipeline Completed Successfully!")
