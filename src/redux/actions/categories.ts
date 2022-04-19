import { ActionTypes } from './../reducers/index';
import { Types } from './../types/index';

type TypeSetCategories = ReturnType<typeof setCategories>
type TypeVoidCategories = (category:string | null) => ActionTypes

export const setCategories:TypeVoidCategories = (category:string | null):TypeSetCategories => {
  return {
    type:Types.APP_CATEGORIES,
    category
  }
}