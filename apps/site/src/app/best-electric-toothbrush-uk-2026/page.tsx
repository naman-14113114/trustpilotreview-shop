import type { Metadata } from "next";
import ElectricToothbrushesAdvertorial from "@/features/electric-toothbrushes/ElectricToothbrushesAdvertorial";
import { metadataForPath } from "@/lib/metadata";

export const metadata: Metadata = {
  ...metadataForPath("/best-electric-toothbrush-uk-2026"),
  title: "Best Electric Toothbrush UK 2026 | Top 5 Toothbrushes Compared",
  description:
    "Compare the top 5 best electric toothbrushes in the UK for 2026. Ranked for acoustic motor power, plaque removal, battery life, gum protection, refill costs and value.",
  keywords: [
    "best electric toothbrush",
    "best electric toothbrush uk",
    "best electric toothbrush uk 2026",
    "best electric toothbrushes uk",
    "top 5 electric toothbrushes",
    "electric toothbrush reviews uk",
    "best sonic electric toothbrush",
    "best toothbrush for sensitive gums",
    "miroooo x electric toothbrush",
    "oral b io series 6 review",
    "philips sonicare diamondclean 9000",
    "suri sustainable sonic toothbrush",
  ],
  openGraph: {
    title: "Best Electric Toothbrush UK 2026 | Top 5 Toothbrushes Compared",
    description:
      "Compare the top 5 best electric toothbrushes in the UK for 2026. Ranked for acoustic motor power, plaque removal, battery life, gum protection, refill costs and value.",
    type: "article",
    url: "https://www.trustpilotreview.shop/best-electric-toothbrush-uk-2026",
    siteName: "Trustpilot Review Shop",
    images: ["/img/toothbrushes/top-5-electric-toothbrushes-uk.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Electric Toothbrush UK 2026 | Top 5 Toothbrushes Compared",
    description:
      "Compare the top 5 best electric toothbrushes in the UK for 2026. Ranked for acoustic motor power, plaque removal, battery life, gum protection, refill costs and value.",
    images: ["/img/toothbrushes/top-5-electric-toothbrushes-uk.webp"],
  },
};

export default function Page() {
  return <ElectricToothbrushesAdvertorial />;
}
