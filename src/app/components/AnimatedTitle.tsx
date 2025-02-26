"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useState, useEffect } from "react";

const phrases = ["stuff at Trovr", "bopkit.com", "music"];

export function AnimatedTitle() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const cyclePhrase = () => {
      timeoutId = setTimeout(() => {
        setCurrentIndex(current => (current + 1) % phrases.length);
        cyclePhrase();
      }, 2500);
    };

    cyclePhrase();
    return () => clearTimeout(timeoutId);
  }, []);

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
                className="whitespace-nowrap text-primary"
              >
                {phrases[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </LayoutGroup>
    </h1>
  );
}
