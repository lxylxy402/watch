import { 
  apiGetDetail,
  apiGetBrand,
  apiGetList,
  apiOrderAdd,
  apiGetOrder
} from './api.js'

export const getBrand = async (params) => {
  let ret = await apiGetBrand(params)
  return ret
}
export const getList = async (params) => {
    let ret = await apiGetList(params)
    return ret
}
export const getDetail = async (params) => {
    let ret = await apiGetDetail(params)
    return ret
}
export const orderAdd = async (params) => {
    let ret = await apiOrderAdd(params)
    return ret
}
export const getOrder = async (params) => {
    let ret = await apiGetOrder(params)
    return ret
}