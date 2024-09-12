import { Routes } from '@angular/router';
import { HomeComponent } from './components/paths/home/home.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { AboutComponent } from './components/paths/about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: NotFoundComponent }
];
