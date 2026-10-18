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
            "radial-gradient(900px circle at var(--mx) var(--my), rgba(201,162,39,0.24), transparent 70%), radial-gradient(circle at 50% -10%, rgba(36,95,65,0.7), transparent 75%), radial-gradient(circle at 20% 60%, rgba(20,60,42,0.5), transparent 60%)"
        }}
      />
      {/* Radiant eye-catching bloom behind title */}
      <div className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 h-[340px] w-[720px] rounded-full bg-gradient-to-r from-gold/20 via-emerald-500/20 to-gold/20 blur-[100px] animate-pulse-glow" />

      {/* Floating Tailor Craft Parallax Accents */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[7%] top-[16%] hidden opacity-40 lg:block text-gold"
      >
        <div className="flex items-center gap-2 rounded-full border border-gold/40 bg-panel/85 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(201,162,39,0.3)]">
          <Scissors size={18} className="text-gold" />
          <span className="font-accent text-[14px] italic text-gold-light text-glow-subtle">Bespoke Fit</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 16, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="pointer-events-none absolute right-[8%] top-[20%] hidden opacity-40 lg:block text-gold"
      >
        <div className="flex items-center gap-2 rounded-full border border-gold/40 bg-panel/85 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(201,162,39,0.3)]">
          <Sparkles size={16} className="text-gold" />
          <span className="font-accent text-[14px] italic text-gold-light text-glow-subtle">Master Craft</span>
        </div>
      </motion.div>

      <div className="relative mx-auto max-w-[1080px]">
        {/* Top Gold Badge with glowing aura */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold/50 bg-gradient-to-r from-gold/15 via-gold/30 to-gold/15 px-5 py-2 text-[12px] font-semibold tracking-wider text-gold-light shadow-[0_0_25px_rgba(201,162,39,0.35)]"
        >
          <Sparkles size={14} className="text-gold animate-pulse" />
          <span className="uppercase tracking-[0.2em] text-glow-subtle">TAILOR PROO — Bespoke Elegance, Digitally Tailored</span>
        </motion.div>

        {/* High-End Main Headline with glowing radiance */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[940px] font-display text-[38px] leading-[1.08] text-cream drop-shadow-[0_2px_24px_rgba(201,162,39,0.3)] sm:text-[54px] md:text-[68px]"
        >
          Run your tailor shop with{" "}
          <span className="text-shimmer font-accent italic drop-shadow-[0_0_30px_rgba(255,217,102,0.9)]">
            bespoke elegance,
          </span>{" "}
          digitally tailored.
        </motion.h1>

        {/* Subtitle / Description with high-contrast glowing accents */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-[700px] text-[16px] leading-relaxed text-cream/90 sm:text-[18.5px]"
        >
          Say goodbye to torn measurement slips and scattered notebooks. Stitched specifically for tailors, boutiques &amp; karigars —{" "}
          <span className="text-gold-light text-glow-subtle font-medium">customer records</span>,{" "}
          <span className="text-gold-light text-glow-subtle font-medium">instant WhatsApp receipts</span>, and{" "}
          <span className="text-gold-light text-glow-subtle font-medium">live order tracking</span> in one elegant app.
        </motion.p>

        {/* Quick Highlights Bar with luminous borders */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[13.5px] font-medium text-cream"
        >
          <div className="flex items-center gap-2 rounded-lg border border-gold/30 bg-panel/75 px-4 py-2 backdrop-blur-md shadow-[0_0_15px_rgba(201,162,39,0.18)] hover:border-gold hover:shadow-[0_0_20px_rgba(201,162,39,0.4)] transition-all">
            <CheckCircle2 size={16} className="text-gold shadow-sm" />
            <span className="text-glow-subtle">Digital Measurement Diary</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-gold/30 bg-panel/75 px-4 py-2 backdrop-blur-md shadow-[0_0_15px_rgba(201,162,39,0.18)] hover:border-gold hover:shadow-[0_0_20px_rgba(201,162,39,0.4)] transition-all">
            <CheckCircle2 size={16} className="text-gold shadow-sm" />
            <span className="text-glow-subtle">Instant WhatsApp PDF Bills</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-gold/30 bg-panel/75 px-4 py-2 backdrop-blur-md shadow-[0_0_15px_rgba(201,162,39,0.18)] hover:border-gold hover:shadow-[0_0_20px_rgba(201,162,39,0.4)] transition-all">
            <CheckCircle2 size={16} className="text-gold shadow-sm" />
            <span className="text-glow-subtle">Karigar Work Orders</span>
          </div>
        </motion.div>

        {/* CTA Actions with radiant gold aura */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={site.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#d9ae29] via-[#f7e7a9] to-[#c9a227] px-8 py-4 text-[14.5px] font-bold tracking-wide text-[#1a1406] shadow-[0_0_35px_rgba(201,162,39,0.55),0_10px_35px_-5px_rgba(201,162,39,0.6)] transition-all hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(255,217,102,0.85)] active:scale-[0.98]"
          >
            <Download size={18} className="text-[#1a1406]" />
            <span>Download Free on Play Store</span>
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#screenshots"
            className="inline-flex items-center gap-2.5 rounded-full border border-gold/50 bg-panel/85 px-7 py-4 text-[14.5px] font-semibold text-cream transition-all hover:border-gold hover:bg-gold/15 hover:text-gold-light hover:shadow-[0_0_25px_rgba(201,162,39,0.35)] shadow-md"
          >
            <span className="text-glow-subtle">Explore App Screens</span>
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
