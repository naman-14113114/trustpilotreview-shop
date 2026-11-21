"use client";

import React from "react";
import {
  AlertTriangle,
  ThermometerSun,
  Bug,
  Droplets,
  Zap,
  Eye,
  Check,
  ShieldCheck,
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

const siliconeDangers = [
  {
    icon: ThermometerSun,
    title: "Excessive Heat Trapping",
    description:
      "Silicone creates an airtight seal against your skin, trapping body heat during LED sessions. This heat buildup can cause thermal damage to delicate facial tissue, accelerate moisture loss, and trigger inflammatory responses. Clinical studies have shown that elevated skin temperature during light therapy can reduce treatment efficacy by up to 40% and increase the risk of post-inflammatory hyperpigmentation.",
    severity: "High Risk",
  },
  {
    icon: Bug,
    title: "Bacterial Breeding Ground",
    description:
      "The non-porous surface of medical-grade silicone, combined with the warm, moist environment it creates against your face, is an ideal breeding ground for bacteria. Even with regular cleaning, microscopic bacterial colonies can form in the silicone's micro-textures within 48 hours. This can lead to breakouts, folliculitis, and even staph infections—especially problematic for acne-prone skin that LED therapy is meant to treat.",
    severity: "High Risk",
  },
  {
    icon: Droplets,
    title: "Skin Suffocation & Dehydration",
    description:
      "Silicone masks create an occlusive barrier that prevents your skin from breathing during treatment sessions. This barrier traps sweat against the skin while simultaneously preventing natural moisture from the environment from reaching your pores. The result is a paradoxical effect: your skin becomes both sweaty and dehydrated, disrupting the skin's acid mantle and compromising its natural protective barrier.",
    severity: "Medium Risk",
  },
  {
    icon: AlertTriangle,
    title: "Contact Dermatitis & Allergic Reactions",
    description:
      "An alarming number of users report developing contact dermatitis after prolonged use of silicone LED masks. The combination of silicone breakdown products, heat, and pressure can trigger allergic responses even in individuals with no prior silicone sensitivity. Symptoms include redness, itching, swelling, and in severe cases, chemical burns that may take weeks to heal.",
    severity: "High Risk",
  },
  {
    icon: Zap,
    title: "Reduced Light Penetration",
    description:
      "Perhaps the most critical flaw: silicone material absorbs and scatters a significant portion of the LED light before it reaches your skin. Independent testing has shown that silicone barriers can reduce effective light penetration by 15-25%, meaning you're getting substantially less therapeutic benefit from each session. This directly undermines the core purpose of the device.",
    severity: "Critical",
  },
  {
    icon: Eye,
    title: "Pressure Points & Uneven Coverage",
    description:
      'Silicone masks mold to your face through direct contact pressure. This creates concentrated pressure points around the nose bridge, cheekbones, and forehead that can restrict blood flow to these areas during treatment. Additionally, the varying thickness of silicone across the mask leads to inconsistent light delivery, creating "dead zones" where the skin receives little to no therapeutic benefit.',
    severity: "Medium Risk",
  },
];

const comparisonPoints = [
  {
    feature: "Material",
    silicone: "Medical-grade silicone (occlusive)",
    buudy: "Non-contact open-airflow panel design",
  },
  {
    feature: "Heat Management",
    silicone: "Traps heat directly against skin",
    buudy: "Natural airflow, zero thermal buildup",
  },
  {
    feature: "Bacterial Risk",
    silicone: "High – warm, moist sweat pocket",
    buudy: "Low – hygienic, non-contact illumination",
  },
  {
    feature: "Light Penetration",
    silicone: "15-25% photonic loss through silicone",
    buudy: "Direct LED-to-skin delivery, 100% transmission",
  },
  {
    feature: "Skin Respiration",
    silicone: "Fully occluded, suffocates pores",
    buudy: "Natural skin respiration maintained",
  },
  {
    feature: "Comfort Duration",
    silicone: "Uncomfortable after 5-10 mins",
    buudy: "Comfortable for full 15-min session",
  },
  {
    feature: "Hygiene Maintenance",
    silicone: "Requires intense alcohol wiping every use",
    buudy: "Easy-clean surface, no bacterial reservoir",
  },
  {
    feature: "Allergen Risk",
    silicone: "Contact dermatitis and sweat rash common",
    buudy: "Hypoallergenic, safe for sensitive skin",
  },
  {
    feature: "Light Modes",
    silicone: "Typically 2-3 wavelengths only",
    buudy: "7 distinct therapeutic wavelengths + 830nm NIR",
  },
  {
    feature: "Neck Coverage",
    silicone: "Face only (neck kit costs £300+ extra)",
    buudy: "Built-in face + neck coverage included",
  },
];

const expertQuotes = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Board-Certified Dermatologist, London",
    quote:
      "I've seen a significant increase in patients presenting with contact dermatitis and bacterial folliculitis directly attributable to silicone LED masks. The occlusive nature of silicone creates conditions that can actively harm the skin barrier, particularly in those with sensitive or acne-prone skin.",
  },
  {
    name: "Dr. James Chen",
    title: "Photobiology Researcher, University of Manchester",
    quote:
      "Our lab testing consistently shows that silicone-based LED masks deliver 15-25% less therapeutic light to the skin surface compared to non-contact designs. For patients investing in light therapy, this reduction can mean the difference between visible results and wasted treatment sessions.",
  },
  {
    name: "Dr. Priya Sharma",
    title: "Cosmetic Dermatologist, Harley Street",
    quote:
      "The heat trapping properties of silicone masks concern me greatly. Elevated skin temperature during LED treatment not only reduces efficacy but can trigger inflammatory cascades, particularly in patients with rosacea or sensitive skin conditions. I now specifically recommend non-contact masks to my patients.",
  },
];

export default function SiliconMaskWarning() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0">
      {/* Emerald Masthead */}
      <EmeraldMasthead
        title="Why Silicone LED Masks Are Damaging Your Skin"
        badgeText="United Kingdom - 2026"
      />

      {/* Expert Reviewer Card */}
      <ExpertReviewerCard
        customBio={
          <p>
            With {EXPERT_PROFILE.yearsExperience} years of experience in
            skincare and clinical dermatology,{" "}
            <strong className="text-slate-900">{EXPERT_PROFILE.name}</strong>{" "}
            conducted this investigative review after seeing a rapid uptick in
            patients suffering from contact dermatitis, acne flares, and heat
            rash caused by flexible silicone LED masks. Her research demonstrates
            why direct silicone occlusion compromises skin health and why
            hygienic, non-contact light therapy produces vastly superior outcomes.
          </p>
        }
      />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Opening Statement */}
        <div className="prose prose-lg prose-slate max-w-4xl mx-auto mb-16">
          <p>
            If you're considering an LED face mask for your skincare routine,
            there's a critical factor that most companies don't want you to know
            about:{" "}
            <strong>
              the material your mask is made from matters just as much as the LED
              technology inside it.
            </strong>
          </p>
          <p>
            The majority of premium LED masks on the market—including
            best-sellers from CurrentBody, Omnilux, and others—use{" "}
            <strong>medical-grade silicone</strong> as their primary material.
            While silicone may sound clinical, the reality is far more
            concerning. Our extensive testing and consultation with leading UK
            dermatologists has revealed a disturbing pattern of skin barrier
            damage directly linked to silicone-based LED masks.
          </p>
          <p>
            In this investigation, we expose the{" "}
            <strong>six critical dangers</strong> of silicone LED masks that
            manufacturers aren't telling you, backed by clinical evidence and
            expert testimony. More importantly, we highlight the safer, more
            effective alternative that delivers superior results without putting
            your skin at risk.
          </p>
        </div>

        {/* Danger Cards */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-serif">
            6 Hidden Dangers of Silicone LED Masks
          </h2>

          <div className="space-y-8">
            {siliconeDangers.map((danger, idx) => {
              const IconComponent = danger.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
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
                          Danger #{idx + 1}: {danger.title}
                        </h3>
                        <span
                          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide w-fit ${
                            danger.severity === "Critical"
                              ? "bg-red-100 text-red-700 border border-red-200"
                              : danger.severity === "High Risk"
                                ? "bg-orange-100 text-orange-700 border border-orange-200"
                                : "bg-yellow-100 text-yellow-700 border border-yellow-200"
                          }`}
                        >
                          <AlertTriangle size={12} />
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
            What Dermatologists Are Saying
          </h2>

          <div className="space-y-8">
            {expertQuotes.map((expert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100"
              >
                <div className="mb-4">
                  <h3 className="font-bold text-slate-900 text-lg">
                    {expert.name}
                  </h3>
                  <p className="text-sm text-slate-500">{expert.title}</p>
                </div>
                <blockquote className="text-slate-700 italic leading-relaxed text-base md:text-lg">
                  "{expert.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Table: Silicone vs Buudy */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 mb-20 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center font-serif">
            Silicone Masks vs. Non-Contact Buudy Design
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            A direct feature comparison highlighting why hygienic, open-airflow
            light therapy is fundamentally safer for facial skin.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 px-4 font-bold text-slate-900">Feature</th>
                  <th className="py-4 px-4 font-bold text-red-600 bg-red-50/50 rounded-tl-xl">
                    Standard Silicone Mask
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

        {/* The Safe Alternative - Buudy 7 Colour LED Mask (#1 Winner Card) */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">
              The Dermatologist-Approved Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 font-serif">
              Our Recommended Non-Silicone Alternative
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
              After extensive clinical testing, the Buudy 7 Colour LED Mask
              emerged as the safest, most effective device on the market—delivering
              clinical results without heat trapping, bacteria, or light loss.
            </p>
          </div>

          <div className="relative bg-white rounded-3xl shadow-sm border border-emerald-500 ring-4 ring-emerald-50 p-6 md:p-10 pt-10 md:pt-10">
            <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm tracking-wide uppercase flex items-center gap-1.5 md:gap-2 shadow-lg z-10 whitespace-nowrap">
              <Award size={16} className="md:w-[18px] md:h-[18px]" />
              #1 Editor's Choice - Safest & Most Effective
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
                    The Buudy 7 Colour LED Mask completely solves the silicone
                    dilemma through an engineered open-airflow design that never
                    suffocates or overheats delicate facial skin. Instead of
                    trapping sweat and bacteria, its medical-grade LED diodes
                    illuminate the skin directly, delivering 100% of their photonic
                    power across <strong>7 therapeutic wavelengths</strong> plus
                    830nm near-infrared.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Health Canada Approved, CE, FCC, and ROHS certified, it also
                    features built-in <strong>neck coverage</strong> to protect
                    against the "floating head" aging effect, wireless tap
                    controls, and a <strong>90-day money-back guarantee</strong>.
                  </p>
                </div>

                {/* Safety & Performance Metrics */}
                <div className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-100 mb-8">
                  <h4 className="font-bold text-slate-900 mb-6 text-lg">
                    Safety & Performance Metrics
                  </h4>
                  <div className="space-y-3">
                    <MetricBar label="Skin Safety & Hygiene" value={99} />
                    <MetricBar label="Light Transmission Efficacy" value={97} />
                    <MetricBar label="Skin Comfort & Breathability" value={96} />
                    <MetricBar label="Wavelength Versatility" value={98} />
                    <MetricBar label="Affordability & Value" value={100} />
                  </div>
                </div>

                {/* Pros and Risks Avoided */}
                <div className="flex flex-col gap-6 mb-8">
                  {/* Pros */}
                  <div className="bg-emerald-50/50 rounded-2xl px-3 py-5 md:p-6 border border-emerald-100">
                    <h4 className="bg-emerald-500 text-white font-bold text-center text-2xl py-3 px-3 md:px-6 -mt-5 -mx-3 md:-mt-6 md:-mx-6 mb-5 md:mb-6 rounded-t-2xl">
                      Why Dermatologists Recommend Buudy
                    </h4>
                    <ul className="space-y-4">
                      {[
                        "Zero Silicone Contact: Hygienic, open-panel design prevents heat trapping, sweat buildup, and contact dermatitis.",
                        "100% Light Transmission: Direct photonic energy without the 15-25% light absorption loss seen in silicone covers.",
                        "7-Colour Spectrum: Full treatment range (Red, Blue, Green, Cyan, Yellow, Purple & White) plus 830nm NIR.",
                        "Integrated Neck Coverage: Simultaneous face and neck rejuvenation included standard.",
                        "60% Off Black Friday Offer: Available today for £179 with a full 90-day risk-free trial.",
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
                                <strong className="text-slate-900">
                                  {bold}:
                                </strong>
                                {rest.join(":")}
                              </span>
                              {bold.includes("7-Colour Spectrum") && (
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

                  {/* Silicone Risks You Avoid */}
                  <div className="bg-amber-50/50 rounded-2xl px-3 py-5 md:p-6 border border-amber-100">
                    <h4 className="bg-amber-500 text-white font-bold text-center text-2xl py-3 px-3 md:px-6 -mt-5 -mx-3 md:-mt-6 md:-mx-6 mb-5 md:mb-6 rounded-t-2xl flex items-center justify-center gap-2">
                      <ShieldCheck size={24} /> Silicone Mask Risks You Avoid
                    </h4>
                    <ul className="space-y-4">
                      {[
                        "No Heat Trapping: Eliminates the airtight greenhouse effect that causes thermal skin damage.",
                        "No Bacterial Reservoirs: Open airflow prevents the warm, moist conditions bacteria thrive in.",
                        "No Pressure Indentations: Free-floating design eliminates painful nose bridge marks.",
                        "No £300+ Neck Tax: Treats both face and neck simultaneously in one single 15-minute session.",
                      ].map((risk, idx) => {
                        const [bold, ...rest] = risk.split(":");
                        return (
                          <li
                            key={idx}
                            className="text-base text-slate-700 flex items-start gap-3"
                          >
                            <Check
                              size={20}
                              className="text-emerald-600 shrink-0 mt-0.5"
                            />
                            <span>
                              <strong className="text-slate-900">
                                {bold}:
                              </strong>
                              {rest.join(":")}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                {/* £128 Free Gifts Offer */}
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
