"use client";

import { useLayoutEffect } from "react";

const DESIGN_WIDTH = 1728;

export function FitScale() {
  useLayoutEffect(() => {
    const apply = () => {
      const width = document.documentElement.clientWidth;
      const compact = window.matchMedia("(max-width: 767px)").matches;
      const scale = compact ? 1 : width / DESIGN_WIDTH;
      document.documentElement.style.setProperty("--fit", String(scale));
    };

    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  return null;
}
