import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'titles', loadComponent: () => import('./components/title-grid/title-grid').then(m => m.TitleGrid)},
    { path: 'home', loadComponent: () => import("./components/homepage/homepage").then(m => m.Homepage)},
    { path: '', redirectTo: 'home', pathMatch: 'full'}
];
