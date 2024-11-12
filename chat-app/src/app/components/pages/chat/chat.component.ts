import { Component } from '@angular/core';
import { Socket } from 'dgram';
import { Rooms } from '../../../types/rooms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  message: string = '';
  socket: Socket | undefined;
  roomId: string = '';
  rooms: Rooms[] = [];

  constructor() {}

}
