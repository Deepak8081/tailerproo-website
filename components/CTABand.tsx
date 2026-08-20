import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";
import { Stitch } from "./Stitch";
import { Reveal } from "./Reveal";

export function CTABand() {
  return (
    <section id="download" className="relative overflow-hidden py-24 text-center md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 700px 350px at 50% 100%, rgba(201,162,39,0.16), transparent 75%)"
        }}
      />
      
      <div className="relative mx-auto max-w-[780px] px-6">
        <Reveal className="rounded-3xl border border-gold/30 bg-panel/90 p-8 sm:p-14 shadow-[0_20px_60px_-15px_rgba(201,162,39,0.15)] backdrop-blur-md">
          <div className="mx-auto mb-4 flex justify-center">
            <Image
              src="/app-icon.png"
              alt="TailorPro"
              width={64}
              height={64}
              className="object-contain drop-shadow-md"
            />
          </div>

          <Stitch className="mx-auto max-w-[320px]" />
          
          <h2 className="mt-6 font-display text-[30px] leading-tight text-cream sm:text-[38px] md:text-[44px]">
            Give your shop the finish <br className="hidden sm:block" />
            <span className="italic font-accent text-gold-light">it truly deserves.</span>
          </h2>
          
          <p className="mt-4 max-w-[500px] mx-auto text-[16px] text-cream-dim leading-relaxed">
            Free to start. Digitalize your customer measurements, stitching orders, and WhatsApp bills in under 2 minutes.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={site.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-md bg-gradient-to-r from-[#d9ae29] via-[#e8cf7a] to-[#c9a227] px-8 py-4 text-[14px] font-bold tracking-wide text-[#1a1406] shadow-[0_10px_30px_-5px_rgba(201,162,39,0.45)] transition-all hover:scale-[1.02] hover:shadow-[0_14px_36px_-4px_rgba(201,162,39,0.6)] active:scale-[0.98]"
            >
              Download on Play Store
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[12.5px] text-sage">
            <span className="inline-flex items-center gap-1">
              <ShieldCheck size={15} className="text-gold" /> No credit card required
            </span>
            <span>·</span>
            <span>Free forever start</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
