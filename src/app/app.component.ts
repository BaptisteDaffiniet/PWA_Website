import { Component } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker'
import { DataService } from './data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'websitePWA';
  private readonly publicKey = "BOsRIBtmJWMYm8qitNbIWds9vRvOb4F5BCJz1l7PfISZba0uC61jVjv60lwBgl0Ur46jc-nOLhp7WowsUaCSW3E";
  update: boolean = false;

  constructor(updates: SwUpdate, private data: DataService, private router: Router, private swPush: SwPush) {

    updates.available.subscribe(event => {
      //this.update = true;
      updates.activateUpdate().then(() => document.location.reload());
    })
  }

  ngOnInit() {
    this.pushSubscription();
  }

  goToPage(pageName: string): void {
    console.log("Go To Page" + pageName)
    this.router.navigate([pageName]);
  }

  pushSubscription() {
    if (!this.swPush.isEnabled) {
      console.log("Notification is not enabled");
      return;
    }
    this.swPush.requestSubscription({
      serverPublicKey: this.publicKey,
    }).then(sub => console.log(JSON.stringify(sub))).catch(err => console.log(err))
  }

}
