"use client";

import React, { useState, useRef } from "react";
import { Check, XCircle, Award, Play } from "lucide-react";
import { GreenStarRating } from "@/components/GreenStarRating";
import {
  BUUDY_OFFICIAL_URL,
  BUUDY_7_COLOR_DOTS,
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
} from "@/features/mask-common/MaskAdvertorialCommon";

const productVideos: Record<
  number,
  {
    src: string;
    poster: string;
    label: string;
    headline: string;
    copy: string;
  }
> = {
  1: {
    src: "/videos/buudy-dermatologist-verdict.mp4",
    poster: "/videos/buudy-video-thumbnail-megan.png",
    label: "Dermatologist video verdict",
    headline: "Why Buudy is our No. 1 pick",
    copy: "Dr. Megan Vincze highlights the reasons Buudy stands out for home use: full face-and-neck coverage, a 7 Colour light spectrum, 830nm near-infrared support, comfortable eye protection, and a £179 sale price that is far below many premium face-only masks.",
  },
  2: {
    src: "/videos/currentbody-verdict.webm",
    poster: "/videos/currentbody-verdict-poster.jpg",
    label: "Dermatologist comparison",
    headline: "Premium feel, but the value gap is clear",
    copy: "CurrentBody has a polished, flexible design and strong brand recognition. The drawback is value: the standard mask is face-only at a much higher price, while full face-and-neck treatment costs substantially more.",
  },
  3: {
    src: "/videos/omnilux-verdict.webm",
    poster: "/videos/omnilux-verdict-poster.jpg",
    label: "Dermatologist comparison",
    headline: "Trusted, polished, and still narrowly focused",
    copy: "Omnilux is a credible clinical-style mask, but it remains focused on a narrower red and near-infrared routine. For shoppers wanting multiple light modes and neck coverage in one purchase, the total cost rises quickly.",
  },
  4: {
    src: "/videos/shark-verdict.webm",
    poster: "/videos/shark-verdict-poster.jpg",
    label: "Dermatologist comparison",
    headline: "Cooling stands out, but the skincare range is narrower",
    copy: "Shark's under-eye cooling is memorable, but the device is still a face-only mask with fewer light options. It may suit shoppers who prioritise cooling, but it is less complete for broader skin goals.",
  },
  5: {
    src: "/videos/dr-dennis-verdict.webm",
    poster: "/videos/dr-dennis-verdict-poster.jpg",
    label: "Dermatologist comparison",
    headline: "Fast treatment, high price, rigid fit",
    copy: "Dr. Dennis Gross offers a very quick treatment window, but the rigid shell, high price, and lack of neck coverage make it harder to recommend as the best everyday buy for most UK shoppers.",
  },
};

const ProductVideoVerdict: React.FC<{
  productId: number;
  isWinner?: boolean;
}> = ({ productId, isWinner }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const video = productVideos[productId];
  if (!video) return null;

  const playVideo = () => {
    videoRef.current?.play().catch(() => setIsPlaying(false));
  };

  return (
    <div
      className={`mb-8 overflow-hidden rounded-3xl border shadow-sm ${
        isWinner
          ? "border-emerald-200 bg-emerald-50/50"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr]">
        <div className="relative bg-black">
          <video
            ref={videoRef}
            className="h-full w-full object-cover aspect-[4/3] md:aspect-auto"
            controls
            playsInline
            preload="metadata"
            poster={video.poster}
            aria-label={`${video.headline} - video review`}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          >
            <source src={video.src} type="video/webm" />
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            type="button"
            aria-label={`Play ${video.headline}`}
            onClick={playVideo}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-4 text-white shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-400 ${
              isWinner ? "bg-emerald-500 hover:bg-emerald-600" : "bg-slate-900/90 hover:bg-slate-900"
            } ${isPlaying ? "pointer-events-none opacity-0 scale-75" : "opacity-100 scale-100"}`}
          >
            <Play size={24} fill="currentColor" className="ml-0.5" />
          </button>
        </div>
        <div className="p-5 md:p-6 flex flex-col justify-center">
          <span
            className={`text-xs font-bold uppercase tracking-wider mb-1 ${
              isWinner ? "text-emerald-700" : "text-slate-500"
            }`}
          >
            {video.label}
          </span>
          <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 font-serif">
            {video.headline}
          </h4>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            {video.copy}
          </p>
        </div>
      </div>
    </div>
  );
};

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
      'A major advantage is the built-in <strong>neck coverage</strong>, a vital feature often missing from more expensive models. This allows you to treat "turkey neck" and sagging skin simultaneously. The <strong>cordless</strong>, rechargeable design features "Tap Technology" and <strong>Buudy AI</strong> guided sessions, making it simple to choose the right routine for your skin goals.',
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
    name: "CurrentBody LED Mask",
    image: "/img/currentbody.png",
    price: "£399.99",
    rating: "4.7 / 5",
    link: "https://amzn.to/4beNXsm",
    isWinner: false,
    siliconWarning: true,
    description: [
      "The CurrentBody LED Mask stands out as a premier selection in our evaluation, solidifying its reputation as a global leader in non-invasive skincare technology. Engineered with a sophisticated blend of red and near-infrared light, this device is clinically projected to reduce wrinkles by 24% in four weeks.",
      'Its proprietary "Pillow Technology" ensures uniform light distribution across all facial contours, maximizing the efficacy of every 10-minute session. Grounded in clinical research and expert-backed science, it remains a top-tier investment for those seeking professional-grade skin rejuvenation at home.',
      "Trusted by over 500,000 users across 80 countries, the mask has earned a 97% satisfaction rate for delivering a visibly brighter and more refreshed complexion. It continues to be a benchmark for reliability and proven results in the domestic beauty-tech sector.",
    ],
    pros: [
      "Strong Social Proof: Endorsed by celebrities and dermatologists across the globe.",
      "High Review Volume: 4.7-star rating based on over 2,800 reviews.",
      "Clinically Studied: Reduces wrinkle depth in documented human trials.",
      "High-Quality Build: Flexible silicone for facial conformity.",
    ],
    cons: [
      "Extremely High Price: £399.99 compared to £179 for Buudy.",
      "No Neck Coverage: Must purchase separate neck kit for £679.99.",
      "Limited Treatment Modes: Anti-aging only. Lacks blue, green, and yellow spectrums.",
      "Costly Guarantee: 10% restocking fee on returns.",
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
    id: 3,
    rank: "#3",
    name: "Omnilux LED Mask",
    image: "/img/omnilux.png",
    price: "£348",
    rating: "4.6 / 5",
    link: "https://amzn.to/4s0Zcf7",
    isWinner: false,
    siliconWarning: true,
    description: [
      "Omnilux remains a preeminent name in the light therapy industry, recognized for bringing professional-grade standards to the home skincare market. Utilizing a clinically proven combination of red and near-infrared LED light, this device is specifically engineered to target deep-set wrinkles and revitalize skin texture.",
      "While it carries a premium price point of £348, the mask is highly regarded for its ergonomic design, offering a comfortable fit that ensures a seamless user experience.",
    ],
    pros: [
      "Clinical Backing: FDA-cleared and dermatologist-recommended.",
      "Straightforward Guarantee: 30-day money-back guarantee.",
      "High-Quality Brand: Decades of medical phototherapy pedigree.",
    ],
    cons: [
      "Extremely High Price: £348 face-only.",
      "No Neck Coverage: Neck piece costs an additional £348 (£696 total).",
      "Only 2 Wavelengths: Cannot treat acne or pigmentation.",
      "Fewer LEDs: Only 132 LEDs compared to Buudy's 192.",
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
    id: 4,
    rank: "#4",
    name: "Shark CryoGlow LED Mask",
    image: "/img/shark.png",
    price: "£299.99",
    rating: "4.6 / 5",
    link: "https://link.amazon/B0cFRb4P4",
    isWinner: false,
    description: [
      "The Shark CryoGlow LED Face Mask features integrated under-eye cooling technology alongside red and blue light modes.",
      "However, its rigid 675g frame and lack of neck treatment limit its long-term comfort and comprehensive value.",
    ],
    pros: [
      "Under-Eye Cooling: Soothes puffiness and eye fatigue.",
      "Fast Treatments: 6 to 8 minute pre-programmed cycles.",
    ],
    cons: [
      "High Price: £299.99 for face only.",
      "Heavy and Rigid: 675g weight causes nose pressure.",
      "Missing 5 Colour Modes: No green, yellow, cyan, or purple.",
    ],
    metrics: [
      { label: "Light Effectiveness", value: 65 },
      { label: "Skin Comfort and Fit", value: 52 },
      { label: "Ease of Use", value: 75 },
      { label: "Material Quality", value: 85 },
      { label: "Affordability", value: 55 },
    ],
  },
  {
    id: 5,
    rank: "#5",
    name: "Dr. Dennis Gross DRx SpectraLite",
    image: "/img/Dr Dennis Gross.png",
    price: "£455",
    rating: "4.1 / 5",
    link: "https://amzn.to/4cvWiJR",
    isWinner: false,
    description: [
      "The Dr. Dennis Gross DRx SpectraLite FaceWare Pro brings dermatologist authority to at-home skincare with quick 3-minute sessions.",
      "However, the staggering £455 price tag and rigid hard plastic shell make it less appealing than comprehensive modern alternatives.",
    ],
    pros: [
      "3-Minute Fast Sessions: Ultra-quick daily routine.",
      "Dermatologist Authority: Formulated by Dr. Dennis Gross.",
    ],
    cons: [
      "Astronomical Price: £455 for rigid plastic.",
      "Zero Neck Coverage: Leaves neck and chest untreated.",
      "Lower LED Density: 162 LEDs across hard shell.",
    ],
    metrics: [
      { label: "Light Effectiveness", value: 75 },
      { label: "Skin Comfort and Fit", value: 45 },
      { label: "Ease of Use", value: 85 },
      { label: "Material Quality", value: 75 },
      { label: "Affordability", value: 35 },
    ],
  },
];

export default function VideoAdvertorial() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0">
      {/* Emerald Masthead */}
      <EmeraldMasthead
        title="Top 5 Best LED Face Masks in the UK"
        subtitle="Ranked with real video breakdowns by board-certified dermatologists."
        badgeText="United Kingdom - 2026"
      />

      {/* Expert Reviewer Card */}
      <ExpertReviewerCard />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="prose prose-lg prose-slate w-full max-w-none mb-16 space-y-6">
          <p>
            LED face masks have exploded in the UK, but the market is confusing.
            Prices range from <strong>£100 to over £600</strong>, and many brands
            make almost identical claims about collagen, acne, redness, and
            anti-aging results.
          </p>
          <p>
            So we tested <strong>18 of the most popular LED masks</strong> over{" "}
            <strong>200+ hours</strong>, comparing wavelengths, light coverage,
            comfort, eye safety, neck treatment, ease of use, reviews, price,
            and guarantees.
          </p>
          <p>
            Below, we rank the LED masks with dedicated dermatologist video
            evaluations for each product.
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

                  {/* Inline Video Verdict Player for this Product */}
                  <ProductVideoVerdict
                    productId={product.id}
                    isWinner={product.isWinner}
                  />

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

        {/* 5-Product Comparison Table */}
        <CompetitorComparisonTable />
      </main>

      <MaskFooter />

      {/* Sticky Mobile CTA */}
      <StickyMobileCta />
    </div>
  );
}
