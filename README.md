# The Heliotrope Tarot — Website

Plain static HTML/CSS site (no build step) for theheliotropetarot.com,
deployed via Vercel from this GitHub repo.

## Structure
- `index.html` — Home
- `about.html` — About / the channel's story
- `readings.html` — Personal Readings (email contact + safety note)
- `shop.html` — links to the Etsy shop
- `connect.html` — all social/support links
- `assets/css/style.css` — one shared stylesheet, brand colours and type
- `assets/fonts/` — IM Fell English + Lora (brand fonts)
- `assets/img/` — logo, night-sky background

## Editing
Every page repeats its own header/nav and footer (no build tooling, so no
shared includes). If you change the nav or footer, update it in all five
`.html` files.

## Adding the first YouTube video
In `index.html`, find the `<!-- HOW TO ADD YOUR FIRST VIDEO -->` comment in
the "Latest Reading" section and follow the instructions there.

## Local preview
No install needed. From this folder, run:
```
python -m http.server 5173
```
Then open http://localhost:5173 in a browser.

## Deploying
Push to the `main` branch on GitHub; Vercel (connected to this repo) deploys
automatically. No environment variables or build command are required —
Vercel should detect this as a static site (Framework Preset: "Other",
Build Command: none, Output Directory: `.`).
