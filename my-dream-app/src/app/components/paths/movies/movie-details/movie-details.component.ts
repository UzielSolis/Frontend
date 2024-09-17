import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface MovieDetailsParams {
  id: number;
}

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(p => {
      console.log('Los parametros son: ', p['id']);
    });
  }

  ngOnInit(): void {
    console.log('Ya se inicializo el componente')
  }

}
