import os
from pathlib import Path
from PIL import Image, ImageOps
import numpy as np

REPO_ROOT = Path(r"e:\1st YEAR DTU\New folder\trustpilotreview-shop")
TOOTHBRUSH_DIR = REPO_ROOT / "apps" / "site" / "public" / "img" / "toothbrushes"
RAW_IMAGES_DIR = Path(r"E:\1st YEAR DTU\New folder\miroooo_images\edited with miroooo")

# Target banner dimensions
CANVAS_W = 1536
CANVAS_H = 460

def build_miroooo_panel(src_path: Path, width: int, height: int) -> Image.Image:
    """Panel 1: Miroooo X lifestyle shot fit/crop to fill vertical panel nicely."""
    im = Image.open(src_path).convert("RGB")
    src_w, src_h = im.size
    
    # Calculate crop box to fill (width, height) maintaining aspect ratio
    target_aspect = width / height
    src_aspect = src_w / src_h
    
    if src_aspect > target_aspect:
        # Source is wider than target: crop left & right
        crop_w = int(src_h * target_aspect)
        crop_h = src_h
        x0 = (src_w - crop_w) // 2
        y0 = 0
    else:
        # Source is taller than target: crop top & bottom
        crop_w = src_w
        crop_h = int(src_w / target_aspect)
        x0 = 0
        y0 = (src_h - crop_h) // 2
        
    cropped = im.crop((x0, y0, x0 + crop_w, y0 + crop_h))
    panel = cropped.resize((width, height), Image.Resampling.LANCZOS)
    return panel

def build_transparent_brush_panel(src_path: Path, width: int, height: int, target_brush_h: int = 410) -> Image.Image:
    """Panels 2, 3, 4: Clean transparent PNG centered on pure white background."""
    im = Image.open(src_path).convert("RGBA")
    
    # Extract alpha bounding box
    alpha = im.split()[-1]
    bbox = alpha.getbbox()
    if bbox:
        brush = im.crop(bbox)
    else:
        brush = im
        
    bw, bh = brush.size
    scale = target_brush_h / float(bh)
    new_w = max(1, int(round(bw * scale)))
    new_h = target_brush_h
    
    brush_resized = brush.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Create white canvas
    panel = Image.new("RGBA", (width, height), (255, 255, 255, 255))
    paste_x = (width - new_w) // 2
    paste_y = (height - new_h) // 2
    panel.paste(brush_resized, (paste_x, paste_y), brush_resized)
    return panel.convert("RGB")

def build_quip_panel(src_path: Path, width: int, height: int, target_brush_h: int = 410) -> Image.Image:
    """Panel 5: Quip sonic toothbrush centered cleanly on pure white background."""
    im = Image.open(src_path).convert("RGB")
    
    # Crop brush and stand
    crop = im.crop((800, 160, 2000, 2660))
    arr = np.array(crop, dtype=np.float32)
    
    # Seamless white background level adjustment (remap near-white [240..255] -> 255)
    arr = np.clip(arr / 240.0 * 255.0, 0, 255).astype(np.uint8)
    adjusted = Image.fromarray(arr)
    
    scale = target_brush_h / float(adjusted.height)
    target_w = max(1, int(round(adjusted.width * scale)))
    scaled = adjusted.resize((target_w, target_brush_h), Image.Resampling.LANCZOS)
    
    panel = Image.new("RGB", (width, height), (255, 255, 255))
    paste_x = (width - target_w) // 2
    paste_y = (height - target_brush_h) // 2
    panel.paste(scaled, (paste_x, paste_y))
    return panel

def generate_banner(output_webp: Path, output_png: Path):
    # 5 panels side-by-side: 307 + 307 + 308 + 307 + 307 = 1536
    panel_widths = [307, 307, 308, 307, 307]
    panel_starts = [0, 307, 614, 922, 1229]
    
    # Panel sources
    p1_src = RAW_IMAGES_DIR / "Mirooo x compressed" / "Miroooo_x_Silver-2.webp"
    p2_src = TOOTHBRUSH_DIR / "oral-b-io6-comparison.png"
    p3_src = TOOTHBRUSH_DIR / "philips-sonicare-comparison.png"
    p4_src = TOOTHBRUSH_DIR / "suri-sonic-comparison.png"
    p5_src = TOOTHBRUSH_DIR / "quip-sonic-electric-toothbrush.jpg"
    
    # Build each vertical panel (ONLY IMAGES, NO TEXT, NO BADGES, NO PILLS, NO VS CIRCLES)
    p1 = build_miroooo_panel(p1_src, panel_widths[0], CANVAS_H)
    p2 = build_transparent_brush_panel(p2_src, panel_widths[1], CANVAS_H, target_brush_h=410)
    p3 = build_transparent_brush_panel(p3_src, panel_widths[2], CANVAS_H, target_brush_h=410)
    p4 = build_transparent_brush_panel(p4_src, panel_widths[3], CANVAS_H, target_brush_h=410)
    p5 = build_quip_panel(p5_src, panel_widths[4], CANVAS_H, target_brush_h=410)
    
    # Composite master canvas
    canvas = Image.new("RGB", (CANVAS_W, CANVAS_H), (255, 255, 255))
    panels = [p1, p2, p3, p4, p5]
    
    for i, p in enumerate(panels):
        canvas.paste(p, (panel_starts[i], 0))
        
    # Save outputs
    output_webp.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(output_webp, "WEBP", quality=95, method=6)
    canvas.save(output_png, "PNG", optimize=True)
    
    print(f"WebP generated: {output_webp} ({output_webp.stat().st_size} bytes)")
    print(f"PNG generated: {output_png} ({output_png.stat().st_size} bytes)")

if __name__ == "__main__":
    out_webp = TOOTHBRUSH_DIR / "top-5-electric-toothbrushes-uk.webp"
    out_png = TOOTHBRUSH_DIR / "top-5-electric-toothbrushes-uk.png"
    generate_banner(out_webp, out_png)
