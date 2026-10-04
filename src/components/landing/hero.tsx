"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Cta } from "./cta";
import { Divider } from "./divider";
import { Header, MobileMenu } from "./header";

const line = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const close = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", close);
    return () => desktop.removeEventListener("change", close);
  }, []);

  return (
    <section id="inicio" className="relative z-20 min-h-[1118px] max-md:min-h-0">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1118px] rounded-b-[80px] bg-ink shadow-[0_0_20px_rgba(0,0,0,0.15)] max-md:inset-x-3 max-md:top-3 max-md:bottom-0 max-md:h-auto max-md:rounded-[40px]" />

      <div className="relative px-16 pt-8 max-md:px-6 max-md:pt-6 max-md:pb-8">
        <Header menuOpen={menuOpen} onOpen={() => setMenuOpen(true)} onClose={() => setMenuOpen(false)} />

        {menuOpen ? <MobileMenu onClose={() => setMenuOpen(false)} /> : null}

        <div className={`relative mt-6 py-8 max-md:mt-2 max-md:py-2 ${menuOpen ? "max-md:hidden" : ""}`}>
          <motion.div
            className="relative z-10 flex w-[591px] flex-col gap-20 max-md:w-full max-md:gap-8"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
          >
            <motion.h1
              variants={line}
              transition={{ duration: 0.7, ease }}
              className="text-[120px] leading-[79px] font-black whitespace-nowrap text-orange max-md:text-[40px] max-md:leading-[0.86] max-md:whitespace-normal"
            >
              <span className="block font-extralight text-white">It’s the </span>
              <span className="block">
                time <span className="font-extralight text-white">and</span>
              </span>
              <span className="block">
                season <span className="font-extralight text-white">of</span>
              </span>
              <span className="block">change</span>
            </motion.h1>

            <div className="flex flex-col gap-6">
              <motion.p variants={line} transition={{ duration: 0.7, ease }} className="text-[30px] leading-[1.4] text-white max-md:text-2xl max-md:leading-[1.5]">
                Há <strong className="font-black">mais de 4 anos</strong> provendo um{" "}
                <strong className="font-black">ensino de qualidade</strong> para mentes ambiciosas.
              </motion.p>
              <motion.div variants={line} transition={{ duration: 0.7, ease }}>
                <Cta href="#contato" size="lg" className="max-md:w-full">
                  Agende uma aula experimental
                </Cta>
              </motion.div>
              <motion.div variants={line} transition={{ duration: 0.7, ease }} className="flex items-start gap-8 text-white max-md:gap-2">
                <p className="leading-[1.5] whitespace-nowrap max-md:min-w-0 max-md:flex-1 max-md:whitespace-normal max-md:text-xs">
                  <span className="block text-[32px] font-black max-md:text-sm">Aulas 1:1 </span>
                  <span className="text-xl text-orange max-md:text-xs">ou em grupo</span>
                </p>
                <Divider className="max-md:h-12" />
                <p className="text-xl leading-[1.5] whitespace-nowrap max-md:min-w-0 max-md:flex-1 max-md:whitespace-normal max-md:text-xs">
                  <span className="block font-black">Metodologia </span>
                  <span className="block text-orange">baseada nos padrões</span>
                  <span className="block font-black">Cambridge English</span>
                </p>
                <Divider className="max-md:h-12" />
                <p className="text-xl leading-[1.5] max-md:min-w-0 max-md:flex-1 max-md:text-xs">
                  <span className="block font-black">Aulas presenciais</span>
                  <span className="block text-orange">(Cuiabá - MT) ou</span>
                  <span className="block">
                    <span className="font-black">Online</span>.
                  </span>
                </p>
              </motion.div>
            </div>
          </motion.div>

          <div
            className="pointer-events-none absolute top-8 left-[521px] inline-grid [grid-template-columns:max-content] [grid-template-rows:max-content] place-items-start max-md:hidden"
            style={{ transform: "scale(0.84)", transformOrigin: "100% 42%" }}
          >
            <img
              src="/hero/ellipse.png"
              alt=""
              width={1177}
              height={1016}
              className="col-start-1 row-start-1 ml-[85px] h-[1016px] w-[1177px] max-w-none"
            />
            <motion.div
              className="relative col-start-1 row-start-1 mt-[77px] h-[1118px] w-[1239px] overflow-hidden"
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/hero/portrait.png"
                alt="Jovem com livros e folhas de outono"
                className="absolute top-[-23.03%] left-[-16.14%] h-[128.69%] w-[116.12%] max-w-none"
              />
            </motion.div>
            <div className="col-start-1 row-start-1 mt-[18px] ml-[9px] flex h-[1282px] w-[1452px] items-center justify-center">
              <div className="[transform:rotate(-149deg)_scaleY(-1)]">
                <div className="relative h-[748px] w-[1244px] overflow-hidden">
                  <img
                    src="/hero/leaves.png"
                    alt=""
                    className="absolute top-[-24.81%] left-[-0.01%] h-[124.81%] w-[112.65%] max-w-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
