import store from '@/store'
import webViewJsBridge from './jsBridge'


/**
 * 从大到小排序
 * @param prop
 * @returns {function(...[*]=)}
 * sTob: true： 大到小   false： 小到大
 */
export function compare(prop, sTob) {
  return function (obj1, obj2) {
    let val1 = obj1[prop]
    let val2 = obj2[prop]
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1)
      val2 = Number(val2)
    }
    if (val1 > val2) {
      return sTob ? -1 : 1
    } else if (val1 < val2) {
      return sTob ? 1 : -1
    } else {
      return 0
    }
  }
}


/**
 * 判断当前浏览器是不是iphone
 */
export function isIos() {

  let ua = navigator.userAgent
  return !!ua.match(/(iPhone|iPod|iPad);?/i)

}
/**
 * 判断是不是微信环境
 */
export function isWechat() {

  let ua = navigator.userAgent.toLowerCase()
  return !!ua.match(/MicroMessenger/i)

}
export function isMiniApp() {

  return window.__wxjs_environment === 'miniprogram'

}

export function getQueryParams(name) {

  let queryParams = {}
  let searchStr = window.location.search.substring(1)
  searchStr.split('&').filter(Boolean).forEach(ele => {

    let [key, value] = ele.split('=')
    queryParams[key] = decodeURI(value)

  })
  return name ? queryParams[name] : queryParams

}

export function callUp(phoneNumber) {

  if (!phoneNumber) return false
  //打电话
  let isApp = window.navigator.userAgent.includes('hydra') || store.state.userInfo.terminaltag === 'app'
  if (isApp) {

    webViewJsBridge.callHandler('callUp', phoneNumber)

  } else {

    let a = document.createElement('a')
    a.setAttribute('href', `tel:${phoneNumber}`)
    a.click()

  }

}

//emoji 表情过滤
export function escapeEmoji(str) {

  if (!str) return ''
  return str.replace(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g, '[表情]')

}



