<template>
  <div class="page">
    <div class="header" id="header">
      <span>
        <i class="music icon-menu" @click="showSliderBar"></i>
      </span>
      <span>
        <i class="music icon-music" @click="$router.push('/my-music')"></i>
        <i class="find icon-wangyi" @click="$router.push('/find-music')"></i>
        <i class="community icon-community" @click="$router.push('/community')"></i>
      </span>
      <span>
        <i class="music icon-search" @click="$router.push('/search')"></i>
      </span>
    </div>
    <div class="slider" ref="slider">
      <div class="slider-box" ref="sliderbox">
        <div class="menu-detail">
          <div class="menu-userInf" v-if="userData">
            <img class="avatar" :src="userData.profile.avatarUrl">
            <span class="name">{{userData.profile.nickname}}</span>
            <span class="level">LV.3</span>
          </div>
          <div class="login" v-if="!userData">
            <p>登陆网易云音乐</br>
              320K高音质无线下载，手机电脑多端同步
            </p>
            <span class="login-btn" @click="$router.push('/login')">立即登录</span>
          </div>
        </div>
        <div class="content">
          <slider-list iconclass="icon-message" sidetitle="我的消息" disc="16" :isDes="true"></slider-list>
          <slider-list iconclass="icon-vip" sidetitle="我的会员" disc="2018.05.10到期"></slider-list>
          <slider-list iconclass="icon-market" sidetitle="商城"></slider-list>
          <p style="background:#f0f0f0; height:0.1rem"></p>
          <slider-list iconclass="icon-friend" sidetitle="我的好友"></slider-list>
          <slider-list iconclass="icon-place" sidetitle="附近的人"></slider-list>
          <p style="background:#f0f0f0; height:0.1rem"></p>
          <slider-list iconclass="icon-theme" sidetitle="个性换肤" disc="官方红"></slider-list>
          <slider-list iconclass="icon-lock" sidetitle="听歌识曲"></slider-list>
          <slider-list iconclass="icon-set-time" sidetitle="定时停止播放"></slider-list>
          <slider-list iconclass="icon-lock" sidetitle="音乐闹钟"></slider-list>
          <slider-list iconclass="icon-lock" sidetitle="扫一扫"></slider-list>
          <slider-list iconclass="icon-lock" sidetitle="音乐闹钟"></slider-list>
          <slider-list iconclass="icon-car" sidetitle="驾驶模式"></slider-list>
        </div>
        <p class="border-1px"></p>
        <div class="footer">
          <div class="nightmode">
            <i class="icon-night"></i>
            <span>夜间模式</span>
          </div>
          <div class="setting">
            <i class="icon-setting"></i>
            <span>设置</span>
          </div>
          <div class="exit" @click="logout">
            <i class="icon-exit"></i>
            <span>退出</span>
          </div>
        </div>
      </div>
      <div class="sliderbox-shadow" ref="sliderboxshadow" @click="showSliderBar"></div>
    </div>
  </div>
</template>
<script>
  import sliderList from '../components/slider-list.vue'
  export default {
    components: {
      sliderList
    },
    data() {
      return {
        isLogged: false, // 是否登陆
        userData: null // 用户的头像昵称等信息
      }
    },
    watch: {},
    created() {
      this.userData = JSON.parse(window.sessionStorage.getItem('userData')) // 登陆之后从本地sessionStorage中取出登陆信息
    },
    mounted() {
      // this.getInfo()
    },
    methods: {
      logout() {
        window.sessionStorage.removeItem('userData') // 清除 session 
        this.userData = null // 判断是否显示登陆按钮的条件是 是否存在ueserData  所以登出时候要赋值 null
      },
      showSliderBar() {
        this.$refs.slider.classList.toggle('show-slider') // 显示测Bain菜单栏
      }
    }
  }

</script>
<style scoped lang="less">
  @import '~common/base.less';
  .header {
    position: absolute;
    z-index: 2;
    top: 0;
    padding: 0 0.2rem;
    background: @c;
    height: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      line-height: 100%;
      font-size: 0.6rem;
      color: #fff;
      i {
        padding: 0 0.2rem;
      }
    }
  }

  .slider {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 10;
    top: 0;
    left: -7.5rem;
    transition: all 0.5s;
    .slider-box {
      height: 100%;
      width: 70%;
      float: left; // left: -7.5rem;
      transition: all 0.5s;
      overflow: auto;
      background: #fff;
      &::-webkit-scrollbar {
        // 去掉滚动条
        width: 0;
        height: 0
      }
      .menu-detail {
        height: 2.8rem;
        background: url('http://p1.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg') no-repeat;
        background-size: cover;
        position: relative;
        .menu-userInf {
          position: absolute;
          bottom: 0.2rem;
          padding: 0 0.3rem;
          .avatar {
            width: 1.4rem;
            height: 1.4rem;
            display: block;
            border-radius: 50%;
            margin-top: 1rem;
          }
          .name {
            line-height: 0.6rem;
            font-size: 0.3rem;
            color: #fff;
          }
          .level {
            color: #fff;
            display: inline-block;
            border: 1px solid #fff;
            padding: 0.02rem 0.2rem;
            border-radius: 0.2rem;
          }
        }
        .login {
          position: absolute;
          bottom: 0;
          width: 100%;
          text-align: center;
          color: #fff;
          line-height: 20px;
          p {
            margin-top: 0.3rem;
          }
          .login-btn {
            margin: 0.3rem 0;
            color: #fff;
            padding: 0.06rem 0.6rem;
            border-radius: 0.5rem;
            border: 1px solid #fff;
            display: inline-block;
          }
        }
      }
      .content {
        padding: 0.4rem 0;
      }
      .footer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 0.26rem;
        margin-top: 0.4rem;
        margin-bottom: 0.4rem;
        i {
          margin-right: 0.2rem;
        }
      }
    }
    .sliderbox-shadow {
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
    }
  }

  .show-slider {
    left: 0!important;
    z-index: 10;
    transition: all 0.5s;
  }

</style>
