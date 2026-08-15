import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your shop's data.`,
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      updated="15 August 2026"
    >
      <p className="text-[14.5px] leading-relaxed text-cream-dim">
        This Privacy Policy explains what information {site.name} (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;) collects through the TailorPro app and website, how we
        use it, and the choices you have. By using TailorPro, you agree to
        the practices described here.
      </p>

      <LegalSection heading="1. Information we collect">
        <p>
          <strong className="text-cream">Account information</strong> — your
          name, phone number, email address and shop details when you
          register for TailorPro.
        </p>
        <p>
          <strong className="text-cream">Shop data</strong> — customer
          profiles, garment measurements, order details, photos you attach to
          orders, and billing records that you enter into the app.
        </p>
        <p>
          <strong className="text-cream">Usage data</strong> — device type,
          app version, crash logs and general usage patterns, collected
          automatically to help us fix bugs and improve the app.
        </p>
      </LegalSection>

      <LegalSection heading="2. How we use this information">
        <p>
          We use the information above to operate and improve TailorPro: to
          sync your shop&rsquo;s data across devices, generate measurement
          slips and invoices, send delivery reminders, provide customer
          support, and understand how the app is used so we can make it
          better.
        </p>
        <p>
          We do not sell your data, or your customers&rsquo; data, to third
          parties.
        </p>
      </LegalSection>

      <LegalSection heading="3. Data storage and security">
        <p>
          Shop data is encrypted in transit and stored on secure,
          access-controlled servers. Only you and staff members you
          explicitly authorise within the app can access your shop&rsquo;s
          customer and order records.
        </p>
      </LegalSection>

      <LegalSection heading="4. Sharing of information">
        <p>
          We share information only with service providers who help us run
          TailorPro — such as cloud hosting and notification delivery — under
          contractual obligations to protect your data, or where required by
          law.
        </p>
      </LegalSection>

      <LegalSection heading="5. Your choices">
        <p>
          You can access, correct or delete your shop&rsquo;s data at any
          time from within the app. You may request full account deletion by
          contacting us at{" "}
          <a href={`mailto:${site.email}`} className="text-gold-light">
            {site.email}
          </a>
          , and we will remove your data within a reasonable timeframe,
          except where retention is required by law.
        </p>
      </LegalSection>

      <LegalSection heading="6. Children's privacy">
        <p>
          TailorPro is a business tool intended for shop owners and staff. It
          is not directed at, and we do not knowingly collect information
          from, children under 13.
        </p>
      </LegalSection>

      <LegalSection heading="7. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. We will
          notify you of material changes within the app or by email before
          they take effect.
        </p>
      </LegalSection>

      <LegalSection heading="8. Contact us">
        <p>
          If you have questions about this Privacy Policy or how your data
          is handled, reach us at{" "}
          <a href={`mailto:${site.email}`} className="text-gold-light">
            {site.email}
          </a>{" "}
          or {site.phone}.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
