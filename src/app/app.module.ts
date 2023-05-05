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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat'


@NgModule({
  declarations: [
    AppComponent,
    NorrisComponent,
    YoutubeComponent,
    CameraComponent,
    HomeComponent,
    CinemaComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [DataService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
