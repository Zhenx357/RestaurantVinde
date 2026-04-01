import { getAlaCarteSections } from "@/lib/content";
import { formatPrice } from "@/lib/format";

export default function AlaCartePage() {
  const sections = getAlaCarteSections();

  return (
    <div className="space-y-8 text-sm">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
          Kinesisk à la carte
        </p>
        <h1 className="text-3xl font-semibold text-[var(--primary)]">
          Klassiske retter med unikke numre
        </h1>
        <p className="text-[var(--foreground)]/80">
          Alle retter kommer fra JSON-filer, så priser og beskrivelser kan redigeres uden kode. Nummereringen matcher menukortet på restaurantens materialer.
        </p>
      </header>

      {sections.map((section) => (
        <section key={section.id} id={section.id} className="rounded-2xl border border-[var(--border)] bg-white p-5">
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
        </section>
      ))}
    </div>
  );
}
