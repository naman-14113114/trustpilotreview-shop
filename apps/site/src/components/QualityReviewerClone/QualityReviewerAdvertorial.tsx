"use client";
import React, { useState, useRef } from "react";
import FaqAccordion from "./FaqAccordion";
import QualityReviewerCard from "./QualityReviewerCard";
import { qualityReviewerProducts } from "../../data/qualityReviewerHairDryers";
import { CheckCircle2, Play } from "lucide-react";
import { GreenStarRating, GreenStarIcon } from "@/components/GreenStarRating";
import { MarketFlag } from "@/components/MarketFlag";
import { useMarketUpdatedDate } from "@/lib/useMarketUpdatedDate";
import { getAdvertorialMarket } from "@/lib/advertorialMarkets";

type QualityReviewerAdvertorialProps = {
  heroImageSrc?: string;
  heroImageAlt?: string;
  constrainHeroImage?: boolean;
  showMuuhuAttachments?: boolean;
};

export default function QualityReviewerAdvertorial({
  heroImageSrc = "/img/hair/muuhu-hair-dryer-banner.webp",
  heroImageAlt = "Muuhu Hair Dryer Banner",
  constrainHeroImage = false,
  showMuuhuAttachments = false,
}: QualityReviewerAdvertorialProps) {
  const market = getAdvertorialMarket("uk");
  const updatedDate = useMarketUpdatedDate(market, "4 August 2026");

  const [isVerdictVideoPlaying, setIsVerdictVideoPlaying] = useState(false);
  const verdictVideoRef = useRef<HTMLVideoElement | null>(null);

  const [openReason, setOpenReason] = useState<number>(0);
  const [openLook, setOpenLook] = useState<number>(0);
  const [openAvoid, setOpenAvoid] = useState<number>(0);

  const playVerdictVideo = () => {
    const video = verdictVideoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsVerdictVideoPlaying(true);
    } else {
      video.pause();
      setIsVerdictVideoPlaying(false);
    }
  };

  // Map the data to the shape expected by QualityReviewerCard
  const products = qualityReviewerProducts.map((p) => {
    const parsePercentage = (s: string) => {
      const num = parseFloat(s.split("/")[0]);
      return isNaN(num) ? 0 : num * 10;
    };
    return {
      rank: p.id,
      name: p.name,
      brand: p.brand || "",
      brandUrl: "https://uk.muuhu.com/products/muuhu-hair-dryer",
      imageUrl: p.image_path,
      votes: "865",
      score: p.rating_overall,
      percentage: parsePercentage(p.rating_overall),
      grade: p.total_grade,
      price: p.price.replace("GBP", "").trim().startsWith("£")
        ? p.price
        : `£${p.price.replace(" GBP", "").trim()}`,
      originalPrice: p.original_price
        ? p.original_price.replace("GBP", "").trim().startsWith("£")
          ? p.original_price
          : `£${p.original_price.replace(" GBP", "").trim()}`
        : undefined,
      bars: [
        {
          label: "DRYING TIME",
          score: p.sub_scores.drying_time,
          percentage: parsePercentage(p.sub_scores.drying_time),
        },
        {
          label: "HEAT & SPEED SETTINGS",
          score: p.sub_scores.heat_speed_settings,
          percentage: parsePercentage(p.sub_scores.heat_speed_settings),
        },
        {
          label: "TEMPERATURE CONTROL",
          score: p.sub_scores.temperature_control,
          percentage: parsePercentage(p.sub_scores.temperature_control),
        },
        {
          label: "NOISE LEVEL",
          score: p.sub_scores.noise_level,
          percentage: parsePercentage(p.sub_scores.noise_level),
        },
        {
          label: "VALUE FOR MONEY",
          score: p.sub_scores.value_for_money,
          percentage: parsePercentage(p.sub_scores.value_for_money),
        },
      ],
      pros: p.pros,
      cons: p.cons,
      review: (
        <>
          {p.review.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </>
      ),
      learnMoreUrl: "https://uk.muuhu.com/products/muuhu-hair-dryer",
    };
  });

  return (
    <div className="bg-[#ffffff] text-[#4B4F58] font-[family-name:var(--font-arimo)]">
      {/* Header / Hero */}
      <div className="bg-[#83D221] border-b border-[#73C211] pt-5 pb-6 px-4 md:pt-6 md:pb-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="mx-[-0.25rem] text-[clamp(1.3rem,6.6vw,2.5rem)] md:mx-0 md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 md:mb-6 font-serif text-center">
            <span className="block">Best Hair Dryer</span>
            <span className="mt-2 flex items-center justify-center gap-2 text-[0.72em] md:gap-3">
              <MarketFlag market={market.flagKey} />
              <span>{market.headingCountry} - 2026</span>
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2 md:gap-2.5 text-base md:text-lg font-bold text-white">
            <CheckCircle2 size={20} className="text-white shrink-0" />
            Last updated – <span suppressHydrationWarning>{updatedDate}</span>
          </div>
        </div>
      </div>

      <main className="max-w-[950px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Author Block */}
        <div className="bg-white p-6 md:p-8 rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.1)] max-w-5xl mx-auto border border-slate-100 text-slate-800 mb-12 relative z-10 font-sans">
          <div className="flex flex-col md:block items-center text-center md:text-left w-full">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
              <img
                src="/img/hair/amara-wright-hairdresser.webp"
                alt="Amara Wright - Professional Hairdresser"
                className="w-24 h-24 md:w-24 md:h-24 rounded-full object-cover mb-2 md:mb-0"
              />
              <div>
                <h3 className="font-bold text-xl md:text-2xl underline text-slate-900">
                  Amara Wright
                </h3>
                <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-semibold mt-1">
                  Professional Hairdresser
                </p>
              </div>
            </div>

            <div className="text-sm md:text-base text-slate-700 leading-relaxed mb-6">
              <p>
                <strong className="text-slate-900">Amara Wright</strong> is a
                professional hairdresser with hands-on 12 years of experience in
                styling a wide range of hair types. For this guide, she
                researched and compared the shortlisted hair dryers based on
                airflow, heat control, drying speed, attachments, ease of use,
                price, warranty and returns. Her recommendation focuses on what
                matters most for everyday styling: faster drying, less heat
                exposure, smoother results and good overall value.
              </p>
            </div>

            <hr className="border-slate-200 w-full mb-4" />

            <div className="text-xs italic text-slate-600 md:text-right md:text-sm">
              * Recommended by over 1,000 UK buyers hair styling users.
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div
          className={`w-full overflow-hidden mb-12 relative rounded-3xl shadow-xl ${
            constrainHeroImage ? "max-w-[760px] mx-auto" : ""
          }`}
        >
          <a
            href="https://uk.muuhu.com/products/muuhu-hair-dryer"
            className="block"
          >
            <img
              src={heroImageSrc}
              alt={heroImageAlt}
              className="w-full h-auto object-cover"
            />
          </a>
        </div>

        {/* Writer's Note */}
        <p className="italic underline mb-8 font-serif text-[18px] text-[#4B4F58]">
          Editor's note: Should you be hunting for a budget-friendly alternative
          that requires upwards of 45 minutes to scorch your hair whilst leaving
          you fighting daily frizz, this guide will not be for you.
        </p>

        {/* Body Text */}
        <div className="space-y-6 text-[18px] leading-[1.375] mb-12">
          <p>
            If there is a singular truth I have gathered over two decades of
            styling women's hair to look magnificent, it is that our chosen
            tools can absolutely make or break our tresses.
          </p>
          <p>Naturally, selecting the proper hair dryer is no different.</p>
          <p>
            <strong>
              When you purchase inferior blow dryers (which inevitably tend to
              be the cheaper choices), you should anticipate heat damage, a
              constant struggle with static, and dedicating over half an hour to
              drying.
            </strong>
          </p>
          <p>
            The majority of individuals are quite astounded to learn that
            spending on a premium hair dryer enables them to achieve incredible,
            salon-standard blowouts daily in under 15 minutes, entirely free
            from heat-induced harm!
          </p>
          <p>
            Whenever I advise a client to invest in a superior hair dryer, I
            frequently hear the question:
          </p>
          <p>
            <strong>"Is it genuinely worth the expense?"</strong>
          </p>
          <p>
            Truthfully, if my primary goal were solely to line my own pockets, I
            would never even raise the subject.
          </p>
          <p>
            Each time a client returns to my chair for another keratin treatment
            due to frizz or heat damage, it ultimately results in more profit
            for my business.
          </p>
        </div>

        {/* Click To See The Ranking First Button */}
        <div className="flex justify-center my-10">
          <a
            href="#ranking"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("ranking");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group inline-flex items-center justify-center bg-[#067766] hover:bg-[#008bff] transition-colors duration-300 rounded-full p-[3px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] text-decoration-none cursor-pointer"
          >
            <span className="border-2 border-white rounded-full px-6 py-2.5 sm:px-8 sm:py-3 flex items-center justify-center gap-3">
              <span className="font-[family-name:var(--font-oswald)] text-white text-[20px] sm:text-[24px] md:text-[28px] font-bold tracking-wide leading-none select-none">
                Click To See The Ranking First
              </span>
              <svg
                aria-hidden="true"
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white shrink-0"
                viewBox="0 0 320 512"
                fill="currentColor"
              >
                <path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z" />
              </svg>
            </span>
          </a>
        </div>

        {/* Green Box: Criteria */}
        <div className="border-2 border-[#83D221] p-[30px] md:p-[50px] mb-12 bg-white shadow-[0_0_5px_rgba(0,0,0,0.5)]">
          <h2 className="font-[family-name:var(--font-oswald)] text-[32px] md:text-[36px] font-bold text-[#3A3A3A] text-center mb-8">
            We've Rated The Hair Dryers On 8 Criteria:
          </h2>
          <ul className="flex flex-col gap-6">
            {[
              "Drying Time",
              "Results (How The Hair Looked After)",
              "Amount Of Heat/Speed Settings",
              "Weight",
              "Noise Level",
              "Size And Compactness",
              "Durability",
              "Value For Money",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-4 md:gap-5 text-[22px] md:text-[26px] font-bold text-[#3A3A3A] font-[family-name:var(--font-oswald)] tracking-wide"
              >
                <svg
                  className="shrink-0 mt-1"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3A3A3A"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Green Box: 7 Reasons */}
        <div className="border-2 border-[#83D221] p-[30px] md:p-[50px] mb-12 bg-white shadow-[0_0_5px_rgba(0,0,0,0.5)]">
          <h2 className="font-[family-name:var(--font-oswald)] text-[32px] font-bold text-[#3A3A3A] text-center mb-6">
            7 Reasons To Get A High-Speed Brushless Motor Hair Dryer
          </h2>
          <div className="flex flex-col gap-2">
            <FaqAccordion
              type="reason"
              title="Dries Your Hair In Half The Time Of A Standard Dryer"
              content="High-speed brushless motors spin at 80,000–110,000 RPM, generating immense concentrated airflow that cuts full-head drying time down to around 5–9 minutes. Traditional AC and DC motors top out at roughly 20,000 RPM, meaning your arm aches and your hair overheats long before you are even finished."
              isOpen={openReason === 0}
              onToggle={() => setOpenReason(openReason === 0 ? -1 : 0)}
            />
            <FaqAccordion
              type="reason"
              title="Protects Your Hair With Intelligent Heat Control"
              content="Because brushless motors are digitally controlled, manufacturers can embed a microprocessor that measures outlet temperature up to 40 times per second. If heat spikes, the system adjusts instantly — preventing the kind of sustained high-temperature damage that causes split ends, breakage and colour fade."
              isOpen={openReason === 1}
              onToggle={() => setOpenReason(openReason === 1 ? -1 : 1)}
            />
            <FaqAccordion
              type="reason"
              title="Eliminates Frizz With Negative Ion Technology"
              content="High-speed airflow paired with a negative-ion generator produces over 200 million negative ions per second, neutralising static electricity and sealing the hair cuticle shut. The result is smoother, shinier hair from every single blow-dry — without relying on serums or post-dry products."
              isOpen={openReason === 2}
              onToggle={() => setOpenReason(openReason === 2 ? -1 : 2)}
            />
            <FaqAccordion
              type="reason"
              title="Whisper-Quiet Operation Won't Disturb Your Household"
              content="Brushless motors have no carbon brushes grinding against a commutator — the main source of noise in traditional dryers. This engineering advantage means high-speed dryers operate at 59–65 dB, roughly the volume of a normal conversation, compared to 75–85 dB from older motors."
              isOpen={openReason === 3}
              onToggle={() => setOpenReason(openReason === 3 ? -1 : 3)}
            />
            <FaqAccordion
              type="reason"
              title="Ultra-Lightweight Design Means No More Aching Arms"
              content="Brushless motors are significantly smaller and lighter than traditional motors. This lets manufacturers redistribute weight and produce dryers under 500g — roughly the weight of a small water bottle. Longer styling sessions become comfortable rather than exhausting, and the compact form makes packing for travel effortless."
              isOpen={openReason === 4}
              onToggle={() => setOpenReason(openReason === 4 ? -1 : 4)}
            />
            <FaqAccordion
              type="reason"
              title="Built To Last 10x The Lifespan Of A Traditional Motor"
              content="Carbon brushes in conventional motors wear down with every use and typically fail within 1–3 years. Brushless motors eliminate this wear point entirely, routinely lasting 8–10+ years of daily use. That is thousands of blow-dries without motor degradation, and many brushless dryers now include extended warranties to back that confidence."
              isOpen={openReason === 5}
              onToggle={() => setOpenReason(openReason === 5 ? -1 : 5)}
            />
            <FaqAccordion
              type="reason"
              title="More Settings, More Precision - Suitable For Every Hair Type"
              content="Digital brushless motors allow manufacturers to offer far more granular speed and temperature combinations than traditional dryers. Whether your hair is fine and fragile, thick and curly, or colour-treated and heat-sensitive, a high-speed brushless dryer gives you the exact airflow and heat pairing your hair type needs."
              isOpen={openReason === 6}
              onToggle={() => setOpenReason(openReason === 6 ? -1 : 6)}
            />
          </div>
        </div>

        {/* Green Box: What to Look For */}
        <div className="border-2 border-[#83D221] p-[30px] md:p-[50px] mb-12 bg-white shadow-[0_0_5px_rgba(0,0,0,0.5)]">
          <h2 className="font-[family-name:var(--font-oswald)] text-[32px] font-bold text-[#2aa359] text-center mb-6">
            What To Look For
          </h2>
          <div className="flex flex-col gap-2">
            <FaqAccordion
              type="look"
              title="High Airflow (M/S) Rather Than Wattage"
              content="Traditionally, a hair dryer's strength was gauged by its wattage consumption. Whilst logical historically, modern motors can now generate significantly more force than older models sharing the identical wattage. Consequently, the most reliable metric to observe is the airflow velocity in metres per second (m/s). Our findings indicate that devices delivering at least 50 m/s can slash the average consumer's drying routine by a full 50%!"
              isOpen={openLook === 0}
              onToggle={() => setOpenLook(openLook === 0 ? -1 : 0)}
            />
            <FaqAccordion
              type="look"
              title="Smart Temperature Regulation"
              content="Should you desire complete safeguarding against heat damage whilst drying, it is imperative to seek out a model equipped with active temperature monitoring. Typically, this is an advantage exclusive to hollow air devices, given that integrating such sensors into the layout of a conventional dryer is remarkably difficult."
              isOpen={openLook === 1}
              onToggle={() => setOpenLook(openLook === 1 ? -1 : 1)}
            />
            <FaqAccordion
              type="look"
              title="Negative Ion Technology To Tackle Frizz"
              content="You have undoubtedly come across frizz-fighting buzzwords like tourmaline, ceramic, and negative ions. Based on our extensive trials, negative ions remain unparalleled for subduing unruly frizz and leaving you with sleek, glossy tresses. Moreover, when paired with an intense airflow (m/s), you can be virtually certain that frizzy strands will be banished for good."
              isOpen={openLook === 2}
              onToggle={() => setOpenLook(openLook === 2 ? -1 : 2)}
            />
            <FaqAccordion
              type="look"
              title="Delayed Cooling Shutdown System"
              content="Many traditional hair dryer motors are constructed in a manner that causes rapid degradation with frequent usage. Specifically, when a motor transitions from intense heat to cold in a brief timeframe, it deteriorates much faster. Certain contemporary models employ a phased shutdown mechanism that gradually cools the heating element after being switched off, ensuring minimal wear and tear on the internal components."
              isOpen={openLook === 3}
              onToggle={() => setOpenLook(openLook === 3 ? -1 : 3)}
            />
          </div>
        </div>

        {/* Red Box: What to Avoid */}
        <div className="border-2 border-[#ea1045] p-[30px] md:p-[50px] mb-12 bg-white shadow-[0_0_5px_rgba(0,0,0,0.5)]">
          <h2 className="font-[family-name:var(--font-oswald)] text-[32px] font-bold text-[#ea1045] text-center mb-6">
            What To Avoid
          </h2>
          <div className="flex flex-col gap-2">
            <FaqAccordion
              type="avoid"
              title="Limited Heat And Speed Options"
              content="A common fallacy amongst shoppers regarding wattage is the belief that a specific wattage bracket corresponds to each hair type. Provided you own a sufficiently powerful dryer equipped with ample settings, this simply is not true. Having access to a vast array of speed and temperature combinations ensures you can pinpoint the exact airflow required to make your hair look absolutely magnificent."
              isOpen={openAvoid === 0}
              onToggle={() => setOpenAvoid(openAvoid === 0 ? -1 : 0)}
            />
            <FaqAccordion
              type="avoid"
              title="Bulky And Cumbersome Designs"
              content="How frequently have you felt as though you have completed a rigorous upper body workout just from drying your hair? The majority of conventional dryers remain quite heavy and rather awkward to hold. Fortunately, many recent models spare you this discomfort by utilising lightweight materials and cleverly distributing the bulk down into the handle grip, rather than leaving it top-heavy."
              isOpen={openAvoid === 1}
              onToggle={() => setOpenAvoid(openAvoid === 1 ? -1 : 1)}
            />
            <FaqAccordion
              type="avoid"
              title="An Absence Of Styling Attachments"
              content="If your goal is a versatile hair dryer that allows you to execute any look with absolute precision, you must check for the included accessory nozzles. A diffuser alongside a sleek concentrator nozzle ought to be the bare minimum to guarantee you can sculpt your hair precisely to your liking."
              isOpen={openAvoid === 2}
              onToggle={() => setOpenAvoid(openAvoid === 2 ? -1 : 2)}
            />
            <FaqAccordion
              type="avoid"
              title="Excessively Loud Motors"
              content="Have you ever felt as though you were standing on an airport runway whilst blow-drying your hair? Truthfully, that comparison is not too much of an exaggeration. Most dryers manufactured prior to 2016 produce noise levels hovering between 90 and 110 decibels, which rivals the roar of an aeroplane taking flight. Thanks to recent leaps in motor technology, modern alternatives are virtually half as noisy, allowing you to dry your hair early in the morning without rousing the entire household!"
              isOpen={openAvoid === 3}
              onToggle={() => setOpenAvoid(openAvoid === 3 ? -1 : 3)}
            />
          </div>
        </div>

        {/* Blue Banner */}
        <div
          id="ranking"
          className="bg-[#008BFF] w-full py-6 mb-12 text-center scroll-mt-6"
        >
          <h2 className="font-[family-name:var(--font-oswald)] text-[32px] font-bold text-[#FFFFFF] uppercase tracking-wider m-0 leading-none">
            THE 5 BEST HAIR DRYERS IN 2026
          </h2>
        </div>

        {/* Subtitle text paragraph */}
        <p className="text-[18px] leading-[1.375] mb-12 text-[#4B4F58]">
          Over the past few years, we have rigorously tested 48 distinct hair
          dryers. The following 5 models represent the absolute finest on the
          market, chosen based upon our expert evaluations combined with genuine
          consumer feedback:
        </p>
      </main>

      {/* Grey Background Section for 5 Dryers and Video */}
      <div className="bg-[#f4f4f4] pt-10 pb-8 md:pt-14 md:pb-10">
        <div className="max-w-[950px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product List */}
          <div className="space-y-12 md:space-y-16">
            {products.map((product: any, idx: number) => (
              <QualityReviewerCard
                key={idx}
                product={product}
                showMuuhuAttachments={showMuuhuAttachments}
              />
            ))}
          </div>

          {/* Video Section from previous page */}
          <div className="mt-12 mb-2">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-[#8b1528] mb-6 md:mb-8 font-serif tracking-wide">
              {market.key === "ca" ? "Editor's Pick" : "Editor's Verdict"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center bg-white p-5 md:py-6 md:px-8 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-gray-100">
              {/* Left Video Area */}
              <div className="relative">
                <div className="relative mx-auto max-w-[190px] min-[380px]:max-w-[210px] sm:max-w-[240px] md:max-w-[300px] overflow-hidden rounded-[1.35rem] md:rounded-[1.75rem] border border-[#dfd1bd] bg-black shadow-xl">
                  <video
                    ref={verdictVideoRef}
                    className="block w-full"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/assets/hair-dryer-video-poster.webp"
                    aria-label="Muuhu AirPro product video"
                    onPlay={() => setIsVerdictVideoPlaying(true)}
                    onPause={() => setIsVerdictVideoPlaying(false)}
                    onEnded={() => setIsVerdictVideoPlaying(false)}
                  >
                    <source
                      src="/assets/hair-dryer-trustpilot-video.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <button
                    type="button"
                    aria-label="Play Muuhu AirPro product video"
                    onClick={playVerdictVideo}
                    className={`absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#136b3a] text-white shadow-[0_14px_34px_rgba(19,107,58,0.35)] ring-8 ring-white/60 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-[#d4af37]/70 ${
                      isVerdictVideoPlaying
                        ? "pointer-events-none scale-90 opacity-0"
                        : "scale-100 opacity-100"
                    }`}
                  >
                    <Play size={30} fill="currentColor" className="ml-1" />
                  </button>
                </div>
              </div>

              {/* Right Content Area */}
              <div className="flex flex-col justify-center text-center">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-black mb-2 md:mb-3 font-serif tracking-tight text-center">
                  <b>Muuhu AirPro</b>
                </h3>

                <div className="w-28 md:w-32 h-[1px] bg-[#d4af37] mx-auto mb-3 md:mb-4"></div>

                <div className="text-2xl md:text-3xl font-bold text-[#8b1528] mb-4 md:mb-5 font-sans text-center">
                  {market.key === "ca" ? "Current Price" : "Now at 50% off"}
                </div>

                {/* Editorial rating badge with Trustpilot styling */}
                <div className="border border-gray-200 bg-white/70 rounded-xl p-2.5 md:p-3 mx-auto mb-4 md:mb-5 inline-block shadow-sm">
                  <div className="flex items-center justify-center gap-2 mb-1.5">
                    <span className="font-bold text-base md:text-lg text-black font-sans">
                      Editor&apos;s top pick
                    </span>
                    <GreenStarRating rating={5} size={22} />
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 flex items-center justify-center gap-1 font-sans">
                    Editorial rating 4.9 / 5 <GreenStarIcon size={18} />
                  </div>
                </div>

                <a
                  href="https://uk.muuhu.com/products/muuhu-hair-dryer"
                  aria-label="Check Availability"
                  className="mx-auto w-auto bg-[#393BE7] hover:bg-[#2022d4] text-white text-base sm:text-lg font-bold font-sans tracking-wide py-3 px-8 sm:px-10 rounded shadow-[0_4px_10px_rgba(57,59,231,0.4)] transition-all flex items-center justify-center text-center uppercase whitespace-nowrap"
                >
                  CHECK AVAILABILITY
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Bottom Sticky CTA */}
      <div className="xl:hidden fixed bottom-4 sm:bottom-6 left-0 right-0 z-50 pointer-events-none px-4 sm:px-6">
        <div className="max-w-[950px] mx-auto w-full">
          <a
            href="https://uk.muuhu.com/products/muuhu-hair-dryer"
            aria-label="Take me to the winning hair dryer"
            className="pointer-events-auto block w-full text-center bg-[#067766] hover:bg-[#067766] text-white py-4 sm:py-4.5 px-4 rounded-[8px] font-extrabold text-[15px] sm:text-[18px] shadow-[0_8px_30px_rgba(0,0,0,0.3)] tracking-wider uppercase whitespace-nowrap relative overflow-hidden group active:scale-[0.99] transition-transform"
          >
            <span className="relative z-10 whitespace-nowrap">
              TAKE ME TO THE WINNING HAIR DRYER
            </span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />
          </a>
        </div>
      </div>

      {/* Desktop Sticky Box in Right Blank Space */}
      <div className="hidden xl:block fixed bottom-8 right-4 2xl:right-10 z-50 w-[190px] 2xl:w-[220px]">
        <div className="relative">
          {/* Top Overlapping Winner Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-[#067766] font-extrabold text-[12px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md z-30 whitespace-nowrap border border-[#067766]/20">
            <strong>#1</strong> WINNER
          </div>

          <a
            href="https://uk.muuhu.com/products/muuhu-hair-dryer"
            aria-label="Take me to the winning hair dryer"
            className="block bg-[#067766] hover:bg-[#055f52] text-white pt-6 pb-4 px-4 2xl:px-5 rounded-[8px] shadow-[0_10px_35px_rgba(0,0,0,0.35)] border-2 border-white/20 text-center transition-all hover:scale-[1.03] group relative overflow-hidden"
          >
            {/* Product Image (Large, No Inner Card/Border) */}
            <div className="w-28 h-28 2xl:w-32 2xl:h-32 mx-auto mb-2 flex items-center justify-center">
              <img
                src="/img/hair/muuhu-airpro-7-in-1-hair-dryer.webp"
                alt="Muuhu AirPro"
                className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Name */}
            <div className="font-[family-name:var(--font-oswald)] font-bold text-base 2xl:text-lg uppercase tracking-wide leading-tight mb-3">
              Muuhu AirPro
            </div>

            {/* Button (Compact, No Arrow) */}
            <div className="bg-white text-[#067766] font-extrabold text-xs 2xl:text-[13px] py-2 px-3 rounded-[6px] uppercase tracking-wider shadow group-hover:bg-gray-100 transition-colors">
              VISIT WINNING SITE
            </div>

            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          </a>
        </div>
      </div>
    </div>
  );
}
