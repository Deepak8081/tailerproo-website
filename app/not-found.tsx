import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Stitch } from "@/components/Stitch";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
        <div className="font-accent text-[80px] italic leading-none text-gold/30 sm:text-[110px]">
          404
        </div>
        <h1 className="mt-2 font-display text-[26px] text-cream sm:text-[32px]">
          This thread doesn&rsquo;t lead anywhere.
        </h1>
        <p className="mt-3 max-w-[420px] text-[14.5px] leading-relaxed text-cream-dim">
          The page you&rsquo;re looking for has been moved or doesn&rsquo;t
          exist. Let&rsquo;s get you back to the shop floor.
        </p>
        <Stitch className="my-8 max-w-[220px]" />
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-sm bg-gradient-to-b from-gold-light to-gold px-6 py-3.5 text-[13.5px] font-bold tracking-wide text-[#1a1406] shadow-[0_8px_24px_-8px_rgba(201,162,39,0.5)] transition-transform hover:brightness-105"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
