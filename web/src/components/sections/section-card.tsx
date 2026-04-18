import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionCardProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
};

export function SectionCard({ children, className, ...rest }: SectionCardProps) {
  return (
    <div
      {...rest}
      className={cn(
        "rounded-2xl border border-[var(--border)] bg-white p-5",
        className
      )}
    >
      {children}
    </div>
  );
}
