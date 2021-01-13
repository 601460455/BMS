import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import Login from '@/views/ShouYe/Login.vue'
import VCharts from 'v-charts'
=======
import axios from '@/api/http'
import VCharts from 'v-charts'
Vue.prototype.$http = axios

>>>>>>> 9c776eae452240d05cf94920a1cb4c90d6cbc78e
Vue.config.productionTip = false
Vue.use(VCharts)

Vue.use(VCharts)


new Vue({
<<<<<<< HEAD
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
=======
    router,
    store,
    render: h => h(App)
}).$mount('#app')
>>>>>>> 9c776eae452240d05cf94920a1cb4c90d6cbc78e
