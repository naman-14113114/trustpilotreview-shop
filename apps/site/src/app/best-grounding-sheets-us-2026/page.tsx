import type { Metadata } from "next";
import GroundingSheetsAdvertorial from "@/features/grounding-sheets/GroundingSheetsAdvertorial";
import { metadataForPath } from "@/lib/metadata";

export const metadata: Metadata = metadataForPath(
  "/best-grounding-sheets-us-2026",
);

export default function Page() {
  return <GroundingSheetsAdvertorial />;
}
