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
  Check,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  XCircle,
  HelpCircle,
  Sparkles,
  ExternalLink,
  Info,
} from "lucide-react";
import { MarketFlag } from "@/components/MarketFlag";
import { OutboundLoader } from "@/components/OutboundLoader";
import { GreenStarIcon, GreenStarRating } from "@/components/GreenStarRating";

import {
  pillowProducts,
  type RankedPillowProduct as RankedProduct,
  type PillowMetric as Metric,
  type PillowGuideData,
  defaultPillowGuide,
  defaultPillowCriteria,
  TOP_5_PILLOW_COMPARISON_PRODUCTS,
  TOP_5_PILLOW_COMPARISON_ROWS,
  checkedDate,
} from "@/data/pillows";

const attributionQueryKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "msclkid",
  "gclid",
  "fbclid",
] as const;

type TrackingWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
  uetq?: {
    push: (...args: unknown[]) => unknown;
  };
};

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
  try {
    const destination = new URL(event.currentTarget.href, window.location.href);
    const current = new URL(window.location.href);
    attributionQueryKeys.forEach((key) => {
      const value = current.searchParams.get(key);
      if (value && !destination.searchParams.has(key)) {
        destination.searchParams.set(key, value);
      }
    });

    if (!destination.searchParams.has("utm_source")) {
      destination.searchParams.set("utm_source", "trustpilotreview");
    }
    if (!destination.searchParams.has("utm_medium")) {
      destination.searchParams.set("utm_medium", "comparison");
    }
    if (!destination.searchParams.has("utm_campaign")) {
      destination.searchParams.set(
        "utm_campaign",
        "best_pillow_for_side_sleepers_uk_2026",
      );
    }
    destination.searchParams.set("ref", "trustpilotreview");

    event.currentTarget.href = destination.toString();

    const trackingWindow = window as TrackingWindow;
    const payload = {
      event_category: "comparison",
      event_label: target,
      product: "Sleeping CloudAlign Pillow",
      outbound_url: destination.toString(),
      page_type: "best_pillow_for_side_sleepers_uk_2026",
    };

    trackingWindow.dataLayer = trackingWindow.dataLayer ?? [];
    trackingWindow.dataLayer.push({
      event: "sleeping_outbound_click",
      ecommerce: null,
      ...payload,
    });
    trackingWindow.dataLayer.push({
      event: "affiliate_click",
      ...payload,
    });
    trackingWindow.uetq?.push("event", "sleeping_outbound_click", payload);
    trackingWindow.uetq?.push("event", "affiliate_click", payload);
  } catch {
    // Keep native link navigation if attribution parsing fails
  }

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
  const list =
    criteria && criteria.length > 0 ? criteria : defaultPillowCriteria;

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
        Over the past three months, our sleep editorial team evaluated{" "}
        <strong>leading UK side-sleeper pillows</strong> across{" "}
        <strong>150+ hours of physical testing</strong>. Based on{" "}
        <strong>cervical biomechanics measurements</strong>, clinical guidance from{" "}
        <strong>registered UK chiropractors &amp; sleep specialists</strong>, and{" "}
        <strong>thousands of verified consumer reviews</strong>, these models
        stand out in terms of{" "}
        <strong>spinal alignment, shoulder relief, breathability, and long-term durability</strong>.
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

function PackagePanel({
  loadingTarget,
  setLoadingTarget,
  ctaUrl,
}: {
  loadingTarget: string | null;
  setLoadingTarget: (target: string) => void;
  ctaUrl: string;
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
          <span className="text-lg">📦</span> Included in Package
        </div>

        <h4 className="font-extrabold text-2xl md:text-3xl text-gray-900 mb-4 leading-tight">
          What&apos;s Inside{" "}
          <span className="text-blue-600 bg-blue-100 px-2 rounded-md inline-block transform -rotate-1">
            Your Package
          </span>
        </h4>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          Every Sleeping CloudAlign Pillow order includes these premium components for full orthopaedic neck and shoulder support.
        </p>

        <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-8">
          {/* CloudAlign Pillow */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
            <a
              href={ctaUrl}
              rel="noopener noreferrer sponsored"
              aria-label="View the Sleeping CloudAlign Pillow package"
              onClick={(event) =>
                handleOutboundClick(
                  event,
                  setLoadingTarget,
                  "sleeping-package-pillow",
                )
              }
              className="block relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <img
                src="/img/pillows/juujo-cloudalign.png"
                alt="Sleeping CloudAlign Ergonomic 6-Zone Memory Foam Pillow"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </a>
            <p className="font-extrabold text-gray-900 text-[10px] sm:text-base leading-tight">
              CloudAlign Pillow
            </p>
          </div>

          {/* Breathable Cooling Cover */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
            <a
              href={ctaUrl}
              rel="noopener noreferrer sponsored"
              aria-label="View the Sleeping Pillow with Breathable Washable Cover"
              onClick={(event) =>
                handleOutboundClick(
                  event,
                  setLoadingTarget,
                  "sleeping-package-cover",
                )
              }
              className="block relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <img
                src="/img/pillows/juujo-colours-approved.png"
                alt="Sleeping Breathable Washable Knit Cover in Multiple Colours"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </a>
            <p className="font-extrabold text-gray-900 text-[10px] sm:text-base leading-tight">
              Washable Soft Cover
            </p>
          </div>

          {/* 90-Night In-Home Trial */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative">
            <a
              href={ctaUrl}
              rel="noopener noreferrer sponsored"
              aria-label="View the 90-Night Risk-Free In-Home Trial Guarantee"
              onClick={(event) =>
                handleOutboundClick(
                  event,
                  setLoadingTarget,
                  "sleeping-package-trial",
                )
              }
              className="block relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <img
                src="/img/pillows/juujo-model.png"
                alt="90-Night Risk-Free In-Home Trial Guarantee"
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover"
              />
            </a>
            <p className="font-extrabold text-gray-900 text-[10px] sm:text-base leading-tight">
              90-Night Trial Guarantee
            </p>
          </div>
        </div>

        <OfficialButton
          href={ctaUrl}
          targetId="sleeping-package-panel"
          loadingTarget={loadingTarget}
          setLoadingTarget={setLoadingTarget}
          testId="sleeping-cta-package"
          className="w-full !bg-blue-600 hover:!bg-blue-700 !shadow-blue-600/30 !border-2 !border-blue-500"
        >
          Check Availability &amp; Claim 50% Off
        </OfficialButton>
      </div>
    </motion.div>
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
  const isWinner = Boolean(product.isWinner);

  return (
    <article
      id={`rank-${product.rank}`}
      data-testid="pillow-card"
      data-product-rank={product.rank}
      className={`relative bg-white rounded-3xl shadow-sm border ${
        isWinner
          ? "border-emerald-500 ring-4 ring-emerald-50 pt-10 md:pt-10"
          : "border-slate-200"
      } p-6 md:p-10 pt-20 md:pt-24 scroll-mt-28`}
    >
      <RankRibbon rank={`#${product.rank}`} featured={isWinner} />

      {isWinner && (
        <div className="absolute right-5 top-5 md:right-8 md:top-7 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs md:text-sm font-extrabold uppercase text-emerald-700 border border-emerald-200">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          Editor&apos;s choice
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16">
        {/* Left Column: Image & Quick Stats */}
        <aside className="lg:col-span-4 flex flex-col items-center">
          <div className="lg:sticky lg:top-8 w-full flex flex-col items-center">
            <h2
              className={`text-2xl font-bold text-slate-900 mb-6 text-center lg:hidden ${
                isWinner ? "mt-3" : ""
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
                  alt={product.imageAlt || product.name}
                  loading={isWinner ? "eager" : "lazy"}
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
                forceFull={isWinner}
                size={24}
                className="mb-2"
              />
              <p className="text-sm font-medium text-slate-500">
                Editorial score {product.rating.toFixed(1)} / 5
              </p>
              {product.availabilityNote && (
                <p className="mt-2 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full inline-block border border-amber-200">
                  {product.availabilityNote}
                </p>
              )}
            </div>

            <div className="w-full hidden lg:block">
              {isWinner ? (
                <OfficialButton
                  href={product.ctaUrl}
                  targetId={`product-desktop-${product.rank}`}
                  loadingTarget={loadingTarget}
                  setLoadingTarget={setLoadingTarget}
                  testId={`pillow-cta-${product.rank}`}
                  className="w-full"
                >
                  {product.ctaLabel}
                </OfficialButton>
              ) : (
                <a
                  href={product.ctaUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-slate-800 px-7 py-4 text-base font-bold text-white transition hover:bg-slate-950"
                >
                  {product.ctaLabel}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </aside>

        {/* Right Column: Details */}
        <div className="lg:col-span-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3 hidden lg:block font-serif">
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

          <div className="mb-4 hidden lg:block">
            <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-extrabold uppercase text-emerald-700 border border-emerald-200">
              {product.badge}
            </span>
          </div>

          <p className="text-lg font-bold leading-relaxed text-slate-800 mb-4">
            {product.bestFor}
          </p>

          <div className="prose prose-slate prose-lg max-w-none mb-8 space-y-4">
            {product.review.map((paragraph, pIdx) => (
              <p
                key={pIdx}
                className="text-slate-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>

          {/* Key Facts Specifications */}
          <div className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-200 mb-8">
            <h4 className="font-bold text-slate-900 mb-4 text-lg">
              Key Product Facts &amp; Specifications
            </h4>
            <dl className="grid gap-3 sm:grid-cols-2">
              {product.specifications.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700"
                >
                  <dt className="mb-1 font-extrabold text-slate-900">
                    {label}
                  </dt>
                  <dd className="leading-snug">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Performance Metrics */}
          <div className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-100 mb-8">
            <h4 className="font-bold text-slate-900 mb-6 text-lg">
              Biomechanics &amp; Ergonomics Performance
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

          {product.whyBelowWinner && (
            <div className="mb-8 rounded-2xl border-l-4 border-emerald-500 bg-emerald-50/30 p-5 border border-slate-200">
              <p className="mb-1 text-sm font-black uppercase text-emerald-800">
                Why it ranks below Sleeping
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                {product.whyBelowWinner}
              </p>
            </div>
          )}

          {isWinner && (
            <PackagePanel
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
              ctaUrl={product.ctaUrl}
            />
          )}

          <div className="w-full mt-8 lg:hidden">
            {isWinner ? (
              <OfficialButton
                href={product.ctaUrl}
                targetId={`product-mobile-${product.rank}`}
                loadingTarget={loadingTarget}
                setLoadingTarget={setLoadingTarget}
                testId={`pillow-cta-mobile-${product.rank}`}
                className="w-full"
              >
                {product.ctaLabel}
              </OfficialButton>
            ) : (
              <a
                href={product.ctaUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-slate-800 px-7 py-4 text-base font-bold text-white"
              >
                {product.ctaLabel}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function CompetitorComparisonTable() {
  return (
    <section className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm mt-16 mb-12 max-w-6xl mx-auto font-sans">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Specification Breakdown
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 font-serif">
          Top 5 Side Sleeper Pillows Side-by-Side Comparison
        </h2>
        <p className="text-slate-600 mt-2 text-sm md:text-base font-sans">
          Detailed anatomical dimensions, loft choices, pressure relief features, and trial policies compared across the UK&apos;s leading 2026 side-sleeper pillows.
        </p>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="block lg:hidden text-center text-xs text-slate-500 font-medium mb-4 bg-slate-50 py-2 px-3 rounded-lg border border-slate-100 font-sans">
        ← Swipe horizontally to compare all 5 pillows →
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto -mx-2 sm:mx-0">
        <table className="w-full text-left border-collapse min-w-[720px] lg:min-w-full table-fixed font-sans">
          <thead>
            <tr className="border-b-2 border-slate-200">
              <th className="py-4 px-3 sm:px-4 font-bold text-slate-900 text-xs sm:text-sm md:text-base w-[18%] bg-slate-50/50 rounded-tl-xl align-bottom font-sans">
                Feature / Metric
              </th>
              {TOP_5_PILLOW_COMPARISON_PRODUCTS.map((prod) => (
                <th
                  key={prod.rank}
                  className={`py-4 px-2 text-center w-[16.4%] align-bottom border-l border-slate-200 ${
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
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-2.5 flex items-center justify-center p-1 bg-white rounded-xl border border-slate-200 shadow-sm">
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
            {TOP_5_PILLOW_COMPARISON_ROWS.map((row, idx) => (
              <tr
                key={row.key}
                className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
              >
                <td className="py-3.5 px-3 sm:px-4 font-semibold text-slate-800 align-middle text-xs sm:text-sm font-sans">
                  {row.label}
                </td>
                {TOP_5_PILLOW_COMPARISON_PRODUCTS.map((prod) => {
                  if (row.kind === "boolean") {
                    const isPassed = prod[row.key];
                    return (
                      <td
                        key={`${prod.rank}-${row.key}`}
                        className={`py-3.5 px-2 text-center align-middle border-l border-slate-100 ${
                          prod.rank === 1 ? "bg-emerald-50/30 font-bold" : ""
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
                          prod.rank === 1 ? "bg-emerald-50/30" : ""
                        }`}
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
                      className={`py-3.5 px-2 text-center align-middle border-l border-slate-100 ${
                        prod.rank === 1 ? "bg-emerald-50/30 font-bold text-emerald-950" : ""
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

function BuyerBlocksSection({ guide }: { guide: PillowGuideData }) {
  if (!guide.buyerBlocks || guide.buyerBlocks.length === 0) return null;

  return (
    <section className="my-16 space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif text-center mb-8">
        Buying Advice &amp; Side-Sleeper Decision Guide
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
          Expert Answers to Common Sleep Questions
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

export type PillowsAdvertorialProps = {
  guide?: PillowGuideData;
};

export default function PillowsAdvertorial({
  guide = defaultPillowGuide,
}: PillowsAdvertorialProps = {}) {
  const [updatedDate, setUpdatedDate] = useState(() =>
    formatLondonDate(new Date()),
  );
  const [loadingTarget, setLoadingTarget] = useState<string | null>(null);

  const displayProducts: RankedProduct[] = pillowProducts;

  useEffect(() => {
    setUpdatedDate(formatLondonDate(new Date()));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0">
      {/* Header / Hero */}
      <div className="bg-emerald-500 border-b border-emerald-600 pt-5 pb-6 px-4 md:pt-6 md:pb-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="mx-[-0.25rem] text-[clamp(1.3rem,6.6vw,2.5rem)] md:mx-0 md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 md:mb-6 font-serif text-center">
            <span className="block">
              {guide ? guide.headline : "Best Pillows for Side Sleepers"}
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
          {/* Top 5 Comparison Hero Banner */}
          <div className="relative w-full max-w-5xl mx-auto mb-10 md:mb-12 flex items-center justify-center">
            <img
              src="/img/pillows/juujo-bedroom.png"
              alt="Best Side-Sleeper Pillows UK 2026 Comparison"
              className="w-full aspect-[16/7] rounded-2xl sm:rounded-3xl object-cover shadow-xl border border-slate-100"
            />
          </div>

          {/* Sleep Biomechanics Specialist Card */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] max-w-5xl mx-auto border border-slate-100 text-slate-800">
            <div className="flex flex-col md:block items-center text-center md:text-left w-full">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                <Image
                  src={
                    guide?.sleepSpecialistVerdict?.avatar ||
                    "/img/pillows/juujo-model.png"
                  }
                  alt={
                    guide?.sleepSpecialistVerdict?.name
                      ? `${guide.sleepSpecialistVerdict.name} - ${guide.sleepSpecialistVerdict.title}`
                      : "Dr. Marcus Vance - Consultant Chiropractor & Sleep Ergonomics Specialist"
                  }
                  width={96}
                  height={96}
                  priority
                  className="w-24 h-24 md:w-24 md:h-24 rounded-full object-cover mb-2 md:mb-0 border-2 border-emerald-100"
                />
                <div>
                  <h3 className="font-bold text-xl md:text-2xl underline text-slate-900">
                    {guide?.sleepSpecialistVerdict?.name || "Dr. Marcus Vance, MChiro"}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-semibold mt-1">
                    {guide?.sleepSpecialistVerdict?.title ||
                      "Consultant Chiropractor & Sleep Ergonomics Specialist"}
                  </p>
                </div>
              </div>

              <div className="text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                {guide?.sleepSpecialistVerdict?.quote ? (
                  <p className="italic font-medium text-slate-800 mb-3 border-l-4 border-emerald-500 pl-4 text-left">
                    &ldquo;{guide.sleepSpecialistVerdict.quote}&rdquo;
                  </p>
                ) : null}

                <p className="text-left">
                  {guide?.sleepSpecialistVerdict?.clinicalRationale}
                </p>
              </div>

              <hr className="border-slate-200 w-full mb-4" />

              <div className="text-xs md:text-sm italic text-slate-600 md:text-right">
                * Evaluated across UK chiropractic clinics &amp; independent biomechanical sleep tests.
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Intro */}
        {guide?.intro && guide.intro.length > 0 && (
          <div className="prose prose-lg prose-slate w-full max-w-none mb-16 space-y-6">
            {guide.intro.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        <EvaluationCriteria criteria={guide?.criteria} />

        {/* Winner Highlights Card */}
        {guide?.winnerBullets && guide.winnerBullets.length > 0 && (
          <div className="bg-emerald-50 rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-emerald-200 mb-12 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-emerald-950 font-serif mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-emerald-600 shrink-0" />
              Key Findings &amp; Why Sleeping CloudAlign Took #1
            </h3>
            <ul className="space-y-3">
              {guide.winnerBullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-slate-800 text-base md:text-lg"
                >
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

        {/* 5-Product Side-by-Side Comparison Table Directly Below #5 */}
        <CompetitorComparisonTable />

        {/* Decision / Buyer Blocks */}
        {guide && <BuyerBlocksSection guide={guide} />}

        {/* FAQ Accordion */}
        <FaqSection faqs={guide?.faqs} />

        {/* Bottom Specialist Verdict Section */}
        <div className="mt-20 md:mt-24 mb-10 md:mb-12 relative max-w-sm md:max-w-5xl mx-auto">
          <div className="bg-[#f8f4e6] rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-12 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-[#e8dccb] relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-[#8b1528] mb-6 md:mb-10 font-serif tracking-wide">
              Sleep Specialist&apos;s Verdict
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              {/* Left Image Area */}
              <div className="relative flex justify-center items-center">
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] aspect-square overflow-hidden rounded-[1.35rem] md:rounded-[1.75rem] border border-[#dfd1bd] bg-white shadow-xl">
                  <Image
                    src="/img/pillows/juujo-model.png"
                    alt="Sleeping CloudAlign Ergonomic Pillow - Specialist's Verdict"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Content Area */}
              <div className="flex flex-col justify-center text-center">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4 font-serif tracking-tight">
                  Sleeping CloudAlign Pillow
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
                  href={displayProducts[0].ctaUrl}
                  targetId="verdict-cta"
                  loadingTarget={loadingTarget}
                  setLoadingTarget={setLoadingTarget}
                  testId="pillow-verdict-cta"
                  className="mx-auto w-full max-w-[280px] md:w-auto md:max-w-none !bg-gradient-to-b !from-[#1a7444] !to-[#0d4a29] hover:!from-[#145c35] hover:!to-[#0a381f] text-white text-sm md:text-xl font-bold tracking-wide py-3.5 md:py-4 px-6 md:px-12 rounded-full shadow-[0_8px_20px_rgba(13,74,41,0.4)]"
                >
                  CHECK AVAILABILITY &amp; CLAIM 50% OFF
                </OfficialButton>
              </div>
            </div>
          </div>
        </div>

        {/* Sources and Editorial Notes */}
        <section className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm my-16 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-black text-slate-900 mb-4">
            Sources and Editorial Notes
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-600 mb-6">
            Prices, dimensions, core specifications, sleep trials, guarantees, and availability were verified on {checkedDate}. Retail offers and promotional stock levels can vary after publication. This comparison is independent consumer editorial research and does not constitute formal medical diagnosis or advice.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">
            {displayProducts.map((product) => (
              <a
                key={product.name}
                href={product.sourceUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 underline underline-offset-4 hover:text-emerald-900"
              >
                {product.shortName} official source
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs italic text-slate-500">
            <Info className="h-4 w-4 shrink-0" />
            <span>
              Commercial disclosure: TrustpilotReview.shop has a commercial affiliate relationship with Sleeping and may receive a referral commission when readers purchase through links on this page.
            </span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 px-4 py-8 text-center text-slate-300">
        <p className="mx-auto max-w-5xl text-sm leading-6">
          TrustpilotReview.shop is an independent shopping comparison publisher and is not affiliated with Trustpilot A/S. All product trademarks remain property of their respective owners.
        </p>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.08)] z-50 md:hidden flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <img
            src="/img/pillows/juujo-side-sleeper.png"
            alt="Sleeping CloudAlign"
            className="h-11 w-11 shrink-0 rounded-lg border border-slate-200 object-cover"
            aria-hidden="true"
          />
          <span className="min-w-0">
            <strong className="block truncate text-xs font-black text-slate-900">
              Sleeping CloudAlign
            </strong>
            <small className="block text-[11px] text-emerald-700 font-bold">
              From £49.99 · #1 Top Pick
            </small>
          </span>
        </div>
        <a
          href={displayProducts[0].ctaUrl}
          rel="noopener noreferrer sponsored"
          data-testid="mobile-sticky-cta"
          onClick={(event) =>
            handleOutboundClick(event, setLoadingTarget, "mobile-sticky-cta")
          }
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-xs sm:text-sm font-black text-white shadow-md shadow-emerald-500/30 whitespace-nowrap"
          aria-busy={loadingTarget === "mobile-sticky-cta"}
        >
          {loadingTarget === "mobile-sticky-cta" ? (
            <OutboundLoader />
          ) : (
            <span>Claim 50% Off &gt;</span>
          )}
        </a>
      </div>
    </div>
  );
}
