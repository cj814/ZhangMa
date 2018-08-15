import { fetch } from '@/utils/fetch'

// 获取首页图片
export function getIndexViewsImage (url, params) {
  return fetch(url, params)
}

// 获取首页新闻
export function getIndexNewsList (url, params) {
  return fetch(url, params)
}

// 获取新闻详情
export function getIndexNewsDetail (url, params) {
  return fetch(url, params)
}
