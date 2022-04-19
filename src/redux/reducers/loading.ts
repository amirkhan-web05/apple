import { TypeLoadingList } from './../../types/index';
import { Types } from '../types';
import { ActionTypes } from './../reducers/index';

const initialState:TypeLoadingList = {
  loading:false
}

type TypeInitialState = typeof initialState

export const loading = (state:TypeInitialState = initialState, action:ActionTypes):TypeInitialState => {
  switch (action.type) {
    case Types.APP_LOADING: {
      return {
        ...state,
        loading:action.loading
      }
    }
    
    default:
      return state
  }
}