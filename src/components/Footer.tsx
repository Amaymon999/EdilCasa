import Container from "./Container";
import { site } from "@/lib/content";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/20">
      <div className="noise" />
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-lg font-bold tracking-tight">{site.brand}</div>
            <p className="mt-2 text-sm text-muted max-w-md">
              Ristrutturazioni e showroom materiali: un processo ordinato, tempi chiari, risultato premium.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-muted hover:text-ink">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-sm font-semibold">Pagine</div>
            <div className="mt-3 grid gap-2 text-sm text-muted">
              <Link href="/" className="hover:text-ink">Home</Link>
              <Link href="/servizi" className="hover:text-ink">Servizi</Link>
              <Link href="/progetti" className="hover:text-ink">Progetti</Link>
              <Link href="/contatti" className="hover:text-ink">Contatti</Link>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="text-sm font-semibold">Sedi</div>
            <div className="mt-3 grid gap-4">
              {site.locations.map((l) => (
                <div key={l.name} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold">{l.name}</div>
                  <div className="mt-1 text-xs text-muted">{l.address}</div>
                  <div className="mt-2 text-xs text-muted">Tel: {l.phone}</div>
                  <div className="text-xs text-muted">Orari: {l.hours}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-muted">
          <div>{site.legal}</div>
          <div className="mt-1">{site.legal2}</div>
        </div>
      </Container>
    </footer>
  );
}
