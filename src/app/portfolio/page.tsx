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
        <h2 className="mb-6 text-2xl font-medium text-foreground">
          Professional Experience
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <PortfolioCard title="Company Name" href="/portfolio/company-name" />
          {/* Add more professional experience cards here */}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-medium text-foreground">
          Personal Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <PortfolioCard title="Project Name" href="/portfolio/project-name" />
          {/* Add more project cards here */}
        </div>
      </section>
    </main>
  );
}
