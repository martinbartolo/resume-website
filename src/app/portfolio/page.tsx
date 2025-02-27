import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { PortfolioCard } from "./components/PortfolioCard";

export const metadata: Metadata = {
  title: "Portfolio - Martin Bartolo",
  description:
    "Explore Martin Bartolo's professional work experience and personal projects.",
};

export default function PortfolioPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/"
        className="group mb-12 inline-flex items-center gap-2 text-foreground/60 hover:text-primary"
      >
        <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1" />
        <span>Back to Home</span>
      </Link>

      <h1 className="mb-12 font-lexend text-[clamp(2rem,5.5vw,6.5rem)] font-medium text-foreground">
        <span className="underline decoration-primary decoration-from-font underline-offset-8">
          Portfolio
        </span>
      </h1>

      <section className="mb-16">
        <h2 className="mb-6 font-medium tracking-wide text-foreground/90 sm:text-lg md:text-xl">
          Professional Experience
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <PortfolioCard
            title="Trovr"
            href="/portfolio/trovr"
            logoPath="https://drive.google.com/uc?export=view&id=1ra1gbU8Ay5owV2MwSOlJYC3S2k-S9V8t"
          />
        </div>
      </section>

      <section>
        <h2 className="mb-6 font-medium tracking-wide text-foreground/90 sm:text-lg md:text-xl">
          Personal Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <PortfolioCard
            title="Bopkit"
            href="/portfolio/bopkit"
            logoPath="https://drive.google.com/uc?export=view&id=1yw-OWfk8keLh55HZuOi7Eo1MsCjAtH2-"
          />
          <PortfolioCard
            title="AwardBro"
            href="/portfolio/awardbro"
            imagePath="https://drive.google.com/uc?export=view&id=1MdxoiaKOZrv0xPUyjGn3zXXG7g-5cPg5"
            logoPath="https://drive.google.com/uc?export=view&id=1BsS2Wj-dXBzvGk0p2S07ykWiqwkhoD-N"
          />
        </div>
      </section>
    </main>
  );
}
