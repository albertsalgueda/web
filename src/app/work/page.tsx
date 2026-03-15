import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Albert Salgueda",
};

const projects = [
  {
    title: "Altan",
    period: "2023 – 2026",
    description:
      "Multi-agent AI platform for enterprise automation. Built the core orchestration layer, landed customers like ElevenLabs and Glovo, and raised ~$2.55M. Learned hard lessons about co-founder dynamics and building at scale.",
    tech: "Python, TypeScript, FastAPI, React, PostgreSQL, GCP, Kubernetes",
  },
  {
    title: "eRipoll",
    period: "2020",
    description:
      "Local commerce platform built during COVID to help businesses in Ripoll go online. Achieved ~55% adoption among local businesses. A crash course in shipping fast and serving a real community.",
    tech: "Web platform",
  },
  {
    title: "Neuroscience Research",
    period: "2021 – 2023",
    description:
      "M.S. in Brain & Cognition at UPF Barcelona. Research at the intersection of AI and cognitive science. This shapes how I think about agent architectures and human-AI interaction.",
  },
  {
    title: "Industrias Salgueda",
    period: "2016 – 2020",
    description:
      "Hardware and software engineering at my family's industrial business. Built custom solutions spanning embedded systems to business software. Where I learned to build things that work in the real world.",
    tech: "Hardware, embedded systems, custom software",
  },
];

export default function Work() {
  return (
    <section className="animate-in pt-16">
      <h1 className="text-3xl font-bold tracking-tight">Work</h1>
      <div className="mt-10 space-y-12">
        {projects.map((project) => (
          <article key={project.title}>
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <span className="shrink-0 font-mono text-sm text-muted">
                {project.period}
              </span>
            </div>
            <p className="mt-2 leading-relaxed text-muted">
              {project.description}
            </p>
            {project.tech && (
              <p className="mt-2 font-mono text-xs text-muted/60">
                {project.tech}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
