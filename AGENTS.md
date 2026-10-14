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
  The only client JavaScript is two inline scripts: the hamburger toggle (`Header`) and the
  native `<dialog>` photo viewer (`Media`).
- `src/styles/`: `global.css`, `typography.css`, `variables.css` (tokens).
- `src/assets/`: logos, photos and SVG pest icons, all served through `astro:assets` (webp
  generated at build). `Hero.css` reads the watermark through `--hero-watermark`, set from an
  `?url` import, because Astro drops originals that are only referenced through `<Image>`.
- `public/media/`: the 8 Facebook photos and 8 TikTok videos listed in `Media.astro`.
- `public/_headers` and `public/_redirects`: security headers, immutable cache on `/_astro/*`,
  vanity 301s (`/termite`, `/fb`, `/maps`, ...) supported natively by Workers static assets.

## Stack and gate

Astro 7, TypeScript 6 (`@astrojs/check` refuses TypeScript 7), `@astrojs/sitemap`, `sharp`.
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

The old Netlify deployment `abaddonpestcontrol.netlify.app` is not managed from this repo.

## Copy rules

English only. No em dash in user-facing text (full stop, colon or comma). Keep the FDA license
number and the service areas exactly as in `site.ts`.
