"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#screenshots", label: "App Screens" },
  { href: "/#workflow", label: "Workflow" },
  { href: "/#why", label: "Why TailorPro" },
  { href: "/#faq", label: "FAQ" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-lg border-gold/20 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
          : "bg-ink/70 backdrop-blur-md border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1160px] items-center justify-between px-6 py-3.5 md:px-8">
        {/* Brand Logo with High Visibility Gold Sheen */}
        <Link
          href="/"
          className="group flex items-center transition-transform hover:scale-[1.02]"
          onClick={() => setOpen(false)}
        >
          <div className="relative">
            <Image
              src="/logo-gold.png"
              alt="TailorPro"
              width={165}
              height={45}
              className="h-10 sm:h-11 w-auto object-contain drop-shadow-[0_2px_14px_rgba(201,162,39,0.4)] transition-all group-hover:brightness-110"
              priority
            />
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <div className="hidden items-center gap-7 text-[13.5px] font-medium tracking-wide text-cream/80 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative py-1 transition-all hover:text-gold-light hover:text-glow-subtle after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-gold after:shadow-[0_0_8px_rgba(201,162,39,0.9)] after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop Action CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={site.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-gradient-to-r from-[#d9ae29] via-[#f7e7a9] to-[#c9a227] px-5 py-2.5 text-[13px] font-bold tracking-wider text-[#1a1406] shadow-[0_0_20px_rgba(201,162,39,0.45),0_4px_15px_-3px_rgba(201,162,39,0.5)] transition-all hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(201,162,39,0.65),0_6px_25px_-2px_rgba(201,162,39,0.7)] active:scale-[0.98]"
          >
            <Sparkles size={14} className="text-[#1a1406]" />
            <span>Get Free App</span>
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center border border-gold/30 bg-panel text-cream transition-colors hover:border-gold md:hidden"
        >
          {open ? <X size={22} className="text-gold" /> : <Menu size={22} className="text-gold" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-gold/20 bg-ink/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-6">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-hairline/50 py-3.5 text-[15px] font-medium text-cream/90 transition-colors hover:text-gold-light"
                >
                  <span>{l.label}</span>
                  <ArrowRight size={14} className="text-gold/60" />
                </a>
              ))}
              <a
                href={site.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-[#d9ae29] via-[#f0da8c] to-[#c9a227] px-5 py-3.5 text-[13.5px] font-bold tracking-wide text-[#1a1406] shadow-lg"
              >
                <Sparkles size={16} />
                <span>Download on Play Store (Free)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
