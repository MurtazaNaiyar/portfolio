import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-surface-border bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-2xl font-bold text-foreground">Let&apos;s build something.</p>
            <p className="mt-1 text-sm text-slate-500">
              {SITE.availableFor}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-muted transition-colors"
              >
                Get in touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              {SITE.resumeUrl && (
                <a
                  href={SITE.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-slate-400 hover:text-accent transition-colors"
                >
                  Download resume
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            {FOOTER_LINKS.map(({ href, label, desc }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group"
              >
                <span className="block text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  {label}
                </span>
                <span className="block text-xs text-slate-500 mt-0.5">{desc}</span>
              </a>
            ))}
          </div>
        </div>
        <p className="mt-12 pt-8 border-t border-surface-border text-sm text-slate-500">
          © {year} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
