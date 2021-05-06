<template>
    <div>
        <h2>周末去哪</h2>
        <div class="list" v-for='item in golist' :key="item.id">
            <img :src="item.imgUrl">
            <p class="title">{{item.title}}</p>
            <p class="desc">{{item.desc}}</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'go',
  props: ['golist']
}
</script>
<style lang="stylus" scoped>
    h2
      font-size .4rem
      padding .2rem 0
      margin-left .2rem
      margin-top .2rem
    .list
      margin-top .2rem
      img
        width 100%
      p
        line-height .6rem
        margin-left .2rem
      .title
        font-size .35rem
      .desc
        color #616161
</style>
