import { ActionTypes } from './../reducers/index';
import { Types } from '../types';

type TypeSortVoid = (sortBy:TypeSortList) => ActionTypes

export type TypeSortList = {
  type:string | null
  order:string
}

export const setSortBy:TypeSortVoid = (sortBy:TypeSortList):ActionTypes => {
  return {
    type:Types.APP_SORT_BY,
    sortBy
  }
}