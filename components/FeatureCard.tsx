"use client";

export function FeatureCard({
  num,
  title,
  desc
}: {
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative h-full overflow-hidden bg-ink px-7 py-9 transition-colors duration-300 hover:bg-panel/60 sm:px-8">
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/[0.12]"
      />
      <div className="relative font-accent text-[14px] italic text-gold">{num}</div>
      <h3 className="relative mt-3.5 font-display text-[19px] text-cream">{title}</h3>
      <p className="relative mt-2.5 text-[14px] leading-relaxed text-cream-dim">{desc}</p>
    </div>
  );
}
