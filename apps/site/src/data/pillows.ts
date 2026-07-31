export type PillowComparisonProduct = {
  rank: number;
  name: string;
  image: string;
  imageAlt: string;
  price: string;
  score: string;
  badge: string;
  bestFor: string;
  summary: string;
  specifications: Array<[string, string]>;
  pros: string[];
  cons: string[];
  sourceUrl: string;
  isWinner?: boolean;
};

export const juujoProductUrl =
  process.env.NEXT_PUBLIC_JUUJO_PRODUCT_URL ||
  "https://juujo-uk.vercel.app/products/juujo-cloudalign-pillow";

export const pillowProducts: PillowComparisonProduct[] = [
  {
    rank: 1,
    name: "Juujo CloudAlign Pillow",
    image: "/img/pillows/juujo-cloudalign.png",
    imageAlt:
      "Plain white Juujo CloudAlign pillows showing the sculpted surface and side profile",
    price: "£49.99",
    score: "9.7 / 10",
    badge: "Best overall",
    bestFor:
      "Side sleepers who want defined shoulder space, a choice of profile and strong bundle value.",
    summary:
      "CloudAlign takes the most purpose-built approach in this group. Its central cradle, neck channels, side-sleeper wings and arm space are shaped into one stable memory-foam surface. Regular and High profiles make the fit easier to judge, while four washable-cover colours and straightforward bundle pricing give it a clearer buying proposition than most specialist pillows.",
    specifications: [
      ["Size", "68.5 × 37 cm"],
      ["Profiles", "Regular 8.9 cm / High 10.9 cm"],
      ["Core", "High-density memory foam"],
      ["Cover", "Removable, machine washable at 30°C"],
      ["Delivery", "Free tracked UK delivery"],
    ],
    pros: [
      "Six defined zones for the head, neck, shoulders and arms.",
      "Regular and High profile choices instead of a single fixed height.",
      "White, Grey, Baby Blue and Navy Blue cover colours.",
      "Strong two-pillow and four-pillow bundle pricing.",
    ],
    cons: [
      "Available online only.",
      "A sculpted pillow can take a few nights to feel familiar.",
    ],
    sourceUrl:
      "https://juujo-uk.vercel.app/products/juujo-cloudalign-pillow",
    isWinner: true,
  },
  {
    rank: 2,
    name: "Groove Adjustable Memory Foam Pillow 2.0",
    image: "/img/pillows/groove-adjustable.jpg",
    imageAlt: "Groove Adjustable Memory Foam Pillow 2.0",
    price: "£45",
    score: "9.1 / 10",
    badge: "Best adjustable",
    bestFor: "Sleepers who want to add or remove layers to tune pillow height.",
    summary:
      "Groove offers the broadest manual adjustment range. Four removable panels create petite, regular and tall configurations, which is useful when shoulder depth is hard to estimate before buying. The trade-off is setup complexity: finding the right layer combination takes more effort than choosing a finished Regular or High profile.",
    specifications: [
      ["Size", "60 × 35 cm"],
      ["Height", "Adjustable from 4 to 13 cm"],
      ["Core", "PU bamboo memory foam"],
      ["Trial", "100 nights"],
      ["Warranty", "2 years"],
    ],
    pros: [
      "Multiple height and groove combinations.",
      "Removable cover can be machine washed at 30°C.",
      "100-night trial and 2-year manufacturer warranty.",
    ],
    cons: [
      "Layer setup is less immediate than a finished profile.",
      "Only one main colour treatment.",
    ],
    sourceUrl:
      "https://www.groovepillows.co.uk/products/groove-adjustable-pillow",
  },
  {
    rank: 3,
    name: "Panda Memory Foam Bamboo Pillow",
    image: "/img/pillows/panda-bamboo.jpg",
    imageAlt: "Panda Memory Foam Bamboo Pillow",
    price: "£44.95",
    score: "8.8 / 10",
    badge: "Best long guarantee",
    bestFor: "Buyers who prefer a familiar rectangular pillow and bamboo cover.",
    summary:
      "Panda keeps the traditional pillow shape while using a medium-firm memory-foam core and a removable bamboo-blend cover. It is a credible all-position option with an unusually long registered guarantee, but it does not provide the dedicated shoulder wings or profile choice offered by the more sculpted designs.",
    specifications: [
      ["Size", "60 × 40 × 12 cm"],
      ["Weight", "1.8 kg"],
      ["Core", "Third-generation memory foam"],
      ["Trial", "30 nights"],
      ["Guarantee", "Up to 10 years with registration"],
    ],
    pros: [
      "Familiar rectangular shape fits standard bedding easily.",
      "Removable bamboo-blend cover.",
      "30-night trial and long registered guarantee.",
    ],
    cons: [
      "Single fixed 12 cm height.",
      "No dedicated shoulder or arm zones.",
    ],
    sourceUrl:
      "https://pandalondon.com/products/bamboo-memory-foam-pillow",
  },
  {
    rank: 4,
    name: "TEMPUR Original SmartCool Pillow",
    image: "/img/pillows/tempur-smartcool.jpg",
    imageAlt: "TEMPUR Original SmartCool ergonomic pillow",
    price: "£149",
    score: "8.6 / 10",
    badge: "Premium material pick",
    bestFor: "Buyers who prioritise TEMPUR material and established brand support.",
    summary:
      "TEMPUR is the premium-brand option, with three sizes, a contoured shape and a removable SmartCool cover. The product is well specified and backed by a 30-night trial and 3-year guarantee, but its current selling price is roughly three times Juujo's single-pillow price.",
    specifications: [
      ["Size range", "61 × 31 cm; three height options"],
      ["Feel", "Medium firm"],
      ["Cover", "Removable, washable up to 40°C"],
      ["Trial", "30 nights"],
      ["Guarantee", "3 years"],
    ],
    pros: [
      "Three size options.",
      "Established premium material and brand support.",
      "30-night pillow trial and 3-year guarantee.",
    ],
    cons: [
      "Highest price in this comparison.",
      "Narrower shape with no dedicated arm space.",
    ],
    sourceUrl:
      "https://uk.tempur.com/pillows/tempur-ergonomic-pillows-UKORIGINALSC.html",
  },
  {
    rank: 5,
    name: "REM-Fit 500 Cool Gel Pillow",
    image: "/img/pillows/remfit-cool-gel.jpg",
    imageAlt: "REM-Fit 500 Cool Gel Pillow",
    price: "£59.99",
    score: "8.3 / 10",
    badge: "Best cooling focus",
    bestFor: "Hot sleepers who prioritise a gel-infused foam surface.",
    summary:
      "REM-Fit's 500 Cool Gel model puts temperature management ahead of shape customisation. Its gel-infused memory foam, washable cover and 100-night trial make a solid case for hot sleepers, but it provides a conventional rectangular surface rather than dedicated side-sleeper zones.",
    specifications: [
      ["Core", "Gel-infused memory foam"],
      ["Cover", "Removable and washable"],
      ["Delivery", "Free UK delivery"],
      ["Trial", "100 nights"],
      ["Guarantee", "Up to 5 years with protector"],
    ],
    pros: [
      "Cooling-focused gel-infused memory foam.",
      "Removable washable cover.",
      "100-night trial and free UK delivery.",
    ],
    cons: [
      "Single rectangular sleep surface.",
      "Guarantee length depends on the protector terms.",
    ],
    sourceUrl:
      "https://www.rem-fit.co.uk/products/rem-fit-500-cool-gel-pillow-1",
  },
];

export const methodologyPoints = [
  "Current UK selling price and clarity of the full offer",
  "Side-sleeper shoulder clearance and available height choice",
  "Core construction, shape stability and cover care",
  "Trial, guarantee, delivery and returns information",
  "Ease of selecting the right option before purchase",
] as const;
