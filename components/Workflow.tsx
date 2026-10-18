"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { workflow } from "@/lib/content";
import { Stitch } from "./Stitch";
import { Reveal } from "./Reveal";

export function Workflow() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.75", "end 0.4"]
  });
  const height = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });

  return (
    <section id="workflow" className="relative overflow-hidden border-y border-hairline bg-gradient-to-b from-[#091913] via-panel to-[#07130f] py-20 md:py-28">
      {/* Ambient background bloom */}
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1120px] px-6">
        <Reveal className="mx-auto mb-14 max-w-[620px] text-center">
          <Stitch label="One Continuous Seam" />
          <h2 className="mt-4 font-display text-[28px] leading-tight text-cream text-glow-gold sm:text-[36px] md:text-[42px]">
            From walk-in to{" "}
            <span className="font-accent italic text-shimmer font-normal drop-shadow-[0_0_20px_rgba(255,217,102,0.8)]">
              final delivery
            </span>
          </h2>
          <p className="mt-3 text-[15px] text-cream/75">
            Every step tracked seamlessly in real-time, leaving zero room for measurement errors or missed deadlines.
          </p>
        </Reveal>

        <div ref={listRef} className="relative mx-auto max-w-[760px]">
          <div className="absolute left-0 top-2 hidden h-[calc(100%-16px)] w-[2px] bg-hairline/60 sm:block" />
          <motion.div
            style={{ scaleY: height }}
            className="absolute left-0 top-2 hidden h-[calc(100%-16px)] w-[2px] origin-top bg-gold shadow-[0_0_12px_rgba(201,162,39,0.9)] sm:block"
          />

          {workflow.map((step, i) => (
            <Reveal key={step.tag} delay={i * 0.05}>
              <div className="group flex gap-6 border-b border-hairline/70 py-6 last:border-b-0 transition-colors sm:gap-8 sm:pl-8 hover:bg-gold/[0.02]">
                <div className="w-[128px] shrink-0 font-accent text-[15.5px] italic text-gold-light text-glow-subtle transition-all group-hover:text-gold sm:w-[150px] group-hover:text-glow-strong">
                  {step.tag}
                </div>
                <div>
                  <h4 className="font-display text-[17px] leading-snug text-cream transition-colors group-hover:text-gold-light group-hover:text-glow-subtle sm:text-[18px]">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-cream/75 transition-colors group-hover:text-cream/90">
                    {step.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
