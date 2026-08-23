export type ToothbrushMetric = {
  label: string;
  value: number;
};

export type ToothbrushSpecification = {
  label: string;
  value: string;
};

export type FreeGiftItem = {
  name: string;
  value: string;
  image: string;
  description?: string;
};

export type RankedToothbrushProduct = {
  rank: number;
  name: string;
  brand: string;
  image: string;
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
  metrics: ToothbrushMetric[];
  specifications?: ToothbrushSpecification[];
  pros: string[];
  cons: string[];
  review: string[];
};

export const MIROOOO_X_DATASET: RankedToothbrushProduct = {
  rank: 1,
  name: "Miroooo X Electric Toothbrush",
  brand: "Miroooo",
  image: "/img/toothbrushes/miroooo-x-electric-toothbrush-trio-lifestyle.webp",
  price: "£59",
  compareAt: "£119",
  rating: 4.9,
  ratingLabel: "Editorial rating",
  grade: "A+",
  badge: "Best Overall 2026",
  ctaUrl: "https://www.trymiroooo.com/products/miroooo-x",
  ctaLabel: "Official Website",
  sourceLinks: [{ label: "Official Miroooo X product page", href: "https://www.trymiroooo.com/products/miroooo-x" }],
  weight: "51g (Ultra Light Weight)",
  noiseLevel: "<50dB (Whisper Quiet)",
  batteryLife: "60+ Day Battery Life (Magnetic USB-C Dock)",
  chassisMaterial: "Aerospace Aluminium Design",
  appConnectivity: "Dental Care Companion App",
  moneyBackGuarantee: "90-Day Money-Back Guarantee",
  warranty: "2-Year Comprehensive Warranty",
  bundle: {
    totalValue: "£60.85",
    items: [
      {
        name: "Magnetic Charging Dock",
        value: "£24.95",
        image: "/img/toothbrushes/miroooo-charging-dock-gift.jpg",
        description: "Compact magnetic charging dock with USB-C cable",
      },
      {
        name: "Aluminium Travel Case",
        value: "£15.95",
        image: "/img/toothbrushes/miroooo-travel-case-gift.jpg",
        description: "Slim aerospace-grade travel protection case",
      },
      {
        name: "2x DuPont Replacement Heads",
        value: "£19.95",
        image: "/img/toothbrushes/miroooo-full-bundle.jpg",
        description: "High-density diamond-cut rounded bristle heads",
      },
    ],
  },
  metrics: [
    { label: "Lightweight & Ergonomic (51g)", value: 99 },
    { label: "Whisper Quiet (<50dB)", value: 98 },
    { label: "Battery Life & Endurance (60+ Days)", value: 99 },
    { label: "Long-Term Value & Bundle", value: 99 },
  ],
  specifications: [
    { label: "Weight", value: "51g (Ultra Light Weight)" },
    { label: "Noise Level", value: "<50dB (Whisper Quiet operation)" },
    { label: "Battery Endurance", value: "60+ Day Battery Life (Magnetic Charging Dock with USB-C Cable)" },
    { label: "Customer Rating", value: "4.9★ / 5.0" },
    { label: "Chassis & Build", value: "Aerospace Aluminium Design (Mold-resistant unibody)" },
    { label: "Free Gift Bundle", value: "Travel Case & 2 Extra Free Heads + Magnetic Dock with USB-C Cable (£60.85 bundle)" },
    { label: "Smart Companion", value: "Dental Care Companion App" },
    { label: "Money-Back Guarantee", value: "90-Day Money-Back Guarantee" },
    { label: "Warranty", value: "2-Year Comprehensive Warranty" },
  ],
  pros: [
    "Ultra Light Weight (51g): Precision-engineered 51g aerospace aluminium body eliminates wrist fatigue and feels effortless in hand.",
    "Quiet Sound (<50dB): Acoustic magnetic motor operates below 50dB for a smooth, whisper-quiet clean that eliminates harsh buzzing noise and hand rattling.",
    "60+ Day Battery Life: Massive 60+ day battery endurance powered by a convenient magnetic charging dock and USB-C cable. Simply place the brush on the magnetic base to charge—completely eliminating the need for bulky 2-pin bathroom shaver socket adapters.",
    "4.9★ Customer Rating: Verified 4.9-star rating reflecting top customer satisfaction across the UK.",
    "Aerospace Aluminium Design: Premium unibody metal construction that outperforms fragile plastic handles in durability and hygiene.",
    "Travel Case & 2 Extra Free Heads (£60.85 bundle): Active promotion includes Magnetic Charging Dock with USB-C Cable (£24.95), Aluminium Travel Case (£15.95), and 2x DuPont Replacement Heads (£19.95) at zero added cost.",
    "Dental Care Companion App: Integrated smart companion app tracks brushing zones and reinforces dentist-recommended habits.",
    "90-Day Money-Back Guarantee: 100% risk-free home trial with full refund protection.",
    "2-Year Comprehensive Warranty: Complete 2-year manufacturer warranty ensuring lasting peace of mind.",
  ],
  cons: [
    "High Promotional Demand: The £59 bundle frequently encounters temporary stock sellouts during peak UK sale periods.",
    "Direct-to-Consumer: Available online only to eliminate high retail distributor markups.",
  ],
  review: [
    "The Miroooo X takes our #1 ranking for UK buyers in 2026 because it decisively eliminates the most frustrating flaws of legacy electric toothbrushes: heavy bulky handles, loud motor noise, weak battery life, bulky 2-pin bathroom socket adapters, and extortionate ongoing refill head prices. Weighing just 51g with quiet sound under 50dB, its aerospace aluminium chassis delivers an ultra-comfortable, dentist-clean brushing experience.",
    "Its everyday convenience and comprehensive coverage are second to none. Charging is effortless: simply place the toothbrush onto the included magnetic charging dock, powered by a universal USB-C cable, for 60+ days of brushing per charge with no awkward 2-pin shaver adapters required. Backed by the Dental Care Companion App for smart brushing habits, a verified 4.9★ customer rating, an included £60.85 free gift bundle (magnetic charging dock with USB-C cable, aluminium travel case, and 2 extra DuPont heads), a 90-day money-back guarantee, and a 2-year comprehensive warranty, the Miroooo X sets the gold standard for electric toothbrushes in the UK.",
  ],
};

export const toothbrushProducts: RankedToothbrushProduct[] = [
  MIROOOO_X_DATASET,
  {
    rank: 2,
    name: "Oral-B iO Series 6 Black Lava",
    brand: "Oral-B",
    image: "/img/toothbrushes/oral-b-io6-comparison.png",
    price: "£129.99",
    compareAt: "£300",
    rating: 4.3,
    ratingLabel: "Editorial rating",
    grade: "A-",
    badge: "Runner Up",
    ctaUrl: "#",
    ctaLabel: "View Product",
    sourceLinks: [
      {
        label: "Oral-B iO6 product page",
        href: "#",
      },
      {
        label: "Oral-B UK Store",
        href: "#",
      },
    ],
    weight: "~140g (Heavy plastic handle)",
    noiseLevel: "~64dB (Oscillating motor sound)",
    batteryLife: "14 Days",
    chassisMaterial: "Plastic & rubber grip",
    appConnectivity: "Oral-B Bluetooth App",
    moneyBackGuarantee: "30-Day Money-Back Guarantee",
    warranty: "2-Year Limited Warranty",
    metrics: [
      { label: "Lightweight & Ergonomic (51g)", value: 62 },
      { label: "Quiet Sound (<50dB)", value: 55 },
      { label: "Battery Life & USB-C", value: 60 },
      { label: "Long-Term Value & Bundle", value: 65 },
    ],
    pros: [
      "Interactive OLED Display: Crisp black-and-white screen shows 2-minute timer countdown and brush head replacement alerts.",
      "AI Brushing Recognition: Connects to Oral-B app via Bluetooth to map 6 zones in the mouth for guided coverage.",
      "Smart Pressure Sensor: Lights up green for optimal pressure, red for excessive force, and white for too light.",
      "Round Brush Head: Oral-B's round head cups individual teeth for thorough mechanical cleaning.",
    ],
    cons: [
      "Very Noisy Operation (>65dB): Mechanical oscillating gearbox generates loud motor whine exceeding 65dB.",
      "Short 14-Day Battery Life: Requires recharging every two weeks, falling well behind modern 60-day standards.",
      "Bulky 2-Pin Shaver Plug: Proprietary charging stand requires a UK 2-pin bathroom socket or separate adapter.",
      "Expensive Refills (£8–£12/head): High ongoing replacement head prices create costly long-term maintenance.",
      "Heavy Plastic Handle (140g+): Substantially heavier and bulkier in hand than lightweight aluminium brushes.",
      "No 90-Day Guarantee & No Free Gifts: Lacks extended risk-free trial protection and bonus accessory bundle offers.",
    ],
    review: [
      "The Oral-B iO Series 6 earns our runner-up position for shoppers who appreciate real-time digital coaching and interactive screen feedback. Its round brush head delivers a classic mechanical clean, and the multi-color smart pressure ring is a helpful visual guide for protecting sensitive gums.",
      "Where it falls behind Miroooo X is everyday ergonomics and ongoing cost. The 14-day battery life requires frequent recharges on a proprietary 2-pin bathroom plug, the motor runs noticeably loud (>65dB), the plastic handle is heavy (140g), and the high recurring cost of iO replacement heads (£8–£12 per head) makes ownership over two years considerably more expensive.",
    ],
  },
  {
    rank: 3,
    name: "Philips Sonicare DiamondClean 9000",
    brand: "Philips Sonicare",
    image: "/img/toothbrushes/philips-sonicare-comparison.png",
    price: "£189.99",
    compareAt: "£349",
    rating: 4.1,
    ratingLabel: "Editorial rating",
    grade: "B+",
    badge: "Premium Sonic",
    ctaUrl: "#",
    ctaLabel: "View Product",
    sourceLinks: [
      {
        label: "Philips Sonicare product page",
        href: "#",
      },
      {
        label: "Philips UK Store",
        href: "#",
      },
    ],
    weight: "~135g (Standard composite)",
    noiseLevel: "~56dB (Sonic buzz)",
    batteryLife: "14 Days",
    chassisMaterial: "Composite matte finish",
    appConnectivity: "Sonicare App",
    moneyBackGuarantee: "28-Day Money-Back Guarantee",
    warranty: "2-Year Warranty",
    metrics: [
      { label: "Lightweight & Ergonomic (51g)", value: 72 },
      { label: "Quiet Sound (<50dB)", value: 75 },
      { label: "Battery Life & USB-C", value: 65 },
      { label: "Long-Term Value & Bundle", value: 58 },
    ],
    pros: [
      "Luxury Charging Glass: Iconic inductive glass charging cup makes a stylish visual statement on bathroom counters.",
      "BrushSync Smart Recognition: Automatically syncs the brush head and tracks bristle wear over time.",
      "Premium Travel Case: High-end compact travel case included in the box.",
      "Smooth Handle Finish: Comfortable matte exterior coating.",
    ],
    cons: [
      "Exorbitant £189+ Upfront Price: At £189–£249 street price (and £349 RRP), it is the most expensive toothbrush in this comparison.",
      "Short 14-Day Battery Life: Requires bi-weekly charging, far shorter than Miroooo X's 60+ day magnetic USB-C dock endurance.",
      "Heavy Composite Handle (~135g): More than double the weight of Miroooo X's 51g featherlight body.",
      "Fragile 2-Pin Glass Charger: The charging glass requires a 2-pin shaver plug and easily collects bathroom residue.",
      "Costly Refills (£9–£12/head): Official Sonicare replacement heads cost upwards of £9 to £12 per head.",
      "No 90-Day Guarantee & No Free Gifts: Zero bonus accessories included in base packages; standard 28-day return window with no extended trial.",
    ],
    review: [
      "Philips Sonicare DiamondClean 9000 is well known for its luxury bathroom presentation and iconic charging glass. Its sleek finish and smart brush sync tracking offer an attractive high-end feel for countertops.",
      "However, the value equation is difficult to justify for most UK buyers. The £189+ purchase price is steep, the charging glass requires an awkward 2-pin bathroom socket, the handle is heavy (135g), and the 14-day battery life feels dated compared to modern 60-day magnetic USB-C docks. If luxury countertop aesthetics are your sole priority, it's a solid performer—otherwise, Miroooo X offers superior lightweight comfort, battery life, and long-term value.",
    ],
  },
  {
    rank: 4,
    name: "SURI Sustainable Sonic Toothbrush",
    brand: "SURI",
    image: "/img/toothbrushes/suri-sonic-comparison.png",
    price: "£95",
    rating: 3.6,
    ratingLabel: "Editorial rating",
    grade: "C+",
    badge: "Overpriced Eco Hype",
    ctaUrl: "#",
    ctaLabel: "View Product",
    sourceLinks: [
      {
        label: "SURI product page",
        href: "#",
      },
      {
        label: "SURI UK Store",
        href: "#",
      },
    ],
    weight: "~85g (Heavy metal body)",
    noiseLevel: "~54dB (Buzzing sound)",
    batteryLife: "40 Days (Proprietary cable)",
    chassisMaterial: "Modular Aluminium",
    moneyBackGuarantee: "30-Day Money-Back Guarantee",
    warranty: "1-Year Limited Warranty",
    metrics: [
      { label: "Lightweight & Ergonomic (51g)", value: 74 },
      { label: "Quiet Sound (<50dB)", value: 80 },
      { label: "Battery Life & USB-C", value: 78 },
      { label: "Long-Term Value & Head Costs", value: 58 },
    ],
    pros: [
      "Plant-Based Heads: Heads crafted from cornstarch with castor oil bristles; free UK prepaid mail-back recycling included.",
      "Modular Aluminium Body: Designed to be taken apart and repaired rather than thrown into landfill.",
      "Slim Aesthetic: Scandinavian-style minimalist aluminium handle with magnetic wall mount.",
    ],
    cons: [
      "Heavier in Hand (~85g): Noticeably heavier than Miroooo's 51g featherlight design.",
      "Extortionate Refill Costs: Proprietary plant-based heads cost up to £14.40 per 3-pack, leading to high ongoing yearly maintenance expenses.",
      "Cornstarch Head Cracking & Loosening: Fragile plant-based brush heads frequently crack at the neck or become loose on the metal shaft during daily use.",
      "Mold-Prone Mirror Mount: Moisture and toothpaste residue easily trap behind the magnetic wall mount, requiring daily scrubbing to avoid black mold.",
      "Expensive £95–£115 Base Price (No Free Gifts): High upfront cost without included extra heads, charging dock, or travel case in the standard box.",
      "No Pressure Sensor or Gum Warning: Lacks visual pressure indicators, risking enamel abrasion and gum recession if user presses too firmly.",
      "No Smart App Connectivity: Lacks Bluetooth tracking, coverage mapping, or real-time guidance to identify missed brushing zones.",
      "Short 30-Day Return Trial: No extended 90-day risk-free home testing window, unlike Miroooo's generous guarantee.",
    ],
    review: [
      "While SURI heavily markets its eco-friendly credentials with cornstarch heads and recyclable castor-oil bristles, its everyday usability and long-term ownership costs fall short for a premium £95+ toothbrush.",
      "UK consumers frequently report fragile cornstarch heads cracking during use, black mold accumulating behind the magnetic mirror mount, a heavier metal handle (85g), and extortionate replacement head subscription costs (£14.40 per pack) with zero free accessories included in the standard £95 box. Without a pressure sensor, companion app, or 90-day trial, SURI is a triumph of green marketing over real everyday oral care value.",
    ],
  },
  {
    rank: 5,
    name: "Oral-B iO Series 2 Quiet Clean",
    brand: "Oral-B",
    image: "/img/toothbrushes/oral-b-io2-comparison.png",
    price: "£45",
    compareAt: "£75",
    rating: 3.3,
    ratingLabel: "Editorial rating",
    grade: "C+",
    badge: "Stripped Features & Costly Refills",
    ctaUrl: "#",
    ctaLabel: "View Product",
    sourceLinks: [
      {
        label: "Oral-B iO2 product page",
        href: "#",
      },
      {
        label: "Oral-B UK Store",
        href: "#",
      },
    ],
    weight: "~130g (Chunky plastic handle)",
    noiseLevel: "~66dB (Motor hum & vibration)",
    batteryLife: "7–10 Days (16-hour 2-pin shaver plug charge)",
    chassisMaterial: "Matte moulded plastic",
    moneyBackGuarantee: "30-Day Money-Back Guarantee",
    warranty: "2-Year Limited Warranty",
    metrics: [
      { label: "Lightweight & Ergonomic (51g)", value: 55 },
      { label: "Quiet Sound (<50dB)", value: 52 },
      { label: "Battery Life & USB-C", value: 48 },
      { label: "Long-Term Value & Bundle", value: 50 },
    ],
    pros: [
      "iO Micro-Vibration Technology: Delivers Oral-B's signature round-head micro-vibrations for effective mechanical plaque breakdown.",
      "3 Cleaning Settings: Offers Super Sensitive, Gentle, and Daily Clean modes via a single tactile push button.",
      "Integrated Pressure Alert: Red LED indicator alerts users when applying excessive brushing force against gums.",
      "Quadrant Pacer: Built-in 2-minute timer pulses every 30 seconds to prompt moving to the next quadrant.",
    ],
    cons: [
      "Zero Smart App or Digital Coaching: Oral-B completely stripped Bluetooth connectivity, companion app support, and real-time coverage mapping to cut manufacturing costs.",
      "Short 7–10 Day Battery Endurance: Internal battery lasts barely over a week between charges, falling far behind modern 60-day standards.",
      "Clunky 2-Pin Shaver Plug Charging: Requires a sluggish 16-hour charge on an obsolete UK 2-pin bathroom shaver dock with zero USB-C capability.",
      "Extortionate Refill Head Costs (£8–£10/head): Requires proprietary Oral-B iO replacement heads, creating an expensive recurring cost trap for an entry-level handle.",
      "No Interactive OLED Display: Lacks the visual timer screen, battery percentage display, and mode icons found on higher-tier iO models.",
      "Heavier Plastic Chassis (~130g): Chunky polycarbonate handle is more than 2.5x heavier than featherlight aluminium brushes, increasing wrist fatigue.",
      "Zero Free Gifts & Standard 30-Day Window: Ships with a single head and basic charger with no travel case, bonus accessories, or extended 90-day trial.",
    ],
    review: [
      "The Oral-B iO Series 2 serves as Oral-B's entry-level gateway into their iO magnetic micro-vibration lineup, priced around £45 (RRP £75). Featuring a round brush head, 3 basic cleaning settings, and an integrated red gum pressure warning light, it provides reliable basic plaque cleaning on flat surfaces.",
      "However, in stripping down the brush to hit an entry price point, Oral-B removed nearly all standout features that define modern electric toothbrushes. The iO2 completely lacks Bluetooth app coaching, has no interactive display screen, runs on a short 7–10 day battery requiring a sluggish 16-hour charge via an obsolete 2-pin bathroom shaver plug, and locks buyers into extortionately expensive iO replacement heads (£8–£10 per head). With a chunky 130g plastic handle, no travel accessories, and only a standard 30-day return policy, the iO2 creates a high-cost long-term trap that delivers substantially less value than the Miroooo X.",
    ],
  },
];
