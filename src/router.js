import Home from './views/home/index'
import Login from './views/login/index'
export const routers = [
    {
        path:"/",
        name:"Index",
        exact: true,
        component:Home
    },
    {
        path:'/login',
        name:"Login",
        exact: true,//關鍵子
        component:Login
    }
]

