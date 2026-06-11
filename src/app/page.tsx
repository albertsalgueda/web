import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/14303340070?text=Hi%20Jarvis%2C%20I%27d%20like%20to%20talk%20with%20Albert%20about%20agents.";
const BOOK_CALL_URL =
  "mailto:albert@salgueda.com?subject=Agent%20setup%20call";

const products = [
  {
    title: "Agent Memory",
    tag: "Product",
    description:
      "Long-term memory for your agents. Drop-in API, durable recall, no infra to run.",
    href: "https://memory.albertsalgueda.com",
    external: true,
  },
  {
    title: "Bruixola",
    tag: "Product",
    description:
      "An agent that thinks for you — research, decisions, and direction on demand.",
    href: "https://bruixola.albertsalgueda.com",
    external: true,
  },
  {
    title: "Custom agent setup",
    tag: "Service",
    description:
      "I'll set up a working agent in your stack — memory, tools, evals, deploy. Fixed scope, fast.",
    href: WHATSAPP_URL,
    external: true,
  },
];

export default function Home() {
  return (
    <div className="animate-in">
      <section className="pt-10 sm:pt-16">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Albert Salgueda · Krea
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-[2.6rem] sm:leading-[1.05]">
          Building AI agents
          <br />
          and creative AI{" "}
          <span className="text-muted">at Krea.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          I ship agent infrastructure and products: memory, autonomous research,
          and custom setups for teams that want to move now.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Talk to Jarvis
            <span aria-hidden className="text-base leading-none">
              &rarr;
            </span>
          </a>
          <a
            href={BOOK_CALL_URL}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
          >
            Book a call
          </a>
        </div>
      </section>

      <section className="mt-20">
        <div className="flex items-baseline justify-between">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            What I&apos;m shipping
          </h2>
          <span className="font-mono text-xs text-muted/60">2026</span>
        </div>
        <ul className="mt-5 divide-y divide-border border-y border-border">
          {products.map((p) => (
            <li key={p.title}>
              <a
                href={p.href}
                target={p.external ? "_blank" : undefined}
                rel={p.external ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-5 py-5 transition-colors hover:bg-surface/60"
              >
                <span className="mt-1 hidden w-16 shrink-0 font-mono text-xs uppercase tracking-wider text-muted sm:block">
                  {p.tag}
                </span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                      {p.title}
                    </h3>
                    <span
                      aria-hidden
                      className="text-sm text-muted transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                    >
                      &rarr;
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20">
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Elsewhere
        </h2>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <Link
            href="/work"
            className="text-foreground transition-colors hover:text-accent"
          >
            Work &rarr;
          </Link>
          <Link
            href="/about"
            className="text-muted transition-colors hover:text-foreground"
          >
            About
          </Link>
          <a
            href="https://linkedin.com/in/albertsalgueda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/albertsalgueda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://x.com/albertsalgueda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            X
          </a>
        </div>
      </section>
    </div>
  );
}
