import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { AppScreenshots } from "@/components/AppScreenshots";
import { Workflow } from "@/components/Workflow";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTABand } from "@/components/CTABand";
import { Footer } from "@/components/Footer";
import { TapeMeasure } from "@/components/TapeMeasure";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TapeMeasure />
        <Features />
        <AppScreenshots />
        <TapeMeasure />
        <Workflow />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
