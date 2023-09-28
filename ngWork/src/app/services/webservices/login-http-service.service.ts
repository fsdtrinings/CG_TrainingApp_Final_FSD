import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDTO } from 'src/app/dto/login-dto';
import { LoginReponseDTO } from 'src/app/dto/login-reponse-dto';
@Injectable({
  providedIn: 'root'
})
export class LoginHttpServiceService {

  constructor(private api:HttpClient) { }

  address:string = 'http://localhost:2002';

  trainerLoginEndpoint:string = this.address+'/trainer/loginauth';
  studentLoginEndPoint:string = this.address+'/student/loginauth';


  callLoginService(usercode:number,password:string,role:string):Observable<LoginReponseDTO>
  {
     let dto  = new LoginDTO(usercode,password);
     
    let endPoint = '';
    console.log('2 inside callLogin Service    '+dto.usercode+" "+dto.password+" "+role);
    if(role == 'Trainer')
    {
      endPoint = this.trainerLoginEndpoint;
    }
    else  
    {
      endPoint = this.studentLoginEndPoint;
    }
    console.log(endPoint);
    
    let outcome  =  this.api.post<LoginReponseDTO>(`${endPoint}`,dto);
    console.log('Observable '+outcome);
    return outcome;
  }
}
