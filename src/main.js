//引入Vue框架
import { createApp } from 'vue'
import App from './App.vue'
//引入路由，自动会寻找index.js
import Router from './router'
import ElementPlus from "element-plus"
import axios from 'axios'
import "element-plus/theme-chalk/index.css"

//自动创建Vue
const app=createApp(App)
app.use(ElementPlus)
app.use(Router)
//mount手动挂载到id为app2的dom中的意思
//需要注意的是：该方法是直接挂载到入口文件index.html 的 id=app2 的dom 元素上的
app.mount('#app2')
//关闭生产模式下给出的提示
app.config.productionTip=false
//将axios加载到原型上
app.config.globalProperties.$axios=axios