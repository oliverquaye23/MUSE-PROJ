import { createRouter, createWebHistory } from "vue-router";
import landingpage from "@/components/landingpage.vue";
import login from "@/components/login.vue";
import signup from "@/components/signup.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: '/',
            name: 'Home',
            component: landingpage
        },
        {
            path: '/login',
            name: 'signin',
            component: login
        },
        {
            path: '/signup',
            name: 'signup',
            component: signup
        }
    ]
})

export default router;