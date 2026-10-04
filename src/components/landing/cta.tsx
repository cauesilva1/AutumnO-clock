"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type CtaProps = {
  href: string;
  children: ReactNode;
  className?: string;
  size?: "md" | "lg";
};

const SIZES = {
  md: "px-8 py-3 text-base",
  lg: "px-10 py-4 text-xl max-md:px-8 max-md:py-3 max-md:text-base",
};

export function Cta({ href, children, className = "", size = "md" }: CtaProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
      className={`inline-flex items-center justify-center rounded-[20px] bg-orange leading-[1.5] text-white hover:shadow-[0_10px_24px_rgba(254,127,46,0.35)] ${SIZES[size]} ${className}`}
    >
      {children}
    </motion.a>
  );
}
