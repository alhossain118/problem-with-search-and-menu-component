import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/layout/routes').then((m) => m.ROUTES),
  },
];
