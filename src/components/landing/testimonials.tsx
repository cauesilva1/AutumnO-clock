import { Divider } from "./divider";
import { Reveal } from "./reveal";

const NOTES = [
  {
    title: "Cada passo conta",
    text: "Cada conquista começa com uma aula. Cada resultado, com a decisão de começar.",
    width: "max-w-[364px]",
  },
  {
    title: "Além do idioma",
    text: "Histórias de quem transformou o inglês em uma ferramenta para alcançar seus objetivos.",
    width: "max-w-[375px]",
  },
];

const TESTIMONIALS = Array.from({ length: 6 }, (_, index) => ({
  id: index,
  name: "Aluno",
  quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
}));

export function Testimonials() {
  return (
    <section id="depoimentos" className="rounded-[80px] bg-ink px-16 py-16 shadow-[0_0_20px_rgba(0,0,0,0.15)] max-md:mx-3 max-md:rounded-[40px] max-md:px-4 max-md:py-10">
        <Reveal className="mb-20 flex items-center justify-between max-md:mb-8 max-md:flex-col max-md:items-start max-md:gap-6">
          <h2 className="leading-[0.8] font-black whitespace-nowrap max-md:whitespace-normal">
            <span className="block text-[80px] text-orange max-md:text-[28px]">O que os meus</span>
            <span className="block text-[96px] text-cream max-md:text-[36px]">alunos dizem?</span>
          </h2>
          <div className="flex items-start gap-6 max-md:gap-3">
            {NOTES.map((note, index) => (
              <div key={note.title} className="flex items-center gap-6">
                {index > 0 ? <Divider className="max-md:h-14" /> : null}
                <p className={`${note.width} leading-[1.5] max-md:max-w-none max-md:min-w-0 max-md:flex-1`}>
                  <span className="block text-2xl font-black text-cream max-md:text-sm">{note.title}</span>
                  <span className="text-base text-orange max-md:text-xs">{note.text}</span>
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 0.08} className="flex gap-2.5">
              <div className="relative size-[150px] shrink-0 overflow-hidden rounded-[32px] border-2 border-orange max-md:size-[96px] max-md:rounded-[24px]">
                <img
                  src="/testimonials/aluno.png"
                  alt=""
                  width={150}
                  height={186}
                  className="absolute top-[0.6%] left-0 h-[124%] w-full max-w-none"
                />
              </div>
              <div className="flex min-h-[150px] flex-1 flex-col gap-3 rounded-[32px] border-2 border-orange bg-cream p-6 text-2xl leading-normal text-orange max-md:min-h-[96px] max-md:gap-1 max-md:rounded-[24px] max-md:p-4 max-md:text-base">
                <p className="font-black">{item.name}</p>
                <p>{item.quote}</p>
              </div>
            </Reveal>
          ))}
        </div>
    </section>
  );
}
