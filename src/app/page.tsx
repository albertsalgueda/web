export default function Home() {
  return (
    <section className="animate-in pt-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Albert Salgueda
      </h1>
      <p className="mt-4 text-lg text-muted">
        I build, therefore I am.
      </p>
      <p className="mt-6 leading-relaxed text-muted">
        Co-founded{" "}
        <span className="text-foreground">Altan</span>, a multi-agent AI
        platform with enterprise customers like ElevenLabs and Glovo.
        Now exploring what&apos;s next in San Francisco.
      </p>
      <div className="mt-10 flex gap-4">
        <a
          href="/contact"
          className="text-sm text-accent transition-colors hover:text-foreground"
        >
          Get in touch &rarr;
        </a>
        <a
          href="https://linkedin.com/in/albertsalgueda"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
