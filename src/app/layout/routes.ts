import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('../modules/auth/auth-routing.module').then(
            (m) => m.AUTH_ROUTES
          ),
      },
    ],
  },
];
