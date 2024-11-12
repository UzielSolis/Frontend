import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../../services/room.service';
import { response } from 'express';
import { log } from 'console';
import { RouterLink } from '@angular/router';
import { Rooms } from '../../../types/rooms';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {

  rooms: Rooms[] = [];

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
      this.roomService.getRooms().subscribe({
        next: (response) => {
          this.rooms = response;
        },
        error: (e) => {
          console.log('Ocurrio un error al traer las salas'); 
        }
      })
  }

}
