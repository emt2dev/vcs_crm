// IMPORTS
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';

// INTERNALS
import { GlossaryService } from '../glossary.service';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { RefreshTokenDTO } from 'src/app/models/RefreshTokenDTO';
import { LoginDTO } from 'src/app/models/LoginDTO';

// EXPORTS
// Tokens and Token Data
export const STOREDTOKEN: string = "STOREDTOKEN";
export const SESSIONTOKEN: string = "SESSIONTOKEN";
export const REFRESHTOKEN: string = 'REFRESHTOKEN';
export const DECODEDTOKEN: string = "DECODEDTOKEN";
export const USERID: string = "USERID";
export const ROLES: string = "ROLES";
export const JWTEXPIRATION: string = "JWTEXPIRATION";

// Booleans
export const STAFF: string = "false";
export const DEV: string = "false";

export interface DecodedUser {
  DecodedToken: string;
  EncodedToken: string;
  UserId: string;
  Roles: string;
  RefreshToken: string;
  Expiration: Number;
}

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private USER: BehaviorSubject<DecodedUser | null | undefined> = new BehaviorSubject<DecodedUser | null | undefined>(undefined);

  public glossary: GlossaryService;

  public _content = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(glossary: GlossaryService, private http: HttpClient, public router: Router) { 
    this.glossary = glossary;

    if(!localStorage.getItem(SESSIONTOKEN) && localStorage.getItem(STOREDTOKEN)) {
      let outgoingDTO: any = new RefreshTokenDTO(localStorage.getItem(STOREDTOKEN), localStorage.getItem(REFRESHTOKEN));
      this.RefreshToken(outgoingDTO);
    }
    else if (localStorage.getItem(SESSIONTOKEN)) {
      this.LoadUserDetails();
    }
  }

  LoadUserDetails() {
    const storedToken = localStorage.getItem(STOREDTOKEN);
    const refreshToken = localStorage.getItem(REFRESHTOKEN);
    const sessionToken = localStorage.getItem(SESSIONTOKEN);
    
    let decodedJwt: any = jwt_decode<JwtPayload>(sessionToken);

    localStorage.setItem(DECODEDTOKEN, decodedJwt);
    localStorage.setItem(USERID, decodedJwt.sub);
    localStorage.setItem(ROLES, decodedJwt["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]);
    localStorage.setItem(JWTEXPIRATION, decodedJwt.iat);

    if(sessionToken) {

      const decodedJwt: any = jwt_decode<JwtPayload>(sessionToken);

      const Customer: DecodedUser = {
        DecodedToken: decodedJwt,
        EncodedToken: sessionToken,
        UserId: decodedJwt.sub,
        Roles: decodedJwt["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
        RefreshToken: refreshToken,
        Expiration: parseInt(decodedJwt.iat),
        
      };

      this.USER.next(Customer);
    } else {
      this.USER.next(null);
    }
  }

  RefreshToken(outgoingDTO: RefreshTokenDTO) {
    return this.http.post<RefreshTokenDTO>(`${this.glossary.RefreshSession()}`, RefreshTokenDTO)
    .pipe(map((res: any) => {
        localStorage.setItem(STOREDTOKEN, res.jwToken);
        localStorage.setItem(SESSIONTOKEN, res.jwToken);
        localStorage.setItem(REFRESHTOKEN, res.refreshToken);

        let decodedJwt: any = jwt_decode<JwtPayload>(res.jwToken);

        localStorage.setItem(DECODEDTOKEN, decodedJwt);
        localStorage.setItem(USERID, decodedJwt.sub);
        localStorage.setItem(ROLES, decodedJwt["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]);
        localStorage.setItem(JWTEXPIRATION, decodedJwt.iat);

        const Customer: DecodedUser = {
          DecodedToken: decodedJwt,
          EncodedToken: res.jwToken,
          UserId: decodedJwt.sub,
          Roles: decodedJwt["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
          RefreshToken: res.refreshToken,
          Expiration: parseInt(decodedJwt.iat),
        };

        this.USER.next(Customer);
        return Customer;
      })
    );
  }

  LoginUser(outgoingDTO: LoginDTO) {
    return this.http.post<LoginDTO>(`${this.glossary.LoginUser()}`, outgoingDTO)
    .pipe
    (map((res: any) => {
        localStorage.setItem(STOREDTOKEN, res.jwToken);
        localStorage.setItem(SESSIONTOKEN, res.jwToken);

        let decodedJwt: any = jwt_decode<JwtPayload>(res.jwToken);
        localStorage.setItem(DECODEDTOKEN, decodedJwt);
        localStorage.setItem(USERID, decodedJwt.sub);
        localStorage.setItem(ROLES, decodedJwt["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]);
        localStorage.setItem(JWTEXPIRATION, decodedJwt.iat);

        localStorage.setItem(STAFF, "false");
        localStorage.setItem(DEV, "false");

        const Customer: DecodedUser = {
          DecodedToken: decodedJwt,
          EncodedToken: res.jwToken,
          UserId: decodedJwt.sub,
          Roles: decodedJwt["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
          RefreshToken: res.refreshToken,
          Expiration: parseInt(decodedJwt.iat),
        };

        this.USER.next(Customer);
        return Customer;
      })
    );
  }

  LoginStaff(outgoingDTO: LoginDTO) {
    return this.http.post<LoginDTO>(`${this.glossary.LoginStaff()}`, outgoingDTO)
    .pipe
    (map((res: any) => {
        localStorage.setItem(STOREDTOKEN, res.jwToken);
        localStorage.setItem(SESSIONTOKEN, res.jwToken);

        let decodedJwt: any = jwt_decode<JwtPayload>(res.jwToken);
        localStorage.setItem(DECODEDTOKEN, decodedJwt);
        localStorage.setItem(USERID, decodedJwt.sub);
        localStorage.setItem(ROLES, decodedJwt["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]);
        localStorage.setItem(JWTEXPIRATION, decodedJwt.iat);

        localStorage.setItem(STAFF, "true");

        if (decodedJwt["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"].includes("DEV")) localStorage.setItem(DEV, "true");

        const Staff: DecodedUser = {
          DecodedToken: decodedJwt,
          EncodedToken: res.jwToken,
          UserId: decodedJwt.sub,
          Roles: decodedJwt["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
          RefreshToken: res.refreshToken,
          Expiration: parseInt(decodedJwt.iat),
        };

        this.USER.next(Staff);
        return Staff;
      })
    );
  }

  RegisterCustomer(newCustomer: LoginDTO){
    return this.http.post(`${this.glossary._api}${this.glossary.registerUser}`, newCustomer).pipe(catchError(this.glossary.ErrorHandler));
  }

  RegisterStaff(newStaff: LoginDTO) {
    return this.http.post(`${this.glossary._api}${this.glossary.registerStaff}`, newStaff).pipe(catchError(this.glossary.ErrorHandler));
  }

  IsUserLoggedIn(): Boolean {
    // let tokenExists = localStorage.getItem(SESSIONTOKEN);
    return localStorage.getItem(SESSIONTOKEN) !== null ? true : false;
  }

  IsUserStaff(): Boolean {
    if(localStorage.getItem(STAFF) == "true") return true;
    else return false;
  }

  IsUserDev(): Boolean {
    if(localStorage.getItem(DEV) == "true") return true;
    else return false;
  }

  LogoutUser() {
    localStorage.removeItem(SESSIONTOKEN);
    localStorage.removeItem(DECODEDTOKEN);
    localStorage.removeItem(USERID);
    localStorage.removeItem(ROLES);
    localStorage.removeItem(STAFF);
    localStorage.removeItem(DEV);

    this.router.navigateByUrl('/');
  }

  GetToken() {
    return localStorage.getItem(SESSIONTOKEN);
  }

  // not currently implemented
  // UpdateCustomer(UpdateUserDTO: any): Observable<any> {
  //   return this.http.post().pipe(catchError(this.glossary.ErrorHandler));
  // }

  // not currently implemented
  // UpdateStaff(UpdateStaffDTO: any): Observable<any> {
  //   return this.http.post().pipe(catchError(this.glossary.ErrorHandler));
  // }

  // not currently implemented
  // UpdatePassword(UpdateUserDTO: any): Observable<any> {
  //   return this.http.post().pipe(catchError(this.glossary.ErrorHandler));
  // }

  
}
