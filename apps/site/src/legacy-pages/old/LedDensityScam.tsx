"use client";

import React from "react";
import {
  ZapOff,
  Target,
  Zap,
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
  StickyMobileCta,
  MaskFooter,
  preventPlaceholderNavigation,
} from "@/features/mask-common/MaskAdvertorialCommon";

const dangerPoints = [
  {
    icon: ZapOff,
    title: "Hidden Bulb Counts",
    description:
      "Many high-end brands intentionally obscure their total LED bulb count in their marketing materials. Why? Because producing high-density LED arrays is expensive. A mask that costs £500 might only have 60 to 80 weak LEDs spread far apart.",
    severity: "Transparency Risk",
  },
  {
    icon: Target,
    title: "Facial 'Dead Zones'",
    description:
      "Low LED density means large gaps between the lights. When worn, these gaps translate to 'dead zones' on your skin—areas that receive absolutely zero therapeutic light energy. If the light isn't physically hitting the wrinkle or the acne spot, the treatment fails.",
    severity: "Efficacy Risk",
  },
  {
    icon: Zap,
    title: "The Placebo Power Output",
    description:
      "Having LEDs isn't enough; they must be close enough together to generate sufficient irradiance (power). Sparse, low-density masks often fall drastically below the clinical threshold required to stimulate cellular mitochondria, resulting in an expensive placebo effect.",
    severity: "High Risk",
  },
  {
    icon: XCircle,
    title: "Uneven Structural Aging",
    description:
      "Using a mask with dead zones means parts of your face are producing collagen while adjacent areas are not. Over time, this uneven stimulation can lead to inconsistent skin texture and uneven structural aging.",
    severity: "Long Term Risk",
  },
];

const comparisonPoints = [
  {
    feature: "Total LED Bulb Count",
    silicone: "Often hidden (typically 60-100)",
    buudy: "192 High-Density Clinical LEDs",
  },
  {
    feature: "Treatment Area Gaps",
    silicone: "Large 'dead zones' between bulbs",
    buudy: "Seamless edge-to-edge facial coverage",
  },
  {
    feature: "Irradiance Output",
    silicone: "Often drops across sparse areas",
    buudy: "Consistent clinical power output",
  },
  {
    feature: "Transparency",
    silicone: "Vague specifications & hidden specs",
    buudy: "Full specification disclosure",
  },
  {
    feature: "Price",
    silicone: "£350 - £500+",
    buudy: "£179 (Complete Value)",
  },
];

const expertQuotes = [
  {
    name: "Dr. David Lin",
    title: "Photobiomodulation Bioengineer, Cambridge",
    quote:
      "In light therapy, proximity and density are everything. If the diodes are spaced an inch apart, the skin between them is receiving negligible photonic energy. It doesn't matter if the mask costs £500—if the LED density is low, the clinical outcome will be poor.",
  },
  {
    name: "Sarah Mitchell",
    title: "Master Esthetician, London",
    quote:
      "I always tell my clients to ask one question before buying an LED mask: 'Exactly how many bulbs does it have?' If a brand refuses to prominently state they have over 150 LEDs, they are cutting costs at the expense of your skin.",
  },
];

export default function LedDensityScam() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0">
      {/* Emerald Masthead */}
      <EmeraldMasthead
        title="The LED Density Scam: Is Your Expensive Mask Actually Treating Nothing?"
        subtitle="Why sparse LED diodes create facial 'dead zones'—and why diode count and irradiance matter."
        badgeText="United Kingdom - 2026"
        alertBadge="TECHNICAL AUDIT"
      />

      {/* Expert Reviewer Card */}
      <ExpertReviewerCard
        customBio={
          <p>
            With {EXPERT_PROFILE.yearsExperience} years of experience in
            skincare and clinical device testing,{" "}
            <strong className="text-slate-900">{EXPERT_PROFILE.name}</strong>{" "}
            audits the light energy delivery across popular consumer LED masks.
            Her laboratory measurements expose how brands conceal low diode
            counts, leaving massive gaps between light points that deliver zero
            therapeutic photon energy to the skin.
          </p>
        }
      />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Opening Statement */}
        <div className="prose prose-lg prose-slate max-w-4xl mx-auto mb-16">
          <p>
            In the world of light therapy, more light points equals better, more
            consistent cellular rejuvenation. Yet when you shop for an LED face
            mask in the UK, one critical specification is routinely buried in the
            fine print: <strong>the exact number of LED diodes.</strong>
          </p>
          <p>
            Many luxury brands charging £350 to £500 equip their masks with fewer
            than 100 LEDs. When spread across an adult face, these diodes sit
            inches apart from each other, creating vast{" "}
            <strong>"dead zones"</strong> where zero photons reach your skin
            cells.
          </p>
          <p>
            Below, we investigate the engineering reality of LED density and show
            why high-density diode arrays like Buudy's 192 LEDs deliver real,
            measurable clinical results across every millimetre of your face.
          </p>
        </div>

        {/* Danger Cards */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-serif">
            4 Ways Low LED Density Ruins Your Results
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
                          Issue #{idx + 1}: {danger.title}
                        </h3>
                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide w-fit ${
                            danger.severity === "High Risk"
                              ? "bg-red-100 text-red-700 border border-red-200"
                              : "bg-orange-100 text-orange-700 border border-orange-200"
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
            Low-Density Masks vs. Buudy High-Density Array
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            Technical comparison of diode count, photon distribution, and pricing.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 px-4 font-bold text-slate-900">Feature</th>
                  <th className="py-4 px-4 font-bold text-red-600 bg-red-50/50 rounded-tl-xl">
                    Generic Low-Density Mask
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
            What Bioengineers Are Saying
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
              High-Density Clinical Output
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 font-serif">
              Our Top Pick: 192 High-Density LEDs
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
              Buudy's close-diode matrix guarantees seamless edge-to-edge photonic
              delivery with zero dead zones.
            </p>
          </div>

          <div className="relative bg-white rounded-3xl shadow-sm border border-emerald-500 ring-4 ring-emerald-50 p-6 md:p-10 pt-10 md:pt-10">
            <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm tracking-wide uppercase flex items-center gap-1.5 md:gap-2 shadow-lg z-10 whitespace-nowrap">
              <Award size={16} className="md:w-[18px] md:h-[18px]" />
              #1 Editor's Choice - Maximum LED Density
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
                        alt="Buudy 192 LED High Density Mask"
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
                    The Buudy 7 Colour LED Mask is engineered with 192
                    high-density medical LEDs placed in close proximity. This
                    ensures uniform photon distribution across every facial curve
                    and throughout the integrated neck panel, preventing the
                    patchy, uneven collagen production seen in sparse masks.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Equipped with 7 therapeutic colours, tap technology, and Health
                    Canada Approval, it provides premium clinical power for only
                    £179 during the Black Friday Sale with a{" "}
                    <strong>90-day money-back guarantee</strong>.
                  </p>
                </div>

                {/* Performance Metrics */}
                <div className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-100 mb-8">
                  <h4 className="font-bold text-slate-900 mb-6 text-lg">
                    Density & Output Metrics
                  </h4>
                  <div className="space-y-3">
                    <MetricBar label="Diode Density (192 LEDs)" value={99} />
                    <MetricBar label="Even Light Distribution" value={98} />
                    <MetricBar label="Irradiance Power Output" value={97} />
                    <MetricBar label="Full Face & Neck Coverage" value={99} />
                    <MetricBar label="Price per LED Diode" value={100} />
                  </div>
                </div>

                {/* Pros */}
                <div className="bg-emerald-50/50 rounded-2xl px-3 py-5 md:p-6 border border-emerald-100 mb-8">
                  <h4 className="bg-emerald-500 text-white font-bold text-center text-2xl py-3 px-3 md:px-6 -mt-5 -mx-3 md:-mt-6 md:-mx-6 mb-5 md:mb-6 rounded-t-2xl">
                    Buudy Density Advantages
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "192 High-Density Diodes: Packed closely together to eliminate gaps and dead zones.",
                      "Uniform Cellular Stimulation: Every pore receives consistent, medical-grade photon energy.",
                      "Integrated Neck Coverage: Treats neck and jawline with the same high-density power.",
                      "7 Clinical Colours: From deep 830nm NIR to acne-clearing 415nm Blue.",
                      "60% Off Black Friday Discount: £179 with £128 in included free gifts.",
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
                            {bold.includes("7 Clinical Colours") && (
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
      </main>

      <MaskFooter />

      {/* Sticky Mobile CTA */}
      <StickyMobileCta />
    </div>
  );
}
