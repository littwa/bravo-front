import { createAction, props } from '@ngrx/store'

export const AUTH_LOG_IN_MANAGER_REQUEST = '[AUTH] Log-in manager Request'
export const AUTH_LOG_IN_MANAGER_SUCCESS = '[AUTH] Log-in manager Success'
export const AUTH_LOG_IN_MANAGER_ERROR = '[AUTH] Log-in manager Error'

export const AUTH_VERIFY_MANAGER_REQUEST = '[AUTH] Verify manager Request'
export const AUTH_VERIFY_MANAGER_SUCCESS = '[AUTH] Verify manager Success'
export const AUTH_VERIFY_MANAGER_ERROR = '[AUTH] Verify manager Error'

export const AUTH_LOG_OUT_MANAGER_REQUEST = '[AUTH] Log-out manager Request'
export const AUTH_LOG_OUT_MANAGER_SUCCESS = '[AUTH] Log-out manager Success'
export const AUTH_LOG_OUT_MANAGER_ERROR = '[AUTH] Log-out manager Error'

export const AUTH_GET_CURRENT_MANAGER_REQUEST = '[AUTH] Get-current manager Request'
export const AUTH_GET_CURRENT_MANAGER_SUCCESS = '[AUTH] Get-current manager Success'
export const AUTH_GET_CURRENT_MANAGER_ERROR = '[AUTH] Get-current manager Error'

export const authLogInManagerRequest = createAction(AUTH_LOG_IN_MANAGER_REQUEST, props<{ email: any, role: string }>());
export const authLogInManagerSuccess = createAction(AUTH_LOG_IN_MANAGER_SUCCESS, props<{ payload: any }>());
export const authLogInManagerError = createAction(AUTH_LOG_IN_MANAGER_ERROR, props<{ err: any }>());

export const authVerifyManagerRequest = createAction(AUTH_VERIFY_MANAGER_REQUEST, props<{ payload: any }>());
export const authVerifyManagerSuccess = createAction(AUTH_VERIFY_MANAGER_SUCCESS, props<{ payload: any }>());
export const authVerifyManagerError = createAction(AUTH_VERIFY_MANAGER_ERROR, props<{ err: any }>());

export const authLogOutManagerRequest = createAction(AUTH_LOG_OUT_MANAGER_REQUEST);
export const authLogOutManagerSuccess = createAction(AUTH_LOG_OUT_MANAGER_SUCCESS);
export const authLogOutManagerError = createAction(AUTH_LOG_OUT_MANAGER_ERROR, props<{ err: any }>());

export const authGetCurrentManagerRequest = createAction(AUTH_GET_CURRENT_MANAGER_REQUEST);
export const authGetCurrentManagerSuccess = createAction(AUTH_GET_CURRENT_MANAGER_SUCCESS, props<{ email: any, token: any, role: string }>());
export const authGetCurrentManagerError = createAction(AUTH_GET_CURRENT_MANAGER_ERROR, props<{ err: any }>());
