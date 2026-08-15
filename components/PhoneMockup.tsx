"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
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
      xTo(px * 18);
      yTo(py * -14);
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
      className="mt-14 flex justify-center [perspective:1200px] md:mt-16"
    >
      <div
        ref={phoneRef}
        className="relative w-[280px] animate-float rounded-[40px] border-[3px] border-[#2e2617] bg-[#0c0a06] p-2.5 shadow-[0_30px_70px_-15px_rgba(201,162,39,0.25),0_20px_40px_-20px_rgba(0,0,0,0.8)] [transform-style:preserve-3d] sm:w-[310px]"
      >
        {/* Dynamic Island / Camera Notch */}
        <div className="absolute left-1/2 top-5 z-20 h-4 w-24 -translate-x-1/2 rounded-full bg-black/90 border border-white/10" />

        {/* Real App Screenshot inside Phone */}
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[32px] bg-black">
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
