import type { Metadata } from "next";
import { PillowComparisonPage } from "@/components/PillowComparisonPage";

const canonical =
  "https://www.trustpilotreview.shop/best-pillow-for-side-sleepers-uk-2026";

export const metadata: Metadata = {
  title: "Top 5 Pillows for Side Sleepers UK (2026)",
  description:
    "Compare the top five pillows for side sleepers in the UK, including current prices, profile choices, materials, trials, guarantees, advantages and disadvantages.",
  alternates: { canonical },
  openGraph: {
    title: "Top 5 Pillows for Side Sleepers UK (2026)",
    description:
      "A current UK comparison of Juujo, Groove, Panda, TEMPUR and REM-Fit pillows for side sleepers.",
    type: "article",
    url: canonical,
    images: ["/img/pillows/juujo-colours.png"],
  },
};

export default function Page() {
  return <PillowComparisonPage />;
}
