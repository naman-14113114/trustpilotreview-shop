from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


PUBLIC_DIR = Path(__file__).resolve().parents[1] / "public"
HAIR_DIR = PUBLIC_DIR / "img" / "hair"

CANVAS_SIZE = (1400, 960)
NAVY = "#111827"
CREAM = "#f8f4e6"
WHITE = "#ffffff"
BORDER = "#d7dee7"
EMERALD = "#10b981"
BLUE = "#6366f1"
CYAN = "#0ea5e9"
TEXT = "#111827"
MUTED = "#475569"
PRICE = "#8b1530"

SERIF_BOLD = "C:/Windows/Fonts/georgiab.ttf"
SANS_BOLD = "C:/Windows/Fonts/arialbd.ttf"


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size)


def draw_centered_text(
    draw: ImageDraw.ImageDraw,
    text: str,
    y: int,
    font_value: ImageFont.FreeTypeFont,
    fill: str,
    width: int = CANVAS_SIZE[0],
) -> None:
    box = draw.textbbox((0, 0), text, font=font_value)
    text_width = box[2] - box[0]
    draw.text(((width - text_width) / 2, y), text, font=font_value, fill=fill)


def draw_wrapped_centered_text(
    draw: ImageDraw.ImageDraw,
    text: str,
    center_x: int,
    y: int,
    max_width: int,
    font_value: ImageFont.FreeTypeFont,
    fill: str,
    line_gap: int = 4,
) -> int:
    words = text.split()
    lines: list[str] = []
    current = ""

    for word in words:
        candidate = f"{current} {word}".strip()
        box = draw.textbbox((0, 0), candidate, font=font_value)
        if current and box[2] - box[0] > max_width:
            lines.append(current)
            current = word
        else:
            current = candidate
    if current:
        lines.append(current)

    line_height = font_value.size + line_gap
    for index, line in enumerate(lines):
        box = draw.textbbox((0, 0), line, font=font_value)
        line_width = box[2] - box[0]
        draw.text(
            (center_x - line_width / 2, y + index * line_height),
            line,
            font=font_value,
            fill=fill,
        )
    return y + len(lines) * line_height


def paste_contained(
    canvas: Image.Image,
    image_path: Path,
    box: tuple[int, int, int, int],
) -> None:
    x, y, width, height = box
    with Image.open(image_path) as source:
        source = source.convert("RGB")
        contained = ImageOps.contain(
            source,
            (width, height),
            method=Image.Resampling.LANCZOS,
        )
        layer = Image.new("RGB", (width, height), WHITE)
        left = (width - contained.width) // 2
        top = (height - contained.height) // 2
        layer.paste(contained, (left, top))
        canvas.paste(layer, (x, y))


def draw_rank_pill(
    draw: ImageDraw.ImageDraw,
    x: int,
    y: int,
    rank: int,
    colour: str,
) -> None:
    draw.rounded_rectangle((x, y, x + 78, y + 42), radius=21, fill=colour)
    label = f"#{rank}"
    label_font = font(SANS_BOLD, 22)
    box = draw.textbbox((0, 0), label, font=label_font)
    draw.text(
        (x + (78 - (box[2] - box[0])) / 2, y + 8),
        label,
        font=label_font,
        fill=WHITE,
    )


def render_two_product(
    title: str,
    competitor_name: str,
    competitor_image: str,
    competitor_price: str,
    output_name: str,
) -> None:
    canvas = Image.new("RGB", CANVAS_SIZE, CREAM)
    draw = ImageDraw.Draw(canvas)
    draw.rectangle((0, 0, 1400, 134), fill=NAVY)

    title_size = 64
    title_font = font(SERIF_BOLD, title_size)
    while draw.textbbox((0, 0), title, font=title_font)[2] > 1280:
        title_size -= 2
        title_font = font(SERIF_BOLD, title_size)
    draw_centered_text(draw, title, 34, title_font, WHITE)

    cards = [(120, 210, 556, 850), (844, 210, 1280, 850)]
    for card in cards:
        draw.rounded_rectangle(card, radius=32, fill=WHITE, outline=BORDER, width=2)

    draw_rank_pill(draw, 140, 230, 1, EMERALD)
    draw_rank_pill(draw, 864, 230, 2, BLUE)
    draw.ellipse((615, 390, 785, 560), fill=EMERALD)
    draw_centered_text(draw, "VS", 432, font(SANS_BOLD, 46), WHITE)

    paste_contained(
        canvas,
        HAIR_DIR / "muuhu-product-1a.webp",
        (184, 300, 308, 308),
    )
    paste_contained(
        canvas,
        HAIR_DIR / competitor_image,
        (908, 300, 308, 308),
    )

    name_font = font(SANS_BOLD, 21)
    price_font = font(SANS_BOLD, 34)
    caption_font = font(SANS_BOLD, 20)
    draw_wrapped_centered_text(
        draw,
        "Muuhu 7-in-1 High-Speed Hair Dryer",
        338,
        712,
        360,
        name_font,
        TEXT,
    )
    draw_wrapped_centered_text(
        draw,
        competitor_name,
        1062,
        712,
        360,
        name_font,
        TEXT,
    )
    draw_wrapped_centered_text(
        draw, "£149", 338, 790, 360, price_font, PRICE
    )
    draw_wrapped_centered_text(
        draw, competitor_price, 1062, 790, 360, price_font, TEXT
    )
    draw_wrapped_centered_text(
        draw,
        "Best value complete styling system",
        338,
        878,
        410,
        caption_font,
        EMERALD,
    )
    draw_wrapped_centered_text(
        draw,
        "Recognised competitor option",
        1062,
        878,
        410,
        caption_font,
        MUTED,
    )
    canvas.save(HAIR_DIR / output_name, "WEBP", quality=92, method=6)


def render_three_product() -> None:
    canvas = Image.new("RGB", CANVAS_SIZE, CREAM)
    draw = ImageDraw.Draw(canvas)
    draw.rectangle((0, 0, 1400, 134), fill=NAVY)

    title = "Muuhu vs Dyson Nural vs Shark SpeedStyle Pro"
    title_size = 56
    title_font = font(SERIF_BOLD, title_size)
    while draw.textbbox((0, 0), title, font=title_font)[2] > 1280:
        title_size -= 2
        title_font = font(SERIF_BOLD, title_size)
    draw_centered_text(draw, title, 39, title_font, WHITE)

    card_specs = [
        {
            "rect": (80, 210, 415, 850),
            "rank": 1,
            "colour": EMERALD,
            "image": "muuhu-product-1a.webp",
            "name": "Muuhu 7-in-1 High-Speed Hair Dryer",
            "price": "£149",
            "caption": "Best value",
            "caption_colour": EMERALD,
        },
        {
            "rect": (533, 210, 868, 850),
            "rank": 2,
            "colour": CYAN,
            "image": "shark_hairdryer.webp",
            "name": "Shark SpeedStyle Pro",
            "price": "£169.99",
            "caption": "Compact practical pick",
            "caption_colour": MUTED,
        },
        {
            "rect": (986, 210, 1321, 850),
            "rank": 3,
            "colour": BLUE,
            "image": "dyson_hairdryer_new.webp",
            "name": "Dyson Supersonic Nural",
            "price": "£299.99",
            "caption": "Premium benchmark",
            "caption_colour": MUTED,
        },
    ]

    for spec in card_specs:
        left, top, right, bottom = spec["rect"]
        draw.rounded_rectangle(
            spec["rect"], radius=32, fill=WHITE, outline=BORDER, width=2
        )
        draw_rank_pill(
            draw,
            left + 20,
            top + 20,
            spec["rank"],
            spec["colour"],
        )
        paste_contained(
            canvas,
            HAIR_DIR / spec["image"],
            (left + 45, 300, 245, 245),
        )
        draw_wrapped_centered_text(
            draw,
            spec["name"],
            (left + right) // 2,
            696,
            285,
            font(SANS_BOLD, 20),
            TEXT,
        )
        draw_wrapped_centered_text(
            draw,
            spec["price"],
            (left + right) // 2,
            790,
            285,
            font(SANS_BOLD, 32),
            PRICE if spec["rank"] == 1 else TEXT,
        )
        draw_wrapped_centered_text(
            draw,
            spec["caption"],
            (left + right) // 2,
            878,
            320,
            font(SANS_BOLD, 19),
            spec["caption_colour"],
        )

    canvas.save(
        HAIR_DIR / "vs-dyson-shark-muuhu.webp",
        "WEBP",
        quality=92,
        method=6,
    )


def main() -> None:
    render_two_product(
        title="Muuhu vs Dyson Supersonic Nural",
        competitor_name="Dyson Supersonic Nural",
        competitor_image="dyson_hairdryer_new.webp",
        competitor_price="£299.99",
        output_name="vs-dyson.webp",
    )
    render_two_product(
        title="Muuhu vs Shark SpeedStyle Pro",
        competitor_name="Shark SpeedStyle Pro",
        competitor_image="shark_hairdryer.webp",
        competitor_price="£169.99",
        output_name="vs-shark.webp",
    )
    render_two_product(
        title="Muuhu vs ghd Helios",
        competitor_name="ghd Helios",
        competitor_image="ghd.jpg",
        competitor_price="£189",
        output_name="vs-ghd.webp",
    )
    render_three_product()


if __name__ == "__main__":
    main()
