import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import { SKILL_GROUPS } from "@/lib/portfolio-content";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Skills | Murtaza Naiyar",
  description: "Technical skills of Murtaza Naiyar — AI, ML, and engineering.",
  openGraph: {
    title: "Skills | Murtaza Naiyar",
    description: "AI, ML, and engineering — in practice for 10 years.",
  },
  alternates: { canonical: `${SITE.baseUrl}/skills` },
};

export default function SkillsPage() {
  return (
    <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <AnimateIn>
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Skills
        </h1>
        <p className="mt-4 text-slate-400">
          AI, ML, and engineering — in practice for 10 years.
        </p>
      </AnimateIn>

      <AnimateIn className="mt-16 grid gap-6 sm:grid-cols-2" stagger>
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.title}
            className="animate-in-view-child group rounded-2xl border border-surface-border bg-surface-elevated/50 p-6 transition-all duration-300 hover:border-accent/30 hover:bg-surface-elevated hover:-translate-y-1 hover:scale-[1.01]"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl text-accent">{group.icon}</span>
              <h2 className="text-lg font-semibold text-foreground">
                {group.title}
              </h2>
            </div>
            <ul className="mt-5 space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="text-slate-400 pl-8 relative">
                  <span className="absolute left-0 top-1.5 h-1 w-1 rounded-full bg-slate-500 group-hover:bg-accent/60 transition-colors" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </AnimateIn>
    </div>
  );
}
