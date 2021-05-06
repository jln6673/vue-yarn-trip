import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const city = localStorage.cun ? localStorage.cun : '郑州'
export default new Vuex.Store({
  state: { // 相当于组件中的data，表示仓库中公用的数据
    abc: city
  },
  actions: { // 组件内通过dispatch方法传到此属性内，（ctx,传的参数），可以请求外部数据，通过commit方法提交给mutations属性
    act (contxt, nm) {
      contxt.commit('change', nm)
    }
  },
  mutations: { // 可以修改state中的数据状态，（state，传的参数）
    change (state, nm) {
      state.abc = nm
    }
  }
})
