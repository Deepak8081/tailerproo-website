"use client";

export function TapeMeasure({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative h-6 w-full overflow-hidden border-y border-gold/25 bg-[#120e05]/95 select-none ${className}`}
    >
      <div className="flex w-[200%] animate-marquee items-end justify-between opacity-80">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="flex items-end gap-1 shrink-0 px-2">
            <span className="font-mono text-[9px] font-bold text-gold mb-1">
              {i + 1}&quot;
            </span>
            <div className="h-4 w-[1.5px] bg-gold" />
            <div className="h-1.5 w-px bg-gold/40" />
            <div className="h-2.5 w-px bg-gold/60" />
            <div className="h-1.5 w-px bg-gold/40" />
            <div className="h-3 w-px bg-gold/70" />
            <div className="h-1.5 w-px bg-gold/40" />
            <div className="h-2.5 w-px bg-gold/60" />
            <div className="h-1.5 w-px bg-gold/40" />
          </div>
        ))}
      </div>
    </div>
  );
}
