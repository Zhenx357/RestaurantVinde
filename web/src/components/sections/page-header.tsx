import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  children?: ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  align = "left",
  children,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "space-y-2",
        align === "center" && "text-center"
      )}
    >
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-semibold text-[var(--primary)]">{title}</h1>
      {description ? (
        <p className="text-sm text-[var(--foreground)]/80">{description}</p>
      ) : null}
      {children}
    </header>
  );
}
