import type { Metadata } from "next";
import ElectricToothbrushesAdvertorial from "@/features/electric-toothbrushes/ElectricToothbrushesAdvertorial";
import { metadataForPath } from "@/lib/metadata";
import { toothbrushProducts } from "@/data/toothbrushes";

const canonical = "https://www.trustpilotreview.shop/best-electric-toothbrush-uk-2026";

export const metadata: Metadata = {
  ...metadataForPath("/best-electric-toothbrush-uk-2026"),
  title: "Best Electric Toothbrush UK 2026: Top 5 Compared & Reviewed",
  description:
    "Compare the five best electric toothbrushes in the UK for 2026 by price, battery life, pressure control, brush heads, warranties and overall value today.",
  keywords: [
    "best electric toothbrush",
    "best electric toothbrush uk",
    "best electric toothbrush uk 2026",
    "best electric toothbrushes uk",
    "top 5 electric toothbrushes",
    "electric toothbrush reviews uk",
    "best electric toothbrush for sensitive gums",
    "miroooo brush x2",
    "miroooo brush x",
    "oral b io series 6 review",
    "philips sonicare diamondclean 9000",
    "suri pro 2.0 review",
    "suri pro 2.0 electric toothbrush",
    "oral b io3 review",
    "oral b io series 3 review",
  ],
  openGraph: {
    title: "Best Electric Toothbrush UK 2026: Top 5 Compared & Reviewed",
    description:
      "Compare the five best electric toothbrushes in the UK for 2026 by price, battery life, pressure control, brush heads, warranties and overall value today.",
    type: "article",
    url: "https://www.trustpilotreview.shop/best-electric-toothbrush-uk-2026",
    siteName: "Trustpilot Review Shop",
    images: ["/img/toothbrushes/top-5-electric-toothbrushes-uk.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Electric Toothbrush UK 2026: Top 5 Compared & Reviewed",
    description:
      "Compare the five best electric toothbrushes in the UK for 2026 by price, battery life, pressure control, brush heads, warranties and overall value today.",
    images: ["/img/toothbrushes/top-5-electric-toothbrushes-uk.webp"],
  },
};

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonical}#article`,
        headline: "Best Electric Toothbrush UK 2026: Top 5 Compared",
        description:
          "A UK buyer's comparison of five electric toothbrushes by price, features, battery, charging, warranty, return terms and replacement-head costs.",
        mainEntityOfPage: canonical,
        datePublished: "2026-09-02",
        dateModified: "2026-09-08",
        author: {
          "@type": "Organization",
          name: "TrustpilotReview editorial team",
          url: "https://www.trustpilotreview.shop/",
        },
        publisher: {
          "@type": "Organization",
          name: "TrustpilotReview",
          url: "https://www.trustpilotreview.shop/",
        },
      },
      {
        "@type": "ItemList",
        "@id": `${canonical}#top-five`,
        name: "Top 5 Electric Toothbrushes UK 2026",
        numberOfItems: toothbrushProducts.length,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: toothbrushProducts.map((product) => ({
          "@type": "ListItem",
          position: product.rank,
          name: product.name,
          url: `${canonical}#rank-${product.rank}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.trustpilotreview.shop/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Best Electric Toothbrush UK 2026",
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <ElectricToothbrushesAdvertorial />
    </>
  );
}
