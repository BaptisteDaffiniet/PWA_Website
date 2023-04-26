import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker'
import { DataService } from './data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'websitePWA';

  update: boolean = false;

  constructor(updates: SwUpdate, private data: DataService, private router: Router) {

    updates.available.subscribe(event => {
      //this.update = true;
      updates.activateUpdate().then(() => document.location.reload());
    })
  }

  goToPage(pageName: string): void {
    console.log("Go To Page" + pageName)
    this.router.navigate([pageName]);
  }



}
