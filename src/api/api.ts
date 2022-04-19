import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3001',
});

export type APIResponseType<D> = {
  data: D
}
