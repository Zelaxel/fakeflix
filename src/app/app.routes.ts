import { Routes } from '@angular/router';
import { HomepageGuest } from './pages/homepage-guest/homepage-guest';
import { Homepage } from './pages/homepage/homepage';
import { TitleGrid } from './pages/title-grid/title-grid';
import { TitleDetails } from './pages/title-details/title-details';

export const routes: Routes = [
    {path: '', component: HomepageGuest},
    {path: 'home', component: Homepage},
    {path: 'titles', component: TitleGrid},
    {path: 'details', component: TitleDetails}
];
