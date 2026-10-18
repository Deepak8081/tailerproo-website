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
      {/* Floating Tailor Badge 1: Real Order (Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="pointer-events-none absolute -left-2 top-10 z-30 hidden sm:flex items-center gap-3 border border-gold/40 bg-panel/95 p-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-md md:-left-12 lg:-left-20"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-gold/15 text-gold-light">
          <Clock size={18} />
        </div>
        <div className="text-left">
          <div className="text-[10.5px] font-bold uppercase tracking-wider text-gold">
            Order #ORD-20260813-67A888
          </div>
          <div className="text-[12.5px] font-medium text-cream">
            kalander · Pant x1 · ₹500 In Progress
          </div>
        </div>
      </motion.div>

      {/* Floating Tailor Badge 2: Authentic Measurements (Right) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="pointer-events-none absolute -right-2 top-32 z-30 hidden sm:flex items-center gap-3 border border-gold/40 bg-panel/95 p-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-md md:-right-12 lg:-right-20"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-gold/15 text-gold-light">
          <Scissors size={18} />
        </div>
        <div className="text-left">
          <div className="text-[10.5px] font-bold uppercase tracking-wider text-gold">
            Measurement Sheet Generated
          </div>
          <div className="text-[12.5px] font-medium text-cream">
            Latak 45.5&quot; · Ghutna 56.8&quot; · Kamar 44&quot;
          </div>
        </div>
      </motion.div>

      {/* Floating Tailor Badge 3: WhatsApp PDF Slip (Left Bottom) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="pointer-events-none absolute -left-2 bottom-12 z-30 hidden lg:flex items-center gap-3 border border-gold/40 bg-panel/95 p-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-md lg:-left-16"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-emerald-500/15 text-emerald-400">
          <MessageCircle size={18} />
        </div>
        <div className="text-left">
          <div className="text-[10.5px] font-bold uppercase tracking-wider text-emerald-400">
            WhatsApp PDF Slip
          </div>
          <div className="text-[12.5px] font-medium text-cream">
            1-Tap Share to Karigar &amp; Customer
          </div>
        </div>
      </motion.div>

      {/* Main 3D Phone Shell */}
      <div
        ref={phoneRef}
        className="relative w-[300px] animate-float rounded-[38px] border-[3.5px] border-[#3a2f1b] bg-[#0c0a06] p-2.5 shadow-[0_30px_70px_-15px_rgba(201,162,39,0.38),0_20px_45px_-15px_rgba(0,0,0,0.95)] ring-1 ring-gold/30 [transform-style:preserve-3d] sm:w-[330px] md:w-[350px]"
      >
        {/* Subtle Speaker Bezel Slit (Outside Screen) */}
        <div className="absolute left-1/2 top-1.5 z-20 h-1 w-14 -translate-x-1/2 rounded-full bg-gold/30" />

        {/* Real App Screenshot inside Phone with Exact Aspect Ratio - ZERO CROP, ZERO OVERFLOW */}
        <div className="relative aspect-[1200/1880] w-full overflow-hidden rounded-[26px] bg-[#07130f]">
          <Image
            src="/app-screenshots/hero-dashboard.png"
            alt="TailorPro Live Atelier Dashboard - Orders, Deliveries & Karigar Workflow"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 640px) 300px, 350px"
          />
          {/* Subtle satin glare overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent opacity-50" />
        </div>
      </div>
    </div>
  );
}
