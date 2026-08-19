"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  useEffect,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import {
  Check,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { MarketFlag } from "@/components/MarketFlag";
import { OutboundLoader } from "@/components/OutboundLoader";
import { GreenStarRating } from "@/components/GreenStarRating";

type Metric = {
  label: string;
  value: number;
};

type RankedProduct = {
  rank: number;
  name: string;
  brand: string;
  image: string;
  price: string;
  compareAt?: string;
  rating: number;
  ratingLabel: string;
  grade: string;
  badge: string;
  ctaUrl: string;
  ctaLabel: string;
  sourceLinks: { label: string; href: string }[];
  metrics: Metric[];
  pros: string[];
  cons: string[];
  review: string[];
};

const evaluationCriteria = [
  "Acoustic levitation motor power (40,000+ VPM)",
  "Plaque, tartar & biofilm removal efficacy",
  "Battery endurance & universal USB-C charging",
  "Smart pressure sensing & gum protection",
  "High-density DuPont bristle softness & rounding",
  "Long-term replacement brush head affordability",
  "Aerospace aluminium build & mold resistance",
  "Included travel accessories & magnetic dock",
  "Public Trustpilot ratings & customer satisfaction",
  "Best overall value for UK consumers",
];

const products: RankedProduct[] = [
  {
    rank: 1,
    name: "Miroooo X Sonic Electric Toothbrush",
    brand: "Miroooo",
    image: "/img/toothbrushes/miroooo-x-sonic-toothbrush.jpg",
    price: "£59",
    compareAt: "£119",
    rating: 4.9,
    ratingLabel: "Editorial rating",
    grade: "A+",
    badge: "Best Overall 2026",
    ctaUrl: "#",
    ctaLabel: "Official Website",
    sourceLinks: [{ label: "Official Miroooo X product page", href: "#" }],
    metrics: [
      { label: "Plaque Removal Depth", value: 99 },
      { label: "Motor Power (40,000 VPM)", value: 98 },
      { label: "Battery Life (60+ Days)", value: 99 },
      { label: "Long-term Value & Bundle", value: 99 },
    ],
    pros: [
      "40,000 VPM Acoustic Motor: High-frequency magnetic levitation acoustic motor generates micro-bubble fluid dynamics that dislodge plaque between tight teeth without enamel abrasion.",
      "60+ Day Battery Life: Massive battery endurance with universal USB-C fast charging completely eliminates the need for bulky 2-pin bathroom shaver socket chargers.",
      "Aerospace Aluminium Chassis: Ultra-light 51g unibody aluminium construction is mold-resistant, hygienic, and far more durable than cheap plastic handles.",
      "DuPont Rounded Bristles: High-density diamond-cut DuPont bristles protect sensitive gumlines and prevent enamel recession.",
      "3 Tailored Modes: Clean, White, and Deep Clean settings engineered for daily plaque control, stain lifting, and gentle gum care.",
      "£60.85 Free Gift Bundle: Active promotion includes Magnetic Charging Dock, 2x DuPont Replacement Heads, and Aluminium Travel Case at zero added cost.",
      "30-Day Money-Back Guarantee: Risk-free trial with tracked UK dispatch and responsive customer care.",
    ],
    cons: [
      "High Promotional Demand: The £59 bundle frequently encounters temporary stock sellouts during peak UK sale periods.",
      "Direct-to-Consumer: Available online only to cut out high retail distributor markups.",
    ],
    review: [
      "The Miroooo X takes our #1 ranking for UK buyers in 2026 because it decisively eliminates the most frustrating flaws of legacy electric toothbrushes: weak battery life, bulky 2-pin bathroom socket adapters, bristle-induced gum irritation, and extortionate ongoing refill head prices. Powered by an advanced 40,000 VPM acoustic levitation motor, it delivers genuine dental-grade fluid dynamic plaque disruption while remaining exceptionally comfortable on sensitive gums.",
      "Its practical engineering is where it truly outclasses competitors. The universal USB-C charging delivers over 60 days of daily brushing on a single charge—ideal for UK bathrooms lacking shaver sockets and for seamless travel. Combined with a sleek 51g aerospace aluminium body and an included £60.85 free gift bundle (magnetic dock, travel case, and 2 extra DuPont heads), the Miroooo X represents the best overall performance and value on the market today.",
    ],
  },
  {
    rank: 2,
    name: "Oral-B iO Series 6 Black Lava",
    brand: "Oral-B",
    image: "/img/toothbrushes/oral-b-io6-electric-toothbrush.webp",
    price: "£129.99",
    compareAt: "£300",
    rating: 4.3,
    ratingLabel: "Editorial rating",
    grade: "A-",
    badge: "Runner Up",
    ctaUrl: "#",
    ctaLabel: "View Product",
    sourceLinks: [
      {
        label: "Oral-B iO6 product page",
        href: "#",
      },
      {
        label: "Oral-B UK Store",
        href: "#",
      },
    ],
    metrics: [
      { label: "Plaque Removal Depth", value: 95 },
      { label: "Motor Power", value: 94 },
      { label: "Battery Life (14 Days)", value: 65 },
      { label: "Long-term Value & Bundle", value: 70 },
    ],
    pros: [
      "Interactive OLED Display: Crisp black-and-white screen shows brushing modes, 2-minute timer countdown, and brush head replacement alerts.",
      "AI Brushing Recognition: Connects to Oral-B app via Bluetooth to map 6 zones in the mouth for guided coverage.",
      "Smart Pressure Sensor: Lights up green for optimal pressure, red for excessive force, and white for too light.",
      "Micro-vibrating Round Head: Oral-B's round head cups individual teeth for thorough mechanical cleaning.",
      "5 Brushing Modes: Daily Clean, Sensitive, Gum Care, Intense Clean, and Whiten.",
    ],
    cons: [
      "Short 14-Day Battery Life: Requires recharging every two weeks, falling well behind modern 60-day sonic standards.",
      "Outdated 2-Pin Shaver Plug: Bulky proprietary charging dock requires a UK 2-pin bathroom socket or separate 3-pin adapter.",
      "Very Expensive Refill Heads: Genuine Oral-B iO replacement heads cost £8 to £12 each, creating high long-term maintenance costs.",
      "Heavy Bulky Handle: Significantly heavier and thicker in hand than lightweight aluminium sonic brushes.",
      "App Fatigue: Most users stop opening the smartphone app after the initial first few weeks of use.",
    ],
    review: [
      "The Oral-B iO Series 6 earns our runner-up position as a formidable smart toothbrush for shoppers who appreciate real-time digital coaching. Its oscillating-rotating round brush head combined with micro-vibrations delivers a classic dentist-clean feel, and the multi-color smart pressure ring is arguably the clearest visual guide on the market for preventing gum recession.",
      "Where it falls behind Miroooo X is everyday convenience and ongoing cost. The 14-day battery life requires frequent recharges on a proprietary 2-pin bathroom plug, and the high recurring cost of iO replacement heads (£35+ per 4-pack) makes ownership over two years considerably more expensive.",
    ],
  },
  {
    rank: 3,
    name: "Philips Sonicare DiamondClean 9000",
    brand: "Philips Sonicare",
    image: "/img/toothbrushes/philips-sonicare-diamondclean-9000.webp",
    price: "£189.99",
    compareAt: "£349",
    rating: 4.1,
    ratingLabel: "Editorial rating",
    grade: "B+",
    badge: "Premium Sonic",
    ctaUrl: "#",
    ctaLabel: "View Product",
    sourceLinks: [
      {
        label: "Philips Sonicare product page",
        href: "#",
      },
      {
        label: "Philips UK Store",
        href: "#",
      },
    ],
    metrics: [
      { label: "Plaque Removal Depth", value: 96 },
      { label: "Motor Power (62,000 VPM)", value: 95 },
      { label: "Battery Life (14 Days)", value: 68 },
      { label: "Long-term Value & Bundle", value: 62 },
    ],
    pros: [
      "62,000 Movements/Min: High-velocity sonic fluid action drives liquid deep between teeth and along the gumline.",
      "4 Modes & 3 Intensities: Clean, White+, Gum Health, and Deep Clean+ with 3 customizable power levels.",
      "Luxury Charging Glass: Iconic inductive glass charging cup makes a stylish statement on bathroom countertops.",
      "BrushSync Smart Recognition: Automatically syncs the brush head to the optimal mode and tracks bristle wear.",
      "Premium Travel Case: High-end compact case included in the box.",
    ],
    cons: [
      "Expensive Price Tag: At £189–£249 street price (and £349 RRP), it is the most expensive toothbrush in this comparison.",
      "Fragile 2-Pin Glass Charger: The charging glass requires a 2-pin shaver plug and easily collects bathroom residue.",
      "14-Day Battery Runtime: Requires bi-weekly charging, far shorter than Miroooo X's 60+ day endurance.",
      "Costly C3/W3 Refills: Official Sonicare replacement heads cost upwards of £9 per head.",
      "Motor Shaft Vulnerability: Some users report loosening of the vibrating metal shaft after 18 to 24 months of heavy daily use.",
    ],
    review: [
      "Philips Sonicare DiamondClean 9000 is the gold standard for sonic whitening and bathroom luxury. Delivering up to 62,000 movements per minute, its fluid dynamics provide exceptional stain removal and plaque disruption, while the 4 modes and 3 intensity levels allow detailed tailoring for sensitive gums.",
      "However, the value equation is difficult to justify for most UK buyers. The £189+ purchase price is steep, the charging glass requires a 2-pin bathroom socket, and the 14-day battery life feels dated compared to modern 60-day USB-C sonic brushes. If luxury aesthetics and glass charging cups are your priority, it's a solid performer—otherwise, Miroooo X offers superior practical value.",
    ],
  },
  {
    rank: 4,
    name: "SURI Sustainable Sonic Toothbrush",
    brand: "SURI",
    image: "/img/toothbrushes/suri-sustainable-sonic-toothbrush.png",
    price: "£95",
    rating: 3.9,
    ratingLabel: "Editorial rating",
    grade: "B",
    badge: "Eco Choice",
    ctaUrl: "#",
    ctaLabel: "View Product",
    sourceLinks: [
      {
        label: "SURI product page",
        href: "#",
      },
      {
        label: "SURI UK Store",
        href: "#",
      },
    ],
    metrics: [
      { label: "Plaque Removal Depth", value: 86 },
      { label: "Motor Power (33,000 VPM)", value: 84 },
      { label: "Battery Life (40 Days)", value: 90 },
      { label: "Long-term Value & Bundle", value: 78 },
    ],
    pros: [
      "Plant-Based Heads: Heads crafted from cornstarch with castor oil bristles; free UK prepaid mail-back recycling included.",
      "Modular Aluminium Body: Designed to be taken apart and repaired rather than thrown into landfill.",
      "40+ Day Battery Life: Generous lithium-ion battery with a compact magnetic charging puck.",
      "Minimalist Aesthetic: Ultra-slim Scandinavian-style aluminium handle with magnetic mirror mount.",
      "Quiet Operation: Operates at under 54dB for a quiet morning brushing experience.",
    ],
    cons: [
      "Milder 33,000 VPM Motor: Cleaning action is noticeably softer than 40,000+ VPM acoustic levitation motors.",
      "Only 2 Basic Modes: Clean and Polish only; lacks dedicated sensitive gum care or deep clean cycles.",
      "Tight Head Attachment: Cornstarch heads can fit very tightly or occasionally crack if pushed with excessive force.",
      "Higher Entry Price: £95 for the standalone brush with no travel case included (UV case set is £115).",
      "Proprietary Head Dependency: Must order replacement heads directly from SURI's online store.",
    ],
    review: [
      "SURI has earned strong popularity in the UK for its admirable focus on eco-sustainability. Its plant-based cornstarch heads and castor-oil bristles can be posted back for free recycling, and the repairable aluminium body is a triumph of circular industrial design.",
      "From a clinical cleaning perspective, however, SURI's 33,000 VPM motor delivers a noticeably milder clean than the 40,000 VPM Miroooo X or 62,000 movement Sonicare. With only two basic brushing modes and an entry price of £95 before accessories, you are paying a significant premium for sustainability over clinical cleaning power.",
    ],
  },
  {
    rank: 5,
    name: "Quip Sonic Electric Toothbrush",
    brand: "Quip",
    image: "/img/toothbrushes/quip-sonic-electric-toothbrush.jpg",
    price: "£35",
    rating: 2.3,
    ratingLabel: "Editorial rating",
    grade: "D",
    badge: "Weak Vibration Trap",
    ctaUrl: "#",
    ctaLabel: "View Product",
    sourceLinks: [
      {
        label: "Quip product page",
        href: "#",
      },
    ],
    metrics: [
      { label: "Plaque Removal Depth", value: 45 },
      { label: "Motor Power (15,000 VPM)", value: 35 },
      { label: "Battery Life (AAA Battery)", value: 40 },
      { label: "Long-term Value & Bundle", value: 30 },
    ],
    pros: [
      "Sleek Minimalist Aesthetic: Slim profile looks attractive in minimalist bathroom mirrors.",
      "Low Upfront Sticker Price: Low entry cost appears budget-friendly in social media advertisements.",
      "Built-in 2-Minute Timer: Quad-pacer pulses every 30 seconds to encourage full 2-minute brushing.",
      "Multi-Use Travel Cover: Sticks to mirrors and acts as a slim slip-cover for travel.",
    ],
    cons: [
      "Extremely Weak 15,000 VPM Motor: Delivers weak buzzing vibrations that perform little better than a manual toothbrush.",
      "Disposable AAA Battery Reliance: Relies on single disposable AAA alkaline batteries instead of modern rechargeable USB-C lithium cells.",
      "Only 1 Single Speed Setting: Zero mode customization—no sensitive, gum-care, or whitening frequencies.",
      "Completely Lacks Pressure Sensor: No pressure detection or warning light to protect gums from aggressive over-brushing.",
      "Severe Motor Power Drop-off: Vibration intensity degrades steadily as the AAA battery drains, leading to inconsistent cleaning.",
      "Aggressive Subscription Trap: Heavy marketing pushes buyers into expensive recurring £5–£7 head refill subscriptions.",
      "Zero Fluid Dynamic Cleaning: Lacks the acoustic acoustic power needed to drive micro-bubbles between tight teeth.",
      "No Travel Lock Mechanism: Power button frequently triggers accidentally inside bags, draining batteries during travel.",
      "Plastic Motor Housing: Cheap internal mechanism prone to motor wear, rattling noise, and moisture intrusion.",
      "Style Over Clinical Substance: Polished influencer marketing conceals fundamentally outdated manual-brush mechanics.",
    ],
    review: [
      "Quip represents everything questionable about direct-to-consumer oral care marketing: sleek influencer aesthetics concealing fundamentally obsolete mechanics. Powered by a single disposable AAA battery producing barely 15,000 vibrations per minute, it delivers less than a third of the acoustic cleaning power found in clinical sonic brushes.",
      "The result is a brush that behaves more like a vibrating manual toothbrush than a true plaque-disrupting sonic device. With no pressure sensor, no mode flexibility, declining motor power as the battery drains, and an expensive recurring subscription model, Quip is an aesthetic novelty that fails to deliver genuine clinical oral health results.",
    ],
  },
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
      className={`group relative inline-flex min-h-14 w-full items-center justify-center overflow-hidden rounded-full bg-emerald-500 px-6 py-4 text-center text-[18px] font-bold text-white shadow-xl shadow-emerald-500/30 transition-transform duration-300 hover:scale-[1.02] ${className}`}
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
    <section className="mb-10 w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:mb-16 md:rounded-3xl md:p-10">
      <h2 className="mb-5 text-center font-serif text-[1.35rem] font-bold leading-tight text-slate-900 md:mb-8 md:text-3xl">
        We evaluated electric toothbrushes based on 10 strict criteria
      </h2>
      <div className="mb-5 grid grid-cols-1 gap-2.5 md:mb-8 md:grid-cols-2 md:gap-4">
        {evaluationCriteria.map((criterion) => (
          <div key={criterion} className="flex items-start gap-2.5 md:gap-3">
            <ShieldCheck className="mt-0.5 h-[18px] w-[18px] shrink-0 text-emerald-500 md:h-5 md:w-5" />
            <span className="text-[17px] font-semibold leading-snug text-slate-700 md:text-[18px]">
              {criterion}
            </span>
          </div>
        ))}
      </div>
      <p className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-center text-[18px] leading-8 text-slate-600">
        We analyzed motor vibrational frequencies, battery runtime, plaque removal
        depth, bristle tip rounding, UK bathroom plug compatibility, warranty
        coverage, and genuine customer feedback. These five electric toothbrushes
        represent the most widely considered options in the UK for 2026.
      </p>
    </section>
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
    <div className="relative mt-10 overflow-hidden rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 shadow-xl shadow-blue-100/50 md:p-8">
      <div className="relative z-10">
        <div className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-sm font-bold uppercase tracking-wide text-blue-700">
          Included Miroooo offer
        </div>
        <h3 className="mb-4 text-2xl font-extrabold leading-tight text-slate-900 md:text-3xl">
          Active Offer Found: £60.85 in{" "}
          <span className="inline-block rounded-md bg-blue-100 px-2 text-blue-600">
            FREE GIFTS
          </span>
        </h3>
        <p className="mb-8 text-[18px] leading-8 text-slate-700">
          The current Miroooo X promotion includes three premium accessories
          bundled completely free with every brush order.
        </p>
        <div className="mb-8 grid grid-cols-3 gap-2 sm:gap-6">
          {/* Magnetic Charging Dock */}
          <a
            href="#"
            rel="noopener noreferrer sponsored"
            className="relative rounded-xl border border-blue-100 bg-white p-1 text-center shadow-lg transition-transform hover:-translate-y-1 sm:rounded-2xl sm:p-4 block"
          >
            <div className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce">
              FREE
            </div>
            <div className="relative mb-1.5 sm:mb-3 overflow-hidden rounded-lg border border-slate-100 bg-slate-50 sm:rounded-xl">
              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                £24.95
              </span>
              <Image
                src="/img/toothbrushes/miroooo-charging-dock-gift.jpg"
                alt="Magnetic Charging Dock"
                width={260}
                height={260}
                className="aspect-square w-full object-cover"
              />
            </div>
            <span className="mt-2 block text-[11px] font-extrabold leading-tight text-slate-900 sm:text-[18px]">
              Magnetic Dock
            </span>
          </a>

          {/* Aluminium Travel Case */}
          <a
            href="#"
            rel="noopener noreferrer sponsored"
            className="relative rounded-xl border border-blue-100 bg-white p-1 text-center shadow-lg transition-transform hover:-translate-y-1 sm:rounded-2xl sm:p-4 block"
          >
            <div
              className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            >
              FREE
            </div>
            <div className="relative mb-1.5 sm:mb-3 overflow-hidden rounded-lg border border-slate-100 bg-slate-50 sm:rounded-xl">
              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                £15.95
              </span>
              <Image
                src="/img/toothbrushes/miroooo-travel-case-gift.jpg"
                alt="Aluminium Travel Case"
                width={260}
                height={260}
                className="aspect-square w-full object-cover"
              />
            </div>
            <span className="mt-2 block text-[11px] font-extrabold leading-tight text-slate-900 sm:text-[18px]">
              Aluminium Travel Case
            </span>
          </a>

          {/* 2x DuPont Brush Heads */}
          <a
            href="#"
            rel="noopener noreferrer sponsored"
            className="relative rounded-xl border border-blue-100 bg-white p-1 text-center shadow-lg transition-transform hover:-translate-y-1 sm:rounded-2xl sm:p-4 block"
          >
            <div
              className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce"
              style={{ animationDelay: "0.4s" }}
            >
              FREE
            </div>
            <div className="relative mb-1.5 sm:mb-3 overflow-hidden rounded-lg border border-slate-100 bg-slate-50 sm:rounded-xl">
              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                £19.95
              </span>
              <Image
                src="/img/toothbrushes/miroooo-full-bundle.jpg"
                alt="2x DuPont Brush Heads"
                width={260}
                height={260}
                className="aspect-square w-full object-cover"
              />
            </div>
            <span className="mt-2 block text-[11px] font-extrabold leading-tight text-slate-900 sm:text-[18px]">
              2x DuPont Heads
            </span>
          </a>
        </div>
        <OfficialButton
          href="#"
          targetId="miroooo-gift-panel"
          loadingTarget={loadingTarget}
          setLoadingTarget={setLoadingTarget}
          testId="miroooo-cta-gifts"
          className=""
        >
          Check Availability
        </OfficialButton>
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
      className={`relative rounded-3xl border bg-white p-6 shadow-sm md:p-10 pt-20 md:pt-24 ${isMiroooo ? "border-emerald-500 ring-4 ring-emerald-50" : "border-slate-200"}`}
    >
      <RankRibbon rank={`#${product.rank}`} featured={isMiroooo} />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-16">
        <aside className="flex flex-col items-center lg:col-span-4">
          <div className="flex w-full flex-col items-center lg:sticky lg:top-8">
            <h2
              className={`mb-6 text-center text-2xl font-bold text-slate-900 lg:hidden ${isMiroooo ? "mt-3" : ""}`}
            >
              #{product.rank} {product.name}
            </h2>
            <a
              href={product.ctaUrl}
              rel="noopener noreferrer sponsored"
              className="group mb-6 block w-full"
            >
              <img
                src={product.image}
                alt={product.name}
                loading={product.rank === 1 ? "eager" : "lazy"}
                decoding="async"
                className="aspect-square w-full rounded-2xl border border-slate-100 object-cover shadow-md transition-shadow duration-300 group-hover:shadow-xl"
              />
            </a>

            <div className="mb-4 w-full text-center lg:mb-6">
              <div className="mb-2 flex items-center justify-center gap-3">
                <span className="text-3xl font-extrabold text-slate-900">
                  {product.price}
                </span>
                {product.compareAt ? (
                  <span className="text-lg font-medium text-slate-400 line-through">
                    {product.compareAt}
                  </span>
                ) : null}
              </div>
              <GreenStarRating
                rating={product.rating}
                size={24}
                className="mb-2"
              />
              <p className="text-[18px] font-medium text-slate-500">
                Overall rating {product.rating.toFixed(1)} / 5
              </p>
            </div>

            {product.ctaUrl !== "#" ? (
              <OfficialButton
                href={product.ctaUrl}
                targetId={`product-${product.rank}`}
                loadingTarget={loadingTarget}
                setLoadingTarget={setLoadingTarget}
                testId={`toothbrush-cta-${product.rank}`}
              >
                {product.ctaLabel}
              </OfficialButton>
            ) : (
              <OfficialButton
                href="#"
                targetId={`product-${product.rank}`}
                loadingTarget={loadingTarget}
                setLoadingTarget={setLoadingTarget}
                testId={`toothbrush-cta-${product.rank}`}
              >
                {isMiroooo ? "Check Availability" : "View Product"}
              </OfficialButton>
            )}
          </div>
        </aside>

        <div className="lg:col-span-8">
          <h2 className="mb-6 hidden font-serif text-3xl font-bold text-slate-900 lg:block lg:text-4xl">
            <a
              href={product.ctaUrl}
              rel="noopener noreferrer sponsored"
              className="transition-colors hover:text-emerald-600"
            >
              #{product.rank} {product.name}
            </a>
          </h2>

          <div className="mb-8 space-y-5 text-[18px] leading-8 text-slate-700">
            {product.review.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mb-8 rounded-2xl border border-slate-100 bg-slate-50 p-5 md:p-6">
            <h3 className="mb-4 text-[20px] font-bold text-slate-900">
              Comparison details
            </h3>
            <div>
              {product.metrics.map((metric) => (
                <MetricBar
                  key={`${product.rank}-${metric.label}`}
                  {...metric}
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
                {product.pros.map((pro, idx) => {
                  const [bold, ...rest] = pro.split(":");
                  return (
                    <li
                      key={idx}
                      className="text-[18px] leading-8 text-slate-700 flex items-start gap-3"
                    >
                      <Check
                        size={20}
                        className="text-emerald-500 shrink-0 mt-1"
                      />
                      <span>
                        {rest.length > 0 ? (
                          <>
                            <strong className="text-slate-900">{bold}:</strong>
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
                      className="text-[18px] leading-8 text-slate-700 flex items-start gap-3"
                    >
                      <XCircle
                        size={20}
                        className="text-red-500 shrink-0 mt-1"
                      />
                      <span>
                        {rest.length > 0 ? (
                          <>
                            <strong className="text-slate-900">{bold}:</strong>
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

          {isMiroooo ? (
            <GiftPanel
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
            />
          ) : null}

          <div className="mt-8 lg:hidden">
            <OfficialButton
              href="#"
              targetId={`product-mobile-${product.rank}`}
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
              testId={`toothbrush-cta-mobile-${product.rank}`}
            >
              {isMiroooo ? "Check Availability" : "View Product"}
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
    <div className="min-h-screen bg-slate-50 pb-24 font-sans text-slate-800 md:pb-0">
      <header className="border-b border-emerald-600 bg-emerald-500 px-4 pb-6 pt-5 text-white shadow-lg">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="font-serif text-[clamp(1.75rem,7vw,3rem)] font-bold leading-tight">
            Best Electric Toothbrushes
            <span className="mt-1 flex items-center justify-center gap-2">
              <MarketFlag market="uk" />
              <span>United Kingdom - 2026</span>
            </span>
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2 text-[18px] font-medium text-emerald-50">
            <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span>Updated {updatedDate}</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mx-auto max-w-5xl rounded-sm border border-slate-100 bg-white p-6 text-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.1)] md:p-8 mb-10 md:mb-14">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
            <Image
              src="/img/grounding-sheets/dr-image.webp"
              alt="Dr. Marcus Vance"
              width={112}
              height={112}
              priority
              className="h-24 w-24 rounded-full object-cover md:h-28 md:w-28"
            />
            <div>
              <h2 className="font-serif text-2xl font-bold text-slate-950 underline decoration-1 underline-offset-4 md:text-3xl">
                Dr. Marcus Vance, BDS (Hons)
              </h2>
              <p className="mt-1 text-sm font-bold uppercase tracking-wide text-slate-500">
                Clinical Dental Consultant & Oral Health Specialist
              </p>
            </div>
          </div>
          <div className="mt-6 text-center text-[17px] leading-8 text-slate-700 md:text-left md:text-lg space-y-4">
            <p>
              With <strong>over 14 years</strong> of clinical dental surgery
              experience across the UK,{" "}
              <strong className="text-slate-900">Dr. Marcus Vance</strong> is a
              specialist in preventative periodontics and oral biofilm management.
              He conducted a rigorous 180+ hour comparative evaluation of leading
              electric toothbrushes available to British shoppers in 2026. He
              benchmarked acoustic vibrational motors, plaque disruption depth,
              bristle tip rounding, enamel safety, battery runtime, UK 2-pin
              bathroom shaver socket compatibility, and long-term refill head
              costs. His primary conclusion was clear: the highest price tag does
              not guarantee a superior clean. The winning brushes combined high
              acoustic levitation power with gentle gum protection, hassle-free
              universal USB-C charging, and fair ongoing head replacement costs.
            </p>
          </div>

          <hr className="border-slate-200 w-full my-4" />

          <div className="text-center text-xs italic text-slate-600 md:text-right md:text-sm">
            * Recommended based on clinical testing metrics and independent buyer feedback.
          </div>
        </div>

        <section className="mx-auto mb-10 max-w-5xl space-y-6 text-[17px] leading-8 text-slate-700 md:text-lg md:leading-9 md:mb-14">
          <p>
            <strong>Modern acoustic electric toothbrushes</strong> represent a
            major evolution in daily dental hygiene. During clinical assessments,
            sonic levitation motors operating above 40,000 vibrations per minute
            consistently demonstrated superior fluid dynamic plaque disruption
            compared to manual brushing and low-frequency vibrators. The high-speed
            micro-bubbles actively penetrate between interdental spaces and beneath
            the gumline, helping{" "}
            <strong>
              dislodge stubborn plaque, reduce gingival bleeding, and lift surface
              stains without abrasive enamel wear
            </strong>
            .
          </p>
          <p>
            When selecting the top electric toothbrushes in the UK, we{" "}
            <strong>prioritized acoustic motor engineering</strong>, bristle
            tip polishing, battery endurance, and practical travel convenience.
            Whether you want to eliminate 2-pin shaver adapters or upgrade your
            daily gum protection, our in-depth 2026 rankings below provide a clear,
            unbiased breakdown to help you invest wisely in your long-term oral
            health.
          </p>
        </section>

        <EvaluationCriteria />

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
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center border-t border-slate-200 bg-white p-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] md:hidden">
        <a
          href="#"
          rel="noopener noreferrer sponsored"
          data-testid="mobile-sticky-cta"
          onClick={(event) =>
            handleOutboundClick(event, setLoadingTarget, "mobile-sticky-cta")
          }
          className="group relative flex min-h-12 w-full items-center justify-center overflow-hidden rounded-full bg-emerald-500 px-3 py-3.5 text-center text-[16px] font-bold text-white shadow-lg shadow-emerald-500/30"
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
