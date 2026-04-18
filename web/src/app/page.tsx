import Image from "next/image";
import Link from "next/link";
import { getBuffetPricing } from "@/data/menu";
import { getHeroContent, getOpeningHours, getContactDetails } from "@/data/site";
import { formatPrice } from "@/lib/format";
import { LocationMapEmbed } from "@/components/ui/location-map-embed";

export default function Home() {
  const hero = getHeroContent();
  const buffet = getBuffetPricing();
  const hours = getOpeningHours();
  const contact = getContactDetails();
  const buffetHighlights = [
    {
      icon: "🍣",
      title: "Sushi & sashimi",
      text: "Nigiri, maki og frisklavet poké hver aften.",
    },
    {
      icon: "🔥",
      title: "Live grill",
      text: "Mongolian BBQ med fire slags kød og signatursaucer.",
    },
    {
      icon: "🍰",
      title: "Dessert & kaffe",
      text: "Fri is, kage og friskbrygget kaffe/te.",
    },
  ];
  const alacarteImages = hero.carousel.slice(0, 3);

  return (
    <div className="space-y-12 pb-20">
      <section
        id="buffet-info"
        className="bg-gradient-to-br from-[#fdf5ec] via-white to-white -mx-5 md:-mx-6 py-12"
      >
        <div className="mx-auto w-full max-w-6xl px-5 md:px-6 space-y-8">
          <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div className="space-y-5 md:max-w-3xl">
              <div>
                <h1 className="text-4xl font-semibold leading-tight text-[var(--primary)] md:text-5xl">
                  {hero.title}
                </h1>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--foreground)]/85 md:text-lg">
                  {hero.description}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                {hero.primaryCta ? (
                  <Link
                    href={hero.primaryCta.href}
                    className="flex-1 rounded-full bg-gradient-to-r from-[var(--primary)] to-[#b4472c] px-8 py-3 text-center text-base font-semibold text-white shadow-lg shadow-[var(--primary)]/40"
                  >
                    {hero.primaryCta.label}
                  </Link>
                ) : null}
                {hero.secondaryCta ? (
                  <Link
                    href={hero.secondaryCta.href}
                    className="flex-1 rounded-full border border-[var(--primary)] px-8 py-3 text-center text-base font-semibold text-[var(--primary)] hover:bg-[var(--primary)]/5"
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
            <div className="space-y-4 rounded-3xl bg-white/90 px-6 py-5 shadow-[0_20px_45px_rgba(0,0,0,0.1)]">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                  Buffet priser
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-[var(--foreground)]/85">
                <div className="space-y-1">
                  <p className="text-[var(--accent)] uppercase tracking-[0.2em] text-xs">
                    Man - tors
                  </p>
                  <p className="text-2xl font-semibold text-[var(--primary)]">
                    {formatPrice(buffet.dineIn.weekday)}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[var(--accent)] uppercase tracking-[0.2em] text-xs">
                    Fre - søn
                  </p>
                  <p className="text-2xl font-semibold text-[var(--primary)]">
                    {formatPrice(buffet.dineIn.weekend)}
                  </p>
                </div>
              </div>
              <ul className="space-y-1 text-xs text-[var(--foreground)]/75">
                {buffet.includes.slice(0, 3).map((item) => (
                  <li key={item}>• {item}</li>
                ))}
                <li>Halv pris til børn under 12 år.</li>
              </ul>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                  Åben buffet
                </p>
                <p className="text-sm text-[var(--foreground)]/85">
                  Alle dage kl. 16.30 – 21.30
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

      <section className="-mx-5 md:-mx-6 bg-[#fff7f2] py-6">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-5 md:grid-cols-3">
          {buffetHighlights.map((highlight) => (
            <div
              key={highlight.title}
              className="flex items-start gap-3 rounded-3xl bg-white px-4 py-5 shadow-[0_15px_30px_rgba(0,0,0,0.05)]"
            >
              <span className="text-2xl" aria-hidden="true">
                {highlight.icon}
              </span>
              <div>
                <p className="text-sm font-semibold text-[var(--primary)]">
                  {highlight.title}
                </p>
                <p className="text-xs text-[var(--foreground)]/80">{highlight.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="-mx-5 md:-mx-6 px-5 md:px-6">
        <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-[32px] bg-white p-6 shadow-[0_25px_60px_rgba(0,0,0,0.08)] md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              À la carte
            </p>
            <h2 className="text-3xl font-semibold text-[var(--primary)]">
              Klassiske kinesiske retter – også til selskaber
            </h2>
            <p className="text-sm text-[var(--foreground)]/80">
              Vores à la carte-kort hylder de ikoniske retter fra det kinesiske køkken.
              Kombinér flere små retter eller vælg en af de populære selskabsmenuer, når
              du ønsker en mere intim oplevelse end buffeten.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/a-la-carte"
                className="rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-semibold text-white"
              >
                Se à la carte
              </Link>
              <Link
                href="/menu"
                className="rounded-full border border-[var(--primary)] px-5 py-2 text-sm font-semibold text-[var(--primary)]"
              >
                Menuer til selskab
              </Link>
            </div>
          </div>
          <div className="relative h-64 md:h-full">
            {alacarteImages.map((img, index) => (
              <div
                key={img}
                className={`absolute rounded-2xl shadow-lg ${
                  index === 0
                    ? "left-0 top-6 h-40 w-40"
                    : index === 1
                      ? "right-4 top-0 h-44 w-44"
                      : "left-12 bottom-0 h-36 w-36"
                }`}
              >
                <Image
                  src={img}
                  alt="À la carte retter"
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="-mx-5 md:-mx-6 border-[var(--border)] bg-white py-12">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start">
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
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-[var(--primary)]/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                  Dine-in
                </p>
                <ul className="mt-2 text-sm font-semibold text-[var(--foreground)]">
                  {hours.regular.map((slot) => (
                    <li key={slot.days}>
                      {slot.days}: {slot.open} – {slot.close}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-[var(--primary)]/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                  Takeaway
                </p>
                <ul className="mt-2 text-sm font-semibold text-[var(--foreground)]">
                  {hours.takeaway.map((slot) => (
                    <li key={slot.label}>
                      {slot.label}: {slot.open} – {slot.close}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-xs text-[var(--foreground)]/70">
              Buffet kl. 16.30 – 21.30 alle dage.
            </p>
            <div className="space-y-3">
              <Link
                href={`tel:${contact.phoneNumbers[0]?.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--primary)]/35"
              >
                📞 Ring og book bord
              </Link>
              <Link
                href={`mailto:${contact.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--primary)] px-5 py-3 text-sm font-semibold text-[var(--primary)]"
              >
                ✉️ Skriv til os
              </Link>
            </div>
          </div>
          <div className="relative rounded-[32px] shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
            <LocationMapEmbed
              lat={contact.map.coordinates.lat}
              lng={contact.map.coordinates.lng}
              zoom={contact.map.zoom}
              label={contact.map.label}
              googleMapsUrl={contact.map.googleMapsUrl}
              addressLines={[contact.address.line1, contact.address.line2]}
              fallbackImage={contact.map.staticImage}
            />
            <div className="absolute left-4 top-4 rounded-2xl bg-white/95 px-4 py-3 shadow-lg">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                Aarhus V
              </p>
              <p className="text-sm font-semibold text-[var(--primary)]">
                {contact.address.line1}
              </p>
              <Link
                href={contact.map.googleMapsUrl}
                target="_blank"
                className="mt-2 inline-flex items-center text-xs font-semibold text-[var(--primary)]"
              >
                Find vej →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
