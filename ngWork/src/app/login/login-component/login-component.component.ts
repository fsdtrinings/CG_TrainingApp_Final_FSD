import { Component } from '@angular/core';
import { LoginHttpServiceService } from 'src/app/services/webservices/login-http-service.service';
import { Router } from '@angular/router';
import { LoginReponseDTO } from 'src/app/dto/login-reponse-dto';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  
  status:boolean = false;
  doActive:boolean = true;
  username:string = '';
  u:string = '';
  p:string = '';
  
  constructor(private webService:LoginHttpServiceService
    ,private router:Router)
    {
      this.u = '';
      this.p = '';
      this.router.navigate(['homepage']);
    }

  changeRole(userSelect:string)
  {
    console.log("inside change role "+userSelect)
    if(userSelect != "Select Userrole")
    {
      this.doActive = false;
    }
  }

  verifyUser(usercode:string,password:string,role:string)
  {
    console.log("1 inside component ts : "+usercode+" & "+password+" & role :-  "+role);
    

    if(role == "Admin")
    {
      
      if(usercode == "admin" && password=="admin")
      {
        this.username = "Admin";
        this.status = true;
        localStorage.setItem("user-name","admin");
        localStorage.setItem("user-role","Admin");
        localStorage.setItem("loginStatus","true")
        this.router.navigate(['adminmain']);
      }
      else
      {
        this.status = false;
      }
    }
    else
    {
      this.webService.callLoginService(parseInt(usercode),password,role).subscribe(
        output=>{
          let namvigateTo = '';
          let response : LoginReponseDTO = output;
          this.username = response.username;
          this.status = response.loginstatus;
          console.log("After Observalble");
          console.log("Username & status"+this.username+" & "+this.status);
          
          if(this.status == true)
          {
            localStorage.setItem("user-code",usercode);
            localStorage.setItem("user-role",role);
            localStorage.setItem("loginStatus","true");
            localStorage.setItem("user-name",this.username);
            console.log(" Role "+role+" username :- "+this.username)
            if(role == "Trainer") this.router.navigate(['trainermain']); 
            if(role == "Student") this.router.navigate(['studentmain']); 
          }
         },
        err=>{
          alert("! Error while user login , invalid credentials")
        
         
        });
    }
    console.log(" ---- End ----")
    this.u = '';
    this.p = '';
   
  }


  doLogout()
  {
    this.status = false;
    this.doActive = true;
    this.username = '';
    localStorage.removeItem("user-role");
    localStorage.setItem("loginStatus","false");
    localStorage.removeItem("user-name");
    localStorage.removeItem("user-code");
    this.router.navigate(['homepage']);
  }

}//end class
