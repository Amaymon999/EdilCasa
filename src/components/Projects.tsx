"use client";
import Container from "./Container";
import Section from "./Section";
import Reveal from "./Reveal";
import { site, type ProjectCategory } from "@/lib/content";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export default function Projects({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<ProjectCategory | "Tutti">("Tutti");
  const filtered = useMemo(() => {
    if (active === "Tutti") return site.projects;
    return site.projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <Section id="progetti" className={cn(compact ? "py-10 sm:py-14" : "")}>
      <Container>
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-xs text-muted">Risultati</div>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Progetti reali, finiture pulite
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-muted">
                Esempi di interventi (placeholder demo). Ogni lavoro parte da un piano chiaro e da scelte materiali ragionate.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {(["Tutti", ...site.projectCategories] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c as any)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs transition-colors",
                    active === c ? "border-lime/30 bg-lime/10 text-ink" : "border-white/10 bg-white/5 text-muted hover:text-ink"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 0.04}>
              <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-soft">
                <div className="aspect-[4/3] w-full bg-gradient-to-br from-white/10 to-white/0">
                  <div className="h-full w-full opacity-70 [background:radial-gradient(500px_250px_at_60%_20%,rgba(92,255,122,0.18),transparent_60%),radial-gradient(420px_240px_at_0%_80%,rgba(255,255,255,0.10),transparent_60%)]" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-muted">
                      {p.category}
                    </div>
                    <div className="text-[11px] text-muted">
                      {p.city} • {p.year}
                    </div>
                  </div>
                  <div className="mt-3 text-base font-semibold">{p.title}</div>
                  <div className="mt-2 text-sm text-muted">
                    Layout, materiali e posa coordinati — per un risultato coerente, non “a pezzi”.
                  </div>
                  <div className="mt-4 text-xs text-muted">Apri case study →</div>
                </div>

                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <div className="absolute -inset-20 bg-lime/10 blur-3xl" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
