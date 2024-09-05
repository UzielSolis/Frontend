import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  nombre = 'Uziel';

  constructor() {
    setTimeout(() => {
      this.nombre = 'Uziel Solis';
    }, 3000);
  }

  doOnClick(e: Event) {
    console.log('Button was clicked ', e);
  }
}
