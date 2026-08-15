import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { Stitch } from "./Stitch";
import { Reveal } from "./Reveal";

export function CTABand() {
  return (
    <section id="download" className="relative overflow-hidden py-24 text-center md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 600px 300px at 50% 100%, rgba(201,162,39,0.12), transparent 70%)"
        }}
      />
      <div className="relative mx-auto max-w-[600px] px-6">
        <Reveal>
          <Stitch className="mx-auto max-w-[340px]" />
          <h2 className="mt-6 font-display text-[28px] text-cream sm:text-[36px] md:text-[42px]">
            Give your shop the finish it deserves.
          </h2>
          <p className="mt-4 text-[15.5px] text-cream-dim">
            Free to start. Set up your first customer in minutes.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={site.playStoreUrl}
              className="group inline-flex items-center gap-2 rounded-sm bg-gradient-to-b from-gold-light to-gold px-7 py-4 text-[13.5px] font-bold tracking-wide text-[#1a1406] shadow-[0_8px_24px_-8px_rgba(201,162,39,0.5)] transition-transform hover:brightness-105 active:scale-[0.98]"
            >
              Download on Play Store
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
