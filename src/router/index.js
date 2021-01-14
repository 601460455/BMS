import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Lease from './routers/Lease'
import auction from '@/views/Lease/Auction'

const routes = [{
        path: '/',
        component: auction
    },
    ...Lease
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router