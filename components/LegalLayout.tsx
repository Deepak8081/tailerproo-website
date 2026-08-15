import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Stitch } from "./Stitch";

export function LegalLayout({
  eyebrow,
  title,
  updated,
  children
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[760px]">
          <div className="text-center">
            <Stitch label={eyebrow} />
            <h1 className="mt-3.5 font-display text-[30px] text-cream sm:text-[38px]">
              {title}
            </h1>
            <p className="mt-3 text-[13px] tracking-wide text-sage">
              Last updated: {updated}
            </p>
          </div>

          <div className="legal-prose mt-14 space-y-9">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  heading,
  children
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-[19px] text-gold-light sm:text-[21px]">
        {heading}
      </h2>
      <div className="mt-3 space-y-3 text-[14.5px] leading-relaxed text-cream-dim">
        {children}
      </div>
    </section>
  );
}
