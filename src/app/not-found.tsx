import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found - Martin Bartolo",
  description: "The page you're looking for couldn't be found.",
};

export default function NotFound() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-8">
      <div className="text-center">
        <h1 className="mb-6 font-lexend text-[clamp(4rem,10vw,12rem)] font-medium text-primary">
          404
        </h1>
        <h2 className="mb-8 text-2xl font-medium text-foreground">
          Page Not Found
        </h2>
        <p className="mb-12 text-foreground/60">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-foreground/60 hover:text-primary"
        >
          <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>
      </div>
    </main>
  );
}
