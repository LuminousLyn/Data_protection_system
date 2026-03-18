import {createRouter,createWebHistory} from "vue-router";
import home from '../views/home.vue'

const routes= [

    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => home,
        redirect: "/home/mine",
        children:[
            {
                path:'/home/mine',
                component: () => import ('../views/mine.vue')
            },
            {
                path:'/home/upload',
                component: () => import ('../views/upload.vue')
            },
            {
                path:'/home/browse',
                component: () => import ('../views/browse.vue')
            },
            {
                path:'/home/check',
                component: () => import ('../views/check.vue')
            },
        ]
    },


]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router
