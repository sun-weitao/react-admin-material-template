import Layout from './layout/index'
import Home from './views/home/index'
import Login from './views/login/index'
import Table from './views/table/index'
export const routers = [
    {
        path:"/",
        name:"Index",
        exact: true,
        layout:Layout,
        component:Home
    },
    {
        path:"/table",
        name:"table",
        exact:true,
        layout:Layout,
        component:Table
    },
    {
        path:'/login',
        name:"Login",
        exact: true,//關鍵
        component:Login
    }
]

