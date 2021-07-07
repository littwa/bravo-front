import { createReducer, ActionReducerMap, on } from '@ngrx/store'
import { ordersGetAllAggregateSuccess, ordersGetAllSuccess, ordersConfirmStatusSuccess, ordersAddSuccess, ordersEditSuccess } from './actions';


export interface Order {
  _id: string;
  orderNo: string,
  customer: string,
  customerNo: string,
  items: string,
  notes: string,
  ordered: object,
  reqDelivery: object,
  status: boolean
  productsList: any[]
}


const INITIAL_STATE_CUSTOMERS: Order[] = []

export const ordersReducer = createReducer(INITIAL_STATE_CUSTOMERS,
  on(ordersGetAllAggregateSuccess, (state, action) => [...action.payload]),
  on(ordersGetAllSuccess, (state, action) => [...action.payload]),
  on(ordersConfirmStatusSuccess, (state, action) => [...state.map(order => order._id === action.payload._id ? action.payload : order)]),
  on(ordersAddSuccess, (state, action) => [...state, action.payload]),
  on(ordersEditSuccess, (state, action) => [...state.map(order => order._id === action.payload._id ? action.payload : order)])
);

export const getOrders = (state: Order[]): Order[] => state;





// ordersAddSuccess

