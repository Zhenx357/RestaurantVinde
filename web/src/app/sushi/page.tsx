import Link from "next/link";
import { getSushiSections } from "@/lib/content";
import { formatPrice } from "@/lib/format";

export default function SushiPage() {
  const sections = getSushiSections();

  return (
    <div className="space-y-8 text-sm">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
          Sushi
        </p>
        <h1 className="text-3xl font-semibold text-[var(--primary)]">
          Sushi-kort med kategorier og anker-links
        </h1>
        <p className="text-[var(--foreground)]/80">
          Data kommer direkte fra JSON, så nye bakker eller priser kan tilføjes uden at røre komponenter.
        </p>
        <nav className="flex flex-wrap gap-3 text-xs uppercase tracking-wide text-[var(--primary)]">
          {sections.map((section) => (
            <Link key={section.id} href={`#${section.id}`} className="underline">
              {section.title}
            </Link>
          ))}
        </nav>
      </header>

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="rounded-2xl border border-[var(--border)] bg-white p-5"
        >
          <h2 className="text-2xl font-semibold text-[var(--primary)]">
            {section.title}
          </h2>
          <ul className="mt-4 space-y-3">
            {section.items.map((item) => (
              <li
                key={item.code}
                className="border-b border-[var(--border)] pb-2 last:border-none"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="font-semibold text-[var(--primary)]">
                      {item.code}
                    </span>{" "}
                    {item.name}
                  </div>
                  <span className="text-[var(--primary)]">
                    {formatPrice(item.price)}
                  </span>
                </div>
                {item.description ? (
                  <p className="text-xs text-[var(--foreground)]/70">
                    {item.description}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
