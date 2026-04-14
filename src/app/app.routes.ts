import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import("./components/homepage/homepage").then(m => m.Homepage)},
    {path: 'list', loadComponent: () => import('./components/title-grid/title-grid').then(m => m.TitleGrid)}
];
