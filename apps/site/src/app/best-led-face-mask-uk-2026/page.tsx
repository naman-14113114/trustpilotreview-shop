import type { Metadata } from "next";
import BestLedFaceMaskAdvertorial from "@/legacy-pages/BestLedFaceMaskAdvertorial";
import { getUkPageContext } from "@/lib/page-context";
import { metadataForPath } from "@/lib/metadata";

export const metadata: Metadata = {
  ...metadataForPath("/best-led-face-mask-uk-2026"),
  title: "Best LED Face Mask UK (2026) | Top 5 Light Therapy Masks Compared",
  description:
    "Compare the top 5 best LED face masks in the UK for 2026. Ranked for light therapy wavelengths, face & neck coverage, red light therapy, anti-ageing, wrinkles, acne and value.",
  keywords: [
    "best led face mask",
    "best light led face mask",
    "best led face mask therapy",
    "best led face mask uk",
    "best led face mask uk 2026",
    "best led light therapy mask",
    "best led mask for wrinkles",
    "best red light face mask",
    "best at home led face mask",
    "led light face mask therapy",
    "top 5 led face masks",
    "buudy 7 colour led mask",
    "led face and neck mask",
  ],
  openGraph: {
    title: "Best LED Face Mask UK (2026) | Top 5 Light Therapy Masks Compared",
    description:
      "Compare the top 5 best LED face masks in the UK for 2026. Ranked for light therapy wavelengths, face & neck coverage, red light therapy, anti-ageing, wrinkles, acne and value.",
    type: "article",
    url: "https://www.trustpilotreview.shop/best-led-face-mask-uk-2026",
    siteName: "Trustpilot Review Shop",
    images: ["/img/TOP 5 LED Mask uk.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best LED Face Mask UK (2026) | Top 5 Light Therapy Masks Compared",
    description:
      "Compare the top 5 best LED face masks in the UK for 2026. Ranked for light therapy wavelengths, face & neck coverage, red light therapy, anti-ageing, wrinkles, acne and value.",
    images: ["/img/TOP 5 LED Mask uk.png"],
  },
};

export default function Page() {
  return <BestLedFaceMaskAdvertorial market="uk" context={getUkPageContext()} />;
}
