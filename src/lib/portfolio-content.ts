/**
 * Central content for Experience, Projects, and Skills pages.
 * Edit here to update roles, companies, projects, and skill groups.
 */

export const EXPERIENCES = [
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
] as const;

export const PROJECTS = [
  {
    title: "RAG-powered product assistant",
    description:
      "End-to-end RAG system with custom embeddings and LLM for product Q&A. Deployed with evaluation and monitoring.",
    tech: ["Python", "LangChain", "OpenAI", "Vector DB"],
    link: "#",
    repo: "#",
    featured: true,
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/20",
  },
  {
    title: "Agent framework for internal tools",
    description:
      "Multi-agent workflow for internal operations: tool use, planning, and human-in-the-loop.",
    tech: ["Python", "LLMs", "Agents", "APIs"],
    link: "#",
    repo: "#",
    featured: false,
    gradient: "from-teal-500/20 via-emerald-500/10 to-cyan-500/20",
  },
  {
    title: "ML evaluation and MLOps pipeline",
    description:
      "Automated evaluation, A/B testing, and deployment pipeline for production LLM models.",
    tech: ["Python", "MLOps", "Evals", "CI/CD"],
    link: "#",
    repo: "#",
    featured: false,
    gradient: "from-accent/20 via-teal-500/10 to-emerald-500/20",
  },
] as const;

export const SKILL_GROUPS = [
  {
    title: "GenAI & LLMs",
    icon: "◇",
    items: [
      "LLM fine-tuning & prompting",
      "RAG (retrieval-augmented generation)",
      "Agents & tool use",
      "Evaluation & evals frameworks",
    ],
  },
  {
    title: "ML & NLP",
    icon: "◈",
    items: [
      "Machine learning (supervised, unsupervised)",
      "NLP (transformers, embeddings)",
      "Model deployment & serving",
    ],
  },
  {
    title: "Languages & frameworks",
    icon: "◆",
    items: ["Python", "PyTorch", "TensorFlow", "LangChain", "Hugging Face"],
  },
  {
    title: "Tools & platforms",
    icon: "○",
    items: [
      "MLOps & experiment tracking",
      "Vector DBs & search",
      "Cloud (AWS / GCP)",
      "CI/CD & production ML",
    ],
  },
] as const;
