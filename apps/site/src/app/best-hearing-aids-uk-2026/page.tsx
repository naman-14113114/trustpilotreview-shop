import type { Metadata } from "next";
import HearingAidsAdvertorial from "@/features/hearing-aids/HearingAidsAdvertorial";
import { metadataForPath } from "@/lib/metadata";
import { hearingAidProducts } from "@/data/hearingAids";

const canonical = "https://www.trustpilotreview.shop/best-hearing-aids-uk-2026";

export const metadata: Metadata = {
  ...metadataForPath("/best-hearing-aids-uk-2026"),
  title: "Best Hearing Aids UK 2026: Top 5 Compared & Reviewed",
  description:
    "Compare the five best OTC and digital hearing aids in the UK for 2026 by speech clarity, noise cancellation, battery life, invisible fit, and warranty.",
  keywords: [
    "best hearing aids",
    "best hearing aids uk",
    "best hearing aids uk 2026",
    "best otc hearing aids uk",
    "top 5 hearing aids uk",
    "hearing aids reviews uk",
    "invisible hearing aids uk",
    "rechargeable hearing aids uk",
    "muuhu hearclear pro",
    "muuhu hearing aids review",
    "boots ceretone core one pro",
    "audicus mini series 2",
    "mdhearing air review",
    "audien atom pro review",
  ],
  alternates: { canonical },
  openGraph: {
    title: "Best Hearing Aids UK 2026: Top 5 Compared & Reviewed",
    description:
      "Compare the five best OTC and digital hearing aids in the UK for 2026 by speech clarity, noise cancellation, battery life, invisible fit, and warranty.",
    type: "article",
    url: canonical,
    siteName: "Trustpilot Review Shop",
    images: ["/img/hearing-aids/top-5-hearing-aids-uk.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Hearing Aids UK 2026: Top 5 Compared & Reviewed",
    description:
      "Compare the five best OTC and digital hearing aids in the UK for 2026 by speech clarity, noise cancellation, battery life, invisible fit, and warranty.",
    images: ["/img/hearing-aids/top-5-hearing-aids-uk.webp"],
  },
};

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonical}#article`,
        headline: "Best Hearing Aids UK 2026: Top 5 Compared & Reviewed",
        description:
          "Compare the five best OTC and digital hearing aids in the UK for 2026 by speech clarity, noise cancellation, battery life, invisible fit, and warranty.",
        mainEntityOfPage: canonical,
        datePublished: "2026-09-10",
        dateModified: "2026-09-26",
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
        name: "Top 5 Hearing Aids UK 2026",
        numberOfItems: hearingAidProducts.length,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: hearingAidProducts.map((product) => ({
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
            name: "Best Hearing Aids UK 2026",
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
      <HearingAidsAdvertorial />
    </>
  );
}
