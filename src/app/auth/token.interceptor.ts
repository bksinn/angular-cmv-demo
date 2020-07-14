import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
//import { AuthService } from './auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('access_token')};}`
        }
      }); 
      
      return next.handle(request);
    }
}
