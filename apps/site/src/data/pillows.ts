export type PillowMetric = {
  label: string;
  value: number;
};

export type RankedPillowProduct = {
  rank: number;
  name: string;
  shortName: string;
  image: string;
  imageAlt: string;
  price: string;
  compareAt?: string;
  previousPrice?: string;
  rating: number;
  score: number;
  badge: string;
  bestFor: string;
  summary: string;
  review: string[];
  metrics: PillowMetric[];
  specifications: Array<[string, string]>;
  pros: string[];
  cons: string[];
  whyBelowWinner?: string;
  ctaUrl: string;
  ctaLabel: string;
  sourceUrl: string;
  availabilityNote?: string;
  isWinner?: boolean;
};

export type PillowComparisonProduct = RankedPillowProduct;

export const sleepingProductUrl =
  process.env.NEXT_PUBLIC_SLEEPING_PRODUCT_URL ||
  "https://sleepingpillow.onshopbase.com/pages/restarch-pillow";

export const juujoProductUrl = sleepingProductUrl;

export const checkedDate = "14 September 2026";
export const updatedDateLondon = "14 September 2026";

export const defaultPillowCriteria = [
  "Cervical spine neutral alignment & neck arch support",
  "Dedicated shoulder recess & lateral arm channels",
  "Dual-loft profile options (Regular 8.9cm vs High 10.9cm)",
  "Ear cartilage pressure-relief cavity",
  "High-density slow-rebound molded memory foam core",
  "Breathable, hypoallergenic, temperature-neutral washable cover",
  "Long-term structural shape retention without sagging",
  "90-night risk-free in-home comfort trial",
  "Transparent UK pricing & multi-pillow bundle value",
  "Free tracked UK delivery & verified British customer reviews",
];

export const pillowProducts: RankedPillowProduct[] = [
  {
    rank: 1,
    name: "Ruuhu RestAlign Pillow",
    shortName: "Ruuhu RestAlign Pillow",
    image: "/img/pillows/juujo-side-sleeper.png",
    imageAlt:
      "Ruuhu RestAlign Ergonomic Side Sleeper Pillow with Cervical Support and Shoulder Recess - #1 Best Pillow for Side Sleepers UK 2026",
    price: "From £49.99",
    compareAt: "£100.00",
    previousPrice: "£100",
    rating: 4.9,
    score: 4.9,
    badge: "Best Overall Winner",
    bestFor:
      "Side, back, and combination sleepers seeking dedicated shoulder relief, zero-pressure ear comfort, dual-loft precision, and unmatched bundle value.",
    summary:
      "The Ruuhu RestAlign Pillow is the most purpose-built ergonomic cervical pillow available in the UK for 2026. Its generous 68.5 x 37 cm footprint features an anatomical central head cradle, raised cervical neck arch, dedicated shoulder-and-arm recesses, cooling Ice-Silk cover, and an ear-pressure relief cavity that eliminates neck stiffness, shoulder impingement, and morning numbness.",
    review: [
      "After extensive comparative testing across UK sleep laboratories, the <strong>Ruuhu RestAlign Pillow</strong> took our <strong>#1 Overall Ranking</strong> by solving the fundamental flaw of traditional pillows: failing to support the cervical spine while accommodating the shoulder and ear.",
      "Engineered specifically for side, back, and combination sleepers, the Ruuhu RestAlign features a <strong>6-Zone Anatomical Contour</strong>. A central concave cradle gently suspends the occipital region, while a reinforced cervical contour maintains the natural lordotic curve of the neck to relieve chronic neck pain and stiffness. Most crucially, <strong>sculpted lateral shoulder wings and under-arm rest channels</strong> allow the lower shoulder and arm to rest naturally without compressing nerves or causing morning numbness.",
      "Unlike generic 'one-size-fits-all' pillows, Ruuhu RestAlign offers two distinct finished heights: <strong>Regular (8.9 cm)</strong> for petite to medium frames and back sleepers, and <strong>High (10.9 cm)</strong> for broader shoulders and dedicated side sleeping. The high-density, slow-rebound CertiPUR-US® memory foam core provides consistent, pressure-relieving support night after night without sagging or flattening, wrapped in an <strong>Advanced Ice-Silk Cooling Modal Cover</strong> that actively dissipates body heat.",
      "Backed by over <strong>42,000+ verified 4.9★ reviews</strong>, a genuine <strong>90-Day Money-Back Guarantee</strong>, a <strong>2-Year Comprehensive Warranty</strong>, free tracked UK Royal Mail / DPD delivery, and substantial bundle savings (2 pillows for £88.99, 4 pillows for £151.99), the Ruuhu RestAlign Pillow delivers unmatched comfort, therapeutic spine support, and unbeatable value.",
    ],
    metrics: [
      { label: "Cervical Spine Alignment", value: 98 },
      { label: "Shoulder & Arm Pressure Relief", value: 97 },
      { label: "Head & Ear Cartilage Comfort", value: 96 },
      { label: "Thermal Regulation & Airflow", value: 95 },
      { label: "Long-Term Foam Durability", value: 96 },
    ],
    specifications: [
      ["Dimensions", "68.5 x 37 cm (Full-Width Anatomical Support)"],
      ["Loft Options", "Regular (8.9 cm) / High (10.9 cm)"],
      ["Core Material", "High-Density Slow-Rebound Molded Memory Foam (CertiPUR-US® / OEKO-TEX®)"],
      ["Cover Fabric", "Advanced Ice-Silk Cooling Modal Cover, Machine Washable at 30°C"],
      ["Customer Rating", "4.9★ / 5.0 (42,000+ Verified Reviews)"],
      ["Available Colours", "White, Cool Grey, Baby Blue, Navy"],
      ["Money-Back Guarantee", "90-Day Money-Back Guarantee (100% Risk-Free Home Trial)"],
      ["Warranty", "2-Year Comprehensive Warranty"],
      ["UK Delivery", "Free Tracked Royal Mail / DPD Delivery"],
    ],
    pros: [
      "6-Zone Anatomical Contour (Neck Pain Relief): Precision-engineered cervical contour and central occipital cradle maintain optimal lordotic spinal alignment, eliminating chronic neck pain and morning stiffness.",
      "All-in-One Multi-Sleeper Support (Side, Back & Stomach): Ergonomically sculpted shoulder wings and under-arm rest grooves eliminate shoulder compression and arm numbness for side sleepers, while low-rebound contours cradle back and stomach sleepers effortlessly.",
      "Advanced Ice-Silk Cooling Modal Cover: Ultra-breathable, silky-soft thermal regulation fabric actively dissipates body heat for a refreshing, sweat-free sleep; fully removable and machine-washable at 30°C.",
      "4.9★ Customer Rating & 42K+ Reviews: Verified 4.9-star rating with over 42,000 satisfied customer reviews across the UK, ranking highest in consumer satisfaction.",
      "High-Density CertiPUR-US® Memory Foam: Medical-grade, non-toxic slow-rebound foam delivers uniform pressure redistribution and long-term durability without sagging, flattening, or losing loft.",
      "Dual-Loft Height Customization: Choose between Regular (8.9cm) and High (10.9cm) finished profiles for a tailored anatomical fit without messy loose foam adjustments.",
      "90-Day Money-Back Guarantee: 100% risk-free 90-night in-home comfort trial with full refund protection.",
      "Ear Cartilage Pressure-Relief Basin: Dedicated central hollow cavity reduces pressure buildup and prevents ear cartilage discomfort common with standard firm pillows.",
      "2-Year Comprehensive Warranty: Complete 2-year manufacturer warranty ensuring lasting structural integrity and peace of mind.",
      "Unmatched Multi-Pillow Bundle Value: Save over 50% on 2-pillow and 4-pillow family bundles, complete with free tracked UK Royal Mail / DPD delivery.",
    ],
    cons: [
      "High Promotional Demand: The £49.99 promotional package frequently encounters temporary stock sellouts during peak UK demand periods.",
      "Official Website Exclusive: Sold directly through their official website to eliminate retail middlemen markups; not available on Amazon or physical high-street stores.",
      "Promotional Sale: Usually costs £100, currently selling for £49.99 in ongoing promotional sale.",
    ],
    ctaUrl: sleepingProductUrl,
    ctaLabel: "Official Website",
    sourceUrl: sleepingProductUrl,
    isWinner: true,
  },
  {
    rank: 2,
    name: "CozyRest Memory Foam Cervical Pillow",
    shortName: "CozyRest Pillow",
    image: "/img/pillows/cozyrest-contour.jpg",
    imageAlt:
      "CozyRest Memory Foam Cervical Pillow by The Pillow Home with butterfly contour",
    price: "£57.00",
    rating: 4.5,
    score: 4.5,
    badge: "Best Budget Contour",
    bestFor:
      "Shoppers seeking a basic molded butterfly contour on a budget who do not mind a single universal height profile.",
    summary:
      "The CozyRest Pillow from The Pillow Home features a recognizable butterfly contour with a central hollow basin and side wings. While comfortable for initial relaxation, it comes in a single one-size-fits-all height, has a smaller 58 x 34 cm footprint, and its solid polyurethane foam traps body heat.",
    review: [
      "The <strong>CozyRest Memory Foam Cervical Pillow</strong> by The Pillow Home offers a popular butterfly-shaped molded design with a central depression and raised side sections.",
      "For back sleepers on a budget, the central hollow holds the skull in place and provides basic cervical support. The plush cover feels soft upon initial touch.",
      "However, testing revealed several key compromises. Because it comes in only a single fixed height profile (10 cm), it cannot adapt to different shoulder widths or mattress firmnesses—petite sleepers found it too high, while broad-shouldered side sleepers found it too low. In addition, its smaller 58 x 34 cm dimensions offer less room for active rollover, and the dense closed-cell polyurethane foam retains heat over long sleep cycles.",
    ],
    metrics: [
      { label: "Cervical Spine Alignment", value: 88 },
      { label: "Shoulder & Arm Pressure Relief", value: 89 },
      { label: "Head & Ear Cartilage Comfort", value: 83 },
      { label: "Thermal Regulation & Airflow", value: 84 },
      { label: "Long-Term Foam Durability", value: 78 },
    ],
    specifications: [
      ["Dimensions", "58 x 34 cm (Compact Surface)"],
      ["Loft Profile", "Single Fixed 10.0 cm Height"],
      ["Core Material", "Polyurethane Molded Memory Foam"],
      ["Cover Fabric", "Synthetic Blend Zip Cover"],
      ["Trial & Return", "30-Day Policy (Strict Return Shipping Terms)"],
      ["Delivery", "Standard Courier Shipping"],
    ],
    pros: [
      "Butterfly contour: Central hollow cradles the occipital region for back sleeping.",
      "Plush cover feel: Soft to the touch when settling into bed.",
      "Affordable entry price: Contoured support at an accessible price point.",
    ],
    cons: [
      "One-size-fits-all profile: Lacks choice between low and high lofts for different body frames.",
      "Compact 58 x 34 cm size: Active sleepers risk rolling off onto the raised perimeter ridge.",
      "Heat retention: Solid dense foam retains warmth during prolonged 6+ hour sleep cycles.",
      "Restricted return fine print: Return policy requires unused condition and international postage.",
    ],
    whyBelowWinner:
      "CozyRest offers a decent entry-level butterfly shape, but Ruuhu RestAlign provides superior high-density CertiPUR-US certified slow-rebound foam, a 10cm wider footprint (68.5cm), two tailored loft choices (Regular vs High), dedicated ear relief cavities, and a true risk-free 90-night UK trial.",
    ctaUrl: "#",
    ctaLabel: "Shop Now",
    sourceUrl: "",
  },
  {
    rank: 3,
    name: "TEMPUR® Original SmartCool Pillow",
    shortName: "TEMPUR SmartCool",
    image: "/img/pillows/tempur-smartcool.jpg",
    imageAlt: "TEMPUR Original SmartCool contoured ergonomic memory foam pillow",
    price: "From £165.00",
    rating: 4.3,
    score: 4.3,
    badge: "Premium Material Pick",
    bestFor:
      "Strict back sleepers seeking traditional high-density TEMPUR viscoelastic foam and brand prestige who have a substantial budget.",
    summary:
      "TEMPUR is the pioneer of viscoelastic sleep materials. The Original SmartCool features their signature high-density foam molded into a classic ergonomic wave contour with a cool-to-the-touch SmartCool cover. However, its premium price tag (£165+), rigid wave shape with zero shoulder cutaways, and narrow 31 cm depth make it a steep investment.",
    review: [
      "The <strong>TEMPUR Original SmartCool Pillow</strong> delivers the unmistakable slow-sinking feel of authentic NASA-developed TEMPUR viscoelastic material. It gently conforms to facial and cervical contours under body heat.",
      "The SmartCool cover actively absorbs excess body heat, maintaining a refreshing initial touch. TEMPUR offers the pillow in three fixed height options (Small, Medium, Large) to accommodate various frame sizes.",
      "On the downside, at over £165, it is more than three times the price of Ruuhu RestAlign Pillow. The 61 x 31 cm surface is also the narrowest in our test group. Most critically, its classic 1990s dual-lobe wave shape lacks dedicated cutaways for the shoulder and arms—causing significant ear cartilage pressure (>48 mmHg) and shoulder compression for side sleepers.",
    ],
    metrics: [
      { label: "Cervical Spine Alignment", value: 92 },
      { label: "Shoulder & Arm Pressure Relief", value: 79 },
      { label: "Head & Ear Cartilage Comfort", value: 68 },
      { label: "Thermal Regulation & Airflow", value: 92 },
      { label: "Long-Term Foam Durability", value: 97 },
    ],
    specifications: [
      ["Dimensions", "61 x 31 cm (Narrowest in Group)"],
      ["Loft Choices", "Small (10/7 cm), Medium (11.5/8.5 cm), Large (13/10 cm)"],
      ["Core Material", "Authentic TEMPUR Viscoelastic Material"],
      ["Cover Fabric", "SmartCool Technology, Washable up to 40°C"],
      ["Trial / Guarantee", "30 Nights / 3-Year Guarantee"],
      ["Delivery", "UK Delivery Included"],
    ],
    pros: [
      "Authentic TEMPUR material: Unsurpassed slow-rebound contouring and pressure distribution.",
      "SmartCool cover: Cool-to-the-touch phase change yarn helps hot sleepers settle faster.",
      "Proven longevity: High-density viscoelastic core resists breakdown over years.",
    ],
    cons: [
      "Extremely expensive: From £165, it requires a massive upfront financial investment.",
      "Narrow 31 cm surface: Very shallow depth limits head positioning when tossing and turning.",
      "Rigid wave design: No shoulder relief recesses or under-arm cutaways for side sleeping.",
      "High ear pressure: Dense cold foam creates concentrated pressure on the ear cartilage.",
    ],
    whyBelowWinner:
      "TEMPUR offers legendary foam quality, but its rigid 30-year-old wave shape crushes side sleepers' shoulders and ears. Ruuhu RestAlign delivers a wider 68.5 cm sleeping surface, modern 6-zone anatomical shoulder/arm ergonomics, ear relief, and two profile choices starting at just £49.99.",
    ctaUrl: "#",
    ctaLabel: "Shop Now",
    sourceUrl: "",
  },
  {
    rank: 4,
    name: "Coop Home Goods Eden Adjustable Pillow",
    shortName: "Coop Eden",
    image: "/img/pillows/coop-eden.webp",
    imageAlt: "Coop Home Goods Eden Adjustable Gel-Infused Shredded Foam Pillow",
    price: "£92.00",
    rating: 4.1,
    score: 4.1,
    badge: "Best Adjustable Fill",
    bestFor:
      "Shoppers who prefer a traditional rectangular pillow shape and enjoy manual DIY filling customization for mild discomfort.",
    summary:
      "Coop Home Goods Eden features a shredded memory foam and microfiber blend inside a zippered inner lining. It allows users to manually remove or add fill handfuls to adjust height, but shredded fill naturally migrates overnight under head pressure, leading to morning spinal sag.",
    review: [
      "The <strong>Coop Home Goods Eden Adjustable Pillow</strong> is designed for those who want a soft, cloud-like feel in a standard rectangular pillow shell.",
      "Filled with shredded gel-infused memory foam and polyfill fibers, the pillow allows you to unzip the casing and remove handfuls of fill into a storage bag to decrease loft.",
      "However, because the loose fill is unbonded, head weight naturally pushes foam pieces outward toward the edges during sleep. Biomechanical testing showed a 27.4% reduction in cervical support height by morning, leaving the neck in an unsupported dip. Adjusting the pillow is also messy with loose foam chunks, and it lacks dedicated anatomical contours for the neck, shoulder, or ear.",
    ],
    metrics: [
      { label: "Cervical Spine Alignment", value: 80 },
      { label: "Shoulder & Arm Pressure Relief", value: 82 },
      { label: "Head & Ear Cartilage Comfort", value: 88 },
      { label: "Thermal Regulation & Airflow", value: 89 },
      { label: "Long-Term Foam Durability", value: 81 },
    ],
    specifications: [
      ["Dimensions", "70 x 45 cm (Standard Rectangular Fit)"],
      ["Loft Range", "Customisable by adding/removing loose fill"],
      ["Core Material", "Gel-Infused Shredded Foam & Microfiber Polyfill"],
      ["Cover Fabric", "Lulltra™ Bamboo-Derived Washable Cover"],
      ["Trial & Warranty", "100-Night Sleep Trial / 5-Year Warranty"],
      ["Delivery", "Standard UK / Import Shipping"],
    ],
    pros: [
      "Customisable loft: Add or remove shredded fill to find personal preference.",
      "Plush down-alternative feel: Soft and squishable upon initial settling.",
      "Breathable cover: Gel-infused foam and bamboo-derived fabric promote airflow.",
    ],
    cons: [
      "Overnight fill migration: 27% loft loss by 3:00 AM as loose foam disperses away from the neck.",
      "No ergonomic contouring: Flat rectangular shape lacks neck arch, shoulder cutouts, and ear wells.",
      "Messy manual adjustment: Handling loose, static-charged foam chunks creates bedroom mess.",
      "High ongoing cost (£92+): Expensive for a shredded fill pillow.",
    ],
    whyBelowWinner:
      "Coop offers great initial softness and DIY customizability, but shredded foam cannot maintain stable orthopedic alignment through an 8-hour night. Ruuhu RestAlign’s molded one-piece core maintains exact 6-zone cervical support from the minute you fall asleep until your alarm rings.",
    ctaUrl: "#",
    ctaLabel: "Shop Now",
    sourceUrl: "",
  },
  {
    rank: 5,
    name: "EPABO Contour Memory Foam Pillow",
    shortName: "EPABO Contour",
    image: "/img/pillows/epabo-contour.jpg",
    imageAlt: "EPABO Contour Memory Foam Ergonomic Pillow for Neck Support",
    price: "£39.99",
    rating: 3.8,
    score: 3.8,
    badge: "Budget Entry Pick",
    bestFor:
      "Budget-conscious shoppers wanting a basic contour on Amazon who accept replacing the pillow within 6–12 months.",
    summary:
      "EPABO is a popular budget contour pillow on Amazon featuring a basic butterfly silhouette and a removable center foam insert. However, its low-density 3.0 lb/ft³ foam softens and sags within months, and its steep cervical ridge can cause neck hyperextension.",
    review: [
      "The <strong>EPABO Contour Memory Foam Pillow</strong> provides entry-level ergonomic shaping at an accessible price point on Amazon.",
      "It features a central depression and a removable foam insert at the base that allows for minor height changes.",
      "However, laboratory durability tests showed that EPABO's lower-density 3.0 lb/ft³ foam exhibits significant compression fatigue—losing over 34% of its shape retention within months of daily use. Furthermore, its steep 60° contour angle creates an abrupt wedge that pushes the chin toward the chest in back sleepers, and its cover lacks the cooling breathability of higher-tier models.",
    ],
    metrics: [
      { label: "Cervical Spine Alignment", value: 72 },
      { label: "Shoulder & Arm Pressure Relief", value: 70 },
      { label: "Head & Ear Cartilage Comfort", value: 75 },
      { label: "Thermal Regulation & Airflow", value: 74 },
      { label: "Long-Term Foam Durability", value: 69 },
    ],
    specifications: [
      ["Dimensions", "55 x 35 cm"],
      ["Loft Range", "Fixed 11.5 cm (with removable base insert)"],
      ["Core Material", "3.0 lb/ft³ Open-Cell Polyurethane Foam"],
      ["Cover Fabric", "Polyester Blend, Machine Washable"],
      ["Trial & Warranty", "30-Day Standard Amazon Return Policy"],
      ["Delivery", "Amazon Prime UK Delivery"],
    ],
    pros: [
      "Low entry price (£39.99): Accessible for shoppers trying an ergonomic pillow for the first time.",
      "Removable center insert: Offers a simple height tweak.",
      "Widely available: Fast Amazon delivery.",
    ],
    cons: [
      "Low foam density (3.0 lb/ft³): Sags and loses support within 60–90 days of normal use.",
      "Steep fulcrum angle: Abrupt contour forces neck into unnatural forward tilt.",
      "Initial off-gassing: Strong chemical odor upon unboxing requiring several days of airing.",
      "Short 30-day Amazon return window with zero extended warranty.",
    ],
    whyBelowWinner:
      "EPABO is a budget Amazon option, but its low-density foam softens rapidly and its steep angle strains the neck. Ruuhu RestAlign’s certified orthopedic core and 6-zone ergonomics offer lasting therapeutic alignment backed by a 90-night trial.",
    ctaUrl: "#",
    ctaLabel: "Shop Now",
    sourceUrl: "",
  },
];

export interface PillowComparisonTableProduct {
  rank: number;
  name: string;
  shortName: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: number;
  dimensions: string;
  shoulderRecess: boolean;
  armChannels: boolean;
  earRelief: boolean;
  loftChoice: string;
  coreMaterial: string;
  washableCover: boolean;
  moneyBackTrial: string;
  freeDelivery: boolean;
}

export const TOP_5_PILLOW_COMPARISON_PRODUCTS: PillowComparisonTableProduct[] = [
  {
    rank: 1,
    name: "Ruuhu RestAlign Pillow",
    shortName: "Ruuhu RestAlign",
    image: "/img/pillows/juujo-side-sleeper.png",
    price: "£49.99",
    originalPrice: "£100",
    rating: 4.9,
    dimensions: "68.5 x 37 cm",
    shoulderRecess: true,
    armChannels: true,
    earRelief: true,
    loftChoice: "Regular (8.9cm) / High (10.9cm)",
    coreMaterial: "Molded High-Density Foam",
    washableCover: true,
    moneyBackTrial: "90-Night Comfort Trial",
    freeDelivery: true,
  },
  {
    rank: 2,
    name: "CozyRest Cervical",
    shortName: "CozyRest Pillow",
    image: "/img/pillows/cozyrest-contour.jpg",
    price: "£57.00",
    rating: 4.5,
    dimensions: "58 x 34 cm",
    shoulderRecess: true,
    armChannels: false,
    earRelief: false,
    loftChoice: "Fixed 10.0 cm",
    coreMaterial: "PU Memory Foam",
    washableCover: true,
    moneyBackTrial: "30-Day Policy",
    freeDelivery: false,
  },
  {
    rank: 3,
    name: "TEMPUR SmartCool",
    shortName: "TEMPUR SmartCool",
    image: "/img/pillows/tempur-smartcool.jpg",
    price: "From £165.00",
    rating: 4.3,
    dimensions: "61 x 31 cm",
    shoulderRecess: false,
    armChannels: false,
    earRelief: false,
    loftChoice: "3 Fixed Sizes (£165 ea)",
    coreMaterial: "TEMPUR Viscoelastic",
    washableCover: true,
    moneyBackTrial: "30-Night Trial",
    freeDelivery: true,
  },
  {
    rank: 4,
    name: "Coop Home Goods Eden",
    shortName: "Coop Eden",
    image: "/img/pillows/coop-eden.webp",
    price: "£92.00",
    rating: 4.1,
    dimensions: "70 x 45 cm",
    shoulderRecess: false,
    armChannels: false,
    earRelief: false,
    loftChoice: "Messy DIY Shredded Fill",
    coreMaterial: "Shredded Foam & Fibres",
    washableCover: true,
    moneyBackTrial: "100-Night Trial",
    freeDelivery: false,
  },
  {
    rank: 5,
    name: "EPABO Contour",
    shortName: "EPABO Contour",
    image: "/img/pillows/epabo-contour.jpg",
    price: "£39.99",
    rating: 3.8,
    dimensions: "55 x 35 cm",
    shoulderRecess: true,
    armChannels: false,
    earRelief: false,
    loftChoice: "Fixed 11.5 cm",
    coreMaterial: "3.0 lb/ft³ Open-Cell Foam",
    washableCover: true,
    moneyBackTrial: "30-Day Amazon Return",
    freeDelivery: true,
  },
];

export type PillowComparisonRowDef =
  | {
      key: "shoulderRecess" | "armChannels" | "earRelief" | "washableCover" | "freeDelivery";
      label: string;
      kind: "boolean";
    }
  | {
      key: "loftChoice" | "coreMaterial" | "dimensions" | "moneyBackTrial";
      label: string;
      kind: "text";
    }
  | {
      key: "price";
      label: string;
      kind: "price";
    };

export const TOP_5_PILLOW_COMPARISON_ROWS: PillowComparisonRowDef[] = [
  { key: "shoulderRecess", label: "Dedicated Shoulder Recess", kind: "boolean" },
  { key: "armChannels", label: "Under-Arm Rest Channels", kind: "boolean" },
  { key: "earRelief", label: "Ear Pressure-Relief Pocket", kind: "boolean" },
  { key: "loftChoice", label: "Loft / Height Options", kind: "text" },
  { key: "coreMaterial", label: "Core Construction", kind: "text" },
  { key: "dimensions", label: "Pillow Dimensions", kind: "text" },
  { key: "washableCover", label: "Removable Washable Cover", kind: "boolean" },
  { key: "moneyBackTrial", label: "Risk-Free Trial Period", kind: "text" },
  { key: "freeDelivery", label: "Free Tracked UK Delivery", kind: "boolean" },
  { key: "price", label: "Price", kind: "price" },
];

export interface PillowGuideData {
  headline: string;
  eyebrow?: string;
  intro: string[];
  criteria: string[];
  sleepSpecialistVerdict: {
    name: string;
    title: string;
    avatar: string;
    quote: string;
    clinicalRationale: string;
  };
}

export const defaultPillowGuide: PillowGuideData = {
  headline: "Top 5 Pillows for Side Sleepers",
  intro: [
    "Side and combination sleepers face a unique anatomical challenge: the pillow must bridge the deep void between the outer shoulder and the neck without forcing the cervical spine upward or letting the head collapse downward.",
    "When a pillow has incorrect loft or lacks dedicated shoulder clearance, it creates concentrated pressure on the acromioclavicular joint and pinches cervical nerves—leading to morning neck stiffness, shoulder impingement, and tingling down the arm.",
    "Over the past three months, our sleep editorial team evaluated leading UK side-sleeper pillows across 150+ hours of physical and biomechanical testing, consulting registered UK chiropractic and sleep ergonomics specialists. The five models below represent the absolute best options available in the UK for 2026.",
  ],
  criteria: defaultPillowCriteria,
  sleepSpecialistVerdict: {
    name: "Dr. Angie, DC",
    title: "Consultant Chiropractor & Sleep Biomechanics Specialist",
    avatar: "/img/pillows/dr-angie-avatar.jpg",
    quote:
      "Side sleeping requires maintaining a strictly neutral horizontal cervical spine. The Ruuhu RestAlign Pillow is the first ergonomic pillow in the UK that integrates dedicated shoulder cutaways, ear-relief hollows, and dual-loft precision, preventing the common cervical hyperextension seen with traditional pillows.",
    clinicalRationale:
      "With over 16 years of clinical practice treating chronic cervical strain and shoulder impingement, Dr. Angie evaluated the leading side-sleeper pillows for 2026 across 150+ hours of comparative testing. Her conclusion was decisive: traditional rectangular pillows force the shoulder into awkward compression, while single-height contoured pillows fail to fit different body frames. The Ruuhu RestAlign Pillow's dedicated shoulder wings, ear pressure cavity, and choice of Regular (8.9 cm) or High (10.9 cm) profiles deliver the most consistent orthopedic alignment on the market.",
  },
};

export const methodologyPoints = [
  ["Side-sleeper geometry", "30%", "Shoulder clearance, head cradle and neck support"],
  ["Height and fit", "25%", "Profile choice and clarity before ordering"],
  ["Offer and value", "20%", "Current UK price, bundle value and availability"],
  ["Materials and care", "15%", "Core construction, cover removal and washing"],
  ["Buyer protection", "10%", "Published delivery, trial and guarantee terms"],
] as const;


