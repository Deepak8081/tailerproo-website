"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Scissors, CheckCircle, Sparkles, MessageCircle, Clock } from "lucide-react";
import gsap from "gsap";

export function PhoneMockup() {
  const stageRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const phone = phoneRef.current;
    if (!stage || !phone) return;

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const xTo = gsap.quickTo(phone, "rotationY", { duration: 0.6, ease: "power3.out" });
    const yTo = gsap.quickTo(phone, "rotationX", { duration: 0.6, ease: "power3.out" });

    const onMove = (e: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      xTo(px * 16);
      yTo(py * -12);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);
    return () => {
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="relative mt-12 flex justify-center [perspective:1200px] md:mt-16"
    >
      {/* Floating Tailor Badge 1: Measurements (Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="pointer-events-none absolute -left-2 top-12 z-30 hidden sm:flex items-center gap-3 border border-gold/40 bg-panel/95 p-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-md md:-left-12 lg:-left-20"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-gold/15 text-gold-light">
          <Scissors size={18} />
        </div>
        <div className="text-left">
          <div className="text-[10.5px] font-bold uppercase tracking-wider text-gold">
            Measurements Saved
          </div>
          <div className="text-[12.5px] font-medium text-cream">
            Chest 38&quot; · Waist 32&quot; · Length 42&quot;
          </div>
        </div>
      </motion.div>

      {/* Floating Tailor Badge 2: Stitching Status (Right) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="pointer-events-none absolute -right-2 top-32 z-30 hidden sm:flex items-center gap-3 border border-gold/40 bg-panel/95 p-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-md md:-right-12 lg:-right-20"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-gold/15 text-gold-light">
          <Clock size={18} />
        </div>
        <div className="text-left">
          <div className="text-[10.5px] font-bold uppercase tracking-wider text-gold">
            In Stitching Unit
          </div>
          <div className="text-[12.5px] font-medium text-cream">
            2 Sherwani · Delivery Tomorrow
          </div>
        </div>
      </motion.div>

      {/* Floating Tailor Badge 3: WhatsApp Receipt (Left Bottom) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="pointer-events-none absolute -left-2 bottom-12 z-30 hidden lg:flex items-center gap-3 border border-gold/40 bg-panel/95 p-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-md lg:-left-16"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-emerald-500/15 text-emerald-400">
          <MessageCircle size={18} />
        </div>
        <div className="text-left">
          <div className="text-[10.5px] font-bold uppercase tracking-wider text-emerald-400">
            WhatsApp Slip Sent
          </div>
          <div className="text-[12.5px] font-medium text-cream">
            Invoice & Live Status Link
          </div>
        </div>
      </motion.div>

      {/* Main 3D Phone Shell */}
      <div
        ref={phoneRef}
        className="relative w-[280px] animate-float border-[3px] border-[#2e2617] bg-[#0c0a06] p-2.5 shadow-[0_30px_70px_-15px_rgba(201,162,39,0.28),0_20px_40px_-20px_rgba(0,0,0,0.8)] [transform-style:preserve-3d] sm:w-[310px]"
      >
        {/* Dynamic Island Notch */}
        <div className="absolute left-1/2 top-4 z-20 h-3.5 w-24 -translate-x-1/2 bg-black/90 border border-white/10" />

        {/* Real App Screenshot inside Phone */}
        <div className="relative aspect-[9/19.5] overflow-hidden bg-black">
          <Image
            src="/app-screenshots/screen-1.png"
            alt="TailorPro real app screen"
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 640px) 280px, 310px"
          />
        </div>
      </div>
    </div>
  );
}
