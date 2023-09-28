import { Injectable } from '@angular/core';
import { Instructor } from 'src/app/dto/instructor';
import { Profile } from 'src/app/dto/profile';


@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor() { }

  getDefaultInstructor(): Instructor {
    let profile = new Profile('', 0, '', '');
    let instructor = new Instructor('', 0, '', '', profile);
    return instructor;
  }
}
