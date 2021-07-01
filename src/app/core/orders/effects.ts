import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { OrdersService } from "src/app/shared/services/orders.service";
import * as action from "./actions"

@Injectable()
export class OrdersEffects {

  constructor(private actions$: Actions, private ordersService: OrdersService, private store: Store) { }

  getOrders$ = createEffect(() => this.actions$.pipe(
    ofType(action.ORDERS_GET_ALL_REQUEST),
    switchMap(() => this.ordersService.getAllOrders().pipe(
      map(data => action.ordersGetAllSuccess({ payload: data })),
      catchError((err: any) => of(action.ordersGetAllError({ err: err.message })))
    ))
  ))

  getOrdersAggregate$ = createEffect(() => this.actions$.pipe(
    ofType(action.ORDERS_GET_ALL_AGGREGATE_REQUEST),
    switchMap(() => this.ordersService.getAllOrdersAggregateProducts().pipe(
      map(data => action.ordersGetAllAggregateSuccess({ payload: data })),
      catchError((err: any) => of(action.ordersGetAllAggregateError({ err: err.message })))
    ))
  ))

  confirmStatusOrder$ = createEffect(() => this.actions$.pipe(
    ofType(action.ORDERS_CONFIRM_STATUS_REQUEST),
    switchMap((props) => {
      return this.ordersService.confirmOrdersStatus(props).pipe(
        map(data => action.ordersConfirmStatusSuccess({ payload: data })),
        catchError((err: any) => of(action.ordersConfirmStatusError({ err: err.message })))
      )
    })
  ))

  // addOrder$ = createEffect(() => this.actions$.pipe(
  //   ofType(action.ordERS_ADD_REQUEST),
  //   switchMap((props) => {
  //     console.log("props-add-", props); return this.ordersService.addorder(props).pipe(
  //       map(data => action.ordersAddSuccess({ payload: data })),
  //       catchError((err: any) => of(action.ordersAddError({ err: err.message })))
  //     )
  //   })
  // ))

  // updateOrder$ = createEffect(() => this.actions$.pipe(
  //   ofType(action.ordERS_EDIT_REQUEST),
  //   switchMap((props) => {
  //     console.log("props-update-", props); return this.ordersService.updateorder(props).pipe(
  //       map(data => action.ordersEditSuccess({ payload: data })),
  //       catchError((err: any) => of(action.ordersEditError({ err: err.message })))
  //     )
  //   })
  // ))

  // delOrder$ = createEffect(() => this.actions$.pipe(
  //   ofType(action.CATALOG_DEL_REQUEST),
  //   switchMap((props: any) => {
  //     return this.ordersService.delorder(props).pipe(
  //       map(() => action.ordersDelSuccess({ id: props.id })),
  //       catchError((err: any) => of(action.ordersDelError({ err: err.message })))
  //     );
  //   })
  // ))

}

// throw new Error("Error http getAllOrders");
