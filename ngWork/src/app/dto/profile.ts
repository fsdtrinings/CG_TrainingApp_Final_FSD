export class Profile {

    email:string;
    phone:number;
    address:string;
    cityName:string
   
    
    constructor(
        email:string,
        phone:number,
        address:string,
        cityName:string
    )
    {
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.cityName = cityName;
    }
}
