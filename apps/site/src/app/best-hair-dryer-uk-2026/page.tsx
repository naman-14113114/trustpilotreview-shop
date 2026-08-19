import type { Metadata } from "next";
import HairDryerAdvertorial from "@/legacy-pages/HairDryerAdvertorial";
import { getUkPageContext } from "@/lib/page-context";
import { metadataForPath } from "@/lib/metadata";

export const metadata: Metadata = {
  ...metadataForPath("/best-hair-dryer-uk-2026"),
  title: "Best Hair Dryers UK (2026) | Top 5 Best Hair Dryer Reviews",
  description:
    "Compare the top 5 best hair dryers in the UK for 2026. Ranked for fast drying speed, heat control, attachments, hair protection and value.",
  keywords: [
    "best hair dryers",
    "best hair dryer",
    "hair dryer best",
    "best hair dryers uk",
    "best hair dryer uk",
    "best hair dryer uk 2026",
    "best hair dryers uk 2026",
    "top 5 hair dryers",
    "best multi styler hair dryer uk",
    "hair dryer reviews uk",
    "7 in 1 hair styler",
  ],
  openGraph: {
    title: "Best Hair Dryers UK (2026) | Top 5 Best Hair Dryer Reviews",
    description:
      "Compare the top 5 best hair dryers in the UK for 2026. Ranked for fast drying speed, heat control, attachments, hair protection and value.",
    type: "article",
    url: "https://www.trustpilotreview.shop/best-hair-dryer-uk-2026",
    siteName: "Trustpilot Review Shop",
    images: ["/img/hair/top-5-hair-dryer-green-hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Hair Dryers UK (2026) | Top 5 Best Hair Dryer Reviews",
    description:
      "Compare the top 5 best hair dryers in the UK for 2026. Ranked for fast drying speed, heat control, attachments, hair protection and value.",
    images: ["/img/hair/top-5-hair-dryer-green-hero.png"],
  },
};

export default function Page() {
  return <HairDryerAdvertorial market="uk" context={getUkPageContext()} />;
}
