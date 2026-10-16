# Delhi Toofans — Official Website

Marketing site for **Delhi Toofans**, the Prime Volleyball League (PVL) team owned by Resolute Sports Private Limited.
Built with React 18, React Router 6, Tailwind CSS 3 and Swiper, bootstrapped with Create React App.

## Getting started

Requires Node.js 18+.

```bash
npm install
npm start            # dev server on http://localhost:3000
```

| Script                 | What it does                               |
| ---------------------- | ------------------------------------------ |
| `npm start`            | Run the dev server with hot reload         |
| `npm run build`        | Production build into `build/`             |
| `npm test`             | Jest + Testing Library in watch mode       |
| `npm run test:ci`      | Run the test suite once (for CI)           |
| `npm run lint`         | ESLint (CRA `react-app` config)            |
| `npm run format`       | Format the codebase with Prettier          |
| `npm run format:check` | Fail if any file is not Prettier-formatted |
| `npm run deploy`       | Build and publish `build/` to GitHub Pages |

## Project structure

```
src/
  App.js                 Routes (inner pages are lazy-loaded) + layout shell
  index.css              Tailwind layers and Swiper overrides
  data/                  Content lives here — edit these files to update the site
    players.js           Current squad: names, positions, bios, stats, images
    fixtures.js          Season fixtures and results
    standings.js         League table
    teams.js             Team names → logos, HOME_TEAM
    gallery.js           Gallery photos by season
    sponsors.js          Sponsors grouped by tier
    site.js              Nav links, contact details, social links, calendar links
  assets/
    players/<player-id>/ cutout.webp (list thumbnail), card.webp (portrait), info.webp (profile card)
    Banner/, Logo/       Home hero banners and logo
  components/
    layout/              Header, Footer, ScrollToTop
    common/              Home page sections (HeroSlider, AboutSection, Squad, Gallery, PointTable, Sponsors)
    ui/                  Reusable building blocks (Modal, PageBanner, YearGallery, AddToCalendar)
  pages/                 One folder per route (About, Squad, Fixtures & Results, Gallery, Sponsors, Contact, …)
```

## Common content updates

- **Squad changes** — add `cutout.webp` (≈400px wide), `card.webp` (595×842) and `info.webp` (1920×822) under
  `src/assets/players/<player-id>/`, then add the player to `src/data/players.js`. Both the home page squad and the
  Squad page update automatically.
- **Results / standings** — edit `src/data/fixtures.js` and `src/data/standings.js`. Team names must match a key in
  `src/data/teams.js`.
- **Sponsors** — add the logo under `src/pages/Sponsors/Sponsors/` and an entry in `src/data/sponsors.js`.

- **Contact form** — sends through Web3Forms (set `REACT_APP_WEB3FORMS_KEY` in `.env.local`) or a Microsoft 365
  Power Automate flow (`REACT_APP_CONTACT_FORM_URL`; see
  [docs/contact-form-microsoft-365.md](docs/contact-form-microsoft-365.md)). See `.env.example`, and rebuild after
  changing either value.

### Image guidelines

Export photos as **WebP** (quality ~80) and size them for how they are displayed — full-width banners at most 1920px
wide, gallery photos at most 1600px, thumbnails ~400px. Source files (`.psd`) belong in the design drive, not in this
repo.

## Brand tokens

Tailwind theme colours are defined in `tailwind.config.js`; use them instead of hex values:

| Token           | Hex       |
| --------------- | --------- |
| `toofan-purple` | `#3b0067` |
| `toofan-yellow` | `#ffbd00` |
