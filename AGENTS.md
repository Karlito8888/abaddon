# AGENTS.md — abaddon (abaddon-pest-control)

One-page static site for Abaddon Pest Control Services Inc., a pest control operator in
Dasmariñas, Cavite (Philippines). Live at `https://abaddon.charmaweb.com`, presented as a case
study on `https://charmaweb.com/work/abaddon`.

## What is NOT here

| What | Where |
|---|---|
| General working rules (verify before claiming, DRY/KISS/YAGNI, scope, docs ladder, mandatory tools, git, explicit agreement) | `~/.omp/agent/RULES.md` |
| The workstation, the code graphs, the workflows | `~/.omp/agent/AGENTS.md` |
| Durable project facts (versions, measured gate, debts, open items) | `~/.omp/agent/bank/abaddon.md` |

## What exists

`src/pages/index.astro` stacks seven components in order: `Header`, then `<main>` with `Hero`,
`Services`, `About`, `Media`, `Contact`, then `Footer`. Contact and presentation only: no form,
no backend, no cookies. `src/pages/404.astro` is the not-found page (served by the Worker's
`not_found_handling: "404-page"`).

## Layout

- `src/site.ts`: single source for brand and contact data (phones, e-mail, address, GPS,
  Facebook, TikTok, FDA license, service areas, nav links) and the `telHref` / `whatsappHref` /
  `viberHref` helpers. Never type a contact string elsewhere.
- `src/layouts/Base.astro`: head (meta, Open Graph, icons, manifest), self-hosted Inter via the
  Astro fonts API (`--font-primary`), JSON-LD `LocalBusiness` built from `site.ts`. No
  `aggregateRating`: there is no verifiable review source, and Google refuses self-serving
  ratings on `LocalBusiness`.
- `src/components/<Name>.astro` + `<Name>.css` side by side. BEM class names, no CSS-in-JS.
  Inline scripts: the hamburger toggle (`Header`), the native `<dialog>` photo viewer
  (`Media`), the scene start (`Hero`).
- `src/styles/`: `global.css`, `typography.css`, `variables.css` (tokens).
- `src/assets/`: logos, photos and SVG pest icons, all served through `astro:assets` (webp
  generated at build). `Hero.css` reads the watermark through `--hero-watermark`, a 400 px webp
  from `getImage()`.
- `src/scripts/webgl-gate.ts` (copied from CharmaWeb): starts a three.js scene only with
  WebGL 2, after `load` + idle, pauses it off-screen, swallows failures so the static page
  stays.
- `src/scripts/hero-scene.ts`: particles sampled from the bright pixels of `abaddon-opt.png`
  (silver ring, gold A, each grain keeps its pixel colour) scatter, form the mark over the
  `.hero__logo-item--2` box in 2.5 s, hold 1.2 s, then disperse into faint drifting dust with
  pointer parallax. When formed it sets `hero--formed` on the section, which reveals the real
  logo; without WebGL the CSS fade on `.hero__logo-item--2` plays at 4.5 s instead. Caps: 1400
  grains (700 below 768 px), pixel ratio 1.5 (1 on mobile), additive blending, no MSAA. The
  canvas is fixed, so the gate's off-screen pause never fires: the scene watches the hero
  section itself and drops to half frame rate below it (Charles's choice, 2026-10-14; measured
  59 → 30 draw calls/s). `renderer.setSize` runs only on resize; scroll re-reads the mark's
  rect until the mark has formed.
- Fixed backdrop (`Hero.css`): the hero gradient, overlay, particle canvas and the 80% logo
  watermark are `position: fixed; z-index: -1` and sit behind the whole page; no ancestor may
  create a stacking context. Every other section keeps a 30% background (Charles's choice,
  2026-10-14) so the backdrop shows through; section titles are light and the About text sits
  on an opaque white card for contrast. Lighthouse's contrast audit cannot see the fixed layer
  and reports false positives on the dark sections (footer, contact): judge by eye there.
- Motion (`Base.astro`): `inView` reveals on `[data-animate="reveal"]` and staggered
  `reveal-stagger` (`data-delay` × 0.15 s). `[data-animate]` starts at `opacity: 0`; two nets
  keep content visible: `<noscript>` and `html.no-fx` after 5 s if the module never sets
  `data-fx`. Hover lifts use `translate` / `scale`, never `transform`: Motion owns `transform`
  on revealed elements. Animations are always on, as on charmaweb.com (no
  `prefers-reduced-motion` handling, Charles's decision).
- `src/assets/photos/`: the work photos. `Media.astro` globs them: `<Image>` thumbnails
  600×450 (1x/2x, cropped) and a 1600 px webp for the `<dialog>` via `getImage()`. The dialog
  walks the photos: arrows, arrow keys, horizontal swipe (`touch-action: pan-y`, `draggable=false`
  so `pointerup` survives the move), counter, wraps at both ends.
- `public/_headers` and `public/_redirects`: security headers, immutable cache on `/_astro/*`,
  vanity 301s (`/termite`, `/fb`, `/maps`, ...) supported natively by Workers static assets.

## Stack and gate

Astro 7, TypeScript 6 (`@astrojs/check` refuses TypeScript 7), `@astrojs/sitemap`, `sharp`,
`three` 0.186 (dynamic import, ~130 kB gzip, only when the scene can run), `motion` 14 (in the
Base bundle).
Bun only. Dev and preview on port 4330 (4329 is CharmaWeb).

```
bun run check   # astro check && astro build
```

Pitfall: `astro preview` daemonizes (`astro preview stop` to end it) and serves `dist/`, so
rebuild before re-testing.

## Deployment

Push to `main` → `.github/workflows/deploy.yml` → `bun run check` → `wrangler deploy` → Worker
`abaddon` (static assets only) on custom domain `abaddon.charmaweb.com`, Cloudflare account
`charmaweb11@gmail.com`. Repository secret `CLOUDFLARE_API_TOKEN` (same token as CharmaWeb,
`charmaweb-setup-deploy`), variable `CLOUDFLARE_ACCOUNT_ID`.

## Copy rules

English only. No em dash in user-facing text (full stop, colon or comma). Keep the FDA license
number and the service areas exactly as in `site.ts`.
