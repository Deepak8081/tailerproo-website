"use client";

import { Check, X, Sparkles } from "lucide-react";
import { whyPoints } from "@/lib/content";
import { Reveal } from "./Reveal";

export function WhyUs() {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-[1120px] gap-12 px-6 lg:grid-cols-12 lg:gap-14 items-center">
        {/* Left Column */}
        <Reveal className="lg:col-span-6">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-[11.5px] font-semibold tracking-wider text-gold-light uppercase">
            <Sparkles size={13} /> Why Tailors Choose TailorPro
          </div>
          <h2 className="mt-4 font-display text-[30px] leading-tight text-cream sm:text-[38px] md:text-[42px]">
            Built for the shop floor,
            <br />
            <span className="italic font-accent text-gold-light">not for a boardroom.</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-cream-dim sm:text-[16px]">
            Generic billing software is full of unnecessary complexity. TailorPro is custom-crafted specifically for tailors, boutiques, and master cutters.
          </p>

          <ul className="mt-8 space-y-4">
            {whyPoints.map((point) => (
              <li key={point} className="flex items-start gap-3.5 text-[15px] leading-relaxed text-cream-dim">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/15 text-gold-light">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right Column: Comparison Card & Quote */}
        <Reveal delay={0.15} className="lg:col-span-6 space-y-6">
          {/* Comparison box */}
          <div className="overflow-hidden rounded-2xl border border-hairline bg-panel/80 p-6 sm:p-8 shadow-xl">
            <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold mb-5">
              The Atelier Difference
            </div>

            <div className="grid grid-cols-2 gap-4 border-b border-hairline pb-5">
              <div>
                <div className="text-[12px] font-bold text-red-400/90 flex items-center gap-1 mb-2">
                  <X size={14} /> Old Register Books
                </div>
                <ul className="space-y-1.5 text-[12.5px] text-cream-dim/70">
                  <li>• Lost measurement slips</li>
                  <li>• Forgotten due dates</li>
                  <li>• Manual cash counting</li>
                </ul>
              </div>

              <div>
                <div className="text-[12px] font-bold text-gold-light flex items-center gap-1 mb-2">
                  <Check size={14} className="text-gold" /> TailorPro App
                </div>
                <ul className="space-y-1.5 text-[12.5px] text-cream font-medium">
                  <li>✓ Instant search & history</li>
                  <li>✓ Due date reminders</li>
                  <li>✓ WhatsApp digital receipts</li>
                </ul>
              </div>
            </div>

            {/* Philosophy quote */}
            <div className="relative pt-6">
              <p className="font-accent text-[18px] italic leading-relaxed text-cream sm:text-[20px]">
                &ldquo;A tailor&rsquo;s real inventory isn&rsquo;t fabric — it&rsquo;s memory. TailorPro exists so that memory never walks out the door.&rdquo;
              </p>
              <div className="mt-4 text-[12px] font-medium tracking-wide text-sage">
                — Design principle behind TailorPro
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
