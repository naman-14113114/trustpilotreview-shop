import type { Metadata } from "next";
import ElectricToothbrushesAdvertorial from "@/features/electric-toothbrushes/ElectricToothbrushesAdvertorial";
import { metadataForPath } from "@/lib/metadata";

export const metadata: Metadata = metadataForPath(
  "/best-electric-toothbrush-uk-2026",
);

export default function Page() {
  return <ElectricToothbrushesAdvertorial />;
}
