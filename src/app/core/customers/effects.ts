import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { CustomersService } from "src/app/shared/services/customers.service";
import * as action from "./actions"

@Injectable()
export class CustomersEffects {

  constructor(private actions$: Actions, private customersService: CustomersService, private store: Store) { }

  getCustomers$ = createEffect(() => this.actions$.pipe(
    ofType(action.CUSTOMERS_GET_ALL_REQUEST),
    switchMap(() => this.customersService.getAllCustomers().pipe(
      map(data => action.customersGetAllSuccess({ payload: data })),
      catchError((err: any) => of(action.customersGetAllError({ err: err.message })))
    ))
  ))

  addCustomer$ = createEffect(() => this.actions$.pipe(
    ofType(action.CUSTOMERS_ADD_REQUEST),
    switchMap((props) => {
      return this.customersService.addCustomer(props).pipe(
        map(data => action.customersAddSuccess({ payload: data })),
        catchError((err: any) => of(action.customersAddError({ err: err.message })))
      )
    })
  ))

  updateCustomer$ = createEffect(() => this.actions$.pipe(
    ofType(action.CUSTOMERS_EDIT_REQUEST),
    switchMap((props) => {
      return this.customersService.updateCustomer(props).pipe(
        map(data => action.customersEditSuccess({ payload: data })),
        catchError((err: any) => of(action.customersEditError({ err: err.message })))
      )
    })
  ))

  // delCustomer$ = createEffect(() => this.actions$.pipe(
  //   ofType(action.CATALOG_DEL_REQUEST),
  //   switchMap((props: any) => {
  //     return this.customersService.delCustomer(props).pipe(
  //       map(() => action.customersDelSuccess({ id: props.id })),
  //       catchError((err: any) => of(action.customersDelError({ err: err.message })))
  //     );
  //   })
  // ))

}


















