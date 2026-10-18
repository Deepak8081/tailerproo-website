"use client";

import { Scissors, Ruler, Users, Receipt, Share2, Bell, Sparkles } from "lucide-react";

const iconsByNum: Record<string, React.ReactNode> = {
  "01": <Users size={20} className="text-gold" />,
  "02": <Ruler size={20} className="text-gold" />,
  "03": <Scissors size={20} className="text-gold" />,
  "04": <Receipt size={20} className="text-gold" />,
  "05": <Share2 size={20} className="text-gold" />,
  "06": <Bell size={20} className="text-gold" />
};

export function FeatureCard({
  num,
  title,
  desc
}: {
  num: string;
  title: string;
  desc: string;
}) {
  const icon = iconsByNum[num] || <Sparkles size={20} className="text-gold" />;

  return (
    <div className="group relative h-full overflow-hidden rounded-xl border border-gold/25 bg-gradient-to-b from-panel/90 via-panel/80 to-[#07130f] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/70 hover:bg-panel hover:shadow-[0_0_35px_rgba(201,162,39,0.25),0_20px_40px_-10px_rgba(0,0,0,0.8)] sm:p-8 backdrop-blur-md">
      {/* Background ambient hover glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/25" />
      
      {/* Top Stitch Accented Row */}
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/40 bg-gold/15 shadow-[0_0_15px_rgba(201,162,39,0.25)] transition-all group-hover:scale-105 group-hover:border-gold group-hover:bg-gold/25 group-hover:shadow-[0_0_20px_rgba(201,162,39,0.5)]">
          {icon}
        </div>
        <span className="font-accent text-[20px] font-bold italic tracking-wider text-gold-light text-glow-subtle transition-all group-hover:text-glow-strong">
          {num}
        </span>
      </div>

      <h3 className="relative mt-5 font-display text-[21px] font-semibold text-cream transition-colors group-hover:text-gold-light group-hover:text-glow-subtle">
        {title}
      </h3>
      <p className="relative mt-2.5 text-[14.5px] leading-relaxed text-cream/75 transition-colors group-hover:text-cream/95">
        {desc}
      </p>

      {/* Decorative Bottom Seam with glowing gold on hover */}
      <div className="mt-5 h-[2px] w-0 bg-gradient-to-r from-gold via-gold-light to-transparent transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(201,162,39,0.8)]" />
    </div>
  );
}
