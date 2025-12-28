import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'some-tabs/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Return an array of parameter objects for each route instance
      return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
      ];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
