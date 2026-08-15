import { testimonials } from "@/lib/content";
import { Stitch } from "./Stitch";
import { Reveal } from "./Reveal";

function Card({ quote, name, role }: (typeof testimonials)[number]) {
  return (
    <div className="w-[320px] shrink-0 rounded-md border border-hairline bg-panel p-6 sm:w-[380px] sm:p-7">
      <p className="text-[14.5px] leading-relaxed text-cream-dim">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-5 border-t border-hairline pt-4">
        <div className="text-[13.5px] font-semibold text-cream">{name}</div>
        <div className="mt-0.5 text-[12px] text-sage">{role}</div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const track = [...testimonials, ...testimonials];

  return (
    <section className="border-y border-hairline bg-panel py-20 md:py-24">
      <div className="mx-auto max-w-[1120px] px-6">
        <Reveal className="mx-auto mb-12 max-w-[600px] text-center">
          <Stitch label="From the Shop Floor" />
          <h2 className="mt-3.5 font-display text-[28px] text-cream sm:text-[34px] md:text-[40px]">
            Tailors are already stitching it in
          </h2>
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
