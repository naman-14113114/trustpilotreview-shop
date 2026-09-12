import type { Metadata } from "next";
import PillowsAdvertorial from "@/features/pillows/PillowsAdvertorial";
import { pillowProducts, defaultPillowGuide } from "@/data/pillows";
import { metadataForPath } from "@/lib/metadata";

const canonical =
  "https://www.trustpilotreview.shop/best-pillow-for-side-sleepers-uk-2026";

export const metadata: Metadata = {
  ...metadataForPath("/best-pillow-for-side-sleepers-uk-2026"),
  title: "Best Pillow for Side Sleepers UK 2026: Top 5 Compared & Reviewed",
  description:
    "Compare the five best pillows for side sleepers in the UK for 2026 by cervical alignment, shoulder relief, dual-loft options, materials, trial periods, and value.",
  keywords: [
    "best pillow for side sleepers",
    "best pillow for side sleepers uk",
    "best pillow for side sleepers uk 2026",
    "side sleeper pillow uk",
    "pillow for neck pain side sleeper",
    "best orthopaedic pillow uk",
    "sleeping cloudalign pillow",
    "groove adjustable pillow review",
    "tempur smartcool pillow review",
    "simba hybrid pillow review",
    "panda hybrid bamboo pillow review",
  ],
  alternates: { canonical },
  openGraph: {
    title: "Best Pillow for Side Sleepers UK 2026: Top 5 Compared & Reviewed",
    description:
      "A UK comparison of Sleeping CloudAlign, Groove, TEMPUR, Simba, and Panda pillows for side sleepers.",
    type: "article",
    url: canonical,
    siteName: "Trustpilot Review Shop",
    images: ["/img/pillows/juujo-colours-approved.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pillow for Side Sleepers UK 2026: Top 5 Compared & Reviewed",
    description:
      "Compare the five best side-sleeper pillows in the UK for 2026 by cervical alignment, shoulder relief, and value.",
    images: ["/img/pillows/juujo-colours-approved.png"],
  },
};

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonical}#article`,
        headline: "Best Pillow for Side Sleepers UK 2026: Top 5 Compared",
        description:
          "A UK buyer's comparison of five side-sleeper pillows by cervical alignment, shoulder relief, loft adjustability, price, trial period, and materials.",
        mainEntityOfPage: canonical,
        datePublished: "2026-08-12",
        dateModified: "2026-08-16",
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
        name: "Top 5 Side Sleeper Pillows UK 2026",
        numberOfItems: pillowProducts.length,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: pillowProducts.map((product) => ({
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
            name: "Best Pillow for Side Sleepers UK 2026",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PillowsAdvertorial guide={defaultPillowGuide} />
    </>
  );
}

