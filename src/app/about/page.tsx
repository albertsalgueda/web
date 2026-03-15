import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Albert Salgueda",
};

export default function About() {
  return (
    <section className="animate-in pt-16">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>

      {/* TODO: Add photo */}

      <div className="mt-8 space-y-4 leading-relaxed text-muted">
        <p>
          I&apos;m Albert, 26, from{" "}
          <span className="text-foreground">Ripoll, Catalonia</span>. I&apos;ve
          been building things since I was a teenager — starting with hardware
          and software at my family&apos;s industrial business, then moving into
          ecommerce, and eventually teaching computer science.
        </p>
        <p>
          During COVID, I built{" "}
          <span className="text-foreground">eRipoll</span>, a local commerce
          platform that got 55% of local businesses on board. That experience —
          shipping fast, solving real problems for real people — shaped
          everything that came after.
        </p>
        <p>
          I studied at{" "}
          <span className="text-foreground">Boston College</span> (ML/AI,
          Distributed Systems) and completed a Master&apos;s in{" "}
          <span className="text-foreground">
            Neuroscience (Brain & Cognition)
          </span>{" "}
          at UPF Barcelona, researching how AI and cognition intersect. This
          gave me a different lens on how to think about intelligent systems.
        </p>
        <p>
          In 2023, I co-founded{" "}
          <span className="text-foreground">Altan</span> — a multi-agent AI
          platform. We landed enterprise customers like
          ElevenLabs and Glovo, raised ~$2.55M, and built something I&apos;m
          proud of. Now I&apos;m in San Francisco, looking for my next
          thing — likely as a Forward Deployed or Founding Engineer at a
          frontier AI company.
        </p>
      </div>
    </section>
  );
}
