import Admin from '@/views/Power/Admin'
import Branch from '@/views/Power/Branch'
import Operation from '@/views/Power/Operation'
import Diction from '@/views/Power/Diction'

var admin = [{
        path: '/admin',
        component: Admin
    },
    {
        path: '/branch',
        component: Branch
    },
    {
        path: '/operation',
        component: Operation
    },
    {
        path: '/diction',
        component: Diction
    },
]

export default admin