import type { Metadata } from "next";
import WaterFlossersAdvertorial from "@/features/water-flossers/WaterFlossersAdvertorial";
import { metadataForPath } from "@/lib/metadata";

export const metadata: Metadata = {
  ...metadataForPath("/best-water-flosser-uk-2026"),
  title: "Best Water Flosser UK 2026 | Top 5 Cordless Water Flossers Compared",
  description:
    "Compare the top 5 best water flossers in the UK for 2026. Ranked for water tank capacity, hydrodynamic pressure range, battery life, nozzle accessories, gum health, and overall value.",
  keywords: [
    "best water flosser",
    "best water flosser uk",
    "best water flosser uk 2026",
    "best cordless water flosser uk",
    "top 5 water flossers",
    "water flosser reviews uk",
    "best water flosser for sensitive gums",
    "best water flosser for braces",
    "miroooo water flosser",
    "oral b aquacare 6 review",
    "waterpik cordless advanced review",
    "philips cordless power flosser 3000",
    "panasonic ew-dj67 ultrasonic review",
  ],
  openGraph: {
    title: "Best Water Flosser UK 2026 | Top 5 Cordless Water Flossers Compared",
    description:
      "Compare the top 5 best water flossers in the UK for 2026. Ranked for water tank capacity, hydrodynamic pressure range, battery life, nozzle accessories, gum health, and overall value.",
    type: "article",
    url: "https://www.trustpilotreview.shop/best-water-flosser-uk-2026",
    siteName: "Trustpilot Review Shop",
    images: ["/img/water-flossers/top-5-water-flossers-uk.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Water Flosser UK 2026 | Top 5 Cordless Water Flossers Compared",
    description:
      "Compare the top 5 best water flossers in the UK for 2026. Ranked for water tank capacity, hydrodynamic pressure range, battery life, nozzle accessories, gum health, and overall value.",
    images: ["/img/water-flossers/top-5-water-flossers-uk.webp"],
  },
};

export default function Page() {
  return <WaterFlossersAdvertorial />;
}
