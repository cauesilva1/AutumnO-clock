import { Reveal } from "./reveal";

export function Method() {
  return (
    <section id="metodologia" className="rounded-[80px] bg-ink py-16 shadow-[0_0_20px_rgba(0,0,0,0.15)] max-md:mx-3 max-md:rounded-[40px] max-md:py-10">
      <div className="flex flex-col gap-20 px-[88px] max-md:gap-8 max-md:px-4">
        <Reveal className="flex items-center gap-3 max-md:items-end">
          <div className="relative h-[242px] w-16 shrink-0 max-md:h-[120px] max-md:w-10">
            <p className="absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)_rotate(-90deg)] text-[80px] leading-[0.8] font-black whitespace-nowrap max-md:whitespace-normal text-orange max-md:text-[40px]">
              Sobre
            </p>
          </div>
          <h2 className="text-[96px] leading-[0.8] font-black whitespace-nowrap max-md:whitespace-normal text-cream max-md:text-[40px] max-md:whitespace-normal">
            Aulas,
            <br />
            Materiais,
            <br />
            Metodologia.
          </h2>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal className="flex w-full items-stretch max-md:flex-col max-md:overflow-hidden max-md:rounded-[32px]">
            <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-l-[80px] max-md:h-52 max-md:min-h-52 max-md:w-full max-md:flex-none max-md:rounded-none max-md:rounded-t-[32px]">
              <img
                src="/method/aulas.png"
                alt="Mesa de estudo com caderno, folhas de outono e café"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex shrink-0 flex-col gap-2.5 rounded-r-[70px] bg-cream p-8 whitespace-nowrap text-ink shadow-[0_0_10px_rgba(0,0,0,0.15)] max-md:w-full max-md:rounded-none max-md:rounded-b-[32px] max-md:whitespace-normal max-md:shadow-none">
              <h3 className="text-[32px] leading-[0.8] font-black text-orange">Aulas</h3>
              <div className="flex items-start gap-2.5 text-base leading-[1.5] max-md:flex-col">
                <p>
                  As aulas são totalmente personalizadas
                  <br />e <strong className="font-black">definidas de acordo com as</strong>
                  <br />
                  <strong className="font-black">necessidades e metas de cada aluno.</strong>
                  <br />
                  Entre os principais objetivos possíveis
                  <br />
                  estão:
                </p>
                <p className="font-black">
                  • Desenvolvimento de conversação
                  <br />
                  • Inglês para viagens
                  <br />
                  • Inglês profissional (Business English)
                  <br />
                  • Preparação para entrevistas
                  <br />
                  • Preparação para exames (TOEFL,
                  <br />
                  IELTS, concursos)
                  <br />• Reforço escolar
                </p>
                <p>
                  Todos esses objetivos são válidos e
                  <br />
                  podem ser combinados conforme a
                  <br />
                  necessidade do aluno.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex w-full items-stretch max-md:flex-col max-md:overflow-hidden max-md:rounded-[32px]">
            <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-l-[80px] max-md:h-52 max-md:min-h-52 max-md:w-full max-md:flex-none max-md:rounded-none max-md:rounded-t-[32px]">
              <img
                src="/method/material.png"
                alt="Fones, globo e folhas de outono sobre a mesa"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="shrink-0 rounded-r-[80px] bg-cream p-8 shadow-[0_0_10px_rgba(0,0,0,0.15)] max-md:w-full max-md:rounded-none max-md:rounded-b-[32px] max-md:shadow-none">
              <div className="flex flex-col gap-2.5 whitespace-nowrap max-md:whitespace-normal">
                <h3 className="text-[32px] leading-[0.8] font-black text-orange">Material</h3>
                <div className="flex items-start gap-2.5 text-base leading-[1.5] text-ink max-md:flex-col">
                  <p>
                    O material utilizado nas aulas é <strong className="font-black">autoral,</strong>
                    <br />
                    <strong className="font-black">desenvolvido por mim com base em</strong>
                    <br />
                    <strong className="font-black">recursos e diretrizes da própria</strong>
                    <br />
                    <strong className="font-black">Cambridge</strong>, garantindo qualidade,
                    <br />
                    consistência e adaptação às
                    <br />
                    necessidades de cada aluno.
                  </p>
                  <p>
                    • Livro Empower – Cambridge University
                    <br />
                    (opcional)
                    <br />
                    • Materiais autorais baseados na
                    <br />
                    metodologia Cambridge
                    <br />
                    • Exercícios personalizados
                    <br />
                    • Acompanhamento e envio de
                    <br />
                    materiais via WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16} className="flex w-full items-stretch max-md:flex-col max-md:overflow-hidden max-md:rounded-[32px]">
            <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-l-[80px] max-md:h-52 max-md:min-h-52 max-md:w-full max-md:flex-none max-md:rounded-none max-md:rounded-t-[32px]">
              <img
                src="/method/metodologia.png"
                alt="Livros abertos, mapa e lápis sobre a mesa"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="shrink-0 rounded-r-[80px] bg-cream p-8 shadow-[0_0_10px_rgba(0,0,0,0.15)] max-md:w-full max-md:rounded-none max-md:rounded-b-[32px] max-md:shadow-none">
              <div className="flex flex-col gap-2.5 whitespace-nowrap max-md:whitespace-normal">
                <h3 className="text-[32px] leading-[0.8] font-black text-orange">Metodologia</h3>
                <div className="flex items-start gap-2.5 text-base leading-[1.5] text-ink max-md:flex-col">
                  <p>
                    Minha metodologia segue o <strong className="font-black">padrão</strong>
                    <br />
                    <strong className="font-black">Cambridge English, um modelo de</strong>
                    <br />
                    <strong className="font-black">ensino reconhecido</strong>
                    <br />
                    <strong className="font-black">internacionalmente, estudado e</strong>
                    <br />
                    <strong className="font-black">promovido pela Cambridge</strong>
                    <br />
                    <strong className="font-black">University.</strong>{" "}
                  </p>
                  <p>
                    Esse método garante um
                    <br />
                    <strong className="font-black">aprendizado estruturado, progressivo</strong>
                    <br />
                    <strong className="font-black">e focado nas quatro habilidades</strong>
                    <br />
                    essenciais: speaking, listening, reading e
                    <br />
                    writing.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
