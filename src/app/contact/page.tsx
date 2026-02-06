import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import { CONTACT_LINKS, SITE } from "@/lib/site-data";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Murtaza Naiyar",
  description: "Get in touch with Murtaza Naiyar. Open to collaboration, consulting, and interesting problems.",
  openGraph: {
    title: "Contact | Murtaza Naiyar",
    description: "Get in touch. Open to collaboration, consulting, and interesting problems.",
  },
};

export default function ContactPage() {
  return (
    <div className="relative z-10 mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <AnimateIn className="text-center sm:text-left">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Get in touch
        </h1>
        <p className="mt-4 text-slate-400">
          {SITE.availableFor} Say hello.
        </p>
        <p className="mt-2">
          <a
            href={SITE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent hover:text-accent-muted"
          >
            Download resume (PDF) →
          </a>
        </p>
      </AnimateIn>

      <AnimateIn className="mt-12">
        <ContactForm />
      </AnimateIn>

      <AnimateIn className="mt-16 space-y-4" stagger>
        {CONTACT_LINKS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noopener noreferrer" : undefined}
            className="animate-in-view-child group flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-surface-border bg-surface-elevated/50 p-6 transition-all duration-300 hover:border-accent/50 hover:bg-surface-elevated hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5 motion-reduce:transform-none"
          >
            <span className="text-sm font-medium text-slate-500 shrink-0 w-20">
              {c.label}
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground group-hover:text-accent transition-colors truncate">
                {c.value}
              </p>
              <p className="mt-0.5 text-sm text-slate-500">{c.desc}</p>
            </div>
            <span className="hidden sm:inline text-slate-500 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300">
              →
            </span>
          </a>
        ))}
      </AnimateIn>
    </div>
  );
}
