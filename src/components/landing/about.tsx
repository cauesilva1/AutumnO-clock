import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="sobre" className="relative z-10 flex items-start justify-center gap-12 px-16 pt-16 pb-8 max-md:flex-col max-md:items-start max-md:gap-6 max-md:px-6 max-md:pt-10">
      <Reveal className="max-md:hidden">
        <img
          src="/about/christian.png"
          alt="Retrato em meio-tom de Christian"
          width={456}
          height={976}
          className="h-[976px] w-[456px] rounded-[94px] object-cover shadow-[0_0_20px_rgba(0,0,0,0.15)]"
        />
      </Reveal>

      <div className="flex items-center gap-20 self-stretch px-6 max-md:w-full max-md:flex-col max-md:items-start max-md:gap-6 max-md:px-0">
        <Reveal delay={0.08} className="relative h-[720px] w-[390px] shrink-0 max-md:h-auto max-md:w-full">
          <div className="absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)_rotate(-90deg)] text-[120px] leading-[130px] whitespace-nowrap text-ink max-md:static max-md:[transform:none] max-md:text-[48px] max-md:leading-[0.9] max-md:whitespace-normal">
            <p className="font-black">Hello!</p>
            <p className="font-extralight">My name is</p>
            <p className="font-black text-orange">Christian.</p>
          </div>
        </Reveal>

        <Reveal delay={0.16} className="w-[530px] text-2xl leading-[1.5] text-ink max-md:w-full max-md:text-lg">
          <p>
            Meu nome é <strong className="font-bold">Christian</strong> e estudo inglês há mais de uma década. Possuo{" "}
            <strong className="font-bold">certificação emitida pela Universidade de Michigan</strong>, que valida
            oficialmente meu nível de proficiência no idioma.
          </p>
          <p className="h-6" aria-hidden="true" />
          <p>
            Atuo com <strong className="font-bold">aulas particulares</strong> para
            <strong className="font-bold"> todas as idades e objetivos</strong>, desde iniciantes até alunos avançados,
            incluindo{" "}
            <strong className="font-bold">
              reforço escolar, inglês profissional, conversação, viagens e preparação para exames.
            </strong>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
