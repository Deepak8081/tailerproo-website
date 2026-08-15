"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/#features", label: "Features" },
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
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-hairline"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4 md:px-7">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/app-icon.png" alt="" width={32} height={32} className="rounded-md" />
          <span className="font-display text-[19px] tracking-wide text-cream">
            Tailor<span className="text-gold">Pro</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-[13.5px] text-cream-dim md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-gold-light">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={site.playStoreUrl}
          className="hidden rounded-sm bg-gradient-to-b from-gold-light to-gold px-5 py-2.5 text-[13px] font-bold tracking-wide text-[#1a1406] shadow-[0_8px_24px_-8px_rgba(201,162,39,0.5)] transition-[filter] hover:brightness-105 md:inline-flex"
        >
          Get the App
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-cream md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-hairline bg-ink md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[15px] text-cream-dim transition-colors hover:text-gold-light"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={site.playStoreUrl}
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-sm bg-gradient-to-b from-gold-light to-gold px-5 py-3 text-[13px] font-bold tracking-wide text-[#1a1406]"
              >
                Get the App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
