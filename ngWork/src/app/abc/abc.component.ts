import { Component } from '@angular/core';
import { ABCService } from '../abc.service';
import { ABC } from '../abc';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class ABCComponent {

  __abcService:ABCService;
  a:ABC = new ABC('','',0);
constructor(__abcService:ABCService)
{
  this.__abcService = __abcService;
}
  doFormSubmit()
  {
    console.log("inside ABC test :- "+this.a);
    
  }
}
