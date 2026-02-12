import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/content";
import ContactForm from "@/components/ContactForm";

export default function ContattiPage() {
  return (
    <>
      <Section className="pt-28 sm:pt-32">
        <Container>
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <div className="text-xs text-muted">Contatti</div>
                <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  Raccontaci il progetto
                </h1>
                <p className="mt-4 text-sm text-muted">
                  Compila il form e ti richiamiamo. Se preferisci, passa in showroom: ti aiutiamo a scegliere materiali e finiture senza stress.
                </p>

                <div className="mt-8 grid gap-3">
                  {site.locations.map((l) => (
                    <div key={l.name} className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                      <div className="text-sm font-semibold">{l.name}</div>
                      <div className="mt-1 text-xs text-muted">{l.address}</div>
                      <div className="mt-3 text-xs text-muted">Tel: {l.phone}</div>
                      <div className="text-xs text-muted">Orari: {l.hours}</div>
                      <div className="mt-2 text-xs text-muted">Email: {l.email}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7">
                <Reveal delay={0.1}>
                  <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-7 shadow-glow">
                    <div className="absolute -inset-28 bg-lime/10 blur-3xl opacity-70" />
                    <div className="relative">
                      <div className="text-sm font-semibold">Richiesta preventivo</div>
                      <p className="mt-1 text-xs text-muted">
                        Risposta rapida. Preventivo chiaro. Piano lavori con checkpoint.
                      </p>
                      <div className="mt-5">
                        <ContactForm />
                      </div>
                    </div>
                  </div>
                </Reveal>

                <div className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-semibold">Mappa (placeholder)</div>
                  <p className="mt-1 text-xs text-muted">
                    In produzione inserisci iframe Google Maps o mappa custom.
                  </p>
                  <div className="mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                    <div className="h-full w-full [background:radial-gradient(500px_250px_at_60%_20%,rgba(92,255,122,0.18),transparent_60%),radial-gradient(420px_240px_at_0%_80%,rgba(255,255,255,0.10),transparent_60%)]" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
