import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";
import { Stitch } from "./Stitch";
import { Reveal } from "./Reveal";

export function CTABand() {
  return (
    <section id="download" className="relative overflow-hidden py-24 text-center md:py-32">
      {/* Radiant ambient bloom */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 800px 450px at 50% 100%, rgba(201,162,39,0.22), transparent 75%)"
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[130px] animate-pulse-glow" />
      
      <div className="relative mx-auto max-w-[820px] px-6">
        <Reveal className="rounded-3xl border border-gold/40 bg-gradient-to-b from-[#0b2118]/95 via-panel/90 to-[#06140e] p-8 sm:p-14 shadow-[0_0_50px_rgba(201,162,39,0.2),0_25px_65px_-15px_rgba(0,0,0,0.85)] backdrop-blur-xl">
          <div className="mx-auto mb-5 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gold/30 blur-xl" />
              <Image
                src="/app-icon.png"
                alt="TailorPro"
                width={70}
                height={70}
                className="relative rounded-2xl object-contain drop-shadow-[0_4px_20px_rgba(201,162,39,0.5)]"
              />
            </div>
          </div>

          <Stitch className="mx-auto max-w-[320px]" />
          
          <h2 className="mt-6 font-display text-[30px] leading-tight text-cream text-glow-gold sm:text-[38px] md:text-[46px]">
            Give your shop the finish <br className="hidden sm:block" />
            <span className="italic font-accent text-shimmer font-normal drop-shadow-[0_0_25px_rgba(255,217,102,0.85)]">
              it truly deserves.
            </span>
          </h2>
          
          <p className="mt-4 max-w-[520px] mx-auto text-[16px] text-cream/85 leading-relaxed">
            Free to start. Digitalize your customer measurements, stitching orders, and WhatsApp bills in under 2 minutes.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={site.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-lg bg-gradient-to-r from-[#d9ae29] via-[#f5e197] to-[#c9a227] px-9 py-4 text-[14.5px] font-bold tracking-wide text-[#1a1406] shadow-[0_0_25px_rgba(201,162,39,0.5),0_10px_30px_-5px_rgba(201,162,39,0.4)] transition-all hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(201,162,39,0.7),0_14px_36px_-4px_rgba(201,162,39,0.6)] active:scale-[0.98]"
            >
              <Sparkles size={17} className="text-[#1a1406]" />
              <span>Download on Play Store (Free)</span>
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4 text-[13px] text-sage">
            <span className="inline-flex items-center gap-1.5 font-medium text-cream/90">
              <ShieldCheck size={16} className="text-gold shadow-[0_0_8px_rgba(201,162,39,0.8)]" /> No credit card required
            </span>
            <span className="text-gold/50">·</span>
            <span className="font-medium text-cream/90">Free forever start</span>
            <span className="text-gold/50">·</span>
            <span className="font-medium text-emerald-400">Offline safe with backup</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
