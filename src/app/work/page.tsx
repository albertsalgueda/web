import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Albert Salgueda",
  description:
    "Selected work: Krea, Altan, agent products, and earlier projects.",
};

type Project = {
  title: string;
  period: string;
  status?: "current";
  description: string;
  tech?: string;
  href?: string;
};

const projects: Project[] = [
  {
    title: "Krea",
    period: "2026 – now",
    status: "current",
    description:
      "Building AI agents and creative AI products. Focused on agent infrastructure — memory, tools, and the things that make agents actually useful in production.",
    href: "https://krea.ai",
  },
  {
    title: "Agent Memory",
    period: "2026",
    description:
      "Long-term memory as a service for agents. Drop-in API, durable recall, no infra to run.",
    href: "https://memory.albertsalgueda.com",
  },
  {
    title: "Bruixola",
    period: "2026",
    description:
      "An agent that thinks for you — autonomous research, decisions, and direction.",
    href: "https://bruixola.albertsalgueda.com",
  },
  {
    title: "Altan",
    period: "2023 – 2026",
    description:
      "Co-founded a multi-agent AI platform for enterprise automation. Built the core orchestration layer, landed customers like ElevenLabs and Glovo, raised ~$2.55M. Hard lessons in co-founder dynamics and shipping at scale.",
    tech: "Python, TypeScript, FastAPI, React, PostgreSQL, GCP, Kubernetes",
  },
  {
    title: "eRipoll",
    period: "2020",
    description:
      "Local commerce platform built during COVID. ~55% adoption among businesses in Ripoll. A crash course in shipping fast for a real community.",
  },
  {
    title: "Neuroscience Research",
    period: "2021 – 2023",
    description:
      "M.S. in Brain & Cognition at UPF Barcelona. Research at the intersection of AI and cognitive science. Shapes how I think about agent architectures.",
  },
  {
    title: "Industrias Salgueda",
    period: "2016 – 2020",
    description:
      "Hardware and software engineering at the family industrial business. Embedded systems to internal tools. Where I learned to build things that work in the real world.",
    tech: "Hardware, embedded systems, custom software",
  },
];

export default function Work() {
  return (
    <section className="animate-in pt-10 sm:pt-16">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
        Work
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        Selected work.
      </h1>
      <div className="mt-10 space-y-10">
        {projects.map((project) => {
          const Wrapper = project.href ? "a" : "div";
          const wrapperProps = project.href
            ? {
                href: project.href,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "group block",
              }
            : { className: "block" };
          return (
            <article key={project.title}>
              <Wrapper {...wrapperProps}>
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
                    <span
                      className={
                        project.href
                          ? "transition-colors group-hover:text-accent"
                          : ""
                      }
                    >
                      {project.title}
                    </span>
                    {project.status === "current" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Now
                      </span>
                    )}
                  </h2>
                  <span className="shrink-0 font-mono text-xs text-muted">
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
              </Wrapper>
            </article>
          );
        })}
      </div>
    </section>
  );
}
