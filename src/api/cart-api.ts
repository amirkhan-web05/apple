import { TypeCartItems } from './../types/index';
import { instance, APIResponseType } from './api';

export const cartAPI = {
  getCart() {
    return instance.get<TypeCartItems[]>('/cart').then(res => res.data)
  },

  add(cart:TypeCartItems){
    return instance.post<APIResponseType<TypeCartItems>>('/cart', cart)
  },

  remove(id:number) {
    return instance.delete<APIResponseType<TypeCartItems>>(`/cart/${id}`)
  },

  counter(id:number, count:number) {
    return instance.patch<APIResponseType<TypeCartItems>>(`/cart/${id}`, {
      count:count
    })
  }
}