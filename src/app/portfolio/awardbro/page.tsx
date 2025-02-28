import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AwardBro - Portfolio | Martin Bartolo",
  description:
    "AwardBro - A real-time interactive award show platform built with Next.js and tRPC.",
};

export default function AwardBroPage() {
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
          src="https://drive.google.com/uc?export=view&id=1BsS2Wj-dXBzvGk0p2S07ykWiqwkhoD-N"
          alt="AwardBro Logo"
          width={48}
          height={48}
          className="mb-4"
        />
        <h1 className="mb-3 font-lexend text-4xl font-medium text-foreground">
          <span className="underline decoration-primary decoration-from-font underline-offset-8">
            AwardBro
          </span>
        </h1>
        <div className="flex flex-wrap gap-4">
          <Link
            href="https://awardbro.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary"
          >
            <span>Visit Website</span>
            <ExternalLink className="size-4" />
          </Link>
          <Link
            href="https://github.com/martinbartolo/awardbro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary"
          >
            <span>View Source</span>
            <ExternalLink className="size-4" />
          </Link>
        </div>
      </div>

      <div className="prose prose-invert max-w-none space-y-6">
        <p>
          AwardBro is a real-time interactive award show platform I developed to
          streamline the process of hosting engaging award ceremonies with my
          friends. Features include instant voting, live result tracking, and a
          dynamic presentation mode for winner reveals.
        </p>

        <div className="not-prose my-12 grid gap-8">
          <figure className="space-y-2">
            <Image
              src="https://drive.google.com/uc?export=view&id=160zKeFqTUHbc9S1iQ8NvDW4buOFrmBC6"
              alt="AwardBro Landing Page"
              width={800}
              height={450}
              className="rounded-xl border border-border"
            />
            <figcaption className="text-center text-sm text-foreground/60">
              The main landing page
            </figcaption>
          </figure>

          <figure className="space-y-2">
            <Image
              src="https://drive.google.com/uc?export=view&id=1UpfYfHuM2vnETy4a280h9AWyvdQAIGxR"
              alt="AwardBro Dashboard"
              width={800}
              height={450}
              className="rounded-xl border border-border"
            />
            <figcaption className="text-center text-sm text-foreground/60">
              The management dashboard where hosts can create and customize
              their award shows
            </figcaption>
          </figure>

          <figure className="space-y-2">
            <Image
              src="https://drive.google.com/uc?export=view&id=1jryy74hgll-Vul1bNQWgKB-TS6pqeQxr"
              alt="AwardBro Voting Interface"
              width={800}
              height={450}
              className="rounded-xl border border-border"
            />
            <figcaption className="text-center text-sm text-foreground/60">
              The voting interface where users can vote for their favorite
              nominees
            </figcaption>
          </figure>

          <figure className="space-y-2">
            <Image
              src="https://drive.google.com/uc?export=view&id=1deiClrpWvB9z9QfNjIxCQtvkNe0lLJWl"
              alt="AwardBro Results Page"
              width={800}
              height={450}
              className="rounded-xl border border-border"
            />
            <figcaption className="text-center text-sm text-foreground/60">
              The results page, showing the winners and runner-ups
            </figcaption>
          </figure>
        </div>
      </div>
    </main>
  );
}
