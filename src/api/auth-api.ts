import { TypeAuth, TypeAuthUser } from './../types/index';
import { instance, APIResponseType } from './api';

// в register появляеются данные, сравнивает с auth если есть то входи и --появляйся

export const authAPI = {
  me() {
    return instance.get<APIResponseType<TypeAuthUser>>('/auth')
  },

  login(user:TypeAuthUser) {
    return instance.post<APIResponseType<TypeAuth>>('/auth', user)
  },

  logout(id:number) {
    return instance.delete<APIResponseType<TypeAuth>>(`/auth/${id}`)
  }
}