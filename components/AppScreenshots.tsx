"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Stitch } from "./Stitch";
import { Reveal } from "./Reveal";
import { ChevronLeft, ChevronRight, Maximize2, X, Sparkles } from "lucide-react";

const screenshots = [
  {
    id: 1,
    title: "Order Management & Tracking",
    subtitle: "Real-time stitching status, due dates & quick filter",
    src: "/app-screenshots/screen-1.png",
    description: "Track walk-in orders, stitching stages, trial dates and delivery schedules in one place."
  },
  {
    id: 2,
    title: "Digital Measurement Book",
    subtitle: "Precise body measurements saved forever per customer",
    src: "/app-screenshots/screen-2.png",
    description: "Store neck, chest, waist, sleeve, inseam and custom fit notes without losing paper slips."
  },
  {
    id: 3,
    title: "Customer Directory & History",
    subtitle: "Complete customer database with past order history",
    src: "/app-screenshots/screen-3.png",
    description: "Instantly search any customer by name or mobile number to view past fittings and preferences."
  },
  {
    id: 4,
    title: "Bills & Digital Receipts",
    subtitle: "Generate payment bills & share directly on WhatsApp",
    src: "/app-screenshots/screen-4.png",
    description: "Send professional digital invoices and payment links directly to customers over WhatsApp."
  },
  {
    id: 5,
    title: "Shop Earnings & Reports",
    subtitle: "Clear view of pending payments & daily income",
    src: "/app-screenshots/screen-5.png",
    description: "Monitor advance payments, balance amounts due and total boutique earnings effortlessly."
  }
];

export function AppScreenshots() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="screenshots" className="relative border-t border-hairline py-20 md:py-28 overflow-hidden bg-panel/50">
      <div className="mx-auto max-w-[1120px] px-6">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <Stitch label="Live Interface" />
          <h2 className="mt-3.5 font-display text-[28px] text-cream sm:text-[36px] md:text-[42px]">
            Explore the Real App Screens
          </h2>
          <p className="mt-3.5 text-[15px] leading-relaxed text-cream-dim sm:text-[16.5px]">
            Actual screenshots from our Google Play Store app. Designed for speed, simplicity, and elegance on the shop floor.
          </p>
        </Reveal>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {screenshots.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveIndex(idx)}
              className={`rounded-full px-4 py-2 text-[12.5px] font-medium transition-all ${
                activeIndex === idx
                  ? "bg-gold text-[#1a1406] shadow-[0_4px_16px_-4px_rgba(201,162,39,0.5)] font-semibold"
                  : "border border-hairline bg-panel-2/60 text-cream-dim hover:border-gold/40 hover:text-cream"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Main Interactive Showcase */}
        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Info Panel */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl border border-hairline bg-panel p-6 sm:p-8"
              >
                <div className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[11px] font-semibold text-gold-light">
                  <Sparkles size={12} /> Screen {activeIndex + 1} of {screenshots.length}
                </div>

                <h3 className="mt-4 font-display text-[24px] text-cream sm:text-[28px]">
                  {screenshots[activeIndex].title}
                </h3>
                
                <p className="mt-2 text-[14px] font-medium text-gold-light">
                  {screenshots[activeIndex].subtitle}
                </p>

                <p className="mt-4 text-[14.5px] leading-relaxed text-cream-dim">
                  {screenshots[activeIndex].description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-hairline pt-6">
                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      aria-label="Previous screenshot"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-panel-2 text-cream transition-colors hover:border-gold/50 hover:text-gold"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={nextSlide}
                      aria-label="Next screenshot"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-panel-2 text-cream transition-colors hover:border-gold/50 hover:text-gold"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>

                  <button
                    onClick={() => setZoomImage(screenshots[activeIndex].src)}
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-gold transition-colors hover:text-gold-light"
                  >
                    <Maximize2 size={14} /> Full View
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Mobile Phone Display */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative group w-[210px] sm:w-[230px] md:w-[240px]">
              <div className="relative aspect-[9/16] overflow-hidden rounded-[26px] border-[2.5px] border-[#2e2617] bg-[#0c0a06] p-2 shadow-[0_20px_50px_-15px_rgba(201,162,39,0.2)]">
                {/* Speaker Notch */}
                <div className="absolute left-1/2 top-3 z-20 h-3 w-16 -translate-x-1/2 rounded-full bg-black/90 border border-white/10" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-full w-full overflow-hidden rounded-[22px]"
                  >
                    <Image
                      src={screenshots[activeIndex].src}
                      alt={screenshots[activeIndex].title}
                      fill
                      className="object-cover object-top cursor-pointer"
                      onClick={() => setZoomImage(screenshots[activeIndex].src)}
                      priority
                      sizes="(max-width: 640px) 210px, 240px"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Tap hint */}
              <div className="mt-3 text-center text-[12px] text-sage">
                Tap image to expand full size
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Thumbnails Grid */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {screenshots.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`group cursor-pointer overflow-hidden rounded-xl border p-2 transition-all ${
                activeIndex === idx
                  ? "border-gold bg-gold/10 shadow-[0_0_20px_rgba(201,162,39,0.2)]"
                  : "border-hairline bg-panel hover:border-gold/40"
              }`}
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-black/50">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 150px, 200px"
                />
              </div>
              <p className="mt-2 text-center text-[12px] font-medium text-cream line-clamp-1">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            <button
              onClick={() => setZoomImage(null)}
              className="absolute right-6 top-6 rounded-full border border-white/20 bg-black/60 p-2 text-white hover:bg-white/20"
              aria-label="Close full view"
            >
              <X size={24} />
            </button>
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-auto aspect-[9/19.5] overflow-hidden rounded-2xl border border-hairline shadow-2xl"
            >
              <Image
                src={zoomImage}
                alt="Enlarged app screenshot"
                width={400}
                height={866}
                className="h-full w-auto object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
