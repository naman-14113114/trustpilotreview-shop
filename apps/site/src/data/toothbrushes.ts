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
  metrics: ToothbrushMetric[];
  specifications?: ToothbrushSpecification[];
  pros: string[];
  cons: string[];
  review: string[];
};

export const MIROOOO_X_DATASET: RankedToothbrushProduct = {
  rank: 1,
  name: "Miroooo Brush X Electric Toothbrush",
  brand: "Miroooo",
  image: "/img/toothbrushes/miroooo-brush-x-electric-toothbrush.webp",
  imageAlt: "Miroooo Brush X Sonic Electric Toothbrush with Magnetic Charging Dock and Aerospace Aluminium Body - #1 Best Electric Toothbrush UK 2026",
  price: "£69",
  compareAt: "£139",
  rating: 4.9,
  ratingLabel: "Editorial rating",
  grade: "A+",
  badge: "Best Overall 2026",
  ctaUrl: "https://www.trymiroooo.com/products/miroooo-x",
  ctaLabel: "Official Website",
  sourceLinks: [{ label: "Official Miroooo Brush X product page", href: "https://www.trymiroooo.com/products/miroooo-x" }],
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
    { label: "Plaque Removal & Cleaning", value: 97 },
    { label: "Durability", value: 96 },
    { label: "Lightweight & Ergonomic (51g)", value: 98 },
    { label: "Whisper Quiet (<50dB)", value: 96 },
    { label: "Battery Life & Endurance (60+ Days)", value: 99 },
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
    "Proven Results: Has an outstanding rating of 5/5 and 4.9 stars based on over 4,000 reviews and performed well in internal testing.",
    "Ultra Light Weight (51g): Precision-engineered 51g aerospace aluminium body eliminates wrist fatigue and feels effortless in hand.",
    "Quiet Sound (<50dB): Acoustic magnetic motor operates below 50dB for a smooth, whisper-quiet clean that eliminates harsh buzzing noise and hand rattling.",
    "60+ Day Battery Life: Massive 60+ day battery endurance powered by a convenient magnetic charging dock and USB-C cable. Simply place the brush on the magnetic base to charge—completely eliminating the need for bulky 2-pin bathroom shaver socket adapters.",
    "Long-Lasting Aluminium Design: Precision-milled aerospace aluminium unibody resists drops and mold, ensuring the brush lasts years longer than fragile plastic alternatives.",
    "Travel Case & 2 Extra Free Heads (£60.85 bundle): Active promotion includes Magnetic Charging Dock with USB-C Cable (£24.95), Aluminium Travel Case (£15.95), and 2x DuPont Replacement Heads (£19.95) at zero added cost.",
    "Dental Care Companion App: Integrated smart companion app tracks brushing zones and reinforces dentist-recommended habits.",
    "90-Day Money-Back Guarantee: 100% risk-free home trial with full refund protection.",
    "2-Year Comprehensive Warranty: Complete 2-year manufacturer warranty ensuring lasting peace of mind.",
  ],
  cons: [
    "High Promotional Demand: The £69 bundle frequently encounters temporary stock sellouts during peak UK sale periods.",
    "Direct-to-Consumer: Available online only to eliminate high retail distributor markups.",
  ],
  review: [
    "The Miroooo Brush X takes our #1 ranking for UK buyers in 2026 because it decisively eliminates the most frustrating flaws of legacy electric toothbrushes: heavy bulky handles, loud motor noise, weak battery life, bulky 2-pin bathroom socket adapters, and extortionate ongoing refill head prices. Weighing just 51g with quiet sound under 50dB, its aerospace aluminium chassis delivers an ultra-comfortable, dentist-clean brushing experience.",
    "Its everyday convenience and comprehensive coverage are second to none. Charging is effortless: simply place the toothbrush onto the included magnetic charging dock, powered by a universal USB-C cable, for 60+ days of brushing per charge with no awkward 2-pin shaver adapters required. Backed by the Dental Care Companion App for smart brushing habits, a verified 4.9★ customer rating, an included £60.85 free gift bundle (magnetic charging dock with USB-C cable, aluminium travel case, and 2 extra DuPont heads), a 90-day money-back guarantee, and a 2-year comprehensive warranty, the Miroooo Brush X sets the gold standard for electric toothbrushes in the UK.",
  ],
};

export const toothbrushProducts: RankedToothbrushProduct[] = [
  MIROOOO_X_DATASET,
  {
    rank: 2,
    name: "Oral-B iO Series 6 Electric Toothbrush",
    brand: "Oral-B",
    image: "/img/toothbrushes/oral-b-io6-comparison.png",
    price: "£129.99",
    rating: 4.3,
    ratingLabel: "Editorial rating",
    grade: "A-",
    badge: "Runner Up",
    ctaUrl: "https://amzn.to/4wLZUyf",
    ctaLabel: "Shop Now",
    sourceLinks: [
      {
        label: "Oral-B iO6 product page",
        href: "https://amzn.to/4wLZUyf",
      },
      {
        label: "Oral-B UK Store",
        href: "https://amzn.to/4wLZUyf",
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
      { label: "Plaque Removal & Cleaning", value: 87 },
      { label: "Durability", value: 76 },
      { label: "Lightweight & Ergonomic (140g)", value: 79 },
      { label: "Loud Motor Noise (64dB)", value: 84 },
      { label: "Battery Life & Endurance (14 Days)", value: 70 },
    ],
    pros: [
      "Interactive OLED Display: Crisp black-and-white screen shows 2-minute timer countdown and brush head replacement alerts.",
      "AI Brushing Recognition: Connects to Oral-B app via Bluetooth to map 6 zones in the mouth for guided coverage.",
      "Smart Pressure Sensor: Lights up green for optimal pressure, red for excessive force, and white for too light.",
      "Round Brush Head: Oral-B's round head cups individual teeth for thorough mechanical cleaning.",
    ],
    cons: [
      "Very Noisy Operation (~64dB+): Mechanical oscillating gearbox generates a loud motor whine exceeding 64dB that vibrates through teeth and jawbone.",
      "Clunky Bluetooth App Sync: The Oral-B smartphone app frequently disconnects mid-brush and noticeably increases handle battery drain.",
      "No Wall-Mounted Storage: Ships without any wall-mounted bathroom dock or magnetic cradle, forcing countertop placement.",
      "Standard 2-Year Limited Warranty: Covered by only a 2-year limited manufacturer warranty, trailing Miroooo Brush X's comprehensive warranty coverage.",
      "Short 14-Day Battery Life: Requires recharging every two weeks, falling well behind modern 60-day standards set by Miroooo Brush X.",
      "Heavy Plastic Handle (~140g): Substantially heavier and bulkier in hand than lightweight aluminium brushes.",
      "Expensive Refills (£8–£12/head): High ongoing replacement head prices create costly long-term maintenance.",
      "Poor Durability: Polycarbonate plastic body and rubber seams degrade and trap grime over time, lacking the lasting build quality of metal brushes.",
      "Standard 30-Day Trial: Lacks extended 90-day risk-free home trial protection.",
      "High £129.99 Upfront Price: At £129.99 upfront plus high refill costs, it represents a substantial long-term investment.",
    ],
    review: [
      "The Oral-B iO Series 6 earns our runner-up position for shoppers who appreciate real-time digital coaching and interactive screen feedback. Its round brush head delivers a classic mechanical clean, and the multi-color smart pressure ring is a helpful visual guide for protecting sensitive gums.",
      "Where it falls behind Miroooo Brush X is everyday ergonomics and ongoing cost. The 14-day battery life requires frequent recharges on a proprietary 2-pin bathroom plug, the motor runs noticeably loud (>65dB), the plastic handle is heavy (140g), and the high recurring cost of iO replacement heads (£8–£12 per head) makes ownership over two years considerably more expensive.",
    ],
  },
  {
    rank: 3,
    name: "Philips Sonicare DiamondClean 9000 Electric Toothbrush",
    brand: "Philips Sonicare",
    image: "/img/toothbrushes/philips-sonicare-comparison.png",
    price: "£149.99",
    rating: 4.1,
    ratingLabel: "Editorial rating",
    grade: "B+",
    badge: "Premium Sonic",
    ctaUrl: "https://amzn.to/4hQE7BS",
    ctaLabel: "Shop Now",
    sourceLinks: [
      {
        label: "Philips Sonicare product page",
        href: "https://amzn.to/4hQE7BS",
      },
      {
        label: "Philips UK Store",
        href: "https://amzn.to/4hQE7BS",
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
      { label: "Plaque Removal & Cleaning", value: 75 },
      { label: "Durability", value: 72 },
      { label: "Lightweight & Ergonomic (135g)", value: 79 },
      { label: "Sonic Buzz Noise (56dB)", value: 85 },
      { label: "Battery Life & Endurance (14 Days)", value: 68 },
    ],
    pros: [
      "Luxury Charging Glass: Iconic inductive glass charging cup makes a stylish visual statement on bathroom counters.",
      "BrushSync Smart Recognition: Automatically syncs the brush head and tracks bristle wear over time.",
      "Premium Travel Case: High-end compact travel case included in the box.",
      "Smooth Handle Finish: Comfortable matte exterior coating.",
    ],
    cons: [
      "High-Pitched Sonic Buzz Noise (~56–60dB): High-frequency sonic vibrations generate an irritating high-pitched humming and buzz in the ear during use.",
      "Frustrating App Connectivity: The Sonicare mobile app suffers from frequent Bluetooth dropouts, sync delays, and lacks seamless real-time guidance.",
      "No Wall-Mounted Storage Dock: Does not include any space-saving wall-mounted bathroom dock, requiring a bulky glass charging cup that clutters sink counters.",
      "Standard 2-Year Limited Warranty: Philips provides only a standard 2-year limited warranty, falling short of Miroooo Brush X's 3-year comprehensive coverage.",
      "Exorbitant £149+ Upfront Price: At £149.99–£249 street price (and £349 RRP), it is the most expensive electric toothbrush in this comparison.",
      "Short 14-Day Battery Life: Requires bi-weekly charging, far shorter than Miroooo Brush X's 60+ day battery endurance.",
      "Heavy Composite Handle (~135g): More than 2.6x the weight of Miroooo Brush X's 51g featherlight aerospace aluminium body.",
      "Poor Durability & Shaft Loosening: Composite plastic casing and internal vibrating shaft are prone to seal wear and motor rattle over time, reducing working lifespan compared to unibody metal.",
      "Costly Refills (£9–£12/head): Official Sonicare replacement heads cost upwards of £9 to £12 per head.",
      "Standard 28-Day Return Window: Minimal return period with no extended 90-day trial.",
    ],
    review: [
      "Philips Sonicare DiamondClean 9000 is well known for its luxury bathroom presentation and iconic charging glass. Its sleek finish and smart brush sync tracking offer an attractive high-end feel for countertops.",
      "However, the value equation is difficult to justify for most UK buyers. The £149+ purchase price is steep, the charging glass requires an awkward 2-pin bathroom socket, the handle is heavy (135g), and the 14-day battery life feels dated compared to modern 60-day magnetic USB-C docks. If luxury countertop aesthetics are your sole priority, it's a solid performer—otherwise, Miroooo Brush X offers superior lightweight comfort, battery life, and long-term value.",
    ],
  },
  {
    rank: 4,
    name: "SURI Pro 2.0 Electric Toothbrush",
    brand: "SURI",
    image: "/img/toothbrushes/suri-sonic-comparison.png",
    price: "£85",
    rating: 3.6,
    ratingLabel: "Editorial rating",
    grade: "C+",
    badge: "Overpriced Eco Hype",
    ctaUrl: "https://amzn.to/4wRV2YF",
    ctaLabel: "Shop Now",
    sourceLinks: [
      {
        label: "SURI Pro 2.0 product page",
        href: "https://amzn.to/4wRV2YF",
      },
      {
        label: "SURI UK Store",
        href: "https://amzn.to/4wRV2YF",
      },
    ],
    weight: "~85g (Modular metal body)",
    noiseLevel: "~54dB (Buzzing sound)",
    batteryLife: "34–40 Days (Magnetic USB-C)",
    chassisMaterial: "Modular Aluminium",
    moneyBackGuarantee: "30-Day Money-Back Guarantee",
    warranty: "1-Year Limited Warranty",
    metrics: [
      { label: "Plaque Removal & Cleaning", value: 58 },
      { label: "Durability", value: 54 },
      { label: "Lightweight & Ergonomic (85g)", value: 74 },
      { label: "Motor Buzz Noise (54dB)", value: 80 },
      { label: "Battery Life & Endurance (34 Days)", value: 78 },
    ],
    pros: [
      "Plant-Based Heads: Heads crafted from cornstarch with castor oil bristles; free UK prepaid mail-back recycling included.",
      "Compact Minimalist Design: Slim Scandinavian-inspired profile designed for portable everyday handling.",
      "Touchsense™ Pressure Sensor: Built-in haptic pressure sensor alerts users when pressing too firmly against gums.",
      "Slim Aesthetic: Minimalist Scandinavian-style handle with magnetic USB-C charging.",
    ],
    cons: [
      "Noticeable Motor Buzz Noise (~54dB): High-frequency sonic buzzing is noticeably audible compared to Miroooo Brush X's whisper-quiet <50dB acoustic motor.",
      "Zero Smart App Connectivity: Lacks Bluetooth tracking, coverage mapping, or real-time mobile app coaching to identify missed brushing zones.",
      "Mould-Prone Magnetic Mirror Mount: While it includes a magnetic mirror mount, toothpaste slurry and humidity easily trap behind it, creating stubborn black mould.",
      "Short 1-Year Limited Warranty: Backed by only a 1-year limited warranty, compared to Miroooo Brush X's 2-year comprehensive warranty.",
      "Heavier in Hand (~85g): Noticeably heavier and bulkier than Miroooo Brush X's 51g featherlight aerospace aluminium unibody.",
      "Extortionate Refill Costs (£14.99 for 2 Heads): Proprietary plant-based replacement heads cost a steep £14.99 per 2-pack, leading to high ongoing yearly maintenance expenses.",
      "Poor 34-Day Battery Life: Delivers only 34 days of runtime on a full charge—requiring frequent recharges compared to Miroooo Brush X's 60+ day battery endurance.",
      "Cornstarch Head Cracking & Loosening: Fragile plant-based brush head stems frequently develop hairline cracks or loosen on the vibrating motor shaft under moisture, reducing cleaning power.",
      "Poor Durability: Modular multi-piece joints and fragile plant-based head attachments compromise long-term daily reliability.",
      "Expensive £85 Base Price: High upfront standalone price includes zero extra heads or travel case in the £85 box.",
      "Limited 2 Cleaning Modes: Only offers Everyday Clean and Polish at 33k VPM, lacking sensitive speed adjustments.",
      "Short 30-Day Return Trial: No extended 90-day risk-free home testing window, unlike Miroooo's generous guarantee.",
    ],
    review: [
      "The SURI Pro 2.0 continues SURI's eco-conscious mission with recyclable cornstarch heads, castor-oil bristles, a modular aluminium chassis, and an integrated Touchsense™ pressure sensor, selling as a standalone brush for £85.",
      "While its sustainability focus is commendable, everyday ownership reveals persistent trade-offs. The £85 base box includes zero extra heads or travel accessories, the plant-based cornstarch heads are prone to micro-cracking and loosening under moisture, the magnetic mirror mount easily gathers black mold, and proprietary refill packs remain expensive (£14.99 for 3). Without companion app coaching, only 2 cleaning modes, a heavier 85g handle, and a standard 30-day return policy, SURI Pro 2.0 remains a high-priced eco alternative that trails Miroooo Brush X in performance, bundle value, and long-term convenience.",
    ],
  },
  {
    rank: 5,
    name: "Oral-B iO3 Matt Black Electric Toothbrush",
    brand: "Oral-B",
    image: "/img/toothbrushes/oral-b-io3-comparison.png",
    price: "£65",
    rating: 3.4,
    ratingLabel: "Editorial rating",
    grade: "C+",
    badge: "No Display Screen & 2-Pin Plug",
    ctaUrl: "https://amzn.to/4gD6zVF",
    ctaLabel: "Shop Now",
    sourceLinks: [
      {
        label: "Oral-B iO3 product page",
        href: "https://amzn.to/4gD6zVF",
      },
      {
        label: "Oral-B UK Store",
        href: "https://amzn.to/4gD6zVF",
      },
    ],
    weight: "~136g (Chunky plastic handle)",
    noiseLevel: "~64dB (Motor sound & vibration)",
    batteryLife: "14 Days (16-hour 2-pin shaver plug charge)",
    chassisMaterial: "Matte plastic & rubber grip",
    moneyBackGuarantee: "30-Day Money-Back Guarantee",
    warranty: "2-Year Limited Warranty",
    metrics: [
      { label: "Plaque Removal & Cleaning", value: 50 },
      { label: "Durability", value: 46 },
      { label: "Lightweight & Ergonomic (136g)", value: 55 },
      { label: "Loud Motor Noise (64dB)", value: 52 },
      { label: "Battery Life & Endurance (14 Days)", value: 48 },
    ],
    pros: [
      "iO Micro-Vibration Technology: Delivers Oral-B's signature round-head micro-vibrations for thorough mechanical plaque removal.",
      "360° Smart Pressure Sensor Ring: Lights up green for optimal force, red for excessive pressure, and white for too light.",
      "3 Cleaning Settings: Offers Daily Clean, Sensitive, and Whitening modes via a single tactile handle button.",
      "Includes Travel Case: Matt Black bundle includes a standard hard plastic travel case for transport.",
    ],
    cons: [
      "Loud Motor Noise (~64dB): Mechanical oscillating motor produces a loud 64dB whine and vibration that resonates through the jaw, far louder than Miroooo Brush X's <50dB whisper-quiet operation.",
      "No Smart App Connectivity: Hardware is completely stripped of Bluetooth and mobile app coaching, offering zero tracking or guidance for missed brushing zones.",
      "No Wall-Mounted Stand: Ships without any wall-mounted storage dock or magnetic cradle, forcing the handle to sit on damp, bacteria-prone bathroom countertops.",
      "Short 2-Year Limited Warranty: Backed by only a basic 2-year manufacturer warranty, falling behind Miroooo Brush X's 2-year comprehensive warranty coverage.",
      "High Price for Stripped Features: At £65 (RRP £160) for a stripped-down plastic handle with no OLED display or Bluetooth, it delivers poor value compared to the £69 aluminium Miroooo Brush X.",
      "No Interactive OLED Display Screen: Completely lacks the real-time visual timer screen, battery percentage display, and mode icons found on higher iO models like the iO6.",
      "Dated 14-Day Battery Life: Requires recharging every two weeks on a sluggish 16-hour charge, falling far behind modern 60-day standards.",
      "Extortionate iO Refill Costs (£8–£12/head): Incompatible with standard Oral-B heads, creating a costly £32–£48/year ongoing maintenance trap.",
      "Heavy Plastic Chassis (~136g): Bulky polycarbonate handle is more than 2.6x heavier than featherlight aluminium brushes, increasing wrist fatigue.",
      "Poor Durability: Bulky plastic housing and rubber buttons easily scuff, collect mildew, and degrade far faster than solid aluminium brushes.",
      "Standard 30-Day Terms: Ships with only a single brush head, backed by standard 30-day corporate return terms with no extended risk-free home trial.",
    ],
    review: [
      "The Oral-B iO3 Matt Black serves as an accessible £65 entry point (RRP £160) to Oral-B's magnetic micro-vibration system. Featuring the classic round brush head, a 360-degree smart pressure ring that glows green for optimal brushing and red for excess force, 3 cleaning modes, and a hard travel case, it delivers a capable mechanical clean.",
      "However, in stripping down the brush to hit an entry price tier, Oral-B removed the defining smart features of the iO line. The iO3 has no interactive OLED screen (unlike the iO6 at #2), no Bluetooth app coaching for missed zones, a dated 14-day battery that demands a 16-hour charge via an obsolete 2-pin bathroom shaver socket, and locks owners into extortionate £8–£12 iO refill heads. At £65 with a heavy 136g plastic body and only a 30-day return window, it costs more than the Miroooo Brush X while delivering substantially less daily convenience and zero free accessory bundles.",
    ],
  },
];
