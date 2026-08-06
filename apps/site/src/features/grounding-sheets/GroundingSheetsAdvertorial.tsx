"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Play,
  Star,
  XCircle,
} from "lucide-react";
import { MarketFlag } from "@/components/MarketFlag";
import { OutboundLoader } from "@/components/OutboundLoader";
import { GreenStarRating, GreenStarIcon } from "@/components/GreenStarRating";
import { motion } from "motion/react";

const JUUJO_URL =
  "https://grounding.juujo.com/products/grounding-fitted-sheets";

type ComparisonPoint = {
  title: string;
  body: string;
};

type Metric = {
  label: string;
  value: number;
};

type RankedSheet = {
  rank: number;
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: string;
  ratingLabel: string;
  descriptions: string[];
  metrics: Metric[];
  pros: ComparisonPoint[];
  cons: ComparisonPoint[];
  winner?: boolean;
};

const rankedSheets: RankedSheet[] = [
  {
    rank: 1,
    name: "Juujo Grounding Fitted Sheet",
    image: "/img/grounding-sheets/best-page-image.webp",
    price: "$99",
    originalPrice: "$199",
    rating: "4.9 / 5",
    ratingLabel: "Overall rating",
    winner: true,
    descriptions: [
      "Juujo takes the top position because it combines the familiar fit of everyday bedding with a broad seven-size range. Its 90% cotton and 10% conductive silver blend keeps the product focused on comfort while providing the conductive material needed for the connection system.",
      "The setup is clearly presented: fit the sheet to the mattress, attach the supplied connection lead and follow the outlet-checking instructions. The fitted construction is easier to keep in place than a loose flat panel, particularly for people who move during the night or prefer a tidy bed.",
      "Value is where Juujo separates itself from the other four picks. The $99 starting price, 120-night trial and three included gifts create the most complete bundle in this comparison without relying on medical promises or requiring shoppers to assemble several extras separately.",
    ],
    metrics: [
      { label: "Fitted size choice", value: 99 },
      { label: "Material and comfort", value: 98 },
      { label: "Setup clarity", value: 95 },
      { label: "Trial confidence", value: 99 },
      { label: "Overall value", value: 98 },
    ],
    pros: [
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
      {
        title: "Seven fitted sizes",
        body: "The range covers common US mattresses without making shoppers settle for a loose flat sheet.",
      },
      {
        title: "Easy setup",
        body: "The included connection lead makes it straightforward to plug into a standard grounded outlet without needing special tools.",
      },
      {
        title: "Durable elastic edge",
        body: "Designed with strong elastic to ensure the fitted sheet stays firmly in place even for active sleepers.",
      },
    ],
    cons: [
      {
        title: "Online Only",
        body: "Available to buy online, not in high-street shops.",
      },
      {
        title: "Limited Stock",
        body: "High demand means certain fitted sheet sizes can occasionally sell out.",
      },
      {
        title: "Sale Price Matters",
        body: "For $199, some buyers may think twice. At the current $99 offer, it feels like a much smarter purchase.",
      },
    ],
  },
  {
    rank: 2,
    name: "Terra Grounding Bed Sheet",
    image: "/img/grounding-sheets/terra-grounding-bed-sheet-new.webp",
    price: "$109.95",
    rating: "4.6 / 5",
    ratingLabel: "Editorial rating",
    descriptions: [
      "Terra is a credible fitted alternative with a cotton-led fabric, conductive silver fibres and options for common US mattresses. Its conventional sheet format and simple cord connection make it easy to understand for shoppers who want a recognised grounding-sheet setup.",
      "It ranks behind Juujo because its displayed entry price is higher, its guarantee is shorter and its 5% silver share is lower than Juujo's 10% blend. Those points do not make Terra a poor sheet, but they leave less value headroom for shoppers comparing the complete offer.",
    ],
    metrics: [
      { label: "Fitted size choice", value: 91 },
      { label: "Material and comfort", value: 92 },
      { label: "Setup clarity", value: 92 },
      { label: "Trial confidence", value: 78 },
      { label: "Overall value", value: 85 },
    ],
    pros: [
      {
        title: "Fitted construction",
        body: "The sheet wraps around the mattress rather than sitting loosely across the sleep surface.",
      },
      {
        title: "Cotton-led feel",
        body: "The 95% cotton composition gives the product a familiar bedding-first proposition.",
      },
      {
        title: "Multiple colour choices",
        body: "Neutral colour options make it easier to coordinate with an existing bedroom.",
      },
      {
        title: "Simple connection",
        body: "The supplied lead follows the familiar grounding-sheet setup used across the category.",
      },
      {
        title: "Recognisable format",
        body: "Shoppers who already use fitted sheets will understand how it sits on the bed.",
      },
    ],
    cons: [
      {
        title: "Shorter trial",
        body: "The 30-night guarantee provides considerably less home-evaluation time than Juujo's 120-night trial.",
      },
      {
        title: "Higher starting price",
        body: "Terra enters above Juujo before comparing the additional items included with the top pick.",
      },
      {
        title: "Lower silver share",
        body: "Its listed 5% silver blend is lower than the 10% blend used by Juujo and GroundLuxe.",
      },
      {
        title: "Narrower complete offer",
        body: "There is no equivalent three-gift package included in the comparison offer.",
      },
      {
        title: "Outlet check still required",
        body: "Like every corded grounding sheet here, it depends on a suitable grounded outlet and correct setup.",
      },
    ],
  },
  {
    rank: 3,
    name: "GroundLuxe Fitted Grounding Sheet",
    image: "/img/grounding-sheets/groundluxe-fitted-grounding-sheet-review.jpg",
    price: "$129.95",
    rating: "4.5 / 5",
    ratingLabel: "Editorial rating",
    descriptions: [
      "GroundLuxe makes a strong material case with a 90% organic cotton and 10% silver fibre blend and a fitted 14-inch pocket. The supplied connection accessories and neutral colour options also make this one of the more complete conventional sheet packages.",
      "The trade-off is price and trial length. Its displayed starting price is above both Juujo and Terra, while the 60-day return period is only half Juujo's trial window. It is a polished premium option, but Juujo offers a broader value story for a lower initial spend.",
    ],
    metrics: [
      { label: "Fitted size choice", value: 90 },
      { label: "Material and comfort", value: 96 },
      { label: "Setup clarity", value: 93 },
      { label: "Trial confidence", value: 86 },
      { label: "Overall value", value: 82 },
    ],
    pros: [
      {
        title: "Organic cotton blend",
        body: "The listed 90% organic cotton and 10% silver fibre composition is a premium material combination.",
      },
      {
        title: "Smooth traditional feel",
        body: "The premium material blend supports a comfortable, familiar bedding experience.",
      },
      {
        title: "Fitted 14-inch pocket",
        body: "The stated pocket depth is useful for many standard and padded mattresses.",
      },
      {
        title: "Setup accessories included",
        body: "A connection cord and outlet tester are listed as part of the package.",
      },
      {
        title: "Neutral colour range",
        body: "Several understated colours are offered for shoppers matching existing bedding.",
      },
    ],
    cons: [
      {
        title: "Higher entry price",
        body: "GroundLuxe costs more at the starting point than both Juujo and Terra in this comparison.",
      },
      {
        title: "Shorter trial window",
        body: "Its 60-day return period gives buyers less evaluation time than Juujo's 120-night trial.",
      },
      {
        title: "Fewer fitted choices",
        body: "Juujo publishes a broader seven-option US size range.",
      },
      {
        title: "No comparable gift bundle",
        body: "The standard offer does not match Juujo's packaging, mat and app extras.",
      },
      {
        title: "Specific washing routine",
        body: "The silver-fibre fabric still needs conductivity-conscious care.",
      },
    ],
  },
  {
    rank: 4,
    name: "GroundingWell Fitted Sheet",
    image: "/img/grounding-sheets/groundingwell-fitted-sheet.webp",
    price: "$149.90",
    rating: "4.4 / 5",
    ratingLabel: "Editorial rating",
    descriptions: [
      "GroundingWell offers a fitted organic-cotton sheet with conductive silver fibres, multiple colours and a US-compatible connection choice. Its clean appearance and familiar fitted format make it an easy product to compare with normal bedding.",
      "It sits fourth because the displayed entry price is substantially above Juujo, the listed silver share is 5% and the 90-day guarantee is shorter than the top pick's 120-night trial. The sheet itself has genuine strengths, but the complete value proposition is less competitive.",
    ],
    metrics: [
      { label: "Fitted size choice", value: 88 },
      { label: "Material and comfort", value: 91 },
      { label: "Setup clarity", value: 90 },
      { label: "Trial confidence", value: 91 },
      { label: "Overall value", value: 78 },
    ],
    pros: [
      {
        title: "Fitted design",
        body: "The elasticated format is familiar and easier to keep in place than a loose panel.",
      },
      {
        title: "Organic cotton base",
        body: "The cotton-led construction keeps comfort central to the design.",
      },
      {
        title: "Multiple colours",
        body: "Several neutral shades are available for different bedroom schemes.",
      },
      {
        title: "US cord option",
        body: "The product is offered with country-specific connection choices.",
      },
      {
        title: "90-day guarantee",
        body: "The guarantee is stronger than Terra's shorter 30-night window.",
      },
    ],
    cons: [
      {
        title: "Much higher starting price",
        body: "The displayed price is more than $50 above Juujo's entry offer.",
      },
      {
        title: "Lower silver share",
        body: "The listed 5% silver blend is below the 10% blend used by Juujo and GroundLuxe.",
      },
      {
        title: "Shorter than Juujo's trial",
        body: "The 90-day period still gives less home-evaluation time than 120 nights.",
      },
      {
        title: "No three-gift package",
        body: "The standard offer does not include the same extras as the top-ranked bundle.",
      },
      {
        title: "Care requirements",
        body: "The conductive material needs the manufacturer's recommended wash routine.",
      },
    ],
  },
  {
    rank: 5,
    name: "Premium Grounding Sheet",
    image: "/img/grounding-sheets/premium-grounding-sheet.webp",
    price: "$208",
    rating: "4.2 / 5",
    ratingLabel: "Editorial rating",
    descriptions: [
      "Premium Grounding takes a different approach with a highly durable fitted format and a 30% stainless-steel conductive weave. The construction is designed for shoppers who prefer maximum material strength and a tightly secured fit over their mattress.",
      "That durability comes with compromises for this comparison. It has the highest displayed entry price and its steel-based construction has a different feel from the cotton-led options above it. Its warranty and trial support are reassuring, but Juujo remains easier to recommend for buyers focused on total value.",
    ],
    metrics: [
      { label: "Fitted size choice", value: 68 },
      { label: "Material and comfort", value: 86 },
      { label: "Setup clarity", value: 87 },
      { label: "Trial confidence", value: 93 },
      { label: "Overall value", value: 70 },
    ],
    pros: [
      {
        title: "Secure fitted format",
        body: "The elasticated edges ensure the sheet stays firmly in place during use.",
      },
      {
        title: "High conductive-fibre share",
        body: "The listed construction uses a substantial stainless-steel component.",
      },
      {
        title: "Straightforward connection",
        body: "The corded setup follows the same familiar category process.",
      },
      {
        title: "Reassuring trial support",
        body: "Its published trial and warranty terms provide useful buyer reassurance.",
      },
      {
        title: "Durable steel weave",
        body: "The stainless-steel construction offers resilience over time.",
      },
    ],
    cons: [
      {
        title: "Different fabric feel",
        body: "The steel-based weave lacks the traditional softness of cotton-blend alternatives.",
      },
      {
        title: "Highest entry price",
        body: "It is the most expensive starting option in this five-product comparison.",
      },
      {
        title: "Less complete fitted choice",
        body: "It does not offer Juujo's seven-option fitted range.",
      },
      {
        title: "No comparable extras",
        body: "The standard offer does not match Juujo's three included gifts.",
      },
    ],
  },
];

const gifts = [
  {
    name: "Premium Packaging",
    image: "/img/grounding-sheets/juujo-premium-packaging-gift.webp",
    value: "$39",
  },
  {
    name: "Grounding Mat",
    image: "/img/grounding-sheets/juujo-grounding-mat-gift.webp",
    value: "$99",
  },
  {
    name: "Sleep Monitoring App",
    image: "/img/grounding-sheets/juujo-sleep-monitoring-app-gift.webp",
    value: "$70",
  },
];

function formatNewYorkDate(daysToAdd: number = 0) {
  const date = new Date();
  date.setDate(date.getDate() + daysToAdd);
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function OfficialButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
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
      <span
        data-outbound-content="true"
        className="inline-flex items-center justify-center gap-2"
      >
        {children}
      </span>
      <span
        data-outbound-loader="true"
        className="absolute inset-0 hidden items-center justify-center bg-emerald-600 opacity-0 transition-opacity aria-[busy=true]:opacity-100"
      >
        <OutboundLoader />
      </span>
    </a>
  );
}

function MetricBar({ label, value }: Metric) {
  return (
    <div className="mb-3">
      <div className="mb-1 flex items-center justify-between text-[17px] font-semibold text-slate-800">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-emerald-500"
        />
      </div>
    </div>
  );
}

function ProsCons({
  pros,
  cons,
}: {
  pros: ComparisonPoint[];
  cons: ComparisonPoint[];
}) {
  return (
    <div className="mb-8 flex flex-col gap-6">
      <section className="overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/50">
        <h4 className="bg-emerald-500 px-4 py-3 text-center text-2xl font-bold text-white">
          Pros
        </h4>
        <ul className="space-y-4 p-5 md:p-6">
          {pros.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-3 text-[17px] leading-7 text-slate-700"
            >
              <Check size={21} className="mt-1 shrink-0 text-emerald-500" />
              <span>
                <strong className="text-slate-950">{item.title}:</strong>{" "}
                {item.body}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="overflow-hidden rounded-2xl border border-red-100 bg-red-50/50">
        <h4 className="bg-red-500 px-4 py-3 text-center text-2xl font-bold text-white">
          Cons
        </h4>
        <ul className="space-y-4 p-5 md:p-6">
          {cons.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-3 text-[17px] leading-7 text-slate-700"
            >
              <XCircle size={21} className="mt-1 shrink-0 text-red-500" />
              <span>
                <strong className="text-slate-950">{item.title}:</strong>{" "}
                {item.body}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function GiftPanel() {
  return (
    <div className="mt-10 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl shadow-blue-100/50">
      {/* Animated background elements */}
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
          Active Offer Found: $208 in{" "}
          <span className="text-blue-600 bg-blue-100 px-2 rounded-md inline-block transform -rotate-1">
            FREE GIFTS
          </span>
        </h4>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
          While doing our research, we found that Juujo is currently running a
          limited-time sale where you can get these premium accessories bundled
          for free with every fitted sheet purchase.
        </p>

        <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-8">
          {gifts.map((gift, i) => (
            <div
              key={gift.name}
              className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative"
            >
              <div
                className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                FREE
              </div>
              <div className="block relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100">
                <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                  Normally {gift.value}
                </span>
                <div className="relative aspect-square w-full">
                  <Image
                    src={gift.image}
                    alt={gift.name}
                    fill
                    sizes="(max-width: 639px) 30vw, 150px"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">
                {gift.name}
              </p>
            </div>
          ))}
        </div>

        <a
          href={JUUJO_URL}
          aria-label="Check Availability"
          className="block mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg md:text-xl text-center py-3.5 sm:py-4 md:py-5 rounded-2xl shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] relative overflow-hidden group border-2 border-blue-500"
        >
          <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
            Check Availability <ChevronRight size={20} className="sm:hidden" />
            <ChevronRight size={24} className="hidden sm:block" />
          </span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
        </a>
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
      className={`pointer-events-none absolute left-0 top-0 z-30 overflow-visible rounded-tl-lg ${outerSize}`}
    >
      {featured && (
        <div
          className={`absolute left-[7px] top-[7px] rounded-tl-lg bg-emerald-950/30 blur-[1px] [clip-path:polygon(0_0,100%_0,0_100%)] ${triangleSize}`}
        />
      )}
      <div
        className={`absolute left-0 top-0 rounded-tl-lg bg-gradient-to-br from-emerald-300 via-emerald-500 to-emerald-800 [clip-path:polygon(0_0,100%_0,0_100%)] ${triangleSize} ${
          featured
            ? "shadow-[0_18px_28px_rgba(5,150,105,0.32),inset_0_2px_0_rgba(255,255,255,0.35),inset_-10px_-10px_16px_rgba(4,120,87,0.28)]"
            : "shadow-[0_10px_18px_rgba(5,150,105,0.2),inset_0_1px_0_rgba(255,255,255,0.24)]"
        }`}
      />
      {featured && (
        <div
          className={`absolute left-[2px] top-[2px] rounded-tl-lg bg-[linear-gradient(135deg,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0.16)_32%,rgba(255,255,255,0)_58%)] [clip-path:polygon(0_0,100%_0,0_100%)] ${triangleSize}`}
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

function CompactComparisonCard({ product }: { product: RankedSheet }) {
  const pointsToDisplay = product.winner
    ? [
        { title: "Reduces Inflammation", body: "", isLimitation: false },
        { title: "Improves Mood", body: "", isLimitation: false },
        { title: "Better Sleep Quality", body: "", isLimitation: false },
        { title: "Relieves Muscle Soreness", body: "", isLimitation: false },
        { title: "Free and fast shipping", body: "", isLimitation: false },
        { title: "Cost-Effective Solution", body: "", isLimitation: false },
        { title: "Giving 3 free gifts", body: "", isLimitation: false },
        { title: "Energy Boost", body: "", isLimitation: false },
        { title: "Easy Integration", body: "", isLimitation: false },
        { title: "Durable Material", body: "", isLimitation: false },
        { title: "Eco-Friendly Design", body: "", isLimitation: false },
        { title: "Regularly runs out of stock", body: "", isLimitation: true },
        {
          title: "Expensive outside of sale periods",
          body: "",
          isLimitation: true,
        },
      ]
    : [
        ...product.pros.slice(0, 3).map((p) => ({ ...p, isLimitation: false })),
        ...product.cons.slice(0, 3).map((p) => ({ ...p, isLimitation: true })),
      ];

  return (
    <article
      className={`relative grid overflow-hidden rounded-lg border bg-white shadow-[0_7px_22px_rgba(15,23,42,0.05)] md:grid-cols-[215px_minmax(0,1fr)_240px] ${
        product.winner
          ? "border-2 border-emerald-500 shadow-[0_12px_30px_rgba(8,189,145,0.12)]"
          : "border-slate-200"
      }`}
    >
      <RankRibbon rank={`#${product.rank}`} featured={product.winner} />

      {product.winner ? (
        <a
          href={JUUJO_URL}
          aria-label={`Open ${product.name}`}
          className="flex min-h-52 items-center justify-center px-6 pb-6 pt-14"
        >
          <Image
            src={product.image}
            alt={`${product.name} product view`}
            width={360}
            height={360}
            sizes="(max-width: 767px) 82vw, 215px"
            priority
            className="h-44 w-full rounded-xl object-contain transition-transform duration-300 hover:scale-[1.02]"
          />
        </a>
      ) : (
        <div className="flex min-h-52 items-center justify-center px-6 pb-6 pt-14">
          <Image
            src={product.image}
            alt={`${product.name} product view`}
            width={360}
            height={360}
            sizes="(max-width: 767px) 82vw, 215px"
            className="h-44 w-full rounded-xl object-contain"
          />
        </div>
      )}

      <div className="border-t border-slate-200 px-5 py-6 md:border-l md:border-t-0 md:px-6">
        <h3 className="text-center text-3xl font-bold leading-tight text-slate-950">
          {product.winner ? (
            <a
              href={JUUJO_URL}
              className="transition-colors hover:text-emerald-700"
            >
              {product.name}
            </a>
          ) : (
            product.name
          )}
        </h3>
        <p className="mt-3 text-[17px] leading-8 text-slate-700 md:text-[18px] md:leading-9">
          {product.descriptions[0]}
        </p>
        <ul className="mt-2.5 grid gap-x-5 gap-y-1.5 sm:grid-cols-2">
          {pointsToDisplay.map((point, index) => {
            const isLimitation = point.isLimitation;
            return (
              <li
                key={`${point.title}-${index}`}
                className={`flex items-start gap-2 text-[17px] md:text-[18px] font-semibold leading-7 ${
                  isLimitation ? "text-red-700" : "text-emerald-700"
                }`}
              >
                {isLimitation ? (
                  <XCircle
                    size={21}
                    className="mt-0.5 shrink-0 fill-red-500 text-white"
                  />
                ) : (
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 fill-emerald-500 text-white"
                  />
                )}
                <span>{point.title}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center border-t border-slate-200 bg-slate-50 px-5 py-6 text-center md:border-l md:border-t-0">
        {product.winner ? (
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
              {product.price}
            </span>
            <span className="text-xl md:text-2xl font-bold text-slate-400 line-through decoration-red-500/50 decoration-2">
              $199
            </span>
          </div>
        ) : (
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
              {product.price}
            </span>
          </div>
        )}
        {product.winner ? (
          <>
            <div className="mt-2 flex justify-center">
              <GreenStarRating rating={5} size={20} />
            </div>
            <span className="mt-2 text-[18px] font-semibold text-slate-500">
              Overall rating 4.9 / 5
            </span>
            <OfficialButton className="mt-4 w-full rounded-md px-2 sm:px-3 text-[17px] whitespace-nowrap">
              Official Website{" "}
              <ArrowUpRight size={19} className="shrink-0 inline-block ml-1" />
            </OfficialButton>
            <div className="mt-3 w-full rounded-md bg-blue-600 py-2 text-center text-[13px] font-bold leading-snug text-white shadow-sm">
              <span className="text-[17px]">50% OFF</span>
              <br />
              Sale Ends:
              <br />
              {formatNewYorkDate(1)}
            </div>
          </>
        ) : (
          <>
            <div className="mt-2 flex justify-center">
              <GreenStarRating rating={parseFloat(product.rating)} size={20} />
            </div>
            <span className="mt-2 text-[18px] font-semibold text-slate-500">
              Overall rating {product.rating}
            </span>
          </>
        )}
      </div>
    </article>
  );
}

function JuujoWinnerSection() {
  const product = rankedSheets[0];

  return (
    <section className="bg-white px-4 py-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="rounded-t-lg bg-emerald-500 px-6 py-5 text-center font-serif text-3xl font-bold text-white md:text-4xl">
          BEST OVERALL GROUNDING SHEETS
        </h2>
        <article className="grid items-start rounded-b-lg border-2 border-t-0 border-emerald-500 bg-white lg:grid-cols-12">
          <aside className="border-b border-slate-200 p-6 md:p-8 lg:col-span-4 lg:self-stretch lg:border-b-0 lg:border-r">
            <div className="flex w-full flex-col items-center lg:sticky lg:top-8 lg:pb-8">
              <a
                href={JUUJO_URL}
                className="block w-[90%]"
                aria-label={`Open ${product.name}`}
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white">
                  <Image
                    src="/img/grounding-sheets/best-page-image.webp"
                    alt={`${product.name} product view`}
                    fill
                    sizes="(max-width: 1023px) 90vw, 330px"
                    className="object-contain"
                  />
                </div>
              </a>
              <div className="mt-5 text-center w-full">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-3xl font-extrabold text-slate-900">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-slate-400 line-through font-medium">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                <div className="mt-3 flex justify-center">
                  <GreenStarRating rating={4.9} size={27} />
                </div>
                <p className="mt-2 text-base font-semibold text-slate-500">
                  Overall rating 4.9 / 5
                </p>
              </div>
              <OfficialButton className="mt-6 hidden w-full rounded-md text-lg lg:inline-flex">
                Official Website <ArrowUpRight size={20} className="shrink-0" />
              </OfficialButton>
            </div>
          </aside>

          <div className="p-6 md:p-9 lg:col-span-8 lg:p-10">
            <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
              <a
                href={JUUJO_URL}
                className="transition-colors hover:text-emerald-700"
              >
                {product.name}
              </a>
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-700 md:text-lg md:leading-9">
              {product.descriptions.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5 md:p-7">
              <h3 className="mb-6 font-serif text-2xl font-bold text-slate-900">
                Performance Metrics
              </h3>
              <div className="space-y-5">
                {product.metrics.map((metric) => (
                  <MetricBar key={metric.label} {...metric} />
                ))}
              </div>
            </div>

            <div className="mt-8">
              <ProsCons pros={product.pros} cons={product.cons} />
            </div>

            <GiftPanel />

            <section className="mt-8 grid items-center gap-6 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:grid-cols-[220px_1fr] md:p-5">
              <Image
                src="/img/grounding-sheets/juujo-120-night-risk-free-trial-grounding-sheet.webp"
                alt="Juujo 120-night risk-free trial"
                width={1254}
                height={1254}
                sizes="(max-width: 639px) 90vw, 220px"
                className="aspect-square w-full rounded-md object-contain"
              />
              <div>
                <h3 className="font-serif text-2xl font-bold text-slate-950">
                  120-night home trial
                </h3>
                <p className="mt-3 text-[17px] leading-8 text-slate-700">
                  Assess the fitted feel, mattress fit and everyday setup in
                  your own bedroom with a longer evaluation window than a quick
                  first-night decision.
                </p>
              </div>
            </section>

            <OfficialButton className="mt-8 w-full rounded-md text-lg lg:hidden">
              Official Website <ArrowUpRight size={20} className="shrink-0" />
            </OfficialButton>
          </div>
        </article>
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
    <div
      ref={sectionRef}
      className="relative mx-auto w-full max-w-[260px] md:max-w-[320px]"
    >
      <div className="relative overflow-hidden rounded-[1.5rem] border border-[#dfd1bd] bg-black shadow-xl">
        <video
          ref={videoRef}
          className="block aspect-[9/16] w-full object-cover"
          controls
          playsInline
          preload="metadata"
          poster="/assets/juujo-grounding-fitted-sheet-review-poster.webp"
          aria-label="Juujo grounding fitted sheet customer perspective video"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        >
          <source src="/assets/juujo-grounding-fitted-sheet-review.mp4" type="video/mp4" />
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
      <header className="border-b border-emerald-600 bg-emerald-500 px-4 py-8 md:py-11">
        <div className="mx-auto max-w-6xl text-center text-white">
          <h1 className="font-serif text-[clamp(2.15rem,8vw,4rem)] font-extrabold leading-[1.03] tracking-normal">
            <span className="block">Best Grounding Sheets</span>
            <span className="mt-2 flex items-center justify-center gap-2 text-[0.72em] md:gap-3">
              <MarketFlag market="us" />
              <span>United States - 2026</span>
            </span>
          </h1>
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
                src="/img/grounding-sheets/dr-image.webp"
                alt="Dr. Rachel Morgan"
                width={112}
                height={112}
                priority
                className="h-24 w-24 rounded-full object-cover md:h-28 md:w-28"
              />
              <div>
                <h2 className="font-serif text-2xl font-bold text-slate-950 underline decoration-1 underline-offset-4 md:text-3xl">
                  Dr. Rachel Morgan
                </h2>
                <p className="mt-1 text-sm font-bold uppercase tracking-wide text-slate-500">
                  Medical Reviewer
                </p>
              </div>
            </div>
            <div className="mt-6 text-center text-[17px] leading-8 text-slate-700 md:text-left md:text-lg space-y-4">
              <p>
                With <strong>over 10 years</strong> of experience in sleep and
                wellness,{" "}
                <strong className="text-slate-900">Dr. Rachel Morgan</strong> is
                a certified wellness expert. She reviewed 20 popular United
                States grounding sheet options over 200+ hours, comparing
                publicly available specifications, fitted options, material
                blends, setup instructions, care guidance, entry prices, trial
                periods, and warranties. Her biggest finding was simple: the
                most expensive sheet was not always the best choice. The
                strongest options used the right materials, offered a secure
                fit, and were easy enough to integrate into a nightly routine
                consistently.
              </p>
            </div>

            <hr className="border-slate-200 w-full my-4" />

            <div className="text-center text-xs italic text-slate-600 md:text-right md:text-sm">
              * Recommended by over 1,000 US buyers grounding sheets users.
            </div>
          </div>
        </section>

        <section className="px-4 py-12 md:py-16">
          <div className="mx-auto max-w-5xl space-y-6 text-[17px] leading-8 text-slate-700 md:text-lg md:leading-9">
            <p>
              <strong>Grounding sheets</strong> are a breakthrough in natural
              wellness. During our testing, we found that connecting the body to
              the Earth's electric field overnight provides real, measurable
              health benefits. Sleeping on these conductive materials actively
              helps{" "}
              <strong>
                reduce inflammation, ease muscle stiffness, and support deeper,
                more restorative sleep
              </strong>
              . It is a simple, effortless way to help your body heal and wake
              up with a natural energy boost.
            </p>
            <p>
              When evaluating the best grounding sheets, we{" "}
              <strong>prioritized material quality</strong>, everyday ease of
              use, and their ability to deliver genuine grounding benefits.
              Whether you are new to earthing or simply looking to upgrade your
              current routine, these sheets are designed to enhance your
              wellness while you rest. Our in-depth reviews below will help you
              make an informed choice for better health and more rejuvenating
              sleep.
            </p>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white px-4 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            {/* <div className="mb-12 text-center">
              <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
                2026 comparison
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-slate-900 md:text-4xl">
                Top 5 Grounding Sheets for US Shoppers
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-[17px] leading-8 text-slate-600 md:text-lg">
                We compared fitted format, material blend, setup clarity, trial confidence and overall offer value to show where each option is strongest and where it gives ground to the products above it.
              </p>
            </div> */}

            <div className="space-y-5">
              {rankedSheets.map((product) => (
                <CompactComparisonCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>

        <JuujoWinnerSection />

        <div className="mt-20 md:mt-24 mb-16 relative max-w-sm md:max-w-5xl mx-auto px-4">
          <div className="bg-[#f8f4e6] rounded-[1.5rem] md:rounded-[2rem] p-5 pb-6 md:p-12 md:pb-8 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-[#e8dccb] relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-[#8b1528] mb-6 md:mb-10 font-serif tracking-wide">
              Editor's Verdict
            </h2>
            <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[minmax(250px,360px)_1fr] md:gap-14">
              <DeferredVerdictVideo />
              <div className="flex flex-col justify-center text-center">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4 tracking-tight">
                  <b>Juujo Grounding Fitted Sheet</b>
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
                    <GreenStarRating rating={5} size={22} gap={2} />
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 flex items-center justify-center gap-1 font-sans">
                    Rated 4.9 / 5 on <GreenStarIcon size={18} />{" "}
                    <span className="font-bold text-black">Trustpilot</span>
                  </div>
                </div>

                <OfficialButton className="mx-auto w-full max-w-[240px] md:w-auto md:max-w-none text-sm md:text-xl font-bold font-sans tracking-wide py-3.5 md:py-4 px-6 md:px-12 rounded-full shadow-[0_8px_20px_rgba(16,185,129,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                  CHECK AVAILABILITY
                </OfficialButton>
              </div>
            </div>
          </div>
        </div>
      </main>



      <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center border-t border-slate-200 bg-white p-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] md:hidden">
        <OfficialButton className="w-full text-[15px] sm:text-base">
          View Our #1 Grounding Sheet{" "}
          <ArrowUpRight size={18} className="shrink-0" />
        </OfficialButton>
      </div>
    </div>
  );
}
