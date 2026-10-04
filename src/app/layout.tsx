import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { FitScale } from "@/components/landing/fit-scale";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Autumn O'Clock | Aulas de inglês",
  description:
    "Há mais de 4 anos provendo um ensino de qualidade para mentes ambiciosas. Aulas 1:1 ou em grupo, presenciais em Cuiabá ou online.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full bg-cream font-sans text-ink">
        <FitScale />
        {children}
      </body>
    </html>
  );
}
