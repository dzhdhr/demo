import { createApp } from 'vue'
import {createRouter,createWebHistory} from "vue-router/dist/vue-router";
import App from './App.vue'
import LogIn from "@/view/Login";
import adminPage from "@/view/admin";

const router = createRouter(
    {
        history:createWebHistory(),
        routes:[
            {path:'/login', component:LogIn},
            {path:'/',redirect:"/login"},
            {path:"/admin",component:adminPage}
        ]
    }
)
createApp(App).use(router).mount('#app')
