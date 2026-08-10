import type { Metadata } from "next";
import HairDryerAdvertorial from "@/legacy-pages/HairDryerAdvertorial";
import { getUkPageContext } from "@/lib/page-context";
import { metadataForPath } from "@/lib/metadata";

export const metadata: Metadata = metadataForPath("/best-hair-dryer-uk-2026");

export default function Page() {
  return <HairDryerAdvertorial market="uk" context={getUkPageContext()} />;
}
