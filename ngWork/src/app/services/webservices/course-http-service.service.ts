import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseDTO } from 'src/app/dto/course-dto';

@Injectable({
  providedIn: 'root'
})
export class CourseHttpServiceService {

  constructor(private api:HttpClient) { }

  address:string = 'http://localhost:2002/';
  getAllCoursesEndPoint:string = this.address+"app/courses";
  getAllCoursesByIdEndPoint:string = this.address+"app/course";
  getAllCoursesByCategoryEndPoint:string = this.address+"app/course/category";
  

  getAllCourseApi():Observable<CourseDTO[]>
  {
    console.log("Inside Http Service "+this.getAllCoursesEndPoint)
    let outcome  =  this.api.get<CourseDTO[]>(`${this.getAllCoursesEndPoint}`);
    return outcome;
  }

  getCourseByIdApi(id:number):Observable<CourseDTO>
  {
    this.getAllCoursesByIdEndPoint += '?id='+id;
    let outcome  =  this.api.get<CourseDTO>(`${this.getAllCoursesByIdEndPoint}`);
    return outcome;
  }

  getCourseByCategoryApi(courseCategory:string):Observable<CourseDTO[]>
  {
 
    let endpoint = this.getAllCoursesByCategoryEndPoint+"/"+courseCategory;
    console.log(" Search course By Category");
    console.log(endpoint);
    
    
    let outcome  =  this.api.get<CourseDTO[]>(`${endpoint}`);
    return outcome;
  }


}//end class
