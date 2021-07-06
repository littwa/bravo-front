import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { TOKEN_LOCAL_STORAGE_KEY_ACCESS } from 'src/app/shared/constants';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthSetTokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY_ACCESS);

    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }

    return next.handle(request);

    // if (!token) {
    //   return next.handle(request).pipe(
    //     tap(() => { console.log("HttpInterceptor NO-TOKEN"); this.router.navigate(['/login']) }),
    //     catchError((error: HttpErrorResponse) => {
    //       console.log("interceptor err", error);
    //       if (error.status === 401) {
    //         // this.auth.logout();
    //         this.router.navigate(['/login'])
    //       }
    //       return throwError(error)
    //     }));
    // }

    // return next.handle(request).pipe(
    //   tap(() => console.log("HttpInterceptor work")),
    //   catchError((error: HttpErrorResponse) => {
    //     console.log("interceptor err", error);
    //     if (error.status === 401) {
    //       // this.auth.logout();
    //       this.router.navigate(['/login'])
    //     }
    //     return throwError(error)
    //   }));

  }
}
