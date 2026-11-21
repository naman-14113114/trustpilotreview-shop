"use client";

import React from "react";
import {
  HandCoins,
  TrendingUp,
  BadgePoundSterling,
  XCircle,
  Check,
  Award,
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
    icon: HandCoins,
    title: "The Influencer & Celebrity Markup",
    description:
      "When you see a Hollywood star or major influencer promoting a £500 LED mask on social media, you are directly paying for that multi-million-pound contract. Up to 60% of the retail price of legacy masks goes directly into marketing overhead rather than the optical hardware.",
    severity: "Financial Risk",
  },
  {
    icon: TrendingUp,
    title: "Commoditized LED Technology",
    description:
      "The core science of phototherapy—semiconductor diodes emitting precise nanometer wavelengths—has matured and become highly efficient to produce. Yet legacy beauty brands keep their retail prices artificially inflated at £350 to £579 to preserve extreme profit margins.",
    severity: "Consumer Awareness",
  },
  {
    icon: BadgePoundSterling,
    title: "The 'Prestige Pricing' Illusion",
    description:
      "In the beauty industry, brands deliberately price items at £400+ to exploit a psychological cognitive bias: consumers automatically assume that a higher price means superior clinical efficacy. In laboratory testing, these expensive masks often perform worse than fairly priced direct-to-consumer alternatives.",
    severity: "High Risk",
  },
  {
    icon: XCircle,
    title: "Nickeled and Dimed for Basic Features",
    description:
      "Legacy brands constantly force expensive add-ons. Want neck coverage? That's £300 extra. Want a protective travel case? £40. Want blue light for blemishes? Buy another £350 mask. It is a relentless up-selling ecosystem.",
    severity: "Financial Risk",
  },
];

const comparisonPoints = [
  {
    feature: "Business Model",
    silicone: "Celebrity Endorsement & Retail Markup",
    buudy: "Direct-to-Consumer / Skincare Value",
  },
  {
    feature: "Retail Price",
    silicone: "£350 - £579+ (Face only)",
    buudy: "£179 (Complete Face + Neck)",
  },
  {
    feature: "Included in the Box",
    silicone: "Face Mask & USB Cord only",
    buudy: "Face Mask, Neck Mask, Remote, Eye Guards + £128 Gifts",
  },
  {
    feature: "Wavelength Diversity",
    silicone: "Typically 2 wavelengths (Red + NIR)",
    buudy: "7 Therapeutic Colours + 830nm NIR",
  },
  {
    feature: "Return Guarantee",
    silicone: "30 days (often with 10% restocking fee)",
    buudy: "90-Day 100% Money-Back Guarantee",
  },
];

const expertQuotes = [
  {
    name: "Jane Reynolds",
    title: "Cosmetic Formulation Chemist, London",
    quote:
      "If you strip away the designer packaging and the celebrity endorsements, the internal circuit boards of a £500 mask and a £200 mask often roll off very similar assembly lines. You are almost exclusively paying a 'brand tax' for the logo printed on the silicone.",
  },
  {
    name: "Dr. Mark Evans",
    title: "Dermatologist & Medical Board Member, Manchester",
    quote:
      "I always advise my patients to buy specs, not brands. Look for the nanometer wavelengths (630nm red, 415nm blue) and FDA clearance. If a device has those, spending an extra £300 just because it was in Vogue magazine is financially foolish.",
  },
];

export default function BrandNamePremium() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0">
      {/* Emerald Masthead */}
      <EmeraldMasthead
        title="The 'Celebrity Markup': Are You Paying For Light Therapy Or Marketing?"
        subtitle="Why a £500 price tag often reflects celebrity endorsement contracts, not superior LED chips."
        badgeText="United Kingdom - 2026"
        alertBadge="PRICE TRANSPARENCY REPORT"
      />

      {/* Expert Reviewer Card */}
      <ExpertReviewerCard
        customBio={
          <p>
            With {EXPERT_PROFILE.yearsExperience} years of experience in
            skincare and clinical device evaluation,{" "}
            <strong className="text-slate-900">{EXPERT_PROFILE.name}</strong>{" "}
            breaks down the true cost of at-home phototherapy. Her research
            demonstrates that the underlying LED semiconductor technology is
            well-established and that prices exceeding £300 almost exclusively
            fund prestige retail margins and celebrity endorsement contracts.
          </p>
        }
      />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Opening Statement */}
        <div className="prose prose-lg prose-slate max-w-4xl mx-auto mb-16">
          <p>
            Why does an LED mask that costs less than £40 to manufacture carry a
            retail price tag of £400 to £579 in high-end UK department stores?
          </p>
          <p>
            The answer is simple: you aren't paying for superior LEDs. You are
            paying for Hollywood agent fees, prime London retail shelf space, and
            luxury marketing campaigns. This practice, known in the cosmetics
            industry as <strong>"prestige pricing"</strong>, tricks buyers into
            assuming that an expensive device is automatically more effective.
          </p>
          <p>
            Below, we pull back the curtain on celebrity markups and show why
            cutting out the middleman makes the <strong>Buudy 7 Colour LED Mask</strong>{" "}
            the smartest investment in modern skincare.
          </p>
        </div>

        {/* Danger Cards */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-serif">
            4 Ways Prestige Brands Overcharge You
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
                          Tactic #{idx + 1}: {danger.title}
                        </h3>
                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide w-fit ${
                            danger.severity === "High Risk"
                              ? "bg-red-100 text-red-700 border border-red-200"
                              : "bg-amber-100 text-amber-800 border border-amber-200"
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

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 mb-20 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center font-serif">
            Celebrity Brands vs. Buudy Direct-to-Consumer
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            Comparing retail markups, included equipment, and true return on
            investment.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 px-4 font-bold text-slate-900">Feature</th>
                  <th className="py-4 px-4 font-bold text-red-600 bg-red-50/50 rounded-tl-xl">
                    Celebrity-Endorsed Mask
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

        {/* Expert Testimonials */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 mb-20 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center font-serif">
            What Industry Insiders Reveal
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

        {/* The Winner: Buudy 7 Colour LED Mask (#1 Winner Card) */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">
              Clinical Technology Without The Brand Markup
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 font-serif">
              Our Top Pick: Buudy 7 Colour LED Mask
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
              Get medical-grade light therapy, 7 clinical colours, and integrated
              neck rejuvenation for £179—saving over £300 compared to legacy
              brands.
            </p>
          </div>

          <div className="relative bg-white rounded-3xl shadow-sm border border-emerald-500 ring-4 ring-emerald-50 p-6 md:p-10 pt-10 md:pt-10">
            <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm tracking-wide uppercase flex items-center gap-1.5 md:gap-2 shadow-lg z-10 whitespace-nowrap">
              <Award size={16} className="md:w-[18px] md:h-[18px]" />
              #1 Editor's Choice - Best Value in the UK
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
                        alt="Buudy 7 Colour LED Mask"
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
                    By operating direct-to-consumer without costly celebrity
                    endorsement fees or department store markups, Buudy delivers
                    the UK's most comprehensive phototherapy device at an honest,
                    fair price. Instead of charging £300 extra for neck coverage
                    or £40 for accessories, everything is included standard.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Health Canada Approved, with 192 high-density LEDs and 7
                    clinical colours, it comes with a{" "}
                    <strong>90-day money-back guarantee</strong> and £128 in free
                    gifts for £179 during the Black Friday Sale.
                  </p>
                </div>

                {/* Performance Metrics */}
                <div className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-100 mb-8">
                  <h4 className="font-bold text-slate-900 mb-6 text-lg">
                    Value & Specification Metrics
                  </h4>
                  <div className="space-y-3">
                    <MetricBar label="Price-to-Specification Ratio" value={100} />
                    <MetricBar label="Wavelength Variety (7 Colours)" value={99} />
                    <MetricBar label="Full Face & Neck Treatment" value={98} />
                    <MetricBar label="Included Accessories Value" value={97} />
                    <MetricBar label="Customer Satisfaction Score" value={98} />
                  </div>
                </div>

                {/* Pros */}
                <div className="bg-emerald-50/50 rounded-2xl px-3 py-5 md:p-6 border border-emerald-100 mb-8">
                  <h4 className="bg-emerald-500 text-white font-bold text-center text-2xl py-3 px-3 md:px-6 -mt-5 -mx-3 md:-mt-6 md:-mx-6 mb-5 md:mb-6 rounded-t-2xl">
                    Why Smart Skincare Buyers Choose Buudy
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Zero Brand Tax: You pay strictly for medical-grade LED semiconductors and optical physics.",
                      "7 Full Therapeutic Colours: Red, Blue, Green, Cyan, Yellow, Purple & White plus 830nm NIR.",
                      "Integrated Neck Coverage: Full neck and jawline therapy included in the box.",
                      "£128 Free Accessories: Travel case, red light torch, and expert guide included free.",
                      "90-Day Money-Back Guarantee: Complete peace of mind with 100% refund policy.",
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
                            {bold.includes("7 Full Therapeutic Colours") && (
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
