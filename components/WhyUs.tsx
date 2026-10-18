"use client";

import { Check, X, Sparkles } from "lucide-react";
import { whyPoints } from "@/lib/content";
import { Reveal } from "./Reveal";

export function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden py-20 md:py-28">
      {/* Ambient background bloom */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-gold/10 blur-[120px] animate-pulse-glow" />

      <div className="relative mx-auto grid max-w-[1120px] gap-12 px-6 lg:grid-cols-12 lg:gap-14 items-center">
        {/* Left Column */}
        <Reveal className="lg:col-span-6">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/45 bg-gold/15 px-4 py-1.5 text-[11.5px] font-semibold tracking-wider text-gold-light uppercase shadow-[0_0_20px_rgba(201,162,39,0.25)]">
            <Sparkles size={13} className="text-gold animate-pulse" />
            <span className="text-glow-subtle">Why Tailors Choose TailorPro</span>
          </div>
          <h2 className="mt-4 font-display text-[30px] leading-tight text-cream drop-shadow-[0_2px_20px_rgba(201,162,39,0.25)] sm:text-[38px] md:text-[44px]">
            Built for the shop floor,
            <br />
            <span className="italic font-accent text-shimmer drop-shadow-[0_0_25px_rgba(255,217,102,0.8)]">
              not for a boardroom.
            </span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-cream/80 sm:text-[16.5px]">
            Generic billing software is full of unnecessary complexity. TailorPro is custom-crafted specifically for Indian tailors, boutiques, and master cutters.
          </p>

          <ul className="mt-8 space-y-4">
            {whyPoints.map((point) => (
              <li key={point} className="flex items-start gap-3.5 text-[15px] leading-relaxed text-cream/90">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/20 text-gold-light shadow-[0_0_12px_rgba(201,162,39,0.4)]">
                  <Check size={12} strokeWidth={3} className="text-gold" />
                </span>
                <span className="font-medium text-cream">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right Column: Comparison Card & Quote */}
        <Reveal delay={0.15} className="lg:col-span-6 space-y-6">
          {/* Comparison box */}
          <div className="overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-b from-panel/95 via-[#0b1b15] to-panel/90 p-6 sm:p-8 shadow-[0_0_35px_rgba(201,162,39,0.18),0_20px_50px_-10px_rgba(0,0,0,0.8)] backdrop-blur-md">
            <div className="text-[12px] font-bold uppercase tracking-[0.2em] text-gold text-glow-subtle mb-5">
              The Atelier Difference
            </div>

            <div className="grid grid-cols-2 gap-4 border-b border-hairline/80 pb-5">
              <div>
                <div className="text-[12.5px] font-bold text-red-400 flex items-center gap-1.5 mb-2.5">
                  <X size={14} /> Old Register Books
                </div>
                <ul className="space-y-2 text-[12.5px] text-cream/65">
                  <li>• Lost measurement slips</li>
                  <li>• Forgotten due dates</li>
                  <li>• Manual cash counting</li>
                </ul>
              </div>

              <div>
                <div className="text-[12.5px] font-bold text-gold-light text-glow-subtle flex items-center gap-1.5 mb-2.5">
                  <Check size={14} className="text-gold" /> TailorPro App
                </div>
                <ul className="space-y-2 text-[12.5px] text-cream font-medium">
                  <li className="text-glow-subtle">✓ Instant search &amp; history</li>
                  <li className="text-glow-subtle">✓ Due date reminders</li>
                  <li className="text-glow-subtle">✓ WhatsApp digital receipts</li>
                </ul>
              </div>
            </div>

            {/* Philosophy quote */}
            <div className="relative pt-6">
              <p className="font-accent text-[19px] italic leading-relaxed text-cream sm:text-[21px] text-glow-subtle">
                &ldquo;A tailor&rsquo;s real inventory isn&rsquo;t fabric — it&rsquo;s memory. TailorPro exists so that memory never walks out the door.&rdquo;
              </p>
              <div className="mt-4 text-[12px] font-semibold tracking-wide text-gold-light/80">
                — Design principle behind TailorPro
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
