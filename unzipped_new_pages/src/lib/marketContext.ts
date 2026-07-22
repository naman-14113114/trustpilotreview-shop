import type { AdvertorialMarketKey } from "./advertorialMarkets";

export type MarketRates = {
  GBP: 1;
  USD: number;
  AUD: number;
  CAD: number;
  asOf: string;
  source: "live" | "fallback";
};

export type PageMarketContext = {
  marketKey: AdvertorialMarketKey;
  updatedDate: string;
  rates: MarketRates;
};

export type MarketContextProps = {
  context: PageMarketContext;
};
