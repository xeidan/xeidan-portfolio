# xeidan.com — Portfolio rebuild

A clean Next.js rebuild of Daniel Keme's software engineering portfolio.

## Stack

- Next.js App Router
- React 19 + TypeScript
- Custom CSS design system with tokens and responsive layouts (kept intentionally dependency-light)
- Lucide icons
- Static, typed project content with generated project case-study routes

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Structure

- `src/app` — pages, metadata, and project case-study routes
- `src/components` — shared site navigation, project cards, and visual project artwork
- `src/content` — profile, experience, and typed project content
- `public/documents` — résumé PDF
- `public/projects` — preserved screenshots from the prior portfolio

## Content accuracy note

Project case studies are intentionally written as implementation summaries and engineering notes. Add validated details, screenshots, architecture diagrams, public repository links, and measurable outcomes only where they can be substantiated. The GitHub URL in `src/content/profile.ts` should be verified before publishing; add the exact LinkedIn profile URL once confirmed.
