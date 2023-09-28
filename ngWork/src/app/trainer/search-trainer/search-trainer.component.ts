import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InstructorSearchResponseDTO } from 'src/app/dto/instructor-search-response-dto';
import { InstructorHttpServiceService } from 'src/app/services/webservices/instructor-http-service.service';

@Component({
  selector: 'app-search-trainer',
  templateUrl: './search-trainer.component.html',
  styleUrls: ['./search-trainer.component.css']
})
export class SearchTrainerComponent {

  __instructorHttpService:InstructorHttpServiceService;
  ins:InstructorSearchResponseDTO = new InstructorSearchResponseDTO(0,'','','',0,'',0,'',0,'');
  isFound : boolean = false;

  constructor(__instructorHttpService:InstructorHttpServiceService,
    private router:Router)
  {
    this.__instructorHttpService = __instructorHttpService;
    
  }
  
  getTrainerById(code:string)
  {
    this.__instructorHttpService.doSearchTrainerById(parseInt(code)).subscribe(
      data=>{
        this.ins = data;
        this.isFound = true;
      },
      err=>{

      }
    );
  }

}
