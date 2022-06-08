import { TypeAuthUser } from './../../types/index';
import { TypeSortList } from './sortBy';
import { Types } from './../types/index';
import { TypeCartItems } from "../../types"

export const actions = {
  addToCart: (cart:TypeCartItems) => ({type:Types.APP_ADD_TO_CART, cart} as const),
  removeCart: (id:number) => ({type:Types.APP_REMOVE, id} as const),
  setCart:(cart:TypeCartItems[]) => ({type:Types.APP_CART, cart} as const),
  plusCart: (id:number, count:number) => ({type:Types.APP_PLUS_CART, id, count} as const),
  minusCart: (id:number, count:number) => ({type:Types.APP_MINUS_CART, id, count} as const),
  setItems:(items:TypeCartItems[]) => ({type:Types.APP_IPHONE, items} as const),
  setAuth:(auth:TypeAuthUser | null) => ({type:Types.APP_AUTH, auth} as const),
  setCategories:(category:string | null) => ({type:Types.APP_CATEGORIES, category} as const),
  setSortBy: (sortBy:TypeSortList) => ({type:Types.APP_SORT_BY, sortBy} as const), 
  setLoading:(loading:boolean) => ({type:Types.APP_LOADING, loading} as const), 
  setIsLoader:(isLoader:boolean) => ({type:Types.APP_IS_LOADER, isLoader} as const), 
  setIsLogout: (user:null) => ({type:Types.APP_LOGOUT, payload:user} as const), 
}