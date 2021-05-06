<template>
  <div>
    <h2>字母排序</h2>
    <ul class="zimu">
      <li @click="cli(key)" v-for="(item,key,index) in zimu" :key='index'>{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'sort',
  props: ['zimu'],
  methods: {
    cli (key) {
      this.$emit('tiao', key)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .zimu
    display flex
    flex-wrap wrap
    li
      text-align center
      width 16.6%
      height 1rem
      line-height 1rem
      font-size .35rem
</style>
