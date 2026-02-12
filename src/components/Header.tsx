"use client";
import Link from "next/link";
import { site } from "@/lib/content";
import Container from "./Container";
import { Button } from "./Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all", solid ? "backdrop-blur-xl bg-bg/55 border-b border-white/10" : "bg-transparent")}>
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="relative grid h-9 w-9 place-items-center rounded-2xl border border-white/10 bg-white/5 shadow-soft">
            <span className="absolute inset-0 rounded-2xl gradient-ring opacity-35" />
            <span className="relative font-extrabold text-[12px] tracking-[0.18em] text-ink">EC</span>
          </span>
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-tight">{site.brand}</div>
            <div className="text-xs text-muted">{site.tagline}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {site.nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-muted hover:text-ink transition-colors">
              {n.label}
            </Link>
          ))}
          <Button href="/contatti" className="ml-2" variant="primary">
            Preventivo rapido
          </Button>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Apri menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-bg/70 backdrop-blur-xl">
          <Container className="py-4">
            <div className="flex flex-col gap-3">
              {site.nav.map((n) => (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm bg-white/5 border border-white/10">
                  {n.label}
                </Link>
              ))}
              <Link href="/contatti" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm bg-lime text-bg font-semibold">
                Preventivo rapido
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
