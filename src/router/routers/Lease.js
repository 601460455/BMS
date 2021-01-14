import manage from '@/views/Lease/Manage'
import auction from '@/views/Lease/Auction'


var Lease = [{
        path: '/manage',
        component: manage
    },
    {
        path: '/auction',
        component: auction
    },
    
]

export default Lease