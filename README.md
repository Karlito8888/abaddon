# Abaddon Pest Control

One-page static site for Abaddon Pest Control Services Inc., an FDA-licensed pest control operator in Dasmariñas, Cavite. Built with Astro 7, no client framework.

```bash
bun install
bun run dev      # http://localhost:4330
bun run check    # astro check + production build into dist/
```

- Business data (name, phones, e-mail, address, coordinates, social links, FDA license, service areas) lives in `src/site.ts`. The layout, the components and the JSON-LD all read from it.
- Photos shown in the "Our Work in Action" section live in `public/media/facebook/` (`abaddon-1..8.jpg`); the list is in `src/components/Media.astro`.
- Deployment: Cloudflare Worker `abaddon`, built and deployed by GitHub Actions on every push to `main`.
