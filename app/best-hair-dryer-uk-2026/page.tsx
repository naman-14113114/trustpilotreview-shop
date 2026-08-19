import type { Metadata } from "next";
import HairAdvertorialPage from "../../lib/hair-advertorial";
import { bestHairDryerPage } from "../../lib/hair-pages";

export const metadata: Metadata = {
  title: "Best Hair Dryer UK (2026) | 5 Hair Stylers Compared",
  description: bestHairDryerPage.description,
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
  alternates: {
    canonical: "https://www.trustpilotreview.shop/best-hair-dryer-uk-2026",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Best Hair Dryer UK (2026) | 5 Hair Stylers Compared",
    description: bestHairDryerPage.description,
    type: "article",
    url: "https://www.trustpilotreview.shop/best-hair-dryer-uk-2026",
    siteName: "Trustpilot Review Shop",
    images: [bestHairDryerPage.heroImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Hair Dryer UK (2026) | 5 Hair Stylers Compared",
    description: bestHairDryerPage.description,
    images: [bestHairDryerPage.heroImage],
  },
};

export default function Page() {
  return <HairAdvertorialPage page={bestHairDryerPage} />;
}
