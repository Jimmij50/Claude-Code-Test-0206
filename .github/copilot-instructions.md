# Project Guidelines for AI coding agents

## Summary
This is a small Next.js 16 app (App Router) using React 19. The repo is intentionally minimal: no TypeScript, no test framework, and styling is plain CSS in `app/globals.css`. Use this file as the primary guidance for AI assistants (merge/append content from `CLAUDE.md` when relevant).

## Code Style
- Use the existing JavaScript + React patterns found in [app/layout.js](app/layout.js) and [app/page.js](app/page.js).
- Keep components as server components by default (no `"use client"` unless necessary).
- Follow simple, readable formatting consistent with the codebase — prefer existing idioms over introducing new libraries.

## Architecture
- Single-page Next.js App Router structure: root layout in [app/layout.js](app/layout.js), main page in [app/page.js](app/page.js).
- Styling is global CSS in [app/globals.css](app/globals.css); prefer small, focused CSS edits there.

## Build and Test (commands agents may run)
- Install dependencies: `npm install`
- Dev server: `npm run dev` (http://localhost:3000)
- Build: `npm run build`
- Serve production: `npm start`
- Lint: `npm run lint`

## Project Conventions
- No TypeScript: generate JavaScript only unless the user requests a migration.
- No test harness present: do not add tests unless requested — instead, keep changes minimal and easy to run locally.
- Keep changes limited to the `app/` directory unless a config or dependency change is required.

## Integration Points
- The app is self-contained; there are no external APIs or databases configured.
- Review `next.config.js` before adding build-time or runtime integrations.

## Security & Sensitive Areas
- There are no secrets in this repo. If asked to add secrets or keys, prompt the user and do not commit them.

## When Merging Existing Guidance
- If `CLAUDE.md` or other agent-specific files exist, preserve their runnable commands and architecture notes. Prefer preserving accurate scripts from [package.json](package.json).

## Quick Notes for Human Reviewers
- Keep changes small and runnable with the listed npm scripts.
- If you want tests or TypeScript added, confirm with the repo owner first.

---
If any section is unclear or you want conventions expanded (linter config, formatting rules, or CI), tell me which area to elaborate.
