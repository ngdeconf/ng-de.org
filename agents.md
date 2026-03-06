# Agents.md

## Project overview

- Website of https://ng-de.org
- The largest Angular Conference in Germany

## Build and test commands

- Run `pnpm dev` to start the application
- Run `gh` (GitHub CLI) to interact with the GitHub-Repository (e.g. create, update, read issues)

## Code style guidelines

- Use Angular MCP to load best practices
- Always use standalone components over NgModules
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Set `changeDetection: ChangeDetectionStrategy.OnPush` in component decorators
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use `class` and `style` bindings instead of `ngClass`/`ngStyle`
- Use signals for state management; apply `update()` or `set()` instead of `mutate()`
- Use `NgOptimizedImage` for all static images
- Use `inject()` function for dependency injection instead of constructor injection
- Design services around single responsibility with `providedIn: 'root'`
- Keep components small and focused; prefer inline templates for small components
- Use strict TypeScript type checking; avoid `any` type, use `unknown` when uncertain

## Testing instructions

- Use `curl` to verify that information are displayed as wanted

## Security considerations

- Prevent CSFR

## Development Environment

- Angular (current version is written in `package.json`)
- All pages are pre-rendered for better performance and SEO.
