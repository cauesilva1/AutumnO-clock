"use client";

import { motion } from "framer-motion";
import { Cta } from "./cta";
import { LogoMark } from "./logo";

const LINKS = [
  { href: "#inicio", label: "Home" },
  { href: "#sobre", label: "Sobre mim" },
  { href: "#metodologia", label: "Metodologia e Materiais" },
  { href: "#planos", label: "Planos" },
  { href: "#depoimentos", label: "Depoimentos" },
];

type HeaderProps = {
  menuOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export function Header({ menuOpen, onOpen, onClose }: HeaderProps) {
  if (menuOpen) {
    return (
      <div className="flex justify-center py-4">
        <a href="#inicio" aria-label="Autumn O'Clock, início" onClick={onClose}>
          <LogoMark variant="header" />
        </a>
      </div>
    );
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-[140px] items-center justify-between rounded-[40px] bg-ink px-8 shadow-[0_0_20px_rgba(0,0,0,0.15)] max-md:h-auto max-md:rounded-[28px] max-md:px-5 max-md:py-4"
    >
      <a
        href="#inicio"
        aria-label="Autumn O'Clock, início"
        className="flex w-[184px] shrink-0 justify-center max-md:w-auto"
      >
        <LogoMark variant="header" />
      </a>
      <nav className="flex items-center max-md:hidden" aria-label="Seções">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-3 py-3 text-base leading-[1.5] whitespace-nowrap text-white transition-colors hover:text-orange"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="max-md:hidden">
        <Cta href="#contato">Fale comigo</Cta>
      </div>
      <button
        type="button"
        className="hidden size-11 items-center justify-center max-md:inline-flex"
        aria-label="Abrir menu"
        aria-expanded={false}
        onClick={onOpen}
      >
        <span className="flex w-7 flex-col gap-1.5" aria-hidden="true">
          <span className="h-0.5 w-full rounded-full bg-white" />
          <span className="h-0.5 w-full rounded-full bg-white" />
          <span className="h-0.5 w-full rounded-full bg-white" />
        </span>
      </button>
    </motion.header>
  );
}

export function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.nav
      aria-label="Seções"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-8 px-6 pt-8 pb-6 text-center text-white"
    >
      {LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onClose}
          className="text-lg leading-[1.5] text-white"
        >
          {link.label}
        </a>
      ))}
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar menu"
        className="mt-2 flex size-14 items-center justify-center rounded-[18px] bg-orange text-white"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
          <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      </button>
    </motion.nav>
  );
}
