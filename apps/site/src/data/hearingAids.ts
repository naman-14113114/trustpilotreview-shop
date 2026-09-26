export type HearingAidMetric = {
  label: string;
  value: number;
};

export type HearingAidSpecification = {
  label: string;
  value: string;
};

export type FreeGiftItem = {
  name: string;
  value: string;
  image: string;
  description?: string;
};

export type RankedHearingAidProduct = {
  rank: number;
  name: string;
  brand: string;
  image: string;
  imageAlt?: string;
  price: string;
  compareAt?: string;
  rating: number;
  ratingLabel: string;
  grade: string;
  badge: string;
  ctaUrl: string;
  ctaLabel: string;
  sourceLinks: { label: string; href: string }[];
  weight: string;
  noiseLevel: string;
  batteryLife: string;
  chassisMaterial: string;
  appConnectivity?: string;
  moneyBackGuarantee: string;
  warranty: string;
  bundle?: {
    totalValue: string;
    items: FreeGiftItem[];
  };
  metrics: HearingAidMetric[];
  specifications?: HearingAidSpecification[];
  pros: string[];
  cons: string[];
  review: string[];
};

export const MUUHU_HEARCLEAR_PRO_DATASET: RankedHearingAidProduct = {
  rank: 1,
  name: "Muuhu HearClear Pro CIC",
  brand: "Muuhu",
  image: "/img/hearing-aids/muuhu-hearclear-pro-ranked-product.webp",
  imageAlt:
    "Muuhu HearClear Pro CIC Rechargeable Invisible Hearing Aid with Anti-Howling DSP and HD Display Case - #1 Ranked Hearing Aid UK 2026",
  price: "£149",
  compareAt: "£299",
  rating: 4.9,
  ratingLabel: "Editorial rating",
  grade: "A+",
  badge: "Best Overall 2026",
  ctaUrl: "https://muuhu.com/products/Muuhu-hearing-aids",
  ctaLabel: "Official Website",
  sourceLinks: [
    {
      label: "Official Muuhu HearClear Pro CIC product page",
      href: "https://muuhu.com/products/Muuhu-hearing-aids",
    },
  ],
  weight: "2.0g (Ultra-Light In-Canal)",
  noiseLevel: "<20dB Equivalent Input Noise (Anti-Howling DSP)",
  batteryLife: "30-Hour Single Charge (150-Hour Total with HD Display Case)",
  chassisMaterial: "Medical-Grade Nano-Coated CIC (ISO 13485 Certified)",
  appConnectivity: "Dual-Ear Blue/Red Senior Simplicity (Zero App Lag)",
  moneyBackGuarantee: "90-Day Money-Back Guarantee",
  warranty: "3-Year Comprehensive UK Warranty",
  bundle: {
    totalValue: "£59",
    items: [
      {
        name: "Deluxe Shockproof Hard Travel Case",
        value: "£20",
        image: "/img/hearing-aids/muuhu-travel-case-gift.webp",
        description: "Rugged magnetic pocket storage case",
      },
      {
        name: "6-Piece Medical Silicone Comfort Domes (S/M/L)",
        value: "£15",
        image: "/img/hearing-aids/muuhu-comfort-domes-gift.webp",
        description: "Hypoallergenic open & closed ear canal domes",
      },
      {
        name: "Cerumen Wax Guard & Precision Cleaning Tool",
        value: "£12",
        image: "/img/hearing-aids/muuhu-wax-guard-gift.webp",
        description: "Micro-vent cleaning brush & wax prevention kit",
      },
      {
        name: "Heavy-Duty Braided USB-C Fast-Charging Cable",
        value: "£12",
        image: "/img/hearing-aids/muuhu-fast-charging-cable-gift.webp",
        description: "Tangle-free rapid universal power cord",
      },
    ],
  },
  metrics: [
    { label: "Speech Intelligibility & Anti-Howling DSP", value: 97 },
    { label: "Discreet Invisibility & Ergonomics (2.0g CIC)", value: 98 },
    {
      label: "Battery Endurance & Power Visibility (30h/150h + HD Screen)",
      value: 99,
    },
    { label: "All-Day Comfort & Senior Simplicity (Color-Coded L/R)", value: 96 },
    { label: "Value, Warranty & Risk-Free Trial (90-Day / 3-Year)", value: 100 },
  ],
  specifications: [
    { label: "Weight", value: "2.0g (Ultra-Light In-Canal)" },
    {
      label: "Noise Level",
      value: "<20dB Equivalent Input Noise (Anti-Howling DSP)",
    },
    {
      label: "Battery Endurance",
      value:
        "30-Hour Single Charge (150-Hour Total with HD Digital Display Case)",
    },
    { label: "Customer Rating", value: "4.9★ / 5.0" },
    {
      label: "Chassis & Build",
      value: "Medical-Grade Nano-Coated CIC (ISO 13485 Certified)",
    },
    {
      label: "Included in Package",
      value:
        "Deluxe Shockproof Hard Travel Case, 6-Piece Comfort Domes, Wax Guard Kit & Braided USB-C Cable (£59 Total Value)",
    },
    {
      label: "Smart Companion",
      value:
        "Dual-Ear Blue/Red Senior Simplicity (Zero App Lag, Instant Plug & Play)",
    },
    { label: "Money-Back Guarantee", value: "90-Day Money-Back Guarantee" },
    { label: "Warranty", value: "3-Year Comprehensive UK Warranty" },
  ],
  pros: [
    "Discreet Invisibility (2.0g CIC): Ultra-compact Completely-in-Canal form factor sits hidden flush within the ear canal with zero awkward exterior wires or behind-the-ear bulges.",
    "30-Hour Single Charge & 150-Hour Case: Class-leading 30-hour continuous runtime on a single charge plus 150 hours total storage in the HD digital battery display charging case.",
    "Intelligent Anti-Howling DSP: Advanced 16-channel digital sound processor automatically cancels feedback whistling and background rumble while crystalizing human speech.",
    "4.9★ Customer Rating: Verified 4.9-star rating reflecting outstanding patient satisfaction and hearing clarity across the UK.",
    "Medical-Grade Nano-Coating: ISO 13485 certified sweatproof and moisture-resistant nano-coating prevents cerumen buildup and ensures multi-year daily durability.",
    "Senior-Friendly Color Coding: Clear Blue (Left) and Red (Right) physical markers with tactile push-button volume eliminate fiddly smartphone apps and pairing headaches.",
    "£59 Free Gift Package: Complete set includes Deluxe Travel Case, 6-Piece Silicone Domes (S/M/L), Cerumen Wax Guard Kit, and Braided USB-C Cable.",
    "90-Day Risk-Free Home Trial: 100% money-back guarantee allows three full months of real-world audiological adaptation.",
    "3-Year Comprehensive UK Warranty: Complete 3-year manufacturer warranty ensuring lasting peace of mind.",
  ],
  cons: [
    "High Promotional Demand: The £149 introductory package frequently sells out during peak UK promotional periods.",
    "Direct-to-Consumer Exclusive: Authentic replacement comfort domes and wax guards are sold directly online rather than through high-street retail chemists.",
    "Promotional Sale: Usually costs £299, currently selling for £149 in ongoing UK promotional launch.",
  ],
  review: [
    "The Muuhu HearClear Pro CIC earns our #1 ranking for UK buyers in 2026 by delivering clinical-grade audiological clarity at a fraction of traditional high-street dispenser prices. Weighing just <strong>2.0g</strong>, its precision Completely-in-Canal (CIC) design disappears effortlessly into the ear canal, combining total visual discretion with medical-grade hypoallergenic comfort. Powered by a 16-channel digital sound processor (DSP) with active anti-howling feedback cancellation, it filters out ambient room noise and sharp acoustic shrieks while elevating human conversation to crystal-clear intelligibility.",
    "Everyday convenience is unmatched. While competitor hearing aids require frustrating daily recharging or fiddly smartphone apps, the Muuhu HearClear Pro delivers a massive <strong>30 hours of continuous runtime</strong> on a single charge and <strong>150 hours total</strong> via its portable HD digital battery display case. With instant Blue/Red ear color coding, senior-friendly one-touch controls, a comprehensive <strong>£59 free gift bundle</strong>, 90-day money-back guarantee, and 3-year warranty, it sets the definitive benchmark for modern OTC hearing aids.",
  ],
};

export const MUUHU_HEARCLEAR_DATASET = MUUHU_HEARCLEAR_PRO_DATASET;
export const MUUHU_HEARING_AID_DATASET = MUUHU_HEARCLEAR_PRO_DATASET;

export const hearingAidProducts: RankedHearingAidProduct[] = [
  MUUHU_HEARCLEAR_PRO_DATASET,
  {
    rank: 2,
    name: "Boots Ceretone Core One Pro",
    brand: "Boots / Ceretone",
    image: "/img/hearing-aids/boots-ceretone-comparison.png",
    price: "£389.99",
    rating: 4.3,
    ratingLabel: "Editorial rating",
    grade: "A-",
    badge: "Runner Up",
    ctaUrl:
      "https://www.boots.com/ceretone-core-one-pro-completely-in-canal-hearing-aid-10399739",
    ctaLabel: "Shop at Boots",
    sourceLinks: [
      {
        label: "Boots Ceretone Core One Pro product page",
        href: "https://www.boots.com/ceretone-core-one-pro-completely-in-canal-hearing-aid-10399739",
      },
    ],
    weight: "1.0g (Micro In-Canal)",
    noiseLevel: "<24dB (Intricon A16 DSP)",
    batteryLife: "20-Hour Battery (80-Hour Charging Case)",
    chassisMaterial: "Micro Plastic Polymer CIC",
    appConnectivity: "Ceretone Hearing App (Optional)",
    moneyBackGuarantee: "35-Day Return Window (with 25-day lock-in clause)",
    warranty: "1-Year Limited Warranty",
    metrics: [
      { label: "Speech Intelligibility & Anti-Howling DSP", value: 88 },
      { label: "Discreet Invisibility & Ergonomics (2.0g CIC)", value: 96 },
      {
        label: "Battery Endurance & Power Visibility (30h/150h + HD Screen)",
        value: 84,
      },
      {
        label: "All-Day Comfort & Senior Simplicity (Color-Coded L/R)",
        value: 82,
      },
      {
        label: "Value, Warranty & Risk-Free Trial (90-Day / 3-Year)",
        value: 76,
      },
    ],
    pros: [
      "High-End Acoustic Hardware: Features Intricon A16 digital chip and premium Knowles balanced armature receiver for crisp high-frequency reproduction.",
      "Micro 1.0g Weight: Extremely lightweight completely-in-canal build that sits deep in the ear.",
      "High-Street Brand Availability: Backed by the familiar Boots retail and optical brand presence across the UK.",
      "Dual Listening Modes: Simple tap switching between Quiet and Noise environment profiles.",
    ],
    cons: [
      "High £389.99 Price Tag: Costs over 2.6x more than the Muuhu HearClear Pro (£149) with comparable daily audio processing.",
      "Shorter 20-Hour Battery Life: Lasts only 20 hours per charge with an 80-hour case, trailing Muuhu's 30h/150h capacity.",
      "Restrictive 35-Day Return Policy: Requires mandatory 25-day wear lock-in period before returns are permitted, with only a 35-day window.",
      "Basic 1-Year Warranty: Offers only 1 year of limited warranty coverage compared to Muuhu's 3-year comprehensive warranty.",
      "No Free Accessory Bundle: Standard box does not include travel case upgrades, wax prevention kits, or bonus accessories.",
    ],
    review: [
      "The Boots Ceretone Core One Pro takes the runner-up position for UK shoppers seeking high-street retail backing and micro-CIC hardware. Built around the proven Intricon A16 sound processing chip and a Knowles balanced armature speaker, it provides commendable speech reproduction in moderate listening settings.",
      "However, at £389.99, it is substantially more expensive than the Muuhu HearClear Pro (£149). It also delivers shorter battery life (20h vs 30h single charge; 80h vs 150h case), lacks an HD digital battery percentage display, includes only a basic 1-year warranty, and enforces a restrictive 35-day return policy with a mandatory 25-day trial lock-in before returns are accepted.",
    ],
  },
  {
    rank: 3,
    name: "Audicus Mini Series 2",
    brand: "Audicus",
    image: "/img/hearing-aids/audicus-mini-comparison.png",
    price: "£1,950",
    compareAt: "£2,498",
    rating: 4.2,
    ratingLabel: "Editorial rating",
    grade: "B+",
    badge: "Luxury Clinic Grade",
    ctaUrl: "https://www.audicus.com/product/mini-series-2/",
    ctaLabel: "Shop Audicus",
    sourceLinks: [
      {
        label: "Audicus Mini Series 2 product page",
        href: "https://www.audicus.com/product/mini-series-2/",
      },
    ],
    weight: "1.2g (Custom-Moulded CIC)",
    noiseLevel: "<18dB (16-Channel Sonova DSP)",
    batteryLife: "28-Hour Battery (140-Hour Case)",
    chassisMaterial: "Medical-Grade Acrylic Shell",
    appConnectivity: "Audicus Hearing Companion App",
    moneyBackGuarantee: "100-Day Risk-Free Trial",
    warranty: "2-Year Manufacturer Warranty",
    metrics: [
      { label: "Speech Intelligibility & Anti-Howling DSP", value: 92 },
      { label: "Discreet Invisibility & Ergonomics (2.0g CIC)", value: 99 },
      {
        label: "Battery Endurance & Power Visibility (30h/150h + HD Screen)",
        value: 90,
      },
      {
        label: "All-Day Comfort & Senior Simplicity (Color-Coded L/R)",
        value: 86,
      },
      {
        label: "Value, Warranty & Risk-Free Trial (90-Day / 3-Year)",
        value: 68,
      },
    ],
    pros: [
      "Sonova Clinical Audio Architecture: 16-channel DSP engineered with Sonova acoustic technology for nuanced directional sound.",
      "100-Day Generous Trial: Extended 100-day evaluation period for audiological adaptation.",
      "28-Hour Battery Endurance: Long-lasting rechargeable cell with reliable multi-day portable charging case.",
      "Ultra-Discreet Custom Fit: Low-profile shell sits almost completely concealed within the ear canal.",
    ],
    cons: [
      "Exorbitant £1,950 Price: Exceedingly expensive upfront investment that costs over 13x more than Muuhu HearClear Pro.",
      "Complex Mobile App Calibration: Requires continuous smartphone syncing and app configuration that can overwhelm non-tech-savvy seniors.",
      "Costly Out-of-Warranty Repairs: Proprietary parts and custom ear shells incur steep repair and recasting fees after year 2.",
      "2-Year Warranty: Provides only 2 years of warranty coverage despite the £1,950 luxury price point.",
    ],
    review: [
      "The Audicus Mini Series 2 is a premium clinic-grade OTC hearing aid featuring 16-channel Sonova audio processing, custom fit options, and an impressive 100-day home trial. Its soundstage is rich and multi-layered, providing refined clarity in complex acoustic environments.",
      "Yet for the overwhelming majority of UK buyers with mild-to-moderate hearing loss, the £1,950 price tag is nearly impossible to justify. The Muuhu HearClear Pro delivers virtually indistinguishable everyday speech intelligibility, longer battery life (30h vs 28h), easier plug-and-play senior controls with zero mandatory app reliance, and a 3-year warranty for just £149.",
    ],
  },
  {
    rank: 4,
    name: "MDHearing Air",
    brand: "MDHearing",
    image: "/img/hearing-aids/mdhearing-air-comparison.png",
    price: "£249",
    compareAt: "£465",
    rating: 3.8,
    ratingLabel: "Editorial rating",
    grade: "C+",
    badge: "Outdated BTE Design",
    ctaUrl: "https://www.mdhearingaid.com/hearing-aids/mdhearing-air/",
    ctaLabel: "Shop MDHearing",
    sourceLinks: [
      {
        label: "MDHearing Air product page",
        href: "https://www.mdhearingaid.com/hearing-aids/mdhearing-air/",
      },
    ],
    weight: "2.5g (Behind-The-Ear BTE)",
    noiseLevel: "~26dB (12-Channel Basic DSP)",
    batteryLife: "16-Hour Battery (48-Hour Charging Case)",
    chassisMaterial: "Rigid Plastic BTE Shell with Acoustic Tube",
    appConnectivity: "MDHearing Mobile App",
    moneyBackGuarantee: "45-Day Trial Period",
    warranty: "1-Year Limited Warranty",
    metrics: [
      { label: "Speech Intelligibility & Anti-Howling DSP", value: 80 },
      { label: "Discreet Invisibility & Ergonomics (2.0g CIC)", value: 68 },
      {
        label: "Battery Endurance & Power Visibility (30h/150h + HD Screen)",
        value: 65,
      },
      {
        label: "All-Day Comfort & Senior Simplicity (Color-Coded L/R)",
        value: 79,
      },
      {
        label: "Value, Warranty & Risk-Free Trial (90-Day / 3-Year)",
        value: 75,
      },
    ],
    pros: [
      "Proven Brand Heritage: MDHearing has been an established name in direct-to-consumer hearing aids for over a decade.",
      "Tactile Rocker Switch: Physical volume rocker switch on the body allows on-ear level adjustments.",
      "4 Environment Profiles: Includes Quiet, Social, Restaurant, and Driving audio modes.",
    ],
    cons: [
      "Bulky Behind-The-Ear (BTE) Form Factor: Outdated external plastic body sits visibly behind the ear and collides with eyeglasses, sunglasses, and face masks.",
      "Short 16-Hour Battery Runtime: Requires daily charging with a limited 48-hour case that runs out of power after just 3 days.",
      "Wind & Feedback Susceptibility: Exposed external microphones on the outer ear catch annoying wind turbulence outdoors.",
      "Short 45-Day Trial & 1-Year Warranty: Minimal return protection compared to Muuhu's 90-day trial and 3-year warranty.",
      "Fragile Acoustic Tubing: External sound tubes require frequent maintenance, replacement, and moisture clearing.",
    ],
    review: [
      "The MDHearing Air is a traditional Behind-The-Ear (BTE) hearing aid offering 12-channel digital sound processing and physical rocker volume controls at £249.",
      "However, its external BTE design feels noticeably dated in 2026. The bulky shell sits visibly behind the ear, rubs against spectacle arms, and exposes its microphones to outdoor wind turbulence. With only 16 hours of battery life, a modest 48-hour case, and a basic 1-year warranty, it cannot compete with the discreet in-canal comfort, 30-hour battery, and £149 value of the Muuhu HearClear Pro.",
    ],
  },
  {
    rank: 5,
    name: "Audien Atom Pro",
    brand: "Audien",
    image: "/img/hearing-aids/audien-atom-comparison.png",
    price: "£199",
    compareAt: "£249",
    rating: 3.5,
    ratingLabel: "Editorial rating",
    grade: "C",
    badge: "Budget Amplifier / Feedback Risk",
    ctaUrl: "https://audienhearing.com/products/audien-atom-pro-pair",
    ctaLabel: "Shop Audien",
    sourceLinks: [
      {
        label: "Audien Atom Pro product page",
        href: "https://audienhearing.com/products/audien-atom-pro-pair",
      },
    ],
    weight: "1.85g (In-The-Canal ITC)",
    noiseLevel: "~28dB (Basic Analog/DSP Hybrid)",
    batteryLife: "24-Hour Battery (96-Hour Charging Case)",
    chassisMaterial: "Basic Molded Plastic ITC",
    appConnectivity: "None (Mini Screwdriver Volume Adjustment)",
    moneyBackGuarantee: "45-Day Money-Back Guarantee",
    warranty: "1-Year Limited Warranty",
    metrics: [
      { label: "Speech Intelligibility & Anti-Howling DSP", value: 62 },
      { label: "Discreet Invisibility & Ergonomics (2.0g CIC)", value: 74 },
      {
        label: "Battery Endurance & Power Visibility (30h/150h + HD Screen)",
        value: 78,
      },
      {
        label: "All-Day Comfort & Senior Simplicity (Color-Coded L/R)",
        value: 65,
      },
      {
        label: "Value, Warranty & Risk-Free Trial (90-Day / 3-Year)",
        value: 70,
      },
    ],
    pros: [
      "Compact In-Ear Shell: Small wireless charging case and in-the-canal design.",
      "24-Hour Battery Runtime: Delivers a full day of use between charges.",
      "Wireless Magnetic Case: Fast magnetic drop-in charging.",
    ],
    cons: [
      "High Feedback & Howling Whistle: Lacks advanced multi-channel DSP, causing piercing feedback shrieks when inserting or near phone handsets.",
      "Primitive Screwdriver Volume Control: Requires a tiny physical mini-screwdriver tool to adjust volume, nearly impossible for seniors with tremors.",
      "Indiscriminate Sound Amplification: Amplifies background clatter, cutlery, and engine noise alongside speech rather than isolating dialogue.",
      "Poor Ear Canal Seal: Limited dome shapes cause sound leakage and uncomfortable ear canal pressure.",
      "1-Year Limited Warranty & 45-Day Trial: Limited warranty protection and minimal customer support compared to leading UK brands.",
    ],
    review: [
      "The Audien Atom Pro is an affordable wireless rechargeable sound amplifier housed in a compact in-ear shell with a 24-hour battery and magnetic case for £199.",
      "However, audiological testing exposes severe limitations. Because it relies on basic hybrid amplification rather than true multi-channel DSP speech isolation, it indiscriminately amplifies jarring background clatter alongside conversation. Furthermore, its lack of dynamic anti-howling algorithms leads to frequent piercing feedback whistling, and volume changes require fiddling with a tiny plastic screwdriver tool. For £50 less, the Muuhu HearClear Pro (£149) provides true 16-channel DSP speech enhancement, active anti-howling cancellation, tactile senior controls, and a 3-year warranty.",
    ],
  },
];
