
export class LoginDTO {
    public email: string;
    public password: string;
    public source: number;


    /*
    * 0 = register new user
    * 1 = register new customer
    * 2 = login user
    * 3 = login staff
    */

    constructor(email: string, password: string, source: number)
    {
        this.email = email;
        this.password = password;
        this.source = source;
    }
}