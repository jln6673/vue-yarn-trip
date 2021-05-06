<template>
    <div>
        <van-row class="header">
            <van-col span="3" class="left">
                <van-icon name="arrow-left" />
            </van-col>
            <van-col span="16">
                <van-search class="search" v-model="value" placeholder="请输入搜索关键词" />
            </van-col>
            <van-col @click='gocity' span="5" class="right">
              <!-- <router-link tag="div" to="/city"> -->
                <span>{{city}}</span>
                <van-icon name="arrow-down" />
              <!-- </router-link> -->
            </van-col>
        </van-row>
        <!-- banner -->
        <banner :swiperList="data.swiperList"></banner>
        <top></top>
        <like :like='data.recommendList'></like>
        <go :golist='data.weekendList'></go>
    </div>
</template>
<script>
import { mapState } from 'vuex' // 引入仓库的mapState辅助函数
import banner from './components/banner.vue'
import like from './components/like.vue'
import top from './components/top'
import go from './components/go'
export default {
  name: 'Index',
  data () {
    return {
      value: '',
      data: ''
    }
  },
  computed: {
    ...mapState({
      city: 'abc'
    })
  },
  methods: {
    getdata () {
      this.axios.get('/api/风景.json').then((res) => {
        this.data = res.data.data
      }).catch((err) => {
        console.log(err)
      })
    },
    gocity () {
      this.$router.push({ name: 'city' }) // 点击跳转到城市页面
    }
  },
  components: {
    banner,
    like,
    top,
    go
  },
  mounted () {
    this.getdata()
  }
}
</script>
<style lang="stylus" scoped>
// scoped css只在当前组件内生效，不会影响其它组件
.header
    color #fff
    background-color #00bcd4
    .left
        font-size .7rem
        padding 0rem .1rem
        margin-top .15rem
    .search
        padding 0
        margin-top .15rem
        border-radius 1rem
    .right
        font-size .35rem
        text-align center
        line-height 1rem
    .van-swipe__indicator
        background-color #123
</style>
