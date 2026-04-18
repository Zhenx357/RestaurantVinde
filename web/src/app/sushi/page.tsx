import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { SectionCard } from "@/components/sections/section-card";
import { listSushiSections } from "@/data/menu";
import { formatPrice } from "@/lib/format";

export default function SushiPage() {
  const sections = listSushiSections();

  return (
    <div className="space-y-8 text-sm">
      <PageHeader
        eyebrow="Sushi"
        title="Sushi-kort med kategorier og anker-links"
        description="Data kommer direkte fra JSON, så nye bakker eller priser kan tilføjes uden at røre komponenter."
      >
        <nav className="flex flex-wrap gap-3 text-xs uppercase tracking-wide text-[var(--primary)]">
          {sections.map((section) => (
            <Link key={section.id} href={`#${section.id}`} className="underline">
              {section.title}
            </Link>
          ))}
        </nav>
      </PageHeader>

      {sections.map((section) => (
        <SectionCard key={section.id} id={section.id}>
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
        </SectionCard>
      ))}
    </div>
  );
}
