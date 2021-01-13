import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import power from './routers/power'
const routes = [
    ...power
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router