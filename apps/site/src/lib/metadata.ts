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
  image?: string;
};

const defaultLedDescription =
  "Compare the top 5 best LED face masks in the UK for 2026. Ranked for light therapy wavelengths, face & neck coverage, red light therapy, anti-ageing, wrinkles, acne and overall value.";

const routeMetadata: Record<string, RouteMetadata> = {
  "/": {
    title: "Trustpilot Review Shop | Practical UK Buyer Guides",
    description:
      "Practical UK buyer guides with clear criteria, transparent disclosures and useful questions to consider before making a purchase.",
    canonical: `${SITE_URL}/`
  },
  "/best-led-face-mask-uk-2026": {
    title: "Best LED Face Mask UK (2026) | Top 5 Light Therapy Masks Compared",
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
    title: "Best Hair Dryers UK (2026) | Top 5 Best Hair Dryer Reviews",
    description:
      "Compare the top 5 best hair dryers in the UK for 2026. Ranked for fast drying speed, heat control, attachments, hair protection and value.",
    canonical: `${SITE_URL}/best-hair-dryer-uk-2026`
  },
  "/dyson-vs-shark-vs-muuhu-uk": {
    title: "Dyson vs Shark vs Muuhu UK",
    description:
      "Dyson vs Shark vs Muuhu UK comparison for price, attachments, styling range, warranty, free gifts and best buyer fit.",
    canonical: `${SITE_URL}/dyson-vs-shark-vs-muuhu-uk`
  },
  "/best-pillow-for-side-sleepers-uk-2026": {
    title: "Best Pillow for Side Sleepers UK 2026: Top 5 Compared & Reviewed",
    description:
      "Compare the five best pillows for side sleepers in the UK for 2026 by cervical alignment, shoulder relief, dual-loft options, materials, trial periods, and value.",
    canonical: `${SITE_URL}/best-pillow-for-side-sleepers-uk-2026`,
    image: "/img/pillows/top-5-side-sleeper-pillows-uk.webp"
  },
  "/best-grounding-sheets-us-2026": {
    title: "Best Grounding Sheets USA 2026 | Top 5 Fitted Sheet Comparison",
    description:
      "Compare five grounding sheets for US shoppers by fitted sizes, material blend, setup, care, entry price, trial period, warranty and overall editorial value.",
    canonical: `${SITE_URL}/best-grounding-sheets-us-2026`
  },
  "/best-grounding-sheets-in-us-2026": {
    title: "Best Grounding Sheets in US 2026 | Top 5 Compared",
    description:
      "Detailed US grounding sheet comparison of Juujo, Terra, GroundingWell, Premium Grounding and BareEarth by fit, materials, setup, reviews, returns and value.",
    canonical: `${SITE_URL}/best-grounding-sheets-in-us-2026`
  },
  "/best-electric-toothbrush-uk-2026": {
    title: "Best Electric Toothbrush UK 2026: Top 5 Compared & Reviewed",
    description:
      "Compare the five best electric toothbrushes in the UK for 2026 by price, battery life, pressure control, brush heads, warranties and overall value today.",
    canonical: `${SITE_URL}/best-electric-toothbrush-uk-2026`,
    image: "/img/toothbrushes/top-5-electric-toothbrushes-uk.webp"
  },
  "/best-water-flosser-uk-2026": {
    title: "Best Water Flosser UK 2026 | Top 5 Cordless Water Flossers Compared",
    description:
      "Compare the top 5 best water flossers in the UK for 2026. Ranked for water tank capacity, hydrodynamic pressure range, battery life, nozzle accessories, gum health, and overall value.",
    canonical: `${SITE_URL}/best-water-flosser-uk-2026`,
    image: "/img/water-flossers/top-5-water-flossers-uk.webp"
  },
  "/best-hearing-aids-uk-2026": {
    title: "Best Hearing Aids UK 2026: Top 5 Compared & Reviewed",
    description:
      "Compare the five best OTC and digital hearing aids in the UK for 2026 by speech clarity, noise cancellation, battery life, invisible fit, and warranty.",
    canonical: `${SITE_URL}/best-hearing-aids-uk-2026`,
    image: "/img/hearing-aids/top-5-hearing-aids-uk.webp"
  },
  "/currentbody-skin-led-light-therapy-mask-review-uk": {
    title: "CurrentBody vs Buudy LED Mask UK (2026 Comparison)",
    description: "Compare CurrentBody and Buudy LED masks by UK price, wavelengths, face and neck coverage, session time, features and guarantee.",
    canonical: `${SITE_URL}/currentbody-vs-buudy`
  },
  "/deluxskin-led-facial-mask-review-uk": {
    title: "DeluxeSkin vs Buudy LED Mask UK (2026)",
    description: "Compare DeluxeSkin and Buudy LED masks by UK price, wavelengths, neck coverage, treatment format and guarantee.",
    canonical: `${SITE_URL}/deluxeskin-vs-buudy`
  },
  "/qure-skincare-light-therapy-mask-review-uk": {
    title: "Qure vs Buudy LED Mask UK (2026 Comparison)",
    description: "Compare Qure Q-Rejuvalight Pro and Buudy LED masks by price, wavelengths, session time, app features and face-and-neck coverage.",
    canonical: `${SITE_URL}/qureskincare-vs-buudy`
  },
  "/theraface-mask-review-uk": {
    title: "TheraFace Mask vs Buudy UK (2026 Comparison)",
    description: "Compare Therabody TheraFace Mask and Buudy by UK price, LED modes, weight, vibration, coverage and guarantee.",
    canonical: `${SITE_URL}/theraface-vs-other-masks`
  },
  "/theraface-vs-buudy": {
    title: "TheraFace Mask vs Buudy UK (2026 Comparison)",
    description: "Compare Therabody TheraFace Mask and Buudy by UK price, LED modes, weight, vibration, coverage and guarantee.",
    canonical: `${SITE_URL}/theraface-vs-other-masks`
  },
  "/silicon-led-mask-warning-uk": {
    title: "Are Silicone LED Masks Safe? Fit & Cleaning Guide (2026)",
    description: "Understand flexible silicone LED mask comfort, cleaning, skin contact and fit, plus how silicone compares with rigid and open designs.",
    canonical: `${SITE_URL}/silicone-led-mask-dangers`
  },
  "/floating-head-led-mask-warning-uk": {
    title: "Face-only vs Face-and-Neck LED Masks UK (2026)",
    description: "Compare face-only and face-and-neck LED masks by coverage, convenience, kit price and fit before choosing a UK device.",
    canonical: `${SITE_URL}/floating-head-warning`
  },
  "/missing-colors-led-mask-expose-uk": {
    title: "2 Wavelengths vs Multi-Colour LED Masks (2026 Guide)",
    description: "Compare focused red and near-infrared LED masks with multi-colour systems, including wavelengths, modes, coverage and value.",
    canonical: `${SITE_URL}/missing-colors-expose`
  },
  "/led-density-scam-uk": {
    title: "Does LED Count Matter in a Face Mask? (2026 Guide)",
    description: "Understand LED count, irradiance, distance, coverage and wavelength specifications before comparing light therapy face masks.",
    canonical: `${SITE_URL}/led-density-scam`
  },
  "/brand-name-premium-led-mask-uk": {
    title: "Are Premium LED Face Masks Worth It? UK 2026",
    description: "Compare premium and value LED face masks by price, wavelengths, coverage, routine, support and guarantee—not brand recognition alone.",
    canonical: `${SITE_URL}/brand-name-premium`
  },
  "/new-advertorial": {
    title: "Best LED Face Mask UK (2026) | Top Light Therapy Masks",
    description: defaultLedDescription,
    canonical: `${SITE_URL}/new-advertorial`
  },
  "/new-led-face-mask-review-uk": {
    title: "Best LED Face Mask UK (2026) | Top Light Therapy Masks",
    description: defaultLedDescription,
    canonical: `${SITE_URL}/new-advertorial`
  },
  "/best-led-face-mask-video-review-uk": {
    title: "Best LED Face Mask UK (2026) | Video Review",
    description: defaultLedDescription,
    canonical: `${SITE_URL}/best-led-face-mask-uk-2026-previous`
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
      siteName: SITE_NAME,
      ...(meta.image ? { images: [meta.image] } : {})
    },
    ...(meta.image
      ? {
          twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [meta.image]
          }
        }
      : {})
  };
}
