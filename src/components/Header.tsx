"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE } from "@/lib/site-data";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/youtube", label: "YouTube" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-surface/90 backdrop-blur-md supports-[backdrop-filter]:bg-surface/70">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-semibold text-foreground transition-colors hover:text-accent"
        >
          murtazanaiyar
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActive ? "text-accent" : "text-slate-400 hover:text-foreground"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute inset-x-2 bottom-1.5 h-0.5 rounded-full bg-accent/50" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {SITE.resumeUrl && (
            <a
              href={SITE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-400 hover:text-accent transition-colors"
            >
              Resume
            </a>
          )}
        </div>

        <button
          type="button"
          className="md:hidden p-2.5 rounded-xl text-slate-400 hover:text-foreground hover:bg-surface-elevated transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav id="mobile-nav" className="md:hidden border-t border-surface-border bg-surface/95 backdrop-blur-md px-4 py-4" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 px-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === href
                      ? "text-accent bg-accent/10"
                      : "text-slate-400 hover:text-foreground hover:bg-surface-elevated"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
