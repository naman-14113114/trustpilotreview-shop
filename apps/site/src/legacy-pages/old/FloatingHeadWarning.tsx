"use client";

import React from "react";
import {
  Eye,
  Scissors,
  Droplets,
  ArrowDown,
  Check,
  Award,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { GreenStarRating } from "@/components/GreenStarRating";
import { EXPERT_PROFILE } from "@/lib/expertProfile";
import {
  BUUDY_OFFICIAL_URL,
  BUUDY_7_COLOR_DOTS,
  CTAButton,
  MetricBar,
  EmeraldMasthead,
  ExpertReviewerCard,
  FreeGiftsBox,
  DermatologistVerdictSection,
  CompetitorComparisonTable,
  StickyMobileCta,
  MaskFooter,
  preventPlaceholderNavigation,
} from "@/features/mask-common/MaskAdvertorialCommon";

const dangerPoints = [
  {
    icon: Eye,
    title: "The 'Floating Head' Syndrome",
    description:
      "Aging doesn't stop at your jawline. When you treat your face meticulously but ignore your neck, you create a stark, unnatural contrast within months. Your face may look 10 years younger, while your neck betrays your true age—a cosmetic disaster known in dermatology as the 'floating head' aesthetic.",
    severity: "High Risk",
  },
  {
    icon: Scissors,
    title: "The £300 'Neck Tax' Rip-Off",
    description:
      "Premium brands like Omnilux and CurrentBody intentionally sell their standard £350-£400 LED masks as 'face-only'. If you want to treat your neck, they force you to purchase a completely separate 'Neck & Décolletage' piece for an additional £300+. You are effectively being taxed twice for what should be a single, comprehensive treatment.",
    severity: "Financial Risk",
  },
  {
    icon: Droplets,
    title: "Ignoring The Body's Thinnest Skin",
    description:
      "The skin on your neck and chest is significantly thinner than the skin on your face, has fewer sebaceous glands, and is constantly subjected to sun exposure. Because it's so fragile, it is often the very first place to show signs of aggressive aging, creping, and hyperpigmentation. Ignoring it in your LED routine guarantees premature aging.",
    severity: "High Risk",
  },
  {
    icon: ArrowDown,
    title: "Accelerated 'Tech Neck' Aging",
    description:
      "We are currently living through an epidemic of 'Tech Neck'—deep horizontal wrinkles and sagging caused by constantly looking down at our phones and laptops. A face-only mask does absolutely nothing to combat the structural collagen breakdown happening right below your chin.",
    severity: "Medium Risk",
  },
];

const comparisonPoints = [
  {
    feature: "Treatment Area",
    silicone: "Face Only (Stops at jawline)",
    buudy: "Full Face + Integrated Neck Therapy",
  },
  {
    feature: "Total Cost for Full Coverage",
    silicone: "£650 - £700+ (Requires 2 devices)",
    buudy: "£179 (Everything included)",
  },
  {
    feature: "Tech-Neck Wrinkle Defense",
    silicone: "Zero coverage, accelerates contrast",
    buudy: "Direct targeting of horizontal neck lines",
  },
  {
    feature: "Daily Routine Time",
    silicone: "20-30 mins (Face first, then neck)",
    buudy: "15 mins (Simultaneous treatment)",
  },
  {
    feature: "Light Spectrum",
    silicone: "Typically 2-3 wavelengths only",
    buudy: "7 distinct therapeutic wavelengths + NIR",
  },
];

const expertQuotes = [
  {
    name: "Dr. Elena Rostova",
    title: "Aesthetic Dermatologist, London",
    quote:
      "The biggest mistake my patients make investing in home LED tech is buying face-only devices. The skin on the neck is incredibly delicate and notoriously difficult to treat later in life. Preventing 'turkey neck' simultaneously with your facial routine isn't a luxury; it's a dermatological necessity.",
  },
  {
    name: "Dr. James Chen",
    title: "Photobiology Researcher, Manchester",
    quote:
      "Splitting facial and neck treatments into two separate £350 devices is purely a revenue-generation strategy by major brands. There is no structural or scientific reason a home LED mask cannot cover both zones effectively for half the cost.",
  },
];

export default function FloatingHeadWarning() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0">
      {/* Emerald Masthead */}
      <EmeraldMasthead
        title="The £300 'Neck Tax': Why Buying A Face-Only LED Mask Is A Huge Mistake"
        subtitle="How ignoring your neck causes the 'floating head' aging effect—and why you shouldn't pay £300 extra to fix it."
        badgeText="United Kingdom - 2026"
        alertBadge="CRITICAL DESIGN FLAW EXPOSÉ"
      />

      {/* Expert Reviewer Card */}
      <ExpertReviewerCard
        customBio={
          <p>
            With {EXPERT_PROFILE.yearsExperience} years of experience in
            skincare and clinical dermatology,{" "}
            <strong className="text-slate-900">{EXPERT_PROFILE.name}</strong>{" "}
            investigates why face-only LED masks leave users with a stark,
            prematurely aged neck. Her research shows that simultaneous
            neck-and-face phototherapy is essential for consistent anti-aging
            results, proving that charging £300+ extra for a separate neck piece
            is an unnecessary industry mark-up.
          </p>
        }
      />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Opening Statement */}
        <div className="prose prose-lg prose-slate max-w-4xl mx-auto mb-16">
          <p>
            You wouldn't apply moisturiser to your forehead and stop right at
            your chin. So why are hundreds of thousands of people spending
            £350 to £500 on LED masks that completely ignore the neck?
          </p>
          <p>
            The delicate skin on your neck has fewer oil glands and produces
            less natural collagen than facial skin. When you treat only your face,
            your neck continues to age at an accelerated pace, resulting in the
            dreaded <strong>"floating head" effect</strong>—a youthful face
            sitting on a creped, wrinkled neck.
          </p>
          <p>
            Worse yet, big-name beauty brands know this. They deliberately sell
            face-only masks so they can charge you another £300+ for a separate
            neck and chest attachment. Below, we break down the science of why
            neck coverage is essential and highlight the all-in-one solution that
            includes it as standard.
          </p>
        </div>

        {/* Danger Cards */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-serif">
            4 Reasons Why Face-Only LED Masks Fail Your Skin
          </h2>

          <div className="space-y-8">
            {dangerPoints.map((danger, idx) => {
              const IconComponent = danger.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500 rounded-l-3xl"></div>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="shrink-0">
                      <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center border border-red-100">
                        <IconComponent size={32} className="text-red-500" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                          Trap #{idx + 1}: {danger.title}
                        </h3>
                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide w-fit ${
                            danger.severity === "Financial Risk"
                              ? "bg-amber-100 text-amber-800 border border-amber-200"
                              : "bg-red-100 text-red-700 border border-red-200"
                          }`}
                        >
                          {danger.severity}
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                        {danger.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Expert Testimonials */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 mb-20 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center font-serif">
            What Skincare Specialists Are Saying
          </h2>

          <div className="space-y-8">
            {expertQuotes.map((expert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-lg shrink-0">
                    {expert.name.charAt(3)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      {expert.name}
                    </h3>
                    <p className="text-sm text-slate-500">{expert.title}</p>
                  </div>
                </div>
                <blockquote className="text-slate-700 italic leading-relaxed text-base md:text-lg">
                  "{expert.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 mb-20 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center font-serif">
            Face-Only Masks vs. Buudy Integrated Neck Therapy
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            A side-by-side cost and coverage comparison for UK buyers.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 px-4 font-bold text-slate-900">Feature</th>
                  <th className="py-4 px-4 font-bold text-red-600 bg-red-50/50 rounded-tl-xl">
                    Standard Face-Only Masks
                  </th>
                  <th className="py-4 px-4 font-bold text-emerald-600 bg-emerald-50/50 rounded-tr-xl">
                    Buudy 7 Colour LED Mask
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonPoints.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-4 font-medium text-slate-800 text-sm md:text-base">
                      {row.feature}
                    </td>
                    <td className="py-3 px-4 text-slate-600 bg-red-50/20 text-sm md:text-base">
                      {row.silicone}
                    </td>
                    <td className="py-3 px-4 font-semibold text-emerald-800 bg-emerald-50/20 text-sm md:text-base">
                      {row.buudy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* The Winner: Buudy 7 Colour LED Mask (#1 Winner Card) */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">
              The Comprehensive Anti-Aging Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 font-serif">
              Stop Ignoring Your Neck: Choose Buudy
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
              Enjoy complete facial and neck rejuvenation in a single, comfortable
              15-minute daily session without paying the £300 neck tax.
            </p>
          </div>

          <div className="relative bg-white rounded-3xl shadow-sm border border-emerald-500 ring-4 ring-emerald-50 p-6 md:p-10 pt-10 md:pt-10">
            <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm tracking-wide uppercase flex items-center gap-1.5 md:gap-2 shadow-lg z-10 whitespace-nowrap">
              <Award size={16} className="md:w-[18px] md:h-[18px]" />
              #1 Editor's Choice - Full Face & Neck Rejuvenation
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16">
              {/* Left Column */}
              <div className="lg:col-span-4 flex flex-col items-center">
                <div className="lg:sticky lg:top-8 w-full flex flex-col items-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center lg:hidden mt-3">
                    #1 Buudy 7 Colour LED Mask
                  </h3>

                  <div className="relative w-full mb-6">
                    <a
                      href={BUUDY_OFFICIAL_URL}
                      onClick={(e) =>
                        preventPlaceholderNavigation(e, BUUDY_OFFICIAL_URL)
                      }
                      className="block w-full group"
                    >
                      <img
                        src="/img/57-w.webp"
                        alt="Buudy 7 Colour LED Mask with Neck Coverage"
                        loading="lazy"
                        decoding="async"
                        className="w-full aspect-square object-cover rounded-2xl shadow-md border border-slate-100 group-hover:shadow-xl transition-shadow duration-300"
                      />
                    </a>
                  </div>

                  <div className="text-center mb-2 lg:mb-6 w-full">
                    <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-2 flex-wrap">
                      <span className="text-3xl font-extrabold text-slate-900">
                        £179
                      </span>
                      <span className="text-lg text-slate-400 line-through font-medium">
                        £449
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 text-amber-300 border border-amber-400/40 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider shadow-xs whitespace-nowrap">
                        BIGGEST BLACK FRIDAY SALE
                      </span>
                    </div>

                    <GreenStarRating rating="4.9" forceFull size={24} className="mb-2" />
                    <p className="text-sm font-medium text-slate-500">
                      Overall rating 4.9 / 5 (4,000+ reviews)
                    </p>
                  </div>

                  <div className="w-full hidden lg:block">
                    <CTAButton
                      href={BUUDY_OFFICIAL_URL}
                      text="Official Website — 60% Off"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 hidden lg:block font-serif">
                  <a
                    href={BUUDY_OFFICIAL_URL}
                    className="hover:text-emerald-600 transition-colors"
                  >
                    #1 Buudy 7 Colour LED Mask
                  </a>
                </h3>

                <div className="prose prose-slate prose-lg max-w-none mb-8">
                  <p className="text-slate-600 leading-relaxed">
                    The Buudy 7 Colour LED Mask includes full, integrated neck
                    treatment standard in the box. Its high-output medical-grade
                    diodes target "turkey neck", tech-neck creases, and sagging skin
                    alongside your face, eliminating the risk of floating-head
                    contrast.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    With 7 therapeutic wavelengths, wireless tap operation, and
                    Health Canada Approval, it gives you over £700 worth of clinical
                    technology for just £179 during the Black Friday Sale, backed
                    by a <strong>90-day money-back guarantee</strong>.
                  </p>
                </div>

                {/* Performance Metrics */}
                <div className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-100 mb-8">
                  <h4 className="font-bold text-slate-900 mb-6 text-lg">
                    Coverage & Value Metrics
                  </h4>
                  <div className="space-y-3">
                    <MetricBar label="Total Skin Coverage (Face + Neck)" value={99} />
                    <MetricBar label="Tech-Neck Wrinkle Reduction" value={96} />
                    <MetricBar label="Wavelength Variety (7 Colours)" value={98} />
                    <MetricBar label="Ease of Routine (Cordless)" value={97} />
                    <MetricBar label="Price-to-Coverage Value" value={100} />
                  </div>
                </div>

                {/* Pros */}
                <div className="bg-emerald-50/50 rounded-2xl px-3 py-5 md:p-6 border border-emerald-100 mb-8">
                  <h4 className="bg-emerald-500 text-white font-bold text-center text-2xl py-3 px-3 md:px-6 -mt-5 -mx-3 md:-mt-6 md:-mx-6 mb-5 md:mb-6 rounded-t-2xl">
                    Why Buudy Beats Face-Only Masks
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Zero £300 Neck Tax: Face and neck coverage integrated in one single device.",
                      "Simultaneous 15-Minute Treatment: Rejuvenate both zones at once instead of doubling routine time.",
                      "7 Medical-Grade Colours: Red, Blue, Green, Cyan, Yellow, Purple & White plus 830nm NIR.",
                      "Prevents Aging Contrast: Keeps facial and neck skin texture, firmness, and tone identical.",
                      "60% Off Sale: £179 with £128 in included free gifts.",
                    ].map((pro, idx) => {
                      const [bold, ...rest] = pro.split(":");
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
                              <strong className="text-slate-900">{bold}:</strong>
                              {rest.join(":")}
                            </span>
                            {bold.includes("7 Medical-Grade Colours") && (
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

                {/* £128 Free Gifts Box */}
                <FreeGiftsBox />

                <div className="w-full mt-8 lg:hidden">
                  <CTAButton
                    href={BUUDY_OFFICIAL_URL}
                    text="Official Website — 60% Off"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dermatologist's Verdict Video Section */}
        <DermatologistVerdictSection />

        {/* 5-Product Side-by-Side Comparison Table */}
        <CompetitorComparisonTable />
      </main>

      <MaskFooter />

      {/* Sticky Mobile CTA */}
      <StickyMobileCta />
    </div>
  );
}
