<template>
  <div class="page">
    <Carousel autoplay>
      <Carousel-item>
        <div class="demo-carousel">1</div>
      </Carousel-item>
      <Carousel-item>
        <div class="demo-carousel">2</div>
      </Carousel-item>
      <Carousel-item>
        <div class="demo-carousel">3</div>
      </Carousel-item>
      <Carousel-item>
        <div class="demo-carousel">4</div>
      </Carousel-item>
    </Carousel>
  </div>
</template>
<script>
import typeList from '../components/type-list.vue'
export default {
  data() {
    return {
      key1: '1',
      key2: '2',
      key3: '3'
    }
  },
  name: 'Index',
  components: {
    typeList
  }
}

</script>
<style scoped lang="less">
.page {
  position: relative;
  height: 100%;
  .demo-carousel{
    height: 0.6rem;
    background: #333;
    color: #fff;
  }
}

</style>
