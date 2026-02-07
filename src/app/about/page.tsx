import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import AboutPhoto from "@/components/AboutPhoto";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About | Murtaza Naiyar",
  description: "About Murtaza Naiyar — GenAI Engineer with 10 years of experience.",
  openGraph: {
    title: "About | Murtaza Naiyar",
    description: "GenAI Engineer with 10 years of experience building intelligent systems.",
  },
  alternates: { canonical: `${SITE.baseUrl}/about` },
};

export default function AboutPage() {
  return (
    <div className="relative z-10 mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <AnimateIn>
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">About</h1>
        <div className="mt-8 flex flex-col sm:flex-row gap-8 items-start">
          <AboutPhoto />
          <div className="space-y-6 text-slate-400 leading-relaxed flex-1 min-w-0">
          <p>
            I&apos;m a GenAI engineer with 10 years of experience building
            intelligent systems. My work spans machine learning, natural language
            processing, and bringing cutting-edge AI from research into production.
          </p>
          <p>
            I focus on large language models, retrieval-augmented generation
            (RAG), and agentic systems. I care about reliability, scalability,
            and making AI useful for real products and users.
          </p>
          <p>
            When I&apos;m not shipping models or pipelines, I like to stay close
            to the latest research and the open-source ML community. I&apos;m
            always open to collaboration and interesting problems.
          </p>
          </div>
        </div>
      </AnimateIn>
    </div>
  );
}
