import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Stitch } from "@/components/Stitch";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the TailorPro team — questions about the app, onboarding your shop, or partnership enquiries.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <div className="mx-auto max-w-[560px] text-center">
            <Stitch label="Get in Touch" />
            <h1 className="mt-3.5 font-display text-[32px] text-cream sm:text-[42px]">
              We&rsquo;d love to hear from your shop.
            </h1>
            <p className="mt-4 text-[15.5px] leading-relaxed text-cream-dim">
              Questions about TailorPro, onboarding help, or a feature
              you&rsquo;d like to see — write to us and a real person will
              reply.
            </p>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <div className="space-y-8">
              <InfoRow icon={<Mail size={18} />} label="Email">
                <a href={`mailto:${site.email}`} className="hover:text-gold-light">
                  {site.email}
                </a>
              </InfoRow>
              <InfoRow icon={<Phone size={18} />} label="Phone">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-gold-light">
                  {site.phone}
                </a>
              </InfoRow>
              <InfoRow icon={<MapPin size={18} />} label="Studio">
                <span>{site.address}</span>
              </InfoRow>

              <div className="rounded-md border border-hairline bg-panel p-6">
                <p className="font-accent text-[16px] italic leading-relaxed text-cream-dim">
                  &ldquo;We read every message ourselves — TailorPro is built
                  by listening to the shop floor.&rdquo;
                </p>
              </div>
            </div>

            <div className="rounded-md border border-hairline bg-panel-2/40 p-7 sm:p-9">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function InfoRow({
  icon,
  label,
  children
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold-light">
        {icon}
      </div>
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage">
          {label}
        </div>
        <div className="mt-1 text-[14.5px] text-cream">{children}</div>
      </div>
    </div>
  );
}
