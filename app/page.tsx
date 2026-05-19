import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WhyWeExist from "@/components/WhyWeExist";
import AboutGlassPartners from "@/components/AboutGlassPartners";
import WhatWeFix from "@/components/WhatWeFix";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import CompoundsSection from "@/components/CompoundsSection";
import ProofSection from "@/components/ProofSection";
import BrokenGlassTest from "@/components/BrokenGlassTest";
import PerformanceReset from "@/components/PerformanceReset";
import ContactStrip from "@/components/ContactStrip";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyWeExist />
        <AboutGlassPartners />
        <WhatWeFix />
        <WhoWeWorkWith />
        <CompoundsSection />
        <ProofSection />
        <TrustStrip />
        <BrokenGlassTest />
        <PerformanceReset />
        <Newsletter />
        <ContactStrip />
      </main>
      <Footer />
    </>
  );
}
