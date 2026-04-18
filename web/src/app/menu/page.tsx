import { PageHeader } from "@/components/sections/page-header";
import { MenuCategorySection } from "@/components/sections/menu-category-section";
import { SectionCard } from "@/components/sections/section-card";
import {
  listMenuCategories,
  listMenuItems,
  getBuffetPricing,
} from "@/data/menu";

export default function MenuPage() {
  const categories = listMenuCategories();
  const allItems = listMenuItems();
  const buffet = getBuffetPricing();
  const filteredCategories = categories.filter((category) =>
    ["set-menus", "selskabsmenuer"].includes(category.id)
  );

  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow="Menuer"
        title="Menuer til selskaber"
        description="Priserne her er for spisning i restauranten. Takeaway-versionen kommer på en særskilt side senere."
      />

      {filteredCategories.map((category) => {
        const categoryItems = allItems.filter((item) => item.categoryId === category.id);
        return (
          <MenuCategorySection
            key={category.id}
            category={category}
            items={categoryItems}
          />
        );
      })}

      <SectionCard>
        <h2 className="text-2xl font-semibold text-[var(--primary)]">{buffet.name}</h2>
        <p className="text-sm text-[var(--foreground)]/80">{buffet.description}</p>
        <ul className="mt-3 text-sm text-[var(--foreground)]/80">
          {buffet.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}
