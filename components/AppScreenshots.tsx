"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Stitch } from "./Stitch";
import { Reveal } from "./Reveal";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
  Scissors,
  FileText,
  CheckCircle2,
  Languages,
  CreditCard,
  Mic,
  Ruler,
  Users,
  Smartphone,
  ZoomIn,
  ZoomOut,
  Download,
  Eye,
  SlidersHorizontal
} from "lucide-react";
import { site } from "@/lib/site";

export interface ScreenshotItem {
  id: number;
  screenNumber: number;
  title: string;
  subtitle: string;
  category:
    | "Shop Dashboard"
    | "Order Management"
    | "Measurement Slips & PDF"
    | "Billing & Special Notes"
    | "Customer Vault & Hindi";
  badge: string;
  badgeIcon: "dashboard" | "order" | "ruler" | "pdf" | "billing" | "mic" | "hindi" | "vault" | "brand";
  src: string;
  description: string;
  highlights: string[];
}

export const ALL_SCREENSHOTS: ScreenshotItem[] = [
  {
    id: 1,
    screenNumber: 1,
    title: "Bespoke Atelier Silk Splash",
    subtitle: "TAILOR PROO — Bespoke Elegance",
    category: "Shop Dashboard",
    badge: "Bespoke Silk Branding",
    badgeIcon: "brand",
    src: "/app-screenshots/screen-1.png",
    description:
      "Welcoming luxury emerald silk & gold entrance screen embodying bespoke sartorial heritage and high-speed native app startup.",
    highlights: ["Emerald silk textile finish", "Gold-leaf monogram insignia", "Instant offline loading"]
  },
  {
    id: 2,
    screenNumber: 2,
    title: "Quick Mobile Order Booking",
    subtitle: "Complete Garment Entry in Under 30 Seconds",
    category: "Order Management",
    badge: "Quick Order Entry",
    badgeIcon: "order",
    src: "/app-screenshots/screen-2.png",
    description:
      "Rapidly book customer orders right on the boutique floor. Auto-fills existing client records, dates, advance payments and urgent delivery flags.",
    highlights: ["Client auto-suggest by mobile", "Calendar delivery deadline picker", "Advance token recording"]
  },
  {
    id: 3,
    screenNumber: 3,
    title: "Categories & Sizing Templates",
    subtitle: "Men's, Women's & Custom Traditional Wear",
    category: "Measurement Slips & PDF",
    badge: "Bespoke Garment Types",
    badgeIcon: "ruler",
    src: "/app-screenshots/screen-3.png",
    description:
      "Pre-configured patterns and measurement templates for Kurta, Sherwani, Pant, Shirt, Safari Suit, Coat, and Blouse with quarter-inch precision.",
    highlights: ["Men & Women categories", "Standardized anatomical forms", "Custom garment builder"]
  },
  {
    id: 4,
    screenNumber: 4,
    title: "Pant Fitting & Anatomical Specs",
    subtitle: "Latak, Jaang, Ghutna, Kamar & Length",
    category: "Measurement Slips & PDF",
    badge: "Latak/Jaang specs",
    badgeIcon: "ruler",
    src: "/app-screenshots/screen-4.png",
    description:
      "Traditional master tailor terminology including Latak (crotch rise), Jaang (thigh), Ghutna (knee), Kamar (waist), Hip and Bottom flare for a bespoke drape.",
    highlights: ["Traditional Indian tailor terms", "Quarter-inch fraction inputs", "Saved permanently to customer profile"]
  },
  {
    id: 5,
    screenNumber: 5,
    title: "Customer Directory & History",
    subtitle: "Searchable Client Directory with Fitting History",
    category: "Customer Vault & Hindi",
    badge: "Client Vault",
    badgeIcon: "vault",
    src: "/app-screenshots/screen-5.png",
    description:
      "Store customer mobile numbers, past measurement revisions, lifetime order count, and VIP bespoke fitting notes with zero paper slips.",
    highlights: ["Instant search by name or mobile", "Lifetime order history", "1-Tap direct WhatsApp call"]
  },
  {
    id: 6,
    screenNumber: 6,
    title: "Atelier Settings & Preferences",
    subtitle: "Shop Profile, Currency & Cloud Backup",
    category: "Customer Vault & Hindi",
    badge: "Atelier Controls",
    badgeIcon: "dashboard",
    src: "/app-screenshots/screen-6.png",
    description:
      "Configure boutique branding, thermal printing headers, bottom dock navigation, currency symbols, and automatic data backup.",
    highlights: ["Boutique invoice branding", "Currency & units toggle", "Secure cloud auto-sync"]
  },
  {
    id: 7,
    screenNumber: 7,
    title: "Ultra-HD Bespoke Silk Splash",
    subtitle: "Gold Needle & Sartorial Craftsmanship",
    category: "Shop Dashboard",
    badge: "Artisan Silk Branding",
    badgeIcon: "brand",
    src: "/app-screenshots/screen-7.png",
    description:
      "Ultra-high resolution velvet silk visuals reflecting the meticulous craft of master tailors, bespoke cutters and couture ateliers.",
    highlights: ["Rich visual brand identity", "Tailor needle & tape motif", "Crafted for luxury boutiques"]
  },
  {
    id: 8,
    screenNumber: 8,
    title: "Live Shop Operations Dashboard",
    subtitle: "14 Orders · 4 Customers · Today's Deliveries",
    category: "Shop Dashboard",
    badge: "Live Orders & Stats",
    badgeIcon: "dashboard",
    src: "/app-screenshots/screen-8.png",
    description:
      "Real-time command center: instant overview of total orders (14), active customers (4), daily delivery queues, and revenue pipeline.",
    highlights: ["Live orders & client counts", "Today's delivery alerts", "Instant 1-tap action buttons"]
  },
  {
    id: 9,
    screenNumber: 9,
    title: "Customer Measurement Slip PDF",
    subtitle: "Order #ORD-20260813-67A888 with Print & WhatsApp",
    category: "Measurement Slips & PDF",
    badge: "Print/Share PDF",
    badgeIcon: "pdf",
    src: "/app-screenshots/screen-9.png",
    description:
      "Complete printable customer measurement slip featuring full garment specs, order barcodes, and 1-tap WhatsApp sharing to karigars and clients.",
    highlights: ["Thermal & A4 printable PDF", "1-Tap WhatsApp share to Karigar", "Itemized garment specs"]
  },
  {
    id: 10,
    screenNumber: 10,
    title: "Order Lifecycle & Stage Pipeline",
    subtitle: "Pending, In Progress, Ready & Delivered",
    category: "Order Management",
    badge: "Status Pipeline",
    badgeIcon: "order",
    src: "/app-screenshots/screen-10.png",
    description:
      "Track every suit, kurta and sherwani across workflow stages: Pending, Cutting, In Progress, Ready for Trial, Delivered, and Cancelled.",
    highlights: ["Interactive status filters", "Delivery date countdowns", "Clear color-coded stages"]
  },
  {
    id: 11,
    screenNumber: 11,
    title: "Bilingual Language Switcher",
    subtitle: "Native Support for English & हिन्दी",
    category: "Customer Vault & Hindi",
    badge: "Bilingual English/हिन्दी",
    badgeIcon: "hindi",
    src: "/app-screenshots/screen-11.png",
    description:
      "Seamlessly toggle between English and हिन्दी. Tailoring terms like कमर, सीना, आस्तीन, लटक are natively supported for artisans and karigars.",
    highlights: ["Instant English / हिन्दी toggle", "Native Hindi tailor vocabulary", "Zero language barrier for Karigars"]
  },
  {
    id: 12,
    screenNumber: 12,
    title: "Multi-Garment Billing & Advance",
    subtitle: "Kurta, Shirt & Pant with Balance Due",
    category: "Billing & Special Notes",
    badge: "Advance & Due Billing",
    badgeIcon: "billing",
    src: "/app-screenshots/screen-12.png",
    description:
      "Manage bundled multi-item orders, custom tailoring rates per garment, token advances, and transparent balance calculations.",
    highlights: ["Itemized multi-item rates", "Advance deposit recording", "Automated balance due slip"]
  },
  {
    id: 13,
    screenNumber: 13,
    title: "Discounts & Voice Karigar Notes",
    subtitle: "Audio Fitting Notes & Special Tailor Instructions",
    category: "Billing & Special Notes",
    badge: "Voice & Karigar Notes",
    badgeIcon: "mic",
    src: "/app-screenshots/screen-13.png",
    description:
      "Record audio voice memos and custom design notes (pocket style, cuff flare, collar cut) directly attached to the customer's work order.",
    highlights: ["Voice memos for Karigars", "Percentage & flat discount fields", "Bespoke styling instructions"]
  },
  {
    id: 14,
    screenNumber: 14,
    title: "Custom Sizing & Measurement Form",
    subtitle: "Collar, Chest, Aastin/Sleeve, Pet/Waist",
    category: "Measurement Slips & PDF",
    badge: "Precision Sizing",
    badgeIcon: "ruler",
    src: "/app-screenshots/screen-14.png",
    description:
      "Standardized fit sheet capturing collar, chest, waist, aastin, shoulder width, and length down to the quarter-inch with effortless entry.",
    highlights: ["Quarter-inch precision inputs", "Garment-specific sizing fields", "Never lose a customer's fit again"]
  }
];

export const CATEGORIES = [
  "All 14 Screens",
  "Shop Dashboard",
  "Order Management",
  "Measurement Slips & PDF",
  "Billing & Special Notes",
  "Customer Vault & Hindi"
] as const;

type CategoryType = (typeof CATEGORIES)[number];

export function AppScreenshots() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All 14 Screens");
  // Default to screen-8 (Live Dashboard with live orders & stats)
  const [activeScreenId, setActiveScreenId] = useState<number>(8);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const stageRef = useRef<HTMLDivElement>(null);

  // Filtered screens based on active category
  const filteredScreens = ALL_SCREENSHOTS.filter((screen) => {
    if (selectedCategory === "All 14 Screens") return true;
    return screen.category === selectedCategory;
  });

  // Current active screen item
  const activeScreen = ALL_SCREENSHOTS.find((s) => s.id === activeScreenId) || ALL_SCREENSHOTS[7];

  // When changing category, if active screen is not in filtered list, select the first one
  const handleSelectCategory = (cat: CategoryType) => {
    setSelectedCategory(cat);
    const catScreens = ALL_SCREENSHOTS.filter((s) => (cat === "All 14 Screens" ? true : s.category === cat));
    if (catScreens.length > 0 && !catScreens.some((s) => s.id === activeScreenId)) {
      setActiveScreenId(catScreens[0].id);
    }
  };

  // Stage navigation
  const handlePrevStage = () => {
    const currentIndex = filteredScreens.findIndex((s) => s.id === activeScreenId);
    if (currentIndex === -1) {
      setActiveScreenId(filteredScreens[0].id);
    } else {
      const prevIndex = (currentIndex - 1 + filteredScreens.length) % filteredScreens.length;
      setActiveScreenId(filteredScreens[prevIndex].id);
    }
  };

  const handleNextStage = () => {
    const currentIndex = filteredScreens.findIndex((s) => s.id === activeScreenId);
    if (currentIndex === -1) {
      setActiveScreenId(filteredScreens[0].id);
    } else {
      const nextIndex = (currentIndex + 1) % filteredScreens.length;
      setActiveScreenId(filteredScreens[nextIndex].id);
    }
  };

  // Lightbox handlers
  const openLightbox = (screenId: number) => {
    const idx = ALL_SCREENSHOTS.findIndex((s) => s.id === screenId);
    setLightboxIndex(idx !== -1 ? idx : 0);
    setIsZoomed(false);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    setIsZoomed(false);
  }, []);

  const handlePrevLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? 0 : (prev - 1 + ALL_SCREENSHOTS.length) % ALL_SCREENSHOTS.length));
    setIsZoomed(false);
  }, []);

  const handleNextLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % ALL_SCREENSHOTS.length));
    setIsZoomed(false);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        handlePrevLightbox();
      } else if (e.key === "ArrowRight") {
        handleNextLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, handlePrevLightbox, handleNextLightbox]);

  // Current screen in lightbox
  const currentLightboxScreen = lightboxIndex !== null ? ALL_SCREENSHOTS[lightboxIndex] : null;

  // Icon helper
  const renderBadgeIcon = (iconType: string) => {
    switch (iconType) {
      case "dashboard":
        return <SlidersHorizontal size={13} className="text-gold" />;
      case "order":
        return <Smartphone size={13} className="text-gold" />;
      case "ruler":
        return <Ruler size={13} className="text-gold" />;
      case "pdf":
        return <FileText size={13} className="text-gold" />;
      case "billing":
        return <CreditCard size={13} className="text-gold" />;
      case "mic":
        return <Mic size={13} className="text-gold" />;
      case "hindi":
        return <Languages size={13} className="text-gold" />;
      case "vault":
        return <Users size={13} className="text-gold" />;
      default:
        return <Sparkles size={13} className="text-gold" />;
    }
  };

  return (
    <section
      id="screenshots"
      className="relative overflow-hidden border-t border-hairline/80 bg-gradient-to-b from-[#07130f] via-[#0d1f18] to-[#07130f] py-20 md:py-28"
    >
      {/* Ambient Silk & Gold Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[130px]" />
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.12),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Section Header */}
        <Reveal className="mx-auto max-w-[720px] text-center">
          <Stitch label="Official Google Play App Interface" />
          <h2 className="mt-4 font-display text-[30px] leading-tight text-cream text-glow-gold sm:text-[38px] md:text-[46px]">
            Explore All 14{" "}
            <span className="font-accent italic text-shimmer drop-shadow-[0_0_25px_rgba(255,217,102,0.85)]">
              Bespoke Atelier
            </span>{" "}
            Screens
          </h2>
          <p className="mt-3.5 text-[15px] leading-relaxed text-cream/80 sm:text-[16.5px]">
            Actual high-definition screenshots from TailorPro on Google Play. Designed with traditional Indian tailoring
            terminology, instant WhatsApp measurement slips, and bespoke luxury craft.
          </p>
        </Reveal>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count =
              cat === "All 14 Screens"
                ? ALL_SCREENSHOTS.length
                : ALL_SCREENSHOTS.filter((s) => s.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => handleSelectCategory(cat)}
                className={`group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12.5px] font-medium transition-all duration-300 sm:px-5 sm:text-[13px] ${
                  isSelected
                    ? "bg-gradient-to-r from-[#d9ae29] via-[#f0da8c] to-[#c9a227] font-semibold text-[#1a1406] shadow-[0_4px_20px_-3px_rgba(201,162,39,0.55)]"
                    : "border border-hairline/80 bg-panel-2/60 text-cream-dim backdrop-blur-sm hover:border-gold/50 hover:bg-panel hover:text-cream"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`inline-flex h-5 items-center justify-center rounded-full px-1.5 text-[11px] font-bold ${
                    isSelected ? "bg-[#1a1406]/20 text-[#1a1406]" : "bg-panel text-gold"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3D LUXURY PHONE STAGE */}
        <div
          ref={stageRef}
          id="stage-view"
          className="mt-12 rounded-2xl border border-gold/30 bg-gradient-to-b from-panel/90 via-[#0a1813] to-panel/95 p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(232,207,122,0.15)] backdrop-blur-md sm:p-8 md:mt-16 lg:p-10"
        >
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Info Panel */}
            <div className="lg:col-span-6 xl:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScreen.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-5"
                >
                  {/* Category & Screen Counter Badge */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-[11.5px] font-semibold text-gold-light">
                      {renderBadgeIcon(activeScreen.badgeIcon)}
                      {activeScreen.badge}
                    </span>
                    <span className="text-[12px] font-medium text-sage">
                      Screen {activeScreen.screenNumber} of {ALL_SCREENSHOTS.length} · {activeScreen.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-display text-[26px] leading-tight text-cream sm:text-[32px]">
                      {activeScreen.title}
                    </h3>
                    <p className="mt-1.5 font-accent text-[16px] italic text-gold-light sm:text-[18px]">
                      {activeScreen.subtitle}
                    </p>
                  </div>

                  {/* Tailor-Focused Description */}
                  <p className="text-[14.5px] leading-relaxed text-cream-dim/95 sm:text-[15.5px]">
                    {activeScreen.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="rounded-xl border border-hairline/70 bg-panel-2/40 p-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gold">
                      Screen Highlights &amp; Specs
                    </div>
                    <ul className="mt-2.5 space-y-2">
                      {activeScreen.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-[13px] text-cream/90">
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-gold" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Control Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-hairline/80 pt-5">
                    {/* Prev / Next Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrevStage}
                        aria-label="Previous screen"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-panel-2/80 text-cream transition-all hover:border-gold hover:bg-gold/10 hover:text-gold active:scale-95"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={handleNextStage}
                        aria-label="Next screen"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-panel-2/80 text-cream transition-all hover:border-gold hover:bg-gold/10 hover:text-gold active:scale-95"
                      >
                        <ChevronRight size={18} />
                      </button>
                      <span className="ml-1 text-[12px] font-medium text-cream-dim">
                        {filteredScreens.findIndex((s) => s.id === activeScreen.id) + 1} / {filteredScreens.length}
                      </span>
                    </div>

                    {/* Expand High-Res Lightbox Button */}
                    <button
                      onClick={() => openLightbox(activeScreen.id)}
                      className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-[12.5px] font-semibold text-gold-light transition-all hover:border-gold hover:bg-gold hover:text-[#1a1406] active:scale-95 shadow-sm"
                    >
                      <Maximize2 size={14} />
                      <span>Inspect 4K Full-Screen</span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Luxury Mobile Phone Mockup */}
            <div className="flex justify-center lg:col-span-6 xl:col-span-7">
              <div className="group relative w-[250px] sm:w-[280px] md:w-[310px]">
                {/* Emerald & Gold Ambient Shadow Under Phone */}
                <div className="absolute -inset-2 rounded-[42px] bg-gradient-to-tr from-gold/25 via-emerald-600/20 to-gold/20 opacity-70 blur-xl transition-opacity group-hover:opacity-100" />

                {/* Luxury Phone Frame */}
                <div
                  onClick={() => openLightbox(activeScreen.id)}
                  className="relative cursor-pointer aspect-[10/18] overflow-hidden rounded-[38px] border-[3.5px] border-[#3a2f1b] bg-[#07130f] p-2 shadow-[0_25px_60px_-15px_rgba(201,162,39,0.35),0_15px_35px_rgba(0,0,0,0.9)] ring-1 ring-gold/30 transition-transform duration-300 group-hover:scale-[1.015]"
                >
                  {/* Subtle Speaker Slit in Top Bezel */}
                  <div className="absolute left-1/2 top-1.5 z-20 h-1 w-12 -translate-x-1/2 rounded-full bg-gold/30" />

                  {/* Interactive Screen Display - Clean Fit, Zero Cut-off */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeScreen.id}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.04 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="relative h-full w-full overflow-hidden rounded-[28px] bg-[#07130f]"
                    >
                      <Image
                        src={activeScreen.src}
                        alt={activeScreen.title}
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 640px) 250px, 310px"
                      />
                      {/* Satin Sheen Diagonal Overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent opacity-60" />
                    </motion.div>
                  </AnimatePresence>

                  {/* Tap to Enlarge Floating Pill */}
                  <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full border border-gold/40 bg-black/85 px-3 py-1 text-[11px] font-semibold text-gold-light backdrop-blur-md shadow-md opacity-90 transition-opacity group-hover:opacity-100 group-hover:bg-gold group-hover:text-[#1a1406]">
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                      <Maximize2 size={11} /> Tap to zoom
                    </span>
                  </div>
                </div>

                <div className="mt-3 text-center text-[12px] text-sage">
                  Tap phone to inspect high-resolution details
                </div>
              </div>
            </div>
          </div>

          {/* Quick-Select Horizontal Thumbnail Strip */}
          <div className="mt-10 border-t border-hairline/80 pt-6">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-bold uppercase tracking-wider text-gold">
                Quick Jump ({filteredScreens.length} Screens in {selectedCategory})
              </span>
              <span className="text-[12px] text-sage">Click any thumbnail to preview</span>
            </div>

            <div className="mt-3 flex gap-2.5 overflow-x-auto pb-2 pt-1 scrollbar-thin">
              {filteredScreens.map((item) => {
                const isActive = item.id === activeScreen.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveScreenId(item.id)}
                    className={`group relative shrink-0 w-20 sm:w-24 overflow-hidden rounded-lg border p-1 text-left transition-all ${
                      isActive
                        ? "border-gold bg-gold/15 shadow-[0_0_15px_rgba(201,162,39,0.4)] scale-105"
                        : "border-hairline/70 bg-panel hover:border-gold/50"
                    }`}
                  >
                    <div className="relative aspect-[9/16] overflow-hidden rounded bg-black">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        sizes="96px"
                      />
                    </div>
                    <div className="mt-1 truncate text-[10px] font-medium text-cream-dim group-hover:text-gold-light">
                      #{item.screenNumber} {item.title.split(" ")[0]}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* FULL INTERACTIVE GALLERY GRID (All 14 Screens Showcase) */}
        <div className="mt-16 md:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-hairline/80 pb-4">
            <div>
              <div className="flex items-center gap-2 text-gold">
                <Scissors size={16} />
                <span className="text-[12px] font-bold uppercase tracking-wider text-gold">
                  Visual Directory
                </span>
              </div>
              <h3 className="mt-1 font-display text-[22px] text-cream sm:text-[26px]">
                Browse All Screens with Tailor Badges
              </h3>
            </div>
            <div className="text-[13px] text-sage">
              Showing {filteredScreens.length} of {ALL_SCREENSHOTS.length} official screenshots
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
            {filteredScreens.map((item) => {
              const isActive = item.id === activeScreen.id;
              return (
                <div
                  key={item.id}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border p-2 transition-all duration-300 ${
                    isActive
                      ? "border-gold bg-panel shadow-[0_0_20px_rgba(201,162,39,0.35)] ring-1 ring-gold"
                      : "border-hairline/80 bg-panel/70 hover:border-gold/60 hover:bg-panel hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.6)]"
                  }`}
                >
                  {/* Top Badge Overlay */}
                  <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-black">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, 200px"
                    />

                    {/* Top Screen Number */}
                    <div className="absolute left-1.5 top-1.5 z-10 rounded bg-black/80 px-1.5 py-0.5 text-[9.5px] font-bold text-gold backdrop-blur-sm border border-gold/30">
                      #{item.screenNumber < 10 ? `0${item.screenNumber}` : item.screenNumber}
                    </div>

                    {/* Hover Action Overlay */}
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 bg-black/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                      <button
                        onClick={() => {
                          setActiveScreenId(item.id);
                          stageRef.current?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="rounded-full bg-gold px-3 py-1 text-[11px] font-bold text-[#1a1406] shadow hover:bg-gold-light"
                      >
                        Stage View
                      </button>
                      <button
                        onClick={() => openLightbox(item.id)}
                        className="inline-flex items-center gap-1 rounded-full border border-white/30 bg-black/80 px-2.5 py-1 text-[10.5px] font-medium text-white hover:bg-white/20"
                      >
                        <Eye size={11} /> 4K Zoom
                      </button>
                    </div>
                  </div>

                  {/* Card Tailor Badge */}
                  <div className="mt-2.5 flex flex-col gap-1">
                    <span className="inline-block truncate rounded border border-gold/30 bg-gold/10 px-1.5 py-0.5 text-[10px] font-semibold text-gold-light">
                      {item.badge}
                    </span>
                    <h4 className="line-clamp-1 text-[12px] font-semibold text-cream">
                      {item.title}
                    </h4>
                    <p className="line-clamp-1 text-[10.5px] text-sage">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Play Store CTA Banner */}
        <div className="mt-14 rounded-2xl border border-gold/40 bg-gradient-to-r from-panel via-panel-2 to-panel p-6 text-center sm:p-8">
          <h3 className="font-display text-[22px] text-cream sm:text-[26px]">
            Ready to modernise your tailor shop?
          </h3>
          <p className="mx-auto mt-2 max-w-[550px] text-[14px] text-cream-dim">
            Download the official TailorPro app free on Google Play. Zero paperwork, automated WhatsApp slips, and bespoke elegance.
          </p>
          <div className="mt-5 flex justify-center">
            <a
              href={site.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#d9ae29] via-[#f0da8c] to-[#c9a227] px-7 py-3 text-[13.5px] font-bold text-[#1a1406] shadow-[0_10px_30px_-5px_rgba(201,162,39,0.5)] transition-all hover:scale-105"
            >
              <Download size={16} />
              <span>Install TailorPro from Play Store</span>
            </a>
          </div>
        </div>
      </div>

      {/* FULL-SCREEN HIGH-RES LIGHTBOX MODAL */}
      <AnimatePresence>
        {currentLightboxScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 p-3 backdrop-blur-xl sm:p-6"
          >
            {/* Lightbox Header Bar */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex w-full max-w-4xl items-center justify-between border-b border-hairline/80 pb-3"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-gold/40 bg-gold/15 px-3 py-1 text-[11px] font-semibold text-gold-light">
                  Screen {currentLightboxScreen.screenNumber} of {ALL_SCREENSHOTS.length}
                </span>
                <div>
                  <h4 className="font-display text-[15px] font-semibold text-cream sm:text-[17px]">
                    {currentLightboxScreen.title}
                  </h4>
                  <span className="text-[12px] text-gold-light">
                    {currentLightboxScreen.badge}
                  </span>
                </div>
              </div>

              {/* Controls: Zoom & Close */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsZoomed((prev) => !prev)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-panel text-cream transition-colors hover:border-gold hover:text-gold"
                  title={isZoomed ? "Zoom Out" : "Zoom In to inspect specs"}
                  aria-label="Toggle zoom"
                >
                  {isZoomed ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
                </button>
                <button
                  onClick={closeLightbox}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-panel text-cream transition-colors hover:bg-white/20 hover:text-white"
                  aria-label="Close full view"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Lightbox Image Stage with Previous / Next Arrows */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative my-auto flex h-[72vh] sm:h-[78vh] w-full max-w-4xl items-center justify-center overflow-auto"
            >
              {/* Prev Button */}
              <button
                onClick={handlePrevLightbox}
                className="absolute left-2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all hover:border-gold hover:bg-gold hover:text-black top-1/2"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={22} />
              </button>

              {/* High-Res Image Container */}
              <div
                className={`relative transition-all duration-300 overflow-hidden rounded-2xl border border-hairline/80 shadow-[0_20px_50px_rgba(0,0,0,0.9)] ${
                  isZoomed
                    ? "h-[110vh] w-auto max-w-none cursor-zoom-out aspect-[9/18]"
                    : "h-full w-auto aspect-[9/18] cursor-zoom-in"
                }`}
                onClick={() => setIsZoomed((prev) => !prev)}
              >
                <Image
                  src={currentLightboxScreen.src}
                  alt={currentLightboxScreen.title}
                  fill
                  className="object-contain"
                  priority
                  sizes="100vw"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNextLightbox}
                className="absolute right-2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition-all hover:border-gold hover:bg-gold hover:text-black top-1/2"
                aria-label="Next screenshot"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Lightbox Bottom Info Bar & Thumbnails */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl border-t border-hairline/80 pt-3 text-center"
            >
              <div className="flex items-center justify-between text-[12px] text-sage">
                <span>Use ← and → arrow keys to navigate · Esc to close</span>
                <span className="text-gold-light font-medium">
                  {currentLightboxScreen.subtitle}
                </span>
                <span>Double-click image to {isZoomed ? "reset" : "zoom"}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
