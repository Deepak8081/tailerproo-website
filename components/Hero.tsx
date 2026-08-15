"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={onPointerMove}
      className="relative overflow-hidden px-6 pb-16 pt-20 text-center sm:pt-24 md:pb-20 md:pt-28"
      style={
        {
          "--mx": "50%",
          "--my": "0px"
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(480px circle at var(--mx) var(--my), rgba(201,162,39,0.12), transparent 70%)"
        }}
      />

      <div className="relative mx-auto max-w-[1120px]">
       

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold"
        >
          {site.tagline}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-4 max-w-[820px] font-display text-[34px] leading-[1.1] text-cream sm:text-[46px] md:text-[60px]"
        >
          Run your tailor shop{" "}
          <em className="font-accent not-italic text-gold-light italic">
            like a bespoke house.
          </em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-5 max-w-[560px] text-[15.5px] leading-relaxed text-cream-dim sm:text-[16.5px]"
        >
          Customers, measurements, orders and deliveries — stitched into one
          calm, elegant app. Built for tailors who want the shop floor as
          organised as their craft.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3.5"
        >
          <a
            href={site.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-sm bg-gradient-to-b from-gold-light to-gold px-6 py-3.5 text-[13.5px] font-bold tracking-wide text-[#1a1406] shadow-[0_8px_24px_-8px_rgba(201,162,39,0.5)] transition-transform hover:brightness-105 active:scale-[0.98]"
          >
            Download on Play Store
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-sm border border-gold/50 px-5 py-3.5 text-[13.5px] font-semibold text-gold-light transition-colors hover:bg-gold/10"
          >
            <Play size={14} />
            See how it works
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-4.5 text-[12.5px] tracking-wide text-sage"
        >
          Free to get started · No spreadsheets, no register books
        </motion.div>
      </div>
    </section>
  );
}
