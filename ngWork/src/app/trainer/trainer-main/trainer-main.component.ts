import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InstructorSearchResponseDTO } from 'src/app/dto/instructor-search-response-dto';
import { InstructorHttpServiceService } from 'src/app/services/webservices/instructor-http-service.service';
@Component({
  selector: 'app-trainer-main',
  templateUrl: './trainer-main.component.html',
  styleUrls: ['./trainer-main.component.css']
})
export class TrainerMainComponent {

  /*
       localStorage.removeItem("user-role");
    localStorage.setItem("loginStatus","false");
    this.router.navigate(['homepage']);
  */
  username : string = '';
  role:string = '';
  usercode:string = '';
  authStatus : boolean = false;
  insDTO : InstructorSearchResponseDTO = new InstructorSearchResponseDTO(0,'','','',0,'',0,'',0,'');
  isPasswordUpdated = false;
  courseName:string = '';

  __instructorService:InstructorHttpServiceService;
  constructor(private router:Router
    , __instructorService:InstructorHttpServiceService)
    {
        this.__instructorService = __instructorService;
        this.username = localStorage.getItem("user-name")||'';
        this.role = localStorage.getItem("user-role")||'';
        this.usercode = localStorage.getItem("user-code")||'';

        let savedPassword = '';

        __instructorService.doSearchTrainerById(parseInt(this.usercode)).subscribe(
          data=>{
              this.insDTO = data;
              this.authStatus = true;
              this.courseName = data.courseName;
              if(this.insDTO.password == 'abc')
              {
                  this.isPasswordUpdated = false;
              }
              else this.isPasswordUpdated = true;
          },
          err=>{
            this.authStatus = false;
          }
        );

      }
  
      changePassword(newPassword:string)
      {
         this.__instructorService.doResetPassword('abc',newPassword,parseInt(this.usercode)).subscribe(
            data=>{
              alert("Password Updated "+data.msg);
              this.isPasswordUpdated = true;
            },
            err=>{

            }
         );
      }


}//end class
