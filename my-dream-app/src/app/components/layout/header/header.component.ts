import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../modules/material/material.module';
import { PageService } from '../../../services/page.service';
import { AuthStateDirective } from '../../../directives/auth-state.directive';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MaterialModule, AuthStateDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  counter: number = 0;

  constructor(pageService: PageService) {
    pageService.counterObs.subscribe((counter: number) => {
      this.counter = counter;
    });
  }
  
}
