<template>
  <div>
    <div class="type-list">
      <type-list iconclass="icon-music" name="本地音乐" count="16" :isPlaying="false"></type-list>
      <type-list iconclass="icon-zuijinplay" name="最近播放" count="16" :isPlaying="true"></type-list>
      <type-list iconclass="icon-diantai" name="下载管理" count="16" :isPlaying="false"></type-list>
      <type-list iconclass="icon-diantai" name="我的电台" count="16" :isPlaying="false"></type-list>
      <type-list iconclass="icon-collect" name="我的收藏" count="16" :isPlaying="false" :isBorder="false"></type-list>
    </div>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="  创建的歌单" name="1">
        <div class="song-list" v-for="song in songList" :key="song.id">
          <img :src="song.coverImgUrl" alt="封面图">
          <div class="msg">
            <p class="name">{{song.name}}</p>
            <p class="count">共{{song.trackCount}}首</p>
            <p class="border-1px"></p>
            <span class="more">
              <i class="icon-list-circle"></i>
            </span>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
  import typeList from '../components/type-list.vue'
  import {
    UserPlaylist,
    UserSubcounth
  } from '../api/api.js'
  import store from '../store/index.js'
  export default {
    name: 'my-music',
    data() {
      return {
        activeNames: '1',
        songList: [],
        count:null
      }
    },
    components: {
      typeList
    },
    mounted() {
      var params = {
        uid: this.$uid ? this.$uid : '471722851'
      }
      UserPlaylist(params)
        .then(res => {
          console.log(res)
          this.songList = res.playlist
        }),
        UserSubcounth(params)
        .then(res => {
          console.log(res)
          this.count = res
        })
    },
    watch: {},
    methods: {}
  }

</script>
<style scoped lang="less">
  .type-list {
    background: #fff;
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
