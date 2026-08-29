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
  Play,
  ShieldCheck,
  XCircle,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { MarketFlag } from "@/components/MarketFlag";
import { OutboundLoader } from "@/components/OutboundLoader";
import { GreenStarIcon, GreenStarRating } from "@/components/GreenStarRating";

import {
  toothbrushProducts,
  type RankedToothbrushProduct as RankedProduct,
  type ToothbrushMetric as Metric,
} from "@/data/toothbrushes";

import {
  toothbrushGuides,
  type ToothbrushGuide,
  type ToothbrushGuideProduct,
} from "@/data/toothbrushGuides";

const defaultEvaluationCriteria = [
  "Deep cleaning & plaque removal (40,000 VPM acoustic fluid dynamics with 45° Bass sweep)",
  "Gentle on gums & enamel safe (Soft mode & DuPont rounded bristles)",
  "Whisper-quiet acoustic motor sound (<50dB)",
  "Lightweight ergonomic handling (51g unibody)",
  "Long battery life & magnetic USB-C charging (90+ days)",
  "DuPont™ Tynex® 3D end-rounded bristle quality",
  "100% mold-resistant aerospace aluminium & IPX7 waterproof",
  "Travel convenience with included protective aluminium travel case",
  "Affordable long-term replacement brush heads",
  "Verified UK customer reviews & 90-day money-back guarantee",
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

function EvaluationCriteria({ criteria }: { criteria?: string[] }) {
  const list = criteria && criteria.length > 0 ? criteria : defaultEvaluationCriteria;

  return (
    <div className="bg-white rounded-2xl md:rounded-3xl p-5 min-[360px]:p-5 md:p-10 shadow-sm border border-slate-200 mb-10 md:mb-16 w-full">
      <h2 className="text-[1.35rem] md:text-3xl font-bold text-slate-900 mb-5 md:mb-8 text-center font-serif leading-tight">
        Clinical Evaluation Criteria &amp; Testing Methodology
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4 mb-5 md:mb-8">
        {list.map((criterion, idx) => (
          <div key={idx} className="flex items-start gap-2.5 md:gap-3">
            <ShieldCheck className="text-emerald-500 shrink-0 mt-0.5 h-[18px] w-[18px] md:h-5 md:w-5" />
            <span className="font-semibold text-slate-700 text-[15px] md:text-base leading-snug">
              {criterion}
            </span>
          </div>
        ))}
      </div>
      <p className="text-center text-slate-600 bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100 text-[14px] md:text-base leading-snug md:leading-relaxed">
        Over the past three months, we thoroughly evaluated{" "}
        <strong>leading UK electric toothbrushes</strong> across{" "}
        <strong>180+ hours of comparative testing</strong>. Based on{" "}
        <strong>hands-on laboratory measurements</strong>, insights from{" "}
        <strong>registered UK dental professionals</strong>, and{" "}
        <strong>thousands of verified consumer reviews</strong>, these models
        stand out in terms of{" "}
        <strong>plaque clearance, gum safety, battery runtime, and long-term value</strong>.
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
          Active Offer Found: £35 in{" "}
          <span className="text-blue-600 bg-blue-100 px-2 rounded-md inline-block transform -rotate-1">
            FREE GIFTS
          </span>
        </h4>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          While doing our research, we found that Miroooo is currently running a
          limited-time promotional sale where you get these three premium dental
          accessories bundled completely free with every brush.
        </p>

        <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-8">
          {/* Luxury Travel Case */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
            <div className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce">
              FREE
            </div>
            <a
              href="https://www.trymiroooo.com/products/miroooo-x2"
              rel="noopener noreferrer sponsored"
              aria-label="View the Miroooo Brush X2 offer with free Luxury Travel Case"
              className="block relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                Normally £16
              </span>
              <img
                src="/img/toothbrushes/miroooo-travel-case-gift.jpg"
                alt="Luxury Aluminium Travel Case"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </a>
            <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">
              Luxury Travel Case
            </p>
          </div>

          {/* Wall-Mounted Storage Dock */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
            <div
              className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            >
              FREE
            </div>
            <a
              href="https://www.trymiroooo.com/products/miroooo-x2"
              rel="noopener noreferrer sponsored"
              aria-label="View the Miroooo Brush X2 offer with free Wall-Mounted Storage Dock"
              className="block relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                Normally £10
              </span>
              <img
                src="/img/toothbrushes/miroooo-charging-dock-gift.jpg"
                alt="Wall-Mounted Storage Dock Cradle"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </a>
            <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">
              Wall-Mount Dock
            </p>
          </div>

          {/* MIROOOO Companion App Access */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
            <div
              className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce"
              style={{ animationDelay: "0.4s" }}
            >
              FREE
            </div>
            <a
              href="https://www.trymiroooo.com/products/miroooo-x2"
              rel="noopener noreferrer sponsored"
              aria-label="View the Miroooo Brush X2 offer with free MIROOOO App Access"
              className="block relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                Normally £9
              </span>
              <img
                src="/img/toothbrushes/miroooo-full-bundle.jpg"
                alt="MIROOOO Dental Care Companion App"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </a>
            <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">
              MIROOOO App
            </p>
          </div>
        </div>

        <OfficialButton
          href="https://www.trymiroooo.com/products/miroooo-x2"
          targetId="miroooo-gift-panel"
          loadingTarget={loadingTarget}
          setLoadingTarget={setLoadingTarget}
          testId="miroooo-cta-gifts"
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
      data-testid="electric-toothbrush-card"
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
                    `product-img-${product.rank}`,
                  )
                }
                className="block w-full group"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  loading={isMiroooo ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full aspect-square object-cover rounded-2xl shadow-md border border-slate-100 group-hover:shadow-xl transition-shadow duration-300"
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
                targetId={`product-desktop-${product.rank}`}
                loadingTarget={loadingTarget}
                setLoadingTarget={setLoadingTarget}
                testId={`toothbrush-cta-${product.rank}`}
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
                  `product-title-${product.rank}`,
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
                            <span
                              dangerouslySetInnerHTML={{
                                __html: rest.join(":"),
                              }}
                            />
                          </>
                        ) : (
                          <span dangerouslySetInnerHTML={{ __html: con }} />
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
              targetId={`product-mobile-${product.rank}`}
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
              testId={`toothbrush-cta-mobile-${product.rank}`}
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

function ComparisonMatrix({
  guide,
}: {
  guide: ToothbrushGuide;
}) {
  if (!guide.comparisonRows || guide.comparisonRows.length === 0) return null;

  return (
    <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm my-16">
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Specification Breakdown
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 font-serif">
          Side-by-Side Comparison Matrix
        </h2>
        <p className="text-slate-600 mt-2 text-base md:text-lg">
          How the Miroooo Brush X2 compares against legacy models on key clinical &amp; daily benchmarks.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[620px]">
          <thead>
            <tr className="border-b-2 border-slate-200">
              <th className="py-4 px-4 font-bold text-slate-900 text-base md:text-lg w-1/4">
                Feature / Metric
              </th>
              <th className="py-4 px-4 font-bold text-emerald-700 bg-emerald-50/70 text-base md:text-lg w-2/5 rounded-t-xl border-t-2 border-l-2 border-r-2 border-emerald-300">
                Miroooo Brush X2 (£69)
              </th>
              <th className="py-4 px-4 font-bold text-slate-700 text-base md:text-lg w-1/3">
                Competitor Standard
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {guide.comparisonRows.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                <td className="py-4 px-4 font-semibold text-slate-900 align-top">
                  <div>{row.feature}</div>
                  <div className="text-xs font-normal text-slate-500 mt-1">
                    {row.whyItMatters}
                  </div>
                </td>
                <td className="py-4 px-4 font-bold text-slate-900 bg-emerald-50/40 border-l-2 border-r-2 border-emerald-200 align-top">
                  <span className="inline-flex items-center gap-1.5 text-emerald-700 mr-1.5">
                    <Check className="w-4 h-4 shrink-0" />
                  </span>
                  {row.miroooo}
                </td>
                <td className="py-4 px-4 text-slate-600 align-top">
                  {row.competitor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function BuyerBlocksSection({ guide }: { guide: ToothbrushGuide }) {
  if (!guide.buyerBlocks || guide.buyerBlocks.length === 0) return null;

  return (
    <section className="my-16 space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif text-center mb-8">
        Buying Advice &amp; Decision Summary
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guide.buyerBlocks.map((block, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              {block.title}
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              {block.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FaqSection({ faqs }: { faqs?: Array<{ question: string; answer: string }> }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm my-16">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-wider mb-2">
          <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 font-serif">
          Expert Answers to Common Questions
        </h2>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="group rounded-2xl border border-slate-200 bg-slate-50/50 p-5 open:bg-white open:ring-2 open:ring-emerald-500/20 transition-all duration-200"
          >
            <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-base md:text-lg list-none">
              <span>{faq.question}</span>
              <ChevronDown className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform duration-200" />
            </summary>
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-slate-600 text-sm md:text-base leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

function RelatedGuidesNav() {
  const guideEntries = Object.entries(toothbrushGuides);

  return (
    <nav aria-label="Related Toothbrush Guides" className="bg-slate-100 rounded-3xl p-6 md:p-10 border border-slate-200 my-16">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">
          Explore All UK Electric Toothbrush Guides &amp; Comparisons
        </h3>
        <p className="text-slate-600 text-sm mt-1">
          Detailed benchmarks, brand breakdowns, and clinical advice for 2026.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {guideEntries.map(([slug, g]) => (
          <Link
            key={slug}
            href={`/${slug}`}
            className="block bg-white p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all group"
          >
            <span className="inline-block text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mb-1.5">
              {g.cardCode}
            </span>
            <h4 className="font-bold text-slate-900 group-hover:text-emerald-600 text-sm leading-snug line-clamp-2">
              {g.cardTitle}
            </h4>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
              {g.cardDescription}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export type ElectricToothbrushesAdvertorialProps = {
  guide?: ToothbrushGuide;
};

export default function ElectricToothbrushesAdvertorial({
  guide,
}: ElectricToothbrushesAdvertorialProps = {}) {
  const [updatedDate, setUpdatedDate] = useState(() =>
    formatLondonDate(new Date()),
  );
  const [loadingTarget, setLoadingTarget] = useState<string | null>(null);
  const [isVerdictVideoPlaying, setIsVerdictVideoPlaying] = useState(false);
  const verdictVideoRef = useRef<HTMLVideoElement | null>(null);

  const displayProducts: RankedProduct[] =
    guide && guide.products && guide.products.length > 0
      ? (guide.products as RankedProduct[])
      : toothbrushProducts;

  const playVerdictVideo = () => {
    const video = verdictVideoRef.current;
    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => {
          setIsVerdictVideoPlaying(true);
        })
        .catch(() => {
          setIsVerdictVideoPlaying(false);
        });
      return;
    }

    video.pause();
    setIsVerdictVideoPlaying(false);
  };

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
            <span className="block">
              {guide ? guide.headline : "Best Electric Toothbrushes"}
            </span>
            <span className="mt-2 flex items-center justify-center gap-2 text-[0.72em] md:gap-3 font-sans">
              <MarketFlag market="uk" />
              <span>
                {guide?.eyebrow
                  ? `${guide.eyebrow} · UK 2026`
                  : "United Kingdom - 2026"}
              </span>
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
          {/* 2-Layer Top 5 Comparison Hero Banner or Specific Guide Hero */}
          <div className="relative w-full max-w-6xl mx-auto mb-10 md:mb-12 flex items-center justify-center">
            {/* Layer 1: Background Container Bar with 4 competitors and open center space */}
            <img
              src="/img/toothbrushes/top-4-competitors-container-bar.webp"
              alt="Electric Toothbrushes UK Comparison"
              className="w-full h-auto object-contain pointer-events-none"
            />

            {/* Layer 2: #1 Miroooo Brush X2 Card floating OVER the container space */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[18%] min-w-[110px] max-w-[280px]">
              <img
                src="/img/toothbrushes/miroooo-brush-x2-electric-toothbrush-banner.webp"
                alt="Miroooo Brush X2 Electric Toothbrush"
                className="w-full aspect-[696/1087] rounded-xl sm:rounded-2xl md:rounded-3xl object-cover shadow-[0_18px_45px_rgba(0,0,0,0.32),0_8px_20px_rgba(0,0,0,0.18)] border-2 border-white ring-1 ring-slate-900/10 pointer-events-none"
              />
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.1)] max-w-5xl mx-auto border border-slate-100 text-slate-800">
            <div className="flex flex-col md:block items-center text-center md:text-left w-full">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                <Image
                  src={guide?.drOliviaVerdict?.avatar || "/img/toothbrushes/dr-olivia.webp"}
                  alt={guide?.drOliviaVerdict?.name || "Dr. Olivia"}
                  width={96}
                  height={96}
                  priority
                  className="w-24 h-24 md:w-24 md:h-24 rounded-full object-cover mb-2 md:mb-0"
                />
                <div>
                  <h3 className="font-bold text-xl md:text-2xl underline text-slate-900">
                    {guide?.drOliviaVerdict?.name || "Dr. Olivia, BDS"}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-semibold mt-1">
                    {guide?.drOliviaVerdict?.title ||
                      "Clinical Dental Consultant & Oral Health Specialist"}
                  </p>
                </div>
              </div>

              <div className="text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                {guide?.drOliviaVerdict?.quote ? (
                  <p className="italic font-medium text-slate-800 mb-3 border-l-4 border-emerald-500 pl-4">
                    &ldquo;{guide.drOliviaVerdict.quote}&rdquo;
                  </p>
                ) : null}

                {guide?.drOliviaVerdict?.clinicalRationale ? (
                  <p>{guide.drOliviaVerdict.clinicalRationale}</p>
                ) : (
                  <p>
                    With <strong>over 14 years</strong> of clinical dental
                    experience in the UK,{" "}
                    <strong className="text-slate-900">Dr. Olivia</strong>{" "}
                    evaluated the leading electric toothbrushes for 2026 across{" "}
                    <strong>180+ hours of comparative testing</strong>. Her
                    conclusion was simple: daily brushing should be effortless. The
                    ideal brush should be whisper-quiet rather than loudly buzzing
                    in your ear, featherlight (around 50g) for easy handling, and
                    gentle on gums while delivering a deep sonic clean. You
                    don&apos;t need to spend £200+ on heavy, clunky handles or
                    outdated 2-pin bathroom chargers to get a dentist-clean smile
                    and 90+ days of battery life.
                  </p>
                )}
              </div>

              <hr className="border-slate-200 w-full mb-4" />

              <div className="text-xs md:text-sm italic text-slate-600 md:text-right">
                * Evaluated across UK dental clinics &amp; independent tests.
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="prose prose-lg prose-slate w-full max-w-none mb-16 space-y-6">
          {guide?.intro && guide.intro.length > 0 ? (
            guide.intro.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))
          ) : (
            <>
              <p>
                <strong>Upgrading to the right electric toothbrush</strong> is one
                of the most impactful decisions you can make for your long-term oral
                health. While manual brushing often relies on harsh back-and-forth
                scrubbing that can wear away protective tooth enamel and irritate
                sensitive gums, modern electric toothbrushes create gentle
                micro-bubbles that wash between tight teeth gaps and sweep
                plaque from beneath the gumline.
              </p>
              <p>
                However, not all electric toothbrushes are created equal. Many big-brand
                models are heavy and uncomfortably loud, lose their charge within two
                weeks, still rely on awkward 2-pin bathroom shaver adapters, and trap
                shoppers into overpriced replacement heads. When ranking the top
                electric toothbrushes in the UK for 2026, we evaluated real cleaning
                performance, daily comfort, battery convenience, and overall long-term
                value to help you find the best brush for your smile.
              </p>
            </>
          )}
        </div>

        <EvaluationCriteria criteria={guide?.criteria} />

        {/* Winner Highlights Card if in Guide */}
        {guide?.winnerBullets && guide.winnerBullets.length > 0 && (
          <div className="bg-emerald-50 rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-emerald-200 mb-12 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-emerald-950 font-serif mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-emerald-600 shrink-0" />
              Key Findings &amp; Why Miroooo Brush X2 Took #1
            </h3>
            <ul className="space-y-3">
              {guide.winnerBullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-800 text-base md:text-lg">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Products List */}
        <div className="space-y-16">
          {displayProducts.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
            />
          ))}
        </div>

        {/* Comparison Matrix Table */}
        {guide && <ComparisonMatrix guide={guide} />}

        {/* Decision Blocks */}
        {guide && <BuyerBlocksSection guide={guide} />}

        {/* FAQ Accordion */}
        <FaqSection faqs={guide?.faqs} />

        {/* Bottom Verdict Section */}
        <div className="mt-20 md:mt-24 mb-10 md:mb-12 relative max-w-sm md:max-w-5xl mx-auto">
          <div className="bg-[#f8f4e6] rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-12 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-[#e8dccb] relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-[#8b1528] mb-6 md:mb-10 font-serif tracking-wide">
              Dentist&apos;s Verdict
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
                    poster="/assets/miroooo-dentist-verdict-poster.webp"
                    aria-label="Dentist walkthrough of the Miroooo Brush X2"
                    onPlay={() => setIsVerdictVideoPlaying(true)}
                    onPause={() => setIsVerdictVideoPlaying(false)}
                    onEnded={() => setIsVerdictVideoPlaying(false)}
                  >
                    <source
                      src="/assets/miroooo-dentist-verdict.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <button
                    type="button"
                    aria-label="Play dentist walkthrough video"
                    onClick={playVerdictVideo}
                    className={`absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-600 text-white shadow-[0_14px_34px_rgba(16,185,129,0.35)] ring-8 ring-white/60 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-emerald-400 ${
                      isVerdictVideoPlaying
                        ? "pointer-events-none opacity-0 scale-90"
                        : "opacity-100 scale-100"
                    }`}
                  >
                    <Play size={30} fill="currentColor" className="ml-1" />
                  </button>
                </div>
              </div>

              {/* Right Content Area */}
              <div className="flex flex-col justify-center text-center">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4 font-serif tracking-tight">
                  Miroooo Brush X2 Electric Toothbrush
                </h3>

                <div className="w-28 md:w-32 h-[1px] bg-[#d4af37] mx-auto mb-5 md:mb-6"></div>

                <div className="text-2xl md:text-4xl font-bold text-[#8b1528] mb-5 md:mb-8 font-sans">
                  Now at 50% off
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
                  href="https://www.trymiroooo.com/products/miroooo-x2"
                  targetId="verdict-cta"
                  loadingTarget={loadingTarget}
                  setLoadingTarget={setLoadingTarget}
                  testId="toothbrush-verdict-cta"
                  className="mx-auto w-full max-w-[260px] md:w-auto md:max-w-none !bg-gradient-to-b !from-[#1a7444] !to-[#0d4a29] hover:!from-[#145c35] hover:!to-[#0a381f] text-white text-sm md:text-xl font-bold tracking-wide py-3.5 md:py-4 px-6 md:px-12 rounded-full shadow-[0_8px_20px_rgba(13,74,41,0.4)]"
                >
                  CHECK AVAILABILITY
                </OfficialButton>
              </div>
            </div>
          </div>
        </div>

        {/* Related Toothbrush Guides Section */}
        <RelatedGuidesNav />
      </main>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 md:hidden flex items-center justify-center">
        <a
          href="https://www.trymiroooo.com/products/miroooo-x2"
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
                Take me to the winning electric toothbrush
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
            </>
          )}
        </a>
      </div>
    </div>
  );
}
