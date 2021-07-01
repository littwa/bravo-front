import { createReducer, ActionReducerMap, on } from '@ngrx/store'
import { orderRequest } from './actions'

interface DataState {
  order: any[];
  customers: any[];
  catalog: any[];
}
const INITIAL_STATE_DATA: DataState = {
  order: [],
  customers: [],
  catalog: [],
}
export const dataReducer = createReducer(INITIAL_STATE_DATA,
  on(orderRequest, (state, action) => ({ ...state, order: [...state.order, action] }))
);
