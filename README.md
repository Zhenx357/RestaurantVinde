# Restaurant Vinde

Modern redesign of Restaurant Vinde with Next.js and Tailwind.

## Project Layout

- `/web` – Next.js 16 app with all modern pages, content JSON, and supporting libraries.
- `/old-site` – Archived static/AngularJS implementation kept for documentation/reference.

## Development

```
cd web
npm install
npm run dev
```

We load content such as menu items and buffet pricing from JSON files today, but the new data layer has been designed so we can later swap in a CMS or database-backed source without touching UI components.
