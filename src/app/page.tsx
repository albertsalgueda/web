import { Age } from "@/components/age";

const WHATSAPP_URL =
  "https://wa.me/14303340070?text=Hi%20Jarvis%2C%20I%27d%20like%20to%20talk%20with%20Albert%20about%20agents.";

const projects = [
  {
    name: "agent memory",
    blurb: "long-term memory for your agents",
    href: "https://memory.albertsalgueda.com",
  },
  {
    name: "bruixola",
    blurb: "an agent that thinks for you",
    href: "https://bruixola.albertsalgueda.com",
  },
];

const links = [
  { label: "x", href: "https://x.com/albertsalgueda" },
  { label: "github", href: "https://github.com/albertsalgueda" },
  { label: "linkedin", href: "https://linkedin.com/in/albertsalgueda" },
  { label: "email", href: "mailto:albert@salgueda.com" },
  { label: "jarvis", href: WHATSAPP_URL },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col justify-center px-6 py-24">
      <h1 className="text-sm font-medium text-neutral-200">albert salgueda</h1>
      <div className="mt-3">
        <Age />
      </div>

      <p className="mt-10 text-sm leading-relaxed text-neutral-400">
        ai agents &amp; creative ai at{" "}
        <a
          href="https://krea.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-200 underline decoration-neutral-700 underline-offset-4 transition-colors hover:decoration-neutral-300"
        >
          krea
        </a>
        , san francisco.
      </p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500">
        prev. co-founded altan — a multi-agent platform used by elevenlabs
        &amp; glovo.
      </p>

      <ul className="mt-10 space-y-2 text-sm leading-relaxed">
        {projects.map((p) => (
          <li key={p.name}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-200 underline decoration-neutral-700 underline-offset-4 transition-colors hover:decoration-neutral-300"
            >
              {p.name}
            </a>
            <span className="text-neutral-500"> — {p.blurb}</span>
          </li>
        ))}
      </ul>

      <nav aria-label="links" className="mt-12 flex flex-wrap gap-x-4 gap-y-2">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={
              l.href.startsWith("mailto:") ? undefined : "noopener noreferrer"
            }
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-200"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </main>
  );
}
