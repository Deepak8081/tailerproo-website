export function Stitch({
  label,
  className = ""
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2.5 text-gold ${className}`}>
      <div className="stitch-line flex-1" />
      <div className="h-1.5 w-1.5 rotate-45 bg-gold shrink-0" />
      {label ? (
        <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
          {label}
        </span>
      ) : null}
      <div className="h-1.5 w-1.5 rotate-45 bg-gold shrink-0" />
      <div className="stitch-line flex-1" />
    </div>
  );
}
