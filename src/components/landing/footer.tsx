import { LogoMark } from "./logo";

export function Footer() {
  return (
    <footer className="mx-16 mb-8 max-md:mx-4 max-md:mb-4">
      <div className="flex items-center justify-between rounded-[40px] bg-orange p-8 shadow-[0_0_20px_rgba(0,0,0,0.15)] max-md:flex-col max-md:gap-4 max-md:p-5">
        <a
          href="#inicio"
          aria-label="Autumn O'Clock, voltar ao início"
          className="flex h-[76px] w-[184px] items-center justify-center rounded-[20px] bg-white"
        >
          <LogoMark variant="footer" />
        </a>
        <img
          src="/brand/wordmark.svg"
          alt="The time and season of change"
          width={184}
          height={76}
        />
      </div>
    </footer>
  );
}
