import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Projects from "@/components/Projects";
import { Button } from "@/components/Button";

export default function ProgettiPage() {
  return (
    <>
      <Section className="pt-28 sm:pt-32">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <div className="text-xs text-muted">Progetti</div>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Risultati che parlano da soli
              </h1>
              <p className="mt-4 text-sm text-muted">
                Questa è una demo con placeholder. In produzione puoi caricare foto reali, descrizioni, tempi e budget per ogni case study.
              </p>
              <div className="mt-7 flex gap-3">
                <Button href="/contatti">Richiedi preventivo</Button>
                <Button href="/servizi" variant="outline">Scopri i servizi</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Projects compact />
    </>
  );
}
