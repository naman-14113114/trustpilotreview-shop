"use client";

import React from "react";
import {
  Palette,
  FlaskConical,
  ArrowDown,
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
    icon: Palette,
    title: "The 2-Colour Limitation Trap",
    description:
      "Multi-hundred-pound brands like Omnilux and CurrentBody force you to choose: buy their 'Anti-Aging' mask (Red light) OR their 'Acne' mask (Blue light). They intentionally restrict the spectrum to force customers into buying multiple expensive devices for different skin concerns.",
    severity: "High Risk",
  },
  {
    icon: FlaskConical,
    title: "Ignoring Active Breakouts",
    description:
      "If you buy a premium Red/NIR mask for wrinkles, but suddenly experience an active acne breakout, your £400 mask is completely useless. Without Blue Light (415nm), you cannot eliminate P. acnes bacteria. You're left with an expensive device that cannot address blemishes.",
    severity: "Critical Risk",
  },
  {
    icon: ArrowDown,
    title: "No Help For Redness & Rosacea",
    description:
      "Millions of users suffer from redness, broken capillaries, or sensitive skin flares. Red light alone is not optimal for this. Yellow light (590nm) is clinically proven to flush lymphatic toxins and calm facial redness, yet 90% of premium masks omit it to cut production costs.",
    severity: "Medium Risk",
  },
  {
    icon: XCircle,
    title: "Fading Dark Spots & Hyperpigmentation",
    description:
      "Sun damage, melasma, and age spots respond most effectively to Green light (525nm), which disperses concentrated melanin clusters. If you're using a standard 2-colour mask, you lack the primary wavelength needed to even out skin tone.",
    severity: "Medium Risk",
  },
];

const wavelengthBreakdown = [
  {
    color: "Red (630nm)",
    target: "Collagen & Deep Wrinkles",
    twoColor: "Included",
    buudy: "Included (Medical Grade)",
  },
  {
    color: "Near-Infrared (830nm)",
    target: "Deep Cellular Repair & Elasticity",
    twoColor: "Included",
    buudy: "Included (Deep Tissue)",
  },
  {
    color: "Blue (415nm)",
    target: "Acne Bacteria & Active Breakouts",
    twoColor: "Missing (Requires £350 extra device)",
    buudy: "Included",
  },
  {
    color: "Green (525nm)",
    target: "Dark Spots & Hyperpigmentation",
    twoColor: "Missing",
    buudy: "Included",
  },
  {
    color: "Yellow (590nm)",
    target: "Redness, Rosacea & Lymphatic Flow",
    twoColor: "Missing",
    buudy: "Included",
  },
  {
    color: "Cyan (490nm)",
    target: "Swollen Capillaries & Skin Soothing",
    twoColor: "Missing",
    buudy: "Included",
  },
  {
    color: "Purple (390nm)",
    target: "Cell Rejuvenation & Lymphatic Drainage",
    twoColor: "Missing",
    buudy: "Included",
  },
  {
    color: "White Spectrum",
    target: "Total Skin Firming & Accelerating Healing",
    twoColor: "Missing",
    buudy: "Included",
  },
];

const expertQuotes = [
  {
    name: "Dr. Sarah Jenkins",
    title: "Clinical Aesthetician, London",
    quote:
      "Our skin is dynamic. You might need collagen stimulation on Monday, but acne treatment on Friday if you're stressed. Locking a patient into a £500 device that only treats one single concern is an outdated, restrictive approach to skincare.",
  },
  {
    name: "Dr. Michael Thorne",
    title: "Laser & Light Therapy Specialist, Edinburgh",
    quote:
      "The LED chips used in these devices are capable of emitting multiple wavelengths. The fact that premium brands restrict their £350 masks to just 2 colors is a deliberate business decision to up-sell you later, not a scientific limitation.",
  },
];

export default function MissingColorsExpose() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0">
      {/* Emerald Masthead */}
      <EmeraldMasthead
        title="The 2-Colour Trap: Why Your £400 LED Mask Is Only Doing Half The Job"
        subtitle="Why single or dual-wavelength masks ignore acne, redness, and dark spots—and how full-spectrum therapy works."
        badgeText="United Kingdom - 2026"
        alertBadge="SPECIAL INVESTIGATION"
      />

      {/* Expert Reviewer Card */}
      <ExpertReviewerCard
        customBio={
          <p>
            With {EXPERT_PROFILE.yearsExperience} years of experience in
            skincare and clinical phototherapy,{" "}
            <strong className="text-slate-900">{EXPERT_PROFILE.name}</strong>{" "}
            investigates why so many £400+ masks limit users to red and NIR
            light only. Her clinical trials show that total skin health requires
            targeting multiple depth levels—using blue for acne, green for
            hyperpigmentation, and yellow for erythema alongside red for
            wrinkles.
          </p>
        }
      />

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Opening Statement */}
        <div className="prose prose-lg prose-slate max-w-4xl mx-auto mb-16">
          <p>
            When luxury beauty brands launched at-home LED masks, they built
            their marketing around one primary wavelength: Red light. While Red
            and Near-Infrared light are excellent for stimulating collagen, your
            skin is exposed to a wide variety of daily concerns—breakouts,
            hormonal acne, sun spots, redness, and dullness.
          </p>
          <p>
            If your £400 mask only emits red light, you are completely
            unprotected when a breakout occurs or when pigmentation clusters
            form. Many brands intentionally split these features into separate
            "Anti-Aging" and "Blemish" devices so they can charge you twice.
          </p>
          <p>
            Below, we expose the <strong>2-colour limitation trap</strong> and
            demonstrate why a comprehensive 7-wavelength system is essential for
            complete dermatological care.
          </p>
        </div>

        {/* Danger Cards */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-serif">
            4 Critical Limitations of 2-Colour Masks
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
                            danger.severity === "Critical Risk"
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

        {/* 7-Wavelength Breakdown Table */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 mb-20 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center font-serif">
            Wavelength Comparison: 2-Colour Masks vs. Buudy 7-Colour
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            See which skin concerns your mask actually treats based on proven
            nanometer wavelengths.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 px-4 font-bold text-slate-900">Wavelength</th>
                  <th className="py-4 px-4 font-bold text-slate-700">Clinical Target</th>
                  <th className="py-4 px-4 font-bold text-red-600 bg-red-50/50">
                    Standard 2-Colour Mask
                  </th>
                  <th className="py-4 px-4 font-bold text-emerald-600 bg-emerald-50/50">
                    Buudy 7 Colour LED Mask
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {wavelengthBreakdown.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900 text-sm md:text-base">
                      {row.color}
                    </td>
                    <td className="py-3 px-4 text-slate-600 text-sm md:text-base">
                      {row.target}
                    </td>
                    <td className="py-3 px-4 text-slate-600 bg-red-50/20 text-sm md:text-base">
                      {row.twoColor}
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
            What Photobiology Experts Say
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
              The Full-Spectrum Skincare Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 font-serif">
              Our Top Pick: Buudy 7 Colour LED Mask
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
              Get all 7 therapeutic wavelengths plus 830nm near-infrared in one
              device—eliminating the need to buy multiple expensive single-purpose
              masks.
            </p>
          </div>

          <div className="relative bg-white rounded-3xl shadow-sm border border-emerald-500 ring-4 ring-emerald-50 p-6 md:p-10 pt-10 md:pt-10">
            <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm tracking-wide uppercase flex items-center gap-1.5 md:gap-2 shadow-lg z-10 whitespace-nowrap">
              <Award size={16} className="md:w-[18px] md:h-[18px]" />
              #1 Editor's Choice - Full 7-Colour Spectrum
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
                    The Buudy 7 Colour LED Mask brings complete multi-spectrum
                    phototherapy into a single hands-free, cordless device. While
                    competitors limit you to red light and force you to buy an
                    extra mask for acne or tone, Buudy delivers targeted
                    wavelengths for wrinkles, breakouts, dark spots, redness, and
                    lymphatic circulation.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Featuring 192 high-output medical LEDs, integrated neck
                    treatment, and Health Canada approval, it provides unmatched
                    versatility at £179 during the Black Friday Sale with a{" "}
                    <strong>90-day money-back guarantee</strong>.
                  </p>
                </div>

                {/* Performance Metrics */}
                <div className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-100 mb-8">
                  <h4 className="font-bold text-slate-900 mb-6 text-lg">
                    Multi-Spectrum Performance Metrics
                  </h4>
                  <div className="space-y-3">
                    <MetricBar label="Wavelength Variety (7 Colours)" value={99} />
                    <MetricBar label="Acne Clearing Efficacy (415nm Blue)" value={97} />
                    <MetricBar label="Collagen Synthesis (630nm Red + 830nm NIR)" value={98} />
                    <MetricBar label="Redness Reduction (590nm Yellow)" value={95} />
                    <MetricBar label="Affordability (All Modes in 1)" value={100} />
                  </div>
                </div>

                {/* Pros */}
                <div className="bg-emerald-50/50 rounded-2xl px-3 py-5 md:p-6 border border-emerald-100 mb-8">
                  <h4 className="bg-emerald-500 text-white font-bold text-center text-2xl py-3 px-3 md:px-6 -mt-5 -mx-3 md:-mt-6 md:-mx-6 mb-5 md:mb-6 rounded-t-2xl">
                    7-Colour Treatment Advantages
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "All 7 Medical-Grade Colours: Red, Blue, Green, Cyan, Yellow, Purple & White plus 830nm NIR.",
                      "Treats Acne & Aging Together: Switch between collagen building and bacteria eliminating in seconds.",
                      "Fades Hyperpigmentation: Dedicated 525nm Green light clears age spots and uneven skin tone.",
                      "Integrated Neck Coverage: Full face and neck coverage without paying extra.",
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
                            {bold.includes("7 Medical-Grade") && (
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
