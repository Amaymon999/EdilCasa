import { site } from "@/lib/content";
import Container from "./Container";
import Section from "./Section";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

function Icon({ name }: { name: string }) {
  const I = (Icons as any)[name] as any;
  return I ? <I size={18} className="text-lime" /> : <Icons.Sparkles size={18} className="text-lime" />;
}

export default function Services({ compact = false }: { compact?: boolean }) {
  return (
    <Section id="servizi" className={cn(compact ? "py-10 sm:py-14" : "")}>
      <Container>
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs text-muted">Cosa facciamo</div>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">Servizi pensati per ridurre caos e ritardi</h2>
              <p className="mt-3 max-w-2xl text-sm text-muted">
                Dalla scelta materiali in showroom alla consegna: un percorso ordinato che ti fa risparmiare tempo, errori e stress.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 0.04}>
              <div className="group relative h-full rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-soft transition-transform duration-200 hover:-translate-y-1">
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/0 transition-colors" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/20">
                      <Icon name={s.icon} />
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-muted">
                      {s.tag}
                    </div>
                  </div>
                  <div className="mt-4 text-base font-semibold">{s.title}</div>
                  <p className="mt-2 text-sm text-muted">{s.desc}</p>
                  <div className="mt-4 h-px w-full bg-white/10" />
                  <div className="mt-3 text-xs text-muted">Scopri di più →</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
