export type PillowComparisonProduct = {
  rank: number;
  name: string;
  shortName: string;
  image: string;
  imageAlt: string;
  price: string;
  previousPrice?: string;
  score: number;
  badge: string;
  bestFor: string;
  summary: string;
  specifications: Array<[string, string]>;
  pros: string[];
  cons: string[];
  whyBelowWinner?: string;
  sourceUrl: string;
  availabilityNote?: string;
  isWinner?: boolean;
};

export const juujoProductUrl =
  process.env.NEXT_PUBLIC_JUUJO_PRODUCT_URL ||
  "https://juujo-uk.vercel.app/products/juujo-cloudalign-pillow";

export const checkedDate = "12 August 2026";

export const pillowProducts: PillowComparisonProduct[] = [
  {
    rank: 1,
    name: "Juujo CloudAlign Pillow",
    shortName: "Juujo",
    image: "/img/pillows/juujo-side-sleeper.png",
    imageAlt:
      "Side sleeper resting on the sculpted white Juujo CloudAlign pillow",
    price: "From \u00A349.99",
    previousPrice: "\u00A3100",
    score: 4.9,
    badge: "Best overall",
    bestFor:
      "Side sleepers who want dedicated shoulder space, two finished height choices and strong bundle value.",
    summary:
      "CloudAlign is the most purpose-built side-sleeper design in this comparison. Its wide 68.5 cm surface combines a central cradle, raised neck support and contoured shoulder-and-arm zones in one stable memory-foam shape. Regular and High profiles make the choice clearer than rebuilding a pillow layer by layer, while four colour options make it easier to match existing bedding.",
    specifications: [
      ["Size", "68.5 x 37 cm"],
      ["Height choices", "Regular 8.9 cm / High 10.9 cm"],
      ["Core", "High-density memory foam"],
      ["Cover", "Removable; machine washable at 30 C"],
      ["Delivery", "Free tracked UK delivery"],
    ],
    pros: [
      "Sculpted zones create dedicated space for the head, neck, shoulders and arms.",
      "Regular and High profiles avoid a one-height-fits-all decision.",
      "White, Grey, Baby Blue and Navy cover colours are available.",
      "Two-pillow and four-pillow bundles reduce the per-pillow price.",
    ],
    cons: [
      "Sold online, so there is no in-store feel test before ordering.",
      "Its sculpted shape may not fit every standard pillowcase neatly.",
      "High and coloured variants can cost more than the entry price.",
    ],
    sourceUrl: juujoProductUrl,
    isWinner: true,
  },
  {
    rank: 2,
    name: "Groove Adjustable Memory Foam Pillow 2.0",
    shortName: "Groove",
    image: "/img/pillows/groove-adjustable.jpg",
    imageAlt:
      "Groove Adjustable Memory Foam Pillow with its removable foam layers exposed",
    price: "\u00A340.50 sale",
    previousPrice: "\u00A345",
    score: 4.5,
    badge: "Best manual adjustment",
    bestFor:
      "Buyers who are happy to remove foam panels and experiment with height and groove depth.",
    summary:
      "Groove offers the broadest manual adjustment in the group. Four removable panels create five height-and-depth combinations, which is useful when shoulder depth is difficult to judge. That flexibility comes with more setup: the cover must be opened and the panel combination changed until the fit feels right.",
    specifications: [
      ["Size", "60 x 35 cm"],
      ["Height range", "4-13 cm across five combinations"],
      ["Core", "PU bamboo memory foam and removable panels"],
      ["Cover", "Machine washable at 30 C"],
      ["Trial / warranty", "100 nights / 2 years"],
    ],
    pros: [
      "Five height-and-depth combinations cover a wide range of frames.",
      "100-night sleep trial offers more time to tune the setup.",
      "Current sale price is the lowest in this comparison.",
    ],
    cons: [
      "Finding the right setup requires opening the pillow and moving foam panels.",
      "Its 60 x 35 cm footprint is smaller than Juujo's 68.5 x 37 cm surface.",
      "The main product is offered in one neutral colour treatment.",
    ],
    whyBelowWinner:
      "Groove is the stronger choice for maximum manual adjustment, but Juujo is easier to select and use: choose Regular or High and the finished sculpted surface is ready without storing or rearranging inserts.",
    sourceUrl:
      "https://www.groovepillows.co.uk/products/groove-adjustable-pillow",
  },
  {
    rank: 3,
    name: "TEMPUR Original SmartCool Pillow",
    shortName: "TEMPUR",
    image: "/img/pillows/tempur-smartcool.jpg",
    imageAlt: "TEMPUR Original SmartCool contoured pillow",
    price: "From \u00A3165",
    score: 4.3,
    badge: "Premium material pick",
    bestFor:
      "Buyers who prioritise TEMPUR material, a cool-touch cover and established brand support.",
    summary:
      "TEMPUR combines its pressure-responsive material with a removable SmartCool cover and three fixed size options. It is a polished premium choice for side and back sleepers, but the 61 x 31 cm surface is narrower and the entry price is more than three times Juujo's starting price.",
    specifications: [
      ["Size", "61 x 31 cm"],
      ["Height choices", "10/7, 11.5/8.5 or 13/10 cm"],
      ["Feel", "Medium firm TEMPUR material"],
      ["Cover", "Removable; washable up to 40 C"],
      ["Trial / guarantee", "30 nights / 3 years"],
    ],
    pros: [
      "Three fixed height sizes cover medium through extra-large profiles.",
      "SmartCool cover is removable and machine washable.",
      "30-night pillow trial and 3-year guarantee are clearly published.",
    ],
    cons: [
      "From \u00A3165, it is the most expensive option in this ranking.",
      "The 31 cm depth is the narrowest sleep surface in the comparison.",
      "Its contour does not create dedicated arm or shoulder-wing space.",
    ],
    whyBelowWinner:
      "TEMPUR has the strongest premium-brand case, but the price gap is substantial. Juujo gives side sleepers a wider surface, dedicated shoulder geometry and two simple profiles from \u00A349.99.",
    sourceUrl:
      "https://uk.tempur.com/pillows/tempur-ergonomic-pillows-UKORIGINALSC.html",
  },
  {
    rank: 4,
    name: "Simba Hybrid Pillow",
    shortName: "Simba",
    image: "/img/pillows/simba-hybrid.png",
    imageAlt: "Simba Hybrid Pillow with mesh airflow border",
    price: "\u00A3109",
    score: 4.1,
    badge: "Best cooling focus",
    bestFor:
      "Hot sleepers who prefer a familiar rectangular pillow and adjustable loose fill.",
    summary:
      "Simba's Hybrid Pillow uses removable foam Nanocubes, a cushioned outer sleeve and Stratos-treated cover fabric. Height and firmness can be changed, but doing so means opening the pillow, removing loose fill and keeping the supplied storage bag. The traditional rectangle also lacks dedicated shoulder or arm zones.",
    specifications: [
      ["Size", "70 x 45 cm"],
      ["Height", "Adjustable with removable Nanocubes"],
      ["Core", "Foam Nanocubes and Simba Renew fibres"],
      ["Cover", "Zip-off washable cover"],
      ["Delivery", "Free next-working-day to most UK postcodes"],
    ],
    pros: [
      "Loose-fill adjustment changes both height and firmness.",
      "Stratos cover treatment and mesh border focus on airflow.",
      "Generous standard-pillow footprint works with familiar bedding.",
    ],
    cons: [
      "Costs more than twice Juujo's starting price.",
      "Changing height requires handling and storing loose foam cubes.",
      "Rectangular construction provides no dedicated shoulder or arm space.",
    ],
    whyBelowWinner:
      "Simba suits shoppers who want a conventional cooling pillow. For a side-sleeper-first purchase, Juujo's defined contour is more targeted and its starting price is materially lower.",
    sourceUrl: "https://simbasleep.com/products/simba-hybrid-pillow",
  },
  {
    rank: 5,
    name: "Panda Hybrid Bamboo Pillow",
    shortName: "Panda",
    image: "/img/pillows/panda-hybrid.jpg",
    imageAlt: "Panda Hybrid Bamboo Pillow beside its retail packaging",
    price: "\u00A376.46 sale",
    previousPrice: "\u00A389.95",
    score: 3.9,
    badge: "Best bamboo cover",
    bestFor:
      "Buyers who want a medium-firm rectangular pillow with a washable bamboo cover.",
    summary:
      "Panda combines a charcoal-infused memory-foam core with a quilted bamboo cover and a medium-firm feel. Its 70 x 40 cm size is generous and the published 10-year guarantee is strong, but the fixed 13 cm height leaves less room to match different shoulder widths or sleeping positions.",
    specifications: [
      ["Size", "70 x 40 x 13 cm"],
      ["Weight", "2.2 kg"],
      ["Core", "Charcoal-infused memory foam"],
      ["Cover", "Bamboo cover; cool wash up to 30 C"],
      ["Trial / guarantee", "30 nights / 10 years"],
    ],
    pros: [
      "Removable bamboo cover and airflow channels support easy care.",
      "30-night trial and 10-year guarantee are clearly published.",
      "Large 70 x 40 cm rectangular surface.",
    ],
    cons: [
      "One fixed 13 cm height can be too high for smaller frames.",
      "No dedicated side-sleeper wings or central head cradle.",
      "The official page was marked unavailable when checked.",
    ],
    whyBelowWinner:
      "Panda offers excellent cover materials and a long guarantee, but Juujo gives shoppers two height choices, side-sleeper-specific geometry and a lower starting price. Panda was also unavailable on its official page at our latest check.",
    sourceUrl: "https://pandalondon.com/products/hybrid-bamboo-pillow",
    availabilityNote: "Official page marked unavailable when checked",
  },
];

export const methodologyPoints = [
  ["Side-sleeper geometry", "30%", "Shoulder clearance, head cradle and neck support"],
  ["Height and fit", "25%", "Profile choice and clarity before ordering"],
  ["Offer and value", "20%", "Current UK price, bundle value and availability"],
  ["Materials and care", "15%", "Core construction, cover removal and washing"],
  ["Buyer protection", "10%", "Published delivery, trial and guarantee terms"],
] as const;
