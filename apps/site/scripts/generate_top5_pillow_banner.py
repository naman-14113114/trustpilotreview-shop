import os
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter
import rembg
import numpy as np

REPO_ROOT = Path(r"e:\1st YEAR DTU\New folder\trustpilotreview-shop")
PILLOW_DIR = REPO_ROOT / "apps" / "site" / "public" / "img" / "pillows"
ROOT_IMG_DIR = REPO_ROOT / "img" / "pillows"
CHATGPT_SRC = Path(r"E:\1st YEAR DTU\New folder\Buddy\Images\ChatGPT Image Sep 15, 2026, 09_24_00 PM.png")

def generate_banner(output_webp: Path, output_png: Path):
    session = rembg.new_session("u2net")

    # 1. Clean Juujo/RestArch Model (#1) from user ChatGPT image
    chatgpt_im = Image.open(CHATGPT_SRC)
    model_nobg = rembg.remove(chatgpt_im, session=session)

    m_arr = np.array(model_nobg)
    alpha = m_arr[:, :, 3]
    non_bg = alpha > 15
    coords = np.argwhere(non_bg)
    y0, x0 = coords.min(axis=0)
    y1, x1 = coords.max(axis=0) + 1
    print(f"Active model bbox: x=[{x0}, {x1}] (w={x1-x0}), y=[{y0}, {y1}] (h={y1-y0})")

    cropped_model = model_nobg.crop((x0, y0, x1, y1))

    # Create clean square image (1200 x 1200) on pure white with NO baked borders
    BANNER_SIZE = 1200
    pad = 60
    avail_w = BANNER_SIZE - (pad * 2)
    avail_h = BANNER_SIZE - (pad * 2)

    scale = min(avail_w / float(cropped_model.size[0]), avail_h / float(cropped_model.size[1]))
    mw = int(round(cropped_model.size[0] * scale))
    mh = int(round(cropped_model.size[1] * scale))
    m_resized = cropped_model.resize((mw, mh), Image.Resampling.LANCZOS)

    banner_img = Image.new("RGB", (BANNER_SIZE, BANNER_SIZE), (255, 255, 255))
    px = (BANNER_SIZE - mw) // 2
    py = BANNER_SIZE - mh - pad
    banner_img.paste(m_resized, (px, py), m_resized)

    # Save clean #1 image
    card_webp = PILLOW_DIR / "restarch-pillow-banner.webp"
    card_png = PILLOW_DIR / "restarch-pillow-banner.png"
    banner_img.save(card_png, "PNG")
    banner_img.save(card_webp, "WEBP", quality=95)
    banner_img.save(ROOT_IMG_DIR / "restarch-pillow-banner.png", "PNG")
    banner_img.save(ROOT_IMG_DIR / "restarch-pillow-banner.webp", "WEBP", quality=95)
    print(f"Generated clean #1 card: {card_webp}")

    # 2. Clean 4 Competitors
    cozy_in = Image.open(PILLOW_DIR / "cozyrest-contour.jpg")
    cozy_nobg = rembg.remove(cozy_in, session=session)

    tempur_in = Image.open(PILLOW_DIR / "tempur-smartcool.jpg").convert("RGBA")

    coop_in = Image.open(PILLOW_DIR / "coop-eden.webp")
    coop_nobg = rembg.remove(coop_in, session=session)

    epabo_in = Image.open(PILLOW_DIR / "epabo-contour.jpg").convert("RGBA")

    # 3. Create Container Bar (1536 x 430, Container: 1460 x 350)
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
    print(f"Generated Container Bar WebP: {container_bar_webp}")

    # 4. Create Composite Top 5 Image
    CARD_DIM = 370
    card_r = 24

    card_cut = banner_img.resize((CARD_DIM, CARD_DIM), Image.Resampling.LANCZOS)
    scale_f = 4
    mask = Image.new("L", (CARD_DIM * scale_f, CARD_DIM * scale_f), 0)
    draw_m = ImageDraw.Draw(mask)
    draw_m.rounded_rectangle([0, 0, CARD_DIM * scale_f, CARD_DIM * scale_f], radius=card_r * scale_f, fill=255)
    mask = mask.resize((CARD_DIM, CARD_DIM), Image.Resampling.LANCZOS)

    card_rgba = Image.new("RGBA", (CARD_DIM, CARD_DIM), (0, 0, 0, 0))
    card_rgba.paste(card_cut, (0, 0), mask)

    stroke = Image.new("RGBA", (CARD_DIM * scale_f, CARD_DIM * scale_f), (0, 0, 0, 0))
    draw_s = ImageDraw.Draw(stroke)
    draw_s.rounded_rectangle([0, 0, CARD_DIM * scale_f, CARD_DIM * scale_f], radius=card_r * scale_f, outline=(255, 255, 255, 255), width=2 * scale_f)
    stroke = stroke.resize((CARD_DIM, CARD_DIM), Image.Resampling.LANCZOS)
    card_rgba.alpha_composite(stroke)

    m_x = (CANVAS_W - CARD_DIM) // 2
    m_y = (CANVAS_H - CARD_DIM) // 2

    shadow_layers = [
        {"offset": (0, 6), "blur": 12, "color": (15, 23, 42, 70)},
        {"offset": (0, 16), "blur": 26, "color": (15, 23, 42, 45)},
        {"offset": (0, 28), "blur": 45, "color": (15, 23, 42, 30)},
    ]

    for s in shadow_layers:
        s_img = Image.new("RGBA", (CANVAS_W, CANVAS_H), (0, 0, 0, 0))
        s_draw = ImageDraw.Draw(s_img)
        ox, oy = s["offset"]
        s_draw.rounded_rectangle(
            [m_x + ox + 4, m_y + oy + 4, m_x + CARD_DIM + ox - 4, m_y + CARD_DIM + oy - 4],
            radius=card_r,
            fill=s["color"]
        )
        s_img = s_img.filter(ImageFilter.GaussianBlur(s["blur"]))
        canvas.alpha_composite(s_img)

    canvas.alpha_composite(card_rgba, (m_x, m_y))

    output_webp.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(output_png, "PNG")
    canvas.convert("RGB").save(output_webp, "WEBP", quality=95)
    print(f"Generated Composite WebP: {output_webp}")

    canvas.save(ROOT_IMG_DIR / "top-5-side-sleeper-pillows-uk.png", "PNG")
    canvas.convert("RGB").save(ROOT_IMG_DIR / "top-5-side-sleeper-pillows-uk.webp", "WEBP", quality=95)

if __name__ == "__main__":
    out_webp = PILLOW_DIR / "top-5-side-sleeper-pillows-uk.webp"
    out_png = PILLOW_DIR / "top-5-side-sleeper-pillows-uk.png"
    generate_banner(out_webp, out_png)
