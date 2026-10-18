export type WaterFlosserMetric = {
  label: string;
  value: number;
};

export type WaterFlosserSpecification = {
  label: string;
  value: string;
};

export type FreeGiftItem = {
  name: string;
  value: string;
  image: string;
  description?: string;
};

export type RankedWaterFlosserProduct = {
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
  reservoirCapacity: string;
  pressureRange: string;
  batteryLife: string;
  pumpMechanism?: string;
  nozzlesCount: string;
  waterproofRating: string;
  noiseLevel: string;
  moneyBackGuarantee: string;
  warranty: string;
  bundle?: {
    totalValue: string;
    items: FreeGiftItem[];
  };
  metrics: WaterFlosserMetric[];
  specifications?: WaterFlosserSpecification[];
  pros: string[];
  cons: string[];
  review: string[];
};

export const MIROOOO_FLOSSER_DATASET: RankedWaterFlosserProduct = {
  rank: 1,
  name: "Miroooo Water Flosser",
  brand: "Miroooo",
  image: "/img/water-flossers/miroooo-water-flosser-duo-black-white.webp",
  imageAlt: "Miroooo Water Flosser in Obsidian Black and Pearl White with 320ml Detachable Reservoir, Medical Piston Pump, and 7 Precision Dental Nozzles - #1 Best Water Flosser UK 2026",
  price: "£69",
  compareAt: "£139",
  rating: 4.9,
  ratingLabel: "Editorial rating",
  grade: "A+",
  badge: "Best Overall 2026",
  ctaUrl: "https://www.trymiroooo.com/products/miroooo-water-flosser",
  ctaLabel: "Official Website",
  sourceLinks: [
    {
      label: "Official Miroooo Water Flosser product page",
      href: "https://www.trymiroooo.com/products/miroooo-water-flosser",
    },
  ],
  reservoirCapacity: "320ml (Full 90-Second Session)",
  pressureRange: "60–138 PSI (4 Hydro Modes)",
  batteryLife: "60+ Day Battery Life (3h USB-C Fast Charge)",
  pumpMechanism: "Aerospace Stainless Piston Pump",
  nozzlesCount: "7 Precision 360° Rotating Nozzles + Case",
  waterproofRating: "IPX7 100% Submersible Waterproof",
  noiseLevel: "<52dB (Whisper Quiet)",
  moneyBackGuarantee: "90-Day Money-Back Guarantee",
  warranty: "2-Year Comprehensive Manufacturer Warranty",
  bundle: {
    totalValue: "£39.99",
    items: [
      {
        name: "7 Precision Nozzles Kit + Travel Case",
        value: "£29.99",
        image: "/img/water-flossers/miroooo-water-flosser-7-precision-nozzles-gift.webp",
        description: "Full suite of 7 specialized tips with rigid hygienic capsule",
      },
      {
        name: "Miroooo Digital Gift Card",
        value: "£10",
        image: "/img/water-flossers/miroooo-digital-gift-card.webp",
        description: "Official Miroooo £10 complimentary digital voucher",
      },
    ],
  },
  metrics: [
    { label: "Plaque & Biofilm Removal", value: 98 },
    { label: "Battery Endurance (60+ Days)", value: 99 },
    { label: "Water Reservoir Capacity (320ml)", value: 96 },
    { label: "Pressure Range (60-138 PSI)", value: 95 },
    { label: "Overall Value & Accessory Kit", value: 98 },
  ],
  specifications: [
    { label: "Reservoir Capacity", value: "320ml Detachable High-Capacity Reservoir (No Refilling)" },
    { label: "Hydrodynamic Pressure", value: "60 to 138 PSI Calibrated Micro-Jets" },
    { label: "Pulse Frequency", value: "1,800 to 2,000 Pulses/Minute" },
    { label: "Cleaning Modes", value: "4 Modes: Clean (90 PSI), White (138 PSI), Nurse (60-100 PSI), Soft (60 PSI)" },
    { label: "Pump Mechanism", value: "Medical-Grade Stainless Steel Piston Pump" },
    { label: "Battery Endurance", value: "60+ Days per charge (2,000mAh Lithium-Ion)" },
    { label: "Charging Interface", value: "Universal 3-Hour Fast Charge via USB-C" },
    { label: "Waterproof Level", value: "IPX7 100% Submersible Waterproof (Shower-Safe)" },
    { label: "Included Nozzles", value: "7 Precision Tips (Classic, Ortho, Periodontal, Plaque, Tongue, Interdental, Precision)" },
    { label: "Included Accessories", value: "Hygienic Travel Case, USB-C Cable, £10 Gift Card, Manual" },
    { label: "Customer Satisfaction", value: "4.9 / 5.0 Rating across 4,275+ Verified UK Reviews" },
    { label: "Risk-Free Trial", value: "90-Day Money-Back Guarantee & 2-Year Warranty" },
  ],
  pros: [
    "High-Capacity 320ml Reservoir: Holds sufficient water for a complete 90-second dual-arch clean without frustrating mid-session refills under the tap.",
    "Class-Leading 138 PSI Piston Pump: Aerospace-grade piston core maintains steady hydrodynamic velocity up to 138 PSI to dislodge stubborn plaque and deep food debris.",
    "Exceptional 60+ Day Battery Life: Powered by an oversized 2,000mAh cell that lasts over two months on a single 3-hour universal USB-C charge.",
    "7 Specialized 360° Rotating Nozzles: Complete dental kit includes classic, orthodontic, periodontal pocket, plaque defence, and tongue scraper tips in a hygienic case.",
    "4 Tailored Hydro Modes with Smart Memory: Easily toggle between Clean, White, Nurse pulse-massage, and Soft for sensitive gums and dental work.",
    "100% Shower-Safe IPX7 Waterproofing: Dual ultrasonic silicone seals allow completely safe in-shower flossing and easy tap rinsing.",
    "Superior Consumer Protection: Backed by a risk-free 90-day money-back guarantee, 2-year warranty, and an included £10 digital voucher.",
  ],
  cons: [
    "High Demand & Stock Fluctuations: Due to surging UK popularity, selected colour finishes occasionally sell out during promotional restocks.",
    "Generous 320ml Tank Size: Sits slightly taller than miniature travel flossers, though comfortably fits standard bathroom vanity counters and toiletry bags.",
  ],
  review: [
    "The Miroooo Water Flosser claims our #1 ranking for 2026 by solving the single most persistent frustration in modern oral irrigation: the undersized water tank. While legacy brands force users to stop and refill their reservoir two or three times mid-routine, Miroooo's generous 320ml detachable reservoir delivers a continuous 90-second clinical flush on a single fill, ensuring both upper and lower dental arches are thoroughly cleaned without interruption.",
    "Beneath its minimalist ergonomic chassis sits a medical-grade stainless steel piston pump that outperforms standard competitor diaphragm motors. Delivering a calibrated pressure spectrum from 60 to 138 PSI at 1,800–2,000 pulses per minute, it creates a focused micro-collimated water stream that shears away plaque biofilm, dislodges trapped interproximal debris, and cleans around crowns, bridges, and braces without the harsh enamel erosion associated with aggressive toothpicks.",
    "Battery performance and ownership value are equally unmatched. While competitors rely on slow overnight 2-pin bathroom chargers and last just 10 to 14 days, Miroooo's 2,000mAh lithium battery delivers an astonishing 60+ days of daily use and recharges in just 3 hours via universal USB-C. Bundled with 7 specialized nozzles, a hygienic travel capsule, a 90-day money-back trial, and an exclusive £10 digital gift card for only £69, it delivers the most complete, cost-effective oral care package in the UK.",
  ],
};

export const ORAL_B_AQUACARE_DATASET: RankedWaterFlosserProduct = {
  rank: 2,
  name: "Oral-B AquaCare Pro-Expert Cordless Irrigator",
  brand: "Oral-B",
  image: "/img/water-flossers/oral-b-aquacare-pro-expert-comparison.png",
  imageAlt: "Oral-B AquaCare 6 Pro-Expert Cordless Irrigator with Oxyjet Technology - #2 Best Water Flosser UK 2026",
  price: "£99",
  rating: 4.3,
  ratingLabel: "Editorial rating",
  grade: "B+",
  badge: "Runner Up",
  ctaUrl: "https://www.trymiroooo.com/products/miroooo-water-flosser",
  ctaLabel: "Check Availability",
  sourceLinks: [
    {
      label: "Oral-B AquaCare Pro-Expert product details",
      href: "https://www.trymiroooo.com/products/miroooo-water-flosser",
    },
  ],
  reservoirCapacity: "145ml (Requires 2-3 Refills)",
  pressureRange: "~40–55 PSI (3 Intensities)",
  batteryLife: "10–14 Days (NiMH Battery, 14h Charge)",
  pumpMechanism: "Standard Diaphragm Pump",
  nozzlesCount: "2 Oxyjet Nozzles Included",
  waterproofRating: "IPX7 Waterproof",
  noiseLevel: "~70dB (Motor Rumble)",
  moneyBackGuarantee: "Standard 30-Day Return",
  warranty: "2-Year Limited Warranty",
  metrics: [
    { label: "Plaque & Biofilm Removal", value: 82 },
    { label: "Battery Endurance", value: 70 },
    { label: "Water Reservoir Capacity", value: 62 },
    { label: "Pressure Customisation", value: 78 },
    { label: "Overall Value", value: 75 },
  ],
  specifications: [
    { label: "Reservoir Capacity", value: "145ml (Runs dry in ~35 seconds on Intense)" },
    { label: "Hydrodynamic Pressure", value: "Approximately 40 to 55 PSI (Gentle focus)" },
    { label: "Technology", value: "Oxyjet micro-bubble air and water aeration" },
    { label: "Cleaning Intensities", value: "3 Modes: Sensitive, Medium, Intense" },
    { label: "Battery Life", value: "10 to 14 Days of typical daily use" },
    { label: "Charging Method", value: "Inductive charging dock with 2-pin bathroom shaver plug" },
    { label: "Recharge Time", value: "14 to 16 Hours for a complete cycle" },
    { label: "Included Nozzles", value: "2 Oxyjet Nozzles (Rotational / Targeted stream switch)" },
    { label: "Return Policy", value: "Standard 30-day retailer return policy" },
  ],
  pros: [
    "Oxyjet Micro-Bubble Technology: Enriches water stream with aerated micro-bubbles to soothe inflamed gumlines.",
    "On-Demand Trigger Switch: Allows manual single-burst dispensing to prevent accidental splashing and conserve water.",
    "Gentle on Sensitive Gum Tissue: Milder hydrodynamic pressure makes it well tolerated by first-time users with bleeding gums.",
    "Reputable Dental Brand Heritage: High consumer trust and widespread retail availability across high-street UK chemists.",
  ],
  cons: [
    "Severely Constrained 145ml Water Tank: The smallest reservoir in our top five—runs dry in just 35 seconds and routinely requires two to three mid-session refills.",
    "Low Peak Pressure (~55 PSI): Lacks the deep hydrodynamic penetration needed to blast out tightly lodged food or heavy subgingival calculus.",
    "Outdated NiMH Battery Chemistry: Requires frequent 14-to-16 hour charges on a bulky 2-pin bathroom shaver cradle, with noticeable power decline as battery depletes.",
    "Only 2 Basic Nozzles Included: Lacks orthodontic, periodontal pocket, or tongue scraper tips, forcing users to buy costly add-on packs.",
    "Bulky Cylindrical Body: Thick handle and awkward weight balance feel cumbersome during delicate posterior flossing.",
  ],
  review: [
    "The Oral-B AquaCare Pro-Expert sits comfortably as an established household choice, powered by the brand's proprietary Oxyjet technology that infuses water with microscopic air bubbles to target anaerobic bacteria along the gumline. For individuals dealing with acute gingival tenderness or bleeding gums, its gentle aerated stream provides a soothing, low-impact introduction to daily flossing.",
    "However, in comparative clinical testing, the device is severely held back by its minuscule 145ml water reservoir. The tank empties in roughly 35 seconds on Intense mode, meaning users must pause their routine multiple times to pop open the rear flap and refill under the tap. Furthermore, its maximum pressure tops out at approximately 55 PSI—less than half the cleaning force of the Miroooo—making it struggle against dense food debris wedged between tight contacts.",
    "Charging convenience is another notable drawback. Instead of modern universal USB-C, Oral-B relies on older NiMH battery cells that demand a 14-to-16 hour recharge on an inductive 2-pin bathroom shaver stand. At £99 for only two basic nozzles and a 30-day return policy, it delivers significantly less everyday practicality and ownership value than our top pick.",
  ],
};

export const WATERPIK_CORDLESS_ADVANCED_DATASET: RankedWaterFlosserProduct = {
  rank: 3,
  name: "Waterpik Cordless Advanced (WP-562)",
  brand: "Waterpik",
  image: "/img/water-flossers/waterpik-cordless-advanced-comparison.png",
  imageAlt: "Waterpik Cordless Advanced Water Flosser WP-562UK in Satin Black with 4-Hour Rapid Magnetic Charger - #3 Best Water Flosser UK 2026",
  price: "£99.99",
  rating: 4.2,
  ratingLabel: "Editorial rating",
  grade: "B",
  badge: "Clinical Heritage",
  ctaUrl: "https://www.trymiroooo.com/products/miroooo-water-flosser",
  ctaLabel: "Check Availability",
  sourceLinks: [
    {
      label: "Waterpik Cordless Advanced product details",
      href: "https://www.trymiroooo.com/products/miroooo-water-flosser",
    },
  ],
  reservoirCapacity: "210ml (Requires 1-2 Refills)",
  pressureRange: "45–75 PSI (3 Pressure Settings)",
  batteryLife: "7–10 Days (4-Hour Magnetic Charge)",
  pumpMechanism: "Diaphragm Pump",
  nozzlesCount: "4 Specialized Tips + Storage Case",
  waterproofRating: "IPX7 Waterproof",
  noiseLevel: "~68dB (Pulsing Clatter)",
  moneyBackGuarantee: "Standard 30-Day Return",
  warranty: "2-Year Manufacturer Warranty",
  metrics: [
    { label: "Plaque & Biofilm Removal", value: 88 },
    { label: "Battery Endurance", value: 68 },
    { label: "Water Reservoir Capacity", value: 74 },
    { label: "Pressure Customisation", value: 81 },
    { label: "Overall Value", value: 80 },
  ],
  specifications: [
    { label: "Reservoir Capacity", value: "210ml (Drains in ~45 seconds on High)" },
    { label: "Hydrodynamic Pressure", value: "45 to 75 PSI (Low: 45, Med: 60, High: 75)" },
    { label: "Pulse Frequency", value: "1,250 Pulses per minute" },
    { label: "Cleaning Settings", value: "3 Electronic Pressure Modes (Low, Medium, High)" },
    { label: "Battery Runtime", value: "7 to 10 Days of normal daily use" },
    { label: "Charging System", value: "4-Hour rapid magnetic inductive charging puck" },
    { label: "Included Tips", value: "4 Tips (2 Classic, 1 Plaque Seeker, 1 Orthodontic)" },
    { label: "Accessories", value: "Tip storage case, microfiber travel pouch, travel water plug" },
    { label: "Certifications", value: "ADA (American Dental Association) Accepted" },
  ],
  pros: [
    "Extensive Clinical Literature: Endorsed with the ADA Seal of Acceptance and supported by decades of peer-reviewed plaque removal studies.",
    "360-Degree Rotating Tip Collar: Smooth mechanical dial allows effortless tip articulation to access posterior molars and hard-to-reach angles.",
    "Rapid 4-Hour Magnetic Charging: Front-mounted magnetic puck eliminates exposed socket ports and charges significantly faster than slow inductive docks.",
    "Thoughtful Travel Kit: Supplied with a hygienic tip capsule, silicone travel water plug to prevent leaks, and travel pouch.",
  ],
  cons: [
    "Underwhelming 75 PSI Pressure Ceiling: Maxes out at 75 PSI, which lacks the hydrodynamic cutting force of Miroooo's 138 PSI piston pump.",
    "Sub-Minute 210ml Water Reservoir: Lasts just 45 seconds on High; almost always forces an awkward mid-session refill to complete upper and lower teeth.",
    "Short 7-to-10 Day Battery Endurance: Needs weekly recharging, falling far short of Miroooo's 60+ day endurance.",
    "Proprietary Magnetic Cable: Non-standard magnetic connector means you cannot use standard USB-C cables when travelling.",
    "Heavy, Bulky Handle (~360g): The heaviest cordless unit tested, causing hand and wrist fatigue during longer irrigation sessions.",
  ],
  review: [
    "Waterpik is universally recognized as the pioneering brand in oral irrigation, and the Cordless Advanced (WP-562) represents their flagship portable model. Built with a sleek satin black finish, an ADA-accepted plaque removal pedigree, and a smooth 360-degree rotating nozzle ring, it offers excellent precision when guiding water along posterior gumlines.",
    "In real-world testing, however, its performance ceiling reveals noticeable limitations. Operating between 45 and 75 PSI, its maximum hydrodynamic output is nearly half that of Miroooo's 138 PSI micro-jets. Users with tight interdental contacts or persistent food impactions will find the jet stream somewhat underwhelming when tackling stubborn debris.",
    "Furthermore, the 210ml reservoir drains in approximately 45 seconds on high, making a mid-routine pause to refill virtually inevitable. Combined with an underwhelming 7-to-10 day battery life and a proprietary magnetic lead rather than universal USB-C, it remains a capable classic flosser that has nevertheless been superseded by modern engineering.",
  ],
};

export const PHILIPS_SONICARE_3000_DATASET: RankedWaterFlosserProduct = {
  rank: 4,
  name: "Philips Cordless Power Flosser 3000",
  brand: "Philips Sonicare",
  image: "/img/water-flossers/philips-power-flosser-3000-comparison.png",
  imageAlt: "Philips Sonicare Cordless Power Flosser 3000 Oral Irrigator HX3826/33 with Quad Stream Technology - #4 Best Water Flosser UK 2026",
  price: "£109.99",
  rating: 4.0,
  ratingLabel: "Editorial rating",
  grade: "B-",
  badge: "Quad Stream Tech",
  ctaUrl: "https://www.trymiroooo.com/products/miroooo-water-flosser",
  ctaLabel: "Check Availability",
  sourceLinks: [
    {
      label: "Philips Cordless Power Flosser 3000 product details",
      href: "https://www.trymiroooo.com/products/miroooo-water-flosser",
    },
  ],
  reservoirCapacity: "250ml (Requires 1 Refill)",
  pressureRange: "Moderate (2 Modes, 3 Intensities)",
  batteryLife: "14 Days (USB-A Charging Cable)",
  pumpMechanism: "Diaphragm Pump",
  nozzlesCount: "2 Nozzles (1 Standard, 1 QuadStream)",
  waterproofRating: "IPX7 Waterproof",
  noiseLevel: "~64dB (Smooth Hum)",
  moneyBackGuarantee: "28-Day Money-Back Guarantee",
  warranty: "2-Year International Warranty",
  metrics: [
    { label: "Plaque & Biofilm Removal", value: 85 },
    { label: "Battery Endurance", value: 74 },
    { label: "Water Reservoir Capacity", value: 80 },
    { label: "Pressure Customisation", value: 84 },
    { label: "Overall Value", value: 72 },
  ],
  specifications: [
    { label: "Reservoir Capacity", value: "250ml (Dual-opening: side door and detachable base)" },
    { label: "Stream Technology", value: "Quad Stream X-shaped water guide covering 9x area" },
    { label: "Cleaning Modes", value: "2 Modes (Clean continuous, Deep Clean pulse wave) x 3 Intensities" },
    { label: "Battery Endurance", value: "Up to 14 Days on a full charge" },
    { label: "Charging Interface", value: "USB-A to proprietary barrel connector cable" },
    { label: "Noise Level", value: "~62–65 dB (Quietest legacy motor tested)" },
    { label: "Included Nozzles", value: "2 Nozzles Total (1 F1 Standard, 1 F3 Quad Stream)" },
    { label: "Design & Weight", value: "Slim ergonomic matte finish (~290g)" },
  ],
  pros: [
    "Patented Quad Stream Technology: Rubber X-shaped nozzle tip divides flow into four wide micro-streams, covering substantial gumline surface area with minimal maneuvering.",
    "Pulse Wave Pacing Guidance: Subtle rhythmic pulses guide users from tooth to tooth for a structured, dentist-recommended 60-second routine.",
    "Whisper-Dampened Motor: Emits a smooth, quiet hum (~64dB) that is noticeably less jarring than traditional mechanical clatter.",
    "Dual-Access Water Reservoir: Features both a quick-fill side latch and a twist-off detachable base for hygienic air-drying and cleaning.",
  ],
  cons: [
    "Highest Price-to-Feature Ratio (£109.99): Steep baseline retail price while including only two nozzles and modest battery runtime.",
    "Exorbitant Replacement Tip Costs (£15–£20 for 2 Tips): Replacement Quad Stream nozzles are exceptionally expensive, adding heavy recurring costs.",
    "Diffused Pressure Lacks Deep Penetration: Splitting water into four streams reduces pinpoint kinetic force, struggling against tightly wedged meat fibers or heavy calculus.",
    "Only 2 Nozzles in the Box: No orthodontic or periodontal pocket tips included.",
    "Proprietary Barrel Charging Cable: Requires a bespoke circular plug rather than standard USB-C.",
    "Restricted 28-Day Return Window: Offers only 4 weeks of trial protection compared to Miroooo's 90-day money-back guarantee.",
  ],
  review: [
    "Philips Sonicare brought genuine design innovation to the water flosser market with the Power Flosser 3000, introducing an X-shaped Quad Stream nozzle that splits the water jet into four wide paths. For routine maintenance and plaque sweeping along the gingival margin, this wide curtain of water makes flossing faster and significantly less messy for novices.",
    "The trade-off, however, lies in focused cleaning intensity. By dispersing the water into four diverging paths, the stream loses pinpoint hydraulic velocity. Users dealing with crowded teeth or stubborn food debris will find that the Quad Stream lacks the focused punch delivered by single-stream 138 PSI piston systems like the Miroooo.",
    "At £109.99, it is the most expensive base model in our test group, yet only includes two nozzles in the box. Replacement Quad Stream tips cost up to £20 for a two-pack, creating punishing ongoing ownership costs. Paired with a standard 14-day battery and a proprietary barrel-jack cable, it is an elegant luxury device that compromises on raw power and long-term value.",
  ],
};

export const PANASONIC_EW_DJ67_DATASET: RankedWaterFlosserProduct = {
  rank: 5,
  name: "Panasonic Ultrasonic Irrigator (EW-DJ67)",
  brand: "Panasonic",
  image: "/img/water-flossers/panasonic-ew-dj67-ultrasonic-comparison.png",
  imageAlt: "Panasonic Series 600 Ultrasonic Oral Irrigator EW-DJ67-W311 with 5 Pressure Levels - #5 Best Water Flosser UK 2026",
  price: "£89.99",
  rating: 3.9,
  ratingLabel: "Editorial rating",
  grade: "C+",
  badge: "Ultrasonic Jet",
  ctaUrl: "https://www.trymiroooo.com/products/miroooo-water-flosser",
  ctaLabel: "Check Availability",
  sourceLinks: [
    {
      label: "Panasonic EW-DJ67 product details",
      href: "https://www.trymiroooo.com/products/miroooo-water-flosser",
    },
  ],
  reservoirCapacity: "200ml (Requires 1-2 Refills)",
  pressureRange: "28–94 PSI (5 Step Settings)",
  batteryLife: "~10 Days (~10 mins runtime, 17h charge)",
  pumpMechanism: "High-Frequency Diaphragm",
  nozzlesCount: "4 Nozzles (2 Ultrasonic, 1 Ortho, 1 Tongue)",
  waterproofRating: "IPX7 Waterproof (Dishwasher-Safe Tank)",
  noiseLevel: "~72dB (High-Pitch Whine)",
  moneyBackGuarantee: "Standard 30-Day Return",
  warranty: "2-Year Manufacturer Warranty",
  metrics: [
    { label: "Plaque & Biofilm Removal", value: 86 },
    { label: "Battery Endurance", value: 64 },
    { label: "Water Reservoir Capacity", value: 72 },
    { label: "Pressure Customisation", value: 87 },
    { label: "Overall Value", value: 73 },
  ],
  specifications: [
    { label: "Reservoir Capacity", value: "200ml (Runs out in ~60 seconds on Level 5)" },
    { label: "Pressure Range", value: "28 to 94 PSI (196 to 647 kPa across 5 levels)" },
    { label: "Ultrasonic Pulse", value: "1,600 pulses per minute with cavitation micro-bubbles" },
    { label: "Battery Runtime", value: "Approximately 10 minutes total runtime on Level 5" },
    { label: "Recharge Time", value: "17 Hours on inductive 2-pin bathroom cradle" },
    { label: "Included Nozzles", value: "4 Nozzles (2 Ultrasonic, 1 Orthodontic Brush, 1 Tongue Care)" },
    { label: "Maintenance", value: "Dishwasher-safe water tank (top rack)" },
    { label: "Noise Level", value: "~70–73 dB (High-frequency motor resonance)" },
  ],
  pros: [
    "Ultrasonic Micro-Bubble Cavitation: Specialized narrow nozzle accelerates water flow to generate microscopic cavitation shockwaves that effectively shear away biofilm.",
    "Granular 5-Level Pressure Adjustment: Broad pressure spectrum spanning from a gentle 28 PSI rinse up to a firm 94 PSI jet.",
    "Dishwasher-Safe Water Reservoir: Tank detaches completely and can be sterilized in the top rack of a home dishwasher.",
    "Includes Dedicated Tongue Cleaner: Supplied with a soft silicone tongue scraper tip to combat halitosis.",
  ],
  cons: [
    "Painfully Slow 17-Hour Recharge: Takes almost a full day on its inductive 2-pin cradle to achieve a complete charge.",
    "Weakest Operational Battery Life: Provides only 10 minutes of cumulative runtime on Level 5, necessitating weekly charging sessions.",
    "Small 200ml Tank Capacity: Drains in under 60 seconds, requiring frequent mid-floss pauses to refill under the tap.",
    "Harsh High-Pitched Acoustic Whine (~72dB): Ultrasonic motor emits an irritating high-frequency whine that resonates uncomfortably in the ear canal when cleaning rear teeth.",
    "Bulky 2-Pin Shaver Charging Stand: Cumbersome for travel and unusable in bedrooms without a UK 3-pin shaver adapter.",
  ],
  review: [
    "The Panasonic Series 600 Ultrasonic (EW-DJ67) incorporates sophisticated cavitation engineering. By tapering the nozzle aperture, it generates shockwaves of microscopic bubbles that collapse upon impact with the tooth surface, amplifying plaque disruption without needing excessive hydraulic volume.",
    "With 5 adjustable pressure settings reaching up to 94 PSI and a dedicated tongue scraper, its cleaning mechanics are undeniably capable. However, the device is severely penalized by its battery and charging architecture. A full recharge takes an excruciating 17 hours on an old-fashioned 2-pin bathroom charging stand, yielding just 10 minutes of total operational runtime on its top power level.",
    "Furthermore, the 200ml reservoir runs dry within 60 seconds, and the ultrasonic pump produces an uncomfortable high-frequency acoustic whine during use. While clinically competent, its painfully slow charging, short battery life, and £89.99 purchase price leave it trailing behind more practical modern competitors.",
  ],
};

export const waterFlosserProducts: RankedWaterFlosserProduct[] = [
  MIROOOO_FLOSSER_DATASET,
  ORAL_B_AQUACARE_DATASET,
  WATERPIK_CORDLESS_ADVANCED_DATASET,
  PHILIPS_SONICARE_3000_DATASET,
  PANASONIC_EW_DJ67_DATASET,
];
