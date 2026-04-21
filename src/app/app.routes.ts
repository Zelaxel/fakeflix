import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import("./pages/homepage-guest/homepage-guest").then(m => m.HomepageGuest)},
    {path: 'home', loadComponent: () => import("./pages/homepage/homepage").then(m => m.Homepage)},
    {path: 'titles', loadComponent: () => import('./pages/title-grid/title-grid').then(m => m.TitleGrid)},
    {path: 'details', loadComponent: () => import('./pages/title-details/title-details').then(m => m.TitleDetails)}

];
