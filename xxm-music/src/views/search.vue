<template>
  <div>
    <input type="text" v-model="keywords">
    <button @click="searchSong">搜索</button>
  </div>
</template>
<script>
import { SearchMultimatch } from '../api/api.js'
export default {
  name: 'search',
  data() {
    return {
      keywords: ''
    }
  },
  methods: {
    searchSong() {
      var params = {
        keywords: this.keywords
      }
      SearchMultimatch(params)
        .then(res => {
          console.log(res)
        })
    }
  }
}

</script>
<style scoped lang="less">
.page {
  position: relative;
  height: 100%;
}

</style>
