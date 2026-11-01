# The Wish Centre website

Website for The Wish Centre, the domestic abuse charity in Blackburn with Darwen. Built with [Astro](https://astro.build) as a static site and deployed on Render, the same setup as `loorg-website` and `tig-website`.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site
```

## Editing content (no layout changes needed)

Content lives in `src/data/`:

| File | What it holds |
|---|---|
| `site.js` | Address, opening hours, email, charity numbers, phone numbers, navigation, and the Exit site destination |
| `services.json` | Every service (refuge, IDVA, counselling...). `help: true` puts it on the homepage and I need help page |
| `giving.json` | Donation amounts, text-to-donate codes, donate links, fundraising contacts |
| `news.json` | News list |
| `resources.json` | Factsheets and other helplines |

Photos are in `public/images/`. Pages are in `src/pages/`.

## Safety features

- Sticky **Exit site** bar on every page; the Esc key does the same. Both hide the page and replace it in the browser history with a neutral page (`exitUrl` in `site.js`).
- No analytics, tracking, cookies or third-party scripts. Fonts are self-hosted.
- The I need help page has no images, so it loads fast on low data.

## Design

`PRODUCT.md` records the audience and product facts. `DESIGN.md` (plus `.impeccable/design.json`) records the visual system: the "cloth shop wall". Both were written with the impeccable skill in `.claude/skills/impeccable`, the same skill used on `tig-website` and `loorg-website`. The homepage direction brief is in `.impeccable/surfaces/`.

## Deploying on Render

`render.yaml` is a Render Blueprint: in Render choose **New > Blueprint** and point it at this repo. Or set it up by hand as a Static Site with build command `npm install && npm run build` and publish directory `dist`.

## Still to do before launch

Run `grep -rn PLACEHOLDER src astro.config.mjs public` to list them all. The main ones:
- Donate, JustGiving, factsheet download and news article links (`src/data/giving.json`, `resources.json`, `news.json`).
- Connect the training enquiry form, volunteer application and mailing list to a form service.
- Confirm consent for each survivor story, and the source and licence of each photo (some look like stock).
- Point thewishcentre.org at Render, then update `astro.config.mjs` and `public/robots.txt`.
- Add an Open Graph share image.
