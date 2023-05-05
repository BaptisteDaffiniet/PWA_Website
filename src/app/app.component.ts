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
  isSubscribed = false;
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
    if (("Notification" in window)) {
      if (Notification.permission === "granted") {
        console.log("Notifications are enabled.");
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
          if (permission === "granted") {
            console.log("Notifications are enabled.");
          }
        });
      } else {
        console.log("Notifications are disabled.");
      }
    } else {
      console.log("Notifications are not supported in this browser.");
    }
  }

  subscribeToPushNotifications() {

    this.swPush.requestSubscription({
      serverPublicKey: this.publicKey
    })
      .then(sub => console.log("sub"))
      .catch(err => console.error("Could not subscribe to notifications", err));
  }
}


