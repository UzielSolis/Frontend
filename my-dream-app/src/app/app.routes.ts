import { Routes } from '@angular/router';
import { HomeComponent } from './components/paths/home/home.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { AboutComponent } from './components/paths/about/about.component';
import { MoviesComponent } from './components/paths/movies/movies.component';
import { MovieListComponent } from './components/paths/movies/movie-list/movie-list.component';
import { AddMovieComponent } from './components/paths/movies/add-movie/add-movie.component';
import { MovieDetailsComponent } from './components/paths/movies/movie-details/movie-details.component';
import { SignupComponent } from './components/paths/signup/signup.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'movies', component: MoviesComponent, children: [
        { path: '', component: MovieListComponent },
        { path: 'add', component: AddMovieComponent },
        { path: ':id', component: MovieDetailsComponent }
    ] },
    { path: 'signup', component: SignupComponent},
    { path: '**', component: NotFoundComponent }
];
