"use client";

import React from "react";
import { Check, XCircle, Award } from "lucide-react";
import { GreenStarRating } from "@/components/GreenStarRating";
import {
  BUUDY_OFFICIAL_URL,
  BUUDY_7_COLOR_DOTS,
  EXPERT_PROFILE,
  RED_NIR_DOTS,
  RED_BLUE_DOTS,
  CTAButton,
  MetricBar,
  EmeraldMasthead,
  ExpertReviewerCard,
  EvaluationCriteriaSection,
  FreeGiftsBox,
  DermatologistVerdictSection,
  CompetitorComparisonTable,
  StickyMobileCta,
  MaskFooter,
  preventPlaceholderNavigation,
  type ComparisonTableItem,
  type ColorDot,
} from "@/features/mask-common/MaskAdvertorialCommon";

const QURE_DOTS: ColorDot[] = [
  { name: "Deep Red (660nm)", bg: "#DC2626" },
  { name: "Red (630nm)", bg: "#EF4444" },
  { name: "Near-Infrared (880nm)", bg: "#881337" },
  { name: "Amber (605nm)", bg: "#F59E0B" },
  { name: "Blue (415nm)", bg: "#3B82F6" },
];

const products = [
  {
    id: 1,
    rank: "#1",
    name: "Buudy 7 Colour LED Mask",
    image: "/img/57-w.webp",
    price: "£179",
    originalPrice: "£449",
    rating: "4.9 / 5",
    link: BUUDY_OFFICIAL_URL,
    isWinner: true,
    description: [
      "Our top pick is the Buudy 7 Colour LED Mask, a medical-grade device that outperforms the competition with a <strong>7-colour</strong> spectrum plus 830nm <strong>near-infrared</strong>. While most brands focus only on basic red light, Buudy uses targeted wavelengths to support everything from deep wrinkles and acne to inflammation, uneven tone, and overall skin recovery. This Health Canada Approved technology (with CE, FCC, and ROHS certifications) ensures professional-grade results for all skin types.",
      'A major advantage is the built-in <strong>neck coverage</strong>, a vital feature missing from Qure Facewear. The <strong>cordless</strong>, rechargeable design features "Tap Technology" and <strong>Buudy AI</strong> guided sessions, making it simple to choose the right routine without needing a smartphone app.',
      "Trusted by over 16,000 customers with a <strong>4.9-star</strong> rating, this mask delivers visible improvements in as few as ten uses. Currently priced at £179 during their <strong>Biggest Black Friday Sale</strong>, it offers the best value on the market, combining full-face and neck rejuvenation, advanced eye protection, and a <strong>90-day money-back</strong> guarantee for a safer, lower-risk trial.",
    ],
    pros: [
      "Proven Results: Has an outstanding rating of 5/5 and 4.9 stars based on over 4,000 reviews and performed well in internal testing.",
      "7 Colour Medical Grade Spectrum: Unlike competitors with just 2–3 colours, Buudy offers 7 LED colours (Red, Blue, Green, Cyan, Yellow, Purple & White) plus 830nm near-infrared.",
      "Dermatologist Proven: Health Canada Approved with CE, FCC, and ROHS certifications.",
      'Built-in Neck Coverage: Specifically designed to target "turkey neck" and sagging skin, a critical feature most expensive brands miss.',
      "Fast Results: Claims noticeable skin improvement after just a few uses and full results in under 10 uses.",
      'Cordless, Portable & Guided: A hands-free, rechargeable design with "Tap Technology" and Buudy AI guided sessions that help match each routine to your skin concern.',
      "Safe and Effective: This painless treatment is suitable for all skin types and includes integrated eye protection for enhanced safety.",
      "Cost-effective: Currently priced at £179, which is a 60% discount from its regular price of £449.",
      "90-Day Money-Back Guarantee: Buudy offers a generous 90-day trial period to test for results. If you're not satisfied, you get a full refund.",
    ],
    cons: [
      "Limited Availability: Available for purchase online only and exclusively in the United Kingdom.",
      "Limited Stock: There is a risk of the product being sold out due to high holiday demand.",
      "Learning Curve: Some users note the intuitive tap controls take a session or two to fully get used to, though most find it second nature quickly.",
    ],
    metrics: [
      { label: "Light Effectiveness", value: 97 },
      { label: "Skin Comfort and Fit", value: 96 },
      { label: "Ease of Use", value: 97 },
      { label: "Material Quality", value: 96 },
      { label: "Affordability", value: 100 },
    ],
  },
  {
    id: 2,
    rank: "#2",
    name: "LED Facial Beauty Mask by Qure Skincare",
    image: "/img/qure.png",
    price: "£299",
    rating: "4.8 / 5",
    link: "#",
    isWinner: false,
    description: [
      "Taking the second spot is the Qure Q-Rejuvalight Pro Facewear. This device sets itself apart with app-connectivity and zone personalization features across 5 facial zones.",
      "It features 5 distinct wavelengths (880nm, 660nm, 630nm, 605nm, and 415nm) and quick 3-minute treatment sessions.",
      "However, at £299, it is significantly more expensive than Buudy. It has zero neck coverage, requires using a smartphone app for full functionality, and doesn't allow serums during treatment.",
    ],
    pros: [
      "Customizable Facial Zones: Tailors treatments for 5 different facial zones via the Qure app.",
      "5 Clinical Wavelengths: Includes Red, Deep Red, NIR, Amber, and Blue light.",
      "Fast 3-Minute Sessions: Short treatment cycles for busy users.",
    ],
    cons: [
      "High £299 Price: Costs £120 more than Buudy while omitting neck coverage.",
      "App Dependency: Unlocking custom zone routines requires Bluetooth and smartphone pairing.",
      "Zero Neck Coverage: Ignores the neck and jawline completely.",
      "Complex Interface: Overwhelming array of settings for simple daily use.",
      "Serum Restriction: Manual advises against using serums during therapy.",
    ],
    metrics: [
      { label: "Light Effectiveness", value: 96 },
      { label: "Skin Comfort and Fit", value: 90 },
      { label: "Ease of Use", value: 85 },
      { label: "Material Quality", value: 92 },
      { label: "Affordability", value: 70 },
    ],
  },
  {
    id: 3,
    rank: "#3",
    name: "CurrentBody LED Mask",
    image: "/img/currentbody.png",
    price: "£399.99",
    rating: "4.7 / 5",
    link: "https://amzn.to/4beNXsm",
    isWinner: false,
    siliconWarning: true,
    description: [
      "CurrentBody remains a household name in beauty tech, backed by global celebrity endorsements and clinical data for wrinkle reduction.",
      "However, at £399.99 for face-only treatment and 2 wavelengths, it is less comprehensive than multi-colour options.",
    ],
    pros: [
      "Celebrity Backed: High social proof and editorial coverage.",
      "Flexible Silicone: Conforms to facial curves well.",
    ],
    cons: [
      "Steep Price: £399.99 face-only.",
      "No Neck Coverage: Neck kit costs an additional £300+.",
    ],
    metrics: [
      { label: "Light Effectiveness", value: 82 },
      { label: "Skin Comfort and Fit", value: 86 },
      { label: "Ease of Use", value: 87 },
      { label: "Material Quality", value: 90 },
      { label: "Affordability", value: 42 },
    ],
  },
  {
    id: 4,
    rank: "#4",
    name: "Omnilux LED Mask",
    image: "/img/omnilux.png",
    price: "£348",
    rating: "4.6 / 5",
    link: "https://amzn.to/4s0Zcf7",
    isWinner: false,
    siliconWarning: true,
    description: [
      "Omnilux brings medical phototherapy heritage into home skincare with red and near-infrared light.",
      "It is restricted to anti-aging wavelengths with face-only coverage.",
    ],
    pros: [
      "Medical Heritage: Dermatologist-backed device.",
      "Rechargeable and Portable: Flexible build.",
    ],
    cons: [
      "High Price: £348 for face-only.",
      "No Blue/Green Modes: Cannot target acne or dark spots.",
    ],
    metrics: [
      { label: "Light Effectiveness", value: 76 },
      { label: "Skin Comfort and Fit", value: 88 },
      { label: "Ease of Use", value: 87 },
      { label: "Material Quality", value: 92 },
      { label: "Affordability", value: 45 },
    ],
  },
  {
    id: 5,
    rank: "#5",
    name: "Shark CryoGlow LED Mask",
    image: "/img/shark.png",
    price: "£299.99",
    rating: "4.6 / 5",
    link: "https://link.amazon/B0cFRb4P4",
    isWinner: false,
    description: [
      "Shark's unique CryoGlow offers under-eye cooling therapy alongside Red and Blue LED light.",
      "It is heavy at 675g, rigid, and omits neck treatment.",
    ],
    pros: [
      "Under-Eye Cooling: Soothes eye fatigue and puffiness.",
      "Fast 6-8 Minute Sessions: Quick routines.",
    ],
    cons: [
      "Heavy Rigid Build: 675g headset causes nose bridge pressure.",
      "Missing 5 Colour Spectrums: No green, yellow, cyan, or purple.",
    ],
    metrics: [
      { label: "Light Effectiveness", value: 65 },
      { label: "Skin Comfort and Fit", value: 52 },
      { label: "Ease of Use", value: 75 },
      { label: "Material Quality", value: 85 },
      { label: "Affordability", value: 55 },
    ],
  },
];

const qureComparisonTableProducts: ComparisonTableItem[] = [
  {
    rank: 1,
    name: "Buudy 7 Colour LED Mask",
    shortName: "Buudy 7 Colour",
    image: "/img/57-w.webp",
    price: "£179",
    originalPrice: "£449",
    rating: 4.9,
    ledCount: "192 LEDs",
    lightWavelengths: "7 Colours + 830nm NIR",
    colorDots: BUUDY_7_COLOR_DOTS,
    neckCoverage: true,
    multiSkinModes: true,
    eyeProtection: true,
    cordlessRechargeable: true,
    freeGifts: true,
    moneyBackTrial: "90-Day Money-Back",
    freeDelivery: true,
  },
  {
    rank: 2,
    name: "Qure Q-Rejuvalight Pro",
    shortName: "Qure Facewear",
    image: "/img/qure.png",
    price: "£299",
    rating: 4.8,
    ledCount: "Custom Array",
    lightWavelengths: "5 Wavelengths (App-Guided)",
    colorDots: QURE_DOTS,
    neckCoverage: false,
    multiSkinModes: true,
    eyeProtection: true,
    cordlessRechargeable: true,
    freeGifts: false,
    moneyBackTrial: "30-Day Guarantee",
    freeDelivery: true,
  },
  {
    rank: 3,
    name: "CurrentBody LED Mask",
    shortName: "CurrentBody",
    image: "/img/currentbody.png",
    price: "£399.99",
    rating: 4.7,
    ledCount: "132 LEDs",
    lightWavelengths: "Red & NIR (3 Modes)",
    colorDots: RED_NIR_DOTS,
    neckCoverage: false,
    multiSkinModes: false,
    eyeProtection: false,
    cordlessRechargeable: true,
    freeGifts: false,
    moneyBackTrial: "60-Day (10% Fee)",
    freeDelivery: false,
  },
  {
    rank: 4,
    name: "Omnilux LED Mask",
    shortName: "Omnilux",
    image: "/img/omnilux.png",
    price: "£348",
    rating: 4.6,
    ledCount: "132 LEDs",
    lightWavelengths: "Red & NIR (2 Modes)",
    colorDots: RED_NIR_DOTS,
    neckCoverage: false,
    multiSkinModes: false,
    eyeProtection: false,
    cordlessRechargeable: true,
    freeGifts: false,
    moneyBackTrial: "30-Day Guarantee",
    freeDelivery: false,
  },
  {
    rank: 5,
    name: "Shark CryoGlow LED Mask",
    shortName: "Shark CryoGlow",
    image: "/img/shark.png",
    price: "£299.99",
    rating: 4.6,
    ledCount: "Unspecified",
    lightWavelengths: "Red & Blue + Cryo",
    colorDots: RED_BLUE_DOTS,
    neckCoverage: false,
    multiSkinModes: false,
    eyeProtection: false,
    cordlessRechargeable: true,
    freeGifts: false,
    moneyBackTrial: "30-Day Guarantee",
    freeDelivery: false,
  },
];

export default function QureskincareComparison() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0">
      {/* Emerald Masthead */}
      <EmeraldMasthead
        title="Qure Skincare vs Buudy: Best LED Face Mask UK"
        subtitle="Custom zone controls vs 7-colour full-face and neck therapy."
        badgeText="United Kingdom - 2026"
      />

      {/* Expert Reviewer Card */}
      <ExpertReviewerCard
        customBio={
          <p>
            With {EXPERT_PROFILE.yearsExperience} years of experience in
            skincare and beauty technology,{" "}
            <strong className="text-slate-900">{EXPERT_PROFILE.name}</strong>{" "}
            evaluated Qure against Buudy. While Qure's app features zone-specific
            controls, Buudy delivers broader full-spectrum coverage, essential
            neck therapy, seamless tap controls, and unmatched affordability at
            £179 with £128 in included free gifts.
          </p>
        }
      />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="prose prose-lg prose-slate w-full max-w-none mb-16 space-y-6">
          <p>
            Qure Skincare has gained a substantial following with its 3-minute
            app-connected facewear. But does its £299 price tag make sense
            compared to the <strong>Buudy 7 Colour LED Mask</strong>, which
            includes neck coverage and 7 medical-grade colours for £179?
          </p>
          <p>
            We evaluated both systems across speed, ease of use, app dependency,
            and real-world clinical results to provide an honest breakdown.
          </p>
        </div>

        {/* 10 Evaluation Criteria */}
        <EvaluationCriteriaSection />

        {/* Product Cards */}
        <div className="space-y-16">
          {products.map((product) => (
            <div
              key={product.id}
              className={`relative bg-white rounded-3xl shadow-sm border ${
                product.isWinner
                  ? "border-emerald-500 ring-4 ring-emerald-50 pt-10 md:pt-10"
                  : "border-slate-200"
              } p-6 md:p-10`}
            >
              {product.isWinner && (
                <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm tracking-wide uppercase flex items-center gap-1.5 md:gap-2 shadow-lg z-10 whitespace-nowrap">
                  <Award size={16} className="md:w-[18px] md:h-[18px]" />
                  #1 Editor's Choice - Overall Winner
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16">
                {/* Left Column: Image & Quick Stats */}
                <div className="lg:col-span-4 flex flex-col items-center">
                  <div className="lg:sticky lg:top-8 w-full flex flex-col items-center">
                    <h2
                      className={`text-2xl font-bold text-slate-900 mb-6 text-center lg:hidden ${
                        product.isWinner ? "mt-3" : ""
                      }`}
                    >
                      {product.rank} {product.name}
                    </h2>

                    <div className="relative w-full mb-6">
                      <a
                        href={product.link}
                        onClick={(event) =>
                          preventPlaceholderNavigation(event, product.link)
                        }
                        className="block w-full group"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full aspect-square object-cover rounded-2xl shadow-md border border-slate-100 group-hover:shadow-xl transition-shadow duration-300"
                        />
                      </a>
                    </div>

                    <div className="text-center mb-2 lg:mb-6 w-full">
                      <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-2 flex-wrap">
                        <span className="text-3xl font-extrabold text-slate-900">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-lg text-slate-400 line-through font-medium">
                            {product.originalPrice}
                          </span>
                        )}
                        {product.isWinner && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 text-amber-300 border border-amber-400/40 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider shadow-xs whitespace-nowrap">
                            BIGGEST BLACK FRIDAY SALE
                          </span>
                        )}
                      </div>

                      <GreenStarRating
                        rating={product.rating}
                        forceFull={product.isWinner}
                        size={24}
                        className="mb-2"
                      />
                      <p className="text-sm font-medium text-slate-500">
                        Overall rating {product.rating}
                      </p>
                    </div>

                    <div className="w-full hidden lg:block">
                      <CTAButton
                        href={product.link}
                        text={product.isWinner ? "Official Website" : "Shop Now"}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column: Details */}
                <div className="lg:col-span-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 hidden lg:block font-serif">
                    <a
                      href={product.link}
                      onClick={(event) =>
                        preventPlaceholderNavigation(event, product.link)
                      }
                      className="hover:text-emerald-600 transition-colors"
                    >
                      {product.rank} {product.name}
                    </a>
                  </h2>

                  <div className="prose prose-slate prose-lg max-w-none mb-8">
                    {product.description.map((p, idx) => (
                      <p
                        key={idx}
                        className="text-slate-600 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: p }}
                      />
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-100 mb-8">
                    <h4 className="font-bold text-slate-900 mb-6 text-lg">
                      Performance Metrics
                    </h4>
                    <div className="space-y-3">
                      {product.metrics.map((metric, idx) => (
                        <MetricBar
                          key={idx}
                          label={metric.label}
                          value={metric.value}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Pros & Cons */}
                  <div className="flex flex-col gap-6 mb-8">
                    {/* Pros */}
                    <div className="bg-emerald-50/50 rounded-2xl px-3 py-5 md:p-6 border border-emerald-100">
                      <h4 className="bg-emerald-500 text-white font-bold text-center text-2xl py-3 px-3 md:px-6 -mt-5 -mx-3 md:-mt-6 md:-mx-6 mb-5 md:mb-6 rounded-t-2xl">
                        Pros
                      </h4>
                      <ul className="space-y-4">
                        {product.pros.map((pro, idx) => {
                          const [bold, ...rest] = pro.split(":");
                          const is7ColorPoint =
                            bold.toLowerCase().includes("7 colour") ||
                            bold.toLowerCase().includes("7-color");
                          return (
                            <li
                              key={idx}
                              className="text-base text-slate-700 flex items-start gap-3"
                            >
                              <Check
                                size={20}
                                className="text-emerald-500 shrink-0 mt-0.5"
                              />
                              <div>
                                <span>
                                  <strong className="text-slate-900">
                                    {bold}:
                                  </strong>
                                  {rest.join(":")}
                                </span>
                                {is7ColorPoint && (
                                  <div className="mt-2.5 flex items-center gap-1.5 flex-wrap">
                                    {BUUDY_7_COLOR_DOTS.map((dot, i) => (
                                      <span
                                        key={i}
                                        title={dot.name}
                                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-white border shadow-2xs ${
                                          dot.border
                                            ? "border-slate-300 text-slate-700"
                                            : "border-slate-200 text-slate-800"
                                        }`}
                                      >
                                        <span
                                          className="w-2.5 h-2.5 rounded-full shrink-0 shadow-2xs"
                                          style={{ backgroundColor: dot.bg }}
                                        />
                                        <span className="text-[11px] font-medium">
                                          {dot.name.split(" ")[0]}
                                        </span>
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div className="bg-red-50/50 rounded-2xl px-3 py-5 md:p-6 border border-red-100">
                      <h4 className="bg-red-500 text-white font-bold text-center text-2xl py-3 px-3 md:px-6 -mt-5 -mx-3 md:-mt-6 md:-mx-6 mb-5 md:mb-6 rounded-t-2xl">
                        Cons
                      </h4>
                      <ul className="space-y-4">
                        {product.cons.map((con, idx) => {
                          const [bold, ...rest] = con.split(":");
                          return (
                            <li
                              key={idx}
                              className="text-base text-slate-700 flex items-start gap-3"
                            >
                              <XCircle
                                size={20}
                                className="text-red-500 shrink-0 mt-0.5"
                              />
                              <span>
                                <strong className="text-slate-900">
                                  {bold}:
                                </strong>
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: rest.join(":"),
                                  }}
                                />
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  {/* Editor's Tip - Free Gifts (Buudy only) */}
                  {product.isWinner && <FreeGiftsBox />}

                  <div className="w-full mt-8 lg:hidden">
                    <CTAButton
                      href={product.link}
                      text={product.isWinner ? "Official Website" : "Shop Now"}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dermatologist's Verdict Video Section */}
        <DermatologistVerdictSection />

        {/* Comparison Table */}
        <CompetitorComparisonTable products={qureComparisonTableProducts} />
      </main>

      <MaskFooter />

      {/* Sticky Mobile CTA */}
      <StickyMobileCta />
    </div>
  );
}
