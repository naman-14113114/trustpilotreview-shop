import os
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps, ImageFilter
import numpy as np

REPO_ROOT = Path(r"e:\1st YEAR DTU\New folder\trustpilotreview-shop")
TOOTHBRUSH_DIR = REPO_ROOT / "apps" / "site" / "public" / "img" / "toothbrushes"
SCRATCH_DIR = Path(r"C:\Users\sahil\.gemini\antigravity\brain\57dea598-9d12-4808-9981-4512650bd5ba\scratch")

# Dimensions
CANVAS_W = 1536
CANVAS_H = 460

# Palette
COLOR_WHITE = (255, 255, 255)
COLOR_EMERALD = (16, 185, 129)       # #10b981
COLOR_EMERALD_DARK = (5, 150, 105)   # #059669
COLOR_SLATE_900 = (15, 23, 42)       # #0f172a
COLOR_SLATE_800 = (30, 41, 59)       # #1e293b
COLOR_SLATE_700 = (51, 65, 85)       # #334155
COLOR_SLATE_600 = (71, 85, 105)      # #475569
COLOR_SLATE_500 = (100, 116, 139)    # #64748b
COLOR_SLATE_400 = (148, 163, 184)    # #94a3b8
COLOR_SLATE_200 = (226, 232, 240)    # #e2e8f0
COLOR_SLATE_100 = (241, 245, 249)    # #f1f5f9
COLOR_SLATE_50 = (248, 250, 252)     # #f8fafc

# Fonts
FONT_BOLD = "C:/Windows/Fonts/arialbd.ttf"
FONT_REG = "C:/Windows/Fonts/arial.ttf"
FONT_SEGOE_BOLD = "C:/Windows/Fonts/segoeuib.ttf"
FONT_SEGOE_SEMIBOLD = "C:/Windows/Fonts/seguisb.ttf"
FONT_SEGOE_REG = "C:/Windows/Fonts/segoeui.ttf"

def get_font(path: str, size: int):
    try:
        return ImageFont.truetype(path, size)
    except Exception:
        return ImageFont.load_default()

def draw_shadowed_circle(img: Image.Image, center_x: int, center_y: int, radius: int, fill_color, border_color, border_width=2):
    shadow_pad = 12
    s_size = (radius + shadow_pad) * 2
    shadow_layer = Image.new("RGBA", (s_size, s_size), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow_layer)
    s_center = radius + shadow_pad
    
    # Soft drop shadow
    s_draw.ellipse(
        (s_center - radius - 1, s_center - radius + 2, s_center + radius + 1, s_center + radius + 5),
        fill=(0, 0, 0, 80)
    )
    shadow_layer = shadow_layer.filter(ImageFilter.GaussianBlur(3))
    img.paste(shadow_layer, (center_x - s_center, center_y - s_center), shadow_layer)
    
    # Circle
    draw = ImageDraw.Draw(img)
    draw.ellipse(
        (center_x - radius, center_y - radius, center_x + radius, center_y + radius),
        fill=fill_color,
        outline=border_color,
        width=border_width
    )

def generate_banner(output_webp: Path, output_png: Path):
    canvas = Image.new("RGBA", (CANVAS_W, CANVAS_H), (*COLOR_WHITE, 255))
    draw = ImageDraw.Draw(canvas)
    
    panel_widths = [307, 307, 308, 307, 307]
    panel_starts = [0, 307, 614, 922, 1229]
    
    products = [
        {
            "rank": 1,
            "badge": "#1 BEST OVERALL",
            "name": "Miroooo X",
            "subtitle": "40,000 VPM Acoustic",
            "price": "£59",
            "path": TOOTHBRUSH_DIR / "miroooo-x-silver-lifestyle.webp",
            "type": "lifestyle",
            "badge_bg": COLOR_EMERALD,
            "badge_fg": COLOR_WHITE,
            "is_winner": True
        },
        {
            "rank": 2,
            "badge": "#2 RUNNER UP",
            "name": "Oral-B iO6",
            "subtitle": "Oscillating Round",
            "price": "£129.99",
            "path": TOOTHBRUSH_DIR / "oral-b-io6-electric-toothbrush.webp",
            "type": "transparent",
            "badge_bg": COLOR_SLATE_700,
            "badge_fg": COLOR_WHITE,
            "is_winner": False
        },
        {
            "rank": 3,
            "badge": "#3 PREMIUM",
            "name": "Sonicare 9000",
            "subtitle": "62,000 Movements",
            "price": "£189.99",
            "path": TOOTHBRUSH_DIR / "philips-sonicare-diamondclean-9000.webp",
            "type": "white_bg",
            "badge_bg": COLOR_SLATE_600,
            "badge_fg": COLOR_WHITE,
            "is_winner": False
        },
        {
            "rank": 4,
            "badge": "#4 ECO PICK",
            "name": "SURI Sonic",
            "subtitle": "Plant-Based Heads",
            "price": "£95",
            "path": TOOTHBRUSH_DIR / "suri-sustainable-sonic-toothbrush.png",
            "type": "suri_studio",
            "badge_bg": COLOR_SLATE_600,
            "badge_fg": COLOR_WHITE,
            "is_winner": False
        },
        {
            "rank": 5,
            "badge": "#5 BUDGET",
            "name": "Quip Sonic",
            "subtitle": "15,000 VPM Basic",
            "price": "£35",
            "path": TOOTHBRUSH_DIR / "quip-sonic-electric-toothbrush.jpg",
            "type": "quip_crop",
            "badge_bg": COLOR_SLATE_500,
            "badge_fg": COLOR_WHITE,
            "is_winner": False
        }
    ]
    
    # Available height for product image
    img_area_top = 44
    img_area_bottom = 390
    img_area_h = img_area_bottom - img_area_top # 346px
    
    for i, p in enumerate(products):
        px = panel_starts[i]
        pw = panel_widths[i]
        
        # Base panel background
        if p["is_winner"]:
            p_bg = Image.new("RGBA", (pw, CANVAS_H), (248, 250, 252, 255)) # Slate-50
            p_draw = ImageDraw.Draw(p_bg)
            # Top emerald highlight accent
            p_draw.rectangle((0, 0, pw, 3), fill=COLOR_EMERALD)
        else:
            p_bg = Image.new("RGBA", (pw, CANVAS_H), (255, 255, 255, 255))
            p_draw = ImageDraw.Draw(p_bg)
            
        avail_w = pw - 20
        src = Image.open(p["path"])
        
        if p["type"] == "lifestyle":
            # Miroooo X lifestyle shot
            # Scale and contain cleanly with subtle soft corner rounding
            src_rgba = src.convert("RGBA")
            contained = ImageOps.contain(src_rgba, (avail_w, img_area_h), Image.Resampling.LANCZOS)
            paste_x = (pw - contained.width) // 2
            paste_y = img_area_top + (img_area_h - contained.height) // 2
            
            # Create rounded mask for lifestyle image
            mask = Image.new("L", contained.size, 0)
            mask_draw = ImageDraw.Draw(mask)
            mask_draw.rounded_rectangle((0, 0, contained.width, contained.height), radius=8, fill=255)
            p_bg.paste(contained, (paste_x, paste_y), mask)
            
            # Subtle border around lifestyle photo
            p_draw.rounded_rectangle(
                (paste_x, paste_y, paste_x + contained.width, paste_y + contained.height),
                radius=8,
                outline=(226, 232, 240, 255),
                width=1
            )
            
        elif p["type"] == "transparent":
            # Oral-B iO6
            alpha = src.split()[-1]
            bbox = alpha.getbbox()
            src_cropped = src.crop(bbox) if bbox else src
            contained = ImageOps.contain(src_cropped, (avail_w - 20, img_area_h - 10), Image.Resampling.LANCZOS)
            paste_x = (pw - contained.width) // 2
            paste_y = img_area_top + (img_area_h - contained.height) // 2
            p_bg.paste(contained, (paste_x, paste_y), contained)
            
        elif p["type"] == "white_bg":
            # Philips Sonicare 9000
            src_cropped = src.crop((50, 20, 530, 720)).convert("RGBA")
            contained = ImageOps.contain(src_cropped, (avail_w - 10, img_area_h - 10), Image.Resampling.LANCZOS)
            paste_x = (pw - contained.width) // 2
            paste_y = img_area_top + (img_area_h - contained.height) // 2
            p_bg.paste(contained, (paste_x, paste_y), contained)
            
        elif p["type"] == "suri_studio":
            # SURI Sustainable
            src_cropped = src.crop((260, 220, 690, 1050)).convert("RGBA")
            contained = ImageOps.contain(src_cropped, (avail_w - 10, img_area_h - 10), Image.Resampling.LANCZOS)
            paste_x = (pw - contained.width) // 2
            paste_y = img_area_top + (img_area_h - contained.height) // 2
            # Subtle rounded mask
            mask = Image.new("L", contained.size, 0)
            mask_draw = ImageDraw.Draw(mask)
            mask_draw.rounded_rectangle((0, 0, contained.width, contained.height), radius=6, fill=255)
            p_bg.paste(contained, (paste_x, paste_y), mask)
            
        elif p["type"] == "quip_crop":
            # Quip Sonic
            src_cropped = src.crop((1100, 150, 1880, 2700)).convert("RGBA")
            contained = ImageOps.contain(src_cropped, (avail_w - 30, img_area_h - 10), Image.Resampling.LANCZOS)
            paste_x = (pw - contained.width) // 2
            paste_y = img_area_top + (img_area_h - contained.height) // 2
            p_bg.paste(contained, (paste_x, paste_y), contained)
            
        # Top Rank Badge Pill
        badge_text = p["badge"]
        badge_font = get_font(FONT_BOLD, 12 if p["is_winner"] else 11)
        bbox = p_draw.textbbox((0, 0), badge_text, font=badge_font)
        bw = bbox[2] - bbox[0] + 16
        bh = 22
        bx = (pw - bw) // 2
        by = 10
        p_draw.rounded_rectangle((bx, by, bx + bw, by + bh), radius=11, fill=p["badge_bg"])
        tw = bbox[2] - bbox[0]
        th = bbox[3] - bbox[1]
        p_draw.text((bx + (bw - tw) // 2, by + (bh - th) // 2 - 1), badge_text, font=badge_font, fill=p["badge_fg"])
        
        # Bottom Title & Price Strip
        name_font = get_font(FONT_BOLD, 15)
        n_box = p_draw.textbbox((0, 0), p["name"], font=name_font)
        nw = n_box[2] - n_box[0]
        p_draw.text(((pw - nw) // 2, CANVAS_H - 62), p["name"], font=name_font, fill=COLOR_SLATE_900)
        
        price_font = get_font(FONT_BOLD, 16)
        price_color = COLOR_EMERALD_DARK if p["is_winner"] else COLOR_SLATE_800
        pr_box = p_draw.textbbox((0, 0), p["price"], font=price_font)
        pr_w = pr_box[2] - pr_box[0]
        p_draw.text(((pw - pr_w) // 2, CANVAS_H - 43), p["price"], font=price_font, fill=price_color)
        
        sub_font = get_font(FONT_SEGOE_SEMIBOLD, 11)
        sub_box = p_draw.textbbox((0, 0), p["subtitle"], font=sub_font)
        sub_w = sub_box[2] - sub_box[0]
        p_draw.text(((pw - sub_w) // 2, CANVAS_H - 24), p["subtitle"], font=sub_font, fill=COLOR_SLATE_500)
        
        # Paste onto master canvas
        canvas.paste(p_bg, (px, 0))
        
    # Draw Dividers and VS Badges
    for i in range(1, 5):
        div_x = panel_starts[i]
        
        # Vertical divider line
        draw.line((div_x, 8, div_x, CANVAS_H - 8), fill=COLOR_SLATE_200, width=1)
        
        # Sleek circular VS badge
        vs_radius = 18
        vs_cy = CANVAS_H // 2 - 12
        
        # Draw shadowed circle
        draw_shadowed_circle(
            canvas,
            div_x,
            vs_cy,
            vs_radius,
            fill_color=(15, 23, 42, 255),       # Dark Slate 900
            border_color=(241, 245, 249, 255),   # Slate 100
            border_width=2
        )
        
        # "VS" text
        vs_font = get_font(FONT_BOLD, 12)
        vs_box = draw.textbbox((0, 0), "VS", font=vs_font)
        vs_w = vs_box[2] - vs_box[0]
        vs_h = vs_box[3] - vs_box[1]
        draw.text(
            (div_x - vs_w // 2, vs_cy - vs_h // 2 - 1),
            "VS",
            font=vs_font,
            fill=COLOR_WHITE
        )
        
    # Outer 1px crisp border
    draw.rectangle((0, 0, CANVAS_W - 1, CANVAS_H - 1), outline=COLOR_SLATE_200, width=1)
    
    # Save outputs
    rgb_canvas = canvas.convert("RGB")
    rgb_canvas.save(output_webp, "WEBP", quality=95, method=6)
    rgb_canvas.save(output_png, "PNG", optimize=True)
    
    print(f"WebP created: {output_webp} ({output_webp.stat().st_size} bytes)")
    print(f"PNG created: {output_png} ({output_png.stat().st_size} bytes)")

if __name__ == "__main__":
    out_webp = TOOTHBRUSH_DIR / "top-5-electric-toothbrushes-uk.webp"
    out_png = TOOTHBRUSH_DIR / "top-5-electric-toothbrushes-uk.png"
    generate_banner(out_webp, out_png)
