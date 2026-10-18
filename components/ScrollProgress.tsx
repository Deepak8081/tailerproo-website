"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001
  });

  const beadLeft = useTransform(scaleX, [0, 1], ["0%", "100%"]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 right-0 top-0 z-[100] h-[3px] bg-black/20"
    >
      {/* Animated glowing golden bar */}
      <motion.div
        style={{ scaleX }}
        className="h-full w-full origin-left bg-gradient-to-r from-[#9e7d18] via-[#ffd966] to-[#f5d061] shadow-[0_0_12px_rgba(255,217,102,0.9),0_0_24px_rgba(201,162,39,0.7)]"
      />
      {/* Leading luminous bead */}
      <motion.div
        style={{ left: beadLeft }}
        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-[#fff4be] shadow-[0_0_10px_#ffd966,0_0_20px_#c9a227]"
      />
    </div>
  );
}
