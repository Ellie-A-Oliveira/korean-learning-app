# Hangeul Path — Angular

A scalable Angular/standalone rewrite of the original single-file Korean learning prototype.

## Architecture
- `core/models.ts`: stable domain models
- `core/study-state.service.ts`: local-first persistence + spaced repetition state
- `data/study-data.ts`: curriculum/content separated from UI
- `features/*`: lazy-loaded route features for dashboard, lessons, characters, practice, and review
- `shared/*`: reusable UI components
- standalone components + Angular router

## Run
1. Install Node 20+.
2. `npm install`
3. `npm start`
4. Open the local URL printed by Angular CLI.

## Scale-up path
The current app intentionally uses a content/service boundary so content can later move to JSON or an API, and the local storage adapter can later become IndexedDB or a backend repository without rewriting the feature components.

The SRS scheduler is kept in one service and can be replaced with FSRS/Anki-compatible scheduling later.
