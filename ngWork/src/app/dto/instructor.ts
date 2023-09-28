import { Profile } from "./profile";

export class Instructor {

    insName:string;
    salary:number;
    domain:string;
    password:string;
    profile:Profile;


    constructor(
        insName:string,
        salary:number,
        domain:string,
        password:string,
        profile:Profile
    ){
        this.insName= insName;
        this.salary = salary;
        this.domain = domain;
        this.password = password;
        this.profile = profile;
    }

}
