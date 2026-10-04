import type { CSSProperties } from "react";
import { Cta } from "./cta";
import { Divider } from "./divider";
import { Reveal } from "./reveal";

const FEATURES = [
  {
    title: "Metodologia 360°",
    text: "Aqui praticamos os quatro pilares do idioma: Speaking, Reading, Listening e Writing",
    width: "w-[364px]",
  },
  {
    title: "Conteúdo personalizado",
    text: "O conteúdo das aulas seguem os seus objetivos, nível e tópicos de interesse.",
    width: "w-[322px]",
  },
  {
    title: "Habilidades comunicativas",
    text: "Os alunos desde a primeira aula já praticam a fala e comunicação na vida real.",
    width: "w-[364px]",
  },
];

const PLANS = [
  {
    name: "sunset",
    art: { src: "/plans/sunset.svg", width: 296, height: 145 },
    freq: { src: "/plans/freq-sunset.svg", width: 184, height: 97 },
    box: "items-start",
    text: "Experimente o método sem compromisso",
  },
  {
    name: "early",
    art: { src: "/plans/early.svg", width: 319, height: 145 },
    freq: { src: "/plans/freq-early.svg", width: 204, height: 95 },
    box: "items-center justify-center",
    text: "Comece sua jornada com equilíbrio e constância.",
  },
  {
    name: "mid",
    art: { src: "/plans/mid.svg", width: 320, height: 143 },
    freq: { src: "/plans/freq-mid.svg", width: 184, height: 95 },
    box: "items-start",
    text: "Aprofunde sua prática e amplie seus resultados.",
  },
  {
    name: "late",
    art: { src: "/plans/late.svg", width: 321, height: 143 },
    freq: { src: "/plans/freq-late.svg", width: 193, height: 95 },
    box: "items-start",
    text: "Evolua com mais intensidade e regularidade.",
  },
  {
    name: "full",
    art: { src: "/plans/full.svg", width: 289, height: 143 },
    freq: { src: "/plans/freq-full.svg", width: 195, height: 95 },
    box: "items-start",
    text: "Alcance seu potencial com uma experiência completa.",
  },
];

export function Plans() {
  return (
    <section id="planos" className="px-16 pt-16 pb-8 max-md:px-4 max-md:pt-12">
      <div className="flex flex-col items-center gap-20 max-md:gap-10">
        <Reveal className="flex w-full items-center justify-between max-md:flex-col max-md:items-start max-md:gap-8">
          <h2 className="leading-[0.8] font-black whitespace-nowrap max-md:whitespace-normal">
            <span className="block text-[80px] text-orange max-md:text-[40px]">Sobre</span>
            <span className="block text-[96px] text-ink max-md:text-[52px]">Planos</span>
          </h2>
          <div className="flex items-center gap-6 max-md:grid max-md:w-full max-md:grid-cols-2 max-md:gap-x-4 max-md:gap-y-5">
            {FEATURES.map((feature, index) => (
              <div key={feature.title} className={`flex items-center gap-6 ${index === 2 ? "max-md:col-span-2" : ""}`}>
                {index > 0 ? <Divider className="max-md:hidden" /> : null}
                <p className={`${feature.width} leading-[1.5] max-md:w-full`}>
                  <span className="block text-2xl font-black text-ink max-md:text-base">{feature.title}</span>
                  <span className="text-base text-orange max-md:text-sm">{feature.text}</span>
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="flex items-stretch justify-center gap-3 max-md:w-full max-md:flex-col max-md:items-center">
          {PLANS.map((plan, index) => (
            <Reveal
              key={plan.name}
              delay={index * 0.05}
              className="flex w-(--card) max-w-full flex-col gap-2.5 self-stretch max-md:w-full max-md:max-w-[420px]"
              style={{ "--card": `${plan.art.width}px` } as CSSProperties}
            >
              <img
                src={plan.art.src}
                alt=""
                width={plan.art.width}
                height={plan.art.height}
                className="max-md:h-auto max-md:w-full"
              />
              <div
                className={`flex w-full rounded-[32px] border-2 border-orange bg-white p-6 ${plan.box}`}
                style={{ height: plan.art.height }}
              >
                <img src={plan.freq.src} alt="" width={plan.freq.width} height={plan.freq.height} />
              </div>
              <div className="flex flex-1 items-center justify-center rounded-[32px] border-2 border-orange bg-white p-6 text-center text-2xl leading-normal text-orange">
                <p>{plan.text}</p>
              </div>
              <Cta href="#contato" className="w-full">
                Saiba mais
              </Cta>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
