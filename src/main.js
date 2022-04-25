import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import '@/plugins/vant'
import 'vant/lib/icon/local.css'

// import filters from './plugins/filters'
// Vue.use(filters)
// import mixins from './plugins/mixins'
// Vue.use(mixins)
// import directives from './plugins/directives'
// Vue.use(directives)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
