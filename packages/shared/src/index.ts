export type ProductFamily = "led-mask" | "hair-dryer";

export type SeoMetadata = {
  title: string;
  description: string;
  canonical: string;
  robots?: string;
  openGraphImage?: string;
};

export type ComparisonCriteria = {
  label: string;
  description?: string;
};

export type RankedProduct = {
  rank: number | string;
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: string;
  link?: string;
  badge?: string;
  bestFor?: string;
  summary?: string;
  description?: string[];
  pros?: string[];
  cons?: string[];
  metrics?: Array<{
    label: string;
    value: number;
  }>;
  isWinner?: boolean;
};

export type GuideCard = {
  title: string;
  description: string;
  href: string;
  code?: string;
  group?: string;
};

export type AdvertorialPage = {
  family: ProductFamily;
  slug: string;
  seo: SeoMetadata;
  headline: string;
  products?: RankedProduct[];
  criteria?: ComparisonCriteria[];
};
