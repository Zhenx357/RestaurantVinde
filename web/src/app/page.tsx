import Image from "next/image";
import Link from "next/link";
import {
  getBuffetPricing,
  getHeroContent,
  getBuffetBenefits,
} from "@/lib/content";
import { formatPrice } from "@/lib/format";

export default function Home() {
  const hero = getHeroContent();
  const buffet = getBuffetPricing();
  getBuffetBenefits();

  return (
    <div className="space-y-12 pb-20">
      <section
        id="buffet-info"
        className="bg-gradient-to-br from-[#fdf5ec] via-white to-white -mx-5 md:-mx-6 py-12"
      >
        <div className="mx-auto w-full max-w-6xl px-5 md:px-6 space-y-8">
          <div className="space-y-5 md:max-w-3xl">
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
            <ul className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.3em] text-[var(--foreground)]/65">
              <li>Buffet alle dage</li>
              <li>Sushi &amp; mongolian BBQ</li>
              <li>Familievenlig</li>
            </ul>
          </div>
          {hero.carousel[0] ? (
            <div className="relative h-[24rem] overflow-hidden rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.22)]">
              <Image
                src={hero.carousel[0]}
                alt="Buffet ved Restaurant Vinde"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          ) : null}
          <div className="grid gap-6 border-t border-black/10 pt-6 text-sm text-[var(--foreground)]/80 md:grid-cols-3">
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
        </div>
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
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
        {title}
      </p>
      <div className="mt-1 space-y-1">{children}</div>
    </div>
  );
}
