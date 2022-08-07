import { createApp } from 'vue'
import {createRouter,createWebHistory} from "vue-router/dist/vue-router";
import App from './App.vue'
import LogIn from "@/view/Login";

const router = createRouter(
    {
        history:createWebHistory(),
        routes:[
            {path:'/login', component:LogIn},
            {path:'/',redirect:"/login"}
        ]
    }
)
createApp(App).use(router).mount('#app')
