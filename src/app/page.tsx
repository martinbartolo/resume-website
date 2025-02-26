"use client";

import { AnimatedTitle } from "./components/AnimatedTitle";
import { SocialLink } from "./components/SocialLink";
import { NavButton } from "./components/NavButton";

export default function Home() {
  return (
    <main className="grid min-h-dvh place-content-center px-4 sm:px-8">
      <div className="w-full space-y-12 text-center sm:space-y-16 md:space-y-20">
        <AnimatedTitle />
        <div className="flex w-full flex-col items-center justify-center space-y-3 sm:space-y-4">
          <NavButton href="/portfolio">Portfolio</NavButton>
          <NavButton href="/music">Music</NavButton>
        </div>
        <div className="flex items-center justify-center gap-6 sm:gap-8">
          <SocialLink href="https://github.com/martinbartolo" label="GitHub" />
          <SocialLink
            href="https://www.linkedin.com/in/martinbartolo"
            label="LinkedIn"
          />
        </div>
      </div>
    </main>
  );
}
