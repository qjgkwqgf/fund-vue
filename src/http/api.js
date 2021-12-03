import {request} from './request'

export function checkLogin(data) {
  return request({
    method: 'post',
    url: '/auth/check-login',
    data,
  })
}

export function getFundData(data) {
  return request({
    method: 'post',
    url: '/my-fund/list',
    data,
  })
}

export function addFund(data) {
  return request({
    method: 'post',
    url: '/my-fund/fund-add',
    data,
  })
}
