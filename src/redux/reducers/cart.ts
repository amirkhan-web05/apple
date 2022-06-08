import { ActionTypes } from './../reducers/index';
import { Types } from '../types';
import { TypeCartItems, TypeCartList } from './../../types/index';

const initialState:TypeCartList = {
  cart:[] as TypeCartItems[]
}

type TypeInitialState = typeof initialState

export const cart = (state:TypeInitialState = initialState, action:ActionTypes):TypeInitialState => {
  switch (action.type) {
    case Types.APP_CART: {
      return {...state, cart:action.cart}
    }
    
    case Types.APP_ADD_TO_CART: {
      const {id}:any = action.cart
      const findItems:TypeCartItems | undefined = state.cart.find((item:TypeCartItems) => item.id === id)

      if (findItems) {
        findItems.count++
      } else {
        return {
          ...state,
          cart:[...state.cart, action.cart]
        }
      }

      return state
    }

    case Types.APP_REMOVE: {
      return {
        ...state,
        cart:state.cart.filter((item) => item.id !== action.id)
      }
    }

    case Types.APP_PLUS_CART: {
      return {
        ...state,
        cart:state.cart.map((item) => {
          if (item.id === action.id) {
            item.count += 1 
          }

          return item
        }),
        // cart:[...state.cart]
      }
    }

    case Types.APP_MINUS_CART: {
      return {
        ...state,
        cart:state.cart.map((item) => {
          if (item.id === action.id) {
            item.count === 1 ? item.count = 1 : item.count -= 1  
          }
          return item
        }),
        // cart:[...state.cart]
      }
    }

    default:
      return state
  }
}