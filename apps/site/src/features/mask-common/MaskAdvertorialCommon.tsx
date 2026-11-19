"use client";

import React, { useState, useRef } from "react";
import {
  CheckCircle2,
  XCircle,
  Award,
  ChevronRight,
  ShieldCheck,
  Check,
  Play,
  AlertTriangle,
} from "lucide-react";
import { motion } from "motion/react";
import { GreenStarIcon, GreenStarRating } from "@/components/GreenStarRating";
import { MarketFlag } from "@/components/MarketFlag";
import { OutboundLoader } from "@/components/OutboundLoader";
import { EXPERT_PROFILE } from "@/lib/expertProfile";
export { EXPERT_PROFILE };
import { getAdvertorialMarket } from "@/lib/advertorialMarkets";
import { useMarketUpdatedDate } from "@/lib/useMarketUpdatedDate";

export const BUUDY_OFFICIAL_URL = "https://www.buudy.co.uk/products/buudy-led-face-mask";

export function preventPlaceholderNavigation(
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string
) {
  if (href === "#") {
    event.preventDefault();
  }
}

export type ColorDot = {
  name: string;
  bg: string;
  border?: boolean;
};

export const BUUDY_7_COLOR_DOTS: ColorDot[] = [
  { name: "Red (630nm)", bg: "#EF4444" },
  { name: "Blue (415nm)", bg: "#3B82F6" },
  { name: "Green (525nm)", bg: "#10B981" },
  { name: "Cyan (490nm)", bg: "#06B6D4" },
  { name: "Yellow (590nm)", bg: "#F59E0B" },
  { name: "Purple (390nm)", bg: "#A855F7" },
  { name: "White Spectrum", bg: "#FFFFFF", border: true },
  { name: "Near-Infrared (830nm)", bg: "#881337" },
];

export const RED_NIR_DOTS: ColorDot[] = [
  { name: "Red (633nm)", bg: "#EF4444" },
  { name: "Near-Infrared (830nm)", bg: "#881337" },
];

export const RED_BLUE_DOTS: ColorDot[] = [
  { name: "Red (630nm)", bg: "#EF4444" },
  { name: "Blue (415nm)", bg: "#3B82F6" },
];

export const THERAFACE_DOTS: ColorDot[] = [
  { name: "Red (630nm)", bg: "#EF4444" },
  { name: "Blue (415nm)", bg: "#3B82F6" },
  { name: "Yellow (590nm)", bg: "#F59E0B" },
];

type OutboundButtonProps = {
  href: string;
  className: string;
  ariaLabel: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export function OutboundButton({
  href,
  className,
  ariaLabel,
  children,
  onClick,
}: OutboundButtonProps) {
  return (
    <a
      href={href === "#" ? undefined : href}
      aria-label={ariaLabel}
      aria-busy="false"
      aria-disabled={href === "#" ? true : undefined}
      data-outbound-button="true"
      data-loading="false"
      className={`relative ${className}`}
      onClick={(e) => {
        preventPlaceholderNavigation(e, href);
        if (onClick) onClick(e);
      }}
    >
      <span data-outbound-content="true">{children}</span>
      <span
        data-outbound-loader="true"
        className="absolute inset-0 z-20 hidden items-center justify-center"
        role="status"
      >
        <OutboundLoader />
        <span className="sr-only">Opening website</span>
      </span>
    </a>
  );
}

export const CTAButton = ({
  href,
  text,
  className = "",
}: {
  href: string;
  text: string;
  className?: string;
}) => (
  <OutboundButton
    href={href}
    ariaLabel={text}
    className={`relative inline-flex justify-center items-center px-8 py-4 text-lg md:text-xl font-bold text-white bg-emerald-500 rounded-full overflow-hidden group hover:scale-[1.02] transition-transform duration-300 shadow-xl shadow-emerald-500/30 ${className}`}
  >
    <span className="relative z-10 flex items-center gap-2">
      {text} <ChevronRight size={24} />
    </span>
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
  </OutboundButton>
);

export const MetricBar: React.FC<{ label: string; value: number }> = ({
  label,
  value,
}) => (
  <div className="mb-3">
    <div className="flex justify-between text-sm font-semibold mb-1 text-slate-700">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-emerald-500 rounded-full"
      />
    </div>
  </div>
);

export function EmeraldMasthead({
  title,
  subtitle,
  badgeText = "United Kingdom - 2026",
  alertBadge,
}: {
  title: string | React.ReactNode;
  subtitle?: string;
  badgeText?: string;
  alertBadge?: string;
}) {
  const market = getAdvertorialMarket("uk");
  const updatedDate = useMarketUpdatedDate(market, "3 August 2026");

  return (
    <div className="bg-emerald-500 border-b border-emerald-600 pt-5 pb-6 px-4 md:pt-6 md:pb-8">
      <div className="max-w-6xl mx-auto text-center">
        {alertBadge && (
          <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3 shadow-sm border border-amber-300">
            <AlertTriangle size={14} className="shrink-0" />
            {alertBadge}
          </div>
        )}
        <h1 className="mx-[-0.25rem] text-[clamp(1.3rem,6.6vw,2.5rem)] md:mx-0 md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 md:mb-6 font-serif text-center">
          <span className="block">{title}</span>
          <span className="mt-2 flex items-center justify-center gap-2 text-[0.72em] md:gap-3">
            <MarketFlag market="uk" />
            <span>{badgeText}</span>
          </span>
        </h1>
        {subtitle && (
          <p className="max-w-3xl mx-auto text-emerald-50 text-sm md:text-base font-medium mb-3">
            {subtitle}
          </p>
        )}
        <div className="flex items-center justify-center gap-2 md:gap-2.5 text-base md:text-lg font-bold text-white">
          <CheckCircle2 size={20} className="text-white shrink-0" />
          Last updated – <span suppressHydrationWarning>{updatedDate}</span>
        </div>
      </div>
    </div>
  );
}

export function ExpertReviewerCard({
  customBio,
  bannerImage = "/img/TOP 5 LED Mask uk.png",
  bannerAlt = "Top LED masks comparison for the UK",
}: {
  customBio?: React.ReactNode;
  bannerImage?: string;
  bannerAlt?: string;
}) {
  return (
    <header className="bg-white border-b border-slate-200 pt-10 pb-12 px-4 md:pt-12 md:pb-16">
      <div className="max-w-6xl mx-auto text-center">
        <img
          src={bannerImage}
          alt={bannerAlt}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full max-w-5xl mx-auto aspect-[1536/461] object-cover rounded-3xl shadow-xl border border-slate-100 mb-10 md:mb-12"
        />

        <div className="bg-white p-6 md:p-8 rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.1)] max-w-5xl mx-auto border border-slate-100 text-slate-800">
          <div className="flex flex-col md:block items-center text-center md:text-left w-full">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
              <img
                src={EXPERT_PROFILE.image}
                alt={EXPERT_PROFILE.name}
                className="w-24 h-24 md:w-24 md:h-24 rounded-full object-cover mb-2 md:mb-0 border-2 border-emerald-100"
              />
              <div>
                <h3 className="font-bold text-xl md:text-2xl underline text-slate-900">
                  {EXPERT_PROFILE.name}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-semibold mt-1">
                  {EXPERT_PROFILE.title}
                </p>
              </div>
            </div>

            <div className="text-sm md:text-base text-slate-700 leading-relaxed mb-6">
              {customBio || (
                <p>
                  With {EXPERT_PROFILE.yearsExperience} years of experience in
                  skincare and beauty technology,{" "}
                  <strong className="text-slate-900">
                    {EXPERT_PROFILE.name}
                  </strong>{" "}
                  is a certified dermatologist and beauty technology expert. She
                  reviewed {EXPERT_PROFILE.masksReviewed} popular UK LED face
                  mask options over {EXPERT_PROFILE.testingHours} hours, comparing
                  wavelengths, light coverage, comfort, eye safety, neck
                  treatment, usability, reviews, price, and guarantees. Her biggest
                  finding was simple: the most expensive mask was not always the
                  best choice. The strongest options used the right wavelengths,
                  gave even face-and-neck coverage, and were easy enough to use
                  consistently at home.
                </p>
              )}
            </div>

            <hr className="border-slate-200 w-full mb-4" />

            <div className="text-xs md:text-sm italic text-slate-600 md:text-right">
              * Recommended by over 1,000 UK skincare users.
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export const evaluationCriteria = [
  "Scientific effectiveness of the light wavelengths",
  "Even light distribution",
  "Comfort and fit on the face",
  "Skin-friendly, medically approved materials",
  "Adjustable light modes and intensity levels",
  "User interface and ease of operation",
  "Battery life and charging performance",
  "Product durability and build quality",
  "User feedback and real skincare results",
  "Affordability and post-purchase customer support",
];

export function EvaluationCriteriaSection({
  testedCount = "18 different LED face masks",
}: {
  testedCount?: string;
}) {
  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-5 min-[360px]:p-5 md:p-10 shadow-sm border border-slate-200 mb-10 md:mb-16 w-full">
      <h2 className="text-[1.35rem] md:text-3xl font-bold text-slate-900 mb-5 md:mb-8 text-center font-serif leading-tight">
        We evaluated LED face masks based on 10 criteria
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4 mb-5 md:mb-8">
        {evaluationCriteria.map((item, idx) => (
          <div key={idx} className="flex items-start gap-2.5 md:gap-3">
            <ShieldCheck className="text-emerald-500 shrink-0 mt-0.5 h-[18px] w-[18px] md:h-5 md:w-5" />
            <span className="font-semibold text-slate-700 text-[15px] md:text-base leading-snug">
              {item}
            </span>
          </div>
        ))}
      </div>
      <p className="text-center text-slate-600 bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100 text-[14px] md:text-base leading-snug md:leading-relaxed">
        Over the past three months, we have thoroughly tested{" "}
        <strong>{testedCount}</strong>. Based on{" "}
        <strong>hands-on evaluations</strong>, insights from{" "}
        <strong>board-certified dermatologists</strong>, and{" "}
        <strong>thousands of consumer reviews</strong>, the following models
        stood out in terms of{" "}
        <strong>performance, comfort, safety, and affordability</strong>.
      </p>
    </div>
  );
}

export function FreeGiftsBox({
  buudyUrl = BUUDY_OFFICIAL_URL,
}: {
  buudyUrl?: string;
}) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring" }}
      className="mt-10 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl shadow-blue-100/50"
    >
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-200/40 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-blue-200">
          <span className="text-lg">💡</span> Editor's Tip
        </div>

        <h4 className="font-extrabold text-2xl md:text-3xl text-gray-900 mb-4 leading-tight">
          Active Offer Found: £128 in{" "}
          <span className="text-blue-600 bg-blue-100 px-2 rounded-md inline-block transform -rotate-1">
            FREE GIFTS
          </span>
        </h4>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          While doing our research, we found that Buudy is currently running a{" "}
          <strong className="font-extrabold text-slate-900 bg-amber-100 text-amber-950 px-2 py-0.5 rounded border border-amber-300 inline-block">
            Biggest Black Friday Sale
          </strong>{" "}
          where you can get these premium accessories bundled for free with
          every mask purchase.
        </p>

        <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-8">
          {/* Travel Box */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
            <div className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce">
              FREE
            </div>
            <a
              href={buudyUrl}
              aria-label="View the Buudy LED Mask offer with free Premium Travel Box"
              className="block relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                Normally £39
              </span>
              <img
                src="/img/93-w.webp"
                alt="Premium Travel Box"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </a>
            <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">
              Premium Travel Box
            </p>
          </div>

          {/* LED Torch */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
            <div
              className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            >
              FREE
            </div>
            <a
              href={buudyUrl}
              aria-label="View the Buudy LED Mask offer with free LED Torch"
              className="block relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                Normally £69
              </span>
              <img
                src="/img/35-w.webp"
                alt="Buudy LED Torch"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </a>
            <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">
              Buudy LED Torch
            </p>
          </div>

          {/* E-Book */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
            <div
              className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce"
              style={{ animationDelay: "0.4s" }}
            >
              FREE
            </div>
            <a
              href={buudyUrl}
              aria-label="View the Buudy LED Mask offer with free Expert Skincare Guide"
              className="block relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                Normally £20
              </span>
              <img
                src="/img/94-w.webp"
                alt="Skincare E-Book"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </a>
            <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">
              Expert Skincare Guide
            </p>
          </div>
        </div>

        <OutboundButton
          href={buudyUrl}
          ariaLabel="Check Availability"
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg md:text-xl text-center py-3.5 sm:py-4 md:py-5 rounded-2xl shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] relative overflow-hidden group border-2 border-blue-500"
        >
          <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
            Check Availability <ChevronRight size={20} className="sm:hidden" />
            <ChevronRight size={24} className="hidden sm:block" />
          </span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
        </OutboundButton>
      </div>
    </motion.div>
  );
}

export function DermatologistVerdictSection({
  buudyUrl = BUUDY_OFFICIAL_URL,
}: {
  buudyUrl?: string;
}) {
  const verdictVideoRef = useRef<HTMLVideoElement>(null);
  const [isVerdictVideoPlaying, setIsVerdictVideoPlaying] = useState(false);

  const playVerdictVideo = () => {
    if (verdictVideoRef.current) {
      verdictVideoRef.current.play();
      setIsVerdictVideoPlaying(true);
    }
  };

  return (
    <div className="mt-20 md:mt-24 mb-10 md:mb-12 relative max-w-sm md:max-w-5xl mx-auto">
      <div className="bg-[#f8f4e6] rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-12 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-[#e8dccb] relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#8b1528] mb-6 md:mb-10 font-serif tracking-wide">
          Dermatologist's Verdict
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Video Area */}
          <div className="relative">
            <div className="relative mx-auto max-w-[190px] min-[380px]:max-w-[210px] sm:max-w-[240px] md:max-w-[300px] overflow-hidden rounded-[1.35rem] md:rounded-[1.75rem] border border-[#dfd1bd] bg-black shadow-xl">
              <video
                ref={verdictVideoRef}
                className="block w-full"
                controls
                playsInline
                preload="metadata"
                poster="/assets/buudy-dermatologist-verdict-poster.jpg"
                aria-label="Dermatologist walkthrough of the Buudy 7 Colour LED Mask"
                onPlay={() => setIsVerdictVideoPlaying(true)}
                onPause={() => setIsVerdictVideoPlaying(false)}
                onEnded={() => setIsVerdictVideoPlaying(false)}
              >
                <source
                  src="/assets/buudy-dermatologist-verdict.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <button
                type="button"
                aria-label="Play dermatologist walkthrough video"
                onClick={playVerdictVideo}
                className={`absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#136b3a] text-white shadow-[0_14px_34px_rgba(19,107,58,0.35)] ring-8 ring-white/60 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-[#d4af37]/70 ${
                  isVerdictVideoPlaying
                    ? "pointer-events-none opacity-0 scale-90"
                    : "opacity-100 scale-100"
                }`}
              >
                <Play size={30} fill="currentColor" className="ml-1" />
              </button>
              <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#8b1528] shadow-sm">
                2 min demo
              </div>
            </div>
            <p className="mt-4 text-center text-xs md:text-sm font-medium text-gray-600 leading-snug max-w-[240px] md:max-w-none mx-auto">
              See the light modes, fit, eye area, and full-face coverage in a
              real product walkthrough.
            </p>
          </div>

          {/* Right Content Area */}
          <div className="flex flex-col justify-center text-center">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4 font-serif tracking-tight">
              Buudy 7 Colour LED Mask
            </h3>

            <div className="w-28 md:w-32 h-[1px] bg-[#d4af37] mx-auto mb-5 md:mb-6"></div>

            <div className="text-2xl md:text-4xl font-bold text-[#8b1528] mb-5 md:mb-8 font-sans">
              Now at 60% off
            </div>

            {/* Trustpilot-style Badge */}
            <div className="border border-gray-200 bg-white/70 rounded-xl p-3 md:p-4 mx-auto mb-6 md:mb-8 inline-block shadow-sm">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="font-bold text-base md:text-lg text-black font-sans">
                  Excellent
                </span>
                <GreenStarRating rating={5} size={22} />
              </div>
              <div className="text-xs md:text-sm text-gray-600 flex items-center justify-center gap-1 font-sans">
                Rated 4.9 / 5 on <GreenStarIcon size={18} />{" "}
                <span className="font-bold text-black">Trustpilot</span>
              </div>
            </div>

            <OutboundButton
              href={buudyUrl}
              ariaLabel="Check Availability"
              className="mx-auto w-full max-w-[240px] md:w-auto md:max-w-none bg-gradient-to-b from-[#1a7444] to-[#0d4a29] hover:from-[#145c35] hover:to-[#0a381f] text-white text-sm md:text-xl font-bold font-sans tracking-wide py-3.5 md:py-4 px-6 md:px-12 rounded-full shadow-[0_8px_20px_rgba(13,74,41,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              CHECK AVAILABILITY
            </OutboundButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export interface ComparisonTableItem {
  rank: number;
  name: string;
  shortName: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: number;
  ledCount: string;
  lightWavelengths: string;
  colorDots?: ColorDot[];
  neckCoverage: boolean;
  multiSkinModes: boolean;
  eyeProtection: boolean;
  cordlessRechargeable: boolean;
  freeGifts: boolean;
  moneyBackTrial: string;
  freeDelivery?: boolean;
}

export const CANONICAL_5_COMPARISON_PRODUCTS: ComparisonTableItem[] = [
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
    rank: 3,
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
    rank: 4,
    name: "Shark CryoGlow LED Mask",
    shortName: "Shark CryoGlow",
    image: "/img/shark.png",
    price: "£299.99",
    rating: 4.6,
    ledCount: "Unspecified",
    lightWavelengths: "Red & Blue + Under-Eye Cryo",
    colorDots: RED_BLUE_DOTS,
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
    name: "Dr. Dennis Gross DRx SpectraLite",
    shortName: "Dr. Dennis Gross",
    image: "/img/Dr Dennis Gross.png",
    price: "£455",
    rating: 4.1,
    ledCount: "162 LEDs",
    lightWavelengths: "Red & Blue (3 Modes)",
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

export function CompetitorComparisonTable({
  products = CANONICAL_5_COMPARISON_PRODUCTS,
}: {
  products?: ComparisonTableItem[];
}) {
  return (
    <section className="mt-16 md:mt-24 mb-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 font-serif tracking-tight mb-3">
          Side-by-Side Comparison
        </h2>
        <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
          See how the top LED face masks compare across key clinical specs,
          coverage, and value.
        </p>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm bg-white">
        <table className="w-full min-w-[700px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80">
              <th className="py-4 px-4 font-bold text-slate-900 w-48">Feature</th>
              {products.map((p) => (
                <th
                  key={p.rank}
                  className={`py-4 px-3 text-center ${
                    p.rank === 1
                      ? "bg-emerald-50/60 font-black text-emerald-950 border-x border-emerald-200"
                      : "font-bold text-slate-800"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-14 h-14 object-cover rounded-xl border border-slate-200 mb-2"
                    />
                    <span className="text-xs text-slate-500 font-semibold mb-0.5">
                      #{p.rank} Pick
                    </span>
                    <span className="text-xs md:text-sm line-clamp-1">{p.shortName}</span>
                    <span className="text-sm font-extrabold text-slate-900 mt-1">
                      {p.price}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="py-3.5 px-4 font-semibold text-slate-700">Light Spectrum / Modes</td>
              {products.map((p) => (
                <td
                  key={p.rank}
                  className={`py-3.5 px-3 text-center text-xs leading-snug ${
                    p.rank === 1
                      ? "bg-emerald-50/30 font-bold text-emerald-900 border-x border-emerald-100"
                      : "text-slate-600"
                  }`}
                >
                  {p.lightWavelengths}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-semibold text-slate-700">Integrated Neck Coverage</td>
              {products.map((p) => (
                <td
                  key={p.rank}
                  className={`py-3.5 px-3 text-center ${
                    p.rank === 1 ? "bg-emerald-50/30 border-x border-emerald-100" : ""
                  }`}
                >
                  {p.neckCoverage ? (
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-bold text-xs">
                      <Check size={16} /> Yes
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-red-500 font-medium text-xs">
                      <XCircle size={16} /> No
                    </span>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-semibold text-slate-700">Total Skin Health (7-Color)</td>
              {products.map((p) => (
                <td
                  key={p.rank}
                  className={`py-3.5 px-3 text-center ${
                    p.rank === 1 ? "bg-emerald-50/30 border-x border-emerald-100" : ""
                  }`}
                >
                  {p.multiSkinModes ? (
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-bold text-xs">
                      <Check size={16} /> Yes
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-red-500 font-medium text-xs">
                      <XCircle size={16} /> No
                    </span>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-semibold text-slate-700">Built-in Eye Protection</td>
              {products.map((p) => (
                <td
                  key={p.rank}
                  className={`py-3.5 px-3 text-center ${
                    p.rank === 1 ? "bg-emerald-50/30 border-x border-emerald-100" : ""
                  }`}
                >
                  {p.eyeProtection ? (
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-bold text-xs">
                      <Check size={16} /> Yes
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-red-500 font-medium text-xs">
                      <XCircle size={16} /> No
                    </span>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-semibold text-slate-700">Cordless & Hands-Free</td>
              {products.map((p) => (
                <td
                  key={p.rank}
                  className={`py-3.5 px-3 text-center ${
                    p.rank === 1 ? "bg-emerald-50/30 border-x border-emerald-100" : ""
                  }`}
                >
                  {p.cordlessRechargeable ? (
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-bold text-xs">
                      <Check size={16} /> Yes
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-red-500 font-medium text-xs">
                      <XCircle size={16} /> No
                    </span>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-semibold text-slate-700">Free Deluxe Gift Bundle</td>
              {products.map((p) => (
                <td
                  key={p.rank}
                  className={`py-3.5 px-3 text-center ${
                    p.rank === 1 ? "bg-emerald-50/30 border-x border-emerald-100" : ""
                  }`}
                >
                  {p.freeGifts ? (
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-bold text-xs bg-emerald-100 px-2 py-0.5 rounded-full">
                      <Check size={14} /> £128 Value
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-slate-400 text-xs">
                      <XCircle size={16} /> None
                    </span>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-semibold text-slate-700">Risk-Free Trial</td>
              {products.map((p) => (
                <td
                  key={p.rank}
                  className={`py-3.5 px-3 text-center text-xs ${
                    p.rank === 1
                      ? "bg-emerald-50/30 font-bold text-emerald-900 border-x border-emerald-100"
                      : "text-slate-600"
                  }`}
                >
                  {p.moneyBackTrial}
                </td>
              ))}
            </tr>
            <tr className="bg-slate-50/50">
              <td className="py-4 px-4 font-bold text-slate-900">Final Verdict</td>
              {products.map((p) => (
                <td
                  key={p.rank}
                  className={`py-4 px-3 text-center ${
                    p.rank === 1 ? "bg-emerald-50/80 border-x border-emerald-200" : ""
                  }`}
                >
                  {p.rank === 1 ? (
                    <OutboundButton
                      href={BUUDY_OFFICIAL_URL}
                      ariaLabel="Check Buudy Availability"
                      className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs py-2 px-3 rounded-full shadow-md transition-transform hover:scale-105"
                    >
                      Top Pick
                    </OutboundButton>
                  ) : (
                    <span className="text-xs text-slate-500 font-medium">Alternative</span>
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function StickyMobileCta({
  buudyUrl = BUUDY_OFFICIAL_URL,
  label = "Take me to the winning LED Mask",
}: {
  buudyUrl?: string;
  label?: string;
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 md:hidden flex items-center justify-center">
      <OutboundButton
        href={buudyUrl}
        ariaLabel={label}
        className="w-full text-center bg-emerald-500 text-white px-2 py-3.5 rounded-full font-bold text-[13px] sm:text-base shadow-lg shadow-emerald-500/30 whitespace-nowrap relative overflow-hidden group"
      >
        <span className="relative z-10">{label}</span>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
      </OutboundButton>
    </div>
  );
}

export function MaskFooter() {
  return (
    <footer className="mt-0 border-t border-slate-200 bg-white px-4 py-8 shadow-inner">
      <div className="mx-auto max-w-6xl text-center text-sm text-slate-500">
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <a
            href="/privacy"
            className="text-slate-500 hover:text-slate-800 transition-colors"
          >
            Privacy Policy
          </a>
          <span className="text-slate-300">•</span>
          <a
            href="/terms"
            className="text-slate-500 hover:text-slate-800 transition-colors"
          >
            Terms of Service
          </a>
          <span className="text-slate-300">•</span>
          <a
            href="/disclosure"
            className="text-slate-500 hover:text-slate-800 transition-colors"
          >
            Advertising Disclosure
          </a>
          <span className="text-slate-300">•</span>
          <a
            href="/contact"
            className="text-slate-500 hover:text-slate-800 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
