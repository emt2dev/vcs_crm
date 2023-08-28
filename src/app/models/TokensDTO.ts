

export class TokensDTO {

    public refreshToken: string;
    public jwt: string;
    /**
     *
     */
    constructor(expiredJwt: string, refreshToken: string)
    {
        this.jwt = expiredJwt;
        this.refreshToken = refreshToken;
    }
}