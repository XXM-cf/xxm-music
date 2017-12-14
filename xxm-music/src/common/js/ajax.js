import axios from 'axios'
import querystring from 'querystring'
import store from '@/store/index'

const base = ''
var baseConfig = {
  baseURL: '',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  withCredentials: true,
  transformRequest: [
    function(data) {
      return querystring.stringify(data)
    }
  ],
  paramsSerializer: function(params) {
    return querystring.stringify(params, {
      arrayFormat: 'brackets'
    })
  }
}

// headers: {
//       referer: 'https://c.y.qq.com/',
//       host: 'c.y.qq.com'
//     },
// axios.defaults.withCredentials = true
// axios.defaults.baseURL = ''
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.transformRequest = [
//   function(data) {
//     return querystring.stringify(data)
//   }
// ]
// axios.defaults.paramsSerializer = function(params) {
//   return querystring.stringify(params, {
//     arrayFormat: 'brackets'
//   })
// }

axios.interceptors.request.use(function(config) { // 添加请求拦截器
  store.commit('UPDATE_LOADING', true) // 请求成功之前 显示loading
  return config // 在发送请求之前做些什么
}, function(error) { // 对请求错误做些什么
  return Promise.reject(error)
})

axios.interceptors.response.use(function(response) { // 添加响应拦截器
  store.commit('UPDATE_LOADING', false) // 请求完成之后 关闭loading
  return response // 对响应数据做点什么
}, function(error) {
  console.log(error.msg)
  // 对响应错误做点什么
  store.commit('UPDATE_LOADING', false)
  return Promise.reject(error)
})

var ajax = {
  get: function(path, params, baseConfig) { //  type为true不过滤空字符串的发送
    var config
    if (params === void 0) {
      config = `${base}` + path
    } else {
      params = trimObject(params) //  过滤空字符串的发送
      config = `${base}` + path + '?' + querystring.stringify(params)
    }
    return axios.get(config, baseConfig).then(res => res.data)
  },
  post: function(path, params) {
    if (params === void 0) {
      params = {}
    }
    params = trimObject(params)
    axios.post(`${base}` + path, params, baseConfig).then(res => res.data)
  }
}

function trimObject(data) { // 过滤空字符串的发送
  var obj = data
  for (var k in obj) {
    if (Object.prototype.toString.call(obj[k]).slice(8, -1) === 'String') {
      obj[k] = obj[k].trim()
    } else if (Object.prototype.toString.call(obj[k]).slice(8, -1) === 'Object') {
      trimObject(obj[k])
    }
  }
  return obj
}

export default ajax
