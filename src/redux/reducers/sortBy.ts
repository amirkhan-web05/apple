import { TypeSortItem } from './../../types/index';
import { Types } from './../types/index';
import { ActionTypes } from './../reducers/index';

const initialState:TypeSortItem = {
  sortBy: {
    type:null,
    order:''
  }
}

type TypeInitialState = typeof initialState

export const soryBy = (state:TypeInitialState = initialState, action:ActionTypes):TypeInitialState => {
  switch (action.type) {
    case Types.APP_SORT_BY: {
      return {
        ...state,
        sortBy:action.sortBy
      }
    }

    default:
      return state
  }
}