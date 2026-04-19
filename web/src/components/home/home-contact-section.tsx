import Link from "next/link";

type ContactDetails = {
  name: string;
  address: {
    line1: string;
    line2: string;
  };
  map: {
    googleMapsUrl: string;
  };
  phoneNumbers: string[];
  email: string;
};

type OpeningHours = {
  regular: Array<{
    days: string;
    open: string;
    close: string;
  }>;
  takeaway: Array<{
    label: string;
    open: string;
    close: string;
  }>;
  notes: string[];
};

type HomeContactSectionProps = {
  contact: ContactDetails;
  hours: OpeningHours;
};

const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2222.062080789851!2d10.15555467710323!3d56.16450627329598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c3f9152285117%3A0xb35a0ce8fa7cc16!2sViborgvej%20161B%2C%208210%20Aarhus%20V!5e0!3m2!1sen!2sdk!4v1714488888888!5m2!1sen!2sdk";

export function HomeContactSection({
  contact,
  hours,
}: HomeContactSectionProps) {
  const primaryPhone = contact.phoneNumbers.join(" / ").replace(/\+45\s/g, "");

  return (
    <section
      id="contact"
      className="relative border-t border-[color:rgba(227,190,184,0.14)] bg-[var(--surface-low)] py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="mb-20 text-center">
          <h2 className="font-display text-4xl tracking-[-0.03em] text-[var(--primary)] lg:text-5xl">
            Åbningstider & Kontakt
          </h2>
        </div>

        <div className="grid overflow-hidden bg-[var(--background)] shadow-[0_24px_80px_rgba(97,0,0,0.08)] lg:grid-cols-2">
          <div className="border-b border-[color:rgba(227,190,184,0.2)] p-12 lg:border-b-0 lg:border-r lg:p-20">
            <div className="mb-12">
              <h3 className="mb-6 flex items-center gap-3 font-display text-2xl text-[var(--primary)]">
                <ScheduleIcon />
                Åbningstider
              </h3>
              <ul className="space-y-4 text-[var(--foreground-muted)]">
                {hours.regular.map((slot) => (
                  <li
                    key={slot.days}
                    className="flex items-center justify-between border-b border-[color:rgba(227,190,184,0.15)] pb-2"
                  >
                    <span>{slot.days}</span>
                    <span className="font-semibold text-[var(--tertiary)]">
                      {slot.open} - {slot.close}
                    </span>
                  </li>
                ))}
                {hours.takeaway.map((slot) => (
                  <li
                    key={slot.label}
                    className="flex items-center justify-between border-b border-[color:rgba(227,190,184,0.15)] pb-2"
                  >
                    <span>Take-away alle dage</span>
                    <span className="font-semibold text-[var(--tertiary)]">
                      {slot.open} - {slot.close}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[10px] italic text-[color:rgba(90,64,60,0.7)]">
                ({hours.notes[0]})
              </p>
            </div>

            <div>
              <h3 className="mb-6 flex items-center gap-3 font-display text-2xl text-[var(--primary)]">
                <LocationIcon />
                Lokation & Kontakt
              </h3>

              <address className="space-y-4 not-italic text-[var(--foreground-muted)]">
                <div className="flex items-start gap-3">
                  <MapPinIcon />
                  <div>
                    <p className="mb-1 font-bold text-[var(--primary)]">
                      {contact.name}
                    </p>
                    <p>
                      {contact.address.line1}
                      <br />
                      {contact.address.line2}
                    </p>
                    <p className="mt-2 text-sm italic text-[color:rgba(90,64,60,0.8)]">
                      Vi ligger lige ved COOP365 og LIDL. Tæt på PUREGYM.
                    </p>
                  </div>
                </div>

                <p className="flex items-center gap-3">
                  <PhoneIcon />
                  {primaryPhone}
                </p>
                <p className="flex items-center gap-3">
                  <MailIcon />
                  <Link
                    href={`mailto:${contact.email}`}
                    className="transition-colors hover:text-[var(--primary)]"
                  >
                    {contact.email}
                  </Link>
                </p>
              </address>
            </div>
          </div>

          <div className="relative min-h-[400px]">
            <iframe
              className="h-full min-h-[400px] w-full border-0"
              src={mapEmbedSrc}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={`Kort over ${contact.name}`}
            />
            <Link
              href={contact.map.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 left-6 inline-flex items-center rounded-[var(--radius-xl)] bg-[color:rgba(255,248,239,0.94)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--primary)] shadow-[0_18px_30px_rgba(30,27,19,0.12)]"
            >
              Find vej
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function iconClassName() {
  return "h-5 w-5 flex-none text-[var(--accent)]";
}

function ScheduleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClassName()}>
      <circle cx="12" cy="12" r="8" strokeWidth="1.8" />
      <path d="M12 7.5v5l3.5 2" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClassName()}>
      <path
        d="M12 20s6-4.7 6-10a6 6 0 1 0-12 0c0 5.3 6 10 6 10Z"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.2" strokeWidth="1.8" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClassName()}>
      <path
        d="M12 20s6-4.7 6-10a6 6 0 1 0-12 0c0 5.3 6 10 6 10Z"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.2" strokeWidth="1.8" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClassName()}>
      <path
        d="M7.5 4.5h3l1.2 3.4-1.7 1.7a14 14 0 0 0 4.3 4.3l1.7-1.7 3.4 1.2v3c0 .6-.4 1-1 1C10 18.4 5.6 14 5.5 5.5c0-.6.4-1 1-1Z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClassName()}>
      <rect x="4" y="6.5" width="16" height="11" rx="1.5" strokeWidth="1.8" />
      <path d="m5 8 7 5 7-5" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
