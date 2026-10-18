"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Scissors, Star, Download, Sparkle } from "lucide-react";
import { site } from "@/lib/site";
import { PhoneMockup } from "./PhoneMockup";

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
      className="relative overflow-hidden px-6 pb-20 pt-12 text-center sm:pt-16 md:pb-28 md:pt-20"
      style={
        {
          "--mx": "50%",
          "--my": "0px"
        } as React.CSSProperties
      }
    >
      {/* Luxury Ambient Lighting & Emerald Silk Glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-95 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(850px circle at var(--mx) var(--my), rgba(201,162,39,0.22), transparent 70%), radial-gradient(circle at 50% -10%, rgba(36,90,60,0.55), transparent 75%), radial-gradient(circle at 20% 60%, rgba(20,55,38,0.45), transparent 60%)"
        }}
      />

      {/* Floating Tailor Craft Parallax Accents */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[7%] top-[16%] hidden opacity-35 lg:block text-gold"
      >
        <div className="flex items-center gap-2 border border-gold/30 bg-panel/80 px-3.5 py-1.5 backdrop-blur-md shadow-lg">
          <Scissors size={18} className="text-gold" />
          <span className="font-accent text-[14px] italic text-gold-light">Bespoke Fit</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 16, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="pointer-events-none absolute right-[8%] top-[20%] hidden opacity-35 lg:block text-gold"
      >
        <div className="flex items-center gap-2 border border-gold/30 bg-panel/80 px-3.5 py-1.5 backdrop-blur-md shadow-lg">
          <Sparkles size={16} className="text-gold" />
          <span className="font-accent text-[14px] italic text-gold-light">Master Craft</span>
        </div>
      </motion.div>

      <div className="relative mx-auto max-w-[1080px]">
        {/* Top Gold Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold/45 bg-gradient-to-r from-gold/15 via-gold/25 to-gold/15 px-5 py-2 text-[12px] font-semibold tracking-wider text-gold-light shadow-[0_4px_25px_rgba(201,162,39,0.2)]"
        >
          <Sparkles size={14} className="text-gold" />
          <span className="uppercase tracking-[0.2em]">TAILOR PROO — Bespoke Elegance, Digitally Tailored</span>
        </motion.div>

        {/* High-End Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[940px] font-display text-[38px] leading-[1.08] text-cream sm:text-[54px] md:text-[68px]"
        >
          Run your tailor shop with{" "}
          <span className="bg-gradient-to-r from-[#e8cf7a] via-[#f7e7a9] to-[#c9a227] bg-clip-text text-transparent font-accent italic">
            bespoke elegance,
          </span>{" "}
          digitally tailored.
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-[680px] text-[16px] leading-relaxed text-cream/85 sm:text-[18px]"
        >
          Say goodbye to torn measurement slips and scattered notebooks. Stitched specifically for tailors, boutiques &amp; karigars — customer records, instant WhatsApp receipts, and live order tracking in one elegant app.
        </motion.p>

        {/* Quick Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2.5 text-[13.5px] font-medium text-cream/90"
        >
          <div className="flex items-center gap-2 border border-hairline/80 bg-panel/60 px-3.5 py-1.5">
            <CheckCircle2 size={16} className="text-gold" />
            <span>Digital Measurement Diary</span>
          </div>
          <div className="flex items-center gap-2 border border-hairline/80 bg-panel/60 px-3.5 py-1.5">
            <CheckCircle2 size={16} className="text-gold" />
            <span>Instant WhatsApp PDF Bills</span>
          </div>
          <div className="flex items-center gap-2 border border-hairline/80 bg-panel/60 px-3.5 py-1.5">
            <CheckCircle2 size={16} className="text-gold" />
            <span>Karigar Work Orders</span>
          </div>
        </motion.div>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={site.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#d9ae29] via-[#f0da8c] to-[#c9a227] px-8 py-4 text-[14.5px] font-bold tracking-wide text-[#1a1406] shadow-[0_10px_35px_-5px_rgba(201,162,39,0.5)] transition-all hover:scale-[1.02] hover:shadow-[0_15px_42px_-4px_rgba(201,162,39,0.65)] active:scale-[0.98]"
          >
            <Download size={18} className="text-[#1a1406]" />
            <span>Download Free on Play Store</span>
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#screenshots"
            className="inline-flex items-center gap-2.5 border border-gold/40 bg-panel/80 px-7 py-4 text-[14.5px] font-semibold text-cream transition-all hover:border-gold hover:bg-gold/10 hover:text-gold-light shadow-md"
          >
            <span>Explore App Screens</span>
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.62 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[13px] text-sage"
        >
          <div className="inline-flex items-center gap-1.5 text-cream/90">
            <ShieldCheck size={16} className="text-gold" />
            <span>100% Free to Start</span>
          </div>
          <span className="text-gold/40">·</span>
          <div className="inline-flex items-center gap-1.5 text-cream/90">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="#c9a227" className="text-gold" />
              ))}
            </div>
            <span>5.0 Rating on Google Play</span>
          </div>
          <span className="text-gold/40">·</span>
          <span className="text-cream/90">No Credit Card Needed</span>
        </motion.div>

        {/* 3D Phone Mockup Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}
