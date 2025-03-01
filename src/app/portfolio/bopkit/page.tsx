import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bopkit - Portfolio | Martin Bartolo",
  description:
    "Bopkit - A web e-commerce platform for independent music creators.",
};

export default function BopkitPage() {
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
          src="https://7m9tv54vnq.ufs.sh/f/Ez5bUhy05l3xD1s6P8SSGurQl7nhmEBjakKJ2I53UeMqWZw6"
          alt="Coming Soon"
          width={48}
          height={48}
          className="mb-4"
        />
        <h1 className="mb-2 font-lexend text-4xl font-medium text-foreground">
          <span className="underline decoration-primary decoration-from-font underline-offset-4">
            Bopkit
          </span>
        </h1>
      </div>

      <div className="prose prose-invert max-w-none space-y-6">
        <p>
          Bopkit is a modern e-commerce platform designed specifically for
          independent music creators to sell their digital products. The
          platform enables artists to showcase and sell beats and other
          music-related digital content directly to their audience.
        </p>

        <p>
          Built with Next.js, Prisma, and Stripe integration, the platform
          features customisable storefronts, secure payment processing, and
          instant digital delivery. Currently under active development.
        </p>

        <div className="not-prose my-12 grid gap-8">
          <div className="rounded-xl border border-border p-8 text-center">
            <p className="text-lg text-foreground/60">
              Project screenshots and additional details coming soon
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
