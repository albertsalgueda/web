import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Albert Salgueda",
  description:
    "Albert Salgueda — engineer building AI agents at Krea, from Ripoll, Catalonia.",
};

export default function About() {
  return (
    <section className="animate-in pt-10 sm:pt-16">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
        About
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        Engineer. Operator. Builder.
      </h1>

      <div className="mt-8 space-y-5 leading-relaxed text-muted">
        <p>
          I&apos;m Albert, from{" "}
          <span className="text-foreground">Ripoll, Catalonia</span>. I&apos;ve
          been building things since I was a teenager — hardware and software at
          my family&apos;s industrial business, then ecommerce, then teaching
          computer science.
        </p>
        <p>
          Today I work at{" "}
          <span className="text-foreground">Krea</span>, building AI agents and
          creative AI products. My focus is agent infrastructure: memory, tools,
          and the unglamorous parts that make agents actually useful in
          production.
        </p>
        <p>
          Before Krea, I co-founded{" "}
          <span className="text-foreground">Altan</span> (2023 – 2026), a
          multi-agent platform with customers like ElevenLabs and Glovo. We
          raised ~$2.55M and learned what it takes to ship agents that hold up
          under real enterprise load.
        </p>
        <p>
          Earlier, I built{" "}
          <span className="text-foreground">eRipoll</span> during COVID — a
          local commerce platform that got 55% of Ripoll&apos;s businesses
          online. That experience — shipping fast, solving real problems for
          real people — shaped everything that came after.
        </p>
        <p>
          I studied at{" "}
          <span className="text-foreground">Boston College</span> (ML/AI,
          distributed systems) and completed a Master&apos;s in{" "}
          <span className="text-foreground">
            Neuroscience (Brain & Cognition)
          </span>{" "}
          at UPF Barcelona, researching how AI and cognition intersect. It gave
          me a different lens on intelligent systems.
        </p>
        <p>
          On the side, I ship{" "}
          <span className="text-foreground">Agent Memory</span> and{" "}
          <span className="text-foreground">Bruixola</span>, and help teams set
          up agents that work.
        </p>
      </div>
    </section>
  );
}
