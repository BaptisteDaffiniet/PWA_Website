import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  auth: any;

  login(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Login successful!');
      })
      .catch((error: any) => {
        console.log('Login failed:', error);
      });
  }
}
