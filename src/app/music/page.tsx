import { SoundCloudPlayer } from "./components/SoundCloudPlayer";
import { SocialLink } from "../components/SocialLink";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music - Martin Bartolo",
  description:
    "Listen to Martin Bartolo's latest music productions and sound experiments.",
};

export default function MusicPage() {
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
          Music
        </span>
      </h1>

      <div className="space-y-8">
        <SoundCloudPlayer trackUrl="https://soundcloud.com/prodyesok/2k25samples1" />
        <SoundCloudPlayer trackUrl="https://soundcloud.com/prodyesok/lord-of-the-nothing" />
        <SoundCloudPlayer trackUrl="https://soundcloud.com/prodyesok/october-2023-samples-yesok-dubergg" />
      </div>

      <div className="mt-16 flex gap-6">
        <SocialLink
          href="https://soundcloud.com/prodyesok"
          label="SoundCloud"
        />
        <SocialLink href="https://www.youtube.com/@yesok" label="YouTube" />
      </div>
    </main>
  );
}
