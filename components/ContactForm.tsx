"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// NOTE for the developer: this form currently only simulates a submit on
// the client. Wire it up to a real endpoint (e.g. an API route calling
// Resend/SendGrid, or a service like Formspree) before going live.
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center gap-3 rounded-md border border-gold/30 bg-gold/[0.06] px-8 py-16 text-center"
      >
        <CheckCircle2 className="text-gold-light" size={34} />
        <h3 className="font-display text-[20px] text-cream">Message received</h3>
        <p className="max-w-[320px] text-[14px] text-cream-dim">
          Thank you for reaching out — our team will get back to you within
          one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Email address" name="email" type="email" required />
      </div>
      <Field label="Shop / business name" name="shop" />
      <Field label="How can we help?" name="message" textarea required />

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-2 inline-flex w-fit items-center gap-2 rounded-sm bg-gradient-to-b from-gold-light to-gold px-7 py-3.5 text-[13.5px] font-bold tracking-wide text-[#1a1406] shadow-[0_8px_24px_-8px_rgba(201,162,39,0.5)] transition-transform hover:brightness-105 active:scale-[0.98] disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send message"}
        {status !== "sending" && (
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  required = false
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const base =
    "w-full rounded-sm border border-hairline bg-panel px-4 py-3 text-[14px] text-cream placeholder:text-sage/70 outline-none transition-colors focus:border-gold/60";
  return (
    <label className="block">
      <span className="mb-2 block text-[12.5px] font-medium tracking-wide text-cream-dim">
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={base} />
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}
