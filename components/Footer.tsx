import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-[1120px] px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image src="/app-icon.png" alt="" width={28} height={28} className="rounded-md" />
              <span className="font-display text-[16px] text-cream">
                Tailor<span className="text-gold">Pro</span>
              </span>
            </div>
            <p className="mt-3.5 max-w-[220px] text-[13px] leading-relaxed text-cream-dim">
              {site.tagline}
            </p>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage">
              Explore
            </div>
            <div className="mt-4 flex flex-col gap-2.5 text-[13.5px] text-cream-dim">
              <a href="/#features" className="transition-colors hover:text-gold-light">Features</a>
              <a href="/#workflow" className="transition-colors hover:text-gold-light">Workflow</a>
              <a href="/#why" className="transition-colors hover:text-gold-light">Why TailorPro</a>
              <a href="/#faq" className="transition-colors hover:text-gold-light">FAQ</a>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage">
              Company
            </div>
            <div className="mt-4 flex flex-col gap-2.5 text-[13.5px] text-cream-dim">
              <Link href="/contact" className="transition-colors hover:text-gold-light">Contact Us</Link>
              <Link href="/privacy-policy" className="transition-colors hover:text-gold-light">Privacy Policy</Link>
              <Link href="/terms" className="transition-colors hover:text-gold-light">Terms of Service</Link>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage">
              Get in Touch
            </div>
            <div className="mt-4 flex flex-col gap-2.5 text-[13.5px] text-cream-dim">
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold-light">
                {site.email}
              </a>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-gold-light">
                {site.phone}
              </a>
              <span>{site.address}</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-6 text-[12px] text-sage sm:flex-row">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span className="italic font-accent text-[13px] text-cream-dim">
            Bespoke Elegance, Digitally Tailored
          </span>
        </div>
      </div>
    </footer>
  );
}
