# Viktoria & Florian — 04.09.2027

Wedding information page for our ceremony at Villa Finetta, Salsomaggiore Terme, Italy.

## What's inside

- **Hero** with live countdown to the big day
- **Our story** — how we met in Italy
- **Wedding details** — date, venue, Google Maps link
- **Schedule** — Saturday ceremony + Sunday brunch
- **Travel** — flights, car, taxi (+39 324 682 0285), villa gate info
- **Dress code** with color palette swatches
- **Photo gallery** placeholders (swap in real images when ready)
- **FAQ** — kids, food, gifts, weather, …
- DE / EN language toggle

## Hosting (GitHub Pages)

1. Push all files to the repo root (or a `/docs` folder)
2. Go to **Settings → Pages** and set the source to the branch/folder above
3. Done — no build step needed, everything runs client-side

## Adding real photos

Open [sections.jsx](sections.jsx) and search for `<PhotoPlaceholder`. Replace each one with:

```jsx
<img src="your-photo.jpg" alt="caption" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
```

## Customisation

The tweaks panel (bottom-right corner in the browser) lets you switch:
- **Color palette** — Romantic & airy · Rustic Tuscan · Editorial ivory · Mediterranean
- **Font pairing** — Cormorant + Italianno · Cormorant Infant · Cormorant only
- **Language** — Deutsch / English

Content lives in [content.jsx](content.jsx) — all text is in one place for easy editing.
