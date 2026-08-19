import type { Metadata } from "next";
import HairDryerAdvertorial from "@/legacy-pages/HairDryerAdvertorial";
import { getUkPageContext } from "@/lib/page-context";
import { metadataForPath } from "@/lib/metadata";

export const metadata: Metadata = {
  ...metadataForPath("/best-hair-dryer-uk-2026"),
  title: "Best Hair Dryer UK (2026) | 5 Hair Stylers Compared",
  keywords: [
    "best hair dryer",
    "best hair dryers",
    "hair dryer best",
    "best hair dryer uk",
    "best hair dryer uk 2026",
    "top 5 hair dryers",
    "best multi styler hair dryer uk",
    "hair dryer reviews uk",
    "7 in 1 hair styler",
  ],
  openGraph: {
    title: "Best Hair Dryer UK (2026) | 5 Hair Stylers Compared",
    description:
      "Best hair dryer UK 2026 comparison with Muuhu, Dyson Supersonic, Cloud Nine, Shark SpeedStyle Pro FLEX and ghd ranked for drying speed, heat control, attachments and value.",
    type: "article",
    url: "https://www.trustpilotreview.shop/best-hair-dryer-uk-2026",
    siteName: "Trustpilot Review Shop",
    images: ["/img/hair/top-5-hair-dryer-green-hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Hair Dryer UK (2026) | 5 Hair Stylers Compared",
    description:
      "Best hair dryer UK 2026 comparison with Muuhu, Dyson Supersonic, Cloud Nine, Shark SpeedStyle Pro FLEX and ghd ranked for drying speed, heat control, attachments and value.",
    images: ["/img/hair/top-5-hair-dryer-green-hero.png"],
  },
};

export default function Page() {
  return <HairDryerAdvertorial market="uk" context={getUkPageContext()} />;
}
