import { Component } from '@angular/core';
import { CourseDTO } from 'src/app/dto/course-dto';
import { CourseService } from 'src/app/services/blService/course.service';
import { CourseHttpServiceService } from 'src/app/services/webservices/course-http-service.service';


@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent {
  __CoursesService:CourseHttpServiceService;
allCourse:CourseDTO[] = [];

  constructor(__CoursesService:CourseHttpServiceService)
  {
    this.__CoursesService = __CoursesService;
    this.__CoursesService.getAllCourseApi().subscribe(
      data=>{
        console.log("inside component :- "+data.length)
        this.allCourse = data;
      },
      err=>{
        console.log(err.code);
        console.log(err);
      }
    );
  }

  getCourseById(id:string)
  {
      let searchid = parseInt(id);
      this.__CoursesService.getCourseByIdApi(searchid).subscribe(
        data=>{
          this.allCourse = [];
          this.allCourse.push(data);
        },
        err=>{
          console.log(err.code);
          console.log(err);
          
        }
      );
  }
  getCourseByCategory(category:string)
  {
     
      this.__CoursesService.getCourseByCategoryApi(category).subscribe(
        data=>{
          this.allCourse = [];
          this.allCourse = data;
        },
        err=>{
          console.log(err.code);
          console.log(err);
          
        }
      );
  }





}
