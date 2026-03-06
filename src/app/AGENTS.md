# AGENTS.md

## Routes.

- If a route is added to `app.routes.ts`
- There needs to be added to `app.routes.server.ts` too

### Example

**app.routes.ts**

```ts
export const routes: Routes = [
  {
    path: 'call-for-papers',
    component: CallForPapersComponent
  }
];
```

**app.routes.server.ts**

```ts
export const serverRoutes: ServerRoute[] = [
  {
    path: 'call-for-papers',
    renderMode: RenderMode.Prerender
  }
];
```
