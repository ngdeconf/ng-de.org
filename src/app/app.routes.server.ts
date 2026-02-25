import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: ':year/talks',
    renderMode: RenderMode.Prerender,
    getPrerenderParams() {
      return Promise.resolve([{ year: '2025' }]);
    }
  },
  {
    path: 'code-of-conduct',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'privacy-policy',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'imprint',
    renderMode: RenderMode.Prerender
  }
];
