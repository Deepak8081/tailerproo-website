"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop fine pointer devices
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = !!target.closest(
          'a, button, input, textarea, select, [role="button"], label, .cursor-pointer, [data-cursor="pointer"]'
        );
        setIsPointer(isInteractive);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    const lerp = 0.18;
    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Precision Gold Pinpoint Center Dot */}
      <div
        ref={dotRef}
        className="fixed left-0 top-0 will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fde68a] shadow-[0_0_10px_#fde68a,0_0_20px_#c9a227] transition-all duration-150 ${
            isPointer ? "h-2 w-2 scale-125 bg-white" : "h-1.5 w-1.5"
          }`}
        />
      </div>

      {/* Smooth Trailing Luminous Halo Ring */}
      <div
        ref={ringRef}
        className="fixed left-0 top-0 will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-200 ease-out ${
            isPointer
              ? "h-12 w-12 border-gold bg-gold/15 shadow-[0_0_25px_rgba(201,162,39,0.5),inset_0_0_12px_rgba(201,162,39,0.25)] scale-105"
              : isClicking
              ? "h-7 w-7 border-gold-light bg-gold/25 shadow-[0_0_15px_rgba(201,162,39,0.4)] scale-90"
              : "h-9 w-9 border-gold/50 bg-gold/[0.04] shadow-[0_0_15px_rgba(201,162,39,0.25)]"
          }`}
        />
      </div>
    </div>
  );
}
