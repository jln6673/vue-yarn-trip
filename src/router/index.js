import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index/index' // 首页组件
import city from '@/views/city/index' // 城市组件
import detail from '@/views/detail/index' // 详情页组件

Vue.use(VueRouter)

const routes = [{
  path: '/', // path：'/'路由的匹配地址
  name: 'index',
  component: index // 匹配到当前/地址后所映射的组件名
}, {
  path: '/city',
  name: 'city',
  component: city
}, {
  path: '/detail/:id',
  name: 'detail',
  component: detail
}] // 配置各个路由项

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
