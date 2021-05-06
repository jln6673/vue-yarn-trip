import Vue from 'vue'
import W from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant' // 引入Vant插件 npm i vant -S
import 'vant/lib/index.css' // 引入vant对应的css
import Rem from '@/assets/js/rem.js' // 引入remjs
import Axios from 'axios' // 引入axios插件

Vue.prototype.axios = Axios // 把数据请求的axios方法绑定在vue的原型对象上
Vue.use(Rem)
Vue.use(Vant) // 调用Vue.use() 使用vant插件

Vue.config.productionTip = false
// 注释双斜线后需要一个空格 Expected space or tab after '//' in comment
// 文件最后需要一个换行 Newline required at end of file but not found
// 不允许有多的换行 More than 1 blank line not allowed，文件结束位置不允许多个换行Too many blank lines at the end of file. Max of 0 allowed
// 属性名后的: 需要加个空格 Missing space before value for key
// 不允许多于的空格 Trailing spaces not allowed
new Vue({
  router,
  store,
  render: h => h(W)
}).$mount('#app')
