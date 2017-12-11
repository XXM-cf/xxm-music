<template>
  <div class="root">
    <index-header></index-header>
    <index-main></index-main>
    <bottom-bar></bottom-bar>
  </div>
</template>
<script>
import indexHeader from './index-header.vue'
import bottomBar from './bottom-bar.vue'
import indexMain from './index-main.vue'
export default {
  name: 'Index',
  components: {
    indexHeader,
    bottomBar,
    indexMain
  }
}
</script>
<style scoped lang="less">
.root{
  position: relative;
  height: 100%;
  width: 100%;
}

.main{
  padding:1rem 0;
  height: 100%;
  width: 100%;
  position: absolute;
  top:0;
  z-index: 1;
}
</style>
