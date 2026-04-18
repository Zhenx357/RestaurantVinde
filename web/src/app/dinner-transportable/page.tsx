import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { SectionCard } from "@/components/sections/section-card";
import { listDinnerPackages } from "@/data/menu";
import { formatPrice } from "@/lib/format";

export default function DinnerTransportablePage() {
  const packages = listDinnerPackages();

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Dinner transportable"
        title="Buffeter klar til levering"
        description="Alt indhold kommer fra de nye JSON-filer, så priser og retter kan redigeres uden kodeændringer."
      />

      <ul className="space-y-4">
        {packages.map((pack) => (
          <li key={pack.id}>
            <SectionCard>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-xl font-semibold text-[var(--primary)]">{pack.name}</p>
                  {pack.description ? (
                    <p className="text-sm text-[var(--foreground)]/80">{pack.description}</p>
                  ) : null}
                </div>
                <div className="text-sm text-[var(--primary)]">
                  {pack.takeawayPrice ? <p>{formatPrice(pack.takeawayPrice)}</p> : null}
                  {pack.minGuests ? <p>Min. {pack.minGuests} personer</p> : null}
                </div>
              </div>
              <p className="mt-2 text-sm text-[var(--foreground)]/80">
                {pack.items.join(", ")}
                {pack.sushi ? `. Sushi: ${pack.sushi.join(", ")}` : null}
              </p>
            </SectionCard>
          </li>
        ))}
      </ul>

      <SectionCard className="text-sm text-[var(--foreground)]/80">
        <p>Bestil ved at ringe til os – vi koordinerer levering eller afhentning.</p>
        <Link href="tel:+4586288838" className="mt-3 inline-block rounded-full bg-[var(--primary)] px-4 py-2 text-white">
          Ring 86 28 88 38
        </Link>
      </SectionCard>
    </div>
  );
}
