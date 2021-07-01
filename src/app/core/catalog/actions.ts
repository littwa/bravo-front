import { createAction, props } from '@ngrx/store'

export const CATALOG_GET_ALL_REQUEST = "[CATALOG] Get-all requsest"
export const CATALOG_GET_ALL_SUCCESS = "[CATALOG] Get-all success"
export const CATALOG_GET_ALL_ERROR = "[CATALOG] Get-all error"

export const CATALOG_ADD_REQUEST = "[CATALOG] Add requsest"
export const CATALOG_ADD_SUCCESS = "[CATALOG] Add success"
export const CATALOG_ADD_ERROR = "[CATALOG] Add error"

export const CATALOG_EDIT_REQUEST = "[CATALOG] Edit requsest"
export const CATALOG_EDIT_SUCCESS = "[CATALOG] Edit success"
export const CATALOG_EDIT_ERROR = "[CATALOG] Edit error"

export const CATALOG_DEL_REQUEST = "[CATALOG] Del requsest"
export const CATALOG_DEL_SUCCESS = "[CATALOG] Del success"
export const CATALOG_DEL_ERROR = "[CATALOG] Del error"

export const catalogGetAllRequest = createAction(CATALOG_GET_ALL_REQUEST);
export const catalogGetAllSuccess = createAction(CATALOG_GET_ALL_SUCCESS, props<{ payload: any[] }>());
export const catalogGetAllError = createAction(CATALOG_GET_ALL_ERROR, props<{ err: any }>());

export const catalogAddRequest = createAction(CATALOG_ADD_REQUEST, props<{ payload: any }>());
export const catalogAddSuccess = createAction(CATALOG_ADD_SUCCESS, props<{ payload: any }>());
export const catalogAddError = createAction(CATALOG_ADD_ERROR, props<{ err: any }>());

export const catalogEditRequest = createAction(CATALOG_EDIT_REQUEST, props<{ payload: any, id: string }>()); // , (payload, id) => ({ payload, id })
export const catalogEditSuccess = createAction(CATALOG_EDIT_SUCCESS, props<{ payload: any }>());
export const catalogEditError = createAction(CATALOG_EDIT_ERROR, props<{ err: any }>());


export const catalogDelRequest = createAction(CATALOG_DEL_REQUEST, props<{ id: any }>());
export const catalogDelSuccess = createAction(CATALOG_DEL_SUCCESS, props<{ id: any }>());
export const catalogDelError = createAction(CATALOG_DEL_ERROR, props<{ err: any }>());

// props<{ payload: any, id: any }>()
//(error: any) => (error)
