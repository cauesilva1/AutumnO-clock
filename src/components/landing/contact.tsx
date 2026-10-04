"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "./reveal";

const FIELDS = [
  { name: "nome", label: "Nome", placeholder: "Digite seu nome aqui", type: "text", required: true },
  { name: "telefone", label: "Telefone", placeholder: "Digite seu telefone aqui", type: "tel", required: true },
] as const;

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="contato" className="px-16 py-16 max-md:px-4 max-md:py-12">
      <div className="flex items-end justify-center gap-6 max-md:flex-col max-md:items-stretch">
        <div className="flex w-[533px] shrink-0 flex-col gap-6 max-md:w-full">
          <Reveal className="rounded-[32px] border-2 border-orange bg-cream p-6 text-orange">
            <h2 className="text-5xl leading-normal font-black max-md:text-[40px] max-md:leading-[1.05]">Fale comigo</h2>
            <p className="mt-3 text-2xl leading-normal">
              <strong className="font-black">A decisão </strong>
              que transforma o seu amanhã, <strong className="font-black">começa hoje!</strong>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src="/contact/christian.png"
              alt="Christian acenando"
              width={533}
              height={610}
              className="h-[610px] w-full rounded-[125px] object-cover object-top max-md:h-[420px] max-md:rounded-[64px]"
            />
          </Reveal>
        </div>

        <Reveal delay={0.12} className="w-[898px] shrink-0 max-md:w-full">
          <form
            onSubmit={onSubmit}
            className="flex h-full flex-col gap-6 rounded-[50px] bg-ink p-8"
          >
            <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
              {FIELDS.map((field) => (
                <label key={field.name} className="flex flex-col gap-3">
                  <span className="text-2xl font-black text-orange max-md:text-lg">{field.label}</span>
                  <input
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="h-[88px] rounded-[32px] border-2 border-orange bg-cream px-6 text-2xl text-orange outline-none placeholder:text-orange focus:shadow-[0_0_0_4px_rgba(254,127,46,0.25)] max-md:h-16 max-md:px-4 max-md:text-base"
                  />
                </label>
              ))}
            </div>
            <label className="flex flex-col gap-3">
              <span className="text-2xl font-black text-orange max-md:text-lg">Email (opcional)</span>
              <input
                name="email"
                type="email"
                placeholder="Digite seu email aqui"
                className="h-[88px] rounded-[32px] border-2 border-orange bg-cream px-6 text-2xl text-orange outline-none placeholder:text-orange focus:shadow-[0_0_0_4px_rgba(254,127,46,0.25)] max-md:h-16 max-md:px-4 max-md:text-base"
              />
            </label>
            <label className="flex min-h-[280px] flex-1 flex-col gap-3">
              <span className="text-2xl font-black text-orange max-md:text-lg">Mensagem</span>
              <textarea
                name="mensagem"
                required
                placeholder="Digite sua mensagem aqui"
                className="min-h-[220px] flex-1 resize-none rounded-[32px] border-2 border-orange bg-cream px-6 py-6 text-2xl text-orange outline-none placeholder:text-orange focus:shadow-[0_0_0_4px_rgba(254,127,46,0.25)] max-md:min-h-[140px] max-md:px-4 max-md:py-4 max-md:text-base"
              />
            </label>
            <button
              type="submit"
              className="self-end rounded-[20px] bg-orange px-8 py-3 text-base text-white transition-transform hover:-translate-y-0.5"
            >
              {sent ? "Mensagem pronta" : "Enviar"}
            </button>
            {sent ? (
              <p className="text-base text-cream" role="status">
                Recebi seus dados nesta página. O envio para o Christian entra na próxima etapa.
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
