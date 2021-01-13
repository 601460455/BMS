import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import lessee from './routers/lessee'
import lesseelist from '@/views/Lessee/LesseeList'
const routes = [{
        path: '/',
        component: lesseelist
    },
    ...lessee
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router