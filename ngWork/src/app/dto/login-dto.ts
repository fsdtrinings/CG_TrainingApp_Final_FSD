export class LoginDTO {

    usercode:number;
    password:string;
    constructor(usercode:number,
         password:string)
        {
            this.usercode = usercode;
            this.password = password;
        }
}
