import { ThunkAction } from 'redux-thunk';
import { loading } from './loading';
import { soryBy } from './sortBy';
import { categories } from './categories';
import { auth } from './auth';
import { cart } from './cart';
import { items } from './items';
import { combineReducers } from "redux";
import { actions } from '../actions/action-creators';

export const rootReducers = combineReducers({
  items,
  cart,
  auth,
  categories,
  soryBy,
  loading
})

export type InferValueTypes<T> = T extends {[key:string]:infer U} ? U : never
export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>
export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export type AppStateType = ReturnType<typeof rootReducers>
export type RootState = ReturnType<typeof rootReducers>