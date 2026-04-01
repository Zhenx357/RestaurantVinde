import Image from "next/image";
import Link from "next/link";

type LocationMapEmbedProps = {
  lat: number;
  lng: number;
  zoom?: number;
  label: string;
  googleMapsUrl: string;
  addressLines: string[];
  heightClass?: string;
  fallbackImage?: string;
};

const EMBED_BASE = "https://www.google.com/maps/embed/v1/place";

function buildEmbedSrc({
  lat,
  lng,
  zoom,
}: {
  lat: number;
  lng: number;
  zoom?: number;
}) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;
  if (!apiKey) {
    return null;
  }

  const params = new URLSearchParams({
    key: apiKey,
    q: `${lat},${lng}`,
    maptype: "roadmap",
  });

  if (zoom) {
    params.append("zoom", zoom.toString());
  }

  return `${EMBED_BASE}?${params.toString()}`;
}

export function LocationMapEmbed({
  lat,
  lng,
  zoom = 16,
  label,
  googleMapsUrl,
  addressLines,
  heightClass = "h-80",
  fallbackImage,
}: LocationMapEmbedProps) {
  const embedSrc = buildEmbedSrc({ lat, lng, zoom });

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[0_20px_45px_rgba(0,0,0,0.08)]">
      <div className={`relative w-full ${heightClass} bg-[var(--background)]`}>
        {embedSrc ? (
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            src={embedSrc}
            title={`Kort over ${label}`}
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : fallbackImage ? (
          <Image
            src={fallbackImage}
            alt={`Kort over ${label}`}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm text-[var(--foreground)]/70">
            Tilføj <code>NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY</code> i{" "}
            <code>.env.local</code> for at vise kortet.
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] px-5 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--accent)]">
            Find os
          </p>
          <p className="text-sm font-semibold text-[var(--primary)]">{label}</p>
          <p className="text-sm text-[var(--foreground)]/80">
            {addressLines.join(", ")}
          </p>
        </div>
        <Link
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[var(--primary)]/25 hover:bg-[var(--primary-dark)]"
        >
          Find vej med Google Maps
        </Link>
      </div>
    </div>
  );
}
