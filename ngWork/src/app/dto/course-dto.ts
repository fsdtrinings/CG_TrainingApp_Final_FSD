export class CourseDTO {

    id:number;
    courseName:string;
    duration:number;
    category:string;

    constructor(
        id:number,
        courseName:string,
        duration:number,
        category:string
    ){
        this.id = id;
        this.courseName = courseName;
        this.duration = duration;
        this.category = category;
    }
}
