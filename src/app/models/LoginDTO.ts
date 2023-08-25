
export class LoginDTO {
    public email: string;
    public password: string;
    public source: string;


    /*
    * NewUser = register new user
    * NewStaff = register new staff
    * LoginUser = login user
    * LoginStaff = login staff
    */

    constructor(email: string, password: string, source: string)
    {
        this.email = email;
        this.password = password;
        this.source = source;
    }
}