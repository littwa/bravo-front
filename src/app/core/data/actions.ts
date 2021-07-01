import { createAction, props } from '@ngrx/store'

export const DATA_ORDER_REQUEST = "[Data] Order requsest"
export const DATA_ORDER_SUCCESS = "[Data] Order success"
export const DATA_ORDER_ERROR = "[Data] Order error"

export const DATA_CATALOG_REQUEST = "[Data] Catalog requsest"
export const DATA_CATALOG_SUCCESS = "[Data] Catalog success"
export const DATA_CATALOG_ERROR = "[Data] Catalog error"

export const DATA_CUSTOMERS_REQUEST = "[Data] Customers requsest"
export const DATA_CUSTOMERS_SUCCESS = "[Data] Customers success"
export const DATA_CUSTOMERS_ERROR = "[Data] Customers error"

// export const orderRequest = createAction(DATA_ORDER_REQUEST, (payload) => ({ payload }));
export const orderRequest = createAction(DATA_ORDER_REQUEST, props<{ payload: number }>());
// props<{ id: string }>()
