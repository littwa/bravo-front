import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { iif, Observable, of } from 'rxjs';
import { catchError, first, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { getIsAuthentication } from 'src/app/core';
import { authGetCurrentManagerSuccess } from 'src/app/core/auth/actions';
import { TOKEN_LOCAL_STORAGE_KEY_ACCESS, TOKEN_LOCAL_STORAGE_KEY_REFRESH } from '../constants';
import { ManagerService } from '../services/authorize.service';

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private managerService: ManagerService,
    private store: Store,
  ) { }

  canActivate(): Observable<boolean> {
    return this.managerService.getCurrentManger().pipe(
      tap((data: any) => {
        const accessToken = localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY_ACCESS);
        const refreshToken = localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY_REFRESH);
        this.store.dispatch(authGetCurrentManagerSuccess({ ...data, tokens: { accessToken, refreshToken } }));
      }),
      map(() => true),
      catchError(res => {
        this.router.navigate(['/login']);
        return of(false);
      })
    )
  }

}
