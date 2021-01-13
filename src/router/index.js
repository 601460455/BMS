import Vue from 'vue'
import VueRouter from 'vue-router'
import Manage from './routers/manage'
Vue.use(VueRouter)

import lessee from './routers/lessee'

import power from './routers/power'
import ShouYe from './routers/shouye'
import Login from '@/views/ShouYe/Login'

const routes = [
    {
        path:'/login',
        component:Login
    },
    {   
        path:'/',
        redirect: '/homepage',
    },
    ...power,
    ...ShouYe,
    ...Manage,
    ...lessee 
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router