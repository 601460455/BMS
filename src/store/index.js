import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false
  },
  mutations: {
    setlogin(state,arg){
      state.isLogin=arg
    }
  },
  actions: {
    setlogin2(context,arg){
      context.commit('setlogin',arg)
    }
  },
  modules: {
  }
})
