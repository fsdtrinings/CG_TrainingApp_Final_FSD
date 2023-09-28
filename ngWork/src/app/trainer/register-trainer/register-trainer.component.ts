import { Component } from '@angular/core';
import { Instructor } from 'src/app/dto/instructor';
import { Profile } from 'src/app/dto/profile';
import { InstructorHttpServiceService } from 'src/app/services/webservices/instructor-http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-trainer',
  templateUrl: './register-trainer.component.html',
  styleUrls: ['./register-trainer.component.css']
})
export class RegisterTrainerComponent {

  profile:Profile = new Profile('',0,'','');
  instructor:Instructor = new Instructor('',0,'','abc',this.profile);
  
  
  __instructorHttpService:InstructorHttpServiceService;

  constructor(__instructorHttpService:InstructorHttpServiceService,
    private router:Router)
  {
    this.__instructorHttpService = __instructorHttpService;
    
  }

  doFormSubmit()
  {
    console.log(this.instructor);
    this.__instructorHttpService.doRegisterTrainer(this.instructor).subscribe(
      output=>{
          let b = confirm("Trainer Saved , User Code "+output.code+" Trainer Name : - "+output.name+" Would U like to Login as Trainer , default password is abc");
          this.profile = new Profile('',0,'','');
          this.instructor = new Instructor('',0,'','abc',this.profile);
          if(b == true)
          {
            this.router.navigate(['adminmain']);
          }
          
        },
      err=>{
        console.log("!!! Error "+err);
      }
    );
  }


}//end class
