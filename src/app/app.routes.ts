import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'titles', loadComponent: () => import('./pages/title-grid/title-grid').then(m => m.TitleGrid)},
    { path: 'home', loadComponent: () => import("./pages/homepage/homepage").then(m => m.Homepage)},
    { path: '', redirectTo: 'home', pathMatch: 'full'}
];
