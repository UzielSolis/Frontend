import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { 
    this.authStatus.next(this.isLoggedIn());
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
    this.authStatus.next(true);
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  clearToken() {
    localStorage.removeItem('token');
    this.authStatus.next(false);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
