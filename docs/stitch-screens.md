# Stitch Screen Inventory

Source project: `Restaurant VINDE Premium Redesign`
Project id: `projects/10480492658812390236`
Last synced: 2026-04-19

## Purpose

This file tracks which Stitch screens currently matter for implementation in the web app. It keeps the design handoff in the repo so development does not depend on re-querying Stitch for basic context.

## Active Screens

### Homepage - Heritage Red Header & Footer

- Screen id: `projects/10480492658812390236/screens/0110b4ce05ce46da805d0e85512b3590`
- Device type: `DESKTOP`
- Reported size: `2560 x 4738`
- Screen instance size on canvas: `1280 x 2369`
- Notes: Alternate homepage exploration with a stronger heritage-red chrome treatment in the header and footer.
- Screenshot export: `stitch_exports/homepage-heritage-red-header-footer.png`
- HTML export file: `projects/10480492658812390236/files/1ab6368e3b0049f8aa3ce9a637483de2`
- Local HTML export: `stitch_exports/homepage-heritage-red-header-footer.html`
- Additional artifact: This export is useful as visual and structural reference only; do not treat the generated HTML as production architecture.

### Menukort - Unified List Style

- Screen id: `projects/10480492658812390236/screens/5acf08d131d741e4b1a3911e202c9f7a`
- Device type: `DESKTOP`
- Reported size: `2560 x 7760`
- Notes: Menu page concept using a unified list presentation rather than separate card-heavy category blocks.
- Screenshot export: `stitch_exports/menukort-unified-list-style.png`
- HTML export file: `projects/10480492658812390236/files/154c9651194f44798083104e5b68a8cd`
- Local HTML export: `stitch_exports/menukort-unified-list-style.html`
- Additional artifact: This export is useful as visual and structural reference only; do not treat the generated HTML as production architecture.

### Menukort - Minimal Sticky Nav V1

- Screen id: `projects/10480492658812390236/screens/2f272c237a0a455b8903cb7dfa89c641`
- Device type: `DESKTOP`
- Reported size: `2560 x 6458`
- Notes: Alternate menu page concept with a lighter sticky navigation treatment.
- Screenshot export: `stitch_exports/menukort-minimal-sticky-nav-v1.png`
- HTML export file: `projects/10480492658812390236/files/3634d13c272e456a8896c20f3fcc40a4`
- Local HTML export: `stitch_exports/menukort-minimal-sticky-nav-v1.html`
- Additional artifact: This export is useful as visual and structural reference only; do not treat the generated HTML as production architecture.

## Other Screens In Project

### image.png

- Screen id: `projects/10480492658812390236/screens/16159781415045127028`
- Reported size: `1280 x 2201`
- Notes: Appears to be an image-based or earlier reference screen rather than the main coded target.

## Screen Instances On Canvas

These are the screen instances returned by the project metadata. Some are hidden or appear to be archived iterations.

| Instance id | Source | Label | Size | Hidden |
| --- | --- | --- | --- | --- |
| `ba3bca7a-32a5-4d89-b25d-34105b0ffcb5` | `screens/16159781415045127028` | `-` | `1280 x 2201` | no |
| `0110b4ce05ce46da805d0e85512b3590` | `screens/0110b4ce05ce46da805d0e85512b3590` | `Homepage - Heritage Red Header & Footer` | `1280 x 2369` | no |
| `401804000abb4349bc4ca88c845fd08e` | `screens/401804000abb4349bc4ca88c845fd08e` | `-` | `1280 x 4312` | yes |
| `54c42156d194425b9a612872ad98c177` | `screens/54c42156d194425b9a612872ad98c177` | `-` | `1280 x 2942` | yes |
| `a461134ca81d40e78eeed95eae5bc7f5` | `screens/a461134ca81d40e78eeed95eae5bc7f5` | `-` | `1280 x 4409` | yes |

## Design System Instances

The project canvas also contains design system instances. These are useful as visual references for theme and component language but are not app screens.

| Instance id | Asset | Size |
| --- | --- | --- |
| `assets-2ff8a4fbec4a42d0b8931af0548414ca-1776552037846` | `assets/2ff8a4fbec4a42d0b8931af0548414ca` | `960 x 540` |
| `assets-3c15598a96e54a0cae042f7ae26ce979-1776538530526` | `assets/3c15598a96e54a0cae042f7ae26ce979` | `960 x 540` |

## Current Build Target

For the current public website redesign, implement against:

- `Homepage - Heritage Red Header & Footer` as the primary homepage reference
- `Menukort - Unified List Style` as the primary menu page reference
- the Stitch design system localized in `docs/design-system.md`
- existing content/data structures in `web/src/content/**`

Ignore hidden Stitch screen instances unless they are explicitly revived as references later.
