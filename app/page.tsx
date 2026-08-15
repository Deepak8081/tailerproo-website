import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Workflow } from "@/components/Workflow";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTABand } from "@/components/CTABand";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
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
