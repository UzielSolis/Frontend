import { Component } from '@angular/core';
import { MaterialModule } from '../../../../modules/material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {

  submit() {
    console.log('Form submitted');
  }

}
