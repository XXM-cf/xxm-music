import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged: false, // 是否登陆状态
    userMsg: {} // 登陆成功后的用户信息
  },
  mutations: {
    GET_INFO(state,msg){
      state.isLogged = true
      state.userMsg = msg
    },
    SINGNOUT(state){ // 退出登陆
      state.isLogged = false
    }
  }
})
