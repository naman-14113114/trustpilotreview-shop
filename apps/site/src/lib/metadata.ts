import type { Metadata } from "next";
import { articles } from "@/data/old/articles";
import { buudyEditorialPages } from "@/data/buudyEditorialPages";
import { SITE_NAME, SITE_URL } from "@/lib/brand";

const robots = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

type RouteMetadata = {
  title: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
};

const defaultLedDescription =
  "Looking for the best LED face mask in the UK? Compare the best LED light therapy masks for wrinkles, red light therapy, at-home use, face and neck coverage, and overall value.";

const routeMetadata: Record<string, RouteMetadata> = {
  "/": {
    title: "Trustpilot Review Shop | Practical UK Buyer Guides",
    description:
      "Practical UK buyer guides with clear criteria, transparent disclosures and useful questions to consider before making a purchase.",
    canonical: `${SITE_URL}/`
  },
  "/best-led-face-mask-uk-2026": {
    title: "Best LED Face Mask UK (2026) | Best LED Light Therapy Mask Reviews",
    description: defaultLedDescription,
    canonical: `${SITE_URL}/best-led-face-mask-uk-2026`
  },
  "/best-led-face-mask-uk-2026-video-test": {
    title: "Best LED Face Mask UK (2026) | Best LED Light Therapy Mask Reviews",
    description: defaultLedDescription,
    canonical: `${SITE_URL}/best-led-face-mask-uk-2026`,
    noindex: true
  },
  "/best-led-face-mask-uk-2026-previous": {
    title: "Best LED Face Mask UK (2026) | Best LED Light Therapy Mask Reviews",
    description: defaultLedDescription,
    canonical: `${SITE_URL}/best-led-face-mask-uk-2026`,
    noindex: true
  },
  "/best-hair-removal-device-uk-2026": {
    title: "Best Hair Removal Device in UK 2026 | Top IPL Reviews",
    description:
      "Looking for the best IPL hair removal device in the UK? Compare the best IPL hair removal devices in the UK for permanent hair reduction, comfort, cooling technology, and overall value.",
    canonical: `${SITE_URL}/best-hair-removal-device-uk-2026`
  },
  "/best-hair-dryer-uk-2026": {
    title: "Best Hair Dryer 2026 (UK)",
    description:
      "Best hair dryer UK 2026 comparison with Muuhu, Dyson Supersonic, Cloud Nine, Shark SpeedStyle Pro FLEX and ghd ranked for drying speed, heat control, attachments and value.",
    canonical: `${SITE_URL}/best-hair-dryer-uk-2026`
  },
  "/dyson-vs-shark-vs-muuhu-uk": {
    title: "Dyson vs Shark vs Muuhu UK",
    description:
      "Dyson vs Shark vs Muuhu UK comparison for price, attachments, styling range, warranty, free gifts and best buyer fit.",
    canonical: `${SITE_URL}/dyson-vs-shark-vs-muuhu-uk`
  },
  "/best-pillow-for-side-sleepers-uk-2026": {
    title: "Top 5 Pillows for Side Sleepers UK (2026)",
    description:
      "Compare the top five pillows for side sleepers in the UK, including current prices, profile choices, materials, trials, guarantees, advantages and disadvantages.",
    canonical: `${SITE_URL}/best-pillow-for-side-sleepers-uk-2026`
  },
  "/best-grounding-sheets-us-2026": {
    title: "Best Grounding Sheets USA 2026 | Top 5 Fitted Sheet Comparison",
    description:
      "Compare five grounding sheets for US shoppers by fitted sizes, material blend, setup, care, entry price, trial period, warranty and overall editorial value.",
    canonical: `${SITE_URL}/best-grounding-sheets-us-2026`
  },
  ...Object.fromEntries(
    buudyEditorialPages.map((page) => [
      page.path,
      {
        title: page.metaTitle,
        description: page.metaDescription,
        canonical: `${SITE_URL}${page.path}`
      }
    ])
  )
};

const legalTitles: Record<string, string> = {
  "/privacy": "Privacy Policy",
  "/terms": "Terms of Service",
  "/disclosure": "Affiliate Disclosure",
  "/contact": "Contact Us"
};

export function metadataForPath(pathname: string): Metadata {
  if (pathname.startsWith("/blog/")) {
    const slug = pathname.replace(/^\/blog\//, "");
    const article = articles.find((item) => item.slug === slug);
    if (article) {
      return {
        metadataBase: new URL(SITE_URL),
        title: article.seoTitle,
        description: article.seoDescription,
        keywords: article.seoKeywords,
        alternates: { canonical: `${SITE_URL}/blog/${article.slug}` },
        openGraph: {
          title: article.seoTitle,
          description: article.seoDescription,
          type: "article",
          url: `${SITE_URL}/blog/${article.slug}`,
          images: [article.image]
        }
      };
    }
  }

  const legalTitle = legalTitles[pathname];
  if (legalTitle) {
    return {
      metadataBase: new URL(SITE_URL),
      title: `${legalTitle} | ${SITE_NAME}`,
      robots: "noindex, nofollow"
    };
  }

  const meta = routeMetadata[pathname] ?? routeMetadata["/best-led-face-mask-uk-2026"];
  const title = meta.title;
  const description = meta.description;
  const canonical = meta.canonical ?? `${SITE_URL}${pathname}`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    authors: [{ name: `${SITE_NAME} editorial team` }],
    alternates: { canonical },
    robots: meta.noindex ? "noindex, nofollow" : robots,
    openGraph: {
      title,
      description,
      type: pathname === "/" ? "website" : "article",
      url: canonical,
      siteName: SITE_NAME
    }
  };
}
