import {request} from './request'

// 检查登录状态
export function checkLoginStatus(data) {
  return request({
    method: 'post',
    url: '/check-token',
    data,
  })
}

export function checkLogin(data) {
  return request({
    method: 'post',
    url: '/check-login',
    data,
  })
}
