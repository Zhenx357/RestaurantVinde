import { getDrinkCategories } from "@/lib/content";
import { formatPrice } from "@/lib/format";

export default function DrinksPage() {
  const categories = getDrinkCategories();

  return (
    <div className="space-y-8 text-sm">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
          Drikkekort
        </p>
        <h1 className="text-3xl font-semibold text-[var(--primary)]">
          Vin, bobler og alkoholfri
        </h1>
        <p className="text-[var(--foreground)]/80">
          Hele kortet hentes fra JSON, så månedens vin og øvrige kategorier kan opdateres uden kode.
        </p>
      </header>

      {categories.map((category) => (
        <section
          key={category.id}
          className="rounded-2xl border border-[var(--border)] bg-white p-5"
        >
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
        </section>
      ))}
    </div>
  );
}
