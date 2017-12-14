<template>
  <div class="slider-list">
    <span class="icon"> <i :class="side_iconclass"></i></span>
    <span class="title">{{side_title}}</span>
    <span class="disc" v-if="isDes">{{side_disc}}</span>
  </div>
</template>
<script>
export default {
  props: {
    iconclass: {
      type: String,
      default: ''
    },
    sidetitle: {
      title: String,
      default: ''
    },
    disc: {
      title: String,
      default: ''
    },
    isDes: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      side_iconclass: this.iconclass,
      side_title: this.sidetitle,
      side_disc: this.disc
    }
  },
  computed: {},
  mounted() {}
}

</script>
<style lang="less" scoped>
@import '~common/base.less';
.slider-list{
  font-size: 0.3rem;
  span{
    line-height: 0.8rem;
  }
 .icon{
  margin-right: 0.3rem;
  font-size: 0.4rem;  
  color: @c;
 }
 .title{
  color: #333;
 }
 .disc{
  float: right;
  margin-right: 0.4rem;
 }
}

</style>
