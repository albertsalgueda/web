import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Albert Salgueda",
};

export default function Writing() {
  return (
    <section className="animate-in pt-16">
      <h1 className="text-3xl font-bold tracking-tight">Writing</h1>
      <p className="mt-4 text-muted">
        {/* TODO: Add blog posts as MDX files in src/content/ */}
        Nothing here yet. Check back soon.
      </p>
    </section>
  );
}
