// 引入依赖包
import axios from 'axios'
import {Toast} from "vant";

export function request(config) {
  const server = new axios.create({
    baseURL: 'https://api.feiyu.me',
    // baseURL: 'http://192.168.31.12:3989',
    timeout: 10 * 1000,
  })

//*********  请求拦截
  server.interceptors.request.use(config => {
    //==========  所有请求之前都要执行的操作  ==============
    return config;
  }, err => {
    //==================  错误处理  ====================
    Toast('请求失败')
    return
  })

//******** 响应拦截
  server.interceptors.response.use(res => {
    //==============  所有请求完成后都要执行的操作  ==================
    //  仅对 error 状态处理
    if (res.data.code && res.data.code !== 'OK') Toast(res.data.msg)
    // 返回 response
    return res
  }, err => {
    //==============  错误处理  ====================
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误(400)';
          break;
        case 401:
          err.message = '未授权，请重新登录(401)';
          break;
        case 403:
          err.message = '拒绝访问(403)';
          break;
        case 404:
          err.message = '请求出错(404)';
          break;
        case 408:
          err.message = '请求超时(408)';
          break;
        case 500:
          err.message = '服务器错误(500)';
          break;
        case 501:
          err.message = '服务未实现(501)';
          break;
        case 502:
          err.message = '网络错误(502)';
          break;
        case 503:
          err.message = '服务不可用(503)';
          break;
        case 504:
          err.message = '网络超时(504)';
          break;
        case 505:
          err.message = 'HTTP版本不受支持(505)';
          break;
        default:
          err.message = `连接出错(${err.response.status})!`;
      }
    } else {
      err.message = '服务器连接失败!'
    }
    Toast(err.message)
    return
  })
  // 返回实例对象
  return server(config)
}
