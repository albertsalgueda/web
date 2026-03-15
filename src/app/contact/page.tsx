import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Albert Salgueda",
};

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
    <section className="animate-in pt-16">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-4 text-muted">
        Best way to reach me is email or LinkedIn.
      </p>
      <ul className="mt-8 space-y-4">
        {links.map(({ label, href, display }) => (
          <li key={label} className="flex items-baseline gap-4">
            <span className="w-20 shrink-0 font-mono text-sm text-muted">
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
