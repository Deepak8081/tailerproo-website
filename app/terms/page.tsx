import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern your use of ${site.name}.`,
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Service"
      updated="15 August 2026"
    >
      <p className="text-[14.5px] leading-relaxed text-cream-dim">
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
        TailorPro app and website, operated by {site.name}. By creating an
        account or using TailorPro, you agree to these Terms.
      </p>

      <LegalSection heading="1. Using TailorPro">
        <p>
          TailorPro is provided to help tailoring shops manage customers,
          measurements, orders and billing. You must provide accurate
          registration information and are responsible for maintaining the
          confidentiality of your account credentials.
        </p>
      </LegalSection>

      <LegalSection heading="2. Your data">
        <p>
          You retain ownership of all customer, order and measurement data
          you enter into TailorPro. You are responsible for having the
          appropriate consent from your customers to store their information
          within the app.
        </p>
      </LegalSection>

      <LegalSection heading="3. Acceptable use">
        <p>
          You agree not to misuse TailorPro — including attempting to access
          another shop&rsquo;s data, reverse-engineering the app, or using it
          for any unlawful purpose.
        </p>
      </LegalSection>

      <LegalSection heading="4. Free and paid features">
        <p>
          TailorPro is free to get started. Certain advanced features may be
          offered as paid add-ons in the future; any such features will be
          clearly marked before you are charged.
        </p>
      </LegalSection>

      <LegalSection heading="5. Service availability">
        <p>
          We aim to keep TailorPro available and reliable, but do not
          guarantee uninterrupted service. We may update, suspend, or modify
          features of the app from time to time to improve it.
        </p>
      </LegalSection>

      <LegalSection heading="6. Termination">
        <p>
          You may stop using TailorPro and request deletion of your account
          at any time. We may suspend or terminate accounts that violate
          these Terms.
        </p>
      </LegalSection>

      <LegalSection heading="7. Limitation of liability">
        <p>
          TailorPro is provided &ldquo;as is&rdquo;. To the extent permitted
          by law, {site.name} is not liable for indirect or consequential
          losses arising from your use of the app.
        </p>
      </LegalSection>

      <LegalSection heading="8. Changes to these Terms">
        <p>
          We may revise these Terms from time to time. Continued use of
          TailorPro after changes take effect constitutes acceptance of the
          revised Terms.
        </p>
      </LegalSection>

      <LegalSection heading="9. Contact us">
        <p>
          Questions about these Terms can be sent to{" "}
          <a href={`mailto:${site.email}`} className="text-gold-light">
            {site.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
