import Home from "./pages/Home";
import type { PageMarketContext } from "./lib/marketContext";

function getUkContext(): PageMarketContext {
  return {
    marketKey: "uk",
    updatedDate: new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Europe/London",
    }).format(new Date()),
    rates: {
      GBP: 1,
      USD: 1.34,
      AUD: 1.9001,
      CAD: 1.8788,
      asOf: "2026-06-18",
      source: "fallback",
    },
  };
}

export default function App() {
  return <Home market="uk" context={getUkContext()} />;
}
