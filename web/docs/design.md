# Restaurant VINDE Design System

This document captures the visual direction from the Stitch screen `Homepage - Practical Concept` and translates it into implementation rules for the Next.js site.

Use this as the source of truth for the redesign of the public-facing website. Treat the Stitch HTML export as a visual reference only, not production code.

## Intent

The homepage should feel premium, warm, and editorial rather than generic or template-like.

The design direction is:

- modern Chinese buffet restaurant, not fast-food takeaway
- premium but approachable
- warm, cream-based surfaces with deep red and muted gold accents
- strong typography hierarchy with a serif display face and a clean sans-serif body face
- image-led storytelling with large, high-quality food and interior photography
- clear conversion paths for menu browsing, reservation intent, and contact

## Experience Principles

- Lead with atmosphere first, details second.
- Use fewer but larger sections with stronger visual hierarchy.
- Prioritize buffet, sushi, Mongolian BBQ, and group dining as the core value pillars.
- Present pricing and opening-hours information clearly, but do not let utility blocks dominate the page.
- Keep the design readable and calm on mobile; avoid dense card grids or cramped text.

## Core Visual Language

### Color

The Stitch concept uses a warm ivory background, deep oxblood red for emphasis, and muted gold for secondary emphasis.

Recommended tokens for implementation:

- `--background`: `#fff8ef`
- `--surface`: `#ffffff`
- `--surface-soft`: `#f5edde`
- `--surface-muted`: `#fbf3e4`
- `--border-soft`: `#e3beb8`
- `--foreground`: `#1e1b13`
- `--foreground-muted`: `#5a403c`
- `--primary`: `#610000`
- `--primary-strong`: `#8b0000`
- `--primary-soft`: `#ffdad4`
- `--accent`: `#775a19`
- `--accent-soft`: `#fed488`

Usage rules:

- Use `--background` for the page canvas.
- Use `--surface` and `--surface-soft` for cards and section containers.
- Use `--primary` for major headlines, strong CTAs, and key pricing moments.
- Use `--accent` sparingly for labels, secondary buttons, and visual highlights.
- Avoid introducing unrelated bright colors.

### Typography

The visual style depends heavily on contrast between editorial serif headlines and clean sans-serif body copy.

Recommended pairing:

- Headline/display: `Noto Serif` or a close premium serif
- Body/UI: `Manrope`

Usage rules:

- Use serif for hero headlines, section headings, price emphasis, and select pull quotes.
- Use sans-serif for body copy, navigation, labels, buttons, and utility information.
- Prefer large, confident headings with short line lengths.
- Use uppercase labels with wide tracking for section overlines and small metadata.

### Shape

The Stitch concept is mostly rectangular with soft rounding.

Recommended radius scale:

- small surfaces: `8px`
- cards and buttons: `12px`
- large containers: `16px`

Usage rules:

- Do not over-round everything.
- Hero imagery can remain nearly square-cornered or minimally rounded.
- Cards, utility panels, and buttons should have controlled softness rather than pill-heavy styling.

### Shadow and Depth

Use shadows to create separation, not spectacle.

Rules:

- Large imagery and feature cards may use medium to strong soft shadows.
- Utility cards should use subtle shadows or contrast through surface color.
- Avoid glassmorphism beyond the translucent navigation bar.

## Layout System

### Page Width

- Use a generous content width around `max-w-screen-2xl` for the homepage.
- Maintain strong horizontal padding on desktop and comfortable side padding on mobile.

### Section Rhythm

- Desktop sections should generally have `96px` vertical padding.
- Mobile sections should generally have `56px` to `72px` vertical padding.
- Alternate between open background sections and contained surface sections to create rhythm.

### Grid Behavior

- Hero: two columns on desktop, single column on mobile
- Feature pillars: three columns on desktop, stacked cards on mobile
- Pricing and practical information: two columns on desktop, stacked on mobile

## Homepage Composition

The homepage should follow this order unless content strategy changes:

1. Fixed translucent navigation
2. Hero with editorial image and pricing/CTA cluster
3. Narrow tasting ribbon with buffet highlights
4. Three pillar cards:
   sushi
   Mongolian BBQ
   selskaber / groups
5. Pricing and opening-hours section with practical info cards and map/contact details

This ordering works because it moves from emotional appeal to concrete proof to practical visit planning.

## Section Rules

### Navigation

- Fixed at top with soft translucent background and subtle blur
- Serif wordmark or brand text
- Compact uppercase nav links
- Primary reservation CTA on desktop

Do not make the navigation heavy or overly tall.

### Hero

The hero is the most important section to match closely.

Required characteristics:

- left side: overline, large serif headline, supporting paragraph, price block, primary CTA
- right side: tall editorial image
- optional floating quote or trust element layered near the image
- generous breathing room and immediate premium tone

Rules:

- Headline should be the largest type on the page.
- Keep hero copy concise.
- Price should feel integrated into the design, not like a discount badge.
- Use one strong primary CTA and avoid equal-weight competing buttons.

### Tasting Ribbon

- Full-width narrow strip
- Repeating uppercase highlights
- Use it as a pacing and message bridge between hero and content cards

This should remain visually quiet and not distract from the hero.

### Feature Pillars

The three cards are the homepage proof points.

Each card should include:

- strong image
- serif heading
- short descriptive paragraph
- three concise bullet points

Rules:

- Keep all cards consistent in structure.
- Do not overload these cards with multiple CTAs.
- Focus on photography quality and spacing.

### Pricing and Practical Information

This section should feel clear, trustworthy, and structured.

Include:

- buffet pricing breakdown
- child pricing note
- included extras if relevant
- opening hours
- address and phone
- map or location embed

Rules:

- Use typographic contrast to make prices easy to scan.
- Keep utility content structured in rows or panels.
- Avoid making this section visually heavier than the hero.

## Imagery Direction

The Stitch concept relies on polished editorial imagery. The redesign should use real or curated assets that follow the same principles.

Image rules:

- prefer warm lighting and rich food texture
- prioritize buffet spread, sushi detail, grill action, and restaurant interior atmosphere
- avoid low-resolution legacy images in hero or key feature positions
- crop tightly and intentionally
- maintain consistent color temperature across sections

If better photography is not yet available, use the strongest existing local images only in secondary placements and plan for asset replacement.

## Content Tone

Copy should be:

- concise
- confident
- descriptive but not exaggerated
- focused on quality, breadth, and atmosphere

Avoid:

- generic marketing filler
- too many exclamation marks
- long dense paragraphs
- mismatched tone between premium presentation and casual wording

## Responsive Behavior

### Mobile

- Collapse hero to a single column
- Keep the headline large but controlled
- Stack price card and CTA naturally under the intro copy
- Convert three-column layouts into vertical sections with clear spacing
- Ensure utility information remains scannable without side-by-side crowding

### Desktop

- Preserve strong asymmetry in the hero
- Keep the feature cards visually balanced
- Allow whitespace to create a premium feel

## Implementation Guidance For This Repo

Use the existing content and domain layer where possible.

Implementation rules:

- rebuild the Stitch look with native Next.js components
- do not paste the exported Stitch HTML into the app
- keep prices, hours, contact, and navigation data sourced from the existing JSON-backed data layer
- introduce design tokens in `src/app/globals.css`
- break the homepage into reusable section components rather than one large page file

Recommended component breakdown:

- `src/components/home/homepage-nav.tsx`
- `src/components/home/homepage-hero.tsx`
- `src/components/home/homepage-ribbon.tsx`
- `src/components/home/homepage-pillars.tsx`
- `src/components/home/homepage-practical-info.tsx`

## Non-Goals

For this phase, do not design around:

- takeaway checkout flows
- cart interactions
- admin tooling
- account features
- overly complex animations

The immediate goal is a production-ready public marketing homepage.

## Reference

Primary visual reference:

- Stitch project `Restaurant VINDE Premium Redesign`
- screen `Homepage - Practical Concept`
- local export: `stitch_exports/homepage-practical-concept.html`
- local preview image: `stitch_exports/homepage-practical-concept.png`
