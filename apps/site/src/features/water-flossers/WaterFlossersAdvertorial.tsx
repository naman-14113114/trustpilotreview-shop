"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { motion } from "motion/react";
import React, {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import {
  Check,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  XCircle,
  Sparkles,
} from "lucide-react";
import { MarketFlag } from "@/components/MarketFlag";
import { OutboundLoader } from "@/components/OutboundLoader";
import { GreenStarIcon, GreenStarRating } from "@/components/GreenStarRating";

import {
  waterFlosserProducts,
  type RankedWaterFlosserProduct as RankedProduct,
  type WaterFlosserMetric as Metric,
} from "@/data/waterFlossers";

const defaultEvaluationCriteria = [
  "Deep interdental cleaning & subgingival plaque removal (1,800–2,000 pulses/min)",
  "High-capacity water reservoir (300ml+ for continuous 90s dual-arch flossing)",
  "Calibrated hydro pressure range & gumline protection (60–138 PSI)",
  "Medical-grade stainless piston pump vs degrading diaphragm pumps",
  "Long-lasting battery endurance & universal USB-C charging (60+ days)",
  "Complete specialized nozzle suite (orthodontic, periodontal, plaque & tongue tips)",
  "100% submersible IPX7 waterproofing for safe in-shower flossing",
  "Ergonomic 360° rotating nozzle collar for posterior molar reach",
  "Accessible replacement nozzle pricing & direct-to-consumer value",
  "Verified UK customer satisfaction, 90-day money-back guarantee & 2-year warranty",
];

function formatLondonDate(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "Europe/London",
  }).format(date);
}

function handleOutboundClick(
  event: MouseEvent<HTMLAnchorElement>,
  setLoadingTarget: (target: string) => void,
  target: string,
) {
  if (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  ) {
    return;
  }

  setLoadingTarget(target);
}

function OfficialButton({
  href,
  targetId,
  loadingTarget,
  setLoadingTarget,
  children,
  className = "",
  testId,
}: {
  href: string;
  targetId: string;
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
  children: ReactNode;
  className?: string;
  testId?: string;
}) {
  const isLoading = loadingTarget === targetId;

  return (
    <a
      href={href}
      rel="noopener noreferrer sponsored"
      data-testid={testId}
      onClick={(event) =>
        handleOutboundClick(event, setLoadingTarget, targetId)
      }
      className={`group relative inline-flex min-h-14 w-full items-center justify-center overflow-hidden rounded-full bg-emerald-500 px-6 py-4 text-center text-lg md:text-xl font-bold text-white shadow-xl shadow-emerald-500/30 transition-transform duration-300 hover:scale-[1.02] ${className}`}
      aria-busy={isLoading}
    >
      {isLoading ? (
        <OutboundLoader />
      ) : (
        <>
          <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
            {children}
            <ChevronRight className="h-6 w-6 shrink-0" aria-hidden="true" />
          </span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
        </>
      )}
    </a>
  );
}

function EvaluationCriteria() {
  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-5 min-[360px]:p-5 md:p-10 shadow-sm border border-slate-200 mb-10 md:mb-16 w-full">
      <h2 className="text-[1.35rem] md:text-3xl font-bold text-slate-900 mb-5 md:mb-8 text-center font-serif leading-tight">
        Clinical Evaluation Criteria &amp; Testing Methodology
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4 mb-5 md:mb-8">
        {defaultEvaluationCriteria.map((criterion, idx) => (
          <div key={idx} className="flex items-start gap-2.5 md:gap-3">
            <ShieldCheck className="text-emerald-500 shrink-0 mt-0.5 h-[18px] w-[18px] md:h-5 md:w-5" />
            <span className="font-semibold text-slate-700 text-[15px] md:text-base leading-snug">
              {criterion}
            </span>
          </div>
        ))}
      </div>
      <p className="text-center text-slate-600 bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100 text-[14px] md:text-base leading-snug md:leading-relaxed">
        Over the past three months, our clinical panel evaluated{" "}
        <strong>leading UK cordless water flossers</strong> across{" "}
        <strong>180+ hours of comparative laboratory testing</strong>. Based on{" "}
        <strong>plaque biofilm clearance measurements</strong>, insights from{" "}
        <strong>registered UK dental specialists</strong>, and{" "}
        <strong>thousands of verified consumer reviews</strong>, these 5 models
        stand out in terms of{" "}
        <strong>water capacity, hydrodynamic pressure range, battery runtime, and long-term oral health value</strong>.
      </p>
    </div>
  );
}

function MetricBar({ label, value }: Metric) {
  return (
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
}

function GiftPanel({
  loadingTarget,
  setLoadingTarget,
}: {
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
}) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring" }}
      className="mt-10 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl shadow-blue-100/50"
    >
      {/* Animated background elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-200/40 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-blue-200">
          <span className="text-lg">💡</span> Editor&apos;s Tip
        </div>

        <h4 className="font-extrabold text-2xl md:text-3xl text-gray-900 mb-4 leading-tight">
          What&apos;s Included &amp;{" "}
          <span className="text-blue-600 bg-blue-100 px-2 rounded-md inline-block transform -rotate-1">
            FREE GIFTS WORTH £39.99
          </span>
        </h4>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          While conducting our market audit, we confirmed that Miroooo is currently running a
          promotional direct-to-consumer package where you receive a full 7-piece specialized
          dental nozzle kit in a hygienic case plus an official £10 digital voucher bundled completely free.
        </p>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 max-w-2xl mx-auto items-stretch">
          {/* Left Column: What's Included Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative flex flex-col justify-between">
            <div className="absolute -top-2 sm:-top-3 -right-1 sm:-right-2 bg-emerald-500 text-white font-black text-[10px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg z-20">
              IN THE BOX
            </div>
            <a
              href="https://www.trymiroooo.com/products/miroooo-water-flosser"
              rel="noopener noreferrer sponsored"
              aria-label="View what is included in the Miroooo Water Flosser package"
              className="block relative mb-2 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100 flex-1 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <img
                src="/img/water-flossers/miroooo-water-flosser-what-is-included-package.webp"
                alt="What's Included in Miroooo Water Flosser Package"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </a>
            <p className="font-extrabold text-gray-900 text-sm sm:text-base md:text-lg leading-tight pt-1">
              What&apos;s Included in Box
            </p>
          </div>

          {/* Mobile Plus Connector */}
          <div className="flex md:hidden justify-center -my-2.5 sm:-my-3 z-30 relative pointer-events-none">
            <div
              className="w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-[0_3px_8px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.08)] border border-slate-200"
              aria-hidden="true"
            >
              <svg
                className="w-4 h-4 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
          </div>

          {/* Desktop 3D Plus Sign */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none items-center justify-center">
            <div
              className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.08)] border border-slate-200 transform hover:scale-105 transition-transform"
              aria-hidden="true"
            >
              <svg
                className="w-5 h-5 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
          </div>

          {/* Right Column: Stacked Free Gifts */}
          <div className="flex flex-col gap-3 sm:gap-4 justify-between h-full">
            {/* 7 Precision Nozzles Kit */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 border border-blue-100 shadow-lg transform hover:-translate-y-1 transition-transform relative flex items-center gap-3 sm:gap-4 flex-1">
              <div className="absolute -top-2 sm:-top-2.5 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-xs px-2.5 sm:px-3 py-0.5 rounded-full shadow-lg z-20 animate-bounce">
                FREE
              </div>
              <a
                href="https://www.trymiroooo.com/products/miroooo-water-flosser"
                rel="noopener noreferrer sponsored"
                aria-label="View the Miroooo Water Flosser with 7 Precision Nozzles Kit"
                className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1.5 py-0.5 rounded-full text-[8px] sm:text-[9px] shadow-sm whitespace-nowrap">
                  Normally £29.99
                </span>
                <img
                  src="/img/water-flossers/miroooo-water-flosser-7-precision-nozzles-gift.webp"
                  alt="7 Precision Nozzles Kit with Case"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </a>
              <div className="flex-1 min-w-0 pr-2 text-left">
                <p className="font-extrabold text-gray-900 text-sm sm:text-base md:text-lg leading-snug">
                  7 Precision Nozzles Kit
                </p>
                <p className="text-xs sm:text-sm text-blue-600 font-bold mt-1">
                  FREE ACCESSORY
                </p>
              </div>
            </div>

            {/* Miroooo Digital Gift Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 border border-blue-100 shadow-lg transform hover:-translate-y-1 transition-transform relative flex items-center gap-3 sm:gap-4 flex-1">
              <div
                className="absolute -top-2 sm:-top-2.5 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-xs px-2.5 sm:px-3 py-0.5 rounded-full shadow-lg z-20 animate-bounce"
                style={{ animationDelay: "0.2s" }}
              >
                FREE
              </div>
              <a
                href="https://www.trymiroooo.com/products/miroooo-water-flosser"
                rel="noopener noreferrer sponsored"
                aria-label="View the Miroooo Water Flosser with Free Miroooo Gift Card"
                className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1.5 py-0.5 rounded-full text-[8px] sm:text-[9px] shadow-sm whitespace-nowrap">
                  Normally £10
                </span>
                <img
                  src="/img/water-flossers/miroooo-digital-gift-card.webp"
                  alt="Miroooo Digital Gift Card"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </a>
              <div className="flex-1 min-w-0 pr-2 text-left">
                <p className="font-extrabold text-gray-900 text-sm sm:text-base md:text-lg leading-snug">
                  Miroooo Gift Card
                </p>
                <p className="text-xs sm:text-sm text-blue-600 font-bold mt-1">
                  FREE VOUCHER
                </p>
              </div>
            </div>
          </div>
        </div>

        <OfficialButton
          href="https://www.trymiroooo.com/products/miroooo-water-flosser"
          targetId="miroooo-gift-panel"
          loadingTarget={loadingTarget}
          setLoadingTarget={setLoadingTarget}
          testId="flosser-cta-gifts"
          className="w-full !bg-blue-600 hover:!bg-blue-700 !shadow-blue-600/30 !border-2 !border-blue-500"
        >
          Check Availability
        </OfficialButton>
      </div>
    </motion.div>
  );
}

function RankRibbon({
  rank,
  featured = false,
}: {
  rank: string;
  featured?: boolean;
}) {
  const outerSize = featured ? "h-[118px] w-[138px]" : "h-[96px] w-[112px]";
  const triangleSize = featured ? "h-[108px] w-[128px]" : "h-[88px] w-[108px]";
  const textBox = featured ? "h-[78px] w-[82px]" : "h-[64px] w-[68px]";
  const textSize = featured ? "text-[2rem]" : "text-[1.55rem]";

  return (
    <div
      aria-label={`Rank ${rank}`}
      className={`pointer-events-none absolute left-0 top-0 z-30 overflow-visible rounded-tl-3xl ${outerSize}`}
    >
      {featured && (
        <div
          className={`absolute left-[7px] top-[7px] rounded-tl-3xl bg-emerald-950/30 blur-[1px] [clip-path:polygon(0_0,100%_0,0_100%)] ${triangleSize}`}
        />
      )}
      <div
        className={`absolute left-0 top-0 rounded-tl-3xl bg-gradient-to-br from-emerald-300 via-emerald-500 to-emerald-800 [clip-path:polygon(0_0,100%_0,0_100%)] ${triangleSize} ${
          featured
            ? "shadow-[0_18px_28px_rgba(5,150,105,0.32),inset_0_2px_0_rgba(255,255,255,0.35),inset_-10px_-10px_16px_rgba(4,120,87,0.28)]"
            : "shadow-[0_10px_18px_rgba(5,150,105,0.2),inset_0_1px_0_rgba(255,255,255,0.24)]"
        }`}
      />
      {featured && (
        <div
          className={`absolute left-[2px] top-[2px] rounded-tl-3xl bg-[linear-gradient(135deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.16)_32%,rgba(255,255,255,0)_58%)] [clip-path:polygon(0_0,100%_0,0_100%)] ${triangleSize}`}
        />
      )}
      <span
        className={`absolute left-0 top-0 flex items-center justify-center font-serif font-black leading-none text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.32)] ${textBox} ${textSize}`}
      >
        {rank}
      </span>
    </div>
  );
}

function ProductCard({
  product,
  loadingTarget,
  setLoadingTarget,
}: {
  product: RankedProduct;
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
}) {
  const isMiroooo = product.rank === 1;

  return (
    <article
      id={`rank-${product.rank}`}
      data-testid="water-flosser-card"
      data-product-rank={product.rank}
      className={`relative bg-white rounded-3xl shadow-sm border ${
        isMiroooo
          ? "border-emerald-500 ring-4 ring-emerald-50 pt-10 md:pt-10"
          : "border-slate-200"
      } p-6 md:p-10 pt-20 md:pt-24 scroll-mt-28`}
    >
      <RankRibbon rank={`#${product.rank}`} featured={isMiroooo} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16">
        {/* Left Column: Image & Quick Stats */}
        <aside className="lg:col-span-4 flex flex-col items-center">
          <div className="lg:sticky lg:top-8 w-full flex flex-col items-center">
            <h2
              className={`text-2xl font-bold text-slate-900 mb-6 text-center lg:hidden ${
                isMiroooo ? "mt-3" : ""
              }`}
            >
              {product.name}
            </h2>

            <div className="relative w-full mb-6">
              <a
                href={product.ctaUrl}
                rel="noopener noreferrer sponsored"
                onClick={(event) =>
                  handleOutboundClick(
                    event,
                    setLoadingTarget,
                    `flosser-img-${product.rank}`,
                  )
                }
                className="block w-full group"
              >
                <img
                  src={product.image}
                  alt={product.imageAlt || product.name}
                  loading={isMiroooo ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full aspect-square object-contain rounded-2xl shadow-md border border-slate-100 group-hover:shadow-xl transition-shadow duration-300 bg-white p-2"
                />
              </a>
            </div>

            <div className="text-center mb-2 lg:mb-6 w-full">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-3xl font-extrabold text-slate-900">
                  {product.price}
                </span>
                {product.compareAt ? (
                  <span className="text-lg text-slate-400 line-through font-medium">
                    {product.compareAt}
                  </span>
                ) : null}
              </div>
              <GreenStarRating
                rating={product.rating}
                forceFull={isMiroooo}
                size={24}
                className="mb-2"
              />
              <p className="text-sm font-medium text-slate-500">
                Overall rating {product.rating.toFixed(1)} / 5
              </p>
            </div>

            <div className="w-full hidden lg:block">
              <OfficialButton
                href={product.ctaUrl}
                targetId={`flosser-desktop-${product.rank}`}
                loadingTarget={loadingTarget}
                setLoadingTarget={setLoadingTarget}
                testId={`flosser-cta-${product.rank}`}
                className="w-full"
              >
                {product.ctaLabel}
              </OfficialButton>
            </div>
          </div>
        </aside>

        {/* Right Column: Details */}
        <div className="lg:col-span-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 hidden lg:block font-serif">
            <a
              href={product.ctaUrl}
              rel="noopener noreferrer sponsored"
              onClick={(event) =>
                handleOutboundClick(
                  event,
                  setLoadingTarget,
                  `flosser-title-${product.rank}`,
                )
              }
              className="hover:text-emerald-600 transition-colors"
            >
              {product.name}
            </a>
          </h2>

          <div className="prose prose-slate prose-lg max-w-none mb-8 space-y-4">
            {product.review.map((paragraph, pIdx) => (
              <p key={pIdx} className="text-slate-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Performance Metrics */}
          <div className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-100 mb-8">
            <h4 className="font-bold text-slate-900 mb-6 text-lg">
              Performance Metrics
            </h4>
            <div className="space-y-3">
              {product.metrics.map((metric) => (
                <MetricBar
                  key={`${product.rank}-${metric.label}`}
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
                  return (
                    <li
                      key={idx}
                      className="text-base text-slate-700 flex items-start gap-3"
                    >
                      <Check
                        size={20}
                        className="text-emerald-500 shrink-0 mt-0.5"
                      />
                      <span>
                        {rest.length > 0 ? (
                          <>
                            <strong className="text-slate-900">
                              {bold}:
                            </strong>{" "}
                            {rest.join(":")}
                          </>
                        ) : (
                          pro
                        )}
                      </span>
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
                        {rest.length > 0 ? (
                          <>
                            <strong className="text-slate-900">
                              {bold}:
                            </strong>{" "}
                            {rest.join(":")}
                          </>
                        ) : (
                          con
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {isMiroooo && (
            <GiftPanel
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
            />
          )}

          <div className="w-full mt-8 lg:hidden">
            <OfficialButton
              href={product.ctaUrl}
              targetId={`flosser-mobile-${product.rank}`}
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
              testId={`flosser-cta-mobile-${product.rank}`}
              className="w-full"
            >
              {product.ctaLabel}
            </OfficialButton>
          </div>
        </div>
      </div>
    </article>
  );
}

interface ComparisonTableProduct {
  rank: number;
  name: string;
  shortName: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: number;
  tankCapacity: string;
  maxPressure: string;
  batteryLife: string;
  pistonPump: boolean;
  nozzlesIncluded: string;
  usbCCharging: boolean;
  ipx7Waterproof: boolean;
  moneyBackTrial: string;
  freeGiftOffer: boolean;
}

const TOP_5_COMPARISON_PRODUCTS: ComparisonTableProduct[] = [
  {
    rank: 1,
    name: "Miroooo Water Flosser",
    shortName: "Miroooo Flosser",
    image: "/img/water-flossers/miroooo-water-flosser-comparison.png",
    price: "£69",
    originalPrice: "£139",
    rating: 4.9,
    tankCapacity: "320ml (90s Session)",
    maxPressure: "138 PSI Peak",
    batteryLife: "60+ Days",
    pistonPump: true,
    nozzlesIncluded: "7 Tips + Case",
    usbCCharging: true,
    ipx7Waterproof: true,
    moneyBackTrial: "90-Day Money-Back",
    freeGiftOffer: true,
  },
  {
    rank: 2,
    name: "Oral-B AquaCare Pro-Expert",
    shortName: "Oral-B AquaCare",
    image: "/img/water-flossers/oral-b-aquacare-pro-expert-comparison.png",
    price: "£99",
    rating: 4.3,
    tankCapacity: "145ml (Needs Refill)",
    maxPressure: "~55 PSI",
    batteryLife: "10–14 Days",
    pistonPump: false,
    nozzlesIncluded: "2 Oxyjet Tips",
    usbCCharging: false,
    ipx7Waterproof: true,
    moneyBackTrial: "30-Day Guarantee",
    freeGiftOffer: false,
  },
  {
    rank: 3,
    name: "Waterpik Cordless Advanced",
    shortName: "Waterpik WP-562",
    image: "/img/water-flossers/waterpik-cordless-advanced-comparison.png",
    price: "£99.99",
    rating: 4.2,
    tankCapacity: "210ml (Needs Refill)",
    maxPressure: "75 PSI",
    batteryLife: "7–10 Days",
    pistonPump: false,
    nozzlesIncluded: "4 Tips",
    usbCCharging: false,
    ipx7Waterproof: true,
    moneyBackTrial: "30-Day Guarantee",
    freeGiftOffer: false,
  },
  {
    rank: 4,
    name: "Philips Cordless Power Flosser 3000",
    shortName: "Philips 3000",
    image: "/img/water-flossers/philips-power-flosser-3000-comparison.png",
    price: "£109.99",
    rating: 4.0,
    tankCapacity: "250ml (Needs Refill)",
    maxPressure: "60 PSI",
    batteryLife: "14 Days",
    pistonPump: false,
    nozzlesIncluded: "2 Tips",
    usbCCharging: false,
    ipx7Waterproof: true,
    moneyBackTrial: "28-Day Guarantee",
    freeGiftOffer: false,
  },
  {
    rank: 5,
    name: "Panasonic Ultrasonic EW-DJ67",
    shortName: "Panasonic EW-DJ67",
    image: "/img/water-flossers/panasonic-ew-dj67-ultrasonic-comparison.png",
    price: "£89.99",
    rating: 3.9,
    tankCapacity: "200ml (Needs Refill)",
    maxPressure: "94 PSI",
    batteryLife: "~10 Mins (17h Charge)",
    pistonPump: false,
    nozzlesIncluded: "4 Tips",
    usbCCharging: false,
    ipx7Waterproof: true,
    moneyBackTrial: "30-Day Guarantee",
    freeGiftOffer: false,
  },
];

type ComparisonRowDef =
  | {
      key: "pistonPump" | "usbCCharging" | "ipx7Waterproof" | "freeGiftOffer";
      label: string;
      kind: "boolean";
    }
  | {
      key:
        | "tankCapacity"
        | "maxPressure"
        | "batteryLife"
        | "nozzlesIncluded"
        | "moneyBackTrial";
      label: string;
      kind: "text";
    }
  | {
      key: "price";
      label: string;
      kind: "price";
    };

const TOP_5_COMPARISON_ROWS: ComparisonRowDef[] = [
  { key: "tankCapacity", label: "Water Reservoir Capacity", kind: "text" },
  { key: "maxPressure", label: "Peak Hydrodynamic Pressure", kind: "text" },
  { key: "batteryLife", label: "Battery Endurance", kind: "text" },
  { key: "pistonPump", label: "Medical-Grade Piston Pump", kind: "boolean" },
  { key: "nozzlesIncluded", label: "Specialized Nozzles Included", kind: "text" },
  { key: "usbCCharging", label: "Universal USB-C Fast Charge", kind: "boolean" },
  { key: "ipx7Waterproof", label: "100% IPX7 Submersible", kind: "boolean" },
  { key: "freeGiftOffer", label: "Free Accessory & Voucher Bundle", kind: "boolean" },
  { key: "moneyBackTrial", label: "Risk-Free Trial Period", kind: "text" },
  { key: "price", label: "Price", kind: "price" },
];

function CompetitorComparisonTable() {
  return (
    <section className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm mt-16 mb-12 max-w-6xl mx-auto font-sans">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 font-serif">
          Top 5 Cordless Water Flossers Side-by-Side Comparison
        </h2>
        <p className="text-slate-600 mt-2 text-sm md:text-base font-sans">
          Detailed technical specifications, reservoir capacity, pressure ratings, nozzle suites, and long-term value compared across the UK&apos;s leading 2026 oral irrigators.
        </p>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="block lg:hidden text-center text-xs text-slate-500 font-medium mb-4 bg-slate-50 py-2 px-3 rounded-lg border border-slate-100 font-sans">
        ← Swipe horizontally to compare all 5 water flossers →
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto -mx-2 sm:mx-0">
        <table className="w-full text-left border-collapse min-w-[720px] lg:min-w-full table-fixed font-sans">
          <thead>
            <tr className="border-b-2 border-slate-200">
              <th className="py-4 px-3 sm:px-4 font-bold text-slate-900 text-xs sm:text-sm md:text-base w-[18%] bg-slate-50/50 rounded-tl-xl align-bottom font-sans">
                Feature / Metric
              </th>
              {TOP_5_COMPARISON_PRODUCTS.map((prod) => (
                <th
                  key={prod.rank}
                  className="py-4 px-2 text-center w-[16.4%] align-bottom border-l border-slate-200 bg-white"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 font-sans">
                      #{prod.rank} Ranked
                    </span>
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-2.5 flex items-center justify-center p-1 bg-slate-50 rounded-xl border border-slate-100">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        loading="lazy"
                        decoding="async"
                        className="max-h-full max-w-full object-contain"
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
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-sans">
            {TOP_5_COMPARISON_ROWS.map((row, idx) => (
              <tr
                key={row.key}
                className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
              >
                <td className="py-3.5 px-3 sm:px-4 font-semibold text-slate-800 align-middle text-xs sm:text-sm font-sans">
                  {row.label}
                </td>
                {TOP_5_COMPARISON_PRODUCTS.map((prod) => {
                  if (row.kind === "boolean") {
                    const isPassed = prod[row.key];
                    return (
                      <td
                        key={`${prod.rank}-${row.key}`}
                        className="py-3.5 px-2 text-center align-middle border-l border-slate-100"
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
                        className="py-3.5 px-2 text-center align-middle border-l border-slate-100"
                      >
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
                      </td>
                    );
                  }

                  const textVal = prod[row.key];
                  return (
                    <td
                      key={`${prod.rank}-${row.key}`}
                      className="py-3.5 px-2 text-center align-middle border-l border-slate-100"
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

export default function WaterFlossersAdvertorial() {
  const [updatedDate, setUpdatedDate] = useState(() =>
    formatLondonDate(new Date()),
  );
  const [loadingTarget, setLoadingTarget] = useState<string | null>(null);

  useEffect(() => {
    setUpdatedDate(formatLondonDate(new Date()));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0">
      <Script
        src="/assets/miroooo-x-electric-toothbrush-exit-popup.js?v=20260823-59"
        strategy="afterInteractive"
      />
      {/* Header / Hero */}
      <div className="bg-emerald-500 border-b border-emerald-600 pt-5 pb-6 px-4 md:pt-6 md:pb-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="mx-[-0.25rem] text-[clamp(1.3rem,6.6vw,2.5rem)] md:mx-0 md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 md:mb-6 font-serif text-center">
            <span className="block">Best Water Flossers UK 2026</span>
            <span className="mt-2 flex items-center justify-center gap-2 text-[0.72em] md:gap-3 font-sans">
              <MarketFlag market="uk" />
              <span>United Kingdom - 2026</span>
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2 md:gap-2.5 text-base md:text-lg font-bold text-white">
            <CheckCircle2 size={20} className="text-white shrink-0" />
            Last updated – <span suppressHydrationWarning>{updatedDate}</span>
          </div>
        </div>
      </div>

      <header className="bg-white border-b border-slate-200 pt-6 pb-12 px-4 md:pt-8 md:pb-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* 2-Layer Top 5 Comparison Hero Banner */}
          <div className="relative w-full max-w-6xl mx-auto mb-10 md:mb-12 flex items-center justify-center">
            {/* Layer 1: Background Container Bar with 4 competitors and open center space */}
            <img
              src="/img/water-flossers/top-4-competitors-container-bar.webp"
              alt="Water Flossers UK Comparison"
              className="w-full h-auto object-contain pointer-events-none"
            />

            {/* Layer 2: #1 Miroooo Water Flosser Card floating OVER the container space */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[18%] min-w-[110px] max-w-[280px]">
              <img
                src="/img/water-flossers/miroooo-water-flosser-hero-banner.webp"
                alt="Miroooo Water Flosser - #1 Best Water Flosser UK 2026"
                className="w-full aspect-[696/1087] rounded-xl sm:rounded-2xl md:rounded-3xl object-cover shadow-[0_18px_45px_rgba(0,0,0,0.32),0_8px_20px_rgba(0,0,0,0.18)] border-2 border-white ring-1 ring-slate-900/10 pointer-events-none"
              />
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.1)] max-w-5xl mx-auto border border-slate-100 text-slate-800">
            <div className="flex flex-col md:block items-center text-center md:text-left w-full">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                <Image
                  src="/img/water-flossers/dr-olivia.webp"
                  alt="Dr. Olivia"
                  width={96}
                  height={96}
                  priority
                  className="w-24 h-24 md:w-24 md:h-24 rounded-full object-cover mb-2 md:mb-0"
                />
                <div>
                  <h3 className="font-bold text-xl md:text-2xl underline text-slate-900">
                    Dr. Olivia, BDS
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-semibold mt-1">
                    Clinical Dental Consultant &amp; Oral Health Specialist
                  </p>
                </div>
              </div>

              <div className="text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                <p>
                  With <strong>over 14 years</strong> of clinical dental experience across UK practices,{" "}
                  <strong className="text-slate-900">Dr. Olivia</strong> evaluated the leading cordless water flossers for 2026 across{" "}
                  <strong>180+ hours of comparative testing</strong>. Her clinical verdict is unambiguous: traditional string flossing only cleans what it can physically touch, whereas a precision hydrodynamic water flosser penetrates deep into periodontal pockets, around orthodontic brackets, and flush beneath the gingival margin where 80% of dental decay begins. An ideal flosser must provide a reservoir large enough for a continuous 90-second session without refilling, deliver robust piston-pump pressure (up to 138 PSI) rather than a weak spray, and offer modern USB-C charging that lasts months rather than days.
                </p>
              </div>

              <hr className="border-slate-200 w-full mb-4" />

              <div className="text-xs md:text-sm italic text-slate-600 md:text-right">
                * Evaluated across UK dental clinics &amp; independent interdental laboratory tests.
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="prose prose-lg prose-slate w-full max-w-none mb-16 space-y-6">
          <p>
            <strong>Upgrading to a high-performance cordless water flosser</strong> is widely recognized by dental hygienists as the most significant step you can take to prevent gum disease, bleeding, and interdental decay. While string floss can be abrasive on sensitive papillae and clumsy to thread around dental work, modern oral irrigators shoot microscopic pressurized water jets that flush away bacterial biofilm, wash out trapped food, and stimulate micro-circulation along the gumline.
          </p>
          <p>
            However, our comparative audits revealed stark differences across popular UK models. Many legacy big-brand flossers suffer from cramped 145ml to 200ml water tanks that run out in under 45 seconds, forcing users to repeatedly pause and refill under the tap. Others top out at weak pressure levels, depend on outdated 2-pin bathroom shaver plugs that take up to 17 hours to charge, or include only two basic tips while charging exorbitant prices for refills. Below, we rank the top 5 water flossers in the UK for 2026 across real cleaning efficacy, reservoir volume, battery convenience, and overall long-term value.
          </p>
        </div>

        <EvaluationCriteria />

        {/* Products List */}
        <div className="space-y-16">
          {waterFlosserProducts.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
            />
          ))}
        </div>

        {/* Bottom Verdict Section */}
        <div className="mt-20 md:mt-24 mb-10 md:mb-12 relative max-w-sm md:max-w-5xl mx-auto">
          <div className="bg-[#f8f4e6] rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-12 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-[#e8dccb] relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-[#8b1528] mb-6 md:mb-10 font-serif tracking-wide">
              Dentist&apos;s Verdict
            </h2>

            <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4 font-serif tracking-tight">
                Miroooo Water Flosser
              </h3>

              <div className="w-28 md:w-32 h-[1px] bg-[#d4af37] mx-auto mb-5 md:mb-6"></div>

              <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6">
                &ldquo;If you want the cleanest possible gumline without the hassle of mid-session refills, Miroooo is our unanimous #1 recommendation for 2026. Its 320ml tank guarantees an uninterrupted clean, its 138 PSI piston pump outperforms legacy diaphragm units, and the 60-day USB-C battery completely eliminates messy bathroom docks.&rdquo;
              </p>

              <div className="text-2xl md:text-4xl font-bold text-[#8b1528] mb-5 md:mb-8 font-sans">
                Now at 50% off (£69)
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

              <OfficialButton
                href="https://www.trymiroooo.com/products/miroooo-water-flosser"
                targetId="verdict-cta"
                loadingTarget={loadingTarget}
                setLoadingTarget={setLoadingTarget}
                testId="flosser-verdict-cta"
                className="mx-auto w-full max-w-[280px] md:w-auto md:max-w-none !bg-gradient-to-b !from-[#1a7444] !to-[#0d4a29] hover:!from-[#145c35] hover:!to-[#0a381f] text-white text-base md:text-xl font-bold tracking-wide py-3.5 md:py-4 px-8 md:px-14 rounded-full shadow-[0_8px_20px_rgba(13,74,41,0.4)]"
              >
                CHECK AVAILABILITY
              </OfficialButton>
            </div>
          </div>
        </div>

        {/* 5-Product Side-by-Side Comparison Table */}
        <CompetitorComparisonTable />
      </main>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 md:hidden flex items-center justify-center">
        <a
          href="https://www.trymiroooo.com/products/miroooo-water-flosser"
          rel="noopener noreferrer sponsored"
          data-testid="mobile-sticky-cta"
          onClick={(event) =>
            handleOutboundClick(event, setLoadingTarget, "mobile-sticky-cta")
          }
          className="w-full text-center bg-emerald-500 text-white px-2 py-3.5 rounded-full font-bold text-[13px] sm:text-base shadow-lg shadow-emerald-500/30 whitespace-nowrap relative overflow-hidden group"
          aria-busy={loadingTarget === "mobile-sticky-cta"}
        >
          {loadingTarget === "mobile-sticky-cta" ? (
            <OutboundLoader />
          ) : (
            <>
              <span className="relative z-10">
                Take me to the winning water flosser
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
            </>
          )}
        </a>
      </div>
    </div>
  );
}
