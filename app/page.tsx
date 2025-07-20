import { Link } from "./components/Link";

export default function Home() {
  return (
    <article className="flex justify-center p-8 py-12 md:p-16">
      <main className="w-full max-w-2xl space-y-6">
        <header className="space-y-1">
          <h1 className="font-medium">Megan Fan</h1>
          <time className="text-neutral-500/75">Updated July 20, 2025</time>
        </header>

        <section className="space-y-4">
          <p>I'm 24, based in Sydney 🇦🇺 but grew up in Auckland, New Zealand 🥝.</p>
          <p>
            I'm the product co-founder of a stealth AI start-up. Before that,
            I worked in Strategy and Operations at{" "}
            <Link href="https://www.uber.com">Uber</Link>, and in Product at{" "}
            <Link href="https://thebrightapp.xyz">Bright</Link>, a health tech startup.
          </p>
          <p>
            I enjoy building magical user experiences and launching products from 0 to 1! 
          </p>
          <p>
            
          </p>
          <p>
            You can reach me on{" "}
            <Link href="https://www.linkedin.com/in/meganfan-au/">
              LinkedIn
            </Link>
            .
          </p>
        </section>
      </main>
    </article>
  );
}
