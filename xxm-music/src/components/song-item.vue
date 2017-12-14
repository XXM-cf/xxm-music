<template>
  <div class="song-item">
    <img :src="bgUrl" alt="">
    <span class="playnum"><i class="icon icon-music"></i>{{playnum}}万</span>
    <p class="disc">{{disc}}</p>
  </div>
</template>
<script>
  export default {
    props: {
      bgUrl: {
        type: String,
        default: ''
      },
      playnum: {
        type: String,
        default: ''
      },
      disc: {
        type: String,
        default: ''
      }
    },
    data() {
      return {}
    }
  }

</script>
<style lang="less" scoped>
  @import '~common/base.less';
  .song-item {
    display: inline-block;
    position: relative;
    overflow: hidden;
    width: 2.44rem;
   margin-bottom: 0.2rem;
    img {
      height: 2.5rem;
    }
    .playnum{
        color: #fff;
        font-size: 0.26rem;
        position: absolute;
        right: 0.2rem;
        top: 0.1rem;
        .icon{
            padding-right: 0.1rem;
        }
    }
    .disc {
      line-height: 0.36rem;
      padding:0.1rem;
      color: #333;
    }
  }

</style>
