import { createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import * as catalogAction from "../catalog/actions";
import * as customersAction from "../customers/actions";
import * as ordersAction from "../orders/actions";
import * as authAction from "../auth/actions";

interface NotufyState {
  type: string,
  message: any
}

const INITIAL_STATE_NOTIFY: NotufyState = { type: "", message: "" };

export const notifyReducers = createReducer(INITIAL_STATE_NOTIFY,
  on(catalogAction.catalogGetAllError, (state, action) => ({ type: "error", message: action.err })),
  on(catalogAction.catalogAddError, (state, action) => ({ type: "error", message: action.err })),
  on(catalogAction.catalogEditError, (state, action) => ({ type: "error", message: action.err })),
  on(catalogAction.catalogDelError, (state, action) => ({ type: "error", message: action.err })),
  on(catalogAction.catalogGetAllRequest, (state, action) => INITIAL_STATE_NOTIFY),
  on(catalogAction.catalogAddRequest, (state, action) => INITIAL_STATE_NOTIFY),
  on(catalogAction.catalogEditRequest, (state, action) => INITIAL_STATE_NOTIFY),
  on(catalogAction.catalogDelRequest, (state, action) => INITIAL_STATE_NOTIFY),
  on(catalogAction.catalogAddSuccess, (state, action) => ({ type: "add", message: "Success add in catalog!" })),
  on(catalogAction.catalogDelSuccess, (state, action) => ({ type: "del", message: "Success delete from catalog!" })),
  on(catalogAction.catalogEditSuccess, (state, action) => ({ type: "edit", message: "Success edit product!" })),

  on(customersAction.customersGetAllError, (state, action) => ({ type: "error", message: action.err })),
  on(customersAction.customersAddError, (state, action) => ({ type: "error", message: action.err })),
  on(customersAction.customersEditError, (state, action) => ({ type: "error", message: action.err })),
  on(customersAction.customersDelError, (state, action) => ({ type: "error", message: action.err })),
  on(customersAction.customersGetAllRequest, (state, action) => INITIAL_STATE_NOTIFY),
  on(customersAction.customersAddRequest, (state, action) => INITIAL_STATE_NOTIFY),
  on(customersAction.customersEditRequest, (state, action) => INITIAL_STATE_NOTIFY),
  on(customersAction.customersDelRequest, (state, action) => INITIAL_STATE_NOTIFY),
  on(customersAction.customersAddSuccess, (state, action) => ({ type: "add", message: "Success add customer!" })),
  on(customersAction.customersDelSuccess, (state, action) => ({ type: "del", message: "Success delete from customers!" })),
  on(customersAction.customersEditSuccess, (state, action) => ({ type: "edit", message: "Success edit customer!" })),

  on(ordersAction.ordersGetAllError, (state, action) => ({ type: "error", message: action.err })),
  on(ordersAction.ordersGetAllAggregateError, (state, action) => ({ type: "error", message: action.err })),
  on(ordersAction.ordersConfirmStatusError, (state, action) => ({ type: "error", message: action.err })),
  on(ordersAction.ordersGetAllRequest, (state, action) => INITIAL_STATE_NOTIFY),
  on(ordersAction.ordersGetAllAggregateRequest, (state, action) => INITIAL_STATE_NOTIFY),
  on(ordersAction.ordersConfirmStatusRequest, (state, action) => INITIAL_STATE_NOTIFY),

  on(authAction.authLogOutManagerSuccess, () => INITIAL_STATE_NOTIFY)

)


export const getNotify = (state: NotufyState): NotufyState => state;
