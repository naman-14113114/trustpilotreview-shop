/**
 * Mobile-only Pros & Cons data.
 *
 * Edit this file to change what shows on PHONE ONLY.
 * Desktop pros/cons are defined in each advertorial file and are NOT affected by changes here.
 *
 * Structure: mobileProsCons[market][productId] = { pros: [...], cons: [...] }
 *
 * Markets: "uk" (also used for "au"), "ca"
 * Product IDs:
 *   UK/AU: 1 = Buudy, 2 = CurrentBody, 3 = Omnilux, 4 = Shark, 5 = Dr. Dennis Gross
 *   CA:    1 = Buudy, 2 = CurrentBody, 3 = Kala, 4 = TheraFace, 5 = Equinox
 */

export type MobileProsCons = {
  pros: string[];
  cons: string[];
};

type MobileProsConsMap = Record<string, Record<number, MobileProsCons>>;

export const mobileProsCons: MobileProsConsMap = {
  // ─────────────────────────────────────────────
  // UK & AU  (AU falls back to UK data)
  // ─────────────────────────────────────────────
  uk: {
    // #1 Buudy 7 Colour LED Mask
    1: {
      pros: [
        "7 colour treatment (Red, Blue, Green, Yellow, Purple, Cyan & White) plus 830nm Near-Infrared light",
        "Covers both the face and neck area, helping target sagging skin and \"turkey neck\"",
        "Health Canada Approved and certified to CE, FCC & RoHS standards",
        "Built-in eye protection with safe, pain-free treatment suitable for all skin types",
        "4.9★ rating from over 4,000 customers",
        "Cordless and rechargeable with Tap Technology and Buudy AI guided sessions",
        "Noticeable results after a few uses, with full results in under 10 uses",
        "Currently £179 (60% off the regular £449 price)",
        "90-day money-back guarantee for added peace of mind",
      ],
      cons: [
        "Available online only in the United Kingdom",
        "Limited stock due to high customer demand",
        "Tap controls can take a session or two to learn, though most users adapt quickly",
      ],
    },

    // #2 CurrentBody LED Mask
    2: {
      pros: [
        "Endorsed by celebrities and dermatologists, with multiple beauty awards",
        "4.7★ rating from 2,860 customer reviews",
        "Clinical study reported up to 30% wrinkle reduction after 8 weeks",
        "Flexible silicone design with portable controller and optional eye inserts",
      ],
      cons: [
        "Face-only treatment at £399.99; neck kit costs an additional £679.99",
        "Premium-priced device — significantly more expensive than Buudy (£179)",
        "Limited to anti-aging with 3 Red/NIR wavelengths only",
        "No Blue, Green or Yellow light modes for broader skin concerns",
        "60-day guarantee includes a 10% restocking fee on returns (~£40)",
        "Some users report minimal results after extended use",
        "Some reviewers mention fit and slipping issues",
        "Flexible silicone design may require extra care for hygiene and maintenance",
      ],
    },

    // #3 Omnilux LED Mask
    3: {
      pros: [
        "FDA-cleared and dermatologist-recommended — 95% of users reported brighter skin",
        "30-day no-hassle money-back guarantee for peace of mind",
        "Trusted medical-grade brand from the professional skin care market",
        "Flexible and portable with rechargeable controller and carry bag",
      ],
      cons: [
        "Face-only treatment at £348; separate neck piece costs another £348",
        "Premium-priced — significantly more expensive than Buudy (£179)",
        "Only 2 wavelengths (Red and NIR) — missing 5 other light modes",
        "Won't treat acne — company explicitly states this limitation",
        "Fewer LEDs: only 132 vs. Buudy's 192 high-density LEDs",
        "Some reviewers report no noticeable difference after months of use",
        "Flexible silicone may require extra care for hygiene and maintenance",
      ],
    },

    // #4 Shark CryoGlow LED Mask
    4: {
      pros: [
        "Unique \"Insta-Chill\" cryo-therapy for under-eyes — not found in standard LED masks",
        "Developed with dermatologists for added clinical credibility",
        "4.6★ rating from 500+ reviews on the trusted Shark brand",
        "Fast pre-programmed sessions as short as 6–8 minutes",
      ],
      cons: [
        "At £299.99, more than double the price of Buudy (£179)",
        "Face-only treatment — no neck coverage included",
        "Missing 5 of 7 wavelengths (Green, Yellow, Cyan, Purple, White)",
        "LED count undisclosed — likely lower than Buudy's 192 high-density LEDs",
        "At 675g, very heavy and rigid — may not suit all face shapes",
        "Cannot treat hyperpigmentation or balance broader skin texture",
      ],
    },

    // #5 Dr. Dennis Gross DRx SpectraLite
    5: {
      pros: [
        "Full session in just 3 minutes — fastest treatment time in this ranking",
        "Designed by Dr. Dennis Gross — strong dermatologist-backed authority",
        "415nm Blue light effectively targets surface acne-causing bacteria",
        "Cordless with internal battery for wire-free sessions",
      ],
      cons: [
        "At £455, a massive premium largely for the brand name",
        "No neck or chest coverage — face only at nearly £500",
        "Only 162 LEDs — lower density than modern high-output models",
        "Rigid plastic shell doesn't flex — discomfort reported on the nose bridge",
        "Only Red, Blue and Combo modes — missing 5 other light therapies",
        "Short battery life — small internal battery needs frequent charging",
        "Fragile build — rigid plastic prone to cracking if dropped",
        "No eye protection — open-eye design allows light to reach vision",
      ],
    },
  },

  // ─────────────────────────────────────────────
  // CANADA
  // ─────────────────────────────────────────────
  ca: {
    // #1 Buudy 7 Colour LED Mask (CA)
    1: {
      pros: [
        "7 colour treatment (Red, Blue, Green, Yellow, Purple, Cyan & White) plus 830nm Near-Infrared light",
        "Covers both the face and neck area, helping target sagging skin and \"turkey neck\"",
        "Health Canada Approved and certified to CE, FCC & RoHS standards",
        "Built-in eye protection with safe, pain-free treatment suitable for all skin types",
        "4.9★ rating from over 4,000 customers",
        "Cordless and rechargeable with Tap Technology and Buudy AI guided sessions",
        "Noticeable results after a few uses, with full results in under 10 uses",
        "Currently $279 (60% off the regular $559 price)",
        "90-day money-back guarantee for added peace of mind",
      ],
      cons: [
        "Available online only in Canada",
        "Limited stock due to high customer demand",
        "Tap controls can take a session or two to learn, though most users adapt quickly",
      ],
    },

    // #2 CurrentBody LED Mask (CA)
    2: {
      pros: [
        "Endorsed by celebrities and dermatologists, with multiple beauty awards",
        "4.7★ rating from 2,860 customer reviews",
        "Clinical study reported up to 30% wrinkle reduction after 8 weeks",
        "Flexible silicone design with portable controller and optional eye inserts",
      ],
      cons: [
        "Face-only treatment; neck coverage requires an additional purchase",
        "Premium-priced device compared with many alternatives",
        "Limited to anti-aging with 3 Red/NIR wavelengths only",
        "No Blue, Green or Yellow light modes for broader skin concerns",
        "60-day guarantee includes a 10% restocking fee on returns",
        "Some users report minimal results after extended use",
        "Some reviewers mention fit and slipping issues",
        "Flexible silicone design may require extra care for hygiene and maintenance",
      ],
    },

    // #3 Kala Red Light Face Mask (CA only)
    3: {
      pros: [
        "Red, Near-Infrared and Blue LED light treatment",
        "FDA-cleared and dermatologist-recommended",
        "Lightweight 348g silicone design for comfortable wear",
        "2-year warranty provides added peace of mind",
      ],
      cons: [
        "Face-only treatment with no neck or jawline coverage",
        "Missing Green, Cyan, Yellow, Purple and White light modes",
        "Optical power density is lower than some leading competitors",
        "4-hour charge time can be inconvenient",
        "At $382.49, costs more than Buudy while covering less area",
      ],
    },

    // #4 TheraFace Mask (CA only)
    4: {
      pros: [
        "Uses 648 LEDs, making it one of the highest LED-count masks in the category",
        "VibraWave vibration therapy provides added facial tension and relaxation benefits",
        "Short 9-minute routines with no cord",
        "Backed by Therabody, a major wellness tech name.",
      ],
      cons: [
        "At $799.99, it is the most expensive product in this comparison",
        "Face only; ignores neck and chest area",
        "Hard-shell construction may not sit evenly on all face shapes",
        "Missing Green, Cyan, Purple, and White light modes",
        "Battery runtime is shorter than some masks that use external controller systems",
        "Higher price does not include built-in neck treatment despite the premium cost",
      ],
    },

    // #5 Equinox LED Mask (CA only)
    5: {
      pros: [
        "336 LEDs provide dense and even facial light coverage",
        "Six treatment modes including Red + NIR, Red + Blue, and Yellow + NIR combinations",
        "Health Canada Approved with CE, FCC and RoHS certifications",
        "Backed by a 2-year warranty for added assurance",
      ],
      cons: [
        "The $385 model treats only the face, with no neck or chest coverage included",
        "Missing Green, Cyan, Purple and White light therapy modes",
        "Wired remote controller feels less convenient than cordless or tap-controlled designs",
        "Higher price than Buudy while covering less area",
        "No neck treatment leaves jawline and neck behind",
      ],
    },
  },
};

/**
 * Get mobile pros/cons for a product by market and product ID.
 * AU falls back to UK data. If no mobile-specific data exists, returns undefined.
 */
export function getMobileProsCons(
  marketKey: string,
  productId: number
): MobileProsCons | undefined {
  const effectiveMarket = marketKey === "au" ? "uk" : marketKey;
  return mobileProsCons[effectiveMarket]?.[productId];
}
