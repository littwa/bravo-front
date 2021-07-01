import { ActionReducerMap, createReducer, on } from '@ngrx/store'
import * as action from './actions';

export interface StateAuth {
  manager: StateManger,
  token: string,
  error: any,
}

export interface StateManger {
  isAuthenticated: boolean;
  email: any;
}
export interface StateError {
  error: any;
}

export interface StateToken {
  token: string;
}

export const INIT_STATE: StateManger = {
  isAuthenticated: null,
  email: null,
};

export const INIT_STATE_ERROR: StateError = {
  error: null,
};

export const INIT_STATE_TOKEN: StateToken = {
  token: null,
};

export const reducer = createReducer(
  INIT_STATE,
  // on(authLogInManagerRequest, (state) => { return state }),
  on(action.authGetCurrentManagerSuccess, (state, action) => ({ ...state, isAuthenticated: true, email: action.email })),
  on(action.authLogInManagerSuccess, (state, action) => ({ ...state, email: action.payload.email })),
  on(action.authVerifyManagerSuccess, (state, action) => ({ ...state, isAuthenticated: true, email: action.payload.email })),
  on(action.authLogInManagerError, (state, action) => INIT_STATE),
  on(action.authVerifyManagerError, (state, action) => INIT_STATE),
  on(action.authLogOutManagerError, (state, action) => INIT_STATE),
  on(action.authLogOutManagerSuccess, (state, action) => INIT_STATE),
)

export const reducerError = createReducer(
  INIT_STATE_ERROR,
  on(action.authLogInManagerError, (state, action) => ({ error: action.err })),
  on(action.authVerifyManagerError, (state, action) => ({ error: action.err })),
  on(action.authLogOutManagerError, (state, action) => ({ error: action.err })),
  on(action.authGetCurrentManagerError, (state, action) => ({ error: action.err })),
  on(action.authLogInManagerRequest, (state, action) => INIT_STATE_ERROR),
  on(action.authVerifyManagerRequest, (state, action) => INIT_STATE_ERROR),
  on(action.authLogOutManagerRequest, (state, action) => INIT_STATE_ERROR),
  on(action.authGetCurrentManagerRequest, (state, action) => INIT_STATE_ERROR),
)

export const reducerToken = createReducer(
  INIT_STATE_TOKEN,
  on(action.authGetCurrentManagerSuccess, (state, action) => ({ token: action.token })),
  on(action.authVerifyManagerSuccess, (state, action) => ({ token: action.payload.token })),
  on(action.authVerifyManagerError, (state, action) => INIT_STATE_TOKEN),
  on(action.authLogOutManagerSuccess, (state, action) => INIT_STATE_TOKEN),
)

export const reducers: ActionReducerMap<any> = {
  manager: reducer,
  token: reducerToken,
  error: reducerError,
};

export const getAuthManager = (state: StateAuth): StateManger => state.manager;
export const getIsAuth = (state: StateAuth): boolean => state.manager.isAuthenticated;
export const getEmailManager = (state: StateAuth): boolean => state.manager.email;
export const getAuthToken = (state: StateAuth): string => state.token;
export const getAuthError = (state: StateAuth): any => state.error.error;
