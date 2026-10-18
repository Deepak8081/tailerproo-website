"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  Download, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles, 
  Scissors, 
  Clock, 
  Star,
  ChevronUp
} from "lucide-react";
import { site } from "@/lib/site";
import { Stitch } from "./Stitch";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-gold/20 bg-[#040c09] text-cream">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] bg-gradient-to-b from-gold/10 to-transparent blur-3xl"
      />

      <div className="relative mx-auto max-w-[1180px] px-6 pt-16 pb-12 md:px-8 md:pt-20">
        
        {/* Top Atelier Highlight Card */}
        <div className="relative mb-16 overflow-hidden border border-gold/40 bg-gradient-to-br from-[#0c221a] via-[#081711] to-[#05110d] p-8 sm:p-10 md:p-12 shadow-[0_0_40px_rgba(201,162,39,0.15),0_20px_50px_-15px_rgba(0,0,0,0.8)]">
          {/* Subtle gold stitch border on card */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_8px_rgba(201,162,39,0.9)]" />
          
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left side: Brand + Value proposition */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 border border-gold/40 bg-gold/15 px-3.5 py-1 text-[11.5px] font-semibold uppercase tracking-widest text-gold-light shadow-[0_0_15px_rgba(201,162,39,0.2)]">
                <Scissors size={14} className="text-gold" />
                <span className="text-glow-subtle">Bespoke Tailoring Technology</span>
              </div>

              <div className="mt-4">
                <Image
                  src="/logo-gold.png"
                  alt="TailorPro"
                  width={180}
                  height={48}
                  className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_20px_rgba(201,162,39,0.5)]"
                />
              </div>

              <p className="mt-4 max-w-[500px] text-[15px] leading-relaxed text-cream/80 sm:text-[16px]">
                The smart mobile register designed specifically for Indian tailor shops, designer boutiques &amp; bespoke master cutters. Say goodbye to lost measurement slips forever.
              </p>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <a
                  href={site.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-md bg-gradient-to-r from-[#d9ae29] via-[#f7e7a9] to-[#c9a227] px-6 py-3.5 text-[13.5px] font-bold tracking-wide text-[#1a1406] shadow-[0_0_20px_rgba(201,162,39,0.45),0_4px_15px_rgba(201,162,39,0.35)] transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(201,162,39,0.65)] active:scale-[0.98]"
                >
                  <Download size={17} className="text-[#1a1406]" />
                  <span>Download on Play Store</span>
                </a>

                <a
                  href={`https://wa.me/91${site.phone.replace(/[^0-9]/g, "").slice(-10)}?text=Hello%20TailorPro%20team,%20I%20want%20to%20know%20more%20about%20the%20app`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-emerald-500/50 bg-emerald-500/10 px-5 py-3.5 text-[13.5px] font-semibold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all hover:border-emerald-500 hover:bg-emerald-500/20 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]"
                >
                  <MessageCircle size={17} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Right side: Studio Contact Card */}
            <div className="lg:col-span-5">
              <div className="border border-gold/30 bg-[#06120d]/90 p-6 sm:p-7 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between border-b border-hairline/60 pb-3.5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold text-glow-subtle">
                    Studio &amp; Support Desk
                  </span>
                  <span className="flex items-center gap-1.5 text-[11.5px] text-emerald-400 font-medium">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse"></span>
                    Support Active
                  </span>
                </div>

                <div className="mt-4 space-y-3.5 text-[13.5px]">
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-cream/90 transition-colors hover:text-gold-light group"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-gold/40 bg-gold/15 text-gold group-hover:border-gold group-hover:shadow-[0_0_10px_rgba(201,162,39,0.5)] transition-all">
                      <Phone size={15} />
                    </div>
                    <div>
                      <div className="text-[10.5px] uppercase tracking-wider text-sage font-medium">Direct Call / WhatsApp</div>
                      <div className="font-bold text-[14px] text-cream group-hover:text-gold-light group-hover:text-glow-subtle transition-colors">{site.phone}</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-3 text-cream/90 transition-colors hover:text-gold-light group"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-gold/40 bg-gold/15 text-gold group-hover:border-gold group-hover:shadow-[0_0_10px_rgba(201,162,39,0.5)] transition-all">
                      <Mail size={15} />
                    </div>
                    <div>
                      <div className="text-[10.5px] uppercase tracking-wider text-sage font-medium">Email Enquiries</div>
                      <div className="font-medium text-cream group-hover:text-gold-light group-hover:text-glow-subtle transition-colors">{site.email}</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 text-cream/90">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-gold/30 bg-gold/10 text-gold mt-0.5">
                      <MapPin size={15} />
                    </div>
                    <div>
                      <div className="text-[10.5px] uppercase tracking-wider text-sage font-medium">Atelier Location</div>
                      <div className="leading-snug text-cream/90">{site.address}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Navigation & Sitemap */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-14 border-b border-hairline/80">
          
          {/* Col 1: Shop Floor Features */}
          <div>
            <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.25em] text-gold text-glow-subtle">
              <span className="h-1 w-3 bg-gold shadow-[0_0_6px_rgba(201,162,39,0.9)]"></span>
              <span>Shop Features</span>
            </div>
            <ul className="mt-4 space-y-2.5 text-[14px] text-cream/75">
              <li>
                <a href="/#features" className="transition-all hover:text-gold-light hover:text-glow-subtle hover:translate-x-1 inline-block">
                  Digital Measurement Book
                </a>
              </li>
              <li>
                <a href="/#features" className="transition-all hover:text-gold-light hover:text-glow-subtle hover:translate-x-1 inline-block">
                  Instant WhatsApp Invoicing
                </a>
              </li>
              <li>
                <a href="/#workflow" className="transition-all hover:text-gold-light hover:text-glow-subtle hover:translate-x-1 inline-block">
                  Karigar Job Orders &amp; Notes
                </a>
              </li>
              <li>
                <a href="/#screenshots" className="transition-all hover:text-gold-light hover:text-glow-subtle hover:translate-x-1 inline-block">
                  Order Delivery Tracking
                </a>
              </li>
              <li>
                <a href="/#features" className="transition-all hover:text-gold-light hover:text-glow-subtle hover:translate-x-1 inline-block">
                  Customer History &amp; Garment Records
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.25em] text-gold text-glow-subtle">
              <span className="h-1 w-3 bg-gold shadow-[0_0_6px_rgba(201,162,39,0.9)]"></span>
              <span>Navigation</span>
            </div>
            <ul className="mt-4 space-y-2.5 text-[14px] text-cream/75">
              <li>
                <a href="/#features" className="transition-all hover:text-gold-light hover:text-glow-subtle hover:translate-x-1 inline-block">
                  Features Overview
                </a>
              </li>
              <li>
                <a href="/#screenshots" className="transition-all hover:text-gold-light hover:text-glow-subtle hover:translate-x-1 inline-block">
                  App Screenshots Gallery
                </a>
              </li>
              <li>
                <a href="/#workflow" className="transition-all hover:text-gold-light hover:text-glow-subtle hover:translate-x-1 inline-block">
                  5-Step Shop Workflow
                </a>
              </li>
              <li>
                <a href="/#why" className="transition-all hover:text-gold-light hover:text-glow-subtle hover:translate-x-1 inline-block">
                  Why TailorPro vs Paper
                </a>
              </li>
              <li>
                <a href="/#faq" className="transition-all hover:text-gold-light hover:text-glow-subtle hover:translate-x-1 inline-block">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Legal */}
          <div>
            <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.25em] text-gold text-glow-subtle">
              <span className="h-1 w-3 bg-gold shadow-[0_0_6px_rgba(201,162,39,0.9)]"></span>
              <span>Legal &amp; Privacy</span>
            </div>
            <ul className="mt-4 space-y-2.5 text-[14px] text-cream/75">
              <li>
                <Link href="/contact" className="transition-all hover:text-gold-light hover:text-glow-subtle hover:translate-x-1 inline-block">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="transition-all hover:text-gold-light hover:text-glow-subtle hover:translate-x-1 inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-all hover:text-gold-light hover:text-glow-subtle hover:translate-x-1 inline-block">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 text-sage text-[13px] pt-1">
                  <ShieldCheck size={14} className="text-gold shadow-[0_0_6px_rgba(201,162,39,0.8)]" /> Encrypted Cloud Backups
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Guarantee */}
          <div>
            <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.25em] text-gold text-glow-subtle">
              <span className="h-1 w-3 bg-gold shadow-[0_0_6px_rgba(201,162,39,0.9)]"></span>
              <span>Bespoke Promise</span>
            </div>
            <div className="mt-4 space-y-3">
              <p className="text-[13.5px] leading-relaxed text-cream/75">
                TailorPro is handcrafted in India to respect how boutique masters, darzis and suit-makers work.
              </p>
              
              <div className="border border-gold/40 bg-panel/80 p-3.5 shadow-[0_0_15px_rgba(201,162,39,0.15)]">
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#c9a227" className="text-gold drop-shadow-[0_0_6px_rgba(201,162,39,0.9)]" />
                  ))}
                  <span className="ml-1.5 text-[13px] font-bold text-cream text-glow-subtle">5.0 Star</span>
                </div>
                <div className="mt-1 text-[12px] text-cream/75">Rated by professional tailor shops</div>
              </div>
            </div>
          </div>

        </div>

        {/* Luxury Background Watermark */}
        <div 
          aria-hidden="true"
          className="pointer-events-none select-none my-6 text-center font-display text-[42px] sm:text-[72px] md:text-[100px] font-bold tracking-widest text-gold/[0.04] uppercase leading-none overflow-hidden"
        >
          TAILORPRO
        </div>

        {/* Bottom Bar with Stitch Motif */}
        <div className="flex flex-col items-center justify-between gap-4 pt-2 text-[12.5px] text-cream/60 sm:flex-row">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
            <span>·</span>
            <span className="text-sage">Made with pride for Indian Tailors 🇮🇳</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-accent italic text-[14px] text-gold-light">
              Bespoke Elegance, Digitally Tailored
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="flex h-8 w-8 items-center justify-center border border-gold/30 bg-panel text-gold transition-colors hover:border-gold hover:bg-gold/10"
            >
              <ChevronUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
