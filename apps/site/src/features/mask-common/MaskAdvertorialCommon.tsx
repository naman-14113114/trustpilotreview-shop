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

export type ComparisonRowDef =
  | {
      key:
        | "neckCoverage"
        | "multiSkinModes"
        | "eyeProtection"
        | "cordlessRechargeable"
        | "freeGifts";
      label: string;
      kind: "boolean";
    }
  | {
      key: "lightWavelengths" | "moneyBackTrial";
      label: string;
      kind: "text";
    }
  | {
      key: "price";
      label: string;
      kind: "price";
    };

export const TOP_5_LED_MASK_COMPARISON_ROWS: ComparisonRowDef[] = [
  { key: "lightWavelengths", label: "Light Spectrum / Modes", kind: "text" },
  { key: "neckCoverage", label: "Integrated Neck Coverage", kind: "boolean" },
  { key: "multiSkinModes", label: "Total Skin Health (Acne, Tone, Aging)", kind: "boolean" },
  { key: "eyeProtection", label: "Built-in Eye Protection", kind: "boolean" },
  { key: "cordlessRechargeable", label: "Cordless & Hands-Free", kind: "boolean" },
  { key: "freeGifts", label: "Free Deluxe Gift Bundle", kind: "boolean" },
  { key: "moneyBackTrial", label: "Risk-Free Trial", kind: "text" },
  { key: "price", label: "Price", kind: "price" },
];

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
    image: "/img/Untitled design.png",
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
    lightWavelengths: "Red & Blue (4 Modes)",
    colorDots: RED_BLUE_DOTS,
    neckCoverage: false,
    multiSkinModes: false,
    eyeProtection: true,
    cordlessRechargeable: false,
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
    <section className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm mt-16 mb-12 max-w-6xl mx-auto font-sans">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 font-serif">
          Top 5 LED Face Masks Side-by-Side Comparison
        </h2>
        <p className="text-slate-600 mt-2 text-sm md:text-base font-sans">
          Detailed technical specifications, light wavelengths, included coverage, and ownership value compared across the UK&apos;s leading 2026 models.
        </p>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="block lg:hidden text-center text-xs text-slate-500 font-medium mb-4 bg-slate-50 py-2 px-3 rounded-lg border border-slate-100 font-sans">
        ← Swipe horizontally to compare all 5 masks →
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto -mx-2 sm:mx-0">
        <table className="w-full text-left border-collapse min-w-[720px] lg:min-w-full table-fixed font-sans">
          <thead>
            <tr className="border-b-2 border-slate-200">
              <th className="py-4 px-3 sm:px-4 font-bold text-slate-900 text-xs sm:text-sm md:text-base w-[18%] bg-slate-50/50 rounded-tl-xl align-bottom font-sans">
                Feature / Metric
              </th>
              {products.map((prod) => (
                <th
                  key={prod.rank}
                  className={`py-4 px-2 text-center w-[16.4%] align-top border-l border-slate-200 ${
                    prod.rank === 1 ? "bg-emerald-50/40" : "bg-white"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span
                      className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1.5 font-sans ${
                        prod.rank === 1 ? "text-emerald-700" : "text-slate-500"
                      }`}
                    >
                      #{prod.rank} {prod.rank === 1 ? "Winner" : "Ranked"}
                    </span>
                    <div
                      className={
                        prod.rank === 1
                          ? "w-full max-w-[95px] sm:max-w-[110px] md:max-w-[125px] aspect-square mb-2.5 rounded-2xl overflow-hidden bg-white border-2 border-emerald-500/50 shadow-md flex items-center justify-center p-0"
                          : "w-full max-w-[95px] sm:max-w-[110px] md:max-w-[125px] aspect-square mb-2.5 rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm flex items-center justify-center p-1.5"
                      }
                    >
                      <img
                        src={prod.image}
                        alt={prod.name}
                        loading="lazy"
                        decoding="async"
                        className={
                          prod.rank === 1
                            ? "w-full h-full object-cover rounded-2xl"
                            : "max-h-full max-w-full object-contain"
                        }
                      />
                    </div>
                    <span className="font-bold text-slate-900 text-sm sm:text-base md:text-lg line-clamp-1 mb-1 font-sans">
                      {prod.shortName}
                    </span>
                    <div className="mb-2 scale-90 sm:scale-100">
                      <GreenStarRating rating={prod.rating} size={14} />
                    </div>
                    <div className="flex items-baseline justify-center gap-1.5 font-sans">
                      <span className="text-base sm:text-xl md:text-2xl font-black text-slate-900">
                        {prod.price}
                      </span>
                      {prod.originalPrice && (
                        <span className="text-xs sm:text-sm text-slate-400 line-through font-medium">
                          {prod.originalPrice}
                        </span>
                      )}
                    </div>
                    {prod.rank === 1 && (
                      <div className="mt-1.5 flex justify-center">
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 text-amber-300 border border-amber-400/40 px-2 sm:px-2.5 py-0.5 text-[8px] sm:text-[9px] md:text-[10px] font-extrabold uppercase tracking-wider shadow-xs whitespace-nowrap">
                          BIGGEST BLACK FRIDAY SALE
                        </span>
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-sans">
            {TOP_5_LED_MASK_COMPARISON_ROWS.map((row, idx) => (
              <tr
                key={row.key}
                className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
              >
                <td className="py-3.5 px-3 sm:px-4 font-semibold text-slate-800 align-middle text-xs sm:text-sm font-sans">
                  {row.label}
                </td>
                {products.map((prod) => {
                  if (row.kind === "boolean") {
                    const isPassed = (prod as any)[row.key];
                    return (
                      <td
                        key={`${prod.rank}-${row.key}`}
                        className={`py-3.5 px-2 text-center align-middle border-l border-slate-100 ${
                          prod.rank === 1 ? "bg-emerald-50/20" : ""
                        }`}
                      >
                        <div className="flex items-center justify-center">
                          {isPassed ? (
                            <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                          )}
                        </div>
                      </td>
                    );
                  }

                  if (row.kind === "price") {
                    return (
                      <td
                        key={`${prod.rank}-price-row`}
                        className={`py-3.5 px-2 text-center align-middle border-l border-slate-100 ${
                          prod.rank === 1 ? "bg-emerald-50/20" : ""
                        }`}
                      >
                        <div className="flex flex-col items-center justify-center gap-1 font-sans">
                          <div className="flex items-baseline justify-center gap-1.5 font-sans">
                            <span className="font-extrabold text-slate-900 text-sm sm:text-base md:text-lg">
                              {prod.price}
                            </span>
                            {prod.originalPrice && (
                              <span className="text-[11px] sm:text-xs text-slate-400 line-through font-medium">
                                {prod.originalPrice}
                              </span>
                            )}
                          </div>
                          {prod.rank === 1 && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 text-amber-300 border border-amber-400/40 px-2 py-0.5 text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider shadow-xs whitespace-nowrap">
                              BIGGEST BLACK FRIDAY SALE
                            </span>
                          )}
                        </div>
                      </td>
                    );
                  }

                  if (row.key === "lightWavelengths") {
                    const dots = prod.colorDots || [];
                    return (
                      <td
                        key={`${prod.rank}-${row.key}`}
                        className={`py-3.5 px-2 text-center align-middle border-l border-slate-100 ${
                          prod.rank === 1 ? "bg-emerald-50/20" : ""
                        }`}
                      >
                        <div className="flex flex-col items-center justify-center gap-1.5">
                          {dots.length > 0 && (
                            <div className="flex items-center justify-center gap-1 flex-wrap max-w-[125px]">
                              {dots.map((dot, i) => (
                                <span
                                  key={i}
                                  title={dot.name}
                                  className={`inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full shadow-2xs shrink-0 ${
                                    dot.border
                                      ? "border border-slate-300 ring-1 ring-slate-200/50"
                                      : ""
                                  }`}
                                  style={{ backgroundColor: dot.bg }}
                                />
                              ))}
                            </div>
                          )}
                          <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-800 font-sans leading-tight">
                            {prod.lightWavelengths}
                          </span>
                        </div>
                      </td>
                    );
                  }

                  const textVal = (prod as any)[row.key];
                  return (
                    <td
                      key={`${prod.rank}-${row.key}`}
                      className={`py-3.5 px-2 text-center align-middle border-l border-slate-100 ${
                        prod.rank === 1 ? "bg-emerald-50/20" : ""
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-medium text-slate-800 font-sans">
                        {textVal}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function BuudyWinnerProductCard({
  buudyUrl = BUUDY_OFFICIAL_URL,
  customDescription,
  customPros,
  customCons,
  customMetrics,
}: {
  buudyUrl?: string;
  customDescription?: string[];
  customPros?: string[];
  customCons?: string[];
  customMetrics?: Array<{ label: string; value: number }>;
}) {
  const descriptions = customDescription || [
    "Our top pick is the Buudy 7 Colour LED Mask, a medical-grade device that outperforms the competition with a <strong>7-colour</strong> spectrum plus 830nm <strong>near-infrared</strong>. While most brands focus only on basic red light, Buudy uses targeted wavelengths to support everything from deep wrinkles and acne to inflammation, uneven tone, and overall skin recovery. This Health Canada Approved technology (with CE, FCC, and ROHS certifications) ensures professional-grade results for all skin types.",
    'A major advantage is the built-in <strong>neck coverage</strong>, a vital feature often missing from more expensive models. This allows you to treat "turkey neck" and sagging skin simultaneously. The <strong>cordless</strong>, rechargeable design features "Tap Technology" and <strong>Buudy AI</strong> guided sessions, making it simple to choose the right routine for your skin goals.',
    "Trusted by over 16,000 customers with a <strong>4.9-star</strong> rating, this mask delivers visible improvements in as few as ten uses. Currently priced at £179 during their <strong>Biggest Black Friday Sale</strong>, it offers the best value on the market, combining full-face and neck rejuvenation, advanced eye protection, and a <strong>90-day money-back</strong> guarantee for a safer, lower-risk trial.",
  ];

  const pros = customPros || [
    "Proven Results: Has an outstanding rating of 5/5 and 4.9 stars based on over 4,000 reviews and performed well in internal testing.",
    "7 Colour Medical Grade Spectrum: Unlike competitors with just 2–3 colours, Buudy offers 7 LED colours (Red, Blue, Green, Cyan, Yellow, Purple & White) plus 830nm near-infrared.",
    "Dermatologist Proven: Health Canada Approved with CE, FCC, and ROHS certifications.",
    'Built-in Neck Coverage: Specifically designed to target "turkey neck" and sagging skin, a critical feature most expensive brands miss.',
    "Fast Results: Claims noticeable skin improvement after just a few uses and full results in under 10 uses.",
    'Cordless, Portable & Guided: A hands-free, rechargeable design with "Tap Technology" and Buudy AI guided sessions that help match each routine to your skin concern.',
    "Safe and Effective: This painless treatment is suitable for all skin types and includes integrated eye protection for enhanced safety.",
    "Cost-effective: Currently priced at £179, which is a 60% discount from its regular price of £449.",
    "90-Day Money-Back Guarantee: Buudy offers a generous 90-day trial period to test for results. If you're not satisfied, you get a full refund.",
  ];

  const cons = customCons || [
    "Limited Availability: Available for purchase online only and exclusively in the United Kingdom.",
    "Limited Stock: There is a risk of the product being sold out due to limited stock.",
    "Learning Curve: Some users note the intuitive tap controls take a session or two to fully get used to, though most find it second nature after the first few uses.",
  ];

  const metrics = customMetrics || [
    { label: "Light Effectiveness", value: 97 },
    { label: "Skin Comfort and Fit", value: 96 },
    { label: "Ease of Use", value: 97 },
    { label: "Material Quality", value: 96 },
    { label: "Affordability", value: 100 },
  ];

  return (
    <div className="relative bg-white rounded-3xl shadow-sm border border-emerald-500 ring-4 ring-emerald-50 pt-10 md:pt-10 p-6 md:p-10 my-12 not-prose">
      <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm tracking-wide uppercase flex items-center gap-1.5 md:gap-2 shadow-lg z-10 whitespace-nowrap">
        <Award size={16} className="md:w-[18px] md:h-[18px]" />
        #1 Editor's Choice
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16">
        {/* Left Column: Image & Quick Stats (STICKY) */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <div className="lg:sticky lg:top-8 w-full flex flex-col items-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center lg:hidden mt-3">
              #1 Buudy 7 Colour LED Mask
            </h2>

            <div className="relative w-full mb-6">
              <a
                href={buudyUrl}
                onClick={(event) => preventPlaceholderNavigation(event, buudyUrl)}
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

              <a
                href={buudyUrl}
                aria-label="View the Buudy LED Mask and customer reviews"
                className="block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <GreenStarRating
                  rating="4.9 / 5"
                  forceFull={true}
                  size={24}
                  className="mb-2"
                />
                <p className="text-sm font-medium text-slate-500 transition-colors hover:text-emerald-600">
                  Overall rating 4.9 / 5
                </p>
              </a>
            </div>

            <div className="w-full hidden lg:block">
              <CTAButton
                href={buudyUrl}
                text="Official Website"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="lg:col-span-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 hidden lg:block font-serif">
            <a
              href={buudyUrl}
              onClick={(event) => preventPlaceholderNavigation(event, buudyUrl)}
              className="hover:text-emerald-600 transition-colors"
            >
              #1 Buudy 7 Colour LED Mask
            </a>
          </h2>

          <div className="prose prose-slate prose-lg max-w-none mb-8">
            {descriptions.map((p, idx) => (
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
              {metrics.map((metric, idx) => (
                <MetricBar
                  key={idx}
                  label={metric.label}
                  value={metric.value}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 mb-8">
            {/* Pros */}
            <div className="bg-emerald-50/50 rounded-2xl px-3 py-5 md:p-6 border border-emerald-100">
              <h4 className="bg-emerald-500 text-white font-bold text-center text-2xl py-3 px-3 md:px-6 -mt-5 -mx-3 md:-mt-6 md:-mx-6 mb-5 md:mb-6 rounded-t-2xl">
                Pros
              </h4>
              <ul className="space-y-4">
                {pros.map((pro, idx) => {
                  const [bold, ...rest] = pro.split(":");
                  const is7ColorPoint =
                    bold.toLowerCase().includes("7 colour") ||
                    bold.toLowerCase().includes("7 color") ||
                    bold.toLowerCase().includes("7-colour");
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
                          <span
                            dangerouslySetInnerHTML={{
                              __html: rest.join(":"),
                            }}
                          />
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
                {cons.map((con, idx) => {
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

          {/* Editor's Tip - Free Gifts */}
          <FreeGiftsBox buudyUrl={buudyUrl} />

          {/* Mobile CTA */}
          <div className="w-full mt-8 lg:hidden">
            <CTAButton
              href={buudyUrl}
              text="Official Website"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
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
