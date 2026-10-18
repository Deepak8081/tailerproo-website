export function Stitch({
  label,
  className = ""
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2.5 text-gold ${className}`}>
      <div className="stitch-line flex-1 opacity-80" />
      <div className="h-1.5 w-1.5 rotate-45 bg-gold shrink-0 shadow-[0_0_8px_rgba(201,162,39,0.9)]" />
      {label ? (
        <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-light text-glow-subtle drop-shadow-[0_0_10px_rgba(201,162,39,0.5)]">
          {label}
        </span>
      ) : null}
      <div className="h-1.5 w-1.5 rotate-45 bg-gold shrink-0 shadow-[0_0_8px_rgba(201,162,39,0.9)]" />
      <div className="stitch-line flex-1 opacity-80" />
    </div>
  );
}
