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
    <section id="workflow" className="border-y border-hairline bg-panel py-20 md:py-24">
      <div className="mx-auto max-w-[1120px] px-6">
        <Reveal className="mx-auto mb-14 max-w-[600px] text-center">
          <Stitch label="One Continuous Seam" />
          <h2 className="mt-3.5 font-display text-[28px] text-cream sm:text-[34px] md:text-[40px]">
            From walk-in to delivery
          </h2>
        </Reveal>

        <div ref={listRef} className="relative mx-auto max-w-[760px]">
          <div className="absolute left-0 top-2 hidden h-[calc(100%-16px)] w-px bg-hairline sm:block" />
          <motion.div
            style={{ scaleY: height }}
            className="absolute left-0 top-2 hidden h-[calc(100%-16px)] w-px origin-top bg-gold sm:block"
          />

          {workflow.map((step, i) => (
            <Reveal key={step.tag} delay={i * 0.05}>
              <div className="flex gap-6 border-b border-hairline py-6 last:border-b-0 sm:gap-8 sm:pl-8">
                <div className="w-[128px] shrink-0 font-accent text-[15px] italic text-gold-light sm:w-[150px]">
                  {step.tag}
                </div>
                <div>
                  <h4 className="font-display text-[16.5px] leading-snug text-cream sm:text-[17.5px]">
                    {step.title}
                  </h4>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-cream-dim">
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
