# Restaurant VINDE Design System

Source: Stitch project `Restaurant VINDE Premium Redesign` (`projects/10480492658812390236`)
Last synced: 2026-04-19

## Summary

This document localizes the current Stitch design system so implementation work can happen from repo-owned files instead of live tool state.

- Design direction: "The Nordic Silk Road"
- Intent: combine Scandinavian clarity with Chinese richness
- Product posture: premium editorial restaurant experience, not a generic buffet template
- Primary implementation principle: use reusable components and tokenized surfaces instead of page-specific one-off styling

## Core Strategy

The UI should feel like a refined host: restrained in structure, rich in presentation. Stitch explicitly pushes the design away from boxed template layouts and toward asymmetry, whitespace, and food-forward imagery.

Key rules:

- Prefer tonal layering over visible section dividers.
- Use large serif headlines against smaller technical sans labels.
- Keep imagery warm, high-contrast, and dominant.
- Use asymmetrical composition where it improves hierarchy.
- Preserve a parchment-like surface stack rather than flat white cards everywhere.

## Stitch Design Brief

### Overview & Creative North Star

This design system is built upon the "Nordic Silk Road" philosophy, a fusion of Scandinavian functionalism and Chinese gastronomy. The UI should feel curated, premium, and editorial.

Creative North Star: "The Digital Sommelier"

- Quiet in structure
- Vibrant in product presentation
- Intentional asymmetry
- High-fidelity imagery offset by generous whitespace
- Dramatic type scale with architectural rhythm

### Colors & Surface Philosophy

The palette is a dialogue between warm oriental richness and cool Nordic restraint.

Rules:

- Do not use 1px solid borders for sectioning.
- Define sections through surface shifts instead of hard lines.
- Use `surface` as the page base.
- Use `surface-container-low` and `surface-container` to create zones.
- Use `surface-container-lowest` on top of muted sections for softly lifted cards.
- For floating navigation or overlays, use semi-transparent surface with about `20px` backdrop blur.
- Avoid large flat primary blocks. Prefer subtle gradients from `primary` to `primary-container`.
- Use `secondary` as a muted gold accent, not a dominant fill color.

### Typography

Font pairing from Stitch:

- Display and headlines: `Noto Serif`
- Body and UI: `Manrope`

Hierarchy rules:

- Use large serif headlines with about `-0.02em` letter spacing.
- Use smaller sans labels for prices, categories, and metadata.
- Lean into strong contrast between editorial heading scale and restrained UI text.

### Elevation & Depth

Depth should come from tonal stacking first, not obvious shadows.

Rules:

- Higher surfaces should feel closer through layering.
- If a shadow is needed, use a broad ambient blur at low opacity.
- For inputs and delicate edges, use an almost invisible ghost border based on `outline-variant` at roughly 15% opacity.

### Component Language

Buttons:

- Primary: `primary` fill, white text, tactile radius
- Secondary: `secondary` for high-value actions like booking
- Tertiary: no fill or border, editorial text treatment with underline accent

Cards and lists:

- No divider lines
- Group with spacing and muted surfaces
- Let imagery occasionally break the box to avoid a templated look

Inputs:

- Minimal
- No filled background by default
- Bottom stroke or ghost border treatment

Custom motif:

- "Tasting Ribbon" component with horizontally flowing labels for specials or ingredients

### Do

- Use extreme whitespace
- Use asymmetrical layouts
- Use food-forward visuals
- Keep text dark but softened, not pure black

### Do Not

- Do not use opaque borders as the default structure
- Do not use `#000000`
- Do not apply the same small radius to every element
- Do not flatten the entire site into identical cards

### Accessibility

- Serif headlines must still meet contrast requirements
- Interactive targets must stay at least `44px` tall
- Body text should not go below `0.875rem`

## Token Export

These tokens come from Stitch `designTheme.namedColors` and should be treated as the canonical visual palette for the current redesign.

### Base Tokens

| Token | Value |
| --- | --- |
| `background` | `#fff8ef` |
| `on-background` | `#1e1b13` |
| `primary` | `#610000` |
| `primary-container` | `#8b0000` |
| `primary-fixed` | `#ffdad4` |
| `primary-fixed-dim` | `#ffb4a8` |
| `secondary` | `#775a19` |
| `secondary-container` | `#fed488` |
| `secondary-fixed` | `#ffdea5` |
| `secondary-fixed-dim` | `#e9c176` |
| `tertiary` | `#2c2c2c` |
| `tertiary-container` | `#434242` |
| `outline` | `#8e706b` |
| `outline-variant` | `#e3beb8` |
| `surface` | `#fff8ef` |
| `surface-container-low` | `#fbf3e4` |
| `surface-container` | `#f5edde` |
| `surface-container-high` | `#efe7d9` |
| `surface-container-highest` | `#e9e2d3` |
| `surface-container-lowest` | `#ffffff` |
| `surface-variant` | `#e9e2d3` |
| `on-surface` | `#1e1b13` |
| `on-surface-variant` | `#5a403c` |
| `error` | `#ba1a1a` |
| `error-container` | `#ffdad6` |

### Overrides

| Token | Value |
| --- | --- |
| `overrideNeutralColor` | `#FDF5E6` |
| `overridePrimaryColor` | `#8B0000` |
| `overrideSecondaryColor` | `#C5A059` |
| `overrideTertiaryColor` | `#1A1A1A` |

### Shape & Spacing

- Roundness: `ROUND_FOUR`
- Practical mapping for code: use a tighter radius for architecture and a softer radius for controls
- Stitch spacing scale: `3`

## Implementation Mapping

Use these semantic mappings in the web app:

- Page background: `background`
- Main text: `on-background` or `on-surface`
- Soft body text: `on-surface-variant`
- Raised cards: `surface-container-lowest`
- Section blocks: `surface-container-low` or `surface-container`
- Section separation: tonal changes, not borders
- Premium hero surfaces: gradient from `primary` to `primary-container`
- Gold accent details: `secondary` and `secondary-container`

## Working Rules For This Repo

- Keep global tokens in `web/src/app/globals.css`
- Keep page copy and business content in `web/src/content/**`
- Build pages from reusable sections, not from generated raw HTML
- Use the Stitch screen exports as visual references, not as the application architecture
