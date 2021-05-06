<template>
    <div>
      <h2>
        <van-icon name="like" />
        <span>猜你喜欢</span>
      </h2>
      <van-row @click="todetail(item.id)" class="list" v-for='item in like' :key='item.id'>
        <van-col class="left" span="8">
          <img :src="item.imgUrl">
        </van-col>
        <van-col class="center" span="8">
          <p class="title ell">{{item.title}}</p>
        </van-col>
        <van-col class="space" span="8">地点</van-col>
      </van-row>
    </div>
</template>
<script>
export default {
  // name: 'like',
  props: ['like'],
  methods: {
    todetail (id) {
      this.$router.push({ name: 'detail', params: { id } })
    }
  }
}
</script>
<style lang="stylus" scoped>
  h2
    font-size .4rem
    padding .2rem 0
    margin-left .2rem
    i
      color red
  .list
    margin-left .2rem
    padding .2rem 0
    border-bottom 1px solid grey
    .left
      img
        width 100%
    .center
      padding-left .3rem
      .title
        font-size .33rem
    .space
      text-align right
      padding 2rem .5rem 0 0
</style>
