"use client";
import Container from "./Container";
import { Button } from "./Button";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/content";
import { ArrowRight, Sparkles } from "lucide-react";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-muted">
      <Sparkles size={14} className="text-lime" />
      {children}
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="noise" />

      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-[-140px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-lime/10 blur-3xl"
          animate={reduce ? undefined : { y: [0, 16, 0], opacity: [0.6, 0.85, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute right-[-120px] top-[120px] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl"
          animate={reduce ? undefined : { x: [0, -12, 0], y: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="flex flex-wrap gap-2">
              <Pill>Preventivo chiaro entro 48h</Pill>
              <Pill>Showroom materiali (Crema + Lodi)</Pill>
            </div>

            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Ristruttura con ordine,
              <span className="text-lime"> senza stress</span>.
            </h1>

            <p className="mt-4 max-w-xl text-base text-muted sm:text-lg">
              {site.description} Ti guidiamo nella scelta dei materiali, pianifichiamo il cantiere e ti aggiorniamo con checkpoint reali.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contatti" variant="primary">
                {site.primaryCTA} <ArrowRight size={16} />
              </Button>
              <Button href="/progetti" variant="outline">
                {site.secondaryCTA}
              </Button>
              <div className="text-xs text-muted">
                Tel: <span className="text-ink">{site.phonePrimary}</span> • Email: <span className="text-ink">{site.email}</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
              {site.badges.map((b) => (
                <div key={b} className="glass rounded-3xl px-4 py-3 text-xs text-muted">
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative"
            >
              <div className="absolute -inset-2 rounded-[36px] gradient-ring opacity-60 blur-md" />
              <div className="relative rounded-[36px] border border-white/10 bg-white/5 p-4 shadow-glow">
                <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-black/20 px-4 py-3">
                  <div className="text-sm font-semibold">Piano lavori • Checkpoint</div>
                  <div className="rounded-full bg-lime/15 px-3 py-1 text-xs text-lime">In corso</div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs text-muted">Step 1</div>
                    <div className="mt-1 text-sm font-semibold">Sopralluogo & misure</div>
                    <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                      <div className="h-2 w-[78%] rounded-full bg-lime/70" />
                    </div>
                    <div className="mt-2 text-xs text-muted">Completo</div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs text-muted">Step 2</div>
                    <div className="mt-1 text-sm font-semibold">Proposta materiali</div>
                    <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                      <div className="h-2 w-[55%] rounded-full bg-lime/55" />
                    </div>
                    <div className="mt-2 text-xs text-muted">Selezione</div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:col-span-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-muted">Prossimo checkpoint</div>
                        <div className="mt-1 text-sm font-semibold">Calendario cantiere + tempi</div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-muted">
                        48h
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-3">
                      {["Impianti", "Finiture", "Consegna"].map((x) => (
                        <div key={x} className="rounded-2xl border border-white/10 bg-black/10 px-3 py-2 text-xs text-muted">
                          {x}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-4">
                  <div className="text-xs text-muted">Promessa Edilcasa</div>
                  <div className="mt-1 text-sm font-semibold">
                    Struttura prima dell’estetica. Poi l’estetica diventa semplice.
                  </div>
                  <div className="mt-2 text-xs text-muted">
                    Un progetto chiaro riduce errori, ritardi e costi inutili.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      <div className="mt-14 border-t border-white/10 bg-black/20">
        <Container className="py-8">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {site.stats.map((s) => (
              <div key={s.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-extrabold tracking-tight">{s.value}</div>
                <div className="mt-1 text-xs text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
