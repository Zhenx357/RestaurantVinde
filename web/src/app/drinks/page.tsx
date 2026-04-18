import { PageHeader } from "@/components/sections/page-header";
import { SectionCard } from "@/components/sections/section-card";
import { listDrinkCategories } from "@/data/menu";
import { formatPrice } from "@/lib/format";

export default function DrinksPage() {
  const categories = listDrinkCategories();

  return (
    <div className="space-y-8 text-sm">
      <PageHeader
        eyebrow="Drikkekort"
        title="Vin, bobler og alkoholfri"
        description="Hele kortet hentes fra JSON, så månedens vin og øvrige kategorier kan opdateres uden kode."
      />

      {categories.map((category) => (
        <SectionCard key={category.id}>
          <h2 className="text-2xl font-semibold text-[var(--primary)]">
            {category.title}
          </h2>
          <ul className="mt-4 space-y-3">
            {category.items.map((item, index) => (
              <li
                key={`${category.id}-${index}`}
                className="border-b border-[var(--border)] pb-2 last:border-none"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    {item.type ? (
                      <p className="text-xs text-[var(--foreground)]/70">
                        {item.type}
                      </p>
                    ) : null}
                  </div>
                  {item.price ? (
                    <span className="text-[var(--primary)]">
                      {formatPrice(item.price)}
                    </span>
                  ) : null}
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
