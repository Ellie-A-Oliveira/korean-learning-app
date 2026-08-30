# Repository guidance for Codex agents

## Working agreements

- Keep changes focused on the requested outcome. Do not overwrite unrelated working-tree changes.
- Inspect the affected code before editing it, then run the narrowest relevant validation. Run `npm run build` for changes that can affect compilation or routing.
- Use the existing compact TypeScript style in adjacent files unless a task includes a formatting pass.
- Update [README.md](README.md) and [docs/architecture.md](docs/architecture.md) when a change alters developer workflow or the documented structure.

## Command safety

- Run read-only inspection commands and normal project checks directly, such as `rg`, `find`, `git status`, `git diff`, `npm run build`, and `npm test`.
- Ask for explicit user approval before running any destructive, irreversible, privileged, or externally state-changing command.
- This includes `rm` (especially recursive use), `git reset`, `git clean`, `git checkout --`, force pushes, rebases that rewrite shared history, dependency or system-wide installs, database migrations, and commands that send data or make changes through external services.
- Before requesting approval, inspect and state the exact target and expected effect. Prefer a reversible, narrowly scoped operation when one is available.
- Never bypass approval requirements with shell indirection, aliases, scripts, or a broader command than the user approved.

## Commit convention

**Every commit created by an agent must follow the Conventional Commits specification.** Use the imperative mood and keep the subject concise.

Examples:

```text
feat(review): add session progress indicator
fix(state): preserve completed lessons after reload
docs: clarify local development setup
chore: update Angular dependencies
```

Use an optional scope when it makes the affected area clearer. Common types are `feat`, `fix`, `docs`, `refactor`, `test`, `build`, `ci`, and `chore`.

## Application boundaries

- Add stable domain types in `src/app/core/models.ts`.
- Keep persisted study progress and scheduling behavior in `src/app/core/study-state.service.ts`; preserve its local-first storage contract unless a migration is explicitly requested.
- Keep curriculum content in `src/app/data/study-data.ts`, separate from presentation components.
- Build screens as standalone components under `src/app/features/<feature>/`; add user-facing routes in `src/app/app.routes.ts` using lazy `loadComponent` imports.
- Put reusable presentation-only components in `src/app/shared/`.
- Avoid copying state or scheduling rules into feature components. Components should consume `StudyStateService` and the content data instead.

## Codex skills

Project skills live in `.codex/skills/<skill-name>/SKILL.md`. Add a skill only when it provides repeatable, repository-specific guidance. Keep each skill narrowly scoped and link back to this file for shared engineering rules.
