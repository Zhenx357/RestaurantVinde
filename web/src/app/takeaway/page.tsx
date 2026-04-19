import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { SectionCard } from "@/components/sections/section-card";
import { getTakeawayInfo } from "@/data/site";

export default function TakeawayPage() {
  const info = getTakeawayInfo();

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-5 py-10 text-sm md:px-6">
      <PageHeader
        eyebrow="Takeaway"
        title="Takeaway kommer i næste fase"
        description="Vi bygger en dedikeret oplevelse med egne priser og ordre-flow. Indtil da kan du bestille via telefon eller Just-Eat."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {info.channels.map((channel) => (
          <SectionCard key={channel.href} className="text-sm">
            <p className="font-semibold text-[var(--primary)]">{channel.label}</p>
            <p>{channel.value}</p>
            <Link className="text-[var(--accent)] underline" href={channel.href}>
              Åbn
            </Link>
          </SectionCard>
        ))}
      </div>

      <SectionCard>
        <p className="text-[var(--foreground)]/80">
          Takeaway-menuen med separate priser lanceres sammen med det nye ordreflow. Følg med her – vi opdaterer så snart det er klar.
        </p>
      </SectionCard>
    </div>
  );
}
