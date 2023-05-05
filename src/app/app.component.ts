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
    //this.pushSubscription();
    if ('Notification' in window) {
      // the browser supports push notifications
      if (Notification.permission !== 'granted') {
        Notification.requestPermission().then(function (permission) {
          if (permission === 'granted') {
            // user has granted the permission
            navigator.serviceWorker.register('./service-worker.js').then(function (registration) {
              return registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array("BOsRIBtmJWMYm8qitNbIWds9vRvOb4F5BCJz1l7PfISZba0uC61jVjv60lwBgl0Ur46jc-nOLhp7WowsUaCSW3E")
              });
            }).then(function (subscription) {
              // send the subscription details to the server
              console.log("Now in")
            }).catch(function (error) {
              console.log('Error during service worker registration:', error);
            });
          }
        });
      } else {
        navigator.serviceWorker.register('service-worker.js').then(function (registration) {
          return registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array("BOsRIBtmJWMYm8qitNbIWds9vRvOb4F5BCJz1l7PfISZba0uC61jVjv60lwBgl0Ur46jc-nOLhp7WowsUaCSW3E")
          });
        }).then(function (subscription) {
          // send the subscription details to the server
          console.log("already in")
        }).catch(function (error) {
          console.log('Error during service worker registration:', error);
        });
      }
    }
  }

  goToPage(pageName: string): void {
    console.log("Go To Page" + pageName)
    this.router.navigate([pageName]);
  }

  pushSubscription() {
    if ('Notification' in window) {
      // the browser supports push notifications
      if (Notification.permission !== 'granted') {
        Notification.requestPermission().then(function (permission) {
          if (permission === 'granted') {
            // user has granted the permission
            navigator.serviceWorker.register('service-worker.js').then(function (registration) {
              return registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array("BOsRIBtmJWMYm8qitNbIWds9vRvOb4F5BCJz1l7PfISZba0uC61jVjv60lwBgl0Ur46jc-nOLhp7WowsUaCSW3E")
              });
            }).then(function (subscription) {
              // send the subscription details to the server
              fetch('/send-push-notification', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  subscription: subscription,
                  message: 'Hello World!'
                })
              });
            }).catch(function (error) {
              console.log('Error during service worker registration:', error);
            });
          }
        });
      }
    }
  }
  /* if (!this.swPush.isEnabled) {
     console.log("Notification is not enabled");
     return;
   }
   this.swPush.requestSubscription({
     serverPublicKey: this.publicKey,
   }).then(sub => console.log(JSON.stringify(sub))).catch(err => console.log(err))
 }*/

}
function urlBase64ToUint8Array(applicationServerPublicKey: any): string | BufferSource | null | undefined {
  throw new Error('Function not implemented.');
}

