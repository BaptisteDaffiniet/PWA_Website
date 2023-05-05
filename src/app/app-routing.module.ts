import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NorrisComponent } from "../app/norris/norris.component";
import { YoutubeComponent } from './youtube/youtube.component';
import { CameraComponent } from './camera/camera.component';
import { HomeComponent } from './home/home.component';
import { CinemaComponent } from './cinema/cinema.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Norris', component: NorrisComponent },
  { path: 'Youtube', component: YoutubeComponent },
  { path: 'Camera', component: CameraComponent },
  { path: 'Cinema', component: CinemaComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
