import { getContactDetails, getOpeningHours } from "@/lib/content";

export default function ContactPage() {
  const contact = getContactDetails();
  const hours = getOpeningHours();

  return (
    <div className="space-y-6 text-sm text-[var(--foreground)]">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
          Kontakt
        </p>
        <h1 className="text-3xl font-semibold text-[var(--primary)]">Kontakt og åbningstider</h1>
        <p className="text-[var(--foreground)]/80">
          Ét sted at vedligeholde adresse, telefon, mail og tidsplan. Perfekt til kommende admin-panel.
        </p>
      </header>

      <section className="space-y-2 rounded-2xl border border-[var(--border)] bg-white p-4">
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
      </section>

      <section className="space-y-2 rounded-2xl border border-[var(--border)] bg-white p-4">
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
      </section>

      <section className="rounded-2xl border border-[var(--border)] bg-white p-4">
        <p>Kort: {contact.map.googleMapsUrl}</p>
      </section>
    </div>
  );
}
