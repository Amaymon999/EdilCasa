"use client";
import Container from "./Container";
import Section from "./Section";
import Reveal from "./Reveal";
import { site } from "@/lib/content";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section>
      <Container>
        <Reveal>
          <div>
            <div className="text-xs text-muted">FAQ</div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Domande frequenti
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              Risposte rapide per capire tempi, processo e cosa aspettarti.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3">
          {site.faqs.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <Reveal key={f.q} delay={idx * 0.03}>
                <button
                  className="w-full rounded-[28px] border border-white/10 bg-white/5 p-5 text-left"
                  onClick={() => setOpen((v) => (v === idx ? null : idx))}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-semibold">{f.q}</div>
                    <ChevronDown size={18} className={cn("transition-transform", isOpen && "rotate-180")} />
                  </div>
                  <div className={cn("grid transition-all", isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr] mt-0")}>
                    <div className="overflow-hidden text-sm text-muted">{f.a}</div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
