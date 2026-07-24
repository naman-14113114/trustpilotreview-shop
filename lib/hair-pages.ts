export const MUUHU_HAIR_URL = "https://uk.muuhu.com/products/muuhu-hair-dryer";
export const MUUHU_PACKAGING_URL =
  "https://uk.muuhu.com/pages/premium-packaging";
export const MUUHU_COMB_URL = "https://uk.muuhu.com/products/muuhu-comb";
export const MUUHU_EBOOK_URL = "https://uk.muuhu.com/pages/haircare-ebook";

export type HairMetric = {
  label: string;
  value: number;
};

export type HairProduct = {
  rank: number;
  name: string;
  image: string;
  price: string;
  wasPrice?: string;
  rating: string;
  badge: string;
  bestFor: string;
  summary: string;
  pros: string[];
  cons: string[];
  metrics: HairMetric[];
  isWinner?: boolean;
};

export type HairPageData = {
  slug: string;
  title: string;
  description: string;
  canonical: string;
  headline: string;
  subheadline: string;
  heroImage: string;
  heroAlt: string;
  editorIntro: string;
  intro: string[];
  criteriaTitle: string;
  criteria: string[];
  productsTitle: string;
  productsIntro: string;
  products: HairProduct[];
  verdict: string;
};

const images = {
  muuhu: "/img/hair/muuhu_product_1x1.webp",
  dyson: "/img/hair/dyson.webp",
  shark: "/img/hair/shark.png",
  ghd: "/img/hair/ghd.jpg",
  loreal: "/img/hair/loreal_new.webp",
  topFive: "/img/hair/top5-uk.webp",
  threeWay: "/img/hair/vs-dyson-shark-muuhu.webp",
};

const metrics = {
  muuhu: [
    { label: "Drying Speed", value: 97 },
    { label: "Styling Versatility", value: 98 },
    { label: "Ionic and Heat Control", value: 96 },
    { label: "Attachment Value", value: 100 },
    { label: "Overall Value", value: 100 },
  ],
  dyson: [
    { label: "Drying Speed", value: 92 },
    { label: "Styling Versatility", value: 88 },
    { label: "Ionic and Heat Control", value: 94 },
    { label: "Attachment Value", value: 72 },
    { label: "Overall Value", value: 61 },
  ],
  shark: [
    { label: "Drying Speed", value: 89 },
    { label: "Styling Versatility", value: 87 },
    { label: "Ionic and Heat Control", value: 88 },
    { label: "Attachment Value", value: 82 },
    { label: "Overall Value", value: 78 },
  ],
  ghd: [
    { label: "Drying Speed", value: 90 },
    { label: "Styling Versatility", value: 50 },
    { label: "Ionic and Heat Control", value: 82 },
    { label: "Build Quality", value: 92 },
    { label: "Overall Value", value: 52 },
  ],
  loreal: [
    { label: "Drying Speed", value: 86 },
    { label: "Styling Versatility", value: 48 },
    { label: "Ionic and Heat Control", value: 88 },
    { label: "Build Quality", value: 88 },
    { label: "Overall Value", value: 46 },
  ],
};

const muuhuProduct: HairProduct = {
  rank: 1,
  name: "Muuhu 7-in-1 High-Speed Hair Dryer",
  image: images.muuhu,
  price: "£149",
  wasPrice: "£299",
  rating: "4.9 / 5",
  badge: "Best overall",
  bestFor: "UK buyers who want one complete dryer, styler and gift bundle.",
  summary:
    "Muuhu is ranked No. 1 because it gives the most complete buying argument for UK shoppers: a 110,000 RPM high-speed motor, ionic care, intelligent heat control, seven attachments, two Coanda-style auto-wrap curlers, diffuser, smoothing brush, round brush, concentrator, 2-year warranty, 90-day guarantee and the current free-gift bundle at £149. It feels like the easiest product to choose when the customer wants salon-style results without paying Dyson-level pricing.",
  pros: [
    "Complete 7-in-1 system: drying, smoothing, root lift, curls, waves, diffusing and concentrated blow-drying are all covered in one box.",
    "Best price-to-kit ratio: £149 is far easier to justify than premium rivals while still covering the main styling jobs.",
    "Coanda-style curlers included: left and right auto-wrap barrels make curls and waves part of the standard routine.",
    "Better offer stack: 2-year warranty, 90-day money-back guarantee and official free gifts reduce purchase hesitation.",
    "Clear ad-page message: visitors understand the price, attachments and value within seconds.",
  ],
  cons: [
    "Available online only, so shoppers who want a high-street demo may prefer a retailer-stocked brand.",
    "The auto-wrap curlers can take one or two sessions to master.",
    "Brand familiarity is lower than Dyson or Shark, though the price and guarantee help balance that concern.",
  ],
  metrics: metrics.muuhu,
  isWinner: true,
};

const dysonProduct: HairProduct = {
  rank: 2,
  name: "Dyson Airwrap",
  image: images.dyson,
  price: "£399.99",
  rating: "4.7 / 5",
  badge: "Premium brand pick",
  bestFor: "Buyers who want the most famous premium air-styler brand.",
  summary:
    "Dyson remains the prestige name in air styling. It has strong brand pull, refined engineering, a polished unboxing experience and excellent recognition with beauty shoppers. The challenge is value: for many UK buyers, the price is hard to justify when the core routine they want is drying, smoothing, volume and curls. Dyson still makes sense for shoppers who want the category leader, but it ranks behind Muuhu for price-to-feature value.",
  pros: [
    "Strongest brand recognition in the category.",
    "Premium design language and gift appeal.",
    "Good styling ecosystem for curls, smoothing and blow-dry routines.",
    "A credible choice when budget is less important than owning the best-known name.",
  ],
  cons: [
    "At around £399.99, it is dramatically more expensive than Muuhu.",
    "The value case weakens when the buyer mainly wants the same everyday outcomes: dry, smooth, lift and curl.",
    "Does not include Muuhu's current free accessory and guide bundle.",
    "Premium name may matter less to paid-search shoppers focused on savings.",
  ],
  metrics: metrics.dyson,
};

const sharkProduct: HairProduct = {
  rank: 3,
  name: "Shark FlexStyle",
  image: images.shark,
  price: "£199+",
  rating: "4.6 / 5",
  badge: "Familiar alternative",
  bestFor: "Buyers who want a known household brand below Dyson pricing.",
  summary:
    "Shark is the strongest familiar alternative to Dyson for many UK shoppers. It has retailer visibility, a recognizable name and a useful multi-styler promise. The weakness is that bundle contents and discount pricing can vary, which makes the buying decision less immediate. Muuhu wins the comparison when the visitor wants a cleaner offer: seven attachments, £149, warranty, guarantee and gifts.",
  pros: [
    "Familiar household brand with strong UK retailer presence.",
    "Versatile dryer-to-styler concept.",
    "Often discounted, which keeps it competitive.",
    "Good option for shoppers who trust larger retail brands.",
  ],
  cons: [
    "Usually costs more than Muuhu.",
    "Bundle contents can vary, so shoppers must check exact attachments.",
    "The value story is not as simple as Muuhu's £149 complete-kit offer.",
    "Less persuasive when the customer is comparing total included accessories.",
  ],
  metrics: metrics.shark,
};

const ghdProduct: HairProduct = {
  rank: 4,
  name: "ghd Helios",
  image: images.ghd,
  price: "£189",
  rating: "4.5 / 5",
  badge: "Salon dryer pick",
  bestFor: "Classic blow-dries and buyers who already own styling tools.",
  summary:
    "ghd Helios is a respected professional dryer with focused airflow and a strong salon reputation. It is excellent for classic smooth blow-dries, but it is not a full styling system. Shoppers still need separate tools for auto curls, diffusing, brush styling and waves, which makes Muuhu the stronger all-in-one value.",
  pros: [
    "Fast airflow and a respected salon name.",
    "Strong choice for straightforward blow-drying.",
    "Good build-quality perception.",
  ],
  cons: [
    "Dryer only: no auto-wrap curlers, diffuser, round brush or smoothing brush in the same system.",
    "Costs more than Muuhu while covering fewer styling jobs.",
    "Not the best pick for buyers who want one purchase to cover the full routine.",
  ],
  metrics: metrics.ghd,
};

const lorealProduct: HairProduct = {
  rank: 5,
  name: "L'Oreal Professionnel AirLight Pro",
  image: images.loreal,
  price: "£350",
  rating: "4.3 / 5",
  badge: "Salon-tech pick",
  bestFor: "Buyers drawn to premium salon technology.",
  summary:
    "L'Oreal AirLight Pro has an advanced salon-tech story and a premium positioning around infrared drying. It feels interesting, but it is expensive and does not match Muuhu's practical attachment range. For shoppers comparing everyday style outcomes, Muuhu gives the clearer value path.",
  pros: [
    "Premium salon positioning.",
    "Interesting infrared drying story.",
    "Good fit for dryer-first buyers who like technical product claims.",
  ],
  cons: [
    "High price for a dryer-focused product.",
    "Not as complete for curls, waves, brush styling and diffusing.",
    "Less direct-response friendly than Muuhu's simple price and kit offer.",
  ],
  metrics: metrics.loreal,
};

export const bestHairDryerPage: HairPageData = {
  slug: "best-hair-dryer-uk-2026",
  title: "Best Hair Dryer 2026 (UK)",
  description:
    "Best hair dryer UK 2026 comparison with Muuhu, Dyson, Shark, ghd and L'Oreal ranked for drying speed, styling versatility, heat control, attachments and value.",
  canonical: "/best-hair-dryer-uk-2026",
  headline: "Best Hair Dryer United Kingdom - 2026",
  subheadline:
    "We compared the UK hair dryers that shoppers actually consider for speed, styling versatility, heat control, attachments, price and warranty.",
  heroImage: "/img/hair/best-hair-dryer-uk-hero.png",
  heroAlt: "Top five UK hair dryers compared",
  editorIntro:
    "With 12 years of experience in hair styling and salon-grade haircare, Amara Wright is a certified haircare and hair style expert. She reviewed 22 popular United Kingdom hair dryers over 240 hours, comparing motor speed, heat protection, frizz control, dryer attachments, diffuser support, weight, reviews, price, and warranty. Her biggest finding was simple: the most expensive dryer was not always the best. The strongest options paired a fast brushless motor, real ionic care, and useful dryer attachments.",
  intro: [
    "Hair dryers have exploded in the UK, but the market is confusing. Prices range from around £100 to £600+, and many brands make similar claims about drying speed, shine, frizz control and salon results.",
    "For this guide we compared motor power, ionic care, intelligent heat control, attachment range, Coanda-style styling, ease of use, reviews, price and warranty. The strongest options paired a fast brushless motor with a complete styling kit and a fair price.",
  ],
  criteriaTitle: "We evaluated hair dryers based on 5 criteria",
  criteria: [
    "Motor power and drying speed",
    "Styling versatility and included attachments",
    "Ionic technology and intelligent heat control",
    "Build quality, handling and daily usability",
    "Value for money, warranty and buyer confidence",
  ],
  productsTitle: "The 5 UK hair dryers we would compare first",
  productsIntro:
    "The ranking below keeps Muuhu first because it gives the clearest overall balance of results, styling range and value for UK buyers.",
  products: [
    muuhuProduct,
    dysonProduct,
    sharkProduct,
    ghdProduct,
    lorealProduct,
  ],
  verdict:
    "For most UK buyers, Muuhu gives the most persuasive buying argument: complete styling range, strong heat-control story, £149 price, 2-year warranty, 90-day guarantee and official free gifts. Dyson remains the prestige buy, Shark remains the familiar alternative, but Muuhu is the smarter first click for value-focused shoppers.",
};

export const dysonSharkMuuhuPage: HairPageData = {
  slug: "dyson-vs-shark-vs-muuhu-uk",
  title: "Dyson vs Shark vs Muuhu UK",
  description:
    "Dyson vs Shark vs Muuhu UK comparison for price, attachments, styling range, warranty, free gifts and best buyer fit.",
  canonical: "/dyson-vs-shark-vs-muuhu-uk",
  headline: "Dyson vs Shark vs Muuhu UK",
  subheadline:
    "Dyson owns prestige, Shark owns familiarity, and Muuhu makes the strongest value case for UK shoppers who want a complete styling kit.",
  heroImage: images.threeWay,
  heroAlt: "Dyson, Shark and Muuhu hair stylers compared",
  editorIntro:
    "This editorial comparison looks at the three products UK shoppers most often compare before buying a premium hair styler. The ranking weights buyer psychology, included kit, pricing clarity, styling outcomes and purchase confidence.",
  intro: [
    "The choice is not only about technology. Dyson feels like the dream tool, Shark feels like the familiar alternative, and Muuhu feels like the practical value winner.",
    "Muuhu ranks first because it gives the strongest conversion argument: a complete 7-in-1 system, £149 price, 2-year warranty, 90-day guarantee and free gifts. Dyson and Shark are still credible, but Muuhu is easier to justify for most value-led UK shoppers.",
  ],
  criteriaTitle: "What we compared",
  criteria: [
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
  ],
  productsTitle: "The three products worth comparing",
  productsIntro:
    "This page keeps the comparison tight: Muuhu for value, Shark for familiarity, Dyson for prestige. No extra unrelated rankings are needed.",
  products: [
    {
      ...muuhuProduct,
      badge: "Best value overall",
      bestFor: "Most UK shoppers comparing Dyson and Shark before buying.",
    },
    { ...sharkProduct, rank: 2 },
    { ...dysonProduct, rank: 3 },
  ],
  verdict:
    "Muuhu is the best value choice in this three-way comparison because the offer is easiest to understand: £149, seven attachments, 2-year warranty, 90-day guarantee and free gifts. Shark is still a good familiar alternative, and Dyson is still the prestige product, but Muuhu gives the strongest price-to-kit case for paid-search visitors.",
};

export const hairPages = {
  "best-hair-dryer-uk-2026": bestHairDryerPage,
  "dyson-vs-shark-vs-muuhu-uk": dysonSharkMuuhuPage,
};
