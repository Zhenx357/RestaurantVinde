import { getBuffetPricing, getMenuCategories, getMenuItemsByCategory } from "@/lib/content";
import { formatPrice } from "@/lib/format";

export default function MenuPage() {
  const categories = getMenuCategories().filter((category) =>
    ["set-menus", "selskabsmenuer"].includes(category.id)
  );
  const buffet = getBuffetPricing();

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
          Menuer
        </p>
        <h1 className="text-3xl font-semibold text-[var(--primary)]">
          Menuer til selskaber
        </h1>
        <p className="text-sm text-[var(--foreground)]/80">
          Priserne her er for spisning i restauranten. Takeaway-versionen kommer på en særskilt side senere.
        </p>
      </header>

      {categories.map((category) => {
        const items = getMenuItemsByCategory(category.id);
        return (
          <section key={category.id} className="space-y-4 rounded-2xl border border-[var(--border)] bg-white p-5">
            <div>
              <h2 className="text-2xl font-semibold text-[var(--primary)]">{category.title}</h2>
              <p className="text-sm text-[var(--foreground)]/80">{category.description}</p>
            </div>
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="border-t border-[var(--border)] pt-4 first:border-none first:pt-0">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      {item.description ? (
                        <p className="text-sm text-[var(--foreground)]/80">{item.description}</p>
                      ) : null}
                    </div>
                    <div className="text-sm text-[var(--primary)]">
                      {item.dineInPrice ? <p>{formatPrice(item.dineInPrice)}</p> : null}
                      {item.minGuests ? <p>Min. {item.minGuests} personer</p> : null}
                    </div>
                  </div>
                  {Object.entries(item.courses || {}).length ? (
                    <ul className="mt-2 text-sm text-[var(--foreground)]/80">
                      {Object.entries(item.courses || {}).map(([label, dishes]) => (
                        <li key={label}>
                          <span className="font-semibold">{label}:</span> {dishes.join(", ")}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      <section className="rounded-2xl border border-[var(--border)] bg-white p-5">
        <h2 className="text-2xl font-semibold text-[var(--primary)]">{buffet.name}</h2>
        <p className="text-sm text-[var(--foreground)]/80">{buffet.description}</p>
        <ul className="mt-3 text-sm text-[var(--foreground)]/80">
          {buffet.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
