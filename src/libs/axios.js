import axios from 'axios'
// import { Message } from 'element-ui'
// import qs from 'qs'
import config from './config'

if (process.server) {
  config.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}

const service = axios.create(config)

// axios.defaults.['body'] = '123'

// POST 传参序列化
service.interceptors.request.use(
  config => {
    // let url = config.url.replace('/shujujia', '')
    // config.url = url
    // if (config.method === 'post') config.data = qs.stringify(config.data)
  // 在发送请求之前携带上默认的参数
  // 判断请求方式
    if (config.method === 'post') {
      // post请求
      config.data = config.params
      config.params = ''
      // config.body = config.params
      // config.headers.body = JSON.stringify(config.params)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 返回状态判断
service.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default {
  post (url, data) {
    return service({
      method: 'post',
      url,
      params: data
    })
  },
  get (url, data) {
    return service({
      method: 'get',
      url,
      params: data
    })
  },
  delete (url, data) {
    return service({
      methods: 'delete',
      url,
      params: data
    })
  }
}
