

export class RefreshTokenDTO {

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