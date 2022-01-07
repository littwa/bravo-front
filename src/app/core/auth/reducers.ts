import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import * as Actions from './actions';

export interface StateAuth {
  manager: StateManger;
  tokens: string;
  error: any;
  role: string;
}

export interface StateManger {
  isAuthenticated: boolean;
  email: any;
  role: string;
}

export interface StateError {
  error: any;
}

export interface StateToken {
  accessToken: string;
  refreshToken: string;
}

export const INIT_STATE: StateManger = {
  isAuthenticated: null,
  email: null,
  role: null,
};

export const INIT_STATE_ERROR: StateError = {
  error: null,
};

export const INIT_STATE_TOKEN: StateToken = {
  accessToken: null,
  refreshToken: null,
};

export const reducer = createReducer(
  INIT_STATE,
  on(Actions.authGetCurrentManagerSuccess, (state, action) => ({ ...state, isAuthenticated: true, email: action.email, role: action.role })),
  on(Actions.authLogInManagerSuccess, (state, action) => ({ ...state, email: action.payload.email, role: action.payload.role })),
  on(Actions.authVerifyManagerSuccess, (state, action) => ({ ...state, isAuthenticated: true, email: action.payload.email, role: action.payload.role })),
  on(Actions.authLogInManagerError, (state, action) => INIT_STATE),
  on(Actions.authVerifyManagerError, (state, action) => INIT_STATE),
  on(Actions.authLogOutManagerError, (state, action) => INIT_STATE),
  on(Actions.authLogOutManagerSuccess, (state, action) => INIT_STATE),
);

export const reducerError = createReducer(
  INIT_STATE_ERROR,
  on(Actions.authLogInManagerError, (state, action) => ({ error: action.err })),
  on(Actions.authVerifyManagerError, (state, action) => ({ error: action.err })),
  on(Actions.authLogOutManagerError, (state, action) => ({ error: action.err })),
  on(Actions.authGetCurrentManagerError, (state, action) => ({ error: action.err })),
  on(Actions.authSignInCustomerError, (state, action) => ({ error: action.err })),
  on(Actions.authLogInManagerRequest, (state, action) => INIT_STATE_ERROR),
  on(Actions.authVerifyManagerRequest, (state, action) => INIT_STATE_ERROR),
  on(Actions.authLogOutManagerRequest, (state, action) => INIT_STATE_ERROR),
  on(Actions.authGetCurrentManagerRequest, (state, action) => INIT_STATE_ERROR),
);

export const reducerToken = createReducer(
  INIT_STATE_TOKEN,
  on(Actions.authGetCurrentManagerSuccess, (state, action) => action.tokens),
  on(Actions.authVerifyManagerSuccess, (state, action) => action.payload.tokens),
  on(Actions.authSignInCustomerSuccess, (state, action) => action.payload.tokens),
  on(Actions.authVerifyManagerError, (state, action) => INIT_STATE_TOKEN),
  on(Actions.authLogOutManagerSuccess, (state, action) => INIT_STATE_TOKEN),
);

export const reducers: ActionReducerMap<any> = {
  manager: reducer,
  tokens: reducerToken,
  error: reducerError,
};

export const getAuthManager = (state: StateAuth): StateManger => state.manager;
export const getIsAuth = (state: StateAuth): boolean => state.manager.isAuthenticated;
export const getEmailManager = (state: StateAuth): boolean => state.manager.email;
export const getAuthToken = (state: StateAuth): string => state.tokens;
export const getAuthError = (state: StateAuth): any => state.error.error;
export const getUserRole = (state: StateAuth): any => state.manager.role;
