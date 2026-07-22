import type { Metadata } from "next";
import HairAdvertorialPage from "../../lib/hair-advertorial";
import { dysonSharkMuuhuPage } from "../../lib/hair-pages";

export const metadata: Metadata = {
  title: dysonSharkMuuhuPage.title,
  description: dysonSharkMuuhuPage.description,
  alternates: {
    canonical: dysonSharkMuuhuPage.canonical,
  },
  openGraph: {
    title: dysonSharkMuuhuPage.title,
    description: dysonSharkMuuhuPage.description,
    type: "article",
    url: dysonSharkMuuhuPage.canonical,
    images: [dysonSharkMuuhuPage.heroImage],
  },
};

export default function Page() {
  return <HairAdvertorialPage page={dysonSharkMuuhuPage} />;
}
