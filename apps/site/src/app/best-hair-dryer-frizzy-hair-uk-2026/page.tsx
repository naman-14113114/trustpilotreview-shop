import HairDryerAdvertorial from "@/legacy-pages/HairDryerAdvertorial";
import { getUkPageContext } from "@/lib/page-context";
import { getHairGuide, hairGuideMetadata } from "@/data/hairGuides";

const slug = "best-hair-dryer-frizzy-hair-uk-2026";
const guide = getHairGuide(slug);

export const metadata = hairGuideMetadata(slug);

export default function Page() {
  return <HairDryerAdvertorial market="uk" context={getUkPageContext()} guide={guide} />;
}
