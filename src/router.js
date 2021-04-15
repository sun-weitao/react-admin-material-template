import Layout from './layout/index'
import Home from './views/home/index'
import Login from './views/login/index'
import Table from './views/table/index'
import SubTable from './views/table/sub-table/index'
export const routers = [  
    {
        path:'/login',
        name:"Login",
        exact: true,//關鍵
        component:Login
    },
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
        component:Table,
        children:[
            {   
                path:'/sub-table',
                name:'sub-table',
                exact:true,
                component:SubTable
            }
        ]
    },
]
