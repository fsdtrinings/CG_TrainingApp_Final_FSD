import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor()
  {
    localStorage.removeItem("user-role");
    localStorage.removeItem("loginStatus");
  }
}
