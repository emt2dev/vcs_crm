import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EntryService } from '../auth/entry-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private entryService: EntryService) {}

  intercept(newRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let jwt = this.entryService.GetToken();

    newRequest = newRequest.clone({ setHeaders: { Authorization : "Bearer " + jwt }});
    
    return next.handle(newRequest);
  }
}
