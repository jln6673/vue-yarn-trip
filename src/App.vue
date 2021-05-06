<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
// import Index from '@/views/index/index.vue' // 引入index下的index.vue
import './assets/css/reset.css' // 引入resetcss的第一种方法

export default {
  name: 'app'
}
</script>
<style lang="stylus">
// @import './assets/css/reset.css'
// 引入resetcss的第二种方法
</style>
