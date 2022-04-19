import { TypeCartItems } from './../types/index';
import { TypeSortList } from '../redux/actions/sortBy';
import { instance } from './api';

export const itemsAPI = {
  getItems(category:string | null, sortBy:TypeSortList) {
    return instance.get<TypeCartItems[]>(`/iPhone?${category ? `category=${category}` : null}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then((res) => res.data)
  }
}