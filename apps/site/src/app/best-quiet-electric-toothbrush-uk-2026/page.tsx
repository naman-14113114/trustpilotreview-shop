import type { Metadata } from "next";
import ElectricToothbrushesAdvertorial from "@/features/electric-toothbrushes/ElectricToothbrushesAdvertorial";
import {
  getToothbrushGuide,
  toothbrushGuideMetadata,
} from "@/data/toothbrushGuides";

export const metadata: Metadata = toothbrushGuideMetadata("best-quiet-electric-toothbrush-uk-2026");

export default function Page() {
  const guide = getToothbrushGuide("best-quiet-electric-toothbrush-uk-2026");
  return <ElectricToothbrushesAdvertorial guide={guide} />;
}
