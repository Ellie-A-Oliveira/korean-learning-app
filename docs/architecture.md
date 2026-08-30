# Architecture

## Overview

Hangeul Path is a client-side Angular 20 learning app built from standalone components. It presents Korean-character lessons, vocabulary practice, and spaced-repetition review while retaining learner progress in the browser.

```text
main.ts
  └─ AppComponent
       └─ LayoutComponent
            └─ RouterOutlet
                 └─ Lazy-loaded feature component
                       ├─ curriculum data
                       └─ StudyStateService
                            └─ localStorage (hangeul-path-v2)
```

## Layers

| Area | Location | Responsibility |
| --- | --- | --- |
| Application bootstrap | `src/main.ts`, `src/app/app.component.ts` | Starts Angular, registers routing and animations, and renders the shared layout. |
| Navigation | `src/app/app.routes.ts` | Defines routes and lazy-loads each screen component. |
| Domain and state | `src/app/core/` | Defines durable models and owns persisted study progress plus review scheduling. |
| Curriculum | `src/app/data/study-data.ts` | Stores lesson, character, and vocabulary content independently of the UI. |
| Features | `src/app/features/` | Implements dashboard, lesson, character, practice, and review workflows. |
| Shared UI | `src/app/shared/` | Holds reusable presentation components such as the shell card, page header, lesson row, and stat card. |
| Global styling | `src/styles.scss` | Defines application-wide visual styles. |

## Routing

`AppComponent` supplies a `RouterOutlet` inside `LayoutComponent`. Routes default to `/dashboard`; all feature screens use `loadComponent`, so they remain separate lazy-loaded entry points. The lesson player receives the lesson identifier from `/lesson/:id`.

## Data and state flow

Curriculum data is static and read from `study-data.ts`. Feature components render that data and request mutations through the singleton `StudyStateService`.

`StudyStateService` keeps an Angular signal as the in-memory source of truth. Every mutation clones the current state, updates the signal, then persists the resulting `AppState` to `localStorage` under `hangeul-path-v2`. Its derived counts (`dueCount`, `completedCount`, and `matureCount`) are computed signals for UI consumption.

The review scheduler is deliberately centralized in `StudyStateService`. Ratings adjust interval, ease, repetitions, lapses, and the next due date; feature components must not recalculate those values.

## Extension points

- **New screen:** create a standalone component in `features/` and add a lazy `loadComponent` route.
- **New content:** extend the types in `core/models.ts` only when necessary, then add content in `data/study-data.ts`.
- **New persisted behavior:** add it to `AppState` and evolve `StudyStateService` so existing browser data remains safe to load.
- **Different persistence backend:** preserve the service API and replace the `load`/`save` boundary with an IndexedDB or remote repository adapter.
- **Different scheduler:** replace the logic inside `rate` while retaining the service as the only scheduling authority.

## Development checks

Use `npm start` for local development, `npm run lint` to enforce the TypeScript and Angular lint rules, and `npm run build` to verify production compilation. Lint violations must be resolved rather than suppressed or disabled without maintainer approval. See [README.md](../README.md) for setup and repository commit conventions.

Shared presentation components should receive typed inputs and remain free of study-state or scheduling rules. Domain models belong in `src/app/core/models.ts`; feature components should pass those models into shared components rather than duplicating their markup or shape definitions. See [AGENTS.md](../AGENTS.md) for the full TypeScript rules.
