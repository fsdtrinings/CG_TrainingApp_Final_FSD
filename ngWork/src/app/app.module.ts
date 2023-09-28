import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { UpdateprofileComponent } from './user/updateprofile/updateprofile.component';
import { TeacherReprtComponent } from './user/teacher-reprt/teacher-reprt.component';
import { StudentReprtComponent } from './user/student-reprt/student-reprt.component';
import { AdminTaskComponent } from './admin/admin-task/admin-task.component';
import { AdminReportComponent } from './admin/admin-report/admin-report.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StudentMainComponent } from './student/student-main/student-main.component';
import { CourseMainComponent } from './course/course-main/course-main.component';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { TrainerMainComponent } from './trainer/trainer-main/trainer-main.component';
import { HomePageComponent } from './login/home-page/home-page.component';
import { RegisterTrainerComponent } from './trainer/register-trainer/register-trainer.component';
import { ViewTrainerComponent } from './trainer/view-trainer/view-trainer.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';
import { RegisterStudentComponent } from './student/register-student/register-student.component';
import { ABCComponent } from './abc/abc.component';
import { CourseTaskComponent } from './course/course-task/course-task.component';
import { ViewCoursesComponent } from './course/view-courses/view-courses.component';
import { SearchTrainerComponent } from './trainer/search-trainer/search-trainer.component';
import { AlignTrainerCourseComponent } from './course/align-trainer-course/align-trainer-course.component';


const allLinks:Routes = [
  {path:'adminmain',component:AdminMainComponent},
  {path:'trainermain',component:TrainerMainComponent},
  {path:'studentmain',component:StudentMainComponent},
  {path:'homepage',component:HomePageComponent},
  
  {path:'registerTrainer',component:RegisterTrainerComponent},
  {path:'registerStudent',component:RegisterStudentComponent},
  {path:'viewTrainers',component:ViewTrainerComponent},
  {path:'viewStudents',component:ViewStudentComponent},
  {path:'coursetask',component:CourseTaskComponent},
  
  
  
  
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    UpdateprofileComponent,
    TeacherReprtComponent,
    StudentReprtComponent,
    AdminTaskComponent,
    AdminReportComponent,
   
    StudentMainComponent,
    CourseMainComponent,
    AdminMainComponent,
    TrainerMainComponent,
    HomePageComponent,
    RegisterTrainerComponent,
    ViewTrainerComponent,
    ViewStudentComponent,
    RegisterStudentComponent,
    ABCComponent,
    CourseTaskComponent,
    ViewCoursesComponent,
    SearchTrainerComponent,
    AlignTrainerCourseComponent
  ],
  imports: [
    BrowserModule,FormsModule,CommonModule,HttpClientModule,RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
