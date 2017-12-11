<template>
  <div class="type-list">
    <span class="info"> <i :class="iconclass"></i></span>
    <div class="typelist-detail">
      <span class="name">{{listName}}</span>
      <span class="count">({{listCount}})</span>
      <span class="is-playing"> <i v-if="showPlaying" class="icon-volume-medium"></i></span>
      <p class="border-1px line" v-if="showBorder"></p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: 'xianshi'
    },
    count: {
      type: String,
      default: '1'
    },
    isBorder: {
      type: Boolean,
      default: true
    },
    isPlaying: {
      type: Boolean,
      default: false
    },
    iconclass: {
      type: String
    }
  },
  data() {
    return {
      listName: this.name,
      listCount: this.count,
      showBorder: this.isBorder,
      showPlaying: this.isPlaying,
      iconClass: this.iconclass
    }
  },
  methods: {
    alert1() {
      window.open('https://github.com/IFmiss/vue-cloud-music')
    }
  },
  computed: {
    showCount() {
      return this.count !== 'none'
    }
  },
  created() {}
}

</script>
<style lang="less">
@import '~common/base.less';
.type-list {
  font-size: 0.28rem;
  overflow: hidden;
  .info {
    display: inline-block;
    float: left;
    width: 0.6rem;
    text-align: center;
    margin: 0 0.2rem;
    line-height: 0.9rem;
    font-size: 0.4rem;
    color: @c;
  }
  .count{
    padding-left:0.1rem;
    color: #d3d3d3;
  }
  .is-playing{
    color: @c;
    display: inline-block;
    float: right;
    margin-right: 0.4rem;
  }
  .line {
    &:after {
      background: #dcdcdc!important;
    }
  }
  .typelist-detail {
    height: 0.9rem;
    line-height: 0.9rem;
    margin-left: 1rem;
  }
}

</style>
