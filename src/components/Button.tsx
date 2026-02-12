import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-lime text-bg shadow-soft hover:shadow-glow hover:brightness-110",
  secondary:
    "bg-white/10 text-ink hover:bg-white/14 border border-white/10",
  outline:
    "bg-transparent text-ink border border-white/14 hover:bg-white/6",
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: Variant;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-transform duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0";
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
