import PillowsAdvertorial from "@/features/pillows/PillowsAdvertorial";
import { defaultPillowGuide } from "@/data/pillows";

export function PillowComparisonPage() {
  return <PillowsAdvertorial guide={defaultPillowGuide} />;
}

