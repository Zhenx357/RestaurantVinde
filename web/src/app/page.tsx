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
      <section
        id="buffet-info"
        className="relative overflow-hidden bg-gradient-to-br from-[#f9efe6] via-white to-white px-6 py-12 ring-1 ring-black/5"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
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
            <div className="relative h-80 overflow-hidden shadow-2xl shadow-black/20">
              <Image
                src={hero.carousel[0]}
                alt="Buffet ved Restaurant Vinde"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          ) : null}
        </div>
        <div className="mt-10 grid gap-6 text-sm text-[var(--foreground)]/80 md:grid-cols-3">
          <InfoLine title="Pris">
            <p className="text-2xl font-semibold text-[var(--primary)]">
              {formatPrice(buffet.dineIn.weekday)} – {formatPrice(buffet.dineIn.weekend)}
            </p>
            <p>Halv pris til børn under 12 år.</p>
          </InfoLine>
          <InfoLine title="Tidspunkt">
            <ul>
              {buffet.buffetTimes.map((slot) => (
                <li key={slot.label}>
                  {slot.label}: {slot.time}
                </li>
              ))}
            </ul>
          </InfoLine>
          <InfoLine title="Inkluderet">
            <p>Sushi, mongolian barbecue, 26 varme retter, salatbar og dessert.</p>
          </InfoLine>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-[var(--primary)]">
          Derfor elsker gæsterne buffeten
        </h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="rounded-[1.5rem] bg-white/90 px-4 py-5 shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                {benefit.title}
              </p>
              <p className="mt-2 text-base text-[var(--foreground)]/80">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function InfoLine({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-[var(--border)] pt-4">
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
        {title}
      </p>
      <div className="mt-1 space-y-1">{children}</div>
    </div>
  );
}
