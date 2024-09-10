import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  nombre = 'Uziel';

  peliculas: string[] = [
    'shrek 1',
    'shrek 2',
    'shrek 3',
    'shrek 4',
    'shrek 5',
    'toy story 1',
    'toy story 2',
    'toy story 3'
  ];
}
