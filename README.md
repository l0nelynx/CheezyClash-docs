# CheezyClash Documentation

Official documentation for [CheezyClash](https://github.com/l0nelynx/CheezyClash) — built with [Starlight](https://starlight.astro.build/) (Astro).

**Live site:** https://l0nelynx.github.io/CheezyClash-docs/

## Development

```bash
npm install
npm run dev      # http://localhost:4321/CheezyClash-docs/
npm run build
npm run preview
```

## Structure

- `src/content/docs/en/` — English (default)
- `src/content/docs/ru/` — Russian (partial; missing pages fall back to English)
- `astro.config.mjs` — sidebar, locales, theme

## Deploy

Pushes to `main` run `.github/workflows/deploy.yml` → GitHub Pages.

To use a custom domain, add `public/CNAME` and configure DNS; update `site` in `astro.config.mjs` if the base path changes.

## License

Documentation text and site sources: GPL-3.0-or-later (same family as CheezyClash desktop). See [LICENSE](LICENSE).
