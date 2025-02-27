"use client";

import { useEffect } from "react";
import { initializeRandomColor } from "~/utils/colors";

export function ColorProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize random color once at app start
    initializeRandomColor();
  }, []);

  return <>{children}</>;
}
