//引入页面组件，命名为HelloWorld。@代表绝对路径
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Home from '@/components/Home'
import News from '@/components/News'
import One from '@/pages/One'
import Two from '@/pages/Two'
import Three from '@/pages/Three'

//引入Vue-router路由依赖
import { createRouter, createWebHistory } from "vue-router"

//定义路由设置，注意这里是一个数组
const routes = [
    //每一个链接都是一个对象
    {
        //path表示链接路径，这里把默认的8080设置链接到HelloWorld.vue组件
        path: '/',
        //访问localhost:8081时会自动跳转到/home
        // redirect:'/home',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path:'/hi',
        name:'Hi',
        component: Hi
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children:[
            {
                path: 'one',
                name: 'One',
                component: One
            },
            {
                path:'two/:id/:name', // 子页面2
                component:Two
            },
            {
                path:'three/:id/:name', // 子页面3
                name: 'three',
                component: Three
            }
        ]
    },
    {
        path: '/news',
        name: 'News',
        component: News
    }
]

//定义路由配置，注意export导出，只有导出了别的文件才能import导入
export const router = createRouter({
    //createWebHistory路由模式路径不带#号,createWebHashHistory路由模式路径带#号，而且默认是Hash
    history: createWebHistory(),
    routes: routes
})

export default router


