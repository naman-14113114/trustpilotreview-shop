import os
import shutil
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

REPO_ROOT = Path(r"e:\1st YEAR DTU\New folder\trustpilotreview-shop")
SITE_PUBLIC_DIR = REPO_ROOT / "apps" / "site" / "public"
FLOSSER_DIR = SITE_PUBLIC_DIR / "img" / "water-flossers"
ROOT_FLOSSER_DIR = REPO_ROOT / "img" / "water-flossers"
LOCAL_MIROOOO_GALLERY = Path(r"E:\1st YEAR DTU\New folder\miroooo\apps\uk\public\assets_ref\flosser\gallery")

# Ensure target directories exist
FLOSSER_DIR.mkdir(parents=True, exist_ok=True)
ROOT_FLOSSER_DIR.mkdir(parents=True, exist_ok=True)

def generate_clean_assets():
    print("Preparing clean standalone assets for all 5 products...")

    # 1. Miroooo Assets
    shutil.copy2(LOCAL_MIROOOO_GALLERY / "miroooo-water-flosser-black-white-duo.webp", FLOSSER_DIR / "miroooo-water-flosser-duo-black-white.webp")
    shutil.copy2(LOCAL_MIROOOO_GALLERY / "miroooo-water-flosser-black-complete-set.webp", FLOSSER_DIR / "miroooo-water-flosser-what-is-included-package.webp")
    shutil.copy2(LOCAL_MIROOOO_GALLERY / "miroooo-water-flosser-black-7-precision-nozzles.webp", FLOSSER_DIR / "miroooo-water-flosser-7-precision-nozzles-gift.webp")
    shutil.copy2(SITE_PUBLIC_DIR / "img" / "toothbrushes" / "miroooo-digital-gift-card.webp", FLOSSER_DIR / "miroooo-digital-gift-card.webp")
    shutil.copy2(SITE_PUBLIC_DIR / "img" / "toothbrushes" / "dr-olivia.webp", FLOSSER_DIR / "dr-olivia.webp")

    # #1 Miroooo Hero Floating Banner Card (aspect 696 / 1087, full body with elegant padding)
    src_m = Image.open(LOCAL_MIROOOO_GALLERY / "miroooo-water-flosser-black-style.webp").convert("RGBA")
    TARGET_W, TARGET_H = 696, 1087
    bg_color = (230, 230, 230, 255) # matches #e6e6e6
    scale = 960.0 / float(src_m.size[1])
    w = int(round(src_m.size[0] * scale))
    h = int(round(src_m.size[1] * scale))
    resized_m = src_m.resize((w, h), Image.Resampling.LANCZOS)
    hero_card = Image.new("RGBA", (TARGET_W, TARGET_H), bg_color)
    hero_card.paste(resized_m, ((TARGET_W - w) // 2, (TARGET_H - h) // 2), resized_m)
    hero_card.convert("RGB").save(FLOSSER_DIR / "miroooo-water-flosser-hero-banner.webp", "WEBP", quality=95)
    print("Saved miroooo-water-flosser-hero-banner.webp")

    # #1 Miroooo Comparison Table Unit (Transparent / White BG)
    # Crop bounding box of the unit and save as clean PNG
    bbox_m = src_m.getbbox()
    if bbox_m:
        unit_m = src_m.crop(bbox_m)
    else:
        unit_m = src_m
    unit_m.save(FLOSSER_DIR / "miroooo-water-flosser-comparison.png", "PNG")
    print("Saved miroooo-water-flosser-comparison.png")

    # #2 Oral-B AquaCare 6 Pro-Expert: Standalone clean handle on transparent background
    if not (FLOSSER_DIR / "oral-b-aquacare-pro-expert-comparison.png").exists():
        if (FLOSSER_DIR / "oralb_clean_handle.png").exists():
            shutil.copy2(FLOSSER_DIR / "oralb_clean_handle.png", FLOSSER_DIR / "oral-b-aquacare-pro-expert-comparison.png")
    print("Verified oral-b-aquacare-pro-expert-comparison.png")

    # #3 Waterpik Cordless Advanced: Standalone clean handle on transparent background
    if not (FLOSSER_DIR / "waterpik-cordless-advanced-comparison.png").exists():
        if (FLOSSER_DIR / "waterpik_clean_handle.png").exists():
            shutil.copy2(FLOSSER_DIR / "waterpik_clean_handle.png", FLOSSER_DIR / "waterpik-cordless-advanced-comparison.png")
    print("Verified waterpik-cordless-advanced-comparison.png")

    # #4 Philips Cordless Power Flosser 3000: Standalone clean handle on transparent background
    if not (FLOSSER_DIR / "philips-power-flosser-3000-comparison.png").exists():
        if (FLOSSER_DIR / "philips_0387f1.jpg").exists():
            im_philips = Image.open(FLOSSER_DIR / "philips_0387f1.jpg").convert("RGB")
            bbox_p = Image.open(FLOSSER_DIR / "philips_0387f1.jpg").convert("L")
            inv = Image.eval(bbox_p, lambda x: 255 - x)
            crop_box = inv.getbbox()
            p_crop = im_philips.crop(crop_box) if crop_box else im_philips
            p_crop.save(FLOSSER_DIR / "philips-power-flosser-3000-comparison.png", "PNG")
    print("Verified philips-power-flosser-3000-comparison.png")

    # #5 Panasonic Ultrasonic EW-DJ67: Standalone clean white handle
    if not (FLOSSER_DIR / "panasonic-ew-dj67-ultrasonic-comparison.png").exists():
        if (FLOSSER_DIR / "panasonic_perfect_handle.png").exists():
            shutil.copy2(FLOSSER_DIR / "panasonic_perfect_handle.png", FLOSSER_DIR / "panasonic-ew-dj67-ultrasonic-comparison.png")
    print("Verified panasonic-ew-dj67-ultrasonic-comparison.png")

def generate_banners():
    CANVAS_W = 1536
    CANVAS_H = 430
    
    # 1. Base Canvas (Pure White)
    canvas = Image.new("RGBA", (CANVAS_W, CANVAS_H), (255, 255, 255, 255))
    
    # 2. Balanced Horizontal Container Bar Behind (height 350px)
    CONTAINER_W = 1460
    CONTAINER_H = 350
    c_x0 = (CANVAS_W - CONTAINER_W) // 2
    c_y0 = (CANVAS_H - CONTAINER_H) // 2 # 40
    c_x1 = c_x0 + CONTAINER_W
    c_y1 = c_y0 + CONTAINER_H # 390
    corner_r = 38
    
    # Container shadow
    c_shadow = Image.new("RGBA", (CANVAS_W, CANVAS_H), (0, 0, 0, 0))
    c_draw_s = ImageDraw.Draw(c_shadow)
    c_draw_s.rounded_rectangle(
        [c_x0 + 4, c_y0 + 6, c_x1 - 4, c_y1 + 12],
        radius=corner_r,
        fill=(15, 23, 42, 22)
    )
    c_shadow = c_shadow.filter(ImageFilter.GaussianBlur(14))
    canvas.alpha_composite(c_shadow)
    
    # Container body
    c_layer = Image.new("RGBA", (CANVAS_W, CANVAS_H), (0, 0, 0, 0))
    c_draw = ImageDraw.Draw(c_layer)
    c_draw.rounded_rectangle(
        [c_x0, c_y0, c_x1, c_y1],
        radius=corner_r,
        fill=(255, 255, 255, 255),
        outline=(226, 232, 240, 255),
        width=2
    )
    canvas.alpha_composite(c_layer)
    
    # 3. 4 Competitor flossers (Only clean water flosser images!)
    col_centers = [
        c_x0 + int(CONTAINER_W * 0.10), # Col 1: Oral-B
        c_x0 + int(CONTAINER_W * 0.27), # Col 2: Waterpik
        c_x0 + int(CONTAINER_W * 0.73), # Col 4: Philips
        c_x0 + int(CONTAINER_W * 0.90), # Col 5: Panasonic
    ]
    
    competitors = [
        (0, "oral-b-aquacare-pro-expert-comparison.png"),
        (1, "waterpik-cordless-advanced-comparison.png"),
        (2, "philips-power-flosser-3000-comparison.png"),
        (3, "panasonic-ew-dj67-ultrasonic-comparison.png"),
    ]
    
    flosser_target_h = 285 # slightly taller to show fine nozzles
    flosser_y_center = CANVAS_H // 2
    
    for col_idx, filename in competitors:
        img_path = FLOSSER_DIR / filename
        if img_path.exists():
            im = Image.open(img_path).convert("RGBA")
            # If image has white background instead of alpha, let's treat white as transparent or composite cleanly
            bbox = im.getbbox()
            if bbox:
                cropped = im.crop(bbox)
                scale = flosser_target_h / float(cropped.size[1])
                w = int(round(cropped.size[0] * scale))
                h = flosser_target_h
                resized = cropped.resize((w, h), Image.Resampling.LANCZOS)
                
                pos_x = col_centers[col_idx] - (w // 2)
                pos_y = flosser_y_center - (h // 2)
                canvas.alpha_composite(resized, (pos_x, pos_y))
    
    # Save 4-competitor container bar (Layer 1 in frontend)
    container_bar_webp = FLOSSER_DIR / "top-4-competitors-container-bar.webp"
    container_bar_png = FLOSSER_DIR / "top-4-competitors-container-bar.png"
    canvas.save(container_bar_png, "PNG")
    canvas.convert("RGB").save(container_bar_webp, "WEBP", quality=95)
    print(f"Generated Container Bar PNG: {container_bar_png}")
    print(f"Generated Container Bar WebP: {container_bar_webp}")

    # 4. Composite #1 Miroooo Card onto container bar for flat banner
    CARD_H = 410
    CARD_W = int(round(CARD_H * (696.0 / 1087.0))) # ~262 px
    card_x = (CANVAS_W - CARD_W) // 2 # 637
    card_y = (CANVAS_H - CARD_H) // 2 # 10
    card_r = 24

    miroooo_path = FLOSSER_DIR / "miroooo-water-flosser-hero-banner.webp"
    im_m = Image.open(miroooo_path).convert("RGB")
    im_m_resized = im_m.resize((CARD_W, CARD_H), Image.Resampling.LANCZOS)

    # Multi-layer drop shadow for floating Miroooo card
    card_shadow = Image.new("RGBA", (CANVAS_W, CANVAS_H), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(card_shadow)
    
    # Layer 1 tight shadow
    s_draw.rounded_rectangle([card_x, card_y + 6, card_x + CARD_W, card_y + CARD_H + 6], radius=card_r, fill=(15, 23, 42, 80))
    card_shadow = card_shadow.filter(ImageFilter.GaussianBlur(12))
    canvas.alpha_composite(card_shadow)
    
    # Layer 2 medium shadow
    card_shadow2 = Image.new("RGBA", (CANVAS_W, CANVAS_H), (0, 0, 0, 0))
    s_draw2 = ImageDraw.Draw(card_shadow2)
    s_draw2.rounded_rectangle([card_x, card_y + 16, card_x + CARD_W, card_y + CARD_H + 16], radius=card_r, fill=(15, 23, 42, 50))
    card_shadow2 = card_shadow2.filter(ImageFilter.GaussianBlur(26))
    canvas.alpha_composite(card_shadow2)

    # Layer 3 deep ambient shadow
    card_shadow3 = Image.new("RGBA", (CANVAS_W, CANVAS_H), (0, 0, 0, 0))
    s_draw3 = ImageDraw.Draw(card_shadow3)
    s_draw3.rounded_rectangle([card_x, card_y + 28, card_x + CARD_W, card_y + CARD_H + 28], radius=card_r, fill=(15, 23, 42, 35))
    card_shadow3 = card_shadow3.filter(ImageFilter.GaussianBlur(48))
    canvas.alpha_composite(card_shadow3)

    # Mask Miroooo card with rounded corners
    mask = Image.new("L", (CARD_W, CARD_H), 0)
    m_draw = ImageDraw.Draw(mask)
    m_draw.rounded_rectangle([0, 0, CARD_W, CARD_H], radius=card_r, fill=255)

    card_layer = Image.new("RGBA", (CANVAS_W, CANVAS_H), (0, 0, 0, 0))
    card_layer.paste(im_m_resized, (card_x, card_y), mask)

    # Card border
    border_draw = ImageDraw.Draw(card_layer)
    border_draw.rounded_rectangle([card_x, card_y, card_x + CARD_W, card_y + CARD_H], radius=card_r, outline=(255, 255, 255, 255), width=3)
    border_draw.rounded_rectangle([card_x - 1, card_y - 1, card_x + CARD_W + 1, card_y + CARD_H + 1], radius=card_r + 1, outline=(15, 23, 42, 35), width=1)

    canvas.alpha_composite(card_layer)

    # Save Top-5 composite banner
    top5_webp = FLOSSER_DIR / "top-5-water-flossers-uk.webp"
    top5_png = FLOSSER_DIR / "top-5-water-flossers-uk.png"
    canvas.save(top5_png, "PNG")
    canvas.convert("RGB").save(top5_webp, "WEBP", quality=95)
    print(f"Generated Top-5 Composite PNG: {top5_png}")
    print(f"Generated Top-5 Composite WebP: {top5_webp}")

def mirror_assets():
    print("Mirroring assets from apps/site/public/img/water-flossers to img/water-flossers...")
    for item in FLOSSER_DIR.glob("*"):
        if item.is_file() and not item.name.startswith("temp") and not item.name.startswith("philips_") and not item.name.startswith("oralb_") and not item.name.startswith("waterpik_"):
            shutil.copy2(item, ROOT_FLOSSER_DIR / item.name)
            print(f"Mirrored: {item.name}")
    print("Mirroring complete.")

if __name__ == "__main__":
    generate_clean_assets()
    generate_banners()
    mirror_assets()
