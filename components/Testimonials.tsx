import { testimonials } from "@/lib/content";
import { Stitch } from "./Stitch";
import { Reveal } from "./Reveal";
import { Star } from "lucide-react";

function Card({ quote, name, role }: (typeof testimonials)[number]) {
  const initial = name.charAt(0);
  return (
    <div className="group w-[320px] shrink-0 rounded-xl border border-gold/20 bg-gradient-to-b from-[#0a1b14] to-[#07130f] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_0_30px_rgba(201,162,39,0.22),0_15px_35px_-10px_rgba(0,0,0,0.8)] sm:w-[380px] sm:p-7 backdrop-blur-md">
      <div className="flex items-center gap-1.5 text-gold">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={15} fill="#c9a227" stroke="none" className="drop-shadow-[0_0_8px_rgba(201,162,39,0.8)]" />
        ))}
      </div>
      <p className="mt-4 text-[14.5px] leading-relaxed text-cream/80 font-normal transition-colors group-hover:text-cream">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-hairline/80 pt-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/20 font-display text-[15px] font-bold text-gold-light shadow-[0_0_12px_rgba(201,162,39,0.35)]">
          {initial}
        </div>
        <div>
          <div className="text-[14px] font-semibold text-cream group-hover:text-gold-light group-hover:text-glow-subtle transition-colors">
            {name}
          </div>
          <div className="text-[12px] text-sage">{role}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const track = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden border-y border-hairline bg-panel/30 py-20 md:py-28">
      {/* Ambient background bloom */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[140px]" />

      <div className="relative mx-auto max-w-[1120px] px-6">
        <Reveal className="mx-auto mb-14 max-w-[660px] text-center">
          <Stitch label="From the Shop Floor" />
          <h2 className="mt-4 font-display text-[28px] leading-tight text-cream text-glow-gold sm:text-[36px] md:text-[44px]">
            Trusted by{" "}
            <span className="font-accent italic text-shimmer font-normal drop-shadow-[0_0_20px_rgba(255,217,102,0.8)]">
              Master Tailors
            </span>{" "}
            Across India
          </h2>
          <p className="mt-3.5 text-[15px] text-cream/75">
            Here is what boutique owners, master cutters &amp; karigars say about using TailorPro daily.
          </p>
        </Reveal>
      </div>

      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused]">
          {track.map((t, i) => (
            <Card key={`${t.name}-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
