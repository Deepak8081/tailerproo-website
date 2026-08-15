"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { stats } from "@/lib/content";

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
      className="mt-16 flex justify-center [perspective:1200px] md:mt-20"
    >
      <div
        ref={phoneRef}
        className="w-[270px] animate-float rounded-[34px] border border-hairline bg-gradient-to-b from-[#0c1e17] to-[#081711] p-3.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] [transform-style:preserve-3d] sm:w-[280px]"
      >
        <div className="overflow-hidden rounded-[22px] border border-hairline bg-panel">
          <div className="flex items-start justify-between border-b border-hairline px-4.5 py-5">
            <div>
              <div className="text-[11px] uppercase tracking-[0.08em] text-sage">Hello, Rajesh</div>
              <div className="mt-0.5 font-display text-[17px] text-cream">TailorPro</div>
            </div>
            <div className="whitespace-nowrap rounded-full border border-gold/30 bg-gold/[0.14] px-2.5 py-1.5 text-[10px] text-gold-light">
              3 due today
            </div>
          </div>

          <div className="flex gap-2.5 p-4.5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex-1 rounded-[10px] border border-hairline bg-panel-2 px-2.5 py-3"
              >
                <div className="font-display text-[20px] text-gold-light">{s.num}</div>
                <div className="mt-0.5 text-[10px] tracking-[0.03em] text-cream-dim">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mx-4.5 mb-2.5 flex items-center justify-between rounded-[10px] border border-hairline bg-panel-2 p-3">
            <div>
              <div className="text-[12.5px] font-semibold text-cream">Ananya Sharma</div>
              <div className="mt-0.5 text-[10.5px] text-cream-dim">Bridal Lehenga · Due Fri</div>
            </div>
            <div className="rounded-full border border-gold/35 bg-gold/[0.16] px-2.5 py-1 text-[9.5px] font-bold tracking-[0.03em] text-gold-light">
              READY
            </div>
          </div>

          <div className="mx-4.5 mb-2.5 flex items-center justify-between rounded-[10px] border border-hairline bg-panel-2 p-3">
            <div>
              <div className="text-[12.5px] font-semibold text-cream">Vikram Mehta</div>
              <div className="mt-0.5 text-[10.5px] text-cream-dim">3-Piece Suit · Due Mon</div>
            </div>
            <div className="rounded-full border border-sage/40 bg-sage/20 px-2.5 py-1 text-[9.5px] font-bold tracking-[0.03em] text-[#b7d0c1]">
              STITCHING
            </div>
          </div>

          <div className="flex justify-around border-t border-hairline px-2.5 pb-4.5 pt-3.5">
            {["Home", "Customers", "Orders", "Settings"].map((tab, i) => (
              <div
                key={tab}
                className={`text-center text-[9px] tracking-[0.03em] ${
                  i === 0 ? "text-gold-light" : "text-sage"
                }`}
              >
                <div className="mx-auto mb-1 h-[5px] w-[5px] rounded-full bg-current" />
                {tab}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
