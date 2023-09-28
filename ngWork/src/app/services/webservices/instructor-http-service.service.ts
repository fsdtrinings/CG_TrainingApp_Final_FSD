import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instructor } from 'src/app/dto/instructor';
import { TrainerRegisterResponseDTO } from 'src/app/dto/trainer-register-response-dto';
import { InstructorSearchResponseDTO } from 'src/app/dto/instructor-search-response-dto';
import { CourseTrainerDTO } from 'src/app/dto/course-trainer-dto';
import { StatusDTO } from 'src/app/dto/status-dto';

@Injectable({
  providedIn: 'root'
})
export class InstructorHttpServiceService {

  constructor(private api:HttpClient) { }

  address:string = 'http://localhost:2002/';

  registerTrainer:string = this.address+'trainer/register';
  searchbyidEndPoint = this.address+'trainer/';
  


  doRegisterTrainer(instructor:Instructor):Observable<TrainerRegisterResponseDTO>
  {
    let outcome  =  this.api.post<TrainerRegisterResponseDTO>(`${this.registerTrainer}`,instructor);
    return outcome;
  }

  doSearchTrainerById(code:number):Observable<InstructorSearchResponseDTO>
  {
    let endpoint:string =  this.searchbyidEndPoint+''+code+'';
    console.log("--->> "+endpoint);
    
    let outcome  =  this.api.get<InstructorSearchResponseDTO>(`${endpoint}`);
    return outcome;
  }


  doTrainerCourseMapping(courseId:string,trainerId:string):Observable<CourseTrainerDTO>
  {
    let endpoint:string = this.address+'trainer/'+trainerId+'/course/'+courseId;
    console.log("--->> "+endpoint);
    
    let outcome  =  this.api.put<CourseTrainerDTO>(`${endpoint}`,[]);
    return outcome;
  }


  doResetPassword(oldPasswordValue:string,newPasswordValue:string,usercode:number):Observable<StatusDTO>
  {
    let endpoint:string = this.address+'trainer/resetpassword';
    console.log("--->> "+endpoint);
    
    const UpdatePasswordDTO ={
      oldPassword : oldPasswordValue,
      newPassword : newPasswordValue,
      codeId : usercode
    }
    
    
    
    let outcome  =  this.api.put<StatusDTO>(`${endpoint}`,UpdatePasswordDTO);
    return outcome;
  }

}//end class
