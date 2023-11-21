import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLogedIn: boolean = false;
  userInfo: any;
  constructor() {
    const userData = localStorage.getItem('jobLoginUser');
    if (userData == null) {
      this.isLogedIn = false;
    } else {
      this.isLogedIn = true;
      this.userInfo = JSON.parse(userData);
    }
  }
  logout() {
    localStorage.removeItem('jobLoginUser');
    this.isLogedIn = true;
  }
}
