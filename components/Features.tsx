"use client";

import { features } from "@/lib/content";
import { Stitch } from "./Stitch";
import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-20 md:py-28">
      {/* Ambient lighting bloom behind features */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gold/5 blur-[140px]" />
      
      <div className="relative mx-auto max-w-[1120px] px-6">
        <Reveal className="mx-auto mb-14 max-w-[680px] text-center md:mb-16">
          <Stitch label="The Craft, Organised" />
          <h2 className="mt-4 font-display text-[28px] leading-tight text-cream text-glow-gold sm:text-[36px] md:text-[44px]">
            Everything your{" "}
            <span className="font-accent italic text-shimmer font-normal drop-shadow-[0_0_20px_rgba(255,217,102,0.8)]">
              shop floor
            </span>{" "}
            needs
          </h2>
          <p className="mt-3.5 text-[15px] leading-relaxed text-cream/80 sm:text-[16.5px]">
            From the first customer measurement to the final fitting delivery, TailorPro keeps every thread connected.
          </p>
        </Reveal>

        <RevealGroup
          stagger={0.08}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div key={f.num} variants={revealItem} className="h-full">
              <FeatureCard {...f} />
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
