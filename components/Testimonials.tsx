import { testimonials } from "@/lib/content";
import { Stitch } from "./Stitch";
import { Reveal } from "./Reveal";
import { Star } from "lucide-react";

function Card({ quote, name, role }: (typeof testimonials)[number]) {
  const initial = name.charAt(0);
  return (
    <div className="w-[320px] shrink-0 rounded-xl border border-hairline/90 bg-ink p-6 transition-all duration-300 hover:border-gold/50 hover:bg-panel sm:w-[380px] sm:p-7 shadow-lg">
      <div className="flex items-center gap-1 text-gold">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="#c9a227" stroke="none" />
        ))}
      </div>
      <p className="mt-4 text-[14.5px] leading-relaxed text-cream-dim font-normal">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-hairline/80 pt-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/15 font-display text-[15px] font-bold text-gold-light">
          {initial}
        </div>
        <div>
          <div className="text-[14px] font-semibold text-cream">{name}</div>
          <div className="text-[12px] text-sage">{role}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const track = [...testimonials, ...testimonials];

  return (
    <section className="border-y border-hairline bg-panel/40 py-20 md:py-28">
      <div className="mx-auto max-w-[1120px] px-6">
        <Reveal className="mx-auto mb-14 max-w-[620px] text-center">
          <Stitch label="From the Shop Floor" />
          <h2 className="mt-3.5 font-display text-[28px] text-cream sm:text-[36px] md:text-[42px]">
            Trusted by Master Tailors Across India
          </h2>
          <p className="mt-3 text-[15px] text-cream-dim">
            Here is what boutique owners and master cutters say about using TailorPro daily.
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
