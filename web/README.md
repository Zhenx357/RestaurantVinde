## Getting Started

Install dependencies and run the dev server:

```bash
cd web
npm install
npm run dev
```

The site is served on [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create `web/.env.local` with the following variable so the location map embed can render:

```
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY=your-google-maps-embed-api-key
```

Enable the Google Maps Embed API in Google Cloud Console to obtain a key. The key is read at build-time only; never commit your `.env.local`.

## Scripts

- `npm run dev` – start the Next.js dev server
- `npm run build` – build for production
- `npm run start` – start the production server
- `npm run lint` – run ESLint
