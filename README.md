# SpeedIQ — Next.js

A faithful Next.js (App Router, TypeScript) build of the SpeedIQ creative-agency website,
ported from the original Claude design export in `_design/`.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Routes

| Path | Content |
| --- | --- |
| `/` | Landing page |
| `/services/brand-identity` | Brand & Corporate Identity |
| `/services/web-development` | Web & App Development |
| `/services/advertising-growth` | Advertising & Growth |
| `/services/3d-modeling` | 3D Exterior & Interior Modeling |
| `/services/events-exhibitions` | Events & Exhibitions |
| `/services/print-production` | Print & Production |

## Structure

- `app/` — routes, root layout, global CSS (design tokens, `@font-face`, keyframes, responsive rules).
- `components/landing/` — the landing sections, each ported to a React component:
  - `Hero`, `Studio`, `Services` (scroll-driven stack), `Belief`, `Results` (auto-rotating
    case-study carousel), `Process`, `Sectors`, `Gallery`, `Faq`, `Cta`.
  - `mockups.tsx` — the six service-card CSS-art mockups.
  - `brands.ts` — case-study data for the Results carousel.
- `components/` — shared `Reveal` (scroll-reveal), `Footer`, `common` (logo, mono label), `RawPage`.
- `public/fonts`, `public/logos`, `public/photos` — assets from the design export.

### Service pages

The six service pages are dense, static CSS-art layouts rendered through
`components/RawPage.tsx`, a small client component that injects an HTML fragment
(`app/services/<slug>/content.html`) and wires up the scroll-reveal and FAQ accordion in
`useEffect`.

- Four pages come from the design export: `_design/build_service.py` transforms each design
  `.dc.html` into its fragment — expanding the bar charts, dropping the design-tool template
  syntax, and fixing asset paths.
- Two pages — **Events & Exhibitions** and **Print & Production** — were not in the export.
  `_design/build_missing.py` generates their fragments from the shared chrome (nav, bars,
  footer) plus page-specific content authored in the same style, reusing the real logos/photos
  and the floor-plan / print-proof CSS-art mockups.

Interactions that were driven by the design tool's runtime are re-implemented natively:
animated hero/CTA bar charts (CSS keyframes), the scroll-driven services stack, the auto-rotating
results carousel, FAQ accordions, and scroll-reveal via `IntersectionObserver`.

## Notes

- Fonts (Instrument Sans, IBM Plex Mono) are self-hosted from `public/fonts` via `@font-face`.
- `_design/` holds the original export and the conversion scripts; it is not part of the app build.
