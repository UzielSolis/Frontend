import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { RoomsComponent } from './components/pages/rooms/rooms.component';
import { ChatComponent } from './components/pages/chat/chat.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { AuthVerifyComponent } from './components/pages/auth-verify/auth-verify.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'rooms', component: RoomsComponent },
    { path: 'rooms/:id', component: ChatComponent },
    { path: 'auth/verify', component: AuthVerifyComponent },
    { path: '**', component: NotFoundComponent }
];
