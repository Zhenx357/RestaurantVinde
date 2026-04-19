import { PageHeader } from "@/components/sections/page-header";
import { SectionCard } from "@/components/sections/section-card";
import { getContactDetails, getOpeningHours } from "@/data/site";
import { LocationMapEmbed } from "@/components/ui/location-map-embed";

export default function ContactPage() {
  const contact = getContactDetails();
  const hours = getOpeningHours();

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-5 py-10 text-sm text-[var(--foreground)] md:px-6">
      <PageHeader
        eyebrow="Kontakt"
        title="Kontakt og åbningstider"
        description="Ét sted at vedligeholde adresse, telefon, mail og tidsplan. Perfekt til kommende admin-panel."
      />

      <SectionCard className="space-y-2 p-4">
        <p className="font-semibold">{contact.name}</p>
        <p>{contact.address.line1}</p>
        <p>{contact.address.line2}</p>
        {contact.phoneNumbers.map((phone) => (
          <p key={phone}>
            Telefon:{" "}
            <a className="text-[var(--primary)] underline" href={`tel:${phone.replace(" ", "")}`}>
              {phone}
            </a>
          </p>
        ))}
        <p>
          E-mail:{" "}
          <a className="text-[var(--primary)] underline" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </p>
        <ul className="list-disc pl-5 text-[var(--foreground)]/80">
          {contact.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard className="space-y-2 p-4">
        <h2 className="text-xl font-semibold text-[var(--primary)]">Åbningstider</h2>
        <ul>
          {hours.regular.map((window) => (
            <li key={window.days}>
              {window.days}: {window.open} – {window.close}
            </li>
          ))}
        </ul>
        <div>
          {hours.takeaway.map((slot) => (
            <p key={slot.label}>
              {slot.label}: {slot.open} – {slot.close}
            </p>
          ))}
        </div>
        <ul className="list-disc pl-5">
          {hours.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard className="space-y-4 p-4">
        <div>
          <h2 className="text-xl font-semibold text-[var(--primary)]">Find vej</h2>
          <p className="text-[var(--foreground)]/80">
            Vi bruger Google Maps Embed API for at vise et interaktivt kort &mdash; klik for at åbne vejvisning.
          </p>
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
      </SectionCard>
    </div>
  );
}
