<template>
  <div>
    <van-row class="bang">
      <van-col class="left" span="12">
        <van-icon name="fire" />
        <span>本周热门榜单</span>
      </van-col>
      <van-col class="right" span="12">
        <span>全部榜单</span>
        <van-icon name="arrow" />
      </van-col>
    </van-row>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
      v-for="item in topList"
      :key="item.id"
      >
        <img class="topList" :src="item.imgUrl">
        <p class="ell topList_p">{{item.desc}}</p>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import Vue from 'vue'
import swiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(swiper)
export default {
  // name: 'top',
  data () {
    return {
      topList: [{
        id: 1,
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1709/e9/e9b7ae23f567806ea3.img.jpg_250x250_4117ce07.jpg',
        desc: '少林寺'
      }, {
        id: 2,
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg',
        desc: '故宫'
      }, {
        id: 3,
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1909/5b/5b96def9b5592837a3.img.jpg_250x250_b6cb7378.jpg',
        desc: '建业•华谊兄弟电影小镇'
      }, {
        id: 4,
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1603/90/903a52f477d98a3990.water.jpg_250x250_58b76f51.jpg',
        desc: '丰乐樱花园'
      }, {
        id: 5,
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg',
        desc: '故宫'
      }, {
        id: 6,
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1804/7f/7f80af3ddefeb12a3.img.jpg_250x250_da739ee3.jpg',
        desc: '郑州方特欢乐世界'
      }],
      swiperOption: {
        slidesPerView: 3.3,
        spaceBetween: 10,
        freeMode: true
      }
    }
  }

}
</script>
<style lang="stylus" scoped>
.swiper
  margin-left .2rem
.topList
  width 2.1rem
.topList_p
  text-align center
  line-height .5rem
.bang
  padding .2rem 0
  .left
    padding-left .2rem
    font-size .4rem
    i
      color red
  .right
    text-align right
    padding-right .3rem
    font-size .3rem
    color grey
</style>
