"use client";

import { useState } from "react";
import { SITE } from "@/lib/site-data";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-2xl border border-surface-border bg-surface-elevated/50 p-6">
      <h2 className="text-lg font-semibold text-foreground">Send a message</h2>
      <p className="mt-1 text-sm text-slate-500">
        Or email directly at{" "}
        <a href={`mailto:${SITE.email}`} className="text-accent hover:underline">
          {SITE.email}
        </a>
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-slate-400">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Your name"
            disabled={status === "sending"}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-slate-400">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="you@example.com"
            disabled={status === "sending"}
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-slate-400">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            className="mt-1 w-full rounded-xl border border-surface-border bg-surface px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="How can I help?"
            disabled={status === "sending"}
          />
        </div>
        {status === "sent" && (
          <p className="text-sm text-accent">Thanks! I&apos;ll get back to you soon.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400">
            Something went wrong. Please email me at{" "}
            <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>.
          </p>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </form>
    </div>
  );
}
