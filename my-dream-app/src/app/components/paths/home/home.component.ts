import { Component } from '@angular/core';
import { PageService } from '../../../services/page.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private pageService: PageService) { }

  counter: number = 0;

  increaseCounter() {
    this.pageService.increaseCounter();
  }

}
