import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/api/http'
import VCharts from 'v-charts'
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(VCharts)


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')