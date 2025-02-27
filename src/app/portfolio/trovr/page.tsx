import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trovr - Portfolio | Martin Bartolo",
  description:
    "My experience as a Software Engineer at Trovr, developing a web application for managing and analyzing large-scale data.",
};

export default function TrovrPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/portfolio"
        className="group mb-12 inline-flex items-center gap-2 text-foreground/60 hover:text-primary"
      >
        <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1" />
        <span>Back to Portfolio</span>
      </Link>

      <div className="mb-8">
        <Image
          src="https://drive.google.com/uc?export=view&id=1ra1gbU8Ay5owV2MwSOlJYC3S2k-S9V8t"
          alt="Trovr Logo"
          width={48}
          height={48}
          className="mb-4"
        />
        <h1 className="mb-2 font-lexend text-4xl font-medium text-foreground">
          <span className="underline decoration-primary decoration-from-font underline-offset-8">
            Trovr
          </span>
        </h1>
        <p className="text-lg text-foreground/60">Frontend Developer</p>
        <p className="text-foreground/60">February 2024 - Present</p>
      </div>

      <div className="prose prose-invert max-w-none space-y-6">
        <p>
          At Trovr, I am the sole frontend developer responsible for three key
          applications: two React Native mobile apps and an internal admin
          dashboard built with Next.js.
        </p>

        <p>
          Working closely with the backend team, I design and implement RESTful
          APIs using OpenAPI specifications, ensuring smooth data flow and
          consistent user experiences across platforms. I&apos;ve also set up
          automated CI/CD pipelines to streamline the deployment process and
          maintain code quality.
        </p>

        <p>
          I&apos;ve established and implemented a comprehensive testing strategy
          using Jest and MSW, ensuring reliable API interactions and component
          behavior across all applications. This includes unit tests for the
          shared component library and integration tests for critical user
          flows.
        </p>

        <p>
          My work involves translating complex design requirements into polished
          user interfaces. I&apos;ve built and maintain a shared component
          library that ensures visual consistency across the mobile and web
          applications while adapting each component to feel native to its
          platform.
        </p>
      </div>
    </main>
  );
}
