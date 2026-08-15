"use client";

import { features } from "@/lib/content";
import { Stitch } from "./Stitch";
import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";

export function Features() {
  return (
    <section id="features" className="py-20 md:py-24">
      <div className="mx-auto max-w-[1120px] px-6">
        <Reveal className="mx-auto mb-12 max-w-[600px] text-center md:mb-14">
          <Stitch label="The Craft, Organised" />
          <h2 className="mt-3.5 font-display text-[28px] text-cream sm:text-[34px] md:text-[40px]">
            Everything the shop floor needs
          </h2>
          <p className="mt-3.5 text-[15px] leading-relaxed text-cream-dim sm:text-[15.5px]">
            From the first measurement to the final delivery, TailorPro keeps
            every thread connected.
          </p>
        </Reveal>
      </div>

      <RevealGroup
        stagger={0.08}
        className="grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((f) => (
          <motion.div key={f.num} variants={revealItem}>
            <FeatureCard {...f} />
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  );
}
