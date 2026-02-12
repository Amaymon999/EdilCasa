"use client";
import Container from "./Container";
import Section from "./Section";
import Reveal from "./Reveal";
import { site } from "@/lib/content";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const list = site.reviews;
  const current = useMemo(() => list[i % list.length], [i, list]);

  return (
    <Section>
      <Container>
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-xs text-muted">Recensioni</div>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Fiducia costruita sul campo
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-muted">
                Chi ristruttura vuole chiarezza, tempi e qualità. È lì che si vince.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="rounded-2xl border border-white/10 bg-white/5 p-2 hover:bg-white/10"
                onClick={() => setI((v) => (v - 1 + list.length) % list.length)}
                aria-label="Precedente"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="rounded-2xl border border-white/10 bg-white/5 p-2 hover:bg-white/10"
                onClick={() => setI((v) => (v + 1) % list.length)}
                aria-label="Successivo"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <Reveal>
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-7 shadow-glow lg:col-span-7">
              <div className="absolute -inset-28 bg-lime/10 blur-3xl opacity-60" />
              <div className="relative">
                <div className="flex items-center gap-1 text-lime">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 text-lg leading-relaxed text-ink">
                  “{current.quote}”
                </p>
                <div className="mt-6">
                  <div className="text-sm font-semibold">{current.name}</div>
                  <div className="text-xs text-muted">{current.role}</div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 lg:col-span-5">
            {site.reviews.slice(0, 3).map((r, idx) => (
              <Reveal key={r.name} delay={idx * 0.05}>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted">{r.role}</div>
                  <div className="mt-2 text-sm text-muted line-clamp-3">“{r.quote}”</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
