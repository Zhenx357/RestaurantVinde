import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { getContactDetails, getNavigation } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Restaurant Vinde",
  description:
    "Buffet, sushi og takeaway i Aarhus V – oplev Restaurant Vinde.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigation = getNavigation();
  const contact = getContactDetails();
  const primaryPhone = contact.phoneNumbers[0]?.replace(" ", "");

  return (
    <html
      lang="da"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-[var(--border)] bg-[var(--surface)]">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-5 py-4">
              <Link
                href="/"
                className="text-lg font-semibold uppercase tracking-[0.2em] text-[var(--primary)]"
              >
                Restaurant Vinde
              </Link>
              <nav className="ml-auto">
                <ul className="flex flex-wrap items-center gap-4 text-sm font-semibold text-[var(--foreground)]">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <Link className="hover:text-[var(--primary)]" href={item.href}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex items-center gap-2 text-sm">
                <Link
                  href="/takeaway"
                  className="rounded-full border border-[var(--primary)] px-4 py-2 font-semibold text-[var(--primary)]"
                >
                  Takeaway
                </Link>
                <Link
                  href={`tel:${primaryPhone}`}
                  className="rounded-full bg-[var(--primary)] px-4 py-2 font-semibold text-white"
                >
                  Book bord
                </Link>
              </div>
            </div>
          </header>
          <main className="flex-1">
            <div className="mx-auto w-full max-w-5xl px-5 py-10">{children}</div>
          </main>
          <footer className="border-t border-[var(--border)] bg-white text-sm text-[var(--foreground)]">
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-5">
              <div>
                <p className="font-semibold">{contact.name}</p>
                <p>
                  {contact.address.line1}, {contact.address.line2}
                </p>
              </div>
              <div>
                <p>
                  Telefon:{" "}
                  {contact.phoneNumbers
                    .map((phone) => phone.replace("+45 ", ""))
                    .join(" / ")}
                </p>
                <p>
                  E-mail:{" "}
                  <a className="underline" href={`mailto:${contact.email}`}>
                    {contact.email}
                  </a>
                </p>
              </div>
            </div>
          </footer>
          <MobileActionBar
            phone={primaryPhone}
            mapUrl={contact.map.googleMapsUrl}
          />
        </div>
      </body>
    </html>
  );
}

function MobileActionBar({
  phone,
  mapUrl,
}: {
  phone?: string;
  mapUrl: string;
}) {
  if (!phone) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-[var(--border)] bg-white shadow-lg md:hidden">
      <div className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-[var(--primary)]">
        <LinkButton href={`tel:${phone}`}>Ring</LinkButton>
        <LinkButton href={mapUrl}>Find vej</LinkButton>
        <LinkButton href="#buffet-info">Se buffet</LinkButton>
      </div>
    </div>
  );
}

function LinkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      className="rounded-full border border-[var(--primary)] px-4 py-2 text-center"
      href={href}
    >
      {children}
    </Link>
  );
}
