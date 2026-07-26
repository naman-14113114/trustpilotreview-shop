import HairDryerAdvertorial from "@/legacy-pages/HairDryerAdvertorial";
import { getUkPageContext } from "@/lib/page-context";
import { getHairGuide, hairGuideMetadata } from "@/data/hairGuides";

const slug = "dyson-vs-shark-vs-muuhu-uk";
const guide = getHairGuide(slug);

export const metadata = hairGuideMetadata(slug);

export default function Page() {
  return (
    <HairDryerAdvertorial
      market="uk"
      context={getUkPageContext()}
      guide={guide}
    />
  );
}
