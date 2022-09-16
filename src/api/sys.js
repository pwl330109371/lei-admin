import request from '@/utils/request'

/**
 * @name: login
 * @description: 登录
 * @return {*}
 */
export const login = data => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
