<template>
  <div class="page" v-loading="$store.state.isLoading">
  </div>
</template>
<script>
import typeList from '../components/type-list.vue'
import { UserPlaylist } from '@/api/api.js'
export default {
  data() {
    return {
    }
  },
  name: 'Index',
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
  methods: {
  }
}

</script>
<style scoped lang="less">
.page {
  position: relative;
  height: 100%;
}

</style>
