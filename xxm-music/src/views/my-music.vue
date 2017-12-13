<template>
  <div>
    <div class="type-list">
      <type-list iconclass="icon-music" name="本地音乐" count="16" :isPlaying="false"></type-list>
      <type-list iconclass="icon-zuijinplay" name="最近播放" count="16" :isPlaying="true"></type-list>
      <type-list iconclass="icon-diantai" name="下载管理" count="16" :isPlaying="false"></type-list>
      <type-list iconclass="icon-diantai" name="我的电台" count="16" :isPlaying="false"></type-list>
      <type-list iconclass="icon-collect" name="我的收藏" count="16" :isPlaying="false" :isBorder="false"></type-list>
    </div>
    <p class="sub-title">
      <i class="icon-down"></i> 创建的歌单(
      <span>5</span>)
      <span class="fr">
        <i class="icon-setting"></i>
      </span>
    </p>
    <div class="song-list">
      <img src="" alt="">
      <div class="msg">
        <p class="name">我喜欢的音乐</p>
        <p class="count">10首</p>
        <p class="border-1px"></p>
        <span class="more">
          <i class="icon-list-circle"></i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
  import typeList from '../components/type-list.vue'
  import {
    UserPlaylist
  } from '../api/api.js'
  import store from '../store/index.js'
  export default {
    name: 'Index',
    data() {
      return {
        uid: '',
        isLogged: store.state.isLogged
      }
    },
    components: {
      typeList
    },
    created() {
      var params = {
        uid: this.$uid
      }
      UserPlaylist(params)
        .then(res => {
          console.log(res)
          // this.table.data = res.data
        })
    },
    methods: {}
  }

</script>
<style scoped lang="less">
  .type-list {
    background: #fff;
  }

  .sub-title {
    padding-left: 0.2rem;
    padding-right: 0.4rem;
    height: 0.6rem;
    line-height: 0.6rem;
    position: relative;
    font-size: 0.2rem;
    i {
      font-size: 0.3rem;
    }
  }

  .song-list {
    padding: 0.2rem 0;
    background: #fff;
    height: 1.5rem;
    img {
      width: 1rem;
      height: 1rem;
      background: #dcdcdc;
      float: left;
      margin: 0 0.2rem;
    }
    .msg {
      position: relative;
      margin-left: 1.4rem;
      .name {
        font-size: 0.28rem;
        height: 0.6rem;
        line-height: 0.6rem;
      }
      .count {
        font-size: 0.22rem;
        color: #dcdcdc;
        line-height: 0.4rem;
      }
      .more {
        position: absolute;
        right: 0.4rem;
        top: 0;
        display: inline-block;
        height: 1rem;
        line-height: 1rem;
        color: #808080;
        font-size: 0.3rem
      }
    }
  }

</style>
