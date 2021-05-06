<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in swiperList" :key="item.id">
          <img :src="item.imgUrl" >
        </van-swipe-item>
    </van-swipe>
</template>
<script>
export default {
  // name: 'banner',
  data () {
    return {
      imglist: []
    }
  },
  props: ['swiperList']
}
</script>
<style lang="stylus" scoped>
.my-swipe
    width 100%
    .van-swipe__indicator
      background-color #123
    img
      width 100%
</style>
