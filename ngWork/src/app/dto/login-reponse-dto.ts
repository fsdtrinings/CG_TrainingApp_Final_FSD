export class LoginReponseDTO {


    
    username:string;
    loginstatus:boolean;
    constructor(username:string,
        loginstatus:boolean)
        {
            this.username = username;
            this.loginstatus = loginstatus;
        }
}