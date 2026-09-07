import type { Metadata } from "next";
import LandingFooter from "@/components/LandingFooter";
import SignalReportFinalCta from "@/components/signal-report/SignalReportFinalCta";
import SignalReportHeader from "@/components/signal-report/SignalReportHeader";
import SignalReportHero from "@/components/signal-report/SignalReportHero";
import SignalReportOffer from "@/components/signal-report/SignalReportOffer";
import SignalReportOfferStrip from "@/components/signal-report/SignalReportOfferStrip";
import SignalReportStickyCta from "@/components/signal-report/SignalReportStickyCta";
import SignalReportTestimonial from "@/components/signal-report/SignalReportTestimonial";
import SignalReportValue from "@/components/signal-report/SignalReportValue";
import { signalReport } from "@/content/signal-report";
import { site } from "@/content/site";
import { BUSINESS_HOME_URL } from "@/lib/domains";

const PAGE_URL = `${BUSINESS_HOME_URL}${signalReport.meta.canonical}`;
const OG_IMAGE_URL = `${BUSINESS_HOME_URL}${signalReport.meta.ogImage}`;

export const metadata: Metadata = {
  title: signalReport.meta.title,
  description: signalReport.meta.description,
  alternates: { canonical: signalReport.meta.canonical },
  robots: { index: false, follow: true },
  openGraph: {
    title: signalReport.meta.ogTitle,
    description: signalReport.meta.ogDescription,
    url: PAGE_URL,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "SIGNAL — Employee Voice & Engagement Assessment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: signalReport.meta.ogTitle,
    description: signalReport.meta.ogDescription,
    images: [OG_IMAGE_URL],
  },
};

export default function SignalReportPage() {
  return (
    <>
      <SignalReportHeader />
      <main className="text-[#0E1A2B]">
        <SignalReportHero />
        <SignalReportValue />
        <SignalReportOffer />
        <SignalReportOfferStrip />
        <SignalReportTestimonial />
        <SignalReportFinalCta />
      </main>
      <LandingFooter />
      <SignalReportStickyCta />
    </>
  );
}
