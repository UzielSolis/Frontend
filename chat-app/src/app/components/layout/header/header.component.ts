import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  apiUrl: string = `${environment.apiUrl}auth/google`;

}
