import { Injectable } from '@angular/core';
import { Router } from "@angular/router"
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs/Observable'; @Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private router: Router) { } intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('access_token')};}`
        }
      }); return next.handle(request).do((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            // Unauthorized, redirect to logout
            this.router.navigate(['/logout'])
          }
        }
      });
    }
    }
}
