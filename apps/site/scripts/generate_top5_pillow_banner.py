import os
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter
import rembg
import cv2
import numpy as np

REPO_ROOT = Path(r"e:\1st YEAR DTU\New folder\trustpilotreview-shop")
PILLOW_DIR = REPO_ROOT / "apps" / "site" / "public" / "img" / "pillows"

def prepare_cleaned_images():
    session = rembg.new_session("u2net")
    
    # 1. Clean Juujo/RestArch Model (#1)
    orig_model = cv2.imread(str(PILLOW_DIR / "juujo-model.png"))
    u2_model = rembg.remove(Image.fromarray(cv2.cvtColor(orig_model, cv2.COLOR_BGR2RGB)), session=session)
    u2_arr = np.array(u2_model)
    alpha = u2_arr[:, :, 3].copy()
    
    # Clean any residual blue at the background perimeter
    hsv = cv2.cvtColor(orig_model, cv2.COLOR_BGR2HSV)
    lower_blue = np.array([90, 45, 50])
    upper_blue = np.array([135, 255, 255])
    is_blue = cv2.inRange(hsv, lower_blue, upper_blue)
    
    for y in range(orig_model.shape[0]):
        for x in range(orig_model.shape[1]):
            if y < 700 or x < 350 or x > 800:
                if is_blue[y, x] > 180:
                    alpha[y, x] = 0
                    
    alpha = cv2.GaussianBlur(alpha, (3, 3), 0)
    b, g, r = cv2.split(orig_model)
    model_rgba = cv2.merge([b, g, r, alpha])
    
    # 2. Clean CozyRest (#2) using rembg
    cozy_in = Image.open(PILLOW_DIR / "cozyrest-contour.jpg")
    cozy_nobg = rembg.remove(cozy_in, session=session)
    
    # 3. Clean Tempur (#3)
    tempur_in = Image.open(PILLOW_DIR / "tempur-smartcool.jpg").convert("RGBA")
    
    # 4. Clean Coop Eden (#4) using rembg
    coop_in = Image.open(PILLOW_DIR / "coop-eden.webp")
    coop_nobg = rembg.remove(coop_in, session=session)
    
    # 5. Clean Epabo (#5)
    epabo_in = Image.open(PILLOW_DIR / "epabo-contour.jpg").convert("RGBA")
    
    return (
        Image.fromarray(cv2.cvtColor(model_rgba, cv2.COLOR_BGRA2RGBA)),
        cozy_nobg,
        tempur_in,
        coop_nobg,
        epabo_in
    )

def generate_banner(output_webp: Path, output_png: Path):
    session = rembg.new_session("u2net")

    # 1. Clean Juujo/RestArch Model (#1) FULL UNCROPPED
    orig_model = Image.open(PILLOW_DIR / "juujo-model.png")
    model_nobg = rembg.remove(orig_model, session=session)

    # Find bbox of model + pillow
    m_arr = np.array(model_nobg)
    alpha = m_arr[:, :, 3]
    non_bg = alpha > 15
    coords = np.argwhere(non_bg)
    y0, x0 = coords.min(axis=0)
    y1, x1 = coords.max(axis=0) + 1
    print(f"Model active content bbox: x=[{x0}, {x1}] (w={x1-x0}), y=[{y0}, {y1}] (h={y1-y0})")

    # Crop to exact active content bbox without cutting a single pixel
    full_model = model_nobg.crop((x0, y0, x1, y1))

    # 2. Clean 4 Competitors
    cozy_in = Image.open(PILLOW_DIR / "cozyrest-contour.jpg")
    cozy_nobg = rembg.remove(cozy_in, session=session)

    tempur_in = Image.open(PILLOW_DIR / "tempur-smartcool.jpg").convert("RGBA")

    coop_in = Image.open(PILLOW_DIR / "coop-eden.webp")
    coop_nobg = rembg.remove(coop_in, session=session)

    epabo_in = Image.open(PILLOW_DIR / "epabo-contour.jpg").convert("RGBA")

    # 3. Create #1 Center Card (CARD_W = 680, CARD_H = 840) -> Aspect ratio = 17:21
    CARD_W = 680
    CARD_H = 840
    card_r = 48 # High-res corner radius

    card_canvas = Image.new("RGBA", (CARD_W, CARD_H), (255, 255, 255, 255))

    # Scale full_model to comfortably fit inside card with generous padding
    pad_w = 44
    pad_h = 36
    avail_w = CARD_W - (pad_w * 2)
    avail_h = CARD_H - (pad_h * 2)

    scale_m = min(avail_w / float(full_model.size[0]), avail_h / float(full_model.size[1]))
    mw = int(round(full_model.size[0] * scale_m))
    mh = int(round(full_model.size[1] * scale_m))
    m_resized = full_model.resize((mw, mh), Image.Resampling.LANCZOS)

    # Position: center horizontally, align bottom with slight bottom padding
    mx = (CARD_W - mw) // 2
    my = CARD_H - mh - pad_h
    card_canvas.alpha_composite(m_resized, (mx, my))

    # Rounded mask for card
    scale_factor = 4
    mask = Image.new("L", (CARD_W * scale_factor, CARD_H * scale_factor), 0)
    draw_m = ImageDraw.Draw(mask)
    draw_m.rounded_rectangle([0, 0, CARD_W * scale_factor, CARD_H * scale_factor], radius=card_r * scale_factor, fill=255)
    mask = mask.resize((CARD_W, CARD_H), Image.Resampling.LANCZOS)

    card_rgba = Image.new("RGBA", (CARD_W, CARD_H), (0, 0, 0, 0))
    card_rgba.paste(card_canvas, (0, 0), mask)

    # White border
    stroke_layer = Image.new("RGBA", (CARD_W * scale_factor, CARD_H * scale_factor), (0, 0, 0, 0))
    draw_s = ImageDraw.Draw(stroke_layer)
    draw_s.rounded_rectangle([0, 0, CARD_W * scale_factor, CARD_H * scale_factor], radius=card_r * scale_factor, outline=(255, 255, 255, 255), width=6 * scale_factor)
    stroke_layer = stroke_layer.resize((CARD_W, CARD_H), Image.Resampling.LANCZOS)
    card_rgba.alpha_composite(stroke_layer)

    # Subtle outer ring
    ring_layer = Image.new("RGBA", (CARD_W * scale_factor, CARD_H * scale_factor), (0, 0, 0, 0))
    draw_r = ImageDraw.Draw(ring_layer)
    draw_r.rounded_rectangle([0, 0, CARD_W * scale_factor, CARD_H * scale_factor], radius=card_r * scale_factor, outline=(15, 23, 42, 35), width=2 * scale_factor)
    ring_layer = ring_layer.resize((CARD_W, CARD_H), Image.Resampling.LANCZOS)
    card_rgba.alpha_composite(ring_layer)

    # Save RestArch Card
    card_webp = PILLOW_DIR / "restarch-pillow-banner.webp"
    card_png = PILLOW_DIR / "restarch-pillow-banner.png"
    card_rgba.save(card_png, "PNG")
    card_rgba.convert("RGB").save(card_webp, "WEBP", quality=95)
    card_rgba.save(ROOT_IMG_DIR / "restarch-pillow-banner.png", "PNG")
    card_rgba.convert("RGB").save(ROOT_IMG_DIR / "restarch-pillow-banner.webp", "WEBP", quality=95)
    print(f"Generated RestArch Card PNG: {card_png}")
    print(f"Generated RestArch Card WebP: {card_webp}")

    # 4. Create Background Container Bar (1536 x 430, Container: 1460 x 350)
    CANVAS_W = 1536
    CANVAS_H = 430
    canvas = Image.new("RGBA", (CANVAS_W, CANVAS_H), (255, 255, 255, 255))

    CONTAINER_W = 1460
    CONTAINER_H = 350
    c_x0 = (CANVAS_W - CONTAINER_W) // 2
    c_y0 = (CANVAS_H - CONTAINER_H) // 2
    c_x1 = c_x0 + CONTAINER_W
    c_y1 = c_y0 + CONTAINER_H
    corner_r = 38

    # Container shadow
    c_shadow = Image.new("RGBA", (CANVAS_W, CANVAS_H), (0, 0, 0, 0))
    c_draw_s = ImageDraw.Draw(c_shadow)
    c_draw_s.rounded_rectangle([c_x0 + 4, c_y0 + 6, c_x1 - 4, c_y1 + 12], radius=corner_r, fill=(15, 23, 42, 22))
    c_shadow = c_shadow.filter(ImageFilter.GaussianBlur(14))
    canvas.alpha_composite(c_shadow)

    # Container body
    c_layer = Image.new("RGBA", (CANVAS_W, CANVAS_H), (0, 0, 0, 0))
    c_draw = ImageDraw.Draw(c_layer)
    c_draw.rounded_rectangle([c_x0, c_y0, c_x1, c_y1], radius=corner_r, fill=(255, 255, 255, 255), outline=(226, 232, 240, 255), width=2)
    canvas.alpha_composite(c_layer)

    col_centers = [
        c_x0 + int(CONTAINER_W * 0.11), # Col 1: CozyRest (#2)
        c_x0 + int(CONTAINER_W * 0.27), # Col 2: TEMPUR (#3)
        c_x0 + int(CONTAINER_W * 0.73), # Col 4: Coop Eden (#4)
        c_x0 + int(CONTAINER_W * 0.89), # Col 5: EPABO (#5)
    ]

    competitors = [
        (0, cozy_nobg, 235, 155),
        (1, tempur_in, 235, 155),
        (2, coop_nobg, 235, 145),
        (3, epabo_in, 240, 155),
    ]

    bar_y_center = CANVAS_H // 2

    for col_idx, im, max_w, max_h in competitors:
        arr = np.array(im)
        if arr.shape[2] == 4:
            alpha_c = arr[:, :, 3]
            non_bg_c = alpha_c > 25
        else:
            gray = np.mean(arr[:, :, :3], axis=2)
            non_bg_c = gray < 250
            
        coords_c = np.argwhere(non_bg_c)
        if coords_c.size > 0:
            cy0, cx0 = coords_c.min(axis=0)
            cy1, cx1 = coords_c.max(axis=0) + 1
            cropped_c = im.crop((cx0, cy0, cx1, cy1))
        else:
            cropped_c = im
            
        scale_c = min(max_w / float(cropped_c.size[0]), max_h / float(cropped_c.size[1]))
        w_c = int(round(cropped_c.size[0] * scale_c))
        h_c = int(round(cropped_c.size[1] * scale_c))
        resized_c = cropped_c.resize((w_c, h_c), Image.Resampling.LANCZOS)
        
        pos_xc = col_centers[col_idx] - (w_c // 2)
        pos_yc = bar_y_center - (h_c // 2)
        canvas.alpha_composite(resized_c, (pos_xc, pos_yc))

    container_bar_webp = PILLOW_DIR / "top-4-competitors-container-bar.webp"
    container_bar_png = PILLOW_DIR / "top-4-competitors-container-bar.png"
    canvas.save(container_bar_png, "PNG")
    canvas.convert("RGB").save(container_bar_webp, "WEBP", quality=95)
    canvas.save(ROOT_IMG_DIR / "top-4-competitors-container-bar.png", "PNG")
    canvas.convert("RGB").save(ROOT_IMG_DIR / "top-4-competitors-container-bar.webp", "WEBP", quality=95)
    print(f"Generated Container Bar PNG: {container_bar_png}")
    print(f"Generated Container Bar WebP: {container_bar_webp}")

    # 5. Composite Final Visual
    comp_card_h = 410
    comp_card_w = int(round(comp_card_h * (CARD_W / CARD_H)))
    comp_card_r = int(round(card_r * (comp_card_h / CARD_H)))
    card_comp_resized = card_rgba.resize((comp_card_w, comp_card_h), Image.Resampling.LANCZOS)

    m_x = (CANVAS_W - comp_card_w) // 2
    m_y = (CANVAS_H - comp_card_h) // 2

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
            [m_x + ox + 4, m_y + oy + 4, m_x + comp_card_w + ox - 4, m_y + comp_card_h + oy - 4],
            radius=comp_card_r,
            fill=s["color"]
        )
        s_img = s_img.filter(ImageFilter.GaussianBlur(s["blur"]))
        canvas.alpha_composite(s_img)

    canvas.alpha_composite(card_comp_resized, (m_x, m_y))

    output_webp.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(output_png, "PNG")
    canvas.convert("RGB").save(output_webp, "WEBP", quality=95)
    print(f"Generated Composite PNG: {output_png}")
    print(f"Generated Composite WebP: {output_webp}")

    canvas.save(ROOT_IMG_DIR / "top-5-side-sleeper-pillows-uk.png", "PNG")
    canvas.convert("RGB").save(ROOT_IMG_DIR / "top-5-side-sleeper-pillows-uk.webp", "WEBP", quality=95)

if __name__ == "__main__":
    out_webp = PILLOW_DIR / "top-5-side-sleeper-pillows-uk.webp"
    out_png = PILLOW_DIR / "top-5-side-sleeper-pillows-uk.png"
    generate_banner(out_webp, out_png)
