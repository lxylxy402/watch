import { get, post } from './http.js'
export const apiGetList = p => get('/home', p);
export const apiGetBrand = p => get(`/brand/${p}`);
export const apiGetDetail = p => get(`/detail/${p}`);
export const apiOrderAdd = params => post(`/orders/add`, params);
export const apiGetOrder = params => post(`/orders/get`, params);