import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-verify',
  standalone: true,
  imports: [],
  templateUrl: './auth-verify.component.html',
  styleUrl: './auth-verify.component.scss'
})
export class AuthVerifyComponent {

  constructor(private activatedRoute: ActivatedRoute, authService: AuthService, router: Router) {
    activatedRoute.queryParams.subscribe((params) => {
      const token = params['code'];
      authService.saveToken(token);
      router.navigateByUrl('rooms');
    });
  }

}
