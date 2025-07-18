import { Link } from "./components/Link";

export default function Home() {
  return (
    <article className="flex justify-center p-8 py-12 md:p-16">
      <main className="w-full max-w-2xl space-y-6">
        <header className="space-y-1">
          <h1 className="font-medium">Jeffrey Yao</h1>
          <time className="text-neutral-500/75">Updated July 18, 2025</time>
        </header>

        <section className="space-y-4">
          <p>I'm 23 and based in Sydney, Australia.</p>
          <p>
            I'm the technical co-founder of a stealth AI start-up. Before that,
            I shaped products at{" "}
            <Link href="https://relevanceai.com">Relevance AI</Link> from seed
            to Series A. I built infrastructure, internal tooling and apps at{" "}
            <Link href="https://everlab.com.au">Everlab</Link> as a founding
            engineer, then worked at{" "}
            <Link href="https://www.tiktok.com/about">TikTok</Link>.
          </p>
          <p>
            I enjoy building at the intersection of engineering, product and
            design to create magical experiences.
          </p>
          <p>
            Aside from work, I love sunrises/sunsets, good food, long walks,
            time spent with loved ones, and most importantly — time to learn,
            think, create and do.
          </p>
          <p>
            You can reach me at{" "}
            <Link href="https://x.com/jeffdyao">@jeffreydyao</Link>,{" "}
            <Link showIcon={false} href="mailto:jeffrey@yao.dev">
              jeffrey@yao.dev
            </Link>{" "}
            or on{" "}
            <Link href="https://www.linkedin.com/in/jeffreydyao/">
              LinkedIn
            </Link>
            .
          </p>
        </section>
      </main>
    </article>
  );
}
