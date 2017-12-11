<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
var deviceWidth = Math.min(750, window.innerWidth)
document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'
export default {
  name: 'app'
}
</script>
<style lang="less">
#app {
  height: 100%;
}

</style>
