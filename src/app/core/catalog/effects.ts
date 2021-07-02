import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { CatalogService } from "src/app/shared/services/catalog.service";
import * as action from "./actions"

@Injectable()
export class CatalogEffects {
  constructor(private actions$: Actions, private catalogService: CatalogService, private store: Store) { }

  getCatalog$ = createEffect(() => this.actions$.pipe(
    ofType(action.CATALOG_GET_ALL_REQUEST),
    switchMap(() => this.catalogService.getAllProducts().pipe(
      map(data => action.catalogGetAllSuccess({ payload: data })),
      catchError((err: any) => of(action.catalogGetAllError({ err: err.message })))
    ))
  ))

  addProduct$ = createEffect(() => this.actions$.pipe(
    ofType(action.CATALOG_ADD_REQUEST),
    switchMap((props) => {
      return this.catalogService.addProduct(props).pipe(
        map(data => action.catalogAddSuccess({ payload: data })),
        catchError((err: any) => of(action.catalogAddError({ err: err.message })))
      )
    })
  ))

  updateProduct$ = createEffect(() => this.actions$.pipe(
    ofType(action.CATALOG_EDIT_REQUEST),
    switchMap((props) => {
      return this.catalogService.updateProduct(props).pipe(
        map(data => action.catalogEditSuccess({ payload: data })),
        catchError((err: any) => of(action.catalogEditError({ err: err.message })))
      )
    })
  ))

  delProduct$ = createEffect(() => this.actions$.pipe(
    ofType(action.CATALOG_DEL_REQUEST),
    switchMap((props: any) => {
      return this.catalogService.delProduct(props).pipe(
        map(() => action.catalogDelSuccess({ id: props.id })),
        catchError((err: any) => of(action.catalogDelError({ err: err.message })))
      );
    })
  ))

}

// throw new Error("Error http getAllProducts");

