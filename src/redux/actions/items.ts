import { ThunkType, ActionTypes } from './../reducers/index';
import { cartAPI } from './../../api/cart-api';
import { authAPI } from './../../api/auth-api';
import { AxiosResponse } from 'axios';
import { itemsAPI } from './../../api/items-api';
import { actions } from './action-creators';
import { TypeCartItems, TypeAuthUser } from './../../types/index';
import { Dispatch } from 'react';
import { TypeSortList } from './sortBy';

export const fetchCartItems = ():ThunkType => async (dispatch) => {
  const data:TypeCartItems[] = await cartAPI.getCart()
  dispatch(actions.setCart(data))
}

export const fetchAccount = ():ThunkType => async (dispatch) => {
  authAPI.me().then(({data}:AxiosResponse) => {
    const mockUsers = data.find((item:TypeAuthUser) => item.email && item.password)
    if (mockUsers) {
      dispatch(actions.setAuth(mockUsers))
    }
    dispatch(actions.setIsLoader(false))
  })
}

export const getItemsCart = (category:string | null, sortBy:TypeSortList):ThunkType => async (dispatch:Dispatch<ActionTypes>) => {
  const data:TypeCartItems[] = await itemsAPI.getItems(category, sortBy) 
  dispatch(actions.setItems(data))
}

export const fetchRemove = (id:number):ThunkType => async (dispatch) => {
  cartAPI.remove(id).then(() => {
    dispatch(actions.removeCart(id))
  })
}

export const fetchPlus = (id:number, count:number):ThunkType => async (dispatch) => {
  cartAPI.counter(id, count).then(() => {
    dispatch(actions.plusCart(id, count))
  })
}

export const fetchMinus = (id:number, count:number):ThunkType => async (dispatch) => {
  cartAPI.counter(id, count).then(() => {
    dispatch(actions.minusCart(id, count))
  })
}

export const fetchCartPost = (cart:TypeCartItems):ThunkType => async (dispatch) => {
  cartAPI.add(cart).then(() => {
    dispatch(actions.addToCart(cart))
  })
}

