import { fetch } from '../../utils/fetch'

// 用户登录
export function login (url, params) {
  return fetch(url, params)
}
