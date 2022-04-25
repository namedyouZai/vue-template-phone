import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let _state = {
  userInfo: {
    userid: 'userid',
    token: 'token',
    position: null, //地理定位
    channel: '',
  },
  topNavTitle: '', //顶部导航标题,

}

export default new Vuex.Store({

  state: _state,
  mutations: {
    
    setNavTitle(state, title) {
      document.title = title
      state.topNavTitle = title
    },
  },
  actions:{},
  getters: {
   
   
  },
  // modules: {
  // },
})
