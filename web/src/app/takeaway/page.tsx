import Link from "next/link";
import { getTakeawayInfo } from "@/lib/content";

export default function TakeawayPage() {
  const info = getTakeawayInfo();

  return (
    <div className="space-y-6 text-sm">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
          Takeaway
        </p>
        <h1 className="text-3xl font-semibold text-[var(--primary)]">
          Takeaway kommer i næste fase
        </h1>
        <p className="text-[var(--foreground)]/80">
          Vi bygger en dedikeret oplevelse med egne priser og ordre-flow. Indtil da kan du bestille via telefon eller Just-Eat.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {info.channels.map((channel) => (
          <div
            key={channel.href}
            className="rounded-2xl border border-[var(--border)] bg-white p-4 text-sm"
          >
            <p className="font-semibold text-[var(--primary)]">{channel.label}</p>
            <p>{channel.value}</p>
            <Link className="text-[var(--accent)] underline" href={channel.href}>
              Åbn
            </Link>
          </div>
        ))}
      </div>

      <section className="rounded-2xl border border-[var(--border)] bg-white p-5">
        <p className="text-[var(--foreground)]/80">
          Takeaway-menuen med separate priser lanceres sammen med det nye ordreflow. Følg med her – vi opdaterer så snart det er klar.
        </p>
      </section>
    </div>
  );
}
