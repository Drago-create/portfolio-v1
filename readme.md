# Portfolio

A single-page personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. It includes a hero, selected work, about, experience, and contact section — plus a light/dark theme toggle and a responsive mobile menu.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # lint
```

## Make it yours

Nearly all of the content lives in one file: [`src/content/site.ts`](src/content/site.ts).

Update:

- `name`, `initials`, `role`, `location`, `email`
- `headline` and `description`
- `socials` (GitHub, LinkedIn, X, email)
- `about`, `facts`, and `skills`
- `projects` (title, summary, year, tags, links, and visual variant)
- `experience` (role, company, period, bullets, tags)

The project previews (`dashboard`, `mobile`, `editor`) are illustrated with CSS and SVG, so there are no images to source.

Other common tweaks:

| What                     | Where                                 |
| ------------------------ | ------------------------------------- |
| Colors and theme         | `src/app/globals.css`                 |
| Page title / description | `src/app/layout.tsx`                  |
| Favicon                  | `src/app/icon.svg`                    |
| Sections order           | `src/app/page.tsx`                    |

## Structure

```
src/
├─ app/
│  ├─ globals.css      # theme tokens, utilities, animations
│  ├─ icon.svg         # favicon
│  ├─ layout.tsx       # fonts, metadata, theme script
│  └─ page.tsx         # page composition
├─ components/         # header, hero, projects, about, experience, contact, footer
└─ content/site.ts     # all site content
```

The theme is applied before paint with a small inline script and saved to `localStorage`; it falls back to the operating system preference.
