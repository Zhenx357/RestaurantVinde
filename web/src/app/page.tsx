import Image from "next/image";
import Link from "next/link";
import {
  getBuffetPricing,
  getHeroContent,
  getBuffetBenefits,
  getOpeningHours,
  getContactDetails,
} from "@/lib/content";
import { formatPrice } from "@/lib/format";
import { LocationMapEmbed } from "@/components/ui/location-map-embed";

export default function Home() {
  const hero = getHeroContent();
  const buffet = getBuffetPricing();
  getBuffetBenefits();
  const hours = getOpeningHours();
  const contact = getContactDetails();

  return (
    <div className="space-y-12 pb-20">
      <section
        id="buffet-info"
        className="bg-gradient-to-br from-[#fdf5ec] via-white to-white -mx-5 md:-mx-6 py-12"
      >
        <div className="mx-auto w-full max-w-6xl px-5 md:px-6 space-y-8">
          <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
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
            <div className="space-y-4 rounded-xl bg-white/80 px-6 py-5 shadow-[0_20px_45px_rgba(0,0,0,0.08)]">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                  Pris
                </p>
                <p className="text-sm text-[var(--foreground)]/80">
                  Mandag – torsdag
                </p>
                <p className="text-xl font-semibold text-[var(--primary)]">
                  {formatPrice(buffet.dineIn.weekday)}
                </p>
                <p className="text-sm text-[var(--foreground)]/80">
                  Fredag – søndag
                </p>
                <p className="text-xl font-semibold text-[var(--primary)]">
                  {formatPrice(buffet.dineIn.weekend)}
                </p>
                <p className="text-xs text-[var(--foreground)]/70">
                  Halv pris til børn under 12 år.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                  Åbent
                </p>
                <p className="text-sm text-[var(--foreground)]/85">
                  Buffet alle dage kl. 16.30 – 21.30
                </p>
              </div>
            </div>
          </div>
          {hero.carousel[0] ? (
            <div className="relative h-[22rem] overflow-hidden rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.22)]">
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
        </div>
      </section>

      <section className="-mx-5 md:-mx-6 border-[var(--border)] bg-white py-12">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] md:items-start">
          <div className="space-y-5 text-sm text-[var(--foreground)]/85">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              Besøg os
            </p>
            <h2 className="text-3xl font-semibold text-[var(--primary)]">
              Åbningstider & kontakt
            </h2>
            <p className="text-base text-[var(--foreground)]">
              Restaurant VINDE<br />
              {contact.address.line1}, {contact.address.line2}
            </p>
            <p className="text-sm text-[var(--foreground)]/75">
              Du finder os mellem Coop 365 og PureGym på den ene side og Lidl på den anden side.
            </p>
            <div>
              <p className="font-semibold text-[var(--primary)]">Åbningstider</p>
              <ul>
                {hours.regular.map((slot) => (
                  <li key={slot.days}>
                    {slot.days}: {slot.open} – {slot.close}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[var(--foreground)]/70">
                Buffet kl. 16.30 – 21.30 alle dage.
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                  Telefon
                </p>
                <a
                  className="text-[var(--primary)]"
                  href={`tel:${contact.phoneNumbers[0]?.replace(/\s+/g, "")}`}
                >
                  {contact.phoneNumbers[0]}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                  Mail
                </p>
                <a
                  className="text-[var(--primary)]"
                  href={`mailto:${contact.email}`}
                >
                  {contact.email}
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-2 text-xs font-semibold">
              <Link
                href={`tel:${contact.phoneNumbers[0]?.replace(/\s+/g, "")}`}
                className="rounded-full border border-[var(--primary)] px-4 py-2 text-[var(--primary)]"
              >
                Ring og book bord
              </Link>
            </div>
          </div>
          <LocationMapEmbed
            lat={contact.map.coordinates.lat}
            lng={contact.map.coordinates.lng}
            zoom={contact.map.zoom}
            label={contact.map.label}
            googleMapsUrl={contact.map.googleMapsUrl}
            addressLines={[contact.address.line1, contact.address.line2]}
            fallbackImage={contact.map.staticImage}
          />
        </div>
      </section>
    </div>
  );
}
