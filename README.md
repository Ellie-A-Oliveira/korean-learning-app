# Hangeul Path — Angular

A scalable Angular/standalone rewrite of the original single-file Korean learning prototype.

## Architecture

See [docs/architecture.md](docs/architecture.md) for the component, routing, state-flow, and extension-point reference.

## Run
1. Install Node 22.12+ (or Node 20.19+).
2. `npm install`
3. `npm start`
4. Open the local URL printed by Angular CLI.

## Quality checks

Run `npm run lint` before submitting a change. Lint violations must be fixed; do not bypass, disable, or suppress lint rules unless the repository maintainers explicitly approve an exception.

## Scale-up path
The current app intentionally uses a content/service boundary so content can later move to JSON or an API, and the local storage adapter can later become IndexedDB or a backend repository without rewriting the feature components.

The SRS scheduler is kept in one service and can be replaced with FSRS/Anki-compatible scheduling later.

## Contributing with Codex

Repository instructions for coding agents live in [AGENTS.md](AGENTS.md). Every commit created by an agent must use the [Conventional Commits](https://www.conventionalcommits.org/) format, for example `feat(practice): add answer feedback` or `docs: clarify architecture`.

All contributors must run `npm run lint` and resolve every reported violation before handing work off.

Future repository-specific Codex skills belong in `.codex/skills/<skill-name>/SKILL.md`; see [.codex/skills/README.md](.codex/skills/README.md) for the directory layout.
