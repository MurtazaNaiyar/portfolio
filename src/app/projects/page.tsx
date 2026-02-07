import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { PROJECTS } from "@/lib/portfolio-content";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects | Murtaza Naiyar",
  description: "Selected GenAI and ML projects by Murtaza Naiyar.",
  openGraph: {
    title: "Projects | Murtaza Naiyar",
    description: "Selected work in GenAI, RAG, agents, and MLOps.",
  },
  alternates: { canonical: `${SITE.baseUrl}/projects` },
};

export default function ProjectsPage() {
  return (
    <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <AnimateIn>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Projects
          </h1>
          <p className="mt-4 text-slate-400">
            Selected work in GenAI, RAG, agents, and MLOps. From prototypes to production.
          </p>
        </div>
      </AnimateIn>

      <AnimateIn className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger>
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className={`animate-in-view-child group relative flex flex-col overflow-hidden rounded-2xl border border-surface-border bg-surface-elevated/50 transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1.5 hover:scale-[1.02] ${
              p.featured ? "sm:col-span-2 sm:row-span-1" : ""
            }`}
          >
            <div
              className={`h-32 sm:h-40 bg-gradient-to-br ${p.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}
            >
              <span className="text-4xl opacity-50 transition-transform duration-300 group-hover:scale-110">◇</span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {p.title}
                </h2>
                {p.featured && (
                  <span className="shrink-0 rounded-full bg-accent/20 px-2.5 py-1 text-xs font-medium text-accent">
                    Featured
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg bg-surface border border-surface-border px-2.5 py-1 text-xs text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {(p.link !== "#" || p.repo !== "#") && (
                <div className="mt-5 flex gap-4">
                  {p.link !== "#" && (
                    <Link
                      href={p.link}
                      className="text-sm font-medium text-accent hover:text-accent-muted transition-colors"
                    >
                      Live demo →
                    </Link>
                  )}
                  {p.repo !== "#" && (
                    <Link
                      href={p.repo}
                      className="text-sm font-medium text-accent hover:text-accent-muted transition-colors"
                    >
                      Repo
                    </Link>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </AnimateIn>
    </div>
  );
}
