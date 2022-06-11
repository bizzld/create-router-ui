import Vue from 'vue'


import App from './App.vue'



import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from "vue-router";
Vue.use(VueRouter)



Vue.use(ElementUI)
//说明：在import 到from 之间的名字可以随便命名，建议规范命名







Vue.config.productionTip = false

import  router from "@/router/router"

new Vue({
  render: h => h(App),
  router

}).$mount('#app')
