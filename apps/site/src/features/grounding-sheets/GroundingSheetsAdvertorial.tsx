"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Play,
  ShieldCheck,
  Star,
  XCircle,
} from "lucide-react";
import { OutboundLoader } from "@/components/OutboundLoader";

const JUUJO_URL =
  "https://grounding.juujo.com/products/grounding-fitted-sheets";

type RankedSheet = {
  rank: number;
  name: string;
  image: string;
  price: string;
  size: string;
  points: string[];
  winner?: boolean;
};

const rankedSheets: RankedSheet[] = [
  {
    rank: 1,
    name: "Juujo Grounding Fitted Sheet",
    image: "/img/grounding-sheets/juujo-grounding-fitted-sheet.webp",
    price: "$99",
    size: "Single",
    winner: true,
    points: [
      "Fitted design offered in seven US sizes",
      "90% cotton and 10% conductive silver blend",
      "120-night trial plus three included gifts",
    ],
  },
  {
    rank: 2,
    name: "Terra Grounding Bed Sheet",
    image: "/img/grounding-sheets/terra-grounding-bed-sheet.webp",
    price: "$109.95",
    size: "Fitted Single",
    points: [
      "Fitted options across common US bed sizes",
      "95% cotton and 5% silver blend",
      "Shorter 30-night guarantee than Juujo",
    ],
  },
  {
    rank: 3,
    name: "GroundLuxe Fitted Grounding Sheet",
    image: "/img/grounding-sheets/groundluxe-fitted-grounding-sheet.webp",
    price: "$129.95",
    size: "Twin",
    points: [
      "90% organic cotton and 10% silver fibre",
      "Fitted 14-inch pocket with several colour choices",
      "Higher starting price than the two leading picks",
    ],
  },
  {
    rank: 4,
    name: "GroundingWell Fitted Sheet",
    image: "/img/grounding-sheets/groundingwell-fitted-sheet.webp",
    price: "$149.90",
    size: "USA Twin",
    points: [
      "Fitted format with country-specific cord choices",
      "Multiple colours and standard bed sizes listed",
      "Entry price is over $50 above Juujo Single",
    ],
  },
  {
    rank: 5,
    name: "Premium Grounding Sheet",
    image: "/img/grounding-sheets/premium-grounding-sheet.webp",
    price: "$208",
    size: "USA Single/Twin",
    points: [
      "Flat-sheet format works over existing bedding",
      "US cord and warranty variants are available",
      "Highest entry price in this comparison",
    ],
  },
];

const metrics = [
  { label: "Fitted size choice", value: 99 },
  { label: "Material and comfort", value: 98 },
  { label: "Setup clarity", value: 95 },
  { label: "Trial confidence", value: 99 },
  { label: "Overall value", value: 98 },
];

const pros = [
  {
    title: "Seven fitted sizes",
    body: "The range covers common US mattresses without making shoppers settle for a loose flat sheet.",
  },
  {
    title: "Comfort-led material blend",
    body: "The 90% cotton and 10% conductive silver construction balances a familiar sheet feel with conductive fibres.",
  },
  {
    title: "Clear entry price",
    body: "At $99 for Single, Juujo has the lowest stated starting price among the five products compared here.",
  },
  {
    title: "Longer trial window",
    body: "The 120-night trial gives buyers more time to assess fit, setup and everyday comfort at home.",
  },
  {
    title: "Complete value bundle",
    body: "Premium packaging, a grounding mat and access to the sleep monitoring app are included in the offer.",
  },
];

const cons = [
  {
    title: "Online only",
    body: "Juujo is purchased online, so shoppers cannot feel the fabric in a high-street store before ordering.",
  },
  {
    title: "Grounded outlet required",
    body: "The connection lead must be used with a correctly grounded outlet and the supplied instructions should be followed.",
  },
  {
    title: "Care matters",
    body: "Conductive fibres need conductivity-conscious washing, including avoiding products the care guide says may coat them.",
  },
];

const gifts = [
  {
    name: "Premium Packaging",
    image: "/img/grounding-sheets/juujo-premium-packaging-gift.webp",
  },
  {
    name: "Grounding Mat",
    image: "/img/grounding-sheets/juujo-grounding-mat-gift.webp",
  },
  {
    name: "Sleep Monitoring App",
    image: "/img/grounding-sheets/juujo-sleep-monitoring-app-gift.webp",
  },
];

function formatNewYorkDate() {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());
}

function EditorialStars({ size = 20 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center gap-1 text-emerald-500"
      aria-label="Five-star editorial rating"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={size} fill="currentColor" strokeWidth={1.5} />
      ))}
    </div>
  );
}

function OfficialButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  const prepareNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
    const button = event.currentTarget;
    button.dataset.loading = "true";
    button.setAttribute("aria-busy", "true");
  };

  return (
    <a
      href={JUUJO_URL}
      onClick={prepareNavigation}
      data-outbound="juujo-grounding-fitted-sheet"
      data-outbound-button="true"
      data-loading="false"
      aria-busy="false"
      className={`relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full bg-emerald-500 px-6 py-3.5 text-center text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:bg-emerald-600 ${className}`}
    >
      <span data-outbound-content="true" className="inline-flex items-center gap-2">
        {children}
      </span>
      <span
        data-outbound-loader="true"
        className="absolute inset-0 hidden items-center justify-center"
      >
        <OutboundLoader />
      </span>
    </a>
  );
}

function RankingCard({ product }: { product: RankedSheet }) {
  return (
    <article
      className={`grid overflow-hidden rounded-xl border bg-white shadow-sm md:grid-cols-[170px_minmax(0,1fr)_170px] ${
        product.winner
          ? "border-emerald-400 ring-2 ring-emerald-100"
          : "border-slate-200"
      }`}
    >
      <div className="relative min-h-48 border-b border-slate-100 bg-slate-50 md:min-h-44 md:border-b-0 md:border-r">
        <span
          className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-sm font-black text-white ${
            product.winner ? "bg-emerald-500" : "bg-slate-700"
          }`}
        >
          #{product.rank}
        </span>
        <Image
          src={product.image}
          alt={`${product.name} product view`}
          fill
          sizes="(max-width: 767px) 100vw, 170px"
          priority={product.rank === 1}
          className="object-contain p-5"
        />
      </div>

      <div className="p-5 md:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <h3 className="font-serif text-2xl font-bold leading-tight text-slate-900">
            {product.name}
          </h3>
          {product.winner && (
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
              Best overall
            </span>
          )}
        </div>
        <ul className="space-y-2.5 text-[17px] leading-relaxed text-slate-700">
          {product.points.map((point) => (
            <li key={point} className="flex items-start gap-2.5">
              <CheckCircle2
                size={20}
                className={`mt-1 shrink-0 ${product.winner ? "text-emerald-500" : "text-slate-400"}`}
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center border-t border-slate-100 bg-slate-50 p-5 text-center md:border-l md:border-t-0">
        <span className="text-3xl font-black text-slate-900">{product.price}</span>
        <span className="mt-1 text-sm font-semibold text-slate-500">{product.size}</span>
        {product.winner && (
          <OfficialButton className="mt-5 w-full px-4 text-sm">
            Visit Site <ArrowUpRight size={17} />
          </OfficialButton>
        )}
      </div>
    </article>
  );
}

function MetricBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4 text-[17px] font-semibold text-slate-800">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-emerald-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function GiftPanel({ className = "" }: { className?: string }) {
  return (
    <section
      className={`overflow-hidden rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 shadow-lg shadow-blue-100/60 md:p-6 ${className}`}
      aria-labelledby="included-gifts-title"
    >
      <div className="mb-5 text-center">
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-blue-700">
          Included with Juujo
        </span>
        <h3 id="included-gifts-title" className="mt-3 text-xl font-extrabold text-slate-900">
          Three Free Gifts
        </h3>
        <p className="mt-1 text-sm font-semibold text-blue-700">$208 stated value</p>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {gifts.map((gift) => (
          <div
            key={gift.name}
            className="relative overflow-hidden rounded-xl border border-blue-100 bg-white p-1.5 text-center shadow-sm sm:p-2"
          >
            <span className="absolute right-1 top-1 z-10 rounded-full bg-blue-600 px-1.5 py-0.5 text-[9px] font-black text-white sm:px-2 sm:text-[10px]">
              FREE
            </span>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-slate-50">
              <Image
                src={gift.image}
                alt={gift.name}
                fill
                sizes="(max-width: 767px) 28vw, 115px"
                className="object-cover"
              />
            </div>
            <p className="mt-2 min-h-10 text-[10px] font-bold leading-tight text-slate-800 sm:text-xs">
              {gift.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function DeferredVerdictVideo() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const playVideo = () => {
    setShouldLoad(true);
    window.setTimeout(() => {
      videoRef.current?.play().catch(() => setIsPlaying(false));
    }, 0);
  };

  return (
    <div ref={sectionRef} className="relative mx-auto w-full max-w-[260px] md:max-w-[320px]">
      <div className="relative overflow-hidden rounded-[1.5rem] border border-[#dfd1bd] bg-black shadow-xl">
        <video
          ref={videoRef}
          className="block aspect-[9/16] w-full object-cover"
          controls
          playsInline
          preload="none"
          poster="/img/grounding-sheets/juujo-grounding-fitted-sheet-video-poster.webp"
          aria-label="Juujo grounding fitted sheet customer perspective video"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        >
          {shouldLoad && (
            <source
              src="/assets/juujo-grounding-fitted-sheet-customer-review.mp4"
              type="video/mp4"
            />
          )}
          Your browser does not support the video tag.
        </video>
        <button
          type="button"
          aria-label="Play customer perspective video"
          onClick={playVideo}
          className={`absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-700 text-white shadow-[0_14px_34px_rgba(4,120,87,0.35)] ring-8 ring-white/60 transition hover:scale-105 focus:outline-none focus:ring-emerald-300 ${
            isPlaying ? "pointer-events-none scale-90 opacity-0" : "opacity-100"
          }`}
        >
          <Play size={30} fill="currentColor" className="ml-1" />
        </button>
      </div>
    </div>
  );
}

export default function GroundingSheetsAdvertorial() {
  const [updatedDate] = useState(formatNewYorkDate);

  return (
    <div className="min-h-screen bg-slate-50 pb-24 font-sans text-slate-800 md:pb-0">
      <header className="border-b border-emerald-600 bg-emerald-500 px-4 py-7 md:py-10">
        <div className="mx-auto max-w-6xl text-center text-white">
          <span className="mb-4 inline-flex rounded-full border border-white/50 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em]">
            Advertisement
          </span>
          <h1 className="font-serif text-[clamp(2.15rem,8vw,4rem)] font-extrabold leading-[1.03] tracking-normal">
            Best Grounding Sheets
          </h1>
          <div className="mt-3 text-lg font-bold md:text-2xl">United States - 2026</div>
          <div className="mt-5 flex items-center justify-center gap-2 text-base font-bold md:text-lg">
            <CheckCircle2 size={20} />
            <span>
              Last updated - <span suppressHydrationWarning>{updatedDate}</span>
            </span>
          </div>
        </div>
      </header>

      <main>
        <section className="border-b border-slate-200 bg-white px-4 py-10 md:py-14">
          <div className="mx-auto max-w-5xl rounded-sm border border-slate-100 bg-white p-6 text-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.1)] md:p-8">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
              <Image
                src="/img/grounding-sheets/sleep-wellness-editorial-review.webp"
                alt="Sleep and wellness editorial reviewer"
                width={112}
                height={112}
                priority
                className="h-24 w-24 rounded-full object-cover md:h-28 md:w-28"
              />
              <div>
                <h2 className="font-serif text-2xl font-bold text-slate-950 underline decoration-1 underline-offset-4 md:text-3xl">
                  Sleep &amp; Wellness Editorial Review
                </h2>
                <p className="mt-1 text-sm font-bold uppercase tracking-wide text-slate-500">
                  United States buying guide
                </p>
              </div>
            </div>
            <p className="mt-6 text-[17px] leading-8 text-slate-700 md:text-lg">
              This guide compares publicly available product specifications, fitted sizes,
              materials, setup instructions, care guidance, current entry pricing, trial
              periods and warranties. It is an editorial comparison, not laboratory testing
              or medical advice.
            </p>
          </div>
        </section>

        <section className="px-4 py-12 md:py-16">
          <div className="mx-auto max-w-5xl space-y-6 text-[17px] leading-8 text-slate-700 md:text-lg md:leading-9">
            <p>
              Grounding sheets come in two main formats. A fitted sheet wraps around the
              mattress like everyday bedding, while a flat sheet lies across the sleep
              surface and may need more adjustment. Before comparing prices, check the exact
              mattress dimensions, pocket depth and whether the quoted price is for Single,
              Twin, Queen or another size.
            </p>
            <p>
              The conductive fibres connect to a properly grounded wall outlet through a
              lead supplied by the manufacturer. Setup should be simple, but shoppers should
              still check the outlet, read the instructions and confirm that the cord and plug
              are intended for the United States. A grounding sheet is a wellness product and
              should not replace advice or treatment from a qualified healthcare professional.
            </p>
            <p>
              Care instructions and trial terms matter just as much as the fabric. Some
              detergents and fabric treatments can coat conductive fibres, so follow the
              maker&apos;s wash guidance. Juujo takes our top spot because it combines a fitted
              design, seven US sizes, a 90% cotton and 10% conductive silver blend, a $99
              Single entry price, a 120-night trial and three useful extras in one clearly
              presented bundle.
            </p>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white px-4 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-9 text-center">
              <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
                2026 comparison
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-slate-900 md:text-4xl">
                Top 5 Grounding Sheets for US Shoppers
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-[17px] leading-8 text-slate-600 md:text-lg">
                Entry prices were checked against the brands&apos; current public product variants.
                Different colours, sizes and warranty choices can cost more.
              </p>
            </div>
            <div className="space-y-5">
              {rankedSheets.map((product) => (
                <RankingCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.16em] text-emerald-600">
                Why Juujo ranks No. 1
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                A fitted sheet bundle with fewer buying compromises
              </h2>
              <p className="mt-5 text-[17px] leading-8 text-slate-700 md:text-lg md:leading-9">
                Juujo brings together seven fitted US sizes, a 90% cotton and 10%
                conductive silver blend, straightforward setup, a 120-night trial and a
                $99 Single entry price. The included packaging, mat and app add practical
                value without changing the core fitted-sheet decision.
              </p>
            </div>
            <Image
              src="/img/grounding-sheets/juujo-120-night-trial.webp"
              alt="Juujo 120-night trial information"
              width={1000}
              height={1000}
              sizes="(max-width: 1023px) 100vw, 360px"
              className="w-full rounded-2xl border border-slate-200 shadow-lg"
            />
          </div>
        </section>

        <section className="px-4 pb-14 md:pb-20">
          <article className="mx-auto max-w-6xl overflow-hidden rounded-3xl border-2 border-emerald-400 bg-white shadow-xl ring-4 ring-emerald-50">
            <div className="bg-emerald-500 px-5 py-5 text-center text-white md:py-7">
              <h2 className="font-serif text-2xl font-black uppercase tracking-normal md:text-4xl">
                Best Overall Grounding Sheets
              </h2>
            </div>

            <div className="grid gap-0 lg:grid-cols-12">
              <aside className="border-b border-slate-200 bg-slate-50 p-5 md:p-8 lg:col-span-4 lg:border-b-0 lg:border-r">
                <div className="lg:sticky lg:top-8">
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
                    <Image
                      src="/img/grounding-sheets/juujo-grounding-fitted-sheet.webp"
                      alt="Juujo Grounding Fitted Sheet on a mattress"
                      fill
                      sizes="(max-width: 1023px) 100vw, 360px"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <div className="text-4xl font-black text-slate-950">$99</div>
                    <div className="mt-1 text-sm font-bold uppercase tracking-wide text-slate-500">
                      Single
                    </div>
                    <div className="mt-4">
                      <EditorialStars size={25} />
                      <p className="mt-2 text-sm font-semibold text-slate-500">
                        Editorial top pick
                      </p>
                    </div>
                    <OfficialButton className="mt-5 w-full text-lg">
                      Visit Official Website <ArrowUpRight size={20} />
                    </OfficialButton>
                  </div>
                  <GiftPanel className="mt-8 hidden lg:block" />
                </div>
              </aside>

              <div className="p-5 md:p-8 lg:col-span-8 lg:p-10">
                <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-black uppercase tracking-wide text-emerald-700">
                  #1 editorial pick
                </span>
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
                  Juujo Grounding Fitted Sheet
                </h2>

                <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-700 md:text-lg md:leading-9">
                  <p>
                    Juujo starts with the format most shoppers already understand: a fitted
                    sheet that wraps around the mattress. Seven US size choices make it easier
                    to match the bed rather than adapting a universal flat panel. The 90%
                    cotton and 10% conductive silver blend also gives this pick a familiar
                    bedding-first proposition.
                  </p>
                  <p>
                    Setup follows the usual grounding-sheet process: fit the sheet, connect the
                    lead and use a correctly grounded outlet in line with the supplied
                    instructions. The 120-night trial stands out in a category where trial
                    windows vary, and it gives buyers time to judge fit, comfort and daily use
                    in their own bedroom.
                  </p>
                  <p>
                    Value is the deciding factor. At $99 for Single, Juujo enters below Terra,
                    GroundLuxe, GroundingWell and Premium Grounding in this comparison. Premium
                    packaging, a grounding mat and access to the sleep monitoring app complete
                    the strongest all-round bundle without relying on medical promises.
                  </p>
                </div>

                <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 md:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <span className="text-xs font-black uppercase tracking-[0.14em] text-emerald-700">
                        Editorial score
                      </span>
                      <div className="mt-1 text-4xl font-black text-slate-950">9.8/10</div>
                    </div>
                    <div className="text-left sm:text-right">
                      <EditorialStars size={23} />
                      <p className="mt-1 text-sm font-semibold text-slate-600">
                        Best overall value
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 rounded-2xl border border-slate-100 bg-slate-50 p-5 md:p-6">
                  <h3 className="mb-6 text-xl font-bold text-slate-900">Performance Metrics</h3>
                  <div className="space-y-5">
                    {metrics.map((metric) => (
                      <MetricBar key={metric.label} {...metric} />
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-6">
                  <section className="overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/50">
                    <h3 className="bg-emerald-500 px-5 py-3 text-center text-2xl font-bold text-white">
                      Pros
                    </h3>
                    <ul className="space-y-4 p-5 md:p-6">
                      {pros.map((item) => (
                        <li key={item.title} className="flex items-start gap-3 text-[17px] leading-7 text-slate-700">
                          <Check size={21} className="mt-1 shrink-0 text-emerald-500" />
                          <span>
                            <strong className="text-slate-950">{item.title}:</strong> {item.body}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="overflow-hidden rounded-2xl border border-red-100 bg-red-50/50">
                    <h3 className="bg-red-500 px-5 py-3 text-center text-2xl font-bold text-white">
                      Cons
                    </h3>
                    <ul className="space-y-4 p-5 md:p-6">
                      {cons.map((item) => (
                        <li key={item.title} className="flex items-start gap-3 text-[17px] leading-7 text-slate-700">
                          <XCircle size={21} className="mt-1 shrink-0 text-red-500" />
                          <span>
                            <strong className="text-slate-950">{item.title}:</strong> {item.body}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                <GiftPanel className="mt-8 lg:hidden" />
              </div>
            </div>
          </article>
        </section>

        <section className="px-4 pb-16 md:pb-20">
          <div className="mx-auto max-w-5xl rounded-[1.5rem] border border-[#e8dccb] bg-[#f8f4e6] p-5 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] md:rounded-[2rem] md:p-12">
            <h2 className="mb-7 text-center font-serif text-3xl font-bold tracking-normal text-[#8b1528] md:mb-10 md:text-4xl">
              Editor&apos;s Verdict
            </h2>
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
              <DeferredVerdictVideo />
              <div className="text-center md:text-left">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-black uppercase tracking-wide text-emerald-700">
                  <ShieldCheck size={16} /> Best value fitted pick
                </span>
                <h3 className="mt-4 font-serif text-2xl font-bold leading-tight text-slate-950 md:text-3xl">
                  Juujo offers the clearest fitted-sheet value for US shoppers
                </h3>
                <p className="mt-4 text-[17px] leading-8 text-slate-700 md:text-lg">
                  The $99 Single price, seven fitted sizes, 90/10 cotton-and-silver blend,
                  120-night trial and three included gifts make Juujo the most complete
                  starting point in this comparison.
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  The video is a customer perspective and is not clinical evidence or a
                  guarantee of individual results.
                </p>
                <OfficialButton className="mt-6 w-full md:w-auto md:px-9">
                  Check Availability <ArrowUpRight size={20} />
                </OfficialButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-4 py-10 shadow-inner">
        <div className="mx-auto max-w-6xl text-center text-sm text-slate-500">
          <p className="mb-2 text-lg font-bold text-slate-800">Best Grounding Sheets</p>
          <p className="mb-6">© 2026 Best Grounding Sheets. All rights reserved.</p>
          <div className="mx-auto max-w-3xl rounded-lg border border-amber-200 bg-amber-50 p-6 text-left text-sm leading-relaxed text-slate-700 md:p-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-amber-700">
              Important disclosure
            </p>
            <p className="mb-4">
              <strong>Affiliate disclosure:</strong> We may receive compensation for clicks
              on or purchases of products featured on this site. This comes at no additional
              cost to you.
            </p>
            <p>
              <strong>Individual experiences:</strong> Grounding sheets are wellness products
              and experiences vary. This editorial guide does not provide medical advice or
              guarantee a particular outcome.
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center border-t border-slate-200 bg-white p-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] md:hidden">
        <OfficialButton className="w-full text-[15px] sm:text-base">
          View Our #1 Grounding Sheet <ArrowUpRight size={18} />
        </OfficialButton>
      </div>
    </div>
  );
}
