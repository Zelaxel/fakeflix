import { Routes } from '@angular/router';
import { HomepageGuest } from './pages/homepage-guest/homepage-guest';
import { Homepage } from './pages/homepage/homepage';
import { TitleGrid } from './pages/title-grid/title-grid';
import { TitleDetails } from './pages/title-details/title-details';
import { VideoPlayer } from './pages/video-player/video-player';
import { Login } from './pages/login/login';
import { Signin } from './pages/signin/signin';
import { ProfileEditor } from './pages/profile-editor/profile-editor';
import { authGuard } from './auth-guard';



export const routes: Routes = [
    {path: '', component: HomepageGuest},
    {path: 'home', component: Homepage, canActivate: [authGuard]},
    {path: 'titles', component: TitleGrid, canActivate: [authGuard]},
    {path: 'details', component: TitleDetails, canActivate: [authGuard]},
    {path: 'video-player', component: VideoPlayer, canActivate: [authGuard]},
    {path: 'login', component: Login},
    {path: 'signin', component: Signin},
    {path: 'profile-editor', component: ProfileEditor, canActivate: [authGuard]}
];
