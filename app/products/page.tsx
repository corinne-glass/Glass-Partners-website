import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowWeHelpIntro from "@/components/HowWeHelpIntro";
import PeopleSystemFramework from "@/components/PeopleSystemFramework";
import HowWeHelpOfferSections from "@/components/HowWeHelpOfferSections";
import HowWeHelpFinalCta from "@/components/HowWeHelpFinalCta";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Products and Services | ${site.name}`,
  description:
    "How Glass Partners strengthens the people system behind performance — SIGNAL employee voice assessment, diagnostics, leadership capability, talent signal, and implementation-led support.",
  alternates: { canonical: "/products" },
};

export default function HowWeHelpPage() {
  return (
    <>
      <Header />
      <main className="pt-24 sm:pt-28">
        <HowWeHelpIntro />
        <PeopleSystemFramework />
        <HowWeHelpOfferSections />
        <HowWeHelpFinalCta />
      </main>
      <Footer />
    </>
  );
}
