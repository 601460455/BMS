import WeChat from '@/views/Lessee/WeChat'
import LesseeList from '@/views/Lessee/LesseeList'
import Class from '@/views/Lessee/Class'


var admin = [{
        path: '/wechat',
        component: WeChat
    },
    {
        path: '/lesseelist',
        component: LesseeList
    },
    {
        path: '/class',
        component: Class
    },
    
]

export default admin