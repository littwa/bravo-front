import { createReducer, ActionReducerMap, on } from '@ngrx/store'
import { catalogGetAllError, catalogGetAllSuccess, catalogAddSuccess, catalogEditSuccess, catalogDelSuccess } from './actions'

export interface Product {
  availability: string,
  price: object,
  product: string,
  productCode: string,
  quantity: string,
  unit: string,
  exclusively: string,
  replacementProducts: string,
  _id: string,
}

const INITIAL_STATE_CATALOG: Product[] = []

export const catalogReducer = createReducer(INITIAL_STATE_CATALOG,
  on(catalogGetAllSuccess, (state, action) => [...action.payload]),
  on(catalogAddSuccess, (state, action) => [...state, action.payload]),
  on(catalogEditSuccess, (state, action) => [...state.map(product => product._id === action.payload._id ? action.payload : product)]),
  on(catalogDelSuccess, (state, action) => [...state.filter(product => product._id !== action.id)]),
);

export const getProducts = (state: Product[]): Product[] => state;



