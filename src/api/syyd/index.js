import { fetch } from '@/utils/fetch'

// 获取四园一岛
export function getAllViews (url, params) {
  return fetch(url, params)
}
