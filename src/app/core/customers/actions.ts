import { createAction, props } from '@ngrx/store'

export const CUSTOMERS_GET_ALL_REQUEST = "[CUSTOMERS] Get-all requsest"
export const CUSTOMERS_GET_ALL_SUCCESS = "[CUSTOMERS] Get-all success"
export const CUSTOMERS_GET_ALL_ERROR = "[CUSTOMERS] Get-all error"

export const CUSTOMERS_ADD_REQUEST = "[CUSTOMERS] Add requsest"
export const CUSTOMERS_ADD_SUCCESS = "[CUSTOMERS] Add success"
export const CUSTOMERS_ADD_ERROR = "[CUSTOMERS] Add error"

export const CUSTOMERS_EDIT_REQUEST = "[CUSTOMERS] Edit requsest"
export const CUSTOMERS_EDIT_SUCCESS = "[CUSTOMERS] Edit success"
export const CUSTOMERS_EDIT_ERROR = "[CUSTOMERS] Edit error"

export const CUSTOMERS_DEL_REQUEST = "[CUSTOMERS] Del requsest"
export const CUSTOMERS_DEL_SUCCESS = "[CUSTOMERS] Del success"
export const CUSTOMERS_DEL_ERROR = "[CUSTOMERS] Del error"

export const customersGetAllRequest = createAction(CUSTOMERS_GET_ALL_REQUEST);
export const customersGetAllSuccess = createAction(CUSTOMERS_GET_ALL_SUCCESS, props<{ payload: any[] }>());
export const customersGetAllError = createAction(CUSTOMERS_GET_ALL_ERROR, props<{ err: any }>());

export const customersAddRequest = createAction(CUSTOMERS_ADD_REQUEST, props<{ payload: any }>());
export const customersAddSuccess = createAction(CUSTOMERS_ADD_SUCCESS, props<{ payload: any }>());
export const customersAddError = createAction(CUSTOMERS_ADD_ERROR, props<{ err: any }>());

export const customersEditRequest = createAction(CUSTOMERS_EDIT_REQUEST, props<{ payload: any, id: string }>()); // , (payload, id) => ({ payload, id })
export const customersEditSuccess = createAction(CUSTOMERS_EDIT_SUCCESS, props<{ payload: any }>());
export const customersEditError = createAction(CUSTOMERS_EDIT_ERROR, props<{ err: any }>()); //(error: any) => (error)


export const customersDelRequest = createAction(CUSTOMERS_DEL_REQUEST, props<{ id: any }>());
export const customersDelSuccess = createAction(CUSTOMERS_DEL_SUCCESS, props<{ id: any }>());
export const customersDelError = createAction(CUSTOMERS_DEL_ERROR, props<{ err: any }>());

