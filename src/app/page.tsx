import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import {
  SITE,
  HOME_TAGLINE,
  HOME_SKILLS,
  HOME_WHAT_I_DO_INTRO,
  HOME_HIGHLIGHTS,
  HOME_QUICK_INTRO,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <div className="relative z-10">
      {/* Hero — full viewport with gradient orbs */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-20 pb-24 sm:px-6 overflow-hidden"
        aria-labelledby="hero-heading"
      >
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
            AI Engineer
          </p>
          <h1
            id="hero-heading"
            className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl opacity-0 animate-fade-in-up"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            Murtaza Naiyar
          </h1>
          <p
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "250ms", animationFillMode: "forwards" }}
          >
            {HOME_TAGLINE}
          </p>

          <div
            className="mt-10 flex flex-wrap justify-center gap-3 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            {HOME_SKILLS.map((skill) => (
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
      <section
        id="what-i-do"
        className="relative border-t border-surface-border bg-surface/50 px-4 py-24 sm:px-6"
        aria-labelledby="what-i-do-heading"
      >
        <div className="mx-auto max-w-5xl">
          <AnimateIn>
            <h2 id="what-i-do-heading" className="text-2xl font-bold text-foreground sm:text-3xl">
              What I do
            </h2>
            <p className="mt-2 max-w-2xl text-slate-400">
              {HOME_WHAT_I_DO_INTRO}
            </p>
          </AnimateIn>
          <AnimateIn className="mt-12 grid gap-6 sm:grid-cols-3" stagger>
            {HOME_HIGHLIGHTS.map((item, i) => (
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
      <section
        id="quick-intro"
        className="relative border-t border-surface-border px-4 py-24 sm:px-6"
        aria-labelledby="quick-intro-heading"
      >
        <AnimateIn className="mx-auto max-w-3xl">
          <h2 id="quick-intro-heading" className="text-2xl font-bold text-foreground">Quick intro</h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            {HOME_QUICK_INTRO}
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
