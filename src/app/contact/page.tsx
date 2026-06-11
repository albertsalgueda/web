import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Albert Salgueda",
  description:
    "Talk to Jarvis on WhatsApp, book a call, or reach Albert directly.",
};

const WHATSAPP_URL =
  "https://wa.me/14303340070?text=Hi%20Jarvis%2C%20I%27d%20like%20to%20talk%20with%20Albert%20about%20agents.";
const BOOK_CALL_URL =
  "mailto:albert@salgueda.com?subject=Agent%20setup%20call";

const links = [
  {
    label: "Email",
    href: "mailto:albert@salgueda.com",
    display: "albert@salgueda.com",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/albertsalgueda",
    display: "linkedin.com/in/albertsalgueda",
  },
  {
    label: "GitHub",
    href: "https://github.com/albertsalgueda",
    display: "github.com/albertsalgueda",
  },
  {
    label: "X",
    href: "https://x.com/albertsalgueda",
    display: "x.com/albertsalgueda",
  },
];

export default function Contact() {
  return (
    <section className="animate-in pt-10 sm:pt-16">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
        Contact
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        Let&apos;s talk.
      </h1>
      <p className="mt-4 max-w-lg leading-relaxed text-muted">
        Fastest way is WhatsApp — Jarvis picks up, then I do.
      </p>

      <div className="mt-8 rounded-lg border border-border bg-surface/40 p-5 sm:p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-base font-semibold tracking-tight">
            Talk to Jarvis
          </h2>
          <span className="font-mono text-xs uppercase tracking-wider text-muted">
            WhatsApp
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          My agent handles the intake — context, scope, scheduling — then hands
          off to me.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Open WhatsApp
            <span aria-hidden>&rarr;</span>
          </a>
          <a
            href={BOOK_CALL_URL}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
          >
            Book a call
          </a>
        </div>
      </div>

      <ul className="mt-10 space-y-3">
        {links.map(({ label, href, display }) => (
          <li
            key={label}
            className="flex items-baseline gap-4 border-b border-border pb-3"
          >
            <span className="w-20 shrink-0 font-mono text-xs uppercase tracking-wider text-muted">
              {label}
            </span>
            <a
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                href.startsWith("mailto:") ? undefined : "noopener noreferrer"
              }
              className="text-sm text-foreground transition-colors hover:text-accent"
            >
              {display}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
