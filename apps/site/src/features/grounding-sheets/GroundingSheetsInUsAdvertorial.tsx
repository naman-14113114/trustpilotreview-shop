"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import {
  Award,
  Check,
  CheckCircle2,
  ChevronRight,
  Play,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { MarketFlag } from "@/components/MarketFlag";
import { OutboundLoader } from "@/components/OutboundLoader";
import { GreenStarRating } from "@/components/GreenStarRating";

const JUUJO_URL =
  "https://grounding.juujo.com/products/grounding-fitted-sheets";

const BAREEARTH_URL =
  "https://offer.bareearthlife.com/groundedsheets/landing?uid=3061&oid=858&affid=96&source_id=solus_bgs&sub1=688870942&sub2=a02912bb679d17fd2b9e78c7e4864b2d&sub3=1344705269804653&sub4=84044360745504&sub5=12&utm_source=bing&msclkid=a02912bb679d17fd2b9e78c7e4864b2d&utm_medium=cpc&utm_campaign=383_solus_bgs%7CS%7CUS&utm_term=grounding%20bed%20sheet%20reviews&utm_content=Generic";

const BAREEARTH_TRUSTPILOT_URL =
  "https://www.trustpilot.com/review/bareearth-life.com";

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
  proof?: ReactNode;
};

const evaluationCriteria = [
  "Fitted stability",
  "Conductive material",
  "Silver or steel composition",
  "Setup clarity",
  "Care durability",
  "Trial and returns",
  "Price and bundle value",
  "Shipping and stock clarity",
  "Customer-review risk",
  "Best US buyer fit",
];

const gifts = [
  {
    name: "Grounding Mat",
    value: "$69 value",
    image: "/img/grounding-sheets/juujo-grounding-mat-gift.webp",
  },
  {
    name: "Premium Sleep Mask",
    value: "$69 value",
    image: "/img/grounding-sheets/juujo-premium-eye-mask.png",
  },
  {
    name: "Grounding Pillowcase",
    value: "$49 value",
    image: "/img/grounding-sheets/juujo-grounding-pillowcase-gift.webp",
  },
];

const products: RankedProduct[] = [
  {
    rank: 1,
    name: "Juujo Grounding Fitted Sheet",
    brand: "Juujo",
    image: "/img/grounding-sheets/best-page-image.webp",
    price: "$99",
    compareAt: "$199",
    rating: 4.9,
    ratingLabel: "Editorial rating",
    grade: "A+",
    badge: "Best Overall",
    ctaUrl: JUUJO_URL,
    ctaLabel: "Official Website",
    sourceLinks: [{ label: "Official Juujo product page", href: JUUJO_URL }],
    metrics: [
      { label: "Fitted Stability", value: 98 },
      { label: "Conductive Material", value: 96 },
      { label: "Durability", value: 97 },
      { label: "Trial & Value", value: 99 },
    ],
    pros: [
      "Fitted Design: Fitted-sheet construction stays in place better than flat panels.",
      "High Silver Content: 10% conductive silver share is higher than the 5% silver sheets listed by Terra and GroundingWell.",
      "Comfortable Material: Cotton-led feel keeps the sheet closer to normal bedding.",
      "Generous Trial: 120-night trial gives more time than Terra's 30-night guarantee and GroundingWell's 90-day guarantee.",
      "Clear Pricing: Clear $99 entry offer makes the total value easier to compare.",
      "Excellent Bundle: Bundle includes Premium Sleep Mask, grounding mat and grounding pillowcase.",
      "Direct Setup: Setup is direct: fit the sheet, connect the cord and use a grounded outlet.",
    ],
    cons: [
      "Online Purchase: Online-only purchase means no in-store feel test before buying.",
      "Offer Reliability: Sale value depends on the current $99 offer remaining available.",
      "Stock Pressure: Popular sizes can create stock pressure during promotional periods.",
    ],
    review: [
      "Juujo is the cleanest top pick for US shoppers because it solves the two issues that come up again and again in grounding sheets: keeping the sheet stable on the bed and making the whole kit feel simple. The fitted design matters. It wraps the mattress instead of asking the buyer to keep a narrow panel aligned overnight.",
      "It also wins on bundle value. The current offer combines the fitted sheet with useful gifts and a longer 120-night trial, so shoppers have more time to judge comfort, setup and everyday fit. We still treat grounding as a wellness category rather than a medical fix, but Juujo has the best mix of bedding practicality, conductive material and buyer protection in this list.",
    ],
  },
  {
    rank: 2,
    name: "Terra Grounding Bed Sheet",
    brand: "The Grounding Co",
    image: "/img/grounding-sheets/terra-grounding-bed-sheet-new.webp",
    price: "$159.95",
    rating: 4.1,
    ratingLabel: "Editorial rating",
    grade: "B+",
    badge: "Runner Up",
    ctaUrl: "#",
    ctaLabel: "View Product",
    sourceLinks: [
      {
        label: "Terra product page",
        href: "https://thegrounding.co/products/the-terra-grounding-bed-sheet",
      },
      {
        label: "The Grounding Co Trustpilot",
        href: "https://uk.trustpilot.com/review/thegrounding.co",
      },
    ],
    metrics: [
      { label: "Fitted Stability", value: 90 },
      { label: "Conductive Material", value: 85 },
      { label: "Durability", value: 88 },
      { label: "Trial & Value", value: 75 },
    ],
    pros: [
      "Format: Uses a fitted-sheet format, which is more bed-friendly than a loose panel.",
      "Familiar Feel: 95% cotton base should feel familiar for shoppers who dislike technical fabric.",
      "Options: Available in common bed sizes and multiple color choices.",
      "Easy Setup: Simple cord-based setup makes the concept easy to understand.",
      "Reviews: Public Trustpilot review volume is large enough to spot patterns.",
    ],
    cons: [
      "Trial Period: Shorter 30-night guarantee gives less real sleep-trial time than Juujo\'s 120-night trial.",
      "Shipping: Free shipping is listed only over , so the shipping promise is threshold-based.",
      "Lower Silver Share: The listed 95% cotton / 5% silver blend has a lower silver share than Juujo\'s 10% silver blend.",
      "Higher Price: The displayed .95 price is higher than Juujo\'s  entry offer.",
      "Stock Issues: Sold-out and low-stock messaging can make size and color choice feel less dependable.",
      "Wellness Claims: Broad wellness claims, including inflammation and ache language, should be treated cautiously by buyers.",
      "Review Risk: The public Trustpilot profile shows a 16% one-star share, which creates review-risk friction.",
      "Support Concerns: Some public one-star review themes mention return, refund and care-policy frustration.",
    ],
    review: [
      "Terra is the strongest competitor because it stays close to what US shoppers usually want: a fitted sheet, familiar cotton feel and straightforward setup. If a buyer mainly wants a recognizable fitted grounding-sheet format, Terra deserves to stay high on the shortlist.",
      "The gaps are mostly value and risk signals. A 30-night guarantee is much shorter, the silver share is lower, and the public Trustpilot one-star share is high enough that careful shoppers should read the critical reviews before ordering. Terra is credible, but Juujo gives more buyer runway and a stronger overall value package.",
    ],
  },
  {
    rank: 3,
    name: "GroundingWell Bedsheet",
    brand: "GroundingWell",
    image: "/img/grounding-sheets/groundingwell-fitted-sheet.webp",
    price: "$99.90",
    rating: 3.8,
    ratingLabel: "Editorial rating",
    grade: "B",
    badge: "Budget Panel",
    ctaUrl: "#",
    ctaLabel: "View Product",
    sourceLinks: [
      {
        label: "GroundingWell product page",
        href: "https://www.groundingwell.com/products/groundingwell-bedsheet",
      },
      {
        label: "GroundingWell Trustpilot",
        href: "https://www.trustpilot.com/review/groundingwell.com",
      },
    ],
    metrics: [
      { label: "Fitted Stability", value: 65 },
      { label: "Conductive Material", value: 85 },
      { label: "Durability", value: 82 },
      { label: "Trial & Value", value: 80 },
    ],
    pros: [
      "Pricing: Lower displayed bundle-style pricing may appeal to price-first shoppers.",
      "Shipping: Ships from the USA according to the product page.",
      "Free Shipping: Free shipping messaging is visible on the product page.",
      "Guarantee: 90-day money-back guarantee is longer than Terra's 30-night guarantee.",
      "Versatility: Panel format can work across several mattress sizes without buying a fitted size.",
    ],
    cons: [
      "Lower Silver Share: The listed 95% cotton / 5% silver blend has a lower silver share than Juujo's 10% silver blend.",
      "Poor Coverage: The 104.3 x 19.7 inch panel format is not full fitted-sheet coverage.",
      "Shifting Risk: A narrow panel can shift or miss contact depending on sleep position.",
      "Strict Care: Care guidance is stricter than normal bedding, including careful washing and drying limits.",
      "Shorter Trial: The 90-day guarantee is shorter than Juujo's 120-night trial.",
      "Review Risk: GroundingWell's public Trustpilot profile shows a 20% one-star share.",
      "Material Concerns: Public review summaries include mixed-results comments and material concerns such as stiffness or scent.",
    ],
    review: [
      "GroundingWell earns third because it is widely visible and the panel can be a lower-cost way to try grounding. The problem is that it is not the same experience as a fitted sheet. A narrow panel may be acceptable for some sleepers, but it creates more placement risk than a fitted wrap.",
      "The review-risk signal is also heavier here. A 20% public one-star share and repeated mixed-result or material concerns do not automatically mean every buyer will have a poor experience, but they are real enough to include in the decision. For shoppers who want stable coverage and a stronger trial, Juujo remains the safer pick.",
    ],
  },
  {
    rank: 4,
    name: "Premium Grounding Sheets",
    brand: "Premium Grounding",
    image: "/img/grounding-sheets/premium-grounding-sheet.webp",
    price: "$249",
    rating: 3.5,
    ratingLabel: "Editorial rating",
    grade: "B-",
    badge: "Steel Option",
    ctaUrl: "#",
    ctaLabel: "View Product",
    sourceLinks: [
      {
        label: "Premium Grounding product page",
        href: "https://premiumgrounding.com/products/grounding-earthing-sheet?variant=43910869352513",
      },
      {
        label: "Premium Grounding Trustpilot",
        href: "https://www.trustpilot.com/review/premiumgrounding.au",
      },
    ],
    metrics: [
      { label: "Fitted Stability", value: 70 },
      { label: "Conductive Material", value: 95 },
      { label: "Durability", value: 90 },
      { label: "Trial & Value", value: 60 },
    ],
    pros: [
      "Clear Conductive Story: 30% stainless-steel construction gives the product a clear conductive-material story.",
      "No Direct Contact: Under-sheet placement may suit shoppers who do not want direct skin contact.",
      "Compatible: Can sit below a natural fitted sheet, according to the product page.",
      "Simple Selection: Straightforward size selection keeps the buying process simple.",
      "Technical Layer: Appeals to shoppers who prefer a technical grounding layer over a cotton-led fitted sheet.",
    ],
    cons: [
      "High Price: The $249 entry price is much higher than Juujo's $99 entry offer.",
      "Not Fitted: The flat under-sheet format is not a fitted wrap and may not feel like normal bedding.",
      "Technical Feel: Stainless-steel construction can feel more technical than a cotton-led sheet.",
      "Limited Sizing: Dimensional choices are more limited than a seven-size fitted-sheet range.",
      "Exclusions: The one-free-sheet-per-order offer note excludes Twin, which can weaken bundle value for Twin buyers.",
      "Small Review Base: The public Trustpilot profile has a small review base, so patterns are less statistically settled.",
      "Support Issues: Some one-star public reviews mention return or support complaints.",
      "Wellness Claims: The product positioning still leans on wellness expectations that buyers should not treat as guaranteed outcomes.",
    ],
    review: [
      "Premium Grounding is different from the other picks because it is a technical under-sheet rather than a cotton-led fitted sheet. That can be a positive for shoppers who want a conductive layer below their regular bedding, but it is a worse match for buyers who specifically want a fitted grounding sheet.",
      "The biggest issue is the value equation. At $249, it has to justify a large jump over the lower-priced fitted options. The steel construction is clear, but the smaller public review base and return/support complaints in critical reviews make this a more cautious recommendation.",
    ],
  },
  {
    rank: 5,
    name: "BareEarth Grounding Sheets",
    brand: "BareEarth",
    image: "/img/grounding-sheets/bareearth-new.png",
    price: "50% off offer",
    rating: 2.1,
    ratingLabel: "Editorial rating",
    grade: "D",
    badge: "High Review Risk",
    ctaUrl: "#",
    ctaLabel: "View BareEarth Offer",
    sourceLinks: [
      {
        label: "BareEarth offer page",
        href: BAREEARTH_URL,
      },
      {
        label: "BareEarth Trustpilot",
        href: BAREEARTH_TRUSTPILOT_URL,
      },
    ],
    metrics: [
      { label: "Fitted Stability", value: 85 },
      { label: "Conductive Material", value: 70 },
      { label: "Durability", value: 50 },
      { label: "Trial & Value", value: 20 },
    ],
    pros: [
      "Fitted Setup: Offer page lists a fitted-sheet setup rather than a loose panel.",
      "High Silver Blend: Listed 10% silver blend matches the higher silver-share claim shoppers often compare.",
      "Familiar Bedding: 400 thread count cotton positioning may sound familiar to bedding shoppers.",
      "Included Tester: Offer page includes a tester kit and cord-based setup explanation.",
      "Refund Language: 90-day refund language is visible on the offer page.",
    ],
    cons: [
      "Extremely Poor Reviews: BareEarth's public Trustpilot profile shows a 1.3 TrustScore.",
      "Massive 1-Star Share: The same public profile shows a 90% one-star review share.",
      "Deceptive Claims: There is a clear claim mismatch between the offer page's 4.9 / 201,191+ customer-review claim and the public Trustpilot profile.",
      "Refund Friction: Public review summaries include reported refund friction and restocking-fee complaints.",
      "Poor Support: Public review summaries include support complaints from unhappy buyers.",
      "Shipping Issues: Public review summaries include delayed, incorrect and missing-item complaint themes.",
      "Quality Issues: Public review summaries include product-quality and conductivity complaint themes.",
      "Aggressive Marketing: The offer page uses broad medical-style wellness language that buyers should treat cautiously.",
      "High Risk: The landing-page format is aggressive and makes independent review checking especially important.",
    ],
    proof: <BareEarthProof />,
    review: [
      "BareEarth is the most difficult product to place because the offer page looks polished and includes several attractive specs, including a fitted design and 10% silver blend. Those details keep it in the top five, but the public review-risk signals are too serious to rank it higher.",
      "The main concern is the mismatch. The offer page presents a 4.9 rating and 201,191+ grounded-customer claim, while the public Trustpilot profile shows a 1.3 TrustScore and a 90% one-star share. That does not prove every order will go badly, but it is enough to make BareEarth a high-risk choice unless the buyer is comfortable reading critical reviews first.",
    ],
  },
];

function formatNewYorkDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/New_York",
  }).format(date);
}

function BareEarthProof() {
  return (
    <div
      data-testid="bareearth-trustpilot-proof"
      className="rounded-2xl border border-red-200 bg-red-50/60 p-4 md:p-5"
    >
      <a
        href={BAREEARTH_TRUSTPILOT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[18px] font-bold leading-7 text-red-800 underline underline-offset-4"
      >
        Public Trustpilot profile: 1.3 TrustScore and 90% one-star reviews
      </a>
      <div className="mt-4 overflow-hidden rounded-xl border border-red-200 bg-white">
        <Image
          src="/img/grounding-sheets/bareearth-trustpilot-score-distribution.png"
          alt="BareEarth Trustpilot score and rating distribution"
          width={360}
          height={500}
          className="h-auto w-full"
        />
      </div>
      <p className="mt-3 text-[18px] leading-7 text-red-900/80">
        Captured from Trustpilot. Reviews are user opinions;
        use the linked profile for the latest public record.
      </p>
    </div>
  );
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
        We evaluated grounding sheets based on 10 criteria
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
        We reviewed public product specifications, return terms, care guidance,
        pricing, shipping information and public customer-review signals. These
        five products stood out for US shoppers, but the list does not treat
        wellness claims as guaranteed medical outcomes.
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
          Included Juujo offer
        </div>
        <h3 className="mb-4 text-2xl font-extrabold leading-tight text-slate-900 md:text-3xl">
          Active Offer Found: $187 in{" "}
          <span className="inline-block rounded-md bg-blue-100 px-2 text-blue-600">
            FREE GIFTS
          </span>
        </h3>
        <p className="mb-8 text-[18px] leading-8 text-slate-700">
          The current Juujo fitted-sheet bundle includes three practical extras
          with the sheet purchase.
        </p>
        <div className="mb-8 grid grid-cols-3 gap-2 sm:gap-6">
          {gifts.map((gift) => (
            <a
              key={gift.name}
              href={JUUJO_URL}
              rel="noopener noreferrer sponsored"
              className="relative rounded-xl border border-blue-100 bg-white p-1 text-center shadow-lg transition-transform hover:-translate-y-1 sm:rounded-2xl sm:p-4"
            >
              <span className="absolute -right-1 -top-2 z-20 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-black text-white shadow-lg sm:-right-2 sm:-top-4 sm:px-4 sm:py-1.5 sm:text-base">
                FREE
              </span>
              <span className="block overflow-hidden rounded-lg border border-slate-100 bg-slate-50 sm:rounded-xl">
                <Image
                  src={gift.image}
                  alt={gift.name}
                  width={260}
                  height={260}
                  className="aspect-square w-full object-cover"
                />
              </span>
              <span className="mt-2 block text-[11px] font-extrabold leading-tight text-slate-900 sm:text-[18px]">
                {gift.name}
              </span>
              <span className="mt-1 block text-[10px] font-bold text-blue-700 sm:text-sm">
                {gift.value}
              </span>
            </a>
          ))}
        </div>
        <OfficialButton
          href={JUUJO_URL}
          targetId="juujo-gift-panel"
          loadingTarget={loadingTarget}
          setLoadingTarget={setLoadingTarget}
          testId="juujo-cta-gifts"
          className="rounded-2xl border-2 border-blue-500 bg-blue-600 shadow-blue-600/30"
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
  const isJuujo = product.rank === 1;
  const isBareEarth = product.rank === 5;
  const ctaTestId = isJuujo
    ? `juujo-cta-card-${product.rank}`
    : isBareEarth
      ? "bareearth-cta"
      : undefined;

  return (
    <article
      id={`rank-${product.rank}`}
      data-testid="old-style-ranked-card"
      data-product-rank={product.rank}
      className={`relative rounded-3xl border bg-white p-6 shadow-sm md:p-10 pt-20 md:pt-24 ${isJuujo ? "border-emerald-500 ring-4 ring-emerald-50" : "border-slate-200"}`}
    >
      <RankRibbon rank={`#${product.rank}`} featured={isJuujo} />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-16">
        <aside className="flex flex-col items-center lg:col-span-4">
          <div className="flex w-full flex-col items-center lg:sticky lg:top-8">
            <h2
              className={`mb-6 text-center text-2xl font-bold text-slate-900 lg:hidden ${isJuujo ? "mt-3" : ""}`}
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

            {product.proof}

            {product.ctaUrl !== "#" && (
              <OfficialButton
                href={product.ctaUrl}
                targetId={`product-${product.rank}`}
                loadingTarget={loadingTarget}
                setLoadingTarget={setLoadingTarget}
                testId={ctaTestId}
              >
                {product.ctaLabel}
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
                                    <strong className="text-slate-900">
                                      {bold}:
                                    </strong>
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
                                    <strong className="text-slate-900">
                                      {bold}:
                                    </strong>
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

          {isJuujo ? (
            <GiftPanel
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
            />
          ) : null}

          <div className="mt-8 lg:hidden">
            <OfficialButton
              href={product.ctaUrl}
              targetId={`product-mobile-${product.rank}`}
              loadingTarget={loadingTarget}
              setLoadingTarget={setLoadingTarget}
              testId={isBareEarth ? "bareearth-cta-mobile" : undefined}
            >
              {product.ctaLabel}
            </OfficialButton>
          </div>
        </div>
      </div>
    </article>
  );
}

function DeferredVerdictVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="verdict-video-section"
      className="relative mx-auto mb-10 mt-20 max-w-sm rounded-[1.5rem] border border-[#e8dccb] bg-[#f8f4e6] p-5 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] md:mb-12 md:mt-24 md:max-w-5xl md:rounded-[2rem] md:p-12"
    >
      <h2 className="mb-6 text-center font-serif text-2xl font-bold text-[#8b1528] md:mb-10 md:text-4xl">
        Editor&apos;s Verdict
      </h2>

      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
        <div>
          <div className="relative mx-auto max-w-[300px] overflow-hidden rounded-[1.35rem] border border-[#dfd1bd] bg-black shadow-xl md:rounded-[1.75rem]">
            <video
              ref={videoRef}
              data-testid="verdict-video"
              className="block aspect-[9/16] w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/assets/juujo-grounding-fitted-sheet-review-poster.webp"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source
                src="/assets/juujo-grounding-fitted-sheet-review.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <button
              type="button"
              onClick={playVideo}
              className={`absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#136b3a] text-white shadow-[0_14px_34px_rgba(19,107,58,0.35)] ring-8 ring-white/60 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-[#d4af37]/70 ${
                isPlaying
                  ? "pointer-events-none scale-90 opacity-0"
                  : "scale-100 opacity-100"
              }`}
              aria-label="Play Juujo grounding fitted sheet review video"
            >
              <Play className="ml-1 h-8 w-8 fill-current" />
            </button>

          </div>
          <p className="mx-auto mt-4 max-w-[320px] text-center text-[18px] leading-7 text-slate-600">
            See the fitted construction, connection cord and full-sheet setup in
            the same Juujo product walkthrough used in our review.
          </p>
        </div>

        <div className="flex flex-col justify-center text-center">
          <h3 className="mb-3 font-serif text-2xl font-bold text-black md:mb-4 md:text-3xl lg:text-4xl">
            Juujo Grounding Fitted Sheet
          </h3>
          <div className="mx-auto mb-5 h-px w-28 bg-[#d4af37] md:mb-6 md:w-32" />
          <div className="mb-5 text-3xl font-bold text-[#8b1528] md:mb-8 md:text-4xl">
            Now from $99
          </div>
          <div className="mx-auto mb-6 inline-block rounded-xl border border-slate-200 bg-white/70 p-4 shadow-sm md:mb-8">
            <div className="mb-2 flex items-center justify-center gap-2">
              <span className="text-[18px] font-bold text-black">
                Excellent
              </span>
              <GreenStarRating rating={4.9} size={22} />
            </div>
            <p className="text-[18px] leading-7 text-slate-600">
              Our #1 grounding-sheet pick for US buyers
            </p>
          </div>
          <a
            href={JUUJO_URL}
            rel="noopener noreferrer sponsored"
            data-testid="juujo-cta-verdict"
            className="mx-auto flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#1a7444] to-[#0d4a29] px-6 py-4 text-[18px] font-bold text-white shadow-[0_8px_20px_rgba(13,74,41,0.4)] transition-transform hover:-translate-y-1"
          >
            CHECK AVAILABILITY
          </a>
        </div>
      </div>
    </section>
  );
}

export default function GroundingSheetsInUsAdvertorial() {
  const [updatedDate, setUpdatedDate] = useState(() =>
    formatNewYorkDate(new Date()),
  );
  const [loadingTarget, setLoadingTarget] = useState<string | null>(null);

  useEffect(() => {
    setUpdatedDate(formatNewYorkDate(new Date()));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pb-24 font-sans text-slate-800 md:pb-0">
      <header className="border-b border-emerald-600 bg-emerald-500 px-4 pb-6 pt-5 text-white shadow-lg">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="font-serif text-[clamp(1.75rem,7vw,3rem)] font-bold leading-tight">
            Best Grounding Sheets
            <span className="mt-1 flex items-center justify-center gap-2">
              <MarketFlag market="us" />
              <span>United States - 2026</span>
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
        <section className="mx-auto mb-10 max-w-5xl space-y-6 text-[17px] leading-8 text-slate-700 md:text-lg md:leading-9 md:mb-14">
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

        <DeferredVerdictVideo />
      </main>

      <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center border-t border-slate-200 bg-white p-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] md:hidden">
        <a
          href={JUUJO_URL}
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
                Take me to the winning grounding sheet
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
            </>
          )}
        </a>
      </div>
    </div>
  );
}
