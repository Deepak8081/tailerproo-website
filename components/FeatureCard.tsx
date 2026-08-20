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
    <div className="group relative h-full overflow-hidden border border-hairline/80 bg-panel/70 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:bg-panel hover:shadow-[0_16px_36px_-10px_rgba(201,162,39,0.2)] sm:p-8">
      {/* Background ambient hover glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/20" />
      
      {/* Top Stitch Accented Row */}
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center border border-gold/30 bg-gold/10 transition-colors group-hover:border-gold group-hover:bg-gold/20">
          {icon}
        </div>
        <span className="font-accent text-[18px] font-semibold italic tracking-wider text-gold-light">
          {num}
        </span>
      </div>

      <h3 className="relative mt-5 font-display text-[20px] font-medium text-cream group-hover:text-gold-light transition-colors">
        {title}
      </h3>
      <p className="relative mt-2.5 text-[14.5px] leading-relaxed text-cream-dim">
        {desc}
      </p>

      {/* Decorative Bottom Seam on hover */}
      <div className="mt-5 h-[1.5px] w-0 bg-gradient-to-r from-gold to-transparent transition-all duration-300 group-hover:w-full" />
    </div>
  );
}
