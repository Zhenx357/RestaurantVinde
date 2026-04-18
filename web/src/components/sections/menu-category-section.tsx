import type { MenuCategory, MenuItem } from "@/domain/content/types";
import { formatPrice } from "@/lib/format";
import { SectionCard } from "@/components/sections/section-card";

export type MenuCategorySectionProps = {
  category: MenuCategory;
  items: MenuItem[];
};

export function MenuCategorySection({ category, items }: MenuCategorySectionProps) {
  return (
    <SectionCard className="space-y-4">
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
    </SectionCard>
  );
}
