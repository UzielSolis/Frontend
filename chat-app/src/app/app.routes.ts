import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { RoomsComponent } from './components/pages/rooms/rooms.component';
import { ChatComponent } from './components/pages/chat/chat.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '', compnent: HomeComponent },
    { path: 'rooms', component: RoomsComponent },
    { path: 'rooms/:id', compnent: ChatComponent },
    { path: '**', component: NotFoundComponent }
];
