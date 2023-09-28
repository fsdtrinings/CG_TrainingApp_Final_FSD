export class InstructorSearchResponseDTO {

    code:number;
    name:string;
    domain:string;
    email:string;
    phone:number;
    address:string;
    salary:number;
    password:string;
    courseId:number;
    courseName:string;

    constructor(
        code:number,
        name:string,
        domain:string,
        email:string,
        phone:number,
        address:string,
        salary:number,
        password:string,
        courseId:number,
        courseName:string
    ){
        this.code = code;
        this.name = name;
        this.domain = domain;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.salary = salary;
        this.password = password;
        this.courseId = courseId;
        this.courseName = courseName;
    }
}
