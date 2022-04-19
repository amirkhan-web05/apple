import { TypeItemsList, TypeCartItems } from './../../types/index';
import { ActionTypes } from './../reducers/index';
import { Types } from './../types/index';

const initialState:TypeItemsList = {
  items:[] as TypeCartItems[],
}

type TypeInitialState = typeof initialState

export const items = (state:TypeInitialState = initialState, action:ActionTypes):TypeInitialState => {
  switch (action.type) {
    case Types.APP_IPHONE: {
      return {
        ...state,
        items:action.items
      }
    }

    default:
      return state
  }
}