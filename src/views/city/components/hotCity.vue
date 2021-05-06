<template>
  <div>
    <h2>热门城市</h2>
    <van-grid :column-num="3">
      <van-grid-item id="hotcity" v-for="(value,index) in cityList" :key="index" :text="value" />
    </van-grid>
  </div>
</template>
<script>
export default {
  name: 'hotCity',
  data () {
    return {
      cityList: ['北京', '上海', '三亚', '丽江', '杭州', '广州', '成都', '深圳', '苏州', '桂林', '西安', '厦门']
    }
  }
}
</script>
<style lang="stylus" scoped>
  #hotcity
    .van-grid-item__text
        font-size .35rem
        color black
</style>
