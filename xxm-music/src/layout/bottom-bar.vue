<template>
  <div class="bottom-bar">
  </div>
</template>
<script>
import store from '@/store/index'
export default {
  props: ['level'],
  data() {
    return {}
  },
  methods: {

  }
}

</script>
<style scoped>
.bottom-bar {
  width: 100%;
  height: 1rem;
  background: #333;
  position: absolute;
  z-index: 2;
  bottom: 0;
}

h2 {
  color: #fff;
}

button {
  color: #fff;
  font-size: 20px;
}

</style>
