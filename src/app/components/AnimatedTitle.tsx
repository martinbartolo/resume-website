"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const phrases = ["stuff at Trovr", "bopkit.com", "music"] as const;
type Phrase = (typeof phrases)[number];

export function AnimatedTitle() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Animate the title to cycle through phrases
  useEffect(() => {
    if (isHovered) return; // Don't set up interval if hovering

    const interval = setInterval(() => {
      setCurrentIndex(current => (current + 1) % phrases.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered]); // Add isHovered to dependencies

  const renderPhrase = (phrase: Phrase) => {
    if (phrase === "music") {
      return (
        <Link href="/music" className="transition-colors hover:text-primary">
          {phrase}
        </Link>
      );
    }
    return phrase;
  };

  // Ensure we always have a valid phrase by using modulo
  const currentPhrase = phrases[currentIndex % phrases.length];

  return (
    <h1 className="relative font-lexend text-[clamp(2rem,5.5vw,6.5rem)] font-medium text-foreground">
      <LayoutGroup>
        <div className="mx-auto flex flex-col items-center justify-center sm:flex-row">
          <motion.div
            layout
            className="relative text-center whitespace-nowrap sm:text-left"
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <span>Martin is making</span>
          </motion.div>
          <div className="relative sm:ml-[0.3em]">
            <AnimatePresence mode="wait">
              <motion.span
                layout
                key={currentIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="whitespace-nowrap underline decoration-primary decoration-from-font underline-offset-4 sm:underline-offset-8"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {renderPhrase(currentPhrase!)}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </LayoutGroup>
    </h1>
  );
}
