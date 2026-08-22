"use client";

import Image from "next/image";
import { motion } from "motion/react";
import React, {
  useEffect,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import {
  Award,
  Check,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { MarketFlag } from "@/components/MarketFlag";
import { OutboundLoader } from "@/components/OutboundLoader";
import { GreenStarIcon, GreenStarRating } from "@/components/GreenStarRating";

import {
  toothbrushProducts,
  type RankedToothbrushProduct as RankedProduct,
  type ToothbrushMetric as Metric,
} from "@/data/toothbrushes";

const evaluationCriteria = [
  "Lightweight & ergonomic design (51g aerospace aluminium body)",
  "Whisper-quiet acoustic motor operation (<50dB noise level)",
  "60+ day battery runtime & universal USB-C fast charging",
  "Long-term value, affordable refills & £60.85 gift bundle",
  "Acoustic levitation plaque & biofilm removal (40,000+ VPM)",
  "Smart gum protection & high-density DuPont rounded bristles",
  "Hygienic mold-resistant unibody construction",
  "Travel portability & included magnetic charging dock",
  "Verified UK Trustpilot ratings & buyer satisfaction",
  "Best overall price-to-performance ratio for UK consumers",
];

const products: RankedProduct[] = toothbrushProducts;

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
        We evaluated electric toothbrushes based on 10 criteria
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4 mb-5 md:mb-8">
        {evaluationCriteria.map((criterion, idx) => (
          <div key={idx} className="flex items-start gap-2.5 md:gap-3">
            <ShieldCheck className="text-emerald-500 shrink-0 mt-0.5 h-[18px] w-[18px] md:h-5 md:w-5" />
            <span className="font-semibold text-slate-700 text-[15px] md:text-base leading-snug">
              {criterion}
            </span>
          </div>
        ))}
      </div>
      <p className="text-center text-slate-600 bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100 text-[14px] md:text-base leading-snug md:leading-relaxed">
        Over the past three months, we have thoroughly tested{" "}
        <strong>leading electric toothbrushes</strong>. Based on{" "}
        <strong>hands-on evaluations</strong>, insights from{" "}
        <strong>registered dental professionals</strong>, and{" "}
        <strong>hundreds of consumer reviews</strong>, the following five
        models stood out as the best in terms of{" "}
        <strong>cleaning performance, gum safety, battery runtime, and long-term value</strong>.
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
          Active Offer Found: £60.85 in{" "}
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
          {/* Magnetic Charging Dock */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
            <div className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce">
              FREE
            </div>
            <a
              href="#"
              rel="noopener noreferrer sponsored"
              aria-label="View the Miroooo X offer with free Magnetic Charging Dock"
              className="block relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                Normally £24.95
              </span>
              <img
                src="/img/toothbrushes/miroooo-charging-dock-gift.jpg"
                alt="Magnetic Charging Dock"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </a>
            <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">
              Magnetic Dock
            </p>
          </div>

          {/* Aluminium Travel Case */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
            <div
              className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            >
              FREE
            </div>
            <a
              href="#"
              rel="noopener noreferrer sponsored"
              aria-label="View the Miroooo X offer with free Aluminium Travel Case"
              className="block relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                Normally £15.95
              </span>
              <img
                src="/img/toothbrushes/miroooo-travel-case-gift.jpg"
                alt="Aluminium Travel Case"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </a>
            <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">
              Aluminium Travel Case
            </p>
          </div>

          {/* 2x DuPont Brush Heads */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
            <div
              className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce"
              style={{ animationDelay: "0.4s" }}
            >
              FREE
            </div>
            <a
              href="#"
              rel="noopener noreferrer sponsored"
              aria-label="View the Miroooo X offer with free 2x DuPont Replacement Heads"
              className="block relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                Normally £19.95
              </span>
              <img
                src="/img/toothbrushes/miroooo-full-bundle.jpg"
                alt="2x DuPont Brush Heads"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </a>
            <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">
              2x DuPont Heads
            </p>
          </div>
        </div>

        <OfficialButton
          href="#"
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
      {isMiroooo && (
        <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm tracking-wide uppercase flex items-center gap-1.5 md:gap-2 shadow-lg z-10 whitespace-nowrap">
          <Award size={16} className="md:w-[18px] md:h-[18px]" />
          #1 Editor&apos;s Choice
        </div>
      )}

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
              #{product.rank} {product.name}
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
              #{product.rank} {product.name}
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

export default function ElectricToothbrushesAdvertorial() {
  const [updatedDate, setUpdatedDate] = useState(() =>
    formatLondonDate(new Date()),
  );
  const [loadingTarget, setLoadingTarget] = useState<string | null>(null);

  useEffect(() => {
    setUpdatedDate(formatLondonDate(new Date()));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0">
      {/* Header / Hero */}
      <div className="bg-emerald-500 border-b border-emerald-600 pt-5 pb-6 px-4 md:pt-6 md:pb-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="mx-[-0.25rem] text-[clamp(1.3rem,6.6vw,2.5rem)] md:mx-0 md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 md:mb-6 font-serif text-center">
            <span className="block">Best Electric Toothbrushes</span>
            <span className="mt-2 flex items-center justify-center gap-2 text-[0.72em] md:gap-3">
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

      <header className="bg-white border-b border-slate-200 pt-10 pb-12 px-4 md:pt-12 md:pb-16">
        <div className="max-w-6xl mx-auto text-center">
          <Image
            src="/img/toothbrushes/top-5-electric-toothbrushes-uk.webp"
            alt="Top 5 electric toothbrushes comparison for United Kingdom"
            width={1536}
            height={461}
            priority
            className="w-full max-w-5xl mx-auto aspect-[1536/461] object-cover rounded-3xl shadow-xl border border-slate-100 mb-10 md:mb-12"
          />

          <div className="bg-white p-6 md:p-8 rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.1)] max-w-5xl mx-auto border border-slate-100 text-slate-800">
            <div className="flex flex-col md:block items-center text-center md:text-left w-full">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                <Image
                  src="/img/grounding-sheets/dr-image.webp"
                  alt="Dr. Marcus Vance"
                  width={96}
                  height={96}
                  priority
                  className="w-24 h-24 md:w-24 md:h-24 rounded-full object-cover mb-2 md:mb-0"
                />
                <div>
                  <h3 className="font-bold text-xl md:text-2xl underline text-slate-900">
                    Dr. Marcus Vance, BDS (Hons)
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-semibold mt-1">
                    Clinical Dental Consultant &amp; Oral Health Specialist
                  </p>
                </div>
              </div>

              <div className="text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                <p>
                  With <strong>over 14 years</strong> of clinical dental surgery
                  experience across the UK,{" "}
                  <strong className="text-slate-900">Dr. Marcus Vance</strong> is
                  a specialist in preventative periodontics and oral biofilm
                  management. He conducted a rigorous 180+ hour comparative
                  evaluation of leading electric toothbrushes available to
                  British shoppers in 2026. He benchmarked acoustic vibrational
                  motors, plaque disruption depth, bristle tip rounding,
                  enamel safety, battery runtime, UK 2-pin bathroom shaver socket
                  compatibility, and long-term refill head costs. His primary
                  conclusion was clear: the highest price tag does not guarantee a
                  superior clean. The winning brushes combined high acoustic
                  levitation power with gentle gum protection, hassle-free
                  universal USB-C charging, and fair ongoing head replacement
                  costs.
                </p>
              </div>

              <hr className="border-slate-200 w-full mb-4" />

              <div className="text-xs md:text-sm italic text-slate-600 md:text-right">
                * Recommended based on clinical testing metrics and independent
                buyer feedback.
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="prose prose-lg prose-slate w-full max-w-none mb-16 space-y-6">
          <p>
            <strong>Modern acoustic electric toothbrushes</strong> represent a
            major evolution in daily dental hygiene. During clinical
            assessments, sonic levitation motors operating above 40,000
            vibrations per minute consistently demonstrated superior fluid
            dynamic plaque disruption compared to manual brushing and
            low-frequency vibrators. The high-speed micro-bubbles actively
            penetrate between interdental spaces and beneath the gumline,
            helping{" "}
            <strong>
              dislodge stubborn plaque, reduce gingival bleeding, and lift
              surface stains without abrasive enamel wear
            </strong>
            .
          </p>
          <p>
            When selecting the top electric toothbrushes in the UK, we{" "}
            <strong>prioritized acoustic motor engineering</strong>, bristle tip
            polishing, battery endurance, and practical travel convenience.
            Whether you want to eliminate 2-pin shaver adapters or upgrade your
            daily gum protection, our in-depth 2026 rankings below provide a
            clear, unbiased breakdown to help you invest wisely in your long-term
            oral health.
          </p>
        </div>

        <EvaluationCriteria />

        {/* Products List */}
        <div className="space-y-16">
          {products.map((product) => (
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              {/* Left Product Image / Hero Area */}
              <div className="relative">
                <div className="relative mx-auto max-w-[220px] min-[380px]:max-w-[250px] sm:max-w-[280px] md:max-w-[320px] overflow-hidden rounded-[1.35rem] md:rounded-[1.75rem] border border-[#dfd1bd] bg-white p-3 shadow-xl">
                  <Image
                    src="/img/toothbrushes/miroooo-x-sonic-toothbrush.jpg"
                    alt="Miroooo X Sonic Electric Toothbrush"
                    width={500}
                    height={500}
                    className="aspect-square w-full rounded-2xl object-cover"
                  />
                  <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-sm">
                    #1 Top Pick
                  </div>
                </div>
                <p className="mt-4 text-center text-xs md:text-sm font-medium text-gray-600 leading-snug max-w-[260px] md:max-w-none mx-auto">
                  51g aerospace aluminium body, &lt;50dB whisper-quiet motor, 60+ day USB-C battery &amp; £60.85 free gift bundle.
                </p>
              </div>

              {/* Right Content Area */}
              <div className="flex flex-col justify-center text-center">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4 font-serif tracking-tight">
                  Miroooo X Sonic Toothbrush
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
                  href="#"
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
      </main>

      <footer className="mt-0 border-t border-slate-200 bg-white px-4 py-10 shadow-inner">
        <div className="mx-auto max-w-6xl text-center text-sm text-slate-500">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-4 border-b border-slate-100 pb-4 text-xs">
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
          <p className="mb-2 text-lg font-bold text-slate-800">
            Best Electric Toothbrushes
          </p>
          <p className="mb-6">
            © 2026 Best Electric Toothbrushes. All rights reserved.
          </p>
          <div className="mx-auto mb-6 max-w-3xl rounded-lg border border-amber-200 bg-amber-50 p-7 text-left text-sm leading-relaxed text-slate-700">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-amber-700">
              Important disclosure
            </p>
            <p className="mb-4">
              <strong>Affiliate disclosure:</strong> We may receive compensation
              for clicks on or purchases of products featured on this site. This
              comes at no additional cost to you.
            </p>
            <p>
              <strong>Individual results:</strong> Experiences with electric
              toothbrushes and oral care devices vary. Product information and
              examples do not guarantee a particular result.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 md:hidden flex items-center justify-center">
        <a
          href="#"
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
