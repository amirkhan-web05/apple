import { TypeAuthUser } from './../../types/index';
import { ActionTypes, ThunkType } from './../reducers/index';
import { actions } from './action-creators';
import { authAPI } from './../../api/auth-api';
import { Dispatch } from 'react';

export type TypeVoidAuth = (data:TypeAuthUser) => ActionTypes
export type TypeVoidLoading = (isLoading:boolean) => ActionTypes

export const createUser = (user:TypeAuthUser):ThunkType => async (dispatch:Dispatch<ActionTypes>) => {
  dispatch(actions.setLoading(true))
  authAPI.login(user).then(() => {
    if (user) {
      dispatch(actions.setAuth(user))
    }
  }).finally(() => {
    dispatch(actions.setLoading(false))
  })
}

export const removeUser = (id:number):ThunkType => async (dispatch) => {
  authAPI.logout(id).then(() => {
    dispatch(actions.setIsLogout(null))
  })
}