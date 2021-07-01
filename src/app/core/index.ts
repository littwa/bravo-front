import { Params } from '@angular/router';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { createSelector } from 'reselect';


import * as catalogReducers from './catalog/reducers';
import * as customersReducers from './customers/reducers';
import * as ordersReducers from "./orders/reducers"
import * as authReducers from "./auth/reducers"
import * as loadingReducers from "./loading/reducers"
import * as notifyReducers from "./notify/reducers"

export const getCatalogsState = (state) => state.catalog;
export const getCustomersState = (state) => state.customers;
export const getOrdersState = (state) => state.orders;
export const getAuthState = (state) => state.auth;
export const getLoadingState = (state) => state.loading;
export const getNotifyState = (state) => state.notify;

export const getCatalog = createSelector(getCatalogsState, catalogReducers.getProducts);
export const getCustomers = createSelector(getCustomersState, customersReducers.getCustomers)
export const getOrders = createSelector(getOrdersState, ordersReducers.getOrders)
export const getAuthManager = createSelector(getAuthState, authReducers.getAuthManager)
export const getIsAuthentication = createSelector(getAuthState, authReducers.getIsAuth)
export const getEmailManager = createSelector(getAuthState, authReducers.getEmailManager)
export const getAuthToken = createSelector(getAuthState, authReducers.getAuthToken)
export const getErrorAuth = createSelector(getAuthState, authReducers.getAuthError)
export const getLoading = createSelector(getLoadingState, loadingReducers.getLoading)
export const getNotify = createSelector(getNotifyState, notifyReducers.getNotify)
