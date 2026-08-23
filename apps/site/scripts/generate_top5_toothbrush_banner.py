import os
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

REPO_ROOT = Path(r"e:\1st YEAR DTU\New folder\trustpilotreview-shop")
TOOTHBRUSH_DIR = REPO_ROOT / "apps" / "site" / "public" / "img" / "toothbrushes"
RAW_IMAGES_DIR = Path(r"E:\1st YEAR DTU\New folder\miroooo_images\edited with miroooo")

def generate_banner(output_webp: Path, output_png: Path):
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
    
    # 3. 4 Competitor brushes
    col_centers = [
        c_x0 + int(CONTAINER_W * 0.10), # Col 1: Oral-B
        c_x0 + int(CONTAINER_W * 0.27), # Col 2: Philips
        c_x0 + int(CONTAINER_W * 0.73), # Col 4: SURI
        c_x0 + int(CONTAINER_W * 0.90), # Col 5: Quip
    ]
    
    competitors = [
        (0, "oral-b-io6-comparison.png"),
        (1, "philips-sonicare-comparison.png"),
        (2, "suri-sonic-comparison.png"),
        (3, "quip-sonic-comparison.png"),
    ]
    
    brush_target_h = 265
    brush_y_center = CANVAS_H // 2
    
    for col_idx, filename in competitors:
        img_path = TOOTHBRUSH_DIR / filename
        if img_path.exists():
            im = Image.open(img_path).convert("RGBA")
            bbox = im.getbbox()
            if bbox:
                cropped = im.crop(bbox)
                scale = brush_target_h / float(cropped.size[1])
                w = int(round(cropped.size[0] * scale))
                h = brush_target_h
                resized = cropped.resize((w, h), Image.Resampling.LANCZOS)
                
                pos_x = col_centers[col_idx] - (w // 2)
                pos_y = brush_y_center - (h // 2)
                canvas.alpha_composite(resized, (pos_x, pos_y))
    
    # 4. #1 Miroooo X Card (Taller than container, extends OUT vertically 30px above and 30px below)
    miroooo_path = RAW_IMAGES_DIR / "Miroooo_x_Silver-2.jpg"
    im_m = Image.open(miroooo_path).convert("RGB")
    
    CARD_H = 410
    CARD_W = int(round(CARD_H * 696 / 1087)) # ~262px
    card_r = 24
    
    m_resized = im_m.resize((CARD_W, CARD_H), Image.Resampling.LANCZOS)
    
    scale_factor = 4
    mask = Image.new("L", (CARD_W * scale_factor, CARD_H * scale_factor), 0)
    draw_m = ImageDraw.Draw(mask)
    draw_m.rounded_rectangle([0, 0, CARD_W * scale_factor, CARD_H * scale_factor], radius=card_r * scale_factor, fill=255)
    mask = mask.resize((CARD_W, CARD_H), Image.Resampling.LANCZOS)
    
    card_rgba = Image.new("RGBA", (CARD_W, CARD_H), (0, 0, 0, 0))
    card_rgba.paste(m_resized, (0, 0), mask)
    
    # White border stroke
    stroke_layer = Image.new("RGBA", (CARD_W * scale_factor, CARD_H * scale_factor), (0, 0, 0, 0))
    draw_s = ImageDraw.Draw(stroke_layer)
    draw_s.rounded_rectangle([0, 0, CARD_W * scale_factor, CARD_H * scale_factor], radius=card_r * scale_factor, outline=(255, 255, 255, 255), width=3 * scale_factor)
    stroke_layer = stroke_layer.resize((CARD_W, CARD_H), Image.Resampling.LANCZOS)
    card_rgba.alpha_composite(stroke_layer)
    
    # Outer subtle ring
    ring_layer = Image.new("RGBA", (CARD_W * scale_factor, CARD_H * scale_factor), (0, 0, 0, 0))
    draw_r = ImageDraw.Draw(ring_layer)
    draw_r.rounded_rectangle([0, 0, CARD_W * scale_factor, CARD_H * scale_factor], radius=card_r * scale_factor, outline=(15, 23, 42, 35), width=1 * scale_factor)
    ring_layer = ring_layer.resize((CARD_W, CARD_H), Image.Resampling.LANCZOS)
    card_rgba.alpha_composite(ring_layer)
    
    m_x = (CANVAS_W - CARD_W) // 2
    m_y = (CANVAS_H - CARD_H) // 2
    
    # 5. Multi-tier 3D drop shadow for Miroooo card
    shadow_layers = [
        {"offset": (0, 6), "blur": 12, "color": (15, 23, 42, 80)},
        {"offset": (0, 16), "blur": 26, "color": (15, 23, 42, 50)},
        {"offset": (0, 28), "blur": 48, "color": (15, 23, 42, 35)},
    ]
    
    for s in shadow_layers:
        s_img = Image.new("RGBA", (CANVAS_W, CANVAS_H), (0, 0, 0, 0))
        s_draw = ImageDraw.Draw(s_img)
        ox, oy = s["offset"]
        s_draw.rounded_rectangle(
            [m_x + ox + 4, m_y + oy + 4, m_x + CARD_W + ox - 4, m_y + CARD_H + oy - 4],
            radius=card_r,
            fill=s["color"]
        )
        s_img = s_img.filter(ImageFilter.GaussianBlur(s["blur"]))
        canvas.alpha_composite(s_img)
        
    canvas.alpha_composite(card_rgba, (m_x, m_y))
    
    # 6. Save assets
    output_webp.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(output_png, "PNG")
    canvas.convert("RGB").save(output_webp, "WEBP", quality=95)
    print(f"Generated PNG: {output_png}")
    print(f"Generated WebP: {output_webp}")

if __name__ == "__main__":
    out_webp = TOOTHBRUSH_DIR / "top-5-electric-toothbrushes-uk.webp"
    out_png = TOOTHBRUSH_DIR / "top-5-electric-toothbrushes-uk.png"
    generate_banner(out_webp, out_png)

