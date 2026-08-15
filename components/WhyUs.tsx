"use client";

import { Check } from "lucide-react";
import { whyPoints } from "@/lib/content";
import { Reveal } from "./Reveal";

export function WhyUs() {
  return (
    <section id="why" className="py-20 md:py-24">
      <div className="mx-auto grid max-w-[1120px] gap-12 px-6 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
            Why Tailors Choose TailorPro
          </div>
          <h2 className="mt-3.5 font-display text-[28px] leading-tight text-cream sm:text-[34px] md:text-[38px]">
            Built for the shop,
            <br />
            not for a boardroom.
          </h2>
          <ul className="mt-7 space-y-4">
            {whyPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-cream-dim">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold-light">
                  <Check size={12} strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="flex items-center">
          <div className="relative w-full rounded-md border border-hairline bg-panel p-8 sm:p-10">
            <div className="absolute left-8 top-6 font-display text-[56px] leading-none text-gold/25 sm:left-10">
              &ldquo;
            </div>
            <p className="relative mt-6 font-accent text-[19px] italic leading-relaxed text-cream sm:text-[21px]">
              A tailor&rsquo;s real inventory isn&rsquo;t fabric — it&rsquo;s
              memory. TailorPro exists so that memory never walks out the
              door.
            </p>
            <div className="mt-6 text-[12.5px] tracking-wide text-sage">
              — Design principle behind TailorPro
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
