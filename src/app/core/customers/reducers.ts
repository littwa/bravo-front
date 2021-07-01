import { createReducer, ActionReducerMap, on } from '@ngrx/store'
import { customersGetAllRequest, customersAddSuccess, customersGetAllSuccess, customersEditSuccess } from './actions';
// import { catalogGetAllError, catalogGetAllSuccess, catalogAddSuccess, catalogEditSuccess, catalogDelSuccess } from './actions'

export interface Customer {
  _id: string;
  deliveryDays: string,
  shortlistedProducts: string,
  customerNo: string,
  name: string,
  deliveryAddress: string,
  contactName: string,
  mobilePhone: string,
  notifyCustomerMessage: boolean
}

const INITIAL_STATE_CUSTOMERS: Customer[] = []

export const customersReducer = createReducer(INITIAL_STATE_CUSTOMERS,
  on(customersGetAllSuccess, (state, action) => [...action.payload]),
  on(customersAddSuccess, (state, action) => [...state, action.payload]),
  on(customersEditSuccess, (state, action) => [...state.map(product => product._id === action.payload._id ? action.payload : product)]),
);

export const getCustomers = (state: Customer[]): Customer[] => state;



