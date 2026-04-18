import { PageHeader } from "@/components/sections/page-header";
import { SectionCard } from "@/components/sections/section-card";
import { listAlaCarteSections } from "@/data/menu";
import { formatPrice } from "@/lib/format";

export default function AlaCartePage() {
  const sections = listAlaCarteSections();

  return (
    <div className="space-y-8 text-sm">
      <PageHeader
        eyebrow="Kinesisk à la carte"
        title="Klassiske retter med unikke numre"
        description="Alle retter kommer fra JSON-filer, så priser og beskrivelser kan redigeres uden kode. Nummereringen matcher menukortet på restaurantens materialer."
      />

      {sections.map((section) => (
        <SectionCard key={section.id} id={section.id}>
          <h2 className="text-2xl font-semibold text-[var(--primary)]">{section.title}</h2>
          <div className="mt-4 space-y-4">
            {section.groups.map((group, index) => (
              <div key={`${section.id}-${index}`} className="space-y-2">
                {group.title ? (
                  <p className="text-sm font-semibold text-[var(--accent)]">
                    {group.title}
                  </p>
                ) : null}
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={`${section.id}-${item.number}`} className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border)] pb-1">
                      <div>
                        <span className="font-semibold text-[var(--primary)]">
                          {item.number}
                        </span>{" "}
                        {item.name}
                      </div>
                      <div className="text-right text-xs text-[var(--foreground)]/70">
                        {item.dineInPrice ? (
                          <p>{formatPrice(item.dineInPrice)}</p>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionCard>
      ))}
    </div>
  );
}
