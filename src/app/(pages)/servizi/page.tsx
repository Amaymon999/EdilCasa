import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Services from "@/components/Services";
import { Button } from "@/components/Button";

export default function ServiziPage() {
  return (
    <>
      <Section className="pt-28 sm:pt-32">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <div className="text-xs text-muted">Servizi</div>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Tutto quello che serve per una ristrutturazione fatta bene
              </h1>
              <p className="mt-4 text-sm text-muted">
                Un percorso ordinato: sopralluogo, proposta materiali, pianificazione, esecuzione e consegna. Con due showroom per scegliere senza dubbi.
              </p>
              <div className="mt-7 flex gap-3">
                <Button href="/contatti">Richiedi preventivo</Button>
                <Button href="/progetti" variant="outline">Vedi progetti</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Services compact />

      <Section>
        <Container>
          <Reveal>
            <div className="rounded-[36px] border border-white/10 bg-white/5 p-7 sm:p-10">
              <div className="text-xs text-muted">Marketing angle</div>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Perché “chiavi in mano” qui significa davvero controllo
              </h2>
              <p className="mt-3 max-w-3xl text-sm text-muted">
                Non è solo fare i lavori: è gestire decisioni, materiali e tempi. Il nostro metodo riduce errori classici (scelte incoerenti, ritardi, costi extra) perché parte da un piano e da checkpoint.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
