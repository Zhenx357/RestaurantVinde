import Link from "next/link";
import { getDinnerPackages } from "@/lib/content";
import { formatPrice } from "@/lib/format";

export default function DinnerTransportablePage() {
  const packages = getDinnerPackages();

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
          Dinner transportable
        </p>
        <h1 className="text-3xl font-semibold text-[var(--primary)]">
          Buffeter klar til levering
        </h1>
        <p className="text-sm text-[var(--foreground)]/80">
          Alt indhold kommer fra de nye JSON-filer, så priser og retter kan redigeres uden kodeændringer.
        </p>
      </header>

      <ul className="space-y-4">
        {packages.map((pack) => (
          <li key={pack.id} className="rounded-2xl border border-[var(--border)] bg-white p-5">
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
          </li>
        ))}
      </ul>

      <section className="rounded-2xl border border-[var(--border)] bg-white p-5 text-sm text-[var(--foreground)]/80">
        <p>Bestil ved at ringe til os – vi koordinerer levering eller afhentning.</p>
        <Link href="tel:+4586288838" className="mt-3 inline-block rounded-full bg-[var(--primary)] px-4 py-2 text-white">
          Ring 86 28 88 38
        </Link>
      </section>
    </div>
  );
}
