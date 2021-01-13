import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Login from '@/views/ShouYe/Login.vue'
import VCharts from 'v-charts'
Vue.config.productionTip = false
Vue.use(VCharts)

new Vue({
  router,
  data:{
    isLogin:false
  },
  store,
  render: function(h){
    console.log(this.$store.state.isLogin)
    return h(this.$store.state.isLogin ? App : Login)
    
  }
  // render: (h) => h(App),

}).$mount('#app')
