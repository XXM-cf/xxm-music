<template>
  <div class="page">
    <div class="back" @click="$router.push('/my-music')">
      <i class="icon-back"></i>
    </div>
    <div class="logo">
      <i class="find icon-wangyi" @click="$router.push('/find-music')"></i>
    </div>
    <div class="login-way-box">
      <div class="login-way" @click="LoginByPhone">手机号登陆</div>
      <div class="login-way">邮箱登陆</div>
    </div>
    <div class="login-form">
      <input type="text" placeholder="请输入手机号" v-model="loginMsg.phone" class="login-input">
      <input type="password" placeholder="请输入密码" v-model="loginMsg.password" class="login-input">
      <p class="login-btn" @click="getInfo">登陆</p>
    </div>
  </div>
</template>
<script>
import typeList from '../components/type-list.vue'
import { loginCellphone } from '../api/api.js'
import $ from 'jquery'
import Vue from 'vue'

export default {
  data() {
    return {
      loginMsg: {
        phone: '',
        password: ''
      }
    }
  },
  components: {
    typeList
  },
  methods: {
    LoginByPhone() {
      $('.login-way-box').css({ display: 'none' })
      $('.login-form').css({ display: 'block' })
    },
    getInfo() {
      loginCellphone(this.loginMsg)
        .then(res => {
          window.sessionStorage.setItem('userData',JSON.stringify(res))
          this.$store.commit('GET_INFO', res)
          this.$router.push('/my-music')
          Vue.prototype.$uid = res.account.id
        })
    }
  }
}

</script>
<style scoped lang="less">
@import '~common/base.less';
.page {
  position: relative;
  height: 100%;
  width: 100%;
  background: url('../assets/image/login-bg2.jpg') no-repeat;
  background-size: cover;
  .back {
    height: 1rem;
    line-height: 1rem;
    font-weight: bold;
    color: #fff;
    font-size: 0.46rem;
    padding-left: 0.3rem;
  }
  .logo {
    position: relative;
    top: 1.4rem;
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
    color: #fff;
    margin-bottom: 4rem;
    border-radius: 0.2rem;
    background-color: @c;
    font-size: 2rem;
    text-align: center;
    line-height: 2rem;
  }
  .login-way-box {
    .login-way {
      width: 5rem;
      height: 0.8rem;
      border-radius: 0.4rem;
      color: #DC143C;
      font-size: 0.3rem;
      margin: 0.4rem auto;
      text-align: center;
      line-height: 0.8rem;
      border: 1px solid #dcdcdc;
    }
  }
  .login-form {
    display: none;
    color: #fff;
    width: 80%;
    margin: 0 auto;
    .login-input {
      color: #fff;
      font-size: 0.3rem;
      width: 100%;
      margin-bottom: 0.4rem;
      border: 0;
      background: none;
      padding-left: 0.3rem;
      border-bottom: 0.01rem solid #f5f5f5;
      line-height: 0.6rem;
      outline: none;
    }
    .login-btn {
      text-align: center;
      line-height: 0.8rem;
      border-radius: 0.2rem;
      background: @c;
      margin-top: 0.3rem;
      font-size: 0.3rem;
    }
  }
}

</style>
