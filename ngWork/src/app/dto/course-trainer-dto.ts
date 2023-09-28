export class CourseTrainerDTO {
    trainerName:string;
    courseName:String;
    status:boolean;

    constructor(
        trainerName:string,
        courseName:String,
        status:boolean
     
    )
    {
        this.trainerName = trainerName;
        this.courseName = courseName;
        this.status = status;
    }
}
