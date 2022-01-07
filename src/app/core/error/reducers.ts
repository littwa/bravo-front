import { createReducer, on } from '@ngrx/store';
import * as catalogAction from '../catalog/actions';
import * as customersAction from '../customers/actions';
import * as ordersAction from '../orders/actions';

const INITIAL_STATE_ERROR = null;

export const errorReducers = createReducer(INITIAL_STATE_ERROR,
  on(catalogAction.catalogGetAllError, (state, action) => action.err),
  on(catalogAction.catalogAddError, (state, action) => action.err),
  on(catalogAction.catalogEditError, (state, action) => action.err),
  on(catalogAction.catalogDelError, (state, action) => action.err),
  on(catalogAction.catalogGetAllRequest, (state, action) => INITIAL_STATE_ERROR),
  on(catalogAction.catalogAddRequest, (state, action) => INITIAL_STATE_ERROR),
  on(catalogAction.catalogEditRequest, (state, action) => INITIAL_STATE_ERROR),
  on(catalogAction.catalogDelRequest, (state, action) => INITIAL_STATE_ERROR),
  on(customersAction.customersGetAllError, (state, action) => action.err),
  on(customersAction.customersAddError, (state, action) => action.err),
  on(customersAction.customersEditError, (state, action) => action.err),
  on(customersAction.customersDelError, (state, action) => action.err),
  on(customersAction.customersGetAllRequest, (state, action) => INITIAL_STATE_ERROR),
  on(customersAction.customersAddRequest, (state, action) => INITIAL_STATE_ERROR),
  on(customersAction.customersEditRequest, (state, action) => INITIAL_STATE_ERROR),
  on(customersAction.customersDelRequest, (state, action) => INITIAL_STATE_ERROR),
  on(ordersAction.ordersGetAllError, (state, action) => action.err),
  on(ordersAction.ordersGetAllAggregateError, (state, action) => action.err),
  on(ordersAction.ordersConfirmStatusError, (state, action) => action.err),
  on(ordersAction.ordersGetAllRequest, (state, action) => INITIAL_STATE_ERROR),
  on(ordersAction.ordersGetAllAggregateRequest, (state, action) => INITIAL_STATE_ERROR),
  on(ordersAction.ordersConfirmStatusRequest, (state, action) => INITIAL_STATE_ERROR),
)
