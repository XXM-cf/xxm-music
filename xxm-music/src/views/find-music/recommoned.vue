<template>
  <div class="page" v-loading="$store.state.isLoading">
    <div class="banner">
      <el-carousel height="2.2rem" indicator-position="none">
        <el-carousel-item v-for="item in banner" :key="item.targetId">
          <img :src="item.pic" alt="" class="bannerimg">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="container">
      <p class="title">为你推荐
        <i class="icon icon-right"></i>
      </p>
      <song-item :disc="disc" :bgUrl="url" :playnum="num"></song-item>
      <song-item :disc="disc" :bgUrl="url" :playnum="num"></song-item>
      <song-item :disc="disc" :bgUrl="url" :playnum="num"></song-item>
      <song-item :disc="disc" :bgUrl="url" :playnum="num"></song-item>
      <song-item :disc="disc" :bgUrl="url" :playnum="num"></song-item>
    </div>
  </div>
</template>
<script>
  import {
    Banner
  } from '@/api/api.js'
  import songItem from '@/components/song-item.vue'
  export default {
    name: 'find-music',
    data() {
      return {
        activeName: 'first',
        banner: [],
        num: '1823',
        url: 'http://p1.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg',
        disc: '第覅文化覅无法和我i凤凰网i方式发和上次沉思'
      }
    },
    mounted() {
      Banner({})
        .then(res => {
          this.banner = res.banners
        })
    },

    components: {
      songItem
    },
    methods: {}
  }

</script>
<style scoped lang="less">
  .page {
    position: relative;
    height: 100%;
    .banner {
      height: 2.2rem;
      margin-bottom: 0.2rem;
      position: relative;
      .bannerimg {
        width: 100%;
        height: 2.2rem;
      }
    }
  }

</style>
