<template>
  <div class="page">
    <div class="header" id="header">
      <span><i class="music icon-menu" @click="showSliderBar"></i></span>
      <span>
      <i class="music icon-music" @click="$router.push('/my-music')"></i>
      <i class="find icon-wangyi" @click="$router.push('/find-music')"></i>
      <i class="community icon-community" @click="$router.push('/community')"></i>
      </span>
      <span><i class="music icon-search" @click="$router.push('/search')"></i></span>
    </div>
    <div class="slider-box" ref="slider-box">
      <div class="menu-detail">
        <!--  <div class="menu-userInfo" :style="{ backgroundImage: 'url(' + info.bg + ')',backgroundSize: 'cover' }" v-if="isLogged">
                <img class="avatar" :src="info.avatar" width="56" height="56">
                <div class="user-detail">
                  <span class="name">{{info.name}}</span>
                  <img class="isvip" src="../../assets/images/vip.png" alt="">
                  <span class="progress">Lv.{{info.grade}}</span>
                </div>
                <span class="sign" @click="signClick"><i v-show="showIcon" class="icon-coin"></i>{{sign}}</span>
              </div> -->
        <div class="login">
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
        <div class="exit">
          <i class="icon-exit"></i>
          <span>退出</span>
        </div>
      </div>
    </div>
    <div class="sliderbox-shadow" @click="hideSliderBar"></div>
  </div>
</template>
<script>
import sliderList from '../components/slider-list.vue'
import $ from 'jquery'
import { loginCellphone } from '../api/api.js'
export default {
  components: {
    sliderList
  },
  data() {
    return {
      isLogged: false, // 是否登陆
      isShowSlider: false,
      table: {
        data: [{
          phone: ''
        }],
        send: {
          phone: '13588745281',
          password: '19950223asd'
          // uid: '471722851'
        }
      }
    }
  },
  watch: {},
  mounted() {
    // this.getInfo()
  },
  methods: {
    showSliderBar() {
      $('.slider-box').toggleClass('show-slider')
      $('.sliderbox-shadow').css({
        left: '70%',
        transition: 'all 0.5s'
      })
    },
    hideSliderBar() {
      $('.slider-box').toggleClass('show-slider')
      $('.sliderbox-shadow').css({
        left: '-30%',
        transition: 'all 0.5s'
      })
    },
    getInfo() {
      loginCellphone(this.table.send)
        .then(res => {
          console.log(res)
          // this.table.data = res.data
        })
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

.slider-box {
  height: 100%;
  width: 70%;
  position: absolute;
  z-index: -1;
  top: 0rem;
  left: -7.5rem;
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
  width: 30%;
  position: absolute;
  z-index: 3;
  left: -70%;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
}

.show-slider {
  left: 0!important;
  z-index: 3;
}

.hide-slider {
  left: -7.5rem;
}

</style>
