import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Rooms } from '../types/rooms';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private httpclient: HttpClient, private authService: AuthService) { }

  getRooms(): Observable<Rooms[]> {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: this.authService.getToken()
    });

    const url = `${environment.apiUrl}rooms`;
    return this.httpclient.get<Rooms[]>(url, { headers });
  }
}
