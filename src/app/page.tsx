import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <CTA />
      <FAQ />
    </>
  );
}
