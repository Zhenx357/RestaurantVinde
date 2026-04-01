import Image from "next/image";
import Link from "next/link";
import {
  getBuffetBenefits,
  getBuffetPricing,
  getHeroContent,
} from "@/lib/content";
import { formatPrice } from "@/lib/format";

export default function Home() {
  const hero = getHeroContent();
  const buffet = getBuffetPricing();
  const benefits = getBuffetBenefits().slice(0, 3);

  return (
    <div className="space-y-12 pb-20">
      <section className="grid gap-10 md:grid-cols-[1.05fr,0.95fr] md:items-center">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.4em] text-[var(--accent)]">
            {hero.eyebrow}
          </p>
          <div>
            <h1 className="text-5xl font-semibold text-[var(--primary)] leading-tight">
              {hero.title}
            </h1>
            <p className="mt-3 text-lg text-[var(--foreground)]/85">
              {hero.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {hero.primaryCta ? (
              <Link
                href={hero.primaryCta.href}
                className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--primary)]/25"
              >
                {hero.primaryCta.label}
              </Link>
            ) : null}
            {hero.secondaryCta ? (
              <Link
                href={hero.secondaryCta.href}
                className="rounded-full border border-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary)]"
              >
                {hero.secondaryCta.label}
              </Link>
            ) : null}
          </div>
          <ul className="flex flex-wrap gap-6 text-sm text-[var(--foreground)]/65">
            <li>Buffet alle ugens dage</li>
            <li>Frisk sushi &amp; mongolian barbecue</li>
            <li>Familievenlig</li>
          </ul>
        </div>
        {hero.carousel[0] ? (
          <div className="relative h-80 overflow-hidden rounded-[3rem] shadow-2xl shadow-black/20">
            <Image
              src={hero.carousel[0]}
              alt="Buffet ved Restaurant Vinde"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        ) : null}
      </section>
      <section
        id="buffet-info"
        className="flex flex-col gap-6 border-t border-[var(--border)] pt-6 text-sm text-[var(--foreground)]/80 md:flex-row md:items-start md:justify-between"
      >
        <InfoBlock title="Pris">
          <p className="text-2xl font-semibold text-[var(--primary)]">
            {formatPrice(buffet.dineIn.weekday)} –{" "}
            {formatPrice(buffet.dineIn.weekend)}
          </p>
          <p>Halv pris til børn under 12 år.</p>
        </InfoBlock>
        <InfoBlock title="Tidspunkt">
          <ul>
            {buffet.buffetTimes.map((slot) => (
              <li key={slot.label}>
                {slot.label}: {slot.time}
              </li>
            ))}
          </ul>
        </InfoBlock>
        <InfoBlock title="Inkluderet">
          <p>
            Sushi, mongolian barbecue, 26 varme retter, salatbar og dessert.
          </p>
        </InfoBlock>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-[var(--primary)]">
          Derfor elsker gæsterne buffeten
        </h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {benefits.map((benefit) => (
            <li key={benefit.title}>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                {benefit.title}
              </p>
              <p className="text-base text-[var(--foreground)]/80">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 space-y-1">
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
        {title}
      </p>
      <div>{children}</div>
    </div>
  );
}
