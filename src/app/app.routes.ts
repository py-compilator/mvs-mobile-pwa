import { Routes } from '@angular/router';
import { HomePage } from './pages/neighbor/home/home.page';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'mvs-events',
        loadComponent: () => import('./pages/neighbor/mvs-events/mvs-events.page').then((m) => m.MvsEventsPage),
      },
      {
        path: 'mvs-map',
        loadComponent: () => import('./pages/neighbor/mvs-map/mvs-map.page').then((m) => m.MvsMapPage),
      },
      {
        path: 'neighbor-settings',
        loadComponent: () => import('./pages/neighbor/neighbor-settings/neighbor-settings.page').then((m) => m.NeighborSettingsPage,),
      },
      {
        path: '',
        redirectTo: '/home/mvs-events',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
