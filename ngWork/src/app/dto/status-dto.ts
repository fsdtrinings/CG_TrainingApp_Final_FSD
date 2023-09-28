export class StatusDTO {

     msg:string;
     status:boolean;

    constructor(
    msg:string,
     status:boolean
    )
    {
        this.msg = msg;
        this.status = status;
    }
}
