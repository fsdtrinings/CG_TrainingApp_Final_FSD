import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent {

  title = 'TrainingAppUI';
  userRole:string = '';
  loginStatus:string = '';
  controllerName = ''
  constructor()
  {
    this.userRole = localStorage.getItem("user-role")||'';
    this.loginStatus = localStorage.getItem("loginStatus")||'';
    console.log("---Inside App Componet ts file--- ");
    console.log(this.userRole+" - "+this.loginStatus);
  }
  
}
