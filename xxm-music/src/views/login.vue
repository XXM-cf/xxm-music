<template>
  <div class="page">
    <div class="logo">
      <i class="find icon-wangyi" @click="$router.push('/find-music')"></i>
    </div>
    <div>
      <div class="login-way">手机号登陆</div>
      <div class="login-way">邮箱登陆</div>
    </div>
<!--     <div class="login-form">
      <Input type="text" v-model="phone" placeholder="请输入手机号"></Input>
      <Input type="text" v-model="phone" placeholder="请输入密码"></Input>
    </div> -->
  </div>
</template>
<script>
import typeList from '../components/type-list.vue'
export default {
  name: 'Index',
  data() {
    return {
      phone: ''
    }
  },
  components: {
    typeList
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
  .login-way {
    width: 5rem;
    height: 0.8rem;
    border-radius: 0.4rem;
    color:  #DC143C;
    font-size: 0.3rem;
    margin: 0.4rem auto;
    text-align: center;
    line-height: 0.8rem;
    border: 1px solid #dcdcdc;
  }
}

</style>
