<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <van-row class="header">
        <van-col @click='goback()' span="2">
          <van-icon name="arrow-left" />
        </van-col>
        <van-col span="22">城市选择</van-col>
      </van-row>
      <hot-city></hot-city>
      <sort :zimu="zimu" @tiao="tiao"></sort>
      <h2>城市列表</h2>
      <div class="list" v-for="(item,key,index) in zimu" :key='index'>
        <h6 :ref="key">{{item}}</h6>
        <div v-for="i in data" :key='i.id'>
          <ul v-if="i.py.slice(0,1).toUpperCase()==item">
            <li @click="tiaocity(i.nm)" class="ell">
              {{i.nm}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'

import hotCity from './components/hotCity.vue'
import Sort from './components/sort.vue'
export default {
  components: { hotCity, Sort },
  name: 'city',
  data () {
    return {
      data: '',
      zimu: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }
  },
  methods: {
    tiaocity (nm) {
      // this.$router.push({ path: '/', query: { city: nm } }) // get带参数跳转首页
      this.$router.push({ name: 'index', params: { city: nm } }) // post
      localStorage.cun = nm // 存储城市名字
      this.$store.dispatch('act', nm)
    },
    tiao (key) {
      // console.log(key)
      this.scroll.scrollToElement(this.$refs[key][0])
    },
    goback () {
      this.$router.go(-1)
    },
    getdata () {
      this.axios.get('/api/city.json').then((res) => {
        this.data = res.data.data
        this.initScroll()
        // console.log(res.data.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    initScroll () {
      this.$nextTick(() => {
        if (!this.Scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            click: true
            // observeDOM: true // 启用插件
          })
        }
      })
    }
  },
  mounted () {
    this.getdata()
  }
}
</script>
<style lang="stylus">
.wrapper
  position absolute
  top 0
  bottom 0
  overflow hidden
  .header
    background-color #00BCD4
    height .9rem
    line-height .9rem
    color white
    font-size .35rem
    text-align center
h2
    padding .5rem 0
    font-size .4rem
.list
  display flex
  flex-wrap wrap
  h6
    width 100%
    padding .3rem 0 .3rem .2rem
  div
    ul
      text-align center
      width 1.5rem
      line-height .9rem
</style>
