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
  name: "Miroooo X Sonic Electric Toothbrush",
  brand: "Miroooo",
  image: "/img/toothbrushes/miroooo-x-sonic-toothbrush.jpg",
  price: "£59",
  compareAt: "£119",
  rating: 4.9,
  ratingLabel: "Editorial rating",
  grade: "A+",
  badge: "Best Overall 2026",
  ctaUrl: "#",
  ctaLabel: "Official Website",
  sourceLinks: [{ label: "Official Miroooo X product page", href: "#" }],
  weight: "51g (Ultra Light Weight)",
  noiseLevel: "<50dB (Whisper Quiet)",
  batteryLife: "60+ Day Battery Life",
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
        description: "Compact magnetic fast-charging dock",
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
    { label: "Battery Endurance", value: "60+ Day Battery Life (Universal USB-C)" },
    { label: "Customer Rating", value: "4.9★ / 5.0" },
    { label: "Chassis & Build", value: "Aerospace Aluminium Design (Mold-resistant unibody)" },
    { label: "Free Gift Bundle", value: "Travel Case & 2 Extra Free Heads + Magnetic Dock (£60.85 bundle)" },
    { label: "Smart Companion", value: "Dental Care Companion App" },
    { label: "Money-Back Guarantee", value: "90-Day Money-Back Guarantee" },
    { label: "Warranty", value: "2-Year Comprehensive Warranty" },
  ],
  pros: [
    "Ultra Light Weight (51g): Precision-engineered 51g aerospace aluminium body eliminates wrist fatigue and feels effortless in hand.",
    "Whisper Quiet (<50dB): Acoustic magnetic levitation motor operates below 50dB while delivering 40,000 VPM clinical plaque disruption.",
    "60+ Day Battery Life: Massive battery endurance with universal USB-C fast charging completely eliminates the need for bulky 2-pin bathroom shaver socket chargers.",
    "4.9★ Customer Rating: Verified 4.9-star rating reflecting top customer satisfaction across the UK.",
    "Aerospace Aluminium Design: Premium unibody metal construction that outperforms fragile plastic handles in durability and hygiene.",
    "Travel Case & 2 Extra Free Heads (£60.85 bundle): Active promotion includes Magnetic Charging Dock (£24.95), Aluminium Travel Case (£15.95), and 2x DuPont Replacement Heads (£19.95) at zero added cost.",
    "Dental Care Companion App: Integrated smart companion app tracks brushing zones and reinforces dentist-recommended habits.",
    "90-Day Money-Back Guarantee: 100% risk-free home trial with full refund protection.",
    "2-Year Comprehensive Warranty: Complete 2-year manufacturer warranty ensuring lasting peace of mind.",
  ],
  cons: [
    "High Promotional Demand: The £59 bundle frequently encounters temporary stock sellouts during peak UK sale periods.",
    "Direct-to-Consumer: Available online only to eliminate high retail distributor markups.",
  ],
  review: [
    "The Miroooo X takes our #1 ranking for UK buyers in 2026 because it decisively eliminates the most frustrating flaws of legacy electric toothbrushes: heavy bulky handles, loud motor noise, weak battery life, bulky 2-pin bathroom socket adapters, and extortionate ongoing refill head prices. Weighing just 51g with whisper-quiet operation under 50dB, its aerospace aluminium chassis houses a high-frequency acoustic levitation motor delivering 40,000 VPM of deep fluid dynamic cleaning.",
    "Its everyday convenience and comprehensive coverage are second to none. Universal USB-C charging powers 60+ days of brushing per charge, backed by the Dental Care Companion App for smart brushing habits. With a 4.9★ customer rating, an included £60.85 free gift bundle (travel case, magnetic dock, and 2 extra DuPont heads), a 90-day money-back guarantee, and a 2-year comprehensive warranty, the Miroooo X sets the gold standard for electric toothbrushes in the UK.",
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
      { label: "Whisper Quiet (<50dB)", value: 55 },
      { label: "Battery Life & Endurance (60+ Days)", value: 60 },
      { label: "Long-Term Value & Bundle", value: 65 },
    ],
    pros: [
      "Interactive OLED Display: Crisp black-and-white screen shows brushing modes, 2-minute timer countdown, and brush head replacement alerts.",
      "AI Brushing Recognition: Connects to Oral-B app via Bluetooth to map 6 zones in the mouth for guided coverage.",
      "Smart Pressure Sensor: Lights up green for optimal pressure, red for excessive force, and white for too light.",
      "Micro-vibrating Round Head: Oral-B's round head cups individual teeth for thorough mechanical cleaning.",
      "5 Brushing Modes: Daily Clean, Sensitive, Gum Care, Intense Clean, and Whiten.",
    ],
    cons: [
      "Very Noisy Operation (>65dB): Oscillating-rotating mechanical gearbox generates loud motor whine exceeding 65dB.",
      "Short 14-Day Battery Life: Requires recharging every two weeks, falling well behind modern 60-day sonic standards.",
      "Bulky 2-Pin Shaver Plug: Bulky proprietary charging dock requires a UK 2-pin bathroom socket or separate adapter.",
      "Expensive Refills (£8–£12/head): High ongoing replacement head prices create costly long-term maintenance.",
      "Heavy Plastic Handle (135g+): Substantially heavier and thicker in hand than lightweight aluminium sonic brushes.",
      "No 90-Day Guarantee & No Free Gifts: Lacks extended risk-free trial protection and bonus accessory bundle offers.",
    ],
    review: [
      "The Oral-B iO Series 6 earns our runner-up position as a formidable smart toothbrush for shoppers who appreciate real-time digital coaching. Its oscillating-rotating round brush head combined with micro-vibrations delivers a classic dentist-clean feel, and the multi-color smart pressure ring is arguably the clearest visual guide on the market for preventing gum recession.",
      "Where it falls behind Miroooo X is everyday convenience and ongoing cost. The 14-day battery life requires frequent recharges on a proprietary 2-pin bathroom plug, the motor runs noticeably loud (>65dB), and the high recurring cost of iO replacement heads (£8–£12 per head) makes ownership over two years considerably more expensive.",
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
      { label: "Whisper Quiet (<50dB)", value: 75 },
      { label: "Battery Life & Endurance (60+ Days)", value: 65 },
      { label: "Long-Term Value & Bundle", value: 58 },
    ],
    pros: [
      "62,000 Movements/Min: High-velocity sonic fluid action drives liquid deep between teeth and along the gumline.",
      "4 Modes & 3 Intensities: Clean, White+, Gum Health, and Deep Clean+ with 3 customizable power levels.",
      "Luxury Charging Glass: Iconic inductive glass charging cup makes a stylish statement on bathroom countertops.",
      "BrushSync Smart Recognition: Automatically syncs the brush head to the optimal mode and tracks bristle wear.",
      "Premium Travel Case: High-end compact case included in the box.",
    ],
    cons: [
      "Exorbitant £189+ Upfront Price: At £189–£249 street price (and £349 RRP), it is the most expensive toothbrush in this comparison.",
      "Short 14-Day Battery Life: Requires bi-weekly charging, far shorter than Miroooo X's 60+ day endurance.",
      "Fragile 2-Pin Glass Charger: The charging glass requires a 2-pin shaver plug and easily collects bathroom residue.",
      "Costly Refills (£9–£12/head): Official Sonicare replacement heads cost upwards of £9 to £12 per head.",
      "No 90-Day Guarantee & No Free Gifts: Zero bonus accessories included in base packages; standard 28-day return window with no extended trial.",
      "Motor Shaft Loosening Risk: Some users report loosening of the vibrating metal shaft after 18 to 24 months of heavy daily use.",
    ],
    review: [
      "Philips Sonicare DiamondClean 9000 is the gold standard for sonic whitening and bathroom luxury. Delivering up to 62,000 movements per minute, its fluid dynamics provide exceptional stain removal and plaque disruption, while the 4 modes and 3 intensity levels allow detailed tailoring for sensitive gums.",
      "However, the value equation is difficult to justify for most UK buyers. The £189+ purchase price is steep, the charging glass requires a 2-pin bathroom socket, and the 14-day battery life feels dated compared to modern 60-day USB-C sonic brushes. If luxury aesthetics and glass charging cups are your priority, it's a solid performer—otherwise, Miroooo X offers superior practical value.",
    ],
  },
  {
    rank: 4,
    name: "SURI Sustainable Sonic Toothbrush",
    brand: "SURI",
    image: "/img/toothbrushes/suri-sonic-comparison.png",
    price: "£95",
    rating: 3.9,
    ratingLabel: "Editorial rating",
    grade: "B",
    badge: "Eco Choice",
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
    weight: "~85g (Slim aluminium body)",
    noiseLevel: "~54dB (Quiet operation)",
    batteryLife: "40+ Days",
    chassisMaterial: "Modular Aluminium",
    moneyBackGuarantee: "30-Day Money-Back Guarantee",
    warranty: "1-Year Warranty (Repairable)",
    metrics: [
      { label: "Lightweight & Ergonomic (51g)", value: 85 },
      { label: "Whisper Quiet (<50dB)", value: 82 },
      { label: "Battery Life & Endurance (60+ Days)", value: 88 },
      { label: "Long-Term Value & Bundle", value: 72 },
    ],
    pros: [
      "Plant-Based Heads: Heads crafted from cornstarch with castor oil bristles; free UK prepaid mail-back recycling included.",
      "Modular Aluminium Body: Designed to be taken apart and repaired rather than thrown into landfill.",
      "40+ Day Battery Life: Generous lithium-ion battery with a compact magnetic charging puck.",
      "Minimalist Aesthetic: Ultra-slim Scandinavian-style aluminium handle with magnetic mirror mount.",
      "Quiet Operation: Operates at under 54dB for a quiet morning brushing experience.",
    ],
    cons: [
      "No Companion App: Lacks Bluetooth connectivity, real-time mouth mapping, and smart brushing guidance.",
      "Milder 33,000 VPM Motor: Cleaning action is noticeably softer than 40,000+ VPM acoustic levitation motors.",
      "Expensive £95 Price (No Gifts/Case): High £95 entry price for the standalone brush with no travel case included (UV case bundle is £115).",
      "Only 2 Basic Modes: Clean and Polish only; lacks dedicated sensitive gum care or deep clean cycles.",
      "Cornstarch Head Fragility: Plant-based heads can fit very tightly or occasionally crack if pushed with excessive force.",
      "Standard 30-Day Return Policy: Standard return window with no extended 90-day trial period or comprehensive gift bundle.",
    ],
    review: [
      "SURI has earned strong popularity in the UK for its admirable focus on eco-sustainability. Its plant-based cornstarch heads and castor-oil bristles can be posted back for free recycling, and the repairable aluminium body is a triumph of circular industrial design.",
      "From a clinical cleaning perspective, however, SURI's 33,000 VPM motor delivers a noticeably milder clean than the 40,000 VPM Miroooo X or 62,000 movement Sonicare. With only two basic brushing modes, no companion guidance app, and an entry price of £95 before accessories, you are paying a significant premium for sustainability over clinical cleaning power.",
    ],
  },
  {
    rank: 5,
    name: "Quip Sonic Electric Toothbrush",
    brand: "Quip",
    image: "/img/toothbrushes/quip-sonic-electric-toothbrush.jpg",
    price: "£35",
    rating: 2.3,
    ratingLabel: "Editorial rating",
    grade: "D",
    badge: "Weak Vibration Trap",
    ctaUrl: "#",
    ctaLabel: "View Product",
    sourceLinks: [
      {
        label: "Quip product page",
        href: "#",
      },
    ],
    weight: "~45g (Plastic shell with AAA battery)",
    noiseLevel: "~68dB (Motor rattle)",
    batteryLife: "Disposable AAA (approx. 3 months low power)",
    chassisMaterial: "Plastic & Rubber",
    moneyBackGuarantee: "30-Day Money-Back Guarantee",
    warranty: "Lifetime with active subscription",
    metrics: [
      { label: "Lightweight & Ergonomic (51g)", value: 70 },
      { label: "Whisper Quiet (<50dB)", value: 68 },
      { label: "Battery Life & Endurance (60+ Days)", value: 35 },
      { label: "Long-Term Value & Bundle", value: 30 },
    ],
    pros: [
      "Sleek Minimalist Aesthetic: Slim profile looks attractive in minimalist bathroom mirrors.",
      "Low Upfront Sticker Price: Low entry cost appears budget-friendly in social media advertisements.",
      "Built-in 2-Minute Timer: Quad-pacer pulses every 30 seconds to encourage full 2-minute brushing.",
      "Multi-Use Travel Cover: Sticks to mirrors and acts as a slim slip-cover for travel.",
    ],
    cons: [
      "No Companion App: Lacks Bluetooth connectivity, interactive digital coaching, and smart brushing zone tracking.",
      "Disposable AAA Battery Decay: Relies on single disposable AAA alkaline batteries with power steadily decaying instead of rechargeable USB-C lithium cells.",
      "Weak 15,000 VPM Vibration: Barely vibrates at 15,000 VPM, lacking the acoustic fluid dynamics needed to dislodge plaque between tight teeth.",
      "Zero Free Gifts & Subscription Trap: Heavy marketing pushes buyers into expensive recurring £5–£7 head refill subscriptions with zero included accessories.",
      "No Pressure Sensor: Completely lacks pressure detection or visual alerts to protect sensitive gums from abrasive over-brushing.",
      "Cheap Noisy Plastic Housing: Lightweight internal plastic mechanism prone to motor wear, rattling noise, and moisture intrusion.",
    ],
    review: [
      "Quip represents everything questionable about direct-to-consumer oral care marketing: sleek influencer aesthetics concealing fundamentally obsolete mechanics. Powered by a single disposable AAA battery producing barely 15,000 vibrations per minute, it delivers less than a third of the acoustic cleaning power found in clinical sonic brushes.",
      "The result is a brush that behaves more like a vibrating manual toothbrush than a true plaque-disrupting sonic device. With no pressure sensor, no mode flexibility, declining motor power as the battery drains, and an expensive recurring subscription model, Quip is an aesthetic novelty that fails to deliver genuine clinical oral health results.",
    ],
  },
];
