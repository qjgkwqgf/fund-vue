import {request} from './request'

// 检查登录状态
export function checkLoginStatus() {
  return request({
    method: 'get',
    url: '/check-login',
  })
}
