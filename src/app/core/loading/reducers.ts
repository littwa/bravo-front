import { createReducer, createSelector, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import * as catalogAction from "../catalog/actions";
import * as customersAction from "../customers/actions";
import * as ordersAction from "../orders/actions";
import * as authAction from "../auth/actions";

const INITIAL_STATE_LOADING = false;

export const loadingReducers = createReducer(INITIAL_STATE_LOADING,

  on(catalogAction.catalogGetAllRequest, () => true),
  on(catalogAction.catalogAddRequest, () => true),
  on(catalogAction.catalogEditRequest, () => true),
  on(catalogAction.catalogDelRequest, () => true),
  on(catalogAction.catalogGetAllSuccess, () => false),
  on(catalogAction.catalogAddSuccess, () => false),
  on(catalogAction.catalogEditSuccess, () => false),
  on(catalogAction.catalogDelSuccess, () => false),
  on(catalogAction.catalogGetAllError, () => false),
  on(catalogAction.catalogAddError, () => false),
  on(catalogAction.catalogEditError, () => false),
  on(catalogAction.catalogDelError, () => false),

  on(customersAction.customersGetAllRequest, () => true),
  on(customersAction.customersAddRequest, () => true),
  on(customersAction.customersEditRequest, () => true),
  on(customersAction.customersDelRequest, () => true),
  on(customersAction.customersGetAllSuccess, () => false),
  on(customersAction.customersAddSuccess, () => false),
  on(customersAction.customersEditSuccess, () => false),
  on(customersAction.customersDelSuccess, () => false),
  on(customersAction.customersGetAllError, () => false),
  on(customersAction.customersAddError, () => false),
  on(customersAction.customersEditError, () => false),
  on(customersAction.customersDelError, () => false),

  on(ordersAction.ordersGetAllRequest, () => true),
  on(ordersAction.ordersGetAllAggregateRequest, () => true),
  on(ordersAction.ordersConfirmStatusRequest, () => true),
  on(ordersAction.ordersGetAllSuccess, () => false),
  on(ordersAction.ordersGetAllAggregateSuccess, () => false),
  on(ordersAction.ordersConfirmStatusSuccess, () => false),
  on(ordersAction.ordersGetAllAggregateError, () => false),
  on(ordersAction.ordersGetAllError, () => false),
  on(ordersAction.ordersConfirmStatusError, () => false),

  on(authAction.authGetCurrentManagerRequest, () => true),
  on(authAction.authVerifyManagerRequest, () => true),
  on(authAction.authLogInManagerRequest, () => true),
  on(authAction.authGetCurrentManagerSuccess, () => false),
  on(authAction.authVerifyManagerSuccess, () => false),
  on(authAction.authLogInManagerSuccess, () => false),
  on(authAction.authGetCurrentManagerError, () => false),
  on(authAction.authVerifyManagerError, () => false),
  on(authAction.authLogInManagerError, () => false),

)

export const getLoading = (state: boolean): boolean => state;
// let ff = createSelector()
