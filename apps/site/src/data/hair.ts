import type {
  AdvertorialPage,
  GuideCard,
  RankedProduct,
} from "@trustpilotreview/shared";
import { hairGuideGroups, hairGuides } from "@/data/hairGuides";

export const MUUHU_HAIR_URL = "https://uk.muuhu.com/products/muuhu-hair-dryer";
export const MUUHU_PACKAGING_URL =
  "https://uk.muuhu.com/pages/premium-packaging";
export const MUUHU_COMB_URL = "https://uk.muuhu.com/products/muuhu-comb";
export const MUUHU_EBOOK_URL = "https://uk.muuhu.com/pages/haircare-ebook";

export const hairImages = {
  muuhu: "/img/hair/muuhu-product-1a.webp",
  dyson: "/img/hair/dyson_hairdryer_new.webp",
  shark: "/img/hair/shark_hairdryer.webp",
  ghd: "/img/hair/ghd.jpg",
  topFive: "/img/hair/top-5-hair-dryer.webp",
  vsDyson: "/img/hair/vs-dyson.webp",
  vsShark: "/img/hair/vs-shark.webp",
  vsGhd: "/img/hair/vs-ghd.webp",
  threeWay: "/img/hair/vs-dyson-shark-muuhu.webp",
  editor: "/img/hair/editor-stylist-unsplash.webp",
  trust: "/img/hair/about-trust-hair-dryer.webp",
  packaging: "/img/hair/muuhu-luxury-case.webp",
  comb: "/img/hair/muuhu-comb.webp",
  ebook: "/img/hair/muuhu-expert-hair-ebook.webp",
};

export const hairComparisonCriteria = [
  "Current UK price and total value",
  "Included attachment count",
  "Drying speed and airflow confidence",
  "Curling and wave creation",
  "Smoothing and flyaway control",
  "Diffuser and textured-hair support",
  "Heat-control story",
  "Ease of understanding the bundle",
  "Warranty and guarantee strength",
  "Free gifts and offer clarity",
  "Brand trust versus price resistance",
  "Best buyer fit for search-ad visitors",
];

export const muuhuHairProduct: RankedProduct = {
  rank: "#1",
  name: "Muuhu AirPro",
  image: hairImages.muuhu,
  price: "£149",
  originalPrice: "£299",
  rating: "4.9 / 5",
  link: MUUHU_HAIR_URL,
  badge: "Best value overall",
  bestFor: "Most UK shoppers comparing Dyson and Shark before buying.",
  summary:
    "Muuhu is ranked No. 1 because it gives the clearest buying argument for UK shoppers: a 110,000 RPM high-speed motor, 1,400W power, 3 temperature settings, 3 speed settings, ionic care, intelligent heat control, seven attachments, two Coanda-style auto-wrap curlers, diffuser, smoothing brush, round brush, concentrator, 1-year warranty, 90-day guarantee and official free gifts at £149.",
  description: [
    "Muuhu is the strongest value choice in this three-way comparison because it covers the routine most buyers want in one box: fast drying, smoothing, volume, curls, waves, diffusing and concentrated blow-drying.",
    "The offer is also easy to understand from a paid-search landing page: £149, seven attachments, two Coanda-style curlers, a 1-year warranty, a 90-day money-back guarantee and the current Muuhu free-gift bundle.",
    "Dyson and Shark both have stronger brand recognition, but Muuhu makes the simplest price-to-kit case for shoppers who want visible value without giving up the core styling tools.",
  ],
  pros: [
    "Complete 7-in-1 system with drying, smoothing, round-brush volume, diffuser support, concentrator styling and Coanda-style curlers.",
    "Best price-to-kit ratio at £149 compared with higher-priced premium rivals.",
    "1,400W, 110,000 RPM brushless motor with 3 temperature settings and 3 speed settings for controlled daily drying.",
    "Intelligent heat control and ionic care support a safer, smoother styling message.",
    "1-year warranty, 90-day guarantee and official free gifts reduce purchase hesitation.",
  ],
  cons: [
    "Available online only, so shoppers who want an in-store demo may prefer a retailer-stocked brand.",
    "The auto-wrap curlers can take one or two sessions to master.",
    "Brand familiarity is lower than Dyson and Shark, although the price and guarantee help balance that concern.",
  ],
  metrics: [
    { label: "Drying Speed", value: 97 },
    { label: "Styling Versatility", value: 98 },
    { label: "Ionic and Heat Control", value: 96 },
    { label: "Attachment Value", value: 100 },
    { label: "Overall Value", value: 100 },
  ],
  isWinner: true,
};

export const sharkFlexStyleProduct: RankedProduct = {
  rank: "#2",
  name: "Shark FlexStyle",
  image: hairImages.shark,
  price: "£199+",
  rating: "4.6 / 5",
  link: "#",
  badge: "Familiar alternative",
  bestFor: "Buyers who want a known household brand below Dyson pricing.",
  summary:
    "Shark is the familiar mid-premium option. It benefits from UK retailer visibility, a recognizable brand name and a useful dryer-to-styler concept. The main weakness is offer clarity: prices and exact bundle contents can vary, so the shopper has to work harder to confirm what is included.",
  description: [
    "Shark is the most familiar alternative for many UK buyers who like the Dyson idea but want to spend less. It has strong retail presence and the FlexStyle format is easy to understand.",
    "It performs well for a mix of drying, smoothing and curling routines, but the value story depends heavily on the bundle and sale price a shopper finds on the day.",
    "Against Muuhu, Shark's biggest challenge is simplicity. Muuhu gives a cleaner landing-page offer: seven attachments, £149, warranty, guarantee and free gifts in one direct comparison.",
  ],
  pros: [
    "Known UK household brand with strong retailer visibility.",
    "Useful dryer-to-styler concept for buyers comparing multi-stylers.",
    "Often discounted, keeping it competitive below Dyson pricing.",
    "Good fit for shoppers who value mainstream brand reassurance.",
  ],
  cons: [
    "Usually costs more than Muuhu when comparing the complete offer.",
    "Bundle contents can vary, so shoppers must check exact attachments.",
    "The value story is less immediate than Muuhu's £149 complete-kit offer.",
    "Does not match Muuhu's current free-gift stack.",
  ],
  metrics: [
    { label: "Drying Speed", value: 89 },
    { label: "Styling Versatility", value: 87 },
    { label: "Ionic and Heat Control", value: 88 },
    { label: "Attachment Value", value: 82 },
    { label: "Overall Value", value: 78 },
  ],
};

export const dysonAirwrapProduct: RankedProduct = {
  rank: "#3",
  name: "Dyson Airwrap",
  image: hairImages.dyson,
  price: "£399.99",
  rating: "4.7 / 5",
  link: "#",
  badge: "Premium brand pick",
  bestFor: "Buyers who want the most famous premium air-styler brand.",
  summary:
    "Dyson remains the prestige name in air styling. It has excellent recognition, strong design appeal and the strongest premium-brand effect in the category. It ranks third here because many paid-search shoppers are comparing practical value, and the price gap versus Muuhu is difficult to ignore.",
  description: [
    "Dyson is still the aspirational product. It carries the strongest brand recognition, a polished unboxing feel and a premium engineering reputation.",
    "For shoppers who specifically want the Dyson name, it remains a credible choice. The weakness is value resistance: the price sits far above Muuhu while many daily goals are the same, including drying, smoothing, volume and curls.",
    "In a direct-response comparison, Dyson's prestige helps, but Muuhu's price, attachment count, warranty, guarantee and gift bundle create a stronger reason to click first.",
  ],
  pros: [
    "Strongest brand recognition in the category.",
    "Premium design language and gift appeal.",
    "Credible Coanda styling story for curls, smoothing and blow-dry routines.",
    "Best fit when budget matters less than owning the best-known name.",
  ],
  cons: [
    "At around £399.99, it is dramatically more expensive than Muuhu.",
    "The value case weakens when the buyer mainly wants dry, smooth, lift and curl outcomes.",
    "Does not include Muuhu's current free accessory and guide bundle.",
    "Premium name may matter less to paid-search shoppers focused on savings.",
  ],
  metrics: [
    { label: "Drying Speed", value: 92 },
    { label: "Styling Versatility", value: 88 },
    { label: "Ionic and Heat Control", value: 94 },
    { label: "Attachment Value", value: 72 },
    { label: "Overall Value", value: 61 },
  ],
};

export const dysonSharkMuuhuPage: AdvertorialPage = {
  family: "hair-dryer",
  slug: "dyson-vs-shark-vs-muuhu-uk",
  seo: {
    title: "Dyson vs Shark vs Muuhu UK",
    description:
      "Dyson vs Shark vs Muuhu UK comparison for price, attachments, styling range, warranty, free gifts and best buyer fit.",
    canonical: "https://www.trustpilotreview.shop/dyson-vs-shark-vs-muuhu-uk",
  },
  headline: "Dyson vs Shark vs Muuhu UK",
  products: [muuhuHairProduct, sharkFlexStyleProduct, dysonAirwrapProduct],
  criteria: hairComparisonCriteria.map((label) => ({ label })),
};

export const hairGuideCards: GuideCard[] = [
  {
    title: "Best Hair Dryer UK 2026",
    description:
      "Compare Muuhu, Dyson Supersonic Nural, Cloud Nine, Shark SpeedStyle Pro and ghd for drying speed, heat protection, attachments and value.",
    href: "/best-hair-dryer-uk-2026",
    code: "TOP 5",
    group: "Hair Type Guides",
  },
].concat(
  hairGuideGroups.flatMap((group) =>
    group.guides.map((slug) => {
      const guide = hairGuides[slug];
      return {
        title: guide.cardTitle,
        description: guide.cardDescription,
        href: `/${slug}`,
        code: guide.cardCode,
        group: group.title,
      };
    }),
  ),
);
