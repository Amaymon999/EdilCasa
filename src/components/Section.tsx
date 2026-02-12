import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export default function Section({
  className,
  children,
  id,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-14 sm:py-20", className)}>
      {children}
    </section>
  );
}
