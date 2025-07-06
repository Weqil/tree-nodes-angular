import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/trees-page/trees-page.component').then(
        (m) => m.TreesPageComponent
      ),
  },
];
