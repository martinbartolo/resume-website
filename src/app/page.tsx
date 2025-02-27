"use client";

import { AnimatedTitle } from "./components/AnimatedTitle";
import { SocialLink } from "./components/SocialLink";
import { NavButton } from "./components/NavButton";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col justify-between px-4 py-12 sm:px-8 sm:py-16 md:py-20 lg:py-24">
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          <AnimatedTitle />
          <div className="flex w-full flex-col items-center justify-center space-y-3">
            <NavButton href="/portfolio">Dev Portfolio</NavButton>
            <NavButton href="/music">Music</NavButton>
          </div>
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center gap-6 sm:mt-16 md:mt-20">
        <SocialLink href="https://github.com/martinbartolo" label="GitHub" />
        <SocialLink
          href="https://www.linkedin.com/in/martinbartolo"
          label="LinkedIn"
        />
      </div>
    </main>
  );
}
