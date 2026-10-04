import { About } from "@/components/landing/about";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Method } from "@/components/landing/method";
import { Plans } from "@/components/landing/plans";
import { Testimonials } from "@/components/landing/testimonials";

export default function Home() {
  return (
    <main className="fit-page">
      <Hero />
      <About />
      <Method />
      <Plans />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
