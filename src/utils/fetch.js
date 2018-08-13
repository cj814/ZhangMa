import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // request timeout
})

const serviceUrl = 'dataservice/ZM/RequestHandler/DataHandler.ashx?Assembly=CunJuInformationPlatformDataService&ClassName=CunJuInformationPlatformDataService.ZM.ZMApp_Control.'
const imgUrl = process.env.BASE_API + '/dataservice/PhotoManage.ashx'

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
service.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
// 响应拦截器
service.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

// 封装service的get或post请求
export function fetch (url, method, params) {
  return new Promise((resolve, reject) => {
    if (method === 'get') {
      service.get(serviceUrl + url, params)
        .then(response => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    }
    if (method === 'post') {
      service.post(serviceUrl + url, params)
        .then(response => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    }
  })
}

export { imgUrl }
