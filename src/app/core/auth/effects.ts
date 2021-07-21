import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { ManagerService } from "src/app/shared/services/authorize.service"
import * as action from "./actions"
import { Router } from "@angular/router"
import { TOKEN_LOCAL_STORAGE_KEY_ACCESS, TOKEN_LOCAL_STORAGE_KEY_REFRESH } from "src/app/shared/constants";

@Injectable()
export class ManegerEffects {

  constructor(private actions$: Actions, private managerService: ManagerService, private store: Store, public router: Router) { }

  logInManger$ = createEffect(() => this.actions$.pipe(
    ofType(action.AUTH_LOG_IN_MANAGER_REQUEST),
    switchMap((props) => this.managerService.logInManger(props).pipe(
      map(data => action.authLogInManagerSuccess({ payload: data })),
      tap(() => this.router.navigate(['/login/verify'])),
      catchError((err: any) => of(action.authLogInManagerError({ err: err.message })))
    ))
  ))

  signInCustomer$ = createEffect(() => this.actions$.pipe(
    ofType(action.AUTH_SIGN_IN_CUSTOMER_REQUEST),
    switchMap((props) => this.managerService.signInManger(props).pipe(
      map(data => action.authSignInCustomerSuccess({ payload: data })),
      tap((data) => { this.setMangerTokenLocalStorage(data.payload.tokens); this.router.navigate(['/']) }),
      catchError((err: any) => of(action.authLogInManagerError({ err: err.message })))
    ))
  ))

  verifyAdmin$ = createEffect(() => this.actions$.pipe(
    ofType(action.AUTH_VERIFY_MANAGER_REQUEST),
    switchMap((props: any) => this.managerService.verifyManger(props.payload).pipe(
      map(data => action.authVerifyManagerSuccess({ payload: data })),
      tap((data: any) => { this.setAdminTokenLocalStorage(data.payload.token); this.router.navigate(['/order']) }), //login'
      catchError((err: any) => of(action.authVerifyManagerError({ err: err.message })))
    ))
  ))

  verifyCustomer$ = createEffect(() => this.actions$.pipe(
    ofType(action.AUTH_VERIFY_CUSTOMER_REQUEST),
    switchMap(
      (props: any) => {
        return this.managerService.verifyCustomer(props.payload).pipe(
          map(data => action.authVerifyManagerSuccess({ payload: data })),
          tap((data: any) => { this.router.navigate(['/']) }),
          catchError((err: any) => of(action.authVerifyManagerError({ err: err.message })))
        )
      }
    )
  ))
  /////////////////////
  updateCustomer$ = createEffect(() => this.actions$.pipe(
    ofType(action.AUTH_UPDATE_CUSTOMER_REQUEST),
    switchMap(
      (props: any) => {
        return this.managerService.updateCustomer(props.payload).pipe(
          map(data => action.authUpdateCustomerSuccess({ payload: data })),
          tap((data: any) => { console.log(88, data); this.router.navigate(['/']) }),
          catchError((err: any) => of(action.authUpdateCustomerError({ err: err.message })))
        )
      }
    )
  ))
/////////////////////

  logOutManger$ = createEffect(() => this.actions$.pipe(
    ofType(action.AUTH_LOG_OUT_MANAGER_REQUEST),
    map(() => action.authLogOutManagerSuccess()),
    tap(() => this.clearMangerTokenLocalStorage()),
    catchError((err: any) => of(action.authLogOutManagerError({ err: err.message })))
  ))

  private setMangerTokenLocalStorage(tokens): void {
    if (tokens) {
      localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY_ACCESS, tokens.accessToken);
      localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY_REFRESH, tokens.refreshToken);
    }
  }

  private setAdminTokenLocalStorage(token): void {
    if (token) {
      localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY_ACCESS, token);

    }
  }

  private clearMangerTokenLocalStorage(): void {
    localStorage.clear();
  }

}

