import Container from "./Container";
import Section from "./Section";
import Reveal from "./Reveal";
import { Button } from "./Button";

export default function CTA() {
  return (
    <Section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-7 shadow-glow sm:p-10">
            <div className="absolute -inset-28 bg-lime/10 blur-3xl opacity-70" />
            <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="text-xs text-muted">Call to action</div>
                <h3 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Vuoi ristrutturare senza stress?
                </h3>
                <p className="mt-3 max-w-2xl text-sm text-muted">
                  Ti facciamo domande giuste, ti proponiamo 2 opzioni chiare e pianifichiamo il cantiere. Niente preventivi “a sensazione”.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contatti">Richiedi preventivo</Button>
                  <Button href="/servizi" variant="outline">Scopri i servizi</Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-[28px] border border-white/10 bg-black/20 p-5">
                  <div className="text-sm font-semibold">Mini‑form (demo)</div>
                  <p className="mt-1 text-xs text-muted">Compila 3 campi e ti richiamiamo.</p>
                  <form className="mt-4 grid gap-3">
                    <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm" placeholder="Nome e cognome" />
                    <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm" placeholder="Telefono" />
                    <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm" placeholder="Città" />
                    <button type="button" className="rounded-2xl bg-lime px-4 py-3 text-sm font-semibold text-bg hover:brightness-110">
                      Invia richiesta
                    </button>
                    <div className="text-[11px] text-muted">
                      *Demo. In produzione collega a un endpoint / CRM e aggiungi privacy policy.
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
