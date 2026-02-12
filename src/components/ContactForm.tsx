"use client";
import { useState } from "react";
import { site } from "@/lib/content";

type FormState = "idle" | "sending" | "success";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    await new Promise((r) => setTimeout(r, 650));
    setState("success");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input required className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm" placeholder="Nome e cognome" />
        <input required className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm" placeholder="Telefono" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input required type="email" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm" placeholder="Email" />
        <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm" placeholder="Città" />
      </div>
      <select className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
        <option>Sede preferita</option>
        {site.locations.map((l) => (
          <option key={l.name}>{l.name}</option>
        ))}
      </select>
      <textarea className="min-h-[120px] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm" placeholder="Descrivi il progetto (bagno, casa, pavimenti, tempi)…" />

      <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-muted">
        <input type="checkbox" required className="mt-0.5" />
        <span>
          Acconsento al trattamento dei dati (placeholder). In produzione collega la tua privacy policy e registra il consenso.
        </span>
      </label>

      <button
        disabled={state === "sending" || state === "success"}
        className="rounded-2xl bg-lime px-4 py-3 text-sm font-semibold text-bg hover:brightness-110 disabled:opacity-70"
      >
        {state === "idle" && "Invia richiesta"}
        {state === "sending" && "Invio…"}
        {state === "success" && "Ricevuto! Ti ricontattiamo presto"}
      </button>

      <div className="text-[11px] text-muted">
        Demo: il form non invia davvero. Integra un endpoint (es. /api/lead) o CRM.
      </div>
    </form>
  );
}
