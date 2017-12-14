// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import './common/font-icon/style.css'
import './common/base.less'
import './assets/css/reset.css'
import ajax from './common/js/ajax.js'
import store from './store/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.use(router)
Vue.prototype.$ajax = ajax
Vue.prototype.$ajax = ajax
Vue.config.productionTip = false
// Vue.prototype.$uid ? JSON.parse(window.sessionStorage.getItem('userData')).account.id : '471722851'

/* eslint-disable no-new */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
