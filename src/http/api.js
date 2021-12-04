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

export function getSingleFund(data) {
  return request({
    method: 'post',
    url: '/my-fund/single',
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

export function editFund(data) {
  return request({
    method: 'post',
    url: '/my-fund/fund-edit',
    data,
  })
}

export function delFund(data) {
  return request({
    method: 'post',
    url: '/my-fund/fund-del',
    data,
  })
}

export function editPass(data) {
  return request({
    method: 'post',
    url: '/auth/pass-edit',
    data,
  })
}
