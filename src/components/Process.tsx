import Container from "./Container";
import Section from "./Section";
import Reveal from "./Reveal";
import { site } from "@/lib/content";

export default function Process() {
  return (
    <Section>
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <div className="text-xs text-muted">Metodo</div>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Un processo che ti fa dormire tranquillo
              </h2>
              <p className="mt-3 text-sm text-muted max-w-xl">
                Il marketing migliore è un’esperienza ordinata: meno decisioni confuse, più certezze e un risultato finale coerente.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-3">
                {site.process.map((step, i) => (
                  <Reveal key={step.title} delay={i * 0.05}>
                    <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                      <div className="flex items-start gap-4">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-white/10 bg-black/20 text-sm font-extrabold text-lime">
                          {i + 1}
                        </div>
                        <div>
                          <div className="text-base font-semibold">{step.title}</div>
                          <div className="mt-1 text-sm text-muted">{step.desc}</div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
