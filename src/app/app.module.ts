import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { NorrisComponent } from './norris/norris.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { CameraComponent } from './camera/camera.component';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';
import { CinemaComponent } from './cinema/cinema.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NorrisComponent,
    YoutubeComponent,
    CameraComponent,
    HomeComponent,
    CinemaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js')
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
