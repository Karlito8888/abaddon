# Abaddon Pest Control

One-page static site for Abaddon Pest Control Services Inc., an FDA-licensed pest control operator in Dasmariñas, Cavite. Built with Astro 7, no client framework.

```bash
bun install
bun run dev      # http://localhost:4330
bun run check    # astro check + production build into dist/
```

- Business data (name, phones, e-mail, address, coordinates, social links, FDA license, service areas) lives in `src/site.ts`. The layout, the components and the JSON-LD all read from it.
- Photos shown in the "Our Work in Action" section live in `src/assets/photos/` (every `.jpg` there is picked up by `src/components/Media.astro`, 600×450 thumbnails and a 1600 px dialog variant generated at build).
- Deployment: Cloudflare Worker `abaddon`, built and deployed by GitHub Actions on every push to `main`.
