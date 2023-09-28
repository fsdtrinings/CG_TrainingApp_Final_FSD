import { Component } from '@angular/core';
import { InstructorHttpServiceService } from 'src/app/services/webservices/instructor-http-service.service';

@Component({
  selector: 'app-align-trainer-course',
  templateUrl: './align-trainer-course.component.html',
  styleUrls: ['./align-trainer-course.component.css']
})
export class AlignTrainerCourseComponent {

  __instructorService:InstructorHttpServiceService;
  cid:string = '';
  tid:string = '';
  constructor(__instructorService:InstructorHttpServiceService)
  {
    this.__instructorService = __instructorService;
  }
  doCourseAlignment(courseId:string,trainerId:string)
  {
    this.__instructorService.doTrainerCourseMapping(courseId,trainerId).subscribe(
      data=>{
        console.log(data.trainerName+" - "+data.courseName);
        
        alert(data);
        this.cid = '';
        this.tid = '';
      },
      err=>{
        console.log(err.error.message);
        
        alert("Eror !!! "+err.error.message)
      }
    );
  }
}
