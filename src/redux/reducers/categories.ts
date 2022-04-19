import { setCategories } from './../actions/categories';
import { TypeCategoriesItem } from './../../types/index';
import { Types } from './../types/index';

const initialState:TypeCategoriesItem = {
  categories:null
}

type TypeInitialState = typeof initialState
type ActionTypes = ReturnType<typeof setCategories>

export const categories = (state:TypeInitialState = initialState, action:ActionTypes):TypeInitialState => {
  switch (action.type) {
    case Types.APP_CATEGORIES: {
      return {
        ...state,
        categories:action.category
      }
    }
    default:
      return state
  }
}