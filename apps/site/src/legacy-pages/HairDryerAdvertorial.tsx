"use client";
import { ExpandableDescription } from "@/components/ExpandableDescription";
import Script from "next/script";
import React, { useState, useRef } from "react";
import {
  CheckCircle2,
  XCircle,
  ChevronRight,
  ShieldCheck,
  Check,
  Play,
} from "lucide-react";
import { motion } from "motion/react";
import { GreenStarIcon, GreenStarRating } from "@/components/GreenStarRating";
import { MarketFlag } from "@/components/MarketFlag";
import { OutboundLoader } from "@/components/OutboundLoader";
import {
  getAdvertorialMarket,
  type AdvertorialMarket,
  type AdvertorialMarketKey,
  type ProductPriceKey,
} from "@/lib/advertorialMarkets";
import { useMarketUpdatedDate } from "@/lib/useMarketUpdatedDate";
import type { MarketContextProps } from "@/lib/marketContext";
import {
  MUUHU_HAIR_URL,
  type HairGuide,
  type HairGuideProduct,
} from "@/data/hairGuides";
import { bestHairDryerProductContent } from "@/data/bestHairDryerProductContent";
import { getMobileProsCons } from "./mobileProsCons";

const MUUHU_PACKAGING_URL = "https://uk.muuhu.com/pages/premium-packaging";
const MUUHU_COMB_URL = "https://uk.muuhu.com/products/muuhu-comb";
const MUUHU_EBOOK_URL = "https://uk.muuhu.com/pages/haircare-ebook";

function stripInlineHtml(text: string) {
  return text
    .replace(/<a\b[^>]*>(.*?)<\/a>/gi, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function removeBulletHeading(text: string) {
  const clean = stripInlineHtml(text);
  const colonIndex = clean.indexOf(":");

  if (colonIndex > -1 && colonIndex < 70) {
    return clean.slice(colonIndex + 1).trim();
  }

  return clean;
}

function trimWords(text: string, wordLimit = 14) {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length <= wordLimit) return text;

  return `${words
    .slice(0, wordLimit)
    .join(" ")
    .replace(/[,:;]+$/, "")}.`;
}

function summarizeMobilePoint(point: string) {
  const body = removeBulletHeading(point);
  const firstSentence = body.match(/^.*?[.!?](?:\s|$)/)?.[0]?.trim();
  const compact =
    firstSentence && firstSentence.length <= 130 ? firstSentence : body;

  return trimWords(compact);
}

export function MobileProsCons({
  productId,
  marketKey,
  fallbackPros,
  fallbackCons,
}: {
  productId: number;
  marketKey: string;
  fallbackPros: string[];
  fallbackCons: string[];
}) {
  const mobileData = getMobileProsCons(marketKey, productId);
  const pros = mobileData?.pros ?? fallbackPros.map(summarizeMobilePoint);
  const cons = mobileData?.cons ?? fallbackCons.map(summarizeMobilePoint);

  return (
    <div className="md:hidden grid grid-cols-1 gap-3 mb-8">
      <div className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-100">
        <h4 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-emerald-700">
          Pros
        </h4>
        <ul className="space-y-2.5">
          {pros.map((pro, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-sm leading-snug text-slate-700"
            >
              <Check size={16} className="mt-0.5 shrink-0 text-emerald-500" />
              <span dangerouslySetInnerHTML={{ __html: pro }} />
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-red-50/50 rounded-2xl p-4 border border-red-100">
        <h4 className="mb-3 text-sm font-extrabold uppercase tracking-wide text-red-700">
          Cons
        </h4>
        <ul className="space-y-2.5">
          {cons.map((con, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-sm leading-snug text-slate-700"
            >
              <XCircle size={16} className="mt-0.5 shrink-0 text-red-500" />
              <span dangerouslySetInnerHTML={{ __html: con }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function shouldShowProductCta(product: Product) {
  return product.isWinner || product.link !== "#";
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

const criteria = [
  "Real drying speed and airflow confidence",
  "Heat protection and temperature control",
  "Frizz reduction and smooth finish",
  "Weight, balance and arm fatigue",
  "Included dryer attachments and diffuser support",
  "Fit for fine, thick, curly and damaged hair",
  "Ease of daily blow-dry routine",
  "Warranty, returns and buyer reassurance",
  "Current UK price and offer clarity",
  "Total value beyond basic drying",
];

const threeWayCriteria = [
  "Current UK price and total value",
  "Included attachment count",
  "Drying speed and airflow confidence",
  "Curling and wave creation",
  "Smoothing and flyaway control",
  "Diffuser and textured-hair support",
  "Heat-control story",
  "Ease of understanding the bundle",
  "Warranty and guarantee strength",
  "Free gifts and offer clarity",
  "Brand trust versus price resistance",
  "Best buyer fit for search-ad visitors",
];

type Product = {
  id: number;
  rank: string;
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: string;
  link: string;
  isWinner: boolean;
  siliconWarning?: boolean;
  description?: string[];
  pros?: string[];
  cons?: string[];
  descriptionContent?: React.ReactNode;
  prosContent?: React.ReactNode;
  consContent?: React.ReactNode;
  attachments?: ProductAttachments;
  metrics: Array<{ label: string; value: number }>;
};

type ProductAttachments = {
  includedCount: number;
  items: AttachmentItem[];
  freeItems?: AttachmentItem[];
  freeLabel?: string;
};

type AttachmentItem = {
  image: string;
  label: string;
};

const ATTACHMENT_SLOT_COUNT = 7;

function attachmentCountLabel(count: number) {
  return `${count} ${count === 1 ? "Attachment" : "Attachments"}`;
}

function AttachmentTable({
  items,
  columns,
}: {
  items: AttachmentItem[];
  columns: 2 | 7;
}) {
  const slots = Array.from({ length: columns }, (_, index) => items[index]);

  return (
    <div
      className={`mx-auto grid max-w-full overflow-hidden border border-slate-300 ${
        columns === 7 ? "w-full grid-cols-7" : "w-[28.571428%] grid-cols-2"
      }`}
    >
      {slots.map((item, index) => (
        <div
          key={item?.image ?? `empty-attachment-${index}`}
          className="min-w-0 border-r border-slate-300 last:border-r-0"
        >
          {item ? (
            <>
              <div className="flex aspect-square items-center justify-center bg-white p-1.5 md:p-2">
                <img
                  src={item.image}
                  alt={item.label}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="px-0.5 pb-1.5 text-center text-[7px] font-medium leading-tight text-slate-900 sm:text-[9px] md:px-1 md:text-xs">
                {item.label}
              </div>
            </>
          ) : (
            <div className="aspect-square bg-white" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}

function IncludedAttachments({
  attachments,
}: {
  attachments: ProductAttachments;
}) {
  return (
    <div className="mb-8 bg-white">
      <h4 className="mb-5 text-center text-2xl font-bold text-slate-900 md:text-3xl">
        {attachmentCountLabel(attachments.includedCount)}
      </h4>
      <AttachmentTable items={attachments.items} columns={ATTACHMENT_SLOT_COUNT} />

      {attachments.freeItems?.length ? (
        <div className="mt-8 text-center">
          <div className="mb-1 text-3xl font-bold leading-none text-slate-900">
            +
          </div>
          <h5 className="mb-5 text-xl font-bold text-slate-900 md:text-2xl">
            {attachments.freeLabel}
          </h5>
          <AttachmentTable items={attachments.freeItems} columns={2} />
        </div>
      ) : null}
    </div>
  );
}

const baseProducts: Product[] = [
  {
    id: 1,
    rank: "#1",
    name: "Muuhu 7-in-1 High-Speed Hair Dryer",
    image: "/img/hair/muuhu_product_1x1.webp",
    price: "£149",
    originalPrice: "£299",
    rating: "4.9 / 5",
    link: "#",
    isWinner: true,
    description: [
      "Our top pick is the Muuhu 7-in-1 High-Speed Hair Dryer, a salon-grade device that outperforms far more expensive rivals with a 110,000 RPM brushless motor and seven professional attachments, including two Coanda auto-wrap curlers for effortless curls and waves.",
      "A major advantage is the complete styling system: a dedicated L-shaped base, left and right auto-wrap Coanda curlers, a smoothing brush, a round volumising brush, a concentrator nozzle, and a diffuser. Intelligent heat control and negative-ion technology dry hair fast while helping protect against heat damage, all from a UK 3-pin 220-240V plug.",
      "Trusted by over 16,000 customers with a 4.9-star rating, this styler delivers salon results at home. Currently priced at £149, it offers the best value on the market, combining a 110,000 RPM motor, seven attachments, ionic care, a 2-year warranty, and a 90-day money-back guarantee.",
    ],
    pros: [
      "Class-Leading Motor: 110,000 RPM brushless motor for fast, high-airflow drying that rivals devices costing three times as much.",
      "Complete 7-in-1 System: Seven attachments including two Coanda auto-wrap curlers, smoothing brush, round volumising brush, concentrator and diffuser, so one tool replaces a whole styling kit.",
      "Coanda Auto-Wrap: Left and right auto-wrap curlers draw hair in for salon-style curls and waves with no manual winding.",
      "Ionic + Intelligent Heat Control: Negative ions help reduce frizz while smart heat regulation helps protect hair from extreme heat damage.",
      "Outstanding Value: At £149 (was £299), it undercuts premium stylers by £200-£350 while including more attachments.",
      "Strong Assurance: Backed by a 2-year warranty and a 90-day money-back guarantee for a lower-risk trial.",
      "UK Ready: Supplied for UK 220-240V with a standard 3-pin plug, no travel adapter needed.",
    ],
    cons: [
      "Online Only: Available to buy online, not in high-street shops.",
      "Limited Stock: Popular demand means the £149 launch price may sell out.",
      "Slight Learning Curve: The Coanda auto-wrap curlers take a use or two to master, though most users are confident after the first session.",
    ],
    metrics: [
      { label: "Drying Speed", value: 97 },
      { label: "Styling Versatility", value: 98 },
      { label: "Ionic & Heat Control", value: 96 },
      { label: "Build Quality", value: 94 },
      { label: "Value for Money", value: 100 },
    ],
  },
  {
    id: 2,
    rank: "#2",
    name: "Dyson Airwrap",
    image: "/img/hair/dyson.webp",
    price: "£399.99",
    rating: "4.7 / 5",
    link: "#",
    isWinner: false,
    description: [
      "The Dyson Airwrap is the category's best-known name, using Coanda airflow to wrap hair and a digital motor for fast drying. It is a genuine premium styler with strong brand prestige.",
      "However, at £399.99 it costs more than 2.5x our top pick while shipping fewer styling attachments overall, and its bundles still leave gaps that the seven-piece Muuhu system covers out of the box.",
      "For buyers who want the Dyson name, it remains a capable choice, but the value gap is hard to ignore once you compare motor, attachment count, and what is included in the box.",
      "The weakness for paid-search shoppers is not performance; it is justification. Once a buyer sees a £149 complete kit with diffuser, brush heads, curlers, warranty and gifts, Dyson has to win mainly on brand prestige, which is why it sits behind Muuhu in our value ranking.",
    ],
    pros: [
      "Strong Brand & Coanda Tech: Dyson pioneered Coanda airflow wrapping and has unmatched name recognition.",
      "Good Social Proof: A 4.7-star rating from a large review base.",
      "Salon Heritage: Backed by Dyson's engineering reputation.",
    ],
    cons: [
      "Very High Price: At £399.99 it is dramatically more expensive than the £149 top pick for comparable core styling.",
      "Fewer Attachments: Standard bundles include fewer total attachments than the seven-piece system in our top pick.",
      "No Free Gift Bundle: Does not include the complimentary accessory and guide bundle offered with our top pick.",
      "Shorter Assurance: Warranty and trial terms are narrower than the 2-year warranty and 90-day guarantee on our top pick.",
    ],
    metrics: [
      { label: "Drying Speed", value: 92 },
      { label: "Styling Versatility", value: 84 },
      { label: "Ionic & Heat Control", value: 90 },
      { label: "Build Quality", value: 95 },
      { label: "Value for Money", value: 40 },
    ],
  },
  {
    id: 3,
    rank: "#3",
    name: "Shark FlexStyle",
    image: "/img/hair/shark.png",
    price: "£199",
    rating: "4.6 / 5",
    link: "#",
    isWinner: false,
    description: [
      "The Shark FlexStyle rotates from a powerful dryer into a versatile styler and is a respected mid-premium option with a no-heat-damage claim.",
      "At £199 it is still more than £50 above our top pick, and it does not include a pair of Coanda auto-wrap curlers or the full seven-attachment range out of the box.",
      "It is a solid dryer-styler, but on attachment completeness and total value it trails the seven-piece £149 system.",
      "For buyers who already trust Shark, it is a sensible middle option. The problem is the offer is less clean: shoppers still need to check exact bundle contents, diffuser support, curling tools and sale price, whereas Muuhu makes the full styling routine obvious in one page.",
    ],
    pros: [
      "Dryer-to-Styler Design: Twists between a fast dryer and a styling wand.",
      "Decent Brand: Shark is a trusted home-tech name with a 4.6-star rating.",
      "No-Heat-Damage Claim: Markets gentle styling temperatures.",
    ],
    cons: [
      "Higher Price: At £199 it costs more than our £149 top pick while including fewer attachments.",
      "No Auto-Wrap Curlers: Lacks the pair of Coanda auto-wrap curlers in our top pick.",
      "Smaller Attachment Set: Does not match the seven-piece completeness of our top pick.",
      "Weaker Assurance: Trial and warranty terms are narrower than the 2-year warranty and 90-day guarantee on our top pick.",
    ],
    metrics: [
      { label: "Drying Speed", value: 88 },
      { label: "Styling Versatility", value: 80 },
      { label: "Ionic & Heat Control", value: 86 },
      { label: "Build Quality", value: 88 },
      { label: "Value for Money", value: 55 },
    ],
  },
  {
    id: 4,
    rank: "#4",
    name: "ghd Helios",
    image: "/img/hair/ghd.jpg",
    price: "£189",
    rating: "4.5 / 5",
    link: "#",
    isWinner: false,
    description: [
      "The ghd Helios is a beloved professional dryer with a strong motor and a premium feel, a favourite among salon stylists.",
      "But it is a dryer only, not a styling system. It ships with a single concentrator and no Coanda auto-wrap curlers, no round brush, no diffuser, and no curl/wave function out of the box.",
      "At £189 it costs more than our £149 top pick while delivering a fraction of the styling versatility, since it cannot curl or wave hair automatically.",
      "It is best for someone who already owns curling and brush tools. If a shopper is starting from zero or wants one purchase to cover drying, smoothing, volume, curls and diffusing, Muuhu's wider attachment set is easier to recommend.",
    ],
    pros: [
      "Salon-Grade Dryer: Well-regarded by professionals for smooth, fast drying.",
      "Premium Build: Solid, comfortable, professional feel with a 4.5-star rating.",
      "Strong Brand: ghd is a trusted name in hair styling.",
    ],
    cons: [
      "Dryer Only, No Styling System: Ships with a single concentrator, no Coanda curlers, no brushes, no diffuser.",
      "No Auto Curl/Wave: Cannot create curls or waves automatically like our top pick's Coanda curlers.",
      "Higher Price for Less: At £189 it costs more than the £149 top pick while covering far fewer styles.",
      "No Free Gift Bundle: Misses the complimentary accessory and guide bundle included with our top pick.",
    ],
    metrics: [
      { label: "Drying Speed", value: 90 },
      { label: "Styling Versatility", value: 50 },
      { label: "Ionic & Heat Control", value: 82 },
      { label: "Build Quality", value: 92 },
      { label: "Value for Money", value: 52 },
    ],
  },
  {
    id: 5,
    rank: "#5",
    name: "L'Oréal AirLight Pro",
    image: "/img/hair/loreal_new.webp",
    price: "£350",
    rating: "4.3 / 5",
    link: "#",
    isWinner: false,
    description: [
      "The L'Oréal Professionnel AirLight Pro is an infrared dryer with a premium salon positioning and two magnetic attachments.",
      "At £350 it is the most expensive on this list after Dyson, yet it ships with only two attachments and no Coanda auto-wrap curlers, so its styling range is the narrowest of the premium options.",
      "For the price, buyers get a capable dryer but not the complete seven-piece styling system or the value of our £149 top pick.",
      "It is interesting technology for salon-focused buyers, but the landing-page value case is difficult. At £350, shoppers expect a complete routine, and the AirLight Pro feels more like a premium dryer than an all-in-one styling system.",
    ],
    pros: [
      "Infrared Technology: Uses infrared light for fast, gentle drying.",
      "Salon Brand: L'Oréal Professionnel heritage with a 4.3-star rating.",
      "Magnetic Attachments: Two auto-detect magnetic heads.",
    ],
    cons: [
      "Very High Price: At £350 it is more than double our £149 top pick.",
      "Only Two Attachments: Ships with just two heads, no Coanda curlers, no full brush set, no diffuser.",
      "No Auto-Wrap Curling: Lacks the Coanda auto-wrap curlers in our top pick.",
      "Narrowest Versatility: Fewest styling options of the premium stylers reviewed.",
    ],
    metrics: [
      { label: "Drying Speed", value: 86 },
      { label: "Styling Versatility", value: 48 },
      { label: "Ionic & Heat Control", value: 84 },
      { label: "Build Quality", value: 90 },
      { label: "Value for Money", value: 38 },
    ],
  },
];

const canadaCompetitorProducts: Product[] = [];

const productPriceKeys: Record<number, ProductPriceKey> = {
  1: "buudy",
  2: "currentbody",
  3: "omnilux",
  4: "shark",
  5: "drdenis",
};

const legacyPound = String.fromCharCode(163);

function replaceMarketLanguage(text: string, market: AdvertorialMarket) {
  return text
    .replaceAll("United Kingdom", market.countryName)
    .replaceAll("UK buyers", market.buyerLabel)
    .replaceAll("the UK market", `the ${market.marketLabel}`)
    .replaceAll("UK market", market.marketLabel)
    .replaceAll("in the UK", `in ${market.titleCountry}`);
}

function replaceMarketPrices(text: string, market: AdvertorialMarket) {
  const prices = market.productPrices;

  return text
    .replaceAll(
      `${legacyPound}679.99`,
      prices.currentbody.fullCoveragePrice ?? prices.currentbody.price,
    )
    .replaceAll(`${legacyPound}399.99`, prices.currentbody.price)
    .replaceAll(
      `${legacyPound}400`,
      prices.currentbody.roundedPrice ?? prices.currentbody.price,
    )
    .replaceAll(`${legacyPound}348`, prices.omnilux.price)
    .replaceAll(`${legacyPound}269.99`, prices.shark.price)
    .replaceAll(`${legacyPound}455`, prices.drdenis.price)
    .replaceAll(
      `${legacyPound}500`,
      prices.drdenis.premiumPriceLabel ?? prices.drdenis.price,
    )
    .replaceAll(
      `${legacyPound}696`,
      prices.omnilux.fullCoveragePrice ?? prices.omnilux.price,
    )
    .replaceAll(
      `${legacyPound}449`,
      prices.buudy.originalPrice ?? prices.buudy.price,
    )
    .replaceAll(`${legacyPound}179`, prices.buudy.price)
    .replaceAll(
      `${legacyPound}40`,
      prices.currentbody.restockingFee ?? prices.currentbody.price,
    );
}

function localizeProductCopy(
  text: string,
  market: AdvertorialMarket,
  _productKey: ProductPriceKey,
) {
  if (market.key === "uk") return text;
  return replaceMarketPrices(replaceMarketLanguage(text, market), market);
}

function localizeBaseProduct(
  product: Product,
  market: AdvertorialMarket,
): Product {
  const productKey = productPriceKeys[product.id];
  const productPrice = market.productPrices[productKey];
  const {
    descriptionContent: _descriptionContent,
    prosContent: _prosContent,
    consContent: _consContent,
    ...localizableProduct
  } = product;

  return {
    ...localizableProduct,
    price: productPrice?.price ?? product.price,
    originalPrice: productPrice?.originalPrice ?? product.originalPrice,
    link: product.isWinner ? (market.muuhuUrl ?? "#") : product.link,
    description: (product.description ?? []).map((copy) =>
      localizeProductCopy(copy, market, productKey),
    ),
    pros: (product.pros ?? []).map((copy) =>
      localizeProductCopy(copy, market, productKey),
    ),
    cons: (product.cons ?? []).map((copy) =>
      localizeProductCopy(copy, market, productKey),
    ),
  };
}

function getCanadaProducts(market: AdvertorialMarket): Product[] {
  const muuhu = {
    ...localizeBaseProduct(baseProducts[0], market),
    link: market.muuhuUrl ?? "#",
    metrics: [
      { label: "Drying Speed", value: 97 },
      { label: "Styling Versatility", value: 98 },
      { label: "Ionic & Heat Control", value: 96 },
      { label: "Build Quality", value: 94 },
      { label: "Value for Money", value: 100 },
    ],
  };

  return [muuhu, ...canadaCompetitorProducts];
}

function getProductsForMarket(market: AdvertorialMarket): Product[] {
  if (market.key === "uk") {
    return baseProducts.map((product) =>
      product.isWinner
        ? { ...product, link: market.muuhuUrl ?? product.link }
        : product,
    );
  }
  if (market.key === "ca") return getCanadaProducts(market);

  return baseProducts.map((product) => localizeBaseProduct(product, market));
}

function getBestHairDryerProductsForMarket(
  market: AdvertorialMarket,
): Product[] {
  if (market.key === "uk") {
    return bestHairDryerProducts.map((product) =>
      product.isWinner
        ? { ...product, link: market.muuhuUrl ?? product.link }
        : product,
    );
  }

  return bestHairDryerProducts.map((product) =>
    localizeBaseProduct(product, market),
  );
}

function getThreeWayProducts(products: Product[]) {
  const muuhu = products.find((product) => product.id === 1);
  const shark = products.find((product) => product.id === 3);
  const dyson = products.find((product) => product.id === 2);

  return [muuhu, shark, dyson]
    .filter((product): product is Product => Boolean(product))
    .map((product, index) => ({ ...product, rank: `#${index + 1}` }));
}

const defaultGuideCriteria = [
  "Current UK price and total value",
  "Included attachment count",
  "Drying speed and airflow confidence",
  "Styling versatility across daily routines",
  "Curling and wave creation",
  "Smoothing and flyaway control",
  "Diffuser and textured-hair support",
  "Heat-control story",
  "Warranty and guarantee strength",
  "Free gifts and offer clarity",
  "Brand trust versus price resistance",
  "Best buyer fit for search-ad visitors",
];

const bestHairDryerProducts: Product[] = [
  {
    id: 1,
    rank: "",
    name: "Muuhu 7-in-1 High-Speed Hair Dryer",
    image: "/img/hair/muuhu-product-1a.webp",
    price: "£149",
    originalPrice: "£299",
    rating: "4.9 / 5",
    link: "#",
    isWinner: true,
    ...bestHairDryerProductContent.muuhu,
    attachments: {
      includedCount: 7,
      items: [
        {
          image: "/img/hair/attachments/muuhu-attachment-1.webp",
          label: "Diffuser",
        },
        {
          image: "/img/hair/attachments/muuhu-attachment-2.webp",
          label: "Concentrator",
        },
        {
          image: "/img/hair/attachments/muuhu-attachment-3.webp",
          label: "Round Brush",
        },
        {
          image: "/img/hair/attachments/muuhu-attachment-4.webp",
          label: "Left Curler",
        },
        {
          image: "/img/hair/attachments/muuhu-attachment-5.webp",
          label: "Right Curler",
        },
        {
          image: "/img/hair/attachments/muuhu-attachment-6.webp",
          label: "Smoothing Brush",
        },
        {
          image: "/img/hair/attachments/muuhu-attachment-7.webp",
          label: "Paddle Brush",
        },
      ],
      freeLabel: "2 Free Attachments (using promo code: xyz)",
      freeItems: [
        {
          image: "/img/hair/attachments/muuhu-extra-attachment-1.webp",
          label: "Bonus Comb",
        },
        {
          image: "/img/hair/attachments/muuhu-extra-attachment-2.webp",
          label: "Bonus Nozzle",
        },
      ],
    },
    metrics: [
      { label: "Drying Speed", value: 97 },
      { label: "Heat Protection", value: 96 },
      { label: "Frizz Control", value: 95 },
      { label: "Attachment Value", value: 98 },
      { label: "Value for Money", value: 100 },
    ],
  },
  {
    id: 2,
    rank: "",
    name: "Dyson Supersonic Nural",
    image: "/img/hair/dyson_hairdryer_new.webp",
    price: "£299.99",
    originalPrice: "£399.99",
    rating: "4.4 / 5",
    link: "https://amzn.to/4yH7gW5",
    isWinner: false,
    ...bestHairDryerProductContent.dysonSupersonic,
    attachments: {
      includedCount: 5,
      items: [
        {
          image: "/img/hair/attachments/dyson-attachment-1.jpg",
          label: "Flyaway",
        },
        {
          image: "/img/hair/attachments/dyson-attachment-2.jpg",
          label: "Gentle Air",
        },
        {
          image: "/img/hair/attachments/dyson-attachment-3.jpg",
          label: "Diffuser",
        },
        {
          image: "/img/hair/attachments/dyson-attachment-4.jpg",
          label: "Wide-Tooth Comb",
        },
        {
          image: "/img/hair/attachments/dyson-attachment-5.jpg",
          label: "Concentrator",
        },
      ],
    },
    metrics: [
      { label: "Drying Speed", value: 95 },
      { label: "Heat Protection", value: 95 },
      { label: "Frizz Control", value: 93 },
      { label: "Attachment Value", value: 86 },
      { label: "Value for Money", value: 64 },
    ],
  },
  {
    id: 4,
    rank: "",
    name: "Cloud Nine Airshot Pro",
    image: "/img/hair/cloudenine.webp",
    price: "£229",
    rating: "4.5 / 5",
    link: "https://amzn.to/4fmAX7o",
    isWinner: false,
    ...bestHairDryerProductContent.cloudNineAirshotPro,
    attachments: {
      includedCount: 3,
      items: [
        {
          image: "/img/hair/attachments/cloudnine-attachment-1.webp",
          label: "Diffuser",
        },
        {
          image: "/img/hair/attachments/cloudnine-attachment-2.webp",
          label: "Precision Nozzle",
        },
        {
          image: "/img/hair/attachments/cloudnine-attachment-3.webp",
          label: "Wide Nozzle",
        },
      ],
    },
    metrics: [
      { label: "Drying Speed", value: 91 },
      { label: "Heat Protection", value: 88 },
      { label: "Frizz Control", value: 89 },
      { label: "Attachment Value", value: 76 },
      { label: "Value for Money", value: 72 },
    ],
  },
  {
    id: 3,
    rank: "",
    name: "Shark SpeedStyle Pro",
    image: "/img/hair/shark_hairdryer.webp",
    price: "£169.99",
    rating: "4.6 / 5",
    link: "https://amzn.to/4htIum3",
    isWinner: false,
    ...bestHairDryerProductContent.sharkSpeedStyleProFlex,
    attachments: {
      includedCount: 4,
      items: [
        {
          image: "/img/hair/attachments/shark-attachment-1.webp",
          label: "QuickSmooth Brush",
        },
        {
          image: "/img/hair/attachments/shark-attachment-2.webp",
          label: "Diffuser",
        },
        {
          image: "/img/hair/attachments/shark-attachment-3.webp",
          label: "Smoothing Brush",
        },
        {
          image: "/img/hair/attachments/shark-attachment-4.webp",
          label: "Concentrator",
        },
      ],
    },
    metrics: [
      { label: "Drying Speed", value: 89 },
      { label: "Heat Protection", value: 87 },
      { label: "Frizz Control", value: 86 },
      { label: "Attachment Value", value: 74 },
      { label: "Value for Money", value: 70 },
    ],
  },
  {
    id: 5,
    rank: "",
    name: "ghd Helios",
    image: "/img/hair/ghd.jpg",
    price: "£189",
    rating: "4.5 / 5",
    link: "https://amzn.to/4xmMeuD",
    isWinner: false,
    ...bestHairDryerProductContent.ghdHelios,
    attachments: {
      includedCount: 1,
      items: [
        {
          image: "/img/hair/attachments/ghd-attachment-1.webp",
          label: "Concentrator",
        },
      ],
    },
    metrics: [
      { label: "Drying Speed", value: 90 },
      { label: "Heat Protection", value: 82 },
      { label: "Frizz Control", value: 82 },
      { label: "Attachment Value", value: 55 },
      { label: "Value for Money", value: 60 },
    ],
  },
];

const prosLabels = [
  "Best fit",
  "Styling range",
  "Value case",
  "Confidence",
  "Daily use",
  "Buyer advantage",
];

const consLabels = [
  "Watchout",
  "Bundle note",
  "Buyer note",
  "Value note",
  "Fit note",
];

function ensureLabel(point: string, labels: string[], index: number) {
  if (point.includes(":")) return point;
  return `${labels[index] ?? "Point"}: ${point}`;
}

function normalizeGuideCriteria(guide: HairGuide) {
  const seen = new Set<string>();
  const merged = [...guide.criteria, ...defaultGuideCriteria].filter((item) => {
    const key = item.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return merged.slice(0, Math.max(10, Math.min(12, merged.length)));
}

function guideHeadlineTitle(guide: HairGuide) {
  return guide.headline.replace(/\s+UK\s+2026$/i, "").replace(/\s+UK$/i, "");
}

function isDirectVsGuide(guide: HairGuide) {
  return (
    guide.slug === "muuhu-vs-dyson-supersonic-nural-uk" ||
    guide.slug === "muuhu-vs-shark-speedstyle-pro-uk" ||
    guide.slug === "muuhu-vs-ghd-helios-uk"
  );
}

function shouldKeepGuideProduct(guide: HairGuide, product: HairGuideProduct) {
  if (!isDirectVsGuide(guide)) return true;

  const name = product.name.toLowerCase();
  if (product.isWinner || name.includes("muuhu")) return true;
  if (guide.slug === "muuhu-vs-dyson-supersonic-nural-uk")
    return name.includes("dyson");
  if (guide.slug === "muuhu-vs-shark-speedstyle-pro-uk")
    return name.includes("shark");
  if (guide.slug === "muuhu-vs-ghd-helios-uk")
    return name.includes("ghd") || name.includes("helios");

  return false;
}

function guideProductId(product: HairGuideProduct) {
  const name = product.name.toLowerCase();
  if (name.includes("muuhu")) return 1;
  if (name.includes("dyson")) return 2;
  if (name.includes("shark")) return 3;
  if (name.includes("cloud nine")) return 4;
  if (name.includes("ghd")) return 5;
  if (
    name.includes("l'oreal") ||
    name.includes("l’oréal") ||
    name.includes("loreal")
  )
    return 5;
  return Number(product.rank) || 99;
}

function guideProductDescription(product: HairGuideProduct, guide: HairGuide) {
  const comparisonFocus = normalizeGuideCriteria(guide).slice(0, 4).join(", ");
  const intent = guide.cardTitle.toLowerCase();

  if (product.isWinner) {
    return [
      `${product.summary} For ${intent}, that combination matters because buyers need a dryer that handles the specific routine without forcing them to purchase several separate tools.`,
      `${guide.quickTake} Muuhu is positioned as the No. 1 pick after weighting ${comparisonFocus}. Its diffuser, concentrator, brushes and left/right curlers let the page adapt the recommendation to the search intent while keeping the underlying product specifications consistent.`,
      `The deciding points are practical: ${guide.winnerBullets.join(" ")} The £149 offer, official £127 gift bundle, 2-year warranty and 90-day guarantee make the recommendation easier to trust without dismissing the genuine strengths of the established brands.`,
    ];
  }

  return [
    `${product.summary} On this ${intent} page, those strengths matter because ${normalizeGuideCriteria(guide)
      .slice(0, 2)
      .join(" and ")
      .toLowerCase()} directly shape the buyer's result.`,
    `${product.name} has a clear place in the comparison for ${product.bestFor.toLowerCase()} It is treated as a credible option because its established strengths, current UK price and included attachments may be the better fit for a shopper who values its particular dryer-first experience.`,
    `Muuhu moves ahead on the combined buying case rather than by attacking that strength. When we weight ${comparisonFocus}, Muuhu's £149 seven-attachment kit, £127 gift offer, 2-year warranty and 90-day guarantee make the decision easier for value-focused shoppers. ${guide.winnerBullets[0]}`,
  ];
}

function guideProductToAdvertorialProduct(
  product: HairGuideProduct,
  guide: HairGuide,
  index: number,
): Product {
  const approvedProduct = bestHairDryerProducts.find(
    (candidate) => candidate.id === guideProductId(product),
  );
  const description = guideProductDescription(product, guide);

  if (approvedProduct) {
    return {
      ...approvedProduct,
      rank: `#${index + 1}`,
      description,
      descriptionContent: undefined,
      isWinner: Boolean(product.isWinner),
      link: product.link ?? approvedProduct.link,
    };
  }

  return {
    id: guideProductId(product),
    rank: `#${index + 1}`,
    name: product.name,
    image: product.image,
    price: product.price,
    originalPrice: product.isWinner ? "£299" : undefined,
    rating: product.rating,
    link: product.isWinner
      ? (product.link ?? MUUHU_HAIR_URL)
      : (product.link ?? "#"),
    isWinner: Boolean(product.isWinner),
    description,
    pros: product.pros.map((point, pointIndex) =>
      ensureLabel(point, prosLabels, pointIndex),
    ),
    cons: product.watchouts.map((point, pointIndex) =>
      ensureLabel(point, consLabels, pointIndex),
    ),
    metrics: product.metrics,
  };
}

function getGuideProducts(guide: HairGuide) {
  return guide.products
    .filter((product) => shouldKeepGuideProduct(guide, product))
    .map((product, index) =>
      guideProductToAdvertorialProduct(product, guide, index),
    );
}

const ATTRIBUTION_QUERY_KEYS = [
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

function prepareOutboundNavigation(
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  placement = "comparison_page",
) {
  if (href === "#") {
    event.preventDefault();
    return;
  }

  try {
    const destination = new URL(href, window.location.href);
    if (destination.hostname !== "uk.muuhu.com") return;

    const current = new URL(window.location.href);
    ATTRIBUTION_QUERY_KEYS.forEach((key) => {
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
      destination.searchParams.set("utm_campaign", "uk_hair_dryer_2026");
    }

    event.currentTarget.href = destination.toString();

    const trackingWindow = window as TrackingWindow;
    const payload = {
      event_category: "comparison",
      event_label: placement,
      outbound_url: destination.toString(),
      page_type: "best_hair_dryer_uk_2026",
    };

    trackingWindow.dataLayer = trackingWindow.dataLayer ?? [];
    trackingWindow.dataLayer.push({
      event: "muuhu_outbound_click",
      ecommerce: null,
      ...payload,
    });

    trackingWindow.uetq?.push("event", "muuhu_outbound_click", payload);
    trackingWindow.uetq?.push("event", "affiliate_click", payload);
  } catch {
    // Keep the original native anchor navigation if attribution cannot be added.
  }
}

type OutboundButtonProps = {
  href: string;
  className: string;
  ariaLabel: string;
  children: React.ReactNode;
};

function OutboundButton({
  href,
  className,
  ariaLabel,
  children,
}: OutboundButtonProps) {
  return (
    <a
      href={href === "#" ? undefined : href}
      aria-label={ariaLabel}
      aria-busy="false"
      aria-disabled={href === "#" ? true : undefined}
      data-outbound-button="true"
      data-loading="false"
      onClick={(event) =>
        prepareOutboundNavigation(event, href, ariaLabel)
      }
      className={`relative ${className}`}
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

function mergeClassNames(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

function flattenReactChildren(children: React.ReactNode): React.ReactNode[] {
  const flattened: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === React.Fragment) {
      flattened.push(
        ...flattenReactChildren(
          (child.props as { children?: React.ReactNode }).children,
        ),
      );
      return;
    }

    flattened.push(child);
  });

  return flattened;
}

function renderEditableProductList(
  content: React.ReactNode,
  variant: "pros" | "cons",
) {
  const Icon = variant === "pros" ? Check : XCircle;
  const iconClass =
    variant === "pros" ? "text-emerald-500" : "text-red-500";

  return flattenReactChildren(content).map((child, idx) => {
    const key = React.isValidElement(child) ? (child.key ?? idx) : idx;

    if (React.isValidElement(child) && child.type === "li") {
      const props = child.props as {
        children?: React.ReactNode;
        className?: string;
      };

      return (
        <li
          key={key}
          className={mergeClassNames(
            "text-base text-slate-700 flex items-start gap-3",
            props.className,
          )}
        >
          <Icon size={20} className={`${iconClass} shrink-0 mt-0.5`} />
          <span>{props.children}</span>
        </li>
      );
    }

    return (
      <li
        key={key}
        className="text-base text-slate-700 flex items-start gap-3"
      >
        <Icon size={20} className={`${iconClass} shrink-0 mt-0.5`} />
        <span>{child}</span>
      </li>
    );
  });
}

type HairDryerAdvertorialMode = "best" | "three-way";

export default function HairDryerAdvertorial({
  market: marketKey = "uk",
  context,
  mode = "best",
  guide,
}: {
  market?: AdvertorialMarketKey;
  mode?: HairDryerAdvertorialMode;
  guide?: HairGuide;
} & MarketContextProps) {
  const market = getAdvertorialMarket(marketKey);
  const updatedDate = useMarketUpdatedDate(market, context.updatedDate);
  const isThreeWay = mode === "three-way";
  const allProducts = getProductsForMarket(market);
  const bestHairDryerProductsForMarket =
    getBestHairDryerProductsForMarket(market);
  const products = guide
    ? getGuideProducts(guide)
    : isThreeWay
      ? getThreeWayProducts(allProducts)
      : bestHairDryerProductsForMarket;
  const activeCriteria = guide
    ? normalizeGuideCriteria(guide)
    : isThreeWay
      ? threeWayCriteria
      : criteria;
  const expertProfile = {
    name: "Amara Wright",
    title: "Haircare and hair style expert",
    image: "/img/hair/styler_image.webp",
    yearsExperience: 12,
    dryersReviewed: 22,
    testingHours: 240,
  };
  const heroImage = guide
    ? guide.heroImage
    : isThreeWay
      ? "/img/hair/vs-dyson-shark-muuhu.webp"
      : market.key === "uk"
        ? "/img/hair/top-5-hair-dryer.png"
        : market.key === "ca"
          ? "/img/hair/top5-uk.webp"
          : "/img/hair/top5-uk.webp";
  const headlineTitle = guide
    ? guideHeadlineTitle(guide)
    : isThreeWay
      ? "Dyson vs Shark vs Muuhu"
      : "Best Hair Dryer";
  const heroAlt =
    guide?.heroAlt ??
    (isThreeWay
      ? `Dyson vs Shark vs Muuhu comparison for ${market.titleCountry}`
      : `Top hair dryers comparison for ${market.titleCountry}`);
  const showBestHairRankRibbons = market.key === "uk";
  const showBestHairAttachments = market.key === "uk";
  const heroImageClass = guide
    ? guide.heroImage.includes("top-5-hair-dryer")
      ? "max-w-5xl h-auto object-contain"
      : "max-w-4xl aspect-[1400/960] object-contain bg-[#f8f4e6]"
    : isThreeWay
      ? "max-w-4xl aspect-[1400/960] object-contain bg-[#f8f4e6]"
      : market.key === "uk"
        ? "max-w-5xl h-auto object-contain"
        : "max-w-5xl aspect-[1536/461] object-cover";
  const [isVerdictVideoPlaying, setIsVerdictVideoPlaying] = useState(false);
  const verdictVideoRef = useRef<HTMLVideoElement | null>(null);

  const playVerdictVideo = () => {
    const video = verdictVideoRef.current;
    if (!video) return;

    video.play().catch(() => {
      setIsVerdictVideoPlaying(false);
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-24 md:pb-0">
      <Script
        src="/assets/muuhu-hair-dryer-exit-popup.js"
        strategy="afterInteractive"
      />
      {/* Header / Hero */}
      <div className="bg-emerald-500 border-b border-emerald-600 pt-5 pb-6 px-4 md:pt-6 md:pb-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="mx-[-0.25rem] text-[clamp(1.3rem,6.6vw,2.5rem)] md:mx-0 md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 md:mb-6 font-serif text-center">
            <span className="block">{headlineTitle}</span>
            <span className="mt-2 flex items-center justify-center gap-2 text-[0.72em] md:gap-3">
              <MarketFlag market={market.flagKey} />
              <span>{market.headingCountry} - 2026</span>
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2 md:gap-2.5 text-base md:text-lg font-bold text-white">
            <CheckCircle2 size={20} className="text-white shrink-0" />
            Last updated –{" "}
            <span suppressHydrationWarning>{updatedDate}</span>
          </div>
        </div>
      </div>

      <header className="bg-white border-b border-slate-200 pt-10 pb-12 px-4 md:pt-12 md:pb-16">
        <div className="max-w-6xl mx-auto text-center">
          <img
            src={heroImage}
            alt={heroAlt}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className={`w-full mx-auto rounded-3xl shadow-xl border border-slate-100 mb-10 md:mb-12 ${heroImageClass}`}
          />

          <div className="bg-white p-6 md:p-8 rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.1)] max-w-5xl mx-auto border border-slate-100 text-slate-800">
            <div className="flex flex-col md:block items-center text-center md:text-left w-full">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                <img
                  src={expertProfile.image}
                  alt={expertProfile.name}
                  className="w-24 h-24 md:w-24 md:h-24 rounded-full object-cover mb-2 md:mb-0"
                />
                <div>
                  <h3 className="font-bold text-xl md:text-2xl underline text-slate-900">
                    {expertProfile.name}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-semibold mt-1">
                    {expertProfile.title}
                  </p>
                </div>
              </div>

              <div className="text-sm md:text-base text-slate-700 leading-relaxed mb-6">
                {guide ? (
                  <p>
                    With {expertProfile.yearsExperience} years of experience in
                    hair styling and salon-grade haircare,{" "}
                    <strong className="text-slate-900">
                      {expertProfile.name}
                    </strong>{" "}
                    is a certified haircare and hair style expert. She reviewed{" "}
                    this UK guide for {guide.cardTitle.toLowerCase()}. She
                    compared {activeCriteria.slice(0, 5).join(", ")}, buyer
                    confidence, current pricing and offer clarity. Her main
                    finding was simple: Muuhu made the strongest No. 1 case
                    because it combines a complete 7-in-1 styling system with a
                    cleaner £149 value story.
                  </p>
                ) : isThreeWay ? (
                  <p>
                    With {expertProfile.yearsExperience} years of experience in
                    hair styling and salon-grade haircare,{" "}
                    <strong className="text-slate-900">
                      {expertProfile.name}
                    </strong>{" "}
                    reviewed the three premium stylers UK shoppers compare most
                    often: Muuhu, Shark FlexStyle and Dyson Airwrap. She looked
                    at price, attachments, drying speed, curling, smoothing,
                    diffuser support, heat control, warranty, offer clarity and
                    buyer fit. Dyson has prestige and Shark has familiarity, but
                    Muuhu made the strongest first-click case for shoppers who
                    want a complete kit at a clearer price.
                  </p>
                ) : market.key === "ca" ? (
                  <p>
                    Our editorial team compared 22 of the most popular hair
                    dryers over 240+ hours, evaluating motor speed, ionic care,
                    heat control, attachments, Coanda styling, reviews, price,
                    and warranty. Our biggest finding was simple: the most
                    expensive dryer was not always the best choice. The
                    strongest options paired a fast brushless motor, real ionic
                    care, and a complete attachment set with a fair price.
                  </p>
                ) : (
                  <p>
                    With {expertProfile.yearsExperience} years of experience in
                    hair styling and salon-grade haircare,{" "}
                    <strong className="text-slate-900">
                      {expertProfile.name}
                    </strong>{" "}
                    is a certified haircare and hair style expert. She reviewed{" "}
                    {expertProfile.dryersReviewed} popular{" "}
                    {market.headingCountry} hair dryers over{" "}
                    {expertProfile.testingHours} hours, comparing motor speed,
                    heat protection, frizz control, dryer attachments, diffuser
                    support, weight, reviews, price, and warranty. Her biggest
                    finding was simple: the most expensive dryer was not always
                    the best. The strongest options paired a fast brushless
                    motor, real ionic care, and useful dryer attachments with a
                    fair price.
                  </p>
                )}
              </div>

              <hr className="border-slate-200 w-full mb-4" />

              {market.key === "ca" ? null : (
                <div className="text-xs md:text-sm italic text-slate-600 md:text-right">
                  * Recommended by over 1,000 {market.buyerLabel} hair styling
                  users.
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="prose prose-lg prose-slate w-full max-w-none mb-16 space-y-6">
          {guide ? (
            <>
              <p>{guide.quickTake}</p>
              {guide.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                Below, we use the same review structure as our full Best Hair
                Dryer ranking, but focus the scoring and copy around this page's
                search intent so UK buyers can compare quickly without losing
                the fair product-by-product context.
              </p>
            </>
          ) : isThreeWay ? (
            <>
              <p>
                Dyson, Shark and Muuhu are the three names UK shoppers often
                compare before buying an air styler. The choice looks simple at
                first, but the real difference is not only brand name; it is how
                much styling routine you get for the price.
              </p>
              <p>
                We compared these three products across{" "}
                <strong>12 practical buying points</strong>, including current
                UK price, attachment count, drying speed, curl creation,
                smoothing control, diffuser support, warranty, guarantee, free
                gifts and how clearly the offer answers a paid-search buyer's
                doubts.
              </p>
              <p>
                Dyson remains the prestige pick and Shark is the familiar
                mid-premium alternative. Muuhu ranks first here because it gives
                shoppers the easiest value story to understand: a 7-in-1 styling
                kit, Coanda-style curlers, diffuser, brushes, intelligent heat
                control, official gifts and a lower price.
              </p>
              <p>
                Below, we use the same review structure as our full Best Hair
                Dryer ranking, but focus only on the three products buyers are
                most likely to compare side by side.
              </p>
            </>
          ) : (
            <>
              <p>
                Finding a hair dryer is easy. Knowing which one is actually
                worth the money is the hard part. Prices range from{" "}
                <strong>{market.priceRange}</strong>, and many brands make
                almost identical claims about drying speed, shine, frizz
                control, and salon results.
              </p>
              {market.key === "ca" ? (
                <p>
                  We compared{" "}
                  <strong>22 of the most popular hair dryers</strong> over 240+
                  hours, evaluating motor speed, ionic care, heat control,
                  attachments, Coanda styling, ease of use, reviews, price, and
                  warranty.
                </p>
              ) : (
                <p>
                  So we tested{" "}
                  <strong>22 of the most popular hair dryers</strong> over{" "}
                  <strong>240+ hours</strong>, comparing motor speed, heat
                  protection, frizz control, dryer attachments, diffuser
                  support, ease of use, reviews, price, and warranty.
                </p>
              )}
              <p>
                The biggest finding was simple: a higher price did not always
                mean better results. The best dryers paired a fast brushless
                motor, real ionic care, and a practical dryer attachment set
                with a fair price.
              </p>
              <p>
                Below, we rank the hair dryers that actually stood out,
                including{" "}
                {market.key === "ca"
                  ? "our editorial recommendation for Canadian buyers."
                  : `the one we believe offers the strongest balance of drying performance, heat care, frizz control, and value for ${market.buyerLabel}.`}
              </p>
            </>
          )}
        </div>

        {/* Criteria */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-5 min-[360px]:p-5 md:p-10 shadow-sm border border-slate-200 mb-10 md:mb-16 w-full">
          <h2 className="text-[1.35rem] md:text-3xl font-bold text-slate-900 mb-5 md:mb-8 text-center font-serif leading-tight">
            We evaluated hair dryers based on {activeCriteria.length} criteria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-4 mb-5 md:mb-8">
            {activeCriteria.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 md:gap-3">
                <ShieldCheck className="text-emerald-500 shrink-0 mt-0.5 h-[18px] w-[18px] md:h-5 md:w-5" />
                <span className="font-semibold text-slate-700 text-[15px] md:text-base leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100 text-[14px] md:text-base leading-snug md:leading-relaxed">
            {guide ? (
              <>
                For this page, we reviewed the products against{" "}
                <strong>{activeCriteria.length} practical buying points</strong>{" "}
                and weighted the result around {guide.cardTitle.toLowerCase()}.
                Based on <strong>editorial evaluation</strong>,{" "}
                <strong>offer clarity</strong>, and{" "}
                <strong>consumer-facing value</strong>, Muuhu stood out as the
                strongest No. 1 choice for UK shoppers.
              </>
            ) : isThreeWay ? (
              <>
                For this direct comparison, we reviewed the three models UK
                shoppers most often compare before buying. Based on{" "}
                <strong>editorial evaluation</strong>,{" "}
                <strong>offer clarity</strong>, and{" "}
                <strong>consumer-facing value</strong>, Muuhu stood out as the
                strongest first choice for buyers balancing performance, styling
                range, confidence and price.
              </>
            ) : market.key === "ca" ? (
              <>
                We compared these hair dryers based on published specifications,
                verified user feedback, and editorial criteria. Based on{" "}
                <strong>technical evaluations</strong> and{" "}
                <strong>consumer reviews</strong>, the following five models
                stood out as the best in terms of{" "}
                <strong>
                  performance, styling versatility, safety, and affordability
                </strong>
                .
              </>
            ) : (
              <>
                Over the past three months, we have thoroughly tested{" "}
                <strong>22 different hair dryers</strong>. Based on{" "}
                <strong>hands-on evaluations</strong>, insights from{" "}
                <strong>certified haircare professionals</strong>, and{" "}
                <strong>thousands of consumer reviews</strong>, the following
                five models stood out as the best in terms of{" "}
                <strong>
                  performance, styling versatility, safety, and affordability
                </strong>
                .
              </>
            )}
          </p>
        </div>

        {/* Products List */}
        <div className="space-y-16">
          {products.map((product, productIndex) => (
            <div
              key={product.id}
              data-product-card="true"
              data-product-name={product.name}
              className={`relative bg-white rounded-3xl shadow-sm border ${product.isWinner ? "border-emerald-500 ring-4 ring-emerald-50" : "border-slate-200"} p-6 md:p-10 ${showBestHairRankRibbons ? "pt-24 md:pt-24 scroll-mt-28" : ""}`}
            >
              {showBestHairRankRibbons && (
                <RankRibbon
                  rank={product.rank || `#${productIndex + 1}`}
                  featured={productIndex === 0}
                />
              )}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16">
                {/* Left Column: Image & Quick Stats */}
                <div className="lg:col-span-4 flex flex-col items-center">
                  <div className="lg:sticky lg:top-8 w-full flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center lg:hidden">
                      {product.rank} {product.name}
                    </h2>

                    <div className="relative w-full mb-6">
                      <a
                        href={product.link}
                        onClick={(event) =>
                          prepareOutboundNavigation(
                            event,
                            product.link,
                            `rank_${productIndex + 1}_image`,
                          )
                        }
                        className="block w-full group"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="eager"
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
                        {product.originalPrice && (
                          <span className="text-lg text-slate-400 line-through font-medium">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      <GreenStarRating
                        rating={product.rating}
                        forceFull={product.isWinner}
                        size={24}
                        className="mb-2"
                      />
                      <p className="text-sm font-medium text-slate-500">
                        Overall rating {product.rating}
                      </p>
                    </div>

                    {shouldShowProductCta(product) && (
                      <div className="w-full hidden lg:block">
                        <CTAButton
                          href={product.link}
                          text={
                            product.isWinner ? "Official Website" : "Shop Now"
                          }
                          className="w-full"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Details */}
                <div className="lg:col-span-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 hidden lg:block font-serif">
                    <a
                      href={product.link}
                      onClick={(event) =>
                        prepareOutboundNavigation(
                          event,
                          product.link,
                          `rank_${productIndex + 1}_title`,
                        )
                      }
                      className="hover:text-emerald-600 transition-colors"
                    >
                      {product.rank} {product.name}
                    </a>
                  </h2>

                  <ExpandableDescription
                    description={product.description}
                    content={product.descriptionContent}
                    isWinner={product.isWinner}
                  />

                  {showBestHairAttachments && product.attachments && (
                    <IncludedAttachments attachments={product.attachments} />
                  )}

                  {/* Metrics */}
                  <div className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-100 mb-8">
                    <h4 className="font-bold text-slate-900 mb-6 text-lg">
                      Performance Metrics
                    </h4>
                    <div className="space-y-3">
                      {product.metrics.map((metric, idx) => (
                        <MetricBar
                          key={idx}
                          label={metric.label}
                          value={metric.value}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Mobile Pros & Cons disabled - using unified layout */}
                  {/* <MobileProsCons productId={product.id} marketKey={market.key} fallbackPros={product.pros} fallbackCons={product.cons} /> */}

                  <div className="flex flex-col gap-6 mb-8">
                    {/* Pros */}
                    <div className="bg-emerald-50/50 rounded-2xl px-3 py-5 md:p-6 border border-emerald-100">
                      <h4 className="bg-emerald-500 text-white font-bold text-center text-2xl py-3 px-3 md:px-6 -mt-5 -mx-3 md:-mt-6 md:-mx-6 mb-5 md:mb-6 rounded-t-2xl">
                        Pros
                      </h4>
                      <ul className="space-y-4">
                        {product.prosContent
                          ? renderEditableProductList(
                              product.prosContent,
                              "pros",
                            )
                          : (product.pros ?? []).map((pro, idx) => {
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

                    {/* Cons */}
                    <div className="bg-red-50/50 rounded-2xl px-3 py-5 md:p-6 border border-red-100">
                      <h4 className="bg-red-500 text-white font-bold text-center text-2xl py-3 px-3 md:px-6 -mt-5 -mx-3 md:-mt-6 md:-mx-6 mb-5 md:mb-6 rounded-t-2xl">
                        Cons
                      </h4>
                      <ul className="space-y-4">
                        {product.consContent
                          ? renderEditableProductList(
                              product.consContent,
                              "cons",
                            )
                          : (product.cons ?? []).map((con, idx) => {
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

                  {/* Editor's Tip - Free Gifts Discovery (Muuhu only) */}
                  {product.isWinner && (
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
                          <span className="text-lg">💡</span> Editor's Tip
                        </div>

                        <h4 className="font-extrabold text-2xl md:text-3xl text-gray-900 mb-4 leading-tight">
                          {market.key === "ca"
                            ? "Exclusive Canadian Offer"
                            : "Active Offer Found"}
                          : £127 in{" "}
                          <span className="text-blue-600 bg-blue-100 px-2 rounded-md inline-block transform -rotate-1">
                            FREE GIFTS
                          </span>
                        </h4>

                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                          While researching, we found Muuhu is running a
                          limited-time offer bundling these premium accessories
                          free with every hair dryer purchase.
                        </p>

                        <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-8">
                          {/* Premium Packaging */}
                          <a
                            href={MUUHU_PACKAGING_URL}
                            data-outbound="muuhu-hair-gift"
                            onClick={(event) =>
                              prepareOutboundNavigation(
                                event,
                                MUUHU_PACKAGING_URL,
                                "free_gift_packaging",
                              )
                            }
                            className="block bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative"
                            aria-label="View Muuhu Premium Packaging"
                          >
                            <div className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce">
                              FREE
                            </div>
                            <div className="relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100">
                              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                                £19
                              </span>
                              <img
                                src="/img/hair/muuhu-luxury-case.webp"
                                alt="Luxury Case"
                                loading="lazy"
                                decoding="async"
                                className="w-full aspect-square object-cover rounded-lg sm:rounded-xl"
                              />
                            </div>
                            <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">
                              Luxury Case
                            </p>
                          </a>

                          {/* Muuhu Comb */}
                          <a
                            href={MUUHU_COMB_URL}
                            data-outbound="muuhu-hair-gift"
                            onClick={(event) =>
                              prepareOutboundNavigation(
                                event,
                                MUUHU_COMB_URL,
                                "free_gift_comb",
                              )
                            }
                            className="block bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative"
                            aria-label="View Muuhu Comb"
                          >
                            <div
                              className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            >
                              FREE
                            </div>
                            <div className="relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100">
                              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                                £79
                              </span>
                              <img
                                src="/img/hair/muuhu-comb.webp"
                                alt="Muuhu Comb"
                                loading="lazy"
                                decoding="async"
                                className="w-full aspect-square object-cover rounded-lg sm:rounded-xl"
                              />
                            </div>
                            <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">
                              Muuhu Comb
                            </p>
                          </a>

                          {/* Expert Hair E-Book */}
                          <a
                            href={MUUHU_EBOOK_URL}
                            data-outbound="muuhu-hair-gift"
                            onClick={(event) =>
                              prepareOutboundNavigation(
                                event,
                                MUUHU_EBOOK_URL,
                                "free_gift_ebook",
                              )
                            }
                            className="block bg-white rounded-xl sm:rounded-2xl p-1 sm:p-4 border border-blue-100 shadow-lg text-center transform hover:-translate-y-1 transition-transform relative"
                            aria-label="View Muuhu Haircare E-Book"
                          >
                            <div
                              className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 bg-blue-600 text-white font-black text-[10px] sm:text-base px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full shadow-lg z-20 animate-bounce"
                              style={{ animationDelay: "0.4s" }}
                            >
                              FREE
                            </div>
                            <div className="relative mb-1.5 sm:mb-3 rounded-lg sm:rounded-xl overflow-hidden bg-gray-50 border border-slate-100">
                              <span className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 text-gray-900 font-bold line-through z-10 bg-white/90 px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs shadow-sm whitespace-nowrap">
                                £29
                              </span>
                              <img
                                src="/img/hair/muuhu-expert-hair-ebook.webp"
                                alt="Expert Hair E-Book"
                                loading="lazy"
                                decoding="async"
                                className="w-full aspect-square object-cover rounded-lg sm:rounded-xl"
                              />
                            </div>
                            <p className="font-extrabold text-gray-900 text-[10px] sm:text-lg leading-tight">
                              Haircare E-Book
                            </p>
                          </a>
                        </div>

                        <OutboundButton
                          href={market.muuhuUrl ?? "#"}
                          ariaLabel="Check Availability"
                          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg md:text-xl text-center py-3.5 sm:py-4 md:py-5 rounded-2xl shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] relative overflow-hidden group border-2 border-blue-500"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
                            Check Availability{" "}
                            <ChevronRight size={20} className="sm:hidden" />
                            <ChevronRight
                              size={24}
                              className="hidden sm:block"
                            />
                          </span>
                          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                        </OutboundButton>
                      </div>
                    </motion.div>
                  )}

                  {shouldShowProductCta(product) && (
                    <div className="w-full mt-8 lg:hidden">
                      <CTAButton
                        href={product.link}
                        text={
                          product.isWinner ? "Official Website" : "Shop Now"
                        }
                        className="w-full"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Verdict Section - Elegant Design */}
        <div className="mt-20 md:mt-24 mb-4 md:mb-6 relative max-w-sm md:max-w-5xl mx-auto">
          <div className="bg-[#f8f4e6] rounded-[1.5rem] md:rounded-[2rem] p-5 pb-6 md:p-12 md:pb-8 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] border border-[#e8dccb] relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-[#8b1528] mb-6 md:mb-10 font-serif tracking-wide">
              {market.key === "ca" ? "Editor's Pick" : "Editor's Verdict"}
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
                    aria-label="Muuhu hair dryer product video"
                    onPlay={() => setIsVerdictVideoPlaying(true)}
                    onPause={() => setIsVerdictVideoPlaying(false)}
                    onEnded={() => setIsVerdictVideoPlaying(false)}
                  >
                    <source
                      src="/assets/hair-dryer-trustpilot-video.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <button
                    type="button"
                    aria-label="Play Muuhu hair dryer product video"
                    onClick={playVerdictVideo}
                    className={`absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#136b3a] text-white shadow-[0_14px_34px_rgba(19,107,58,0.35)] ring-8 ring-white/60 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-[#d4af37]/70 ${
                      isVerdictVideoPlaying
                        ? "pointer-events-none scale-90 opacity-0"
                        : "scale-100 opacity-100"
                    }`}
                  >
                    <Play size={30} fill="currentColor" className="ml-1" />
                  </button>
                </div>
              </div>

              {/* Right Content Area */}
              <div className="flex flex-col justify-center text-center">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-black mb-3 md:mb-4 font-serif tracking-tight">
                  <b>Muuhu 7-in-1</b> Hair Dryer
                </h3>

                <div className="w-28 md:w-32 h-[1px] bg-[#d4af37] mx-auto mb-5 md:mb-6"></div>

                <div className="text-2xl md:text-4xl font-bold text-[#8b1528] mb-5 md:mb-8 font-sans">
                  {market.key === "ca" ? "Current Price" : "Now at 50% off"}
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
                  href={market.muuhuUrl ?? "#"}
                  ariaLabel="Check Availability"
                  className="mx-auto w-full max-w-[240px] md:w-auto md:max-w-none bg-gradient-to-b from-[#1a7444] to-[#0d4a29] hover:from-[#145c35] hover:to-[#0a381f] text-white text-sm md:text-xl font-bold font-sans tracking-wide py-3.5 md:py-4 px-6 md:px-12 rounded-full shadow-[0_8px_20px_rgba(13,74,41,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  CHECK AVAILABILITY
                </OutboundButton>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer / Disclosures */}
      <footer className="mt-0 border-t border-slate-200 bg-white px-4 py-10 shadow-inner">
        <div className="mx-auto max-w-6xl text-center text-sm text-slate-500">
          <p className="mb-2 text-lg font-bold text-slate-800">
            Best Hair Dryer
          </p>
          <p className="mb-6">© 2026 Best Hair Dryer. All rights reserved.</p>
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
              <strong>Individual results:</strong> Experiences with hair styling
              devices vary. Product information and examples do not guarantee a
              particular result.
            </p>
            {market.key === "ca" && (
              <p className="mt-4">
                <strong>Regulatory Note:</strong> Reference to certifications
                does not imply an endorsement of product efficacy for specific
                individual conditions.
              </p>
            )}
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 md:hidden flex items-center justify-center">
        <OutboundButton
          href={market.muuhuUrl ?? "#"}
          ariaLabel="Take me to the winning hair dryer"
          className="w-full text-center bg-emerald-500 text-white px-2 py-3.5 rounded-full font-bold text-[13px] sm:text-base shadow-lg shadow-emerald-500/30 whitespace-nowrap relative overflow-hidden group"
        >
          <span className="relative z-10">
            {market.key === "ca"
              ? "View Our Top Pick"
              : "Take me to the winning hair dryer"}
          </span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
        </OutboundButton>
      </div>
    </div>
  );
}
