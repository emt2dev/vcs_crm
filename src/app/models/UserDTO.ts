import { LoginDTO } from "./LoginDTO";


export class UserDTO
{
    


    /**
     *
     */
    constructor(public id: string, public source: string, public currency: string, public isAdmin: Boolean, public isStaff: Boolean, public isDev: Boolean, public name: string, public mailingAddress: string)
    {
        this.id = id;
        this.source = source;
        this.currency = currency;
        this.isAdmin = isAdmin;
        this.isStaff = isStaff;
        this.isDev = isDev;
        this.id = id;
        this.name = name;
        this.mailingAddress = mailingAddress;
    }
}