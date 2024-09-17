import { Injectable } from '@angular/core';
import { Movie } from '../types/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies: Movie[] = [
    {
      id: 1,
      title: 'shrek 1'
    },
    {
      id: 2,
      title: 'shrek 2'
    },
    {
      id: 3,
      title: 'shrek 3'
    }
  ];

  constructor() { }

  getAll(): Movie[] {
    return this.movies;
  }
}
