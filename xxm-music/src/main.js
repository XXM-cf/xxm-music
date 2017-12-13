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
import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS

Vue.use(iView)
Vue.use(router)
Vue.prototype.$ajax = ajax

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
