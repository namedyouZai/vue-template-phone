import axios from 'axios'
import store from '@/store'

let ajax = axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-AppCode': 'robot-mobile-platform',
  },
})

// ajax.defaults.baseURL =  `${ window.BASE_URL_PRE }${window.BASE_URL}`
ajax.defaults.baseURL =  `https://www.baidu.com`
ajax.interceptors.request.use(config => {
  //   config.url += '?loginUserId=123'
  config.headers['Authorization'] = 'UAP1'
  config.headers['Cache-Control'] = 'no-cache'
  return config
})

ajax.interceptors.response.use(({ data }) => {

  return Promise.resolve(data)

}, error => {

  const response = error.response
  if (response.status === 401) {
    let data = {
      accessToken: store.state.userInfo.token.accessToken,// 老的token
      refreshToken: store.state.userInfo.token.refreshToken, // 刷新的token
      refreshTokenExpireSeconds: 0,
      accessTokenExpireSeconds: 0,
    }
    return refreshToken(data).then(({ data: res }) => {

      store.commit('setUserInfo', {
        ...store.state.userInfo,
        token: res,
      })
      return ajax(error.response.config)

    })
  }

  return Promise.resolve({})

})
export default ajax
