import type { Metadata } from "next";
import HairDryerAdvertorial from "@/legacy-pages/HairDryerAdvertorial";
import { getUkPageContext } from "@/lib/page-context";
import { metadataForPath } from "@/lib/metadata";

export const metadata: Metadata = metadataForPath("/dyson-vs-shark-vs-muuhu-uk");

export default function Page() {
  return (
    <HairDryerAdvertorial
      market="uk"
      mode="three-way"
      context={getUkPageContext()}
    />
  );
}
