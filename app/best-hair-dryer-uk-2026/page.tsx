import type { Metadata } from "next";
import HairAdvertorialPage from "../../lib/hair-advertorial";
import { bestHairDryerPage } from "../../lib/hair-pages";

export const metadata: Metadata = {
  title: bestHairDryerPage.title,
  description: bestHairDryerPage.description,
  alternates: {
    canonical: bestHairDryerPage.canonical,
  },
  openGraph: {
    title: bestHairDryerPage.title,
    description: bestHairDryerPage.description,
    type: "article",
    url: bestHairDryerPage.canonical,
    images: [bestHairDryerPage.heroImage],
  },
};

export default function Page() {
  return <HairAdvertorialPage page={bestHairDryerPage} />;
}
