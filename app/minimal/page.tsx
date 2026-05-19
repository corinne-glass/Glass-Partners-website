import Header from "@/components/Header";
import HeroMinimal from "@/components/HeroMinimal";
import TrustStrip from "@/components/TrustStrip";
import WhyWeExist from "@/components/WhyWeExist";
import AboutGlassPartners from "@/components/AboutGlassPartners";
import WhatWeFix from "@/components/WhatWeFix";
import CompoundsSection from "@/components/CompoundsSection";
import ProofSection from "@/components/ProofSection";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import BrokenGlassTest from "@/components/BrokenGlassTest";
import PerformanceReset from "@/components/PerformanceReset";
import ContactStrip from "@/components/ContactStrip";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function MinimalHomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroMinimal />
        <TrustStrip />
        <WhyWeExist />
        <AboutGlassPartners />
        <WhatWeFix />
        <CompoundsSection />
        <ProofSection />
        <WhoWeWorkWith />
        <BrokenGlassTest />
        <PerformanceReset />
        <ContactStrip />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
