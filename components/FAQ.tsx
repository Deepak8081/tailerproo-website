"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";
import { Stitch } from "./Stitch";
import { Reveal } from "./Reveal";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-20 md:py-28">
      {/* Ambient background bloom */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[130px]" />

      <div className="relative mx-auto max-w-[780px] px-6">
        <Reveal className="mx-auto mb-12 max-w-[580px] text-center">
          <Stitch label="Common Questions" />
          <h2 className="mt-4 font-display text-[28px] leading-tight text-cream text-glow-gold sm:text-[36px] md:text-[42px]">
            Answers,{" "}
            <span className="font-accent italic text-shimmer font-normal drop-shadow-[0_0_20px_rgba(255,217,102,0.8)]">
              before you ask
            </span>
          </h2>
          <p className="mt-3 text-[15px] text-cream/75">
            Everything you need to know about setting up your shop, offline safety &amp; customer records.
          </p>
        </Reveal>

        <div className="divide-y divide-hairline/80 border-y border-hairline/80">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="group transition-colors">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className={`font-display text-[16px] sm:text-[17.5px] transition-colors ${
                    isOpen ? "text-gold-light text-glow-subtle font-medium" : "text-cream group-hover:text-gold-light group-hover:text-glow-subtle"
                  }`}>
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all ${
                      isOpen
                        ? "border-gold bg-gold/25 text-gold shadow-[0_0_12px_rgba(201,162,39,0.5)]"
                        : "border-gold/35 text-gold-light group-hover:border-gold group-hover:bg-gold/15"
                    }`}
                  >
                    <Plus size={14} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-8 text-[14.5px] leading-relaxed text-cream/80">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
