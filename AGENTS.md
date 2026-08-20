# AGENTS.md — abaddon-fix (abaddon-pest-control)

Site vitrine one-page (React) pour une entreprise de désinsectisation/dératisation aux
Philippines (Dasmariñas, Cavite — Metro Manila).

## Ce qui n'est PAS ici

| Quoi | Où |
|---|---|
| Règles de travail générales — vérifier avant d'affirmer, DRY/KISS/YAGNI, périmètre, échelle de doc officielle, outils obligatoires, git, accord explicite | `~/.omp/agent/RULES.md` |
| Le poste, les graphes de code, les workflows | `~/.omp/agent/AGENTS.md` |
| Faits durables du projet — versions, gate mesuré, dettes, points ouverts | `~/.omp/agent/bank/abaddon-fix.md` |

## Ce qui existe

Une seule page (`src/App.tsx`) empile sept sections dans l'ordre : `Header`, `Hero`,
`Services`, `About`, `Media`, `Contact`, puis `Footer` hors du `<main>`. `Contact` liste
adresse, deux numéros mobiles (appel/WhatsApp/Viber), e-mail, Facebook, TikTok et les zones
desservies — c'est un site de contact/présentation, aucune logique métier (pas de formulaire,
pas de backend, pas de panier).

## Layout de `src/`

- `components/<Nom>/` — un dossier par section (`Header`, `Hero`, `Services`, `About`,
  `Media`, `Contact`, `Footer`), chacun `<Nom>.tsx` + `<Nom>.css` + `__tests__/<Nom>.test.tsx`
  (Testing Library + Jest, style CRA par défaut — voir `Header.test.tsx` pour la convention :
  mock des imports d'images, assertions sur rôle/texte visible).
- `styles/` — `global.css`, `typography.css`, `variables.css` : tokens partagés, pas de
  CSS-in-JS.
- `assets/images/`, `assets/icons/` (SVG des types de nuisibles), `assets/logo/`.

## Stack — la plus ancienne du parc

React `^18.2.0` · `react-scripts` `5.0.1` (Create React App) · TypeScript **`^4.9.5`** — seul
dépôt encore en TypeScript 4 (tous les autres sont en 5.9.x), et l'un des deux seuls encore
sur React 18. Node **18** pinné (`.nvmrc` + `NODE_VERSION` dans `netlify.toml`).

**Create React App est en fin de vie côté upstream** (maintenance minimale) — fait constaté,
aucune migration proposée ici.

## Gate

```
tsc --noEmit && bun run lint && CI=true bun run test
```

⚠️ **`CI=true` est vital, pas décoratif.** `test` = `react-scripts test`, qui démarre en mode
*watch* sans `CI=true` : un run non surveillé y reste bloqué **indéfiniment**, sans code de
sortie. C'est le piège n°1 de ce dépôt.

Le script mélange les runners : `gate` et `lint`/`test` passent par `bun run`, mais
`build:netlify` (utilisé par Netlify) appelle `npm run type-check && npm run build`. Ici
`package-lock.json` **est** committé — c'est npm, pas Bun, l'installeur réel ; `bun run
<script>` ne fait qu'exécuter le script du `package.json`.

## Déploiement

`netlify.toml` : `publish = "build"`, `command = "npm run build:netlify"`, `NODE_VERSION 18`,
redirection SPA catch-all (`/* → /index.html`), en-têtes de sécurité, et
`skip_processing = true` (Netlify ne retouche pas les assets — CRA gère déjà son propre
build). **Aucune CI GitHub.**

## Pièges vérifiés

- `src/assets/images/hero-bg.jpg` fait **0 octet** — asset cassé, présent tel quel.
- `devDependencies.typescript-eslint-parser: ^22.0.0` est un nom de paquet obsolète
  (remplacé depuis longtemps par `@typescript-eslint/parser`) avec une version inhabituelle ;
  `node_modules` n'est pas installé dans ce dépôt, donc son installabilité n'est **pas**
  vérifiée — à contrôler avant d'y toucher.
- `Contact.tsx` porte de gros blocs JSX commentés (numéro FDA, intro longue) : ne pas les
  « nettoyer » sans demander, c'est peut-être un texte gardé en réserve.

## C'est la copie de référence

`~/Bureau/abaddon` (même distant `Karlito8888/abaddon`) traîne 2 commits refusés en avance
rapide depuis le 2026-08-20 ; **ce dépôt-ci est aligné sur `origin/main`** et porte en plus
deux correctifs (`aspect-ratio` sur les images hero contre le CLS, audit Lighthouse). Il porte
aussi une documentation propre au projet plus fournie (`COORDINATES.md`,
`CSS_ARCHITECTURE.md`, `deploy.md`, `IMAGES_GUIDE.md`, `MEDIA_WORKFLOW.md`,
`NETLIFY_DEBUG.md`, `REDEPLOY_GUIDE.md`, `SEO_RESEARCH.md`, `SETUP_GUIDE.md`,
`SOCIAL_MEDIA.md`, `TYPOGRAPHY_GUIDE.md`) et `public/sitemap.xml` + `robots.txt`, absents de
`abaddon`. Détail dans `~/.omp/agent/bank/abaddon-fix.md`.

## Travail non commité

2 fichiers seulement (`.gitattributes`, `.gitignore`) — dépôt globalement propre.
