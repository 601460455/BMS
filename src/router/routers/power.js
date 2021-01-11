import Admin from '@/views/Power/Admin'
import Branch from '@/views/Power/Branch'
import Limit from '@/views/Power/Limit'
import Operation from '@/views/Power/Operation'

var admin = [{
        path: '/admin',
        component: Admin
    },
    {
        path: '/branch',
        component: Branch
    },
    {
        path: '/limit',
        component: Limit
    },
    {
        path: '/operation',
        component: Operation
    },
]

export default admin