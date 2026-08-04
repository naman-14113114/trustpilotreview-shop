"use client";
import React, { useState, useRef } from 'react';
import FaqAccordion from './FaqAccordion';
import QualityReviewerCard from './QualityReviewerCard';
import { qualityReviewerProducts } from '../../data/qualityReviewerHairDryers';
import { CheckCircle2, Play } from "lucide-react";
import { MarketFlag } from "@/components/MarketFlag";
import { useMarketUpdatedDate } from "@/lib/useMarketUpdatedDate";
import { getAdvertorialMarket } from "@/lib/advertorialMarkets";

export default function QualityReviewerAdvertorial() {
  const market = getAdvertorialMarket("uk");
  const updatedDate = useMarketUpdatedDate(market, "4 August 2026");
  
  const [isVerdictVideoPlaying, setIsVerdictVideoPlaying] = useState(false);
  const verdictVideoRef = useRef<HTMLVideoElement | null>(null);

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
      const num = parseFloat(s.split('/')[0]);
      return isNaN(num) ? 0 : num * 10;
    };
    return {
      rank: p.id,
      name: p.name,
      brand: p.brand || '',
      brandUrl: '#',
      imageUrl: p.image_path,
      votes: '865',
      score: p.rating_overall,
      percentage: parsePercentage(p.rating_overall),
      grade: p.total_grade,
      price: p.price.replace('GBP', '').trim().startsWith('£') ? p.price : `£${p.price.replace(' GBP', '').trim()}`,
      originalPrice: p.original_price ? (p.original_price.replace('GBP', '').trim().startsWith('£') ? p.original_price : `£${p.original_price.replace(' GBP', '').trim()}`) : undefined,
      bars: [
        { label: 'DRYING TIME', score: p.sub_scores.drying_time, percentage: parsePercentage(p.sub_scores.drying_time) },
        { label: 'HEAT & SPEED SETTINGS', score: p.sub_scores.heat_speed_settings, percentage: parsePercentage(p.sub_scores.heat_speed_settings) },
        { label: 'TEMPERATURE CONTROL', score: p.sub_scores.temperature_control, percentage: parsePercentage(p.sub_scores.temperature_control) },
        { label: 'NOISE LEVEL', score: p.sub_scores.noise_level, percentage: parsePercentage(p.sub_scores.noise_level) },
        { label: 'VALUE FOR MONEY', score: p.sub_scores.value_for_money, percentage: parsePercentage(p.sub_scores.value_for_money) },
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
      learnMoreUrl: '#',
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
            Last updated –{" "}
            <span suppressHydrationWarning>{updatedDate}</span>
          </div>
        </div>
      </div>

      <main className="max-w-[950px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Author Block */}
        <div className="bg-white p-6 md:p-8 rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.1)] max-w-5xl mx-auto border border-slate-100 text-slate-800 mb-12 relative z-10 font-sans">
          <div className="flex flex-col md:block items-center text-center md:text-left w-full">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
              <img
                src="/img/hair/styler_image.webp"
                alt="Amara Wright"
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
                <strong className="text-slate-900">Amara Wright</strong>{" "}
                is a professional hairdresser with hands-on 12 years of experience in
                styling a wide range of hair types. For this guide, she
                researched and compared the shortlisted hair dryers based on
                airflow, heat control, drying speed, attachments, ease of
                use, price, warranty and returns. Her recommendation focuses
                on what matters most for everyday styling: faster drying,
                less heat exposure, smoother results and good overall value.
              </p>
            </div>

            <hr className="border-slate-200 w-full mb-4" />

            <div className="text-xs italic text-slate-600 md:text-right md:text-sm">
              * Recommended by over 1,000 UK buyers hair styling users.
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full overflow-hidden mb-12 relative rounded-3xl shadow-xl">
           <img src="/img/hair/muuhu-hair-dryer-banner.webp" alt="Muuhu Hair Dryer Banner" className="w-full h-auto object-cover" />
        </div>

        {/* Writer's Note */}
        <p className="italic underline mb-8 font-serif text-[18px] text-[#4B4F58]">
          Editor's note: Should you be hunting for a budget-friendly alternative that requires upwards of 45 minutes to scorch your hair whilst leaving you fighting daily frizz, this guide will not be for you.
        </p>

        {/* Body Text */}
        <div className="space-y-6 text-[18px] leading-[1.375] mb-12">
          <p>
            If there is a singular truth I have gathered over two decades of styling women's hair to look magnificent, it is that our chosen tools can absolutely make or break our tresses.
          </p>
          <p>
            Naturally, selecting the proper hair dryer is no different.
          </p>
          <p>
            When you purchase inferior blow dryers (which inevitably tend to be the cheaper choices), you should anticipate heat damage, a constant struggle with static, and dedicating over half an hour to drying.
          </p>
          <p>
            The majority of individuals are quite astounded to learn that spending on a premium hair dryer enables them to achieve incredible, salon-standard blowouts daily in under 15 minutes, entirely free from heat-induced harm!
          </p>
          <p>
            Whenever I advise a client to invest in a superior hair dryer, I frequently hear the question:
          </p>
          <p>
            "Is it genuinely worth the expense?"
          </p>
          <p>
            Truthfully, if my primary goal were solely to line my own pockets, I would never even raise the subject.
          </p>
          <p>
            Each time a client returns to my chair for another keratin treatment due to frizz or heat damage, it ultimately results in more profit for my business.
          </p>
        </div>

        {/* Green Box: Criteria */}
        <div className="border-2 border-[#83D221] p-[30px] md:p-[50px] mb-12 bg-white shadow-[0_0_5px_rgba(0,0,0,0.5)]">
          <h2 className="font-[family-name:var(--font-oswald)] text-[32px] md:text-[36px] font-bold text-[#3A3A3A] mb-8">
            We've Rated The Hair Dryers On 8 Criteria:
          </h2>
          <ul className="flex flex-col gap-6">
            {['Drying Time', 'Results (How The Hair Looked After)', 'Amount Of Heat/Speed Settings', 'Weight', 'Noise Level', 'Size And Compactness', 'Durability', 'Value For Money'].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 md:gap-5 text-[22px] md:text-[26px] font-bold text-[#3A3A3A] font-[family-name:var(--font-oswald)] tracking-wide">
                <svg className="shrink-0 mt-1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3A3A3A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Green Box: 7 Reasons */}
        <div className="border-2 border-[#83D221] p-[30px] md:p-[50px] mb-12 bg-white shadow-[0_0_5px_rgba(0,0,0,0.5)]">
           <h2 className="font-[family-name:var(--font-oswald)] text-[32px] font-bold text-[#3A3A3A] mb-6">7 Reasons To Get A Hollow Inlet Hair Dryer</h2>
           <div className="flex flex-col gap-2">
             <FaqAccordion type="look" title="Shields Your Tresses From Heat Damage" content="Owing to the hollow architecture, manufacturers can now embed a microcomputer to continually assess the temperature of the expelled airflow. Should the breeze become excessively hot, the microcomputer instinctively regulates the heat downwards, entirely preventing damage to your locks." />
             <FaqAccordion type="look" title="Salon-Standard Blowouts In Half Your Usual Drying Time" content="Thanks to innovative airflow multiplication technology, hollow hair dryers generate up to 15 times the wind velocity of conventional models, ultimately bringing the drying process down to a mere 9 minutes for a full head of hair!" />
             <FaqAccordion type="look" title="Eradicate Frizz Entirely With Enhanced Negative Ions" content="By pairing a forceful breeze with sophisticated anion technology, you will notice the advantages of negative ions as never before. Frizz becomes a thing of the past, whilst a consistently sleek and lustrous shine is guaranteed after every blow-dry." />
             <FaqAccordion type="look" title="A Lightweight Build Spares You From Aching Arms" content="Since the air intake is positioned at the base, the entire dryer feels considerably lighter and far simpler to manoeuvre. This means an end to fatigued arms, whilst also making the device exceptionally convenient to pack for your travels." />
             <FaqAccordion type="look" title="Reduced Noise Levels Won't Disturb Your Household" content="As a rule, hollow inlet models operate at a much lower volume compared to standard hair dryers. This occurs because the internal motor of a hollow air dryer must inherently be brushless, meaning there are fewer loose components rattling around to generate excessive noise." />
             <FaqAccordion type="look" title="Suitable For Every Single Hair Type" content="Given that hollow dryers produce such immense airflow power, they feature a broader spectrum of speed options. Furthermore, the integrated microcomputer allows brands to easily provide highly precise heat adjustments. This precision is essential for achieving a tailored blowout that suits your specific hair type and leaves it looking flawless." />
             <FaqAccordion type="look" title="Keeps More Money In Your Wallet" content="If you were to tally up your expenditure on keratin treatments and professional blow-dries over recent years, the total would likely far exceed the premium cost of a hollow air dryer. If you can manage the initial investment, you are assured of saving both your hard-earned cash and your hair's health! (Not forgetting that the hours previously wasted on endless drying are incredibly valuable, too!)" />
           </div>
        </div>

        {/* Green Box: What to Look For */}
        <div className="border-2 border-[#83D221] p-[30px] md:p-[50px] mb-12 bg-white shadow-[0_0_5px_rgba(0,0,0,0.5)]">
           <h2 className="font-[family-name:var(--font-oswald)] text-[32px] font-bold text-[#3A3A3A] mb-6">What To Look For</h2>
           <div className="flex flex-col gap-2">
             <FaqAccordion type="look" title="High Airflow (M/S) Rather Than Wattage" content="Traditionally, a hair dryer's strength was gauged by its wattage consumption. Whilst logical historically, modern motors can now generate significantly more force than older models sharing the identical wattage. Consequently, the most reliable metric to observe is the airflow velocity in metres per second (m/s). Our findings indicate that devices delivering at least 50 m/s can slash the average consumer's drying routine by a full 50%!" />
             <FaqAccordion type="look" title="Smart Temperature Regulation" content="Should you desire complete safeguarding against heat damage whilst drying, it is imperative to seek out a model equipped with active temperature monitoring. Typically, this is an advantage exclusive to hollow air devices, given that integrating such sensors into the layout of a conventional dryer is remarkably difficult." />
             <FaqAccordion type="look" title="Negative Ion Technology To Tackle Frizz" content="You have undoubtedly come across frizz-fighting buzzwords like tourmaline, ceramic, and negative ions. Based on our extensive trials, negative ions remain unparalleled for subduing unruly frizz and leaving you with sleek, glossy tresses. Moreover, when paired with an intense airflow (m/s), you can be virtually certain that frizzy strands will be banished for good." />
             <FaqAccordion type="look" title="Delayed Cooling Shutdown System" content="Many traditional hair dryer motors are constructed in a manner that causes rapid degradation with frequent usage. Specifically, when a motor transitions from intense heat to cold in a brief timeframe, it deteriorates much faster. Certain contemporary models employ a phased shutdown mechanism that gradually cools the heating element after being switched off, ensuring minimal wear and tear on the internal components." />
           </div>
        </div>

        {/* Red Box: What to Avoid */}
        <div className="border-2 border-[#dc143c] p-[30px] md:p-[50px] mb-12 bg-white shadow-[0_0_5px_rgba(0,0,0,0.5)]">
           <h2 className="font-[family-name:var(--font-oswald)] text-[32px] font-bold text-[#3A3A3A] mb-6">What To Avoid</h2>
           <div className="flex flex-col gap-2">
             <FaqAccordion type="avoid" title="Limited Heat And Speed Options" content="A common fallacy amongst shoppers regarding wattage is the belief that a specific wattage bracket corresponds to each hair type. Provided you own a sufficiently powerful dryer equipped with ample settings, this simply is not true. Having access to a vast array of speed and temperature combinations ensures you can pinpoint the exact airflow required to make your hair look absolutely magnificent." />
             <FaqAccordion type="avoid" title="Bulky And Cumbersome Designs" content="How frequently have you felt as though you have completed a rigorous upper body workout just from drying your hair? The majority of conventional dryers remain quite heavy and rather awkward to hold. Fortunately, many recent models spare you this discomfort by utilising lightweight materials and cleverly distributing the bulk down into the handle grip, rather than leaving it top-heavy." />
             <FaqAccordion type="avoid" title="An Absence Of Styling Attachments" content="If your goal is a versatile hair dryer that allows you to execute any look with absolute precision, you must check for the included accessory nozzles. A diffuser alongside a sleek concentrator nozzle ought to be the bare minimum to guarantee you can sculpt your hair precisely to your liking." />
             <FaqAccordion type="avoid" title="Excessively Loud Motors" content="Have you ever felt as though you were standing on an airport runway whilst blow-drying your hair? Truthfully, that comparison is not too much of an exaggeration. Most dryers manufactured prior to 2016 produce noise levels hovering between 90 and 110 decibels, which rivals the roar of an aeroplane taking flight. Thanks to recent leaps in motor technology, modern alternatives are virtually half as noisy, allowing you to dry your hair early in the morning without rousing the entire household!" />
           </div>
        </div>

        {/* Blue Banner */}
        <div className="bg-[#008BFF] w-full py-6 mb-12 text-center">
          <h2 className="font-[family-name:var(--font-oswald)] text-[32px] font-bold text-[#FFFFFF] uppercase tracking-wider m-0 leading-none">
            THE 5 BEST HAIR DRYERS IN 2026
          </h2>
        </div>

        {/* Subtitle text paragraph */}
        <p className="text-[18px] leading-[1.375] mb-12 text-[#4B4F58]">
          Over the past few years, we have rigorously tested 48 distinct hair dryers. The following 5 models represent the absolute finest on the market, chosen based upon our expert evaluations combined with genuine consumer feedback:
        </p>

        {/* Product List */}
        <div className="space-y-20">
           {products.map((product: any, idx: number) => (
              <QualityReviewerCard key={idx} product={product} />
           ))}
        </div>

        {/* Video Section from previous page */}
        <div className="mt-16 mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#8b1528] mb-6 md:mb-10 font-serif tracking-wide">
            {market.key === "ca" ? "Editor's Pick" : "Editor's Verdict"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center bg-white p-6 md:p-8 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-gray-100">
            {/* Left Video Area */}
            <div className="relative">
              <div className="relative mx-auto max-w-[190px] min-[380px]:max-w-[210px] sm:max-w-[240px] md:max-w-[300px] overflow-hidden rounded-[1.35rem] md:rounded-[1.75rem] border border-[#dfd1bd] bg-black shadow-xl">
                <video
                  ref={verdictVideoRef}
                  className="block w-full"
                  controls
                  playsInline
                  preload="metadata"
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
              <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4 font-serif tracking-tight text-center">
                <b>Muuhu AirPro</b>
              </h3>

              <div className="w-28 md:w-32 h-[1px] bg-[#d4af37] mx-auto mb-5 md:mb-6"></div>

              <div className="text-2xl md:text-3xl font-bold text-[#8b1528] mb-5 md:mb-8 font-sans text-center">
                {market.key === "ca" ? "Current Price" : "Now at 50% off"}
              </div>

              {/* Editorial rating badge */}
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-3 md:p-4 mx-auto mb-6 md:mb-8 inline-block shadow-sm">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="font-bold text-base md:text-lg text-black font-sans">
                    Editor&apos;s top pick
                  </span>
                </div>
                <div className="text-sm text-gray-600 flex items-center justify-center gap-1 font-sans">
                  Editorial rating 4.9 / 5
                </div>
              </div>

              <a
                href={market.muuhuUrl ?? "#"}
                aria-label="Check Availability"
                className="mx-auto w-full max-w-[240px] bg-[#393BE7] hover:bg-[#2022d4] text-white text-lg font-bold font-sans tracking-wide py-4 px-6 rounded shadow-[0_4px_10px_rgba(57,59,231,0.4)] transition-all flex items-center justify-center text-center uppercase"
              >
                CHECK AVAILABILITY
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
