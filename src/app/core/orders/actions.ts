import { createAction, props } from '@ngrx/store'

export const ORDERS_GET_ALL_REQUEST = "[ORDERS] Get-all requsest"
export const ORDERS_GET_ALL_SUCCESS = "[ORDERS] Get-all success"
export const ORDERS_GET_ALL_ERROR = "[ORDERS] Get-all error"

export const ORDERS_GET_ALL_AGGREGATE_REQUEST = "[ORDERS] Get-all aggregate-products requsest"
export const ORDERS_GET_ALL_AGGREGATE_SUCCESS = "[ORDERS] Get-all aggregate-products success"
export const ORDERS_GET_ALL_AGGREGATE_ERROR = "[ORDERS] Get-all aggregate-products error"

export const ORDERS_CONFIRM_STATUS_REQUEST = "[ORDERS] Confirm requsest"
export const ORDERS_CONFIRM_SUCCESS = "[ORDERS] Confirm success"
export const ORDERS_CONFIRM_ERROR = "[ORDERS] Confirm error"

export const ORDERS_ADD_REQUEST = "[ORDERS] Add requsest"
export const ORDERS_ADD_SUCCESS = "[ORDERS] Add success"
export const ORDERS_ADD_ERROR = "[ORDERS] Add error"

export const ORDERS_EDIT_REQUEST = "[ORDERS] Edit requsest"
export const ORDERS_EDIT_SUCCESS = "[ORDERS] Edit success"
export const ORDERS_EDIT_ERROR = "[ORDERS] Edit error"

// export const ORDERS_DEL_REQUEST = "[ORDERS] Del requsest"
// export const ORDERS_DEL_SUCCESS = "[ORDERS] Del success"
// export const ORDERS_DEL_ERROR = "[ORDERS] Del error"

export const ordersGetAllRequest = createAction(ORDERS_GET_ALL_REQUEST);
export const ordersGetAllSuccess = createAction(ORDERS_GET_ALL_SUCCESS, props<{ payload: any[] }>());
export const ordersGetAllError = createAction(ORDERS_GET_ALL_ERROR, props<{ err: any }>());

export const ordersGetAllAggregateRequest = createAction(ORDERS_GET_ALL_AGGREGATE_REQUEST);
export const ordersGetAllAggregateSuccess = createAction(ORDERS_GET_ALL_AGGREGATE_SUCCESS, props<{ payload: any[] }>());
export const ordersGetAllAggregateError = createAction(ORDERS_GET_ALL_AGGREGATE_ERROR, props<{ err: any }>());

export const ordersConfirmStatusRequest = createAction(ORDERS_CONFIRM_STATUS_REQUEST, props<{ payload: any, id: string }>()); // , (payload, id) => ({ payload, id })
export const ordersConfirmStatusSuccess = createAction(ORDERS_CONFIRM_SUCCESS, props<{ payload: any }>());
export const ordersConfirmStatusError = createAction(ORDERS_CONFIRM_ERROR, props<{ err: any }>()); //(error: any) => (error)

export const ordersAddRequest = createAction(ORDERS_ADD_REQUEST, props<{ payload: any }>());
export const ordersAddSuccess = createAction(ORDERS_ADD_SUCCESS, props<{ payload: any }>());
export const ordersAddError = createAction(ORDERS_ADD_ERROR, props<{ err: any }>());

export const ordersEditRequest = createAction(ORDERS_EDIT_REQUEST, props<{ payload: any, id: string }>()); // , (payload, id) => ({ payload, id })
export const ordersEditSuccess = createAction(ORDERS_EDIT_SUCCESS, props<{ payload: any }>());
export const ordersEditError = createAction(ORDERS_EDIT_ERROR, props<{ err: any }>()); //(error: any) => (error)


// export const ordersDelRequest = createAction(ORDERS_DEL_REQUEST, props<{ id: any }>());
// export const ordersDelSuccess = createAction(ORDERS_DEL_SUCCESS, props<{ id: any }>());
// export const ordersDelError = createAction(ORDERS_DEL_ERROR, props<{ err: any }>());

