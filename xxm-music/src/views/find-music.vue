<template>
  <div class="page" v-loading="$store.state.isLoading">
    <el-tabs v-model="activeName">
      <el-tab-pane label="个性推荐" name="first">
        <recommoned></recommoned>
      </el-tab-pane>
      <el-tab-pane label="歌单" name="second">歌单</el-tab-pane>
      <el-tab-pane label="主播电台" name="third">主播电台</el-tab-pane>
      <el-tab-pane label="排行榜" name="fourth">排行榜</el-tab-pane>
    </el-tabs>

  </div>
</template>
<script>
  import {
    UserPlaylist,
    Banner
  } from '@/api/api.js'
  import Recommoned from './find-music/recommoned.vue'
  export default {
    name: 'find-music',
    data() {
      return {
        activeName: 'first'
      }
    },
    mounted() {
    },

    components: {
      Recommoned
    },
    methods: {}
  }

</script>
<style scoped lang="less">
  .page {
    position: relative;
    height: 100%;
    }
</style>
