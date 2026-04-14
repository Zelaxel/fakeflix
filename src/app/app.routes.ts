import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./components/title-grid/title-grid').then(m => m.TitleGrid) }
];
