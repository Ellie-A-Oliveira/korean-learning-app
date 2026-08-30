# Hangeul Path — Angular

A scalable Angular/standalone rewrite of the original single-file Korean learning prototype.

## Architecture

See [docs/architecture.md](docs/architecture.md) for the component, routing, state-flow, and extension-point reference.

## Run
Use [Volta](https://volta.sh/) for every project command so the pinned Node `22.12.0` runtime from `package.json` is used consistently.

1. Install Volta if it is not already available.
2. `volta run npm install`
3. `volta run npm start`
4. Open the local URL printed by Angular CLI.

## Quality checks

Run `volta run npm run lint` before submitting a change. Lint violations must be fixed; do not bypass, disable, or suppress lint rules unless the repository maintainers explicitly approve an exception.

## TypeScript rules

Keep domain types in `src/app/core/models.ts` and use them at feature and shared-component boundaries. Shared component inputs and outputs, service methods, public properties, and helper functions must have explicit types; use Angular signal inputs such as `input.required<T>()` when appropriate. Avoid `any`, untyped object literals, and type assertions that hide an invalid shape. Use discriminated unions or interfaces for new data structures and keep curriculum data consistent with those types.

## Scale-up path
The current app intentionally uses a content/service boundary so content can later move to JSON or an API, and the local storage adapter can later become IndexedDB or a backend repository without rewriting the feature components.

The SRS scheduler is kept in one service and can be replaced with FSRS/Anki-compatible scheduling later.

## Contributing with Codex

Repository instructions for coding agents live in [AGENTS.md](AGENTS.md). Every commit created by an agent must use the [Conventional Commits](https://www.conventionalcommits.org/) format, for example `feat(practice): add answer feedback` or `docs: clarify architecture`.

All contributors must run `npm run lint` and resolve every reported violation before handing work off.

Future repository-specific Codex skills belong in `.codex/skills/<skill-name>/SKILL.md`; see [.codex/skills/README.md](.codex/skills/README.md) for the directory layout.
