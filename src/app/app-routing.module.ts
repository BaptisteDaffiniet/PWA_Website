import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NorrisComponent } from "../app/norris/norris.component";
import { YoutubeComponent } from './youtube/youtube.component';
import { CameraComponent } from './camera/camera.component';

const routes: Routes = [
  { path: 'Norris', component: NorrisComponent },
  { path: 'Youtube', component: YoutubeComponent },
  { path: 'Camera', component: CameraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
