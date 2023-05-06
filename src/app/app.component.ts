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
    if (!this.swPush.isEnabled) {
      console.log('Notification is not enabled')
    } else {
      this.swPush.requestSubscription({
        serverPublicKey: this.publicKey,
      }).then(sub => console.log("try 1"))
        .catch(err => console.log("error"))
    }
  }
  subscribeToPushNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.publicKey
    }).then(subscription => {
      console.log('Push notification subscription successful', subscription);
      // Save the subscription to your server database
      this.isSubscribed = true;
    }).catch(error => {
      console.error('Error subscribing to push notifications', error);
    });
  }

  unsubscribeFromPushNotifications() {
    this.swPush.unsubscribe().then(() => {
      console.log('Push notification unsubscription successful');
      // Remove the subscription from your server database
      this.isSubscribed = false;
    }).catch(error => {
      console.error('Error unsubscribing from push notifications', error);
    });
  }
}


