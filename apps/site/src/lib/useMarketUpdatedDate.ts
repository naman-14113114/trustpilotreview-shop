"use client";

import { useEffect, useState } from "react";
import type { AdvertorialMarket } from "@/lib/advertorialMarkets";

const MARKET_TIME_ZONES = {
  global: "UTC",
  us: "America/New_York",
  uk: "Europe/London",
  au: "Australia/Sydney",
  ca: "America/Toronto",
} as const;

function formatMarketUpdatedDate(market: AdvertorialMarket) {
  return new Intl.DateTimeFormat(market.locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: MARKET_TIME_ZONES[market.key],
  }).format(new Date());
}

export function useMarketUpdatedDate(
  market: AdvertorialMarket,
  fallbackDate: string,
) {
  const [updatedDate, setUpdatedDate] = useState(fallbackDate);

  useEffect(() => {
    setUpdatedDate(formatMarketUpdatedDate(market));
  }, [market.key, market.locale]);

  return updatedDate;
}
