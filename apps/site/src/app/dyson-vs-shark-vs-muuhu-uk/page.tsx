import type { Metadata } from "next";
import HairThreeWayAdvertorial from "@/features/hair/HairThreeWayAdvertorial";
import { getUkPageContext } from "@/lib/page-context";
import { metadataForPath } from "@/lib/metadata";

export const metadata: Metadata = metadataForPath("/dyson-vs-shark-vs-muuhu-uk");

export default function Page() {
  return <HairThreeWayAdvertorial context={getUkPageContext()} />;
}
