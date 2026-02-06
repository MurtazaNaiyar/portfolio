import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Experience | Murtaza Naiyar",
  description: "Career and experience of Murtaza Naiyar, GenAI Engineer.",
  openGraph: {
    title: "Experience | Murtaza Naiyar",
    description: "A decade of building and shipping ML and AI systems.",
  },
};

const experiences = [
  {
    role: "Senior GenAI Engineer",
    company: "Company Name",
    period: "2022 – Present",
    bullets: [
      "Led design and deployment of LLM-based products and RAG systems.",
      "Built evaluation pipelines and MLOps for production models.",
    ],
  },
  {
    role: "ML Engineer",
    company: "Previous Company",
    period: "2019 – 2022",
    bullets: [
      "Developed NLP and ML models for production applications.",
      "Collaborated with research and product teams on model lifecycle.",
    ],
  },
  {
    role: "Software / ML Engineer",
    company: "Earlier Role",
    period: "2015 – 2019",
    bullets: [
      "Shipped ML-powered features and data pipelines.",
      "Grew from software engineering into ML and AI.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="relative z-10 mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <AnimateIn>
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Experience
        </h1>
        <p className="mt-4 text-slate-400">
          A decade of building and shipping ML and AI systems.
        </p>
      </AnimateIn>

      <div className="mt-16 relative">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-surface-border to-transparent" />

        <AnimateIn as="ul" className="space-y-0" stagger>
          {experiences.map((exp) => (
            <li
              key={exp.role + exp.company}
              className="animate-in-view-child relative flex gap-8 pb-16 last:pb-0"
            >
              <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-surface">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </div>
              <div className="flex-1 rounded-2xl border border-surface-border bg-surface-elevated/50 p-6 transition-all duration-300 hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h2 className="text-xl font-semibold text-foreground">
                    {exp.role}
                  </h2>
                  <span className="text-sm text-slate-500 tabular-nums">{exp.period}</span>
                </div>
                <p className="mt-1 text-accent font-medium">{exp.company}</p>
                <ul className="mt-4 space-y-2 text-slate-400">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </AnimateIn>
      </div>
    </div>
  );
}
