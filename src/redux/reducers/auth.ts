import { TypeAuth } from '../../types';
import { ActionTypes } from './../reducers/index';
import { Types } from './../types/index';

const initialState: TypeAuth = {
  auth:null,
  isLoader:true,
  isAuth:false
} as TypeAuth

type TypeInitialState = typeof initialState

export const auth = (state:TypeInitialState = initialState, action:ActionTypes):TypeInitialState => {
  switch (action.type) {
    case Types.APP_AUTH: {
      return {
        ...state,
        auth:action.auth,
        isAuth:true,
      }
    }

    case Types.APP_IS_LOADER: {
      return {
        ...state,
        isLoader:action.isLoader
      }
    }
    
    case Types.APP_LOGOUT: {
      return {
        ...state,
        auth:null
      }
    }

    default:
      return state
  }
}