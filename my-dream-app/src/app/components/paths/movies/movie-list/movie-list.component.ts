import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../../../services/movie.service';
import { Movie } from '../../../../types/movie';
import { response } from 'express';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getAll().subscribe({
      next: (response) => {
        this.movies = response;
      },
      error: () => {}
    });
  }

  submit() {
    console.log('Form submitted');
  }

  cancelSubmit(e: MouseEvent) {
    e.preventDefault();
  }

}
