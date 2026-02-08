# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start development server (http://localhost:3000)
- `npm run build` — Production build
- `npm start` — Serve production build
- `npm run lint` — Run Next.js linter

## Architecture

This is a simple Next.js 16 app using the App Router with React 19. There is no TypeScript, no testing framework, and no CSS framework — styling is done with plain CSS in `app/globals.css`.

All pages are server components by default (no `"use client"` directives). The app currently has a single page (`app/page.js`) with a root layout (`app/layout.js`). The `next.config.js` is empty/default.
