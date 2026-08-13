import type { Metadata } from "next";
import { PillowComparisonPage } from "@/components/PillowComparisonPage";

const canonical =
  "https://www.trustpilotreview.shop/best-pillow-for-side-sleepers-uk-2026";

export const metadata: Metadata = {
  title: "Top 5 Pillows for Side Sleepers UK 2026 | Compared",
  description:
    "Compare five leading UK pillows for side sleepers by shoulder clearance, height, materials, current price, care, trial and guarantee. Updated August 2026.",
  alternates: { canonical },
  openGraph: {
    title: "Top 5 Pillows for Side Sleepers UK 2026",
    description:
      "A current UK comparison of Juujo, Groove, TEMPUR, Simba and Panda pillows for side sleepers.",
    type: "article",
    url: canonical,
    images: ["/img/pillows/juujo-colours-approved.png"],
  },
};

export default function Page() {
  return <PillowComparisonPage />;
}
