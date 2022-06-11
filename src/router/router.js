//导入路由
import VueRouter from "vue-router";
//配置路由
let router = new VueRouter({
    routes:[
        {path: '/',redirect:"/index"},//默认页
        //这里的path就是映射，import里面的就是要映射的 vue文件
        //配置好了之后在域名后面直接添加 /index 就可以访问page/index.vue了
        {path:'/index',component:() => import("@/page/index")},
        {path: '/login',component:() => import("@/page/login")}
    ],
    model:history
})
//最后一定要导出路由，在main.js中还需要这个router对象
export default router

