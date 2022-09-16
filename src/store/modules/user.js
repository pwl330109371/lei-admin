import { login } from '@/api/sys'
import md5 from 'md5'

export default {
  namespaced: true, // 表示是单独的模板
  state: () => ({}),
  mutations: {},
  actions: {
    /**
     * @name: login
     * @description: 登录请求动作
     * @param {*} context
     * @param {*} userInfo
     * @return {*}
     */
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        }).then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    }
  }
}
