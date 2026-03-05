# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install          # Install dependencies
pnpm start            # Start dev server (ng serve)
pnpm build            # Production build
node dist/server/server.mjs  # Run SSR server after build
```

No test runner is configured in this project.

## Architecture

Angular 20 conference website for NG-DE (ng-de.org) with SSR via `@angular/ssr` and Tailwind CSS for styling.

**Entry points:**
- `src/main.ts` — browser bootstrap
- `src/main.server.ts` — server bootstrap
- `src/server.ts` — Express SSR server
- `src/app/app.config.ts` — app configuration (uses `provideZonelessChangeDetection` — **zoneless Angular**)

**Component structure:**
- `src/app/components/pages/` — routed page components (`HomeComponent`, `TalksArchiveComponent`, `CodeOfConductComponent`, `PrivacyPolicyComponent`, `ImprintComponent`)
- `src/app/components/page-sections/` — section components composed into pages (hero, speakers, schedule, tickets, sponsors, etc.)
- `src/app/components/` — shared UI components (countdown, mobile-menu, theme-toggle, video-modal)

**Services** (all `providedIn: 'root'`, data stored in Angular `signal()`):
- `SpeakerService` — speaker list as signal, hardcoded in service
- `TalkService` — talk list as signal, hardcoded in service
- `ScheduleService` — conference schedule as signal, hardcoded in service
- `WorkshopService` — workshops as signal, hardcoded in service
- `TicketService` — tickets with phase-based pricing
- `TicketPhaseService` — manages ticket pricing phases (Super Early Bird → Final Bird), date-driven
- `FlashSaleService` — time-boxed flash sale with manual override via `window.flashSale.*`
- `SponsorService`, `FaqService` — sponsor/FAQ data as signals

**Data pattern:** Conference content (speakers, talks, schedule, workshops) is hardcoded directly inside service `signal()` declarations — not fetched from an API. JSON assets (`src/assets/schedule.json`, `src/assets/talks-2025.json`, `src/assets/faq-data.json`) exist for archival/static use.

**Routing:** Flat routes — `/`, `/:year/talks`, `/code-of-conduct`, `/privacy-policy`, `/imprint`.

**Prerendering:** `angular.json` has `prerender.discoverRoutes: true` — all routes are prerendered at build time.

**Flash sale testing:** At runtime, `window.flashSale.enable/disable/reset/status()` is exposed in the browser console for manual override.

**Sections toggled off:** `ScheduleComponent` and `WorkshopsComponent` are commented out in `HomeComponent` — the data services exist but the sections are not rendered on the homepage.

**Component selector prefix:** `ngde-` (configured in `angular.json` schematics).
