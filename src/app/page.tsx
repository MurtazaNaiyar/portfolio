import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { SITE } from "@/lib/site-data";

const tagline =
  "Building intelligent systems with LLMs, ML, and modern AI. 10 years turning research into products.";

const skills = [
  "LLMs & GenAI",
  "Machine Learning",
  "RAG & Agents",
  "Python",
  "MLOps",
  "NLP",
];

const highlights = [
  {
    title: "From research to production",
    description: "Design and deploy LLM-based products, RAG systems, and evaluation pipelines.",
  },
  {
    title: "Agents & tool use",
    description: "Multi-agent workflows, tool use, and human-in-the-loop for real applications.",
  },
  {
    title: "Reliable AI systems",
    description: "MLOps, monitoring, and production-grade ML so AI works when it matters.",
  },
];

export default function HomePage() {
  return (
    <div className="relative z-10">
      {/* Hero — full viewport with gradient orbs */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-20 pb-24 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" aria-hidden />
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald-500/25 blur-[128px] animate-float"
          aria-hidden
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-teal-500/20 blur-[100px] animate-float-slow animate-glow-pulse"
          aria-hidden
        />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-cyan-500/10 blur-[80px] animate-float delay-300" aria-hidden />
        <div className="relative mx-auto max-w-4xl text-center">
          <p
            className="text-sm font-medium tracking-widest text-accent uppercase opacity-0 animate-fade-in"
            style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
          >
            GenAI Engineer
          </p>
          <h1
            className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl opacity-0 animate-fade-in-up"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            Murtaza Naiyar
          </h1>
          <p
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "250ms", animationFillMode: "forwards" }}
          >
            {tagline}
          </p>

          <div
            className="mt-10 flex flex-wrap justify-center gap-3 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-surface-border bg-surface-elevated/80 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:text-foreground hover:scale-105 motion-reduce:scale-100"
              >
                {skill}
              </span>
            ))}
          </div>

          <p
            className="mt-8 text-sm text-slate-500 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "450ms", animationFillMode: "forwards" }}
          >
            {SITE.availableFor}
          </p>
          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
          >
            <Link
              href="/contact"
              className="rounded-xl bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:bg-accent-hover hover:shadow-accent/30 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] motion-reduce:transform-none"
            >
              Get in Touch
            </Link>
            <Link
              href="/projects"
              className="rounded-xl border border-surface-border bg-surface-elevated/80 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] motion-reduce:transform-none"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* What I do — highlight cards with scroll motion */}
      <section className="relative border-t border-surface-border bg-surface/50 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <AnimateIn>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              What I do
            </h2>
            <p className="mt-2 max-w-2xl text-slate-400">
              From idea to production: LLMs, RAG, agents, and systems that scale.
            </p>
          </AnimateIn>
          <AnimateIn className="mt-12 grid gap-6 sm:grid-cols-3" stagger>
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className="animate-in-view-child group rounded-2xl border border-surface-border bg-surface-elevated/50 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-surface-elevated hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 hover:scale-[1.02] motion-reduce:transform-none"
              >
                <span className="text-2xl font-bold text-accent/80">0{i + 1}</span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </AnimateIn>
        </div>
      </section>

      {/* Quick intro */}
      <section className="relative border-t border-surface-border px-4 py-24 sm:px-6">
        <AnimateIn className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground">Quick intro</h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            I&apos;m a GenAI engineer with a decade of experience designing and
            shipping ML and AI systems. I focus on large language models, RAG,
            agents, and putting research into production. If you&apos;re building
            something with AI or want to collaborate, I&apos;d love to hear from
            you.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-muted hover:gap-3"
          >
            More about me
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimateIn>
      </section>
    </div>
  );
}
