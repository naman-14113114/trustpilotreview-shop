import type { Metadata } from "next";
import GroundingSheetsInUsAdvertorial from "@/features/grounding-sheets/GroundingSheetsInUsAdvertorial";
import { metadataForPath } from "@/lib/metadata";

export const metadata: Metadata = metadataForPath(
  "/best-grounding-sheets-in-us-2026",
);

export default function Page() {
  return <GroundingSheetsInUsAdvertorial />;
}
