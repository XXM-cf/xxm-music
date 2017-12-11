<template>
  <div class="page">
    <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
    </flexbox>
  </div>
</template>
<script>
import { Flexbox } from 'vux'
export default {
  components: {
    Flexbox
  }
}
</script>
<style scoped lang="less">
.page {
  position: relative;
  height: 100%;
}
</style>
