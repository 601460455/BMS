import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import power from './routers/power'
import limit from '@/views/Power/Limit'
import ShouYe from './routers/shouye'
import Login from '@/views/ShouYe/Login'
import Manage from './routers/manage'

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
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router