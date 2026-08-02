import GroundingGuidePage from "@/features/grounding-sheets/GroundingGuidePage";
import { getGroundingGuide, groundingGuideMetadata } from "@/data/groundingGuides";

const slug = "best-flat-grounding-sheets-us-2026" as const;

export const metadata = groundingGuideMetadata(slug);

export default function Page() {
  return <GroundingGuidePage guide={getGroundingGuide(slug)} />;
}
